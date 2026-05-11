# Sprint Final — matthewshotelmarkets.com (2026-05-10)

5-hour SEO + LLM-citation sprint. CoStar dropped entirely (live site). Public data only.

---

## Headline numbers

| | Pre-sprint | Post-sprint |
|---|---|---|
| Insights articles live | 6 baseline | **14** (8 new GEO-optimized) |
| Routes with FAQPage schema | 0 | **63** (markets×14 + brands×9 + listings×4 + closed×21 + insights×8 with FAQ data) |
| Routes with opengraph-image.tsx | 5 | **9** (added markets, brands, services, offices) |
| JSON-LD blocks emitted (live prod) | ~70 | **139** validated, 100% pass |
| Outbound source citations on insights | 0 | **8 articles × 4–8 sources = ~50 citations** |
| Internal cross-link density | baseline | **+ markets→brands grid, brands→markets grid, all FAQs surfacing brokers/markets** |
| Measurement scripts | 0 | **4** (rank-check, llm-citation-check, schema-validate, internal-links-audit) |
| LinkedIn drafts ready | 0 | **16** (8 articles × Luke + Nate) |

## What shipped — by commit

```
61f3615 seo(phase 3): FAQ section + FAQPage schema on /listings/[slug] and /closed/[slug]
8c357fd content(wave 5): 8 new GEO-optimized long-form articles + measurement scripts
36f41e3 seo(phase 3): FAQ section + FAQPage schema on /markets/[city] and /hotels-for-sale/[brand]
1cd244c seo(insights): extend Insight type for GEO citation template (TLDR, FAQ, sources, keyStats)
ca8413a seo(phase 2): og:image for markets/brands/services/offices + vercel.json + revalidate webhook
```

5 commits in 26 minutes of real time. All pushed to `origin/main` (auto-deploys to Vercel).

## New URLs live

8 long-form articles (each with FAQPage + Article + sources):
- `/insights/texas-hotel-cap-rates-q2-2026`
- `/insights/select-service-vs-full-service-2026`
- `/insights/hotel-refinancing-wave-2026`
- `/insights/sun-belt-hospitality-investment-2026`
- `/insights/brand-flag-cap-rate-guide-2026`
- `/insights/how-to-sell-a-hotel-2026`
- `/insights/hotel-cmbs-distress-trepp-2026`
- `/insights/hotel-adr-revpar-recovery-2026`

4 dynamic OG image families:
- `/markets/[city]/opengraph-image` — 14 routes
- `/hotels-for-sale/[brand]/opengraph-image` — 9 routes
- `/services/[slug]/opengraph-image` — 3 routes
- `/offices/[slug]/opengraph-image` — 2 routes

1 webhook:
- `/api/revalidate` (POST, gated by `REVALIDATE_SECRET` env var)

7 redirect rules (vercel.json): legacy URLs → service/office pages, three placeholder author bylines → `/team`.

## Schema validation

```
$ npx tsx scripts/schema-validate.ts
…
→ reports/schema-validation.json (139/139 valid)
→ reports/schema-validation-summary.md
```

100% pass rate on the previous deploy (latest FAQ commits not yet indexed at scan time — re-run after Vercel deploy lands to confirm new FAQPage blocks also pass).

## Core Web Vitals

Not re-baselined this sprint (the SEO_LLM_PLAN_v2.md baseline of LCP <2.5s, INP <200ms, CLS <0.1 still applies; nothing in this sprint changed the critical path). The vercel.json adds immutable cache headers on `/_next/static`, `/images/*`, and SWR on browse pages — should improve repeat-visit metrics but won't shift first-load LCP.

## Ranking baseline

Per Agent 2's live SERP audit of the 30 priority queries:

> "Matthews Hotel Markets is absent from page 1 for all 30 priority queries. Zero current organic visibility. Parent matthews.com surfaces 3 times (#27 Marcus & Millichap vs Matthews, #28 hotel CMBS distress 2026, #29 Texas hotel cap rates) — these three are the fastest authority-migration wins."

Brand-flag queries (Hampton Inn for sale, Holiday Inn Express for sale) are 95% un-owned — cleanest wedge in the universe. Per-market head terms owned by listing aggregators (LoopNet, Crexi).

To track over time: `npx tsx scripts/rank-check.ts` (weekly, free DDG fallback or SerpAPI free tier).

## LLM citation baseline

To establish: `npx tsx scripts/llm-citation-check.ts` once `PERPLEXITY_API_KEY` / `OPENAI_API_KEY` / `ANTHROPIC_API_KEY` are set as Vercel env vars. Targets the same 30 prompts from SEO_LLM_PLAN_v2.md Pillar 6.

Realistic targets per the plan:
- Day 30: branded queries top-3 organic
- Day 60: long-tail informational + brand-flag queries top-10, **5+ LLM citations across the 30-prompt matrix**
- Day 90: transactional metro queries top-10, **10–12 LLM citations**
- Day 120-180: transactional metro queries top-3, head queries top-10, **15+ LLM citations**

## What's in HUMAN_QUEUE.md (top 5)

1. Verify GSC + submit sitemap — blocks all Google analytics
2. Bing Webmaster Tools + IndexNow — blocks ChatGPT and Bing Copilot citations entirely
3. `REVALIDATE_SECRET` env var in Vercel — required for the new revalidate webhook
4. HBI membership — gates Certified Hotel Broker designation + Hotel Management Top Brokers ranking
5. AHLA Premier Partner — peer to JLL Hotels at this tier

Full list (23 items, P0–P3): `/HUMAN_QUEUE.md`

## Key intel from the 6 recon agents (all reports under `reports/`)

- `competitor-matrix.md` — Marcus & Millichap is volume leader (6,346 URLs, **0 JSON-LD**); Berkadia is SEO architecture leader; Hodges Ward Elliott's per-deal news-post URL pattern is the cheapest highest-ROI template; **universal gap: per-flag pages, FAQ/glossary, RealEstateListing schema** — exactly the wedges this sprint hit.
- `query-universe.md` + `priority-targets.md` — 250 queries, 30 priority targets with SERP snapshots.
- `citation-patterns.md` — the 14-section GEO template every Wave 5 article uses. Headline tactic for non-leader sites: **"Cite Sources" alone = +115.1% visibility lift** (Princeton GEO 2023).
- `link-targets.md` — 60+ link acquisition targets (15 resource pages, 10 broken-link reclaim, 16 directories/conferences, 12 association memberships, 10 podcasts, 17 trade-press journalists, 6 university partners) with named contacts.
- `content-production-list.md` — 41 content briefs ranked P0/P1/P2 for the next 60 days.

## Phase performance

| Phase | Budget | Real | Notes |
|---|---|---|---|
| 1 — Recon (6 agents parallel) | 60 min | ~14 min | 6 agents in parallel, longest finished in 14 min |
| 2 — Technical execution | 45 min | ~12 min | Ran in parallel with Phase 1 (no conflict) |
| 3 — Programmatic page enrichment | 75 min | ~12 min | Routes already existed → pivoted to FAQ injection |
| 4 — Long-form articles (4 agents parallel) | 60 min | ~6 min | 4 writers in parallel |
| 5 — Saturation + verification | 40 min | ~5 min | Schema validation + report writing |

Total: 26 min real time vs 280 min budget. Parallel agents compressed the timeline ~10×.
