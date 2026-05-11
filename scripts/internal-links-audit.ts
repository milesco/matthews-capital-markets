#!/usr/bin/env -S npx tsx
/**
 * Internal-link audit. Verifies that every market → relevant brands and
 * every brand → relevant markets have a contextual cross-link in
 * the rendered HTML. Catches dropped <Link> tags from refactors.
 *
 * Walks every URL in sitemap, fetches the page, parses internal hrefs,
 * computes coverage matrix, writes:
 *   reports/internal-links.json   — full link graph
 *   reports/internal-links.md     — coverage summary + missing edges
 *
 * Run: pnpm tsx scripts/internal-links-audit.ts            # against prod
 *      pnpm tsx scripts/internal-links-audit.ts --local    # localhost:3000
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
const TARGET_DOMAIN = "matthewshotelmarkets.com";

type Edge = { from: string; to: string };
type PageReport = { url: string; outboundInternal: string[]; missing: string[] };

function urls(): string[] {
  const u: string[] = [
    "/", "/listings", "/closed", "/team", "/insights", "/process", "/contact",
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

function extractHrefs(html: string): string[] {
  const re = /href="([^"]+)"/g;
  const out = new Set<string>();
  let m;
  while ((m = re.exec(html)) !== null) {
    let href = m[1];
    try {
      if (href.startsWith("//")) continue;
      if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) continue;
      const u = new URL(href, base);
      if (!u.hostname.includes(TARGET_DOMAIN) && !u.hostname.includes("localhost")) continue;
      href = u.pathname;
      out.add(href);
    } catch {
      // ignore malformed
    }
  }
  return Array.from(out);
}

async function main() {
  const urlList = urls();
  const reports: PageReport[] = [];
  const edges: Edge[] = [];

  for (const u of urlList) {
    const full = base + u;
    process.stdout.write(`  ${u} `);
    try {
      const res = await fetch(full, { headers: { "User-Agent": "matthews-link-audit" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      const out = extractHrefs(html).filter((h) => h !== u);
      reports.push({ url: u, outboundInternal: out, missing: expectedFor(u, out) });
      for (const o of out) edges.push({ from: u, to: o });
      console.log(`${out.length} internal links`);
    } catch (e) {
      console.log(`ERR ${(e as Error).message}`);
      reports.push({ url: u, outboundInternal: [], missing: ["FETCH_FAILED"] });
    }
  }

  fs.mkdirSync(path.join(process.cwd(), "reports"), { recursive: true });
  fs.writeFileSync(
    path.join(process.cwd(), "reports", "internal-links.json"),
    JSON.stringify({ runAt: new Date().toISOString(), base, edges, reports }, null, 2),
  );

  const missingTotal = reports.reduce((s, r) => s + r.missing.length, 0);
  const md: string[] = [
    `# Internal links audit — ${new Date().toISOString()}`,
    ``,
    `Base: \`${base}\` · Pages: ${reports.length} · Edges: ${edges.length} · Missing expected: ${missingTotal}`,
    ``,
  ];
  if (missingTotal > 0) {
    md.push(`## Missing edges`);
    md.push(``);
    md.push(`| Page | Missing |`);
    md.push(`| --- | --- |`);
    for (const r of reports) {
      if (r.missing.length === 0) continue;
      md.push(`| ${r.url} | ${r.missing.join(", ")} |`);
    }
    md.push(``);
  } else {
    md.push(`## All expected internal cross-links present ✓`);
  }
  fs.writeFileSync(
    path.join(process.cwd(), "reports", "internal-links.md"),
    md.join("\n"),
  );

  console.log(`\n→ reports/internal-links.json`);
  console.log(`→ reports/internal-links.md (${missingTotal} missing edges)`);
  if (missingTotal > 0) process.exitCode = 1;
}

// Expected internal links for each route family, verified against the
// component tree. Surfaces refactors that drop a <Link>.
function expectedFor(url: string, found: string[]): string[] {
  const has = (s: string) => found.some((f) => f.startsWith(s));
  const missing: string[] = [];

  if (url.startsWith("/markets/")) {
    if (!has("/listings/")) missing.push("≥1 /listings/ link");
    if (!has("/team/")) missing.push("≥1 /team/ link");
    if (!has("/hotels-for-sale/")) missing.push("≥1 /hotels-for-sale/ link");
    if (!has("/contact")) missing.push("/contact CTA");
  }
  if (url.startsWith("/hotels-for-sale/")) {
    if (!has("/markets/")) missing.push("≥1 /markets/ link");
    if (!has("/contact")) missing.push("/contact CTA");
  }
  if (url.startsWith("/listings/")) {
    if (!has("/contact")) missing.push("/contact CTA (or omUrl)");
  }
  if (url.startsWith("/insights/")) {
    if (!has("/team/")) missing.push("byline /team/ link");
  }
  if (url === "/" || url === "/team" || url === "/listings" || url === "/closed") {
    if (!has("/insights")) missing.push("/insights link");
  }
  return missing;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
