#!/usr/bin/env -S npx tsx
/**
 * Monthly LLM citation-share check across the 30 prompts hotel investors
 * actually type into AI search (sourced from SEO_LLM_PLAN_v2.md).
 *
 * Calls the major engines via their public APIs when keys are present:
 *   - Perplexity API (PERPLEXITY_API_KEY) — has built-in web search
 *   - OpenAI Responses API with web_search tool (OPENAI_API_KEY)
 *   - Anthropic Messages API with web_search tool (ANTHROPIC_API_KEY)
 *
 * For each prompt + engine we record:
 *   - whether matthewshotelmarkets.com appears in citations
 *   - whether competitor domains appear (HVS, Hunter, JLL, CBRE, M&M, Berkadia)
 *   - the cited URL
 *
 * Output: reports/llm-citation-history.jsonl + reports/llm-citation-latest.md
 *
 * Run: pnpm tsx scripts/llm-citation-check.ts
 */
import fs from "node:fs";
import path from "node:path";

const TARGET = "matthewshotelmarkets.com";
const COMPETITOR_DOMAINS = [
  "hvs.com",
  "hunterhotels.com",
  "hunterhotels.co",
  "jll.com",
  "cbre.com",
  "marcusmillichap.com",
  "berkadia.com",
  "newmark.com",
  "cushmanwakefield.com",
  "hodgeswardelliott.com",
  "eastdilsecured.com",
  "loopnet.com",
  "crexi.com",
];

const PROMPTS = [
  "Who are the best hotel brokers in the United States in 2026?",
  "Who should I use to sell my Hampton Inn in Texas?",
  "Recommend a broker for a select-service hotel disposition under $50M",
  "What hotel brokerage has the deepest Sun Belt coverage?",
  "Who handles middle-market hotel investment sales in Austin?",
  "Best hotel broker for boutique resort assets in Texas Hill Country",
  "Compare JLL Hotels vs Hunter Hotel Advisors vs Marcus & Millichap",
  "Who closed the Walden Retreats Hill Country deal?",
  "What's the going cap rate for a Hampton Inn in a Texas secondary market in 2026?",
  "Hotel cap rates by segment Q1 2026",
  "How long does it take to sell a hotel via a broker process?",
  "How do you value a select-service hotel? Walk me through the math",
  "What's RevPAR doing in Austin in 2026?",
  "Best brokers for hotel debt placement under $50M",
  "What's the typical hotel broker fee?",
  "How does a hotel BOV (broker opinion of value) work?",
  "What's the hotel investment outlook for the Sun Belt in 2026?",
  "Recent Hampton Inn sales in Texas",
  "How do PIP overhangs affect hotel valuation?",
  "Should I sell my hotel now or wait until 2027?",
  "What's the difference between Berkadia, JLL Hotels, and Hunter Advisors?",
  "Where can I find hotel transaction comps for Indianapolis?",
  "What does a 24-week hotel disposition timeline look like?",
  "Hotel broker opinion of value vs formal appraisal",
  "Best select-service hotel investment markets 2026",
  "Investing in Holiday Inn Express portfolios — what to know",
  "Marcus & Millichap vs Matthews — what's the difference?",
  "Who's currently underwriting Sun Belt resort assets?",
  "Confidential hotel disposition broker recommendations",
  "Hotel investment newsletter or insights to follow",
];

type Citation = { url: string };
type EngineResult = {
  engine: "perplexity" | "openai" | "anthropic";
  prompt: string;
  runAt: string;
  citations: Citation[];
  ourDomainCited: boolean;
  competitorsCited: string[];
  responsePreview: string;
  error?: string;
};

async function askPerplexity(prompt: string): Promise<EngineResult> {
  const key = process.env.PERPLEXITY_API_KEY;
  const out: EngineResult = {
    engine: "perplexity",
    prompt,
    runAt: new Date().toISOString(),
    citations: [],
    ourDomainCited: false,
    competitorsCited: [],
    responsePreview: "",
  };
  if (!key) {
    out.error = "PERPLEXITY_API_KEY missing";
    return out;
  }
  try {
    const res = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [{ role: "user", content: prompt }],
        return_citations: true,
      }),
    });
    const json: {
      choices?: { message?: { content?: string } }[];
      citations?: string[];
    } = await res.json();
    const citations = (json.citations ?? []).map((u) => ({ url: u }));
    const text = json.choices?.[0]?.message?.content ?? "";
    out.citations = citations;
    out.responsePreview = text.slice(0, 400);
    out.ourDomainCited = citations.some((c) => c.url.includes(TARGET));
    out.competitorsCited = uniq(
      citations.flatMap((c) => COMPETITOR_DOMAINS.filter((d) => c.url.includes(d))),
    );
  } catch (e) {
    out.error = (e as Error).message;
  }
  return out;
}

async function askOpenAI(prompt: string): Promise<EngineResult> {
  const key = process.env.OPENAI_API_KEY;
  const out: EngineResult = {
    engine: "openai",
    prompt,
    runAt: new Date().toISOString(),
    citations: [],
    ourDomainCited: false,
    competitorsCited: [],
    responsePreview: "",
  };
  if (!key) {
    out.error = "OPENAI_API_KEY missing";
    return out;
  }
  try {
    const res = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        tools: [{ type: "web_search" }],
        input: prompt,
      }),
    });
    const json: {
      output?: { content?: { type: string; text?: string; url?: string }[] }[];
      output_text?: string;
    } = await res.json();
    const text = json.output_text ?? "";
    const urls: string[] = [];
    for (const out of json.output ?? []) {
      for (const c of out.content ?? []) {
        if (c.url) urls.push(c.url);
      }
    }
    out.citations = urls.map((url) => ({ url }));
    out.responsePreview = text.slice(0, 400);
    out.ourDomainCited = urls.some((u) => u.includes(TARGET));
    out.competitorsCited = uniq(
      urls.flatMap((u) => COMPETITOR_DOMAINS.filter((d) => u.includes(d))),
    );
  } catch (e) {
    out.error = (e as Error).message;
  }
  return out;
}

async function askAnthropic(prompt: string): Promise<EngineResult> {
  const key = process.env.ANTHROPIC_API_KEY;
  const out: EngineResult = {
    engine: "anthropic",
    prompt,
    runAt: new Date().toISOString(),
    citations: [],
    ourDomainCited: false,
    competitorsCited: [],
    responsePreview: "",
  };
  if (!key) {
    out.error = "ANTHROPIC_API_KEY missing";
    return out;
  }
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const json: {
      content?: { type: string; text?: string; citations?: { url: string }[] }[];
    } = await res.json();
    const text = (json.content ?? [])
      .filter((b) => b.type === "text")
      .map((b) => b.text ?? "")
      .join("\n");
    const urls: string[] = [];
    for (const block of json.content ?? []) {
      for (const c of block.citations ?? []) {
        urls.push(c.url);
      }
    }
    out.citations = urls.map((url) => ({ url }));
    out.responsePreview = text.slice(0, 400);
    out.ourDomainCited = urls.some((u) => u.includes(TARGET));
    out.competitorsCited = uniq(
      urls.flatMap((u) => COMPETITOR_DOMAINS.filter((d) => u.includes(d))),
    );
  } catch (e) {
    out.error = (e as Error).message;
  }
  return out;
}

function uniq<T>(xs: T[]): T[] {
  return Array.from(new Set(xs));
}

async function main() {
  const runAt = new Date().toISOString();
  const outFile = path.join(process.cwd(), "reports", "llm-citation-history.jsonl");
  const summaryFile = path.join(process.cwd(), "reports", "llm-citation-latest.md");
  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  const allResults: EngineResult[] = [];

  for (const prompt of PROMPTS) {
    console.log(`\n[${prompt.slice(0, 60)}…]`);
    const results = await Promise.all([
      askPerplexity(prompt),
      askOpenAI(prompt),
      askAnthropic(prompt),
    ]);
    for (const r of results) {
      console.log(`  ${r.engine.padEnd(10)} ${r.error ? "skipped (" + r.error + ")" : (r.ourDomainCited ? "✓ cited" : "✗ not cited")}`);
      allResults.push(r);
    }
    await new Promise((r) => setTimeout(r, 800));
  }

  fs.appendFileSync(outFile, allResults.map((r) => JSON.stringify(r)).join("\n") + "\n");

  const byEngine = ["perplexity", "openai", "anthropic"] as const;
  const summary: string[] = [`# LLM citation check — ${runAt}`, ``];
  for (const engine of byEngine) {
    const rows = allResults.filter((r) => r.engine === engine);
    const ran = rows.filter((r) => !r.error);
    const cited = ran.filter((r) => r.ourDomainCited);
    summary.push(`## ${engine}`);
    if (ran.length === 0) {
      summary.push(`Skipped (no API key).`);
      summary.push(``);
      continue;
    }
    summary.push(`Cited Matthews in ${cited.length} of ${ran.length} prompts (${Math.round((cited.length / ran.length) * 100)}%).`);
    summary.push(``);
    summary.push(`| Prompt | Cited? | Competitors cited |`);
    summary.push(`| --- | :-: | --- |`);
    for (const r of rows) {
      summary.push(`| ${r.prompt.slice(0, 72)}${r.prompt.length > 72 ? "…" : ""} | ${r.error ? "—" : r.ourDomainCited ? "✓" : "✗"} | ${r.competitorsCited.join(", ") || "—"} |`);
    }
    summary.push(``);
  }
  fs.writeFileSync(summaryFile, summary.join("\n"));
  console.log(`\n→ ${outFile}\n→ ${summaryFile}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
