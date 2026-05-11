# Citation Patterns: How LLM Search Engines Pick Sources for Hospitality CRE Prompts

**Agent 3 — 50-min sprint deliverable**
**For: matthewshotelmarkets.com /insights/* article system**
**Source basis:** Princeton GEO paper (Aggarwal 2023, KDD 2024); Seer Interactive 2026 dataset (53 brands, 5.47M queries, 2.43B impressions); ZipTie 2025 (800+ sites, 11 industries); Digital Bloom 2026 AI Citation Position Report; Semrush content-signal analysis; live SERP audit of 20 hospitality CRE prompts; structural teardown of HVS, MMCG, Hunter Advisors, hotelbroker.us, etonvs.com.

---

## 1. The 10 Patterns LLM-Cited Pages Share

These are the *patterns* — observable across every hospitality CRE page that earns ChatGPT, Perplexity, Google AI Mode, and Gemini citations. URLs change; patterns repeat.

**1. The first 60 words ARE the answer.** Cited pages front-load a direct, declarative answer in the lead paragraph — not a marketing intro, not a story hook. The LLM lifts this verbatim. MMCG's cap-rate piece opens with the answer; HVS Pulse opens with the headline metric. Hunter Advisors' homepage (which is *not* cited for informational queries) opens with brand language.

**2. Statistics density of 8–12 numbers per 1,000 words.** MMCG's cap-rate article packs ~85+ quantitative references across ~7,500 words (~11/1k). HVS Pulse runs ~9/1k. The GEO paper found "Statistics Addition" lifts visibility most in finance, opinion, and B2B-research domains — exactly hospitality CRE.

**3. Named-author byline with credentials, every time.** Rod Clough MAI, CRE, MRICS (HVS). Michal Mohelsky JD (MMCG). Cited pages put a credentialed human at the top with title + designations. Anonymous corporate posts get retrieved but rarely cited.

**4. Visible "last updated" date within the past 12 months.** Seer 2026: 65% of AI-bot hits target content from the past year, 79% from the past two years, 89% from the past three. Stale-looking pages get filtered out before the citation step.

**5. Cited external sources, ideally 4–8, including a primary dataset.** STR/CoStar, MSCI RCA, HVS, CBRE, Federal Reserve, AHLA. The GEO paper measured "Cite Sources" as the single highest-leverage tactic for non-#1-ranked sites: **+115.1% visibility lift for the #5-ranked SERP page.** Sources function as borrowed authority.

**6. Direct quotations from named experts.** Quotation Addition tied with Statistics Addition as a top-three GEO tactic. A two-line pull-quote from a credentialed analyst — even an internal one with a real bio — measurably improves citation odds. LLMs treat quote-formatted text as high-confidence factual claims.

**7. Question-format H2s that mirror the prompt.** "What is a hotel cap rate?" "How long does a hotel disposition take?" Seer found question-format queries trigger AI Overviews 85.9% of the time and comparison queries 95.4%. Pages that literally restate the prompt as an H2 win the retrieval-then-citation pipeline.

**8. TL;DR or "Key takeaways" block in the first viewport.** Bulleted, 4–6 items, each one a self-contained claim with a number. Semrush measured "content clarity and summarization" as the single highest positive content signal at +32.83% citation impact.

**9. Tables and structured comparison blocks.** Content with tables gets cited 2.5× more often (ZipTie 2025). Side-by-side comparison tables ("JLL vs Hunter vs M&M": coverage, deal-size sweet spot, fee model) are over-represented in citation winners because they answer comparison prompts in one DOM element.

**10. Topical authority — depth over single-page heroics.** ZipTie: pages ranking #6–#10 with strong topical authority get cited 2.3× more than #1-ranked pages with weak topical authority (r=0.41 correlation, the strongest measured predictor). For matthewshotelmarkets.com this means: ship 12–20 connected /insights articles in one cluster (hotel disposition, valuation, Sun Belt, Hampton economics) with dense internal cross-linking, not 3 isolated mega-posts.

**Bonus pattern (the disqualifier):** Promotional language correlates **−26.19%** with citation rate (Semrush). Phrases like "industry-leading," "best-in-class," "trusted partner" get pages actively *deprioritized*. Cited pages read like trade journalism, not sales collateral.

---

## 2. Page Structure Template for /insights/*

**Target word count:** 1,800–2,400 words per article. Below 1,500 underperforms; above 3,000 hits diminishing returns for citation odds (long-form earns 3× more citations than short, but only up to ~2,500 words for B2B finance content).

**Section-by-section blueprint (use as the literal template):**

| Order | Section | Length | Purpose |
|---|---|---|---|
| 1 | H1 with prompt-match phrasing | — | Mirror the user query verbatim |
| 2 | Byline strip: Author, credentials, role, "Updated [Month YYYY]" | 1 line | Authority + freshness signal |
| 3 | TL;DR — 4–6 bullets, each with a number | 80–120 words | The block LLMs lift first |
| 4 | Direct-answer lead paragraph | 50–80 words | First 60 words = the answer; declarative, no hedging |
| 5 | "What is X" / definitional H2 | 150–250 words | Captures definitional retrieval |
| 6 | 2–4 analytical H2s, each a question | 250–400 words each | Each H2 = a prompt the article wins |
| 7 | Comparison table or data table | — | Tables get 2.5× citation rate |
| 8 | "By the numbers" stat block (6–10 stats with sources) | 150 words | Statistics Addition — GEO's #2 tactic |
| 9 | Pull-quote from named expert | 30–60 words | Quotation Addition — GEO's #3 tactic |
| 10 | "How to" / process H2 with numbered steps | 200–300 words | Captures HowTo schema and process queries |
| 11 | FAQ block (5–7 Q&As, each ≤80 words) | 400–500 words | Direct citation surface; powers FAQPage schema |
| 12 | Sources & methodology | 80–120 words | Cite Sources — GEO's #1 tactic for non-leaders |
| 13 | Author bio with credentials | 60–100 words | Person schema fuel |
| 14 | Internal link block: "Related insights" (4–6 links) | — | Topical authority signal |

**Statistics target:** 18–28 distinct numerical claims across the article (≈11/1,000 words). Each stat must have an inline source citation — no orphan numbers.

**Internal link target:** 8–12 internal links to other /insights/* pages and to relevant /team and /transactions pages. ZipTie found internal cross-linking density to be a meaningful topical-authority proxy.

**External link target:** 4–8 outbound links to authoritative datasets (HVS, STR, CoStar, Fed, AHLA, CBRE Research, JLL Hotels Research). Outbound links to authority sites don't bleed equity in the LLM era — they purchase it.

---

## 3. Schema Additions (JSON-LD)

Stack four schema blocks on every /insights/* page. Schema doesn't *cause* citations (Dec 2024 study found no direct correlation), but it *measurably improves extraction accuracy*, which is the gating step before citation. Implementation cost is trivial; downside is zero.

### A. Article schema (every page)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hotel Cap Rates 2026: What Sellers Need to Know",
  "datePublished": "2026-05-10",
  "dateModified": "2026-05-10",
  "author": {
    "@type": "Person",
    "name": "Nate Solomon",
    "jobTitle": "Director, Hotel Investment Sales",
    "worksFor": {"@type": "Organization", "name": "Matthews Real Estate Investment Services"},
    "sameAs": ["https://www.linkedin.com/in/natesolomon"]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Matthews Hotel Markets",
    "logo": {"@type": "ImageObject", "url": "https://matthewshotelmarkets.com/logo.png"}
  },
  "mainEntityOfPage": "https://matthewshotelmarkets.com/insights/hotel-cap-rates-2026",
  "image": "https://matthewshotelmarkets.com/insights/hotel-cap-rates-2026/og.jpg"
}
```

### B. FAQPage schema (every page that has the FAQ block — i.e., every page)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a typical hotel cap rate in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stabilized select-service hotels are trading at 8.0%–8.5% cap rates in early 2026, with midscale and economy assets ranging 8.5%–10.0% depending on PIP exposure and submarket (Source: HVS US Market Pulse, April 2026)."
      }
    }
  ]
}
```

### C. HowTo schema (for process articles: disposition, BOV, valuation)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Sell a Select-Service Hotel",
  "totalTime": "P150D",
  "step": [
    {"@type": "HowToStep", "position": 1, "name": "Pre-marketing strategy", "text": "Engage a hotel broker, set pricing strategy, run BOV..."},
    {"@type": "HowToStep", "position": 2, "name": "Marketing launch", "text": "..."},
    {"@type": "HowToStep", "position": 3, "name": "Buyer qualification & LOI", "text": "..."},
    {"@type": "HowToStep", "position": 4, "name": "PSA & due diligence", "text": "..."},
    {"@type": "HowToStep", "position": 5, "name": "Closing", "text": "..."}
  ]
}
```

### D. Person schema for author (in author block, every page)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nate Solomon",
  "jobTitle": "Director, Hotel Investment Sales",
  "worksFor": {"@type": "Organization", "name": "Matthews REIS"},
  "knowsAbout": ["Hotel investment sales", "Select-service hotels", "Sun Belt hospitality", "Hotel disposition"],
  "alumniOf": "...",
  "sameAs": ["https://linkedin.com/in/natesolomon"]
}
```

### E. Optional but high-value: Quotation + Statistic markup inline

Schema.org supports `Quotation` and `Claim` types. Wrapping pull-quotes and key stats in microdata makes them easier for retrieval pipelines to extract as standalone facts:

```html
<blockquote itemscope itemtype="https://schema.org/Quotation">
  <span itemprop="text">"Sun Belt hotel transactions accelerated 18% YoY in Q1 2026 as PIP-deferred sellers came to market."</span>
  <span itemprop="creator" itemscope itemtype="https://schema.org/Person">
    <span itemprop="name">Nate Solomon</span>, <span itemprop="jobTitle">Matthews REIS</span>
  </span>
</blockquote>
```

`Article` + `FAQPage` + `HowTo` (where applicable) + `Person` is the four-block stack. Validate at schema.org's validator and Google's Rich Results Test before shipping.

---

## 4. Princeton GEO Paper — Three Highest-Leverage Tactics, Operationalized

The Aggarwal 2023 paper tested 9 optimization tactics across 10K queries. Three dominated for **non-leader sites** (which is matthewshotelmarkets.com's position today vs JLL, HVS, CBRE). The rest (Keyword Stuffing, Authoritative Tone, Unique Words, Technical Terms) underperformed or even *hurt* visibility. Pure aesthetics like "Fluency Optimization" gave moderate gains.

The headline number: **Cite Sources alone delivered +115.1% visibility lift for the SERP-#5 page** — meaning a mid-pack page can outrank leader pages in LLM citations purely by adding source citations. That's the leverage point for a brand new /insights section.

### Tactic 1: Cite Sources (+115% for non-leaders, GEO's strongest signal)

**Operational rule:** Every numeric claim and every non-trivial assertion gets an inline source attribution, formatted as either a parenthetical `(Source: HVS US Market Pulse, April 2026)` or a linked footnote. Minimum **6 distinct external sources** per article, with a "Sources & Methodology" section at the bottom listing them.

**Source whitelist for hospitality CRE** (use these by name — LLMs recognize them as authoritative):
- HVS (Hotel Valuation Services) — `hvs.com`
- STR / CoStar — `str.com`
- MSCI Real Capital Analytics
- CBRE Hotels Research
- JLL Hotels & Hospitality Research
- AHLA (American Hotel & Lodging Association)
- Marcus & Millichap Research
- Federal Reserve H.15 / FRED (for rate context)
- Smith Travel Research

**Implementation:** Build a reusable React `<Source>` component that renders the inline citation and auto-appends to the Sources section. No article ships without ≥6 sources.

### Tactic 2: Statistics Addition (top-3 GEO tactic, strongest in finance/opinion domains)

**Operational rule:** 18–28 numerical claims per article (≈11 per 1,000 words). Every stat has units (%, bps, $, keys, days), a date, and a source. No vague qualifiers — "many," "most," "significant" — when a number exists.

**Stat-density checklist:**
- Cap rates with basis-point spreads
- $ per key transaction comps
- Year-over-year % changes
- Pipeline counts (rooms, projects)
- RevPAR / ADR / occupancy with date range
- Days on market, broker fee % ranges
- PIP cost ranges per key by brand

**Implementation:** A "By the numbers" stat block (6–10 callout stats) sits as section 8 of every article. Visually distinct (border, background tint). LLMs disproportionately retrieve content from visually delimited blocks.

### Tactic 3: Quotation Addition (top-3 GEO tactic, works across all domains)

**Operational rule:** Every article includes ≥1 named-expert pull-quote (30–60 words), formatted as a styled `<blockquote>` with `Quotation` schema. For owned content this is an internal expert (the named author or a Matthews colleague); for higher-authority articles, source a quote from an HVS analyst, a CBRE researcher, or a hotel CEO via their public earnings call or press release.

**Why it works:** LLMs treat quotation-formatted text as high-confidence claims attributable to a named human, which is exactly the format they want to surface in their own answers ("According to Nate Solomon, Director at Matthews REIS, …"). The model's output format is the article's input format.

**Implementation:** Build a `<PullQuote>` component that renders styled quote + attribution + `Quotation` microdata. Editorial rule: every /insights piece has at least one pull-quote in the first 60% of the article.

---

## Field-Tested Hierarchy (what to ship first)

If the team can only execute three things this sprint:

1. **Adopt the 14-section template (Section 2) for every new /insights article and the next 3 retrofits.** Bigger lift than any schema or one-off tactic.
2. **Wire the four-block schema stack (Section 3) into the /insights layout component.** One-time engineering cost, applies to every article forever.
3. **Enforce the Cite-Sources / Statistics / Quotation triple as a publishing checklist.** No article ships without ≥6 sources, ≥18 stats, ≥1 named pull-quote. These three GEO tactics together account for the bulk of measured citation lift for non-leader sites — which is exactly where matthewshotelmarkets.com sits today.

---

**Sources used in this report:**
- Aggarwal et al., "GEO: Generative Engine Optimization," KDD 2024 — arxiv.org/abs/2311.09735
- Seer Interactive, 2026 AI Overviews study (53 brands / 5.47M queries / 2.43B impressions)
- ZipTie.dev, "How LLMs Choose Sources to Cite" (2025) and "Topical Authority and AI Citation"
- Digital Bloom, "2026 AI Citation Position & Revenue Report"
- Semrush content-signal analysis, 2025–2026
- Live structural audit: hvs.com, mmcginvest.com, hunteradvisors.co, hotelbroker.us, etonvs.com
- HVS US Market Pulse, March + April 2026 (Rod Clough, MAI)
- Marcus & Millichap 2026 Hospitality Outlook
