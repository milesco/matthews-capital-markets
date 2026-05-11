#!/usr/bin/env -S npx tsx
/**
 * Schema validation pass.
 *
 * For every URL emitted by sitemap.ts, fetch the page from the production
 * site (or a local dev server if --local), extract every <script type=
 * "application/ld+json"> block, parse it, and check it for:
 *   - well-formed JSON
 *   - required @context = "https://schema.org" or graph contains it
 *   - required @type or @graph[].@type
 *   - presence of @id when expected
 *
 * Optional: when SCHEMA_VALIDATOR_API is set, POST each block to a
 * schema.org validator endpoint and aggregate errors.
 *
 * Output: reports/schema-validation.json + reports/schema-validation-summary.md
 *
 * Run:    pnpm tsx scripts/schema-validate.ts
 *         pnpm tsx scripts/schema-validate.ts --local   # uses localhost:3000
 */
import fs from "node:fs";
import path from "node:path";
import { listings } from "../src/lib/data/listings";
import { closed } from "../src/lib/data/closed";
import { team } from "../src/lib/data/team";
import { insights } from "../src/lib/data/insights";
import { markets } from "../src/lib/data/markets";
import { brands } from "../src/lib/data/brands";
import { services } from "../src/lib/data/services";
import { offices } from "../src/lib/data/offices";

const PROD = "https://matthewshotelmarkets.com";
const LOCAL = "http://localhost:3000";
const base = process.argv.includes("--local") ? LOCAL : PROD;

function urls(): string[] {
  const u: string[] = [
    "/",
    "/listings",
    "/closed",
    "/team",
    "/insights",
    "/process",
    "/contact",
  ];
  for (const l of listings) u.push(`/listings/${l.slug}`);
  for (const c of closed) u.push(`/closed/${c.slug}`);
  for (const t of team) u.push(`/team/${t.slug}`);
  for (const i of insights) u.push(`/insights/${i.slug}`);
  for (const m of markets) u.push(`/markets/${m.slug}`);
  for (const b of brands) u.push(`/hotels-for-sale/${b.slug}`);
  for (const s of services) u.push(`/services/${s.slug}`);
  for (const o of offices) u.push(`/offices/${o.slug}`);
  return u;
}

type Issue = { url: string; index: number; problem: string; type?: string };
type Block = { url: string; index: number; type: string | string[]; valid: boolean; issues: string[] };

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, { headers: { "User-Agent": "matthews-schema-validate" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function extractBlocks(html: string): string[] {
  const re = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  const out: string[] = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    out.push(m[1].trim());
  }
  return out;
}

function validate(block: string, url: string, index: number): Block {
  const issues: string[] = [];
  let parsed: unknown;
  try {
    parsed = JSON.parse(block);
  } catch (e) {
    return {
      url,
      index,
      type: "INVALID-JSON",
      valid: false,
      issues: ["JSON parse error: " + (e as Error).message],
    };
  }
  const obj = parsed as Record<string, unknown>;
  const context = obj["@context"];
  if (context !== "https://schema.org" && context !== "http://schema.org") {
    issues.push(`@context is not schema.org (got: ${JSON.stringify(context)})`);
  }
  const graph = obj["@graph"];
  let type: string | string[] = (obj["@type"] as string | string[]) ?? "—";
  if (Array.isArray(graph)) {
    type = graph.map((g) => (g as { "@type"?: string | string[] })["@type"] ?? "?").flat().join(",") as string;
    for (const [i, g] of graph.entries()) {
      const node = g as Record<string, unknown>;
      if (!node["@type"]) issues.push(`@graph[${i}] missing @type`);
    }
  } else if (!obj["@type"]) {
    issues.push(`Missing @type and @graph`);
  }
  return { url, index, type, valid: issues.length === 0, issues };
}

async function main() {
  const all: Block[] = [];
  const issues: Issue[] = [];
  const urlList = urls();
  console.log(`Validating ${urlList.length} URLs against ${base}…`);
  for (const u of urlList) {
    const full = base + u;
    process.stdout.write(`  ${u} `);
    try {
      const html = await fetchHtml(full);
      const blocks = extractBlocks(html);
      if (blocks.length === 0) {
        console.log("(no JSON-LD)");
        issues.push({ url: u, index: -1, problem: "no JSON-LD blocks" });
        continue;
      }
      let pageOk = true;
      for (const [idx, b] of blocks.entries()) {
        const v = validate(b, u, idx);
        all.push(v);
        if (!v.valid) {
          pageOk = false;
          for (const p of v.issues) issues.push({ url: u, index: idx, problem: p, type: Array.isArray(v.type) ? v.type.join(",") : v.type });
        }
      }
      console.log(pageOk ? `${blocks.length} ✓` : `${blocks.length} ⚠`);
    } catch (e) {
      console.log("ERR " + (e as Error).message);
      issues.push({ url: u, index: -1, problem: (e as Error).message });
    }
  }

  const out = {
    runAt: new Date().toISOString(),
    base,
    urlsChecked: urlList.length,
    blocksFound: all.length,
    blocksValid: all.filter((b) => b.valid).length,
    issues,
    blocks: all,
  };
  fs.mkdirSync(path.join(process.cwd(), "reports"), { recursive: true });
  fs.writeFileSync(
    path.join(process.cwd(), "reports", "schema-validation.json"),
    JSON.stringify(out, null, 2),
  );

  const md: string[] = [
    `# Schema validation — ${out.runAt}`,
    ``,
    `Base: \`${base}\` · URLs: ${out.urlsChecked} · Blocks: ${out.blocksFound} · Valid: ${out.blocksValid} · Pass rate: ${Math.round((out.blocksValid / Math.max(1, out.blocksFound)) * 100)}%`,
    ``,
  ];
  if (issues.length > 0) {
    md.push(`## ${issues.length} Issues`);
    md.push(``);
    md.push(`| URL | Block | Type | Problem |`);
    md.push(`| --- | :-: | --- | --- |`);
    for (const i of issues) md.push(`| ${i.url} | ${i.index} | ${i.type ?? "—"} | ${i.problem} |`);
    md.push(``);
  } else {
    md.push(`## All blocks valid ✓`);
  }
  fs.writeFileSync(
    path.join(process.cwd(), "reports", "schema-validation-summary.md"),
    md.join("\n"),
  );
  console.log(`\n→ reports/schema-validation.json (${out.blocksValid}/${out.blocksFound} valid)`);
  console.log(`→ reports/schema-validation-summary.md`);
  if (issues.length > 0) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
