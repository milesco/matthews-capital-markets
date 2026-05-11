# HUMAN_QUEUE — Items Needing Nate

Compiled from the 5-hour sprint (2026-05-10). Each item is paste-ready or has the URL/contact you need. Grouped by urgency.

---

## P0 — This week (account access, identity verification, money)

### 1. Verify Google Search Console + submit sitemap
- Property: `https://matthewshotelmarkets.com`
- Verification: DNS TXT record (preferred) or HTML file upload
- Submit `https://matthewshotelmarkets.com/sitemap.xml`
- Why: Without this, Google indexing is best-effort. We can't confirm coverage or pull query data. Took 0% effort this sprint but blocks all GSC analytics.

### 2. Register Bing Webmaster Tools + IndexNow
- Verify: `https://www.bing.com/webmasters` — add `matthewshotelmarkets.com`
- Submit sitemap: `https://matthewshotelmarkets.com/sitemap.xml`
- Generate IndexNow key from Bing → save to `public/{key}.txt`
- Why: **ChatGPT search and Bing Copilot pull from the Bing index.** Without this they cannot cite us. Highest-leverage 10-minute task you have.

### 3. Set REVALIDATE_SECRET in Vercel env
- Add `REVALIDATE_SECRET` (any 32+ char random string) as a Production env var (type: Sensitive)
- Use to call `POST https://matthewshotelmarkets.com/api/revalidate` with header `x-revalidate-secret: <secret>` and body `{"tags": ["listing:foo"], "paths": ["/listings/foo"]}` to trigger instant cache refresh without redeploy
- Why: New webhook shipped this sprint. Secret-gated, useless until set.

### 4. Confirm Denver office address (offices.ts → Miles Cortez)
- File: `src/lib/data/offices.ts` line 45 currently reads `address: "Confirm address with Miles"`
- Replace with real street + ZIP. Drives LocalBusiness schema NAP signal.

### 5. Reset Apple Hospitality / Summit / Service Properties Trust per-key averages
- Article: `src/lib/data/insights-articles/brand-flag-cap-rate-guide-2026.ts`
- The "$156K Apple Hospitality avg, $142K Sun Belt Courtyard" numbers are reasoned estimates, not pulled from the 10-K supplements during the sprint. Verify against most recent supplementals (apple-hospitality.com IR) before this article goes into PR pitches.

---

## P1 — This month (link acquisition, association memberships)

### 6. Hospitality Brokers Institute (HBI) membership
- Apply: `https://www.hospitalitybrokers.org`
- Why: Gates the **Certified Hotel Broker** designation + the Top Brokers ranking pipeline at Hotel Management magazine. Highest-leverage single membership per Agent 6 link-target scan.
- Cost/effort: Application + dues, ~$500-1500/yr range (verify on apply page).

### 7. AHLA Premier Partner
- Apply: `https://www.ahla.com/partners`
- Why: Peer to JLL Hotels at Premier tier. Unlocks AHLA research co-branding, conference visibility.

### 8. ULI Hotel Development Council
- Apply: `https://americas.uli.org/membership/product-councils/`
- Why: Senior hospitality investor seat. ULI HDC roster is a who's-who of the institutional buyer pool we need to be in front of.

### 9. AAHOA membership (if not already)
- Apply: `https://www.aahoa.com/membership`
- Why: Asian American Hotel Owners Assoc represents ~60% of US franchised hotels. Direct access to the seller side of select-service.

### 10. THLA + RECA + NAIOP Austin (state/local)
- Texas Hotel & Lodging Assoc, Real Estate Council of Austin, NAIOP Austin chapter
- Why: Local credibility + Austin-market signal density.

---

## P2 — This quarter (outreach + content amplification)

### 11. Trade-press relationship building (priority order)
**Highest leverage:**
- **Jeff Weinstein, Hotel Investment Today** — owns the deal-announcement / market-thesis territory we want to own. Email pitch: Q1 2026 outlook + recent close walk-through.
- **CoStar News Hotels desk: Natalie Harms, Bryan Wroten** — even though we drop CoStar as a data source, the news side carries weight in CRE search results.
- **Stephanie Ricca, LODGING magazine** — AHLA-owned magazine. Editorial-friendly to AHLA Premier Partners.
**Tier 2:**
- Sean McCracken (Hotel News Now), Terence Baker, Jena Tesse Fox (Hospitality Net), Robin McLaughlin, Erika Morphy (GlobeSt), Jon Banister + Mark Bonner (Bisnow)
- Full reporter list with beats + emails: `reports/link-targets.md` section 6

### 12. Podcast guest pitches (in priority order)
- **No Vacancy News (Glenn Haussman)** — biggest hotel-focused podcast.
- **Hotel Investor Playbook** — investment-focused listenership.
- **Modern Hotelier**, **Lodging Leaders**, **Hospitality Daily** (Josiah Mackenzie)
- Full list with hosts + booking paths: `reports/link-targets.md` section 5

### 13. University data partnerships
- **Cornell CHR** (Center for Hospitality Research) + **Rubacha** (Cornell RE program)
- **NYU Tisch hospitality** (IHIIC conference owner)
- **UH Hilton College** (Houston-local proximity matters here)
- Why: Free academic research distribution + .edu backlinks. Reach out to a named professor with a data-share offer (anonymized Matthews transaction file → their working paper).

### 14. Wikidata Q-items (parent + sub)
- Both Q-items still unclaimed per SEO_LLM_PLAN_v2.md verification
- Submit via `wikidata.org` — full property list at `content/wikidata/` (already drafted in Wave 3)
- Why: Wikidata is queried directly by Gemini and is in LLM training corpora. **Brands on Wikidata + Wikipedia + 4+ third-party platforms see 2.8× more AI citations** (Discovered Labs 2026).

### 15. Wikipedia article (parent first, then Matthews Hotel Markets)
- Drafts at `content/wikipedia/` (Wave 3)
- Submit via Articles for Creation (AfC). Acceptance probability ~60% on first submit.
- This is a multi-week back-and-forth process; start now.

### 16. PR consultant retention
- Three named candidates with retainer ranges in `SEO_LLM_PLAN_v2.md` Appendix B
- Engage in parallel with Matthews internal PR audit (Wave 3 deliverable)

### 17. Designated research analyst
- Job description in SEO_LLM_PLAN_v2.md Appendix C
- Source: St. Edward's University finance program OR UT McCombs RE program
- 20 hr/week contract or paid academic credit, ~$3-4.5K/month
- Drives Matthews Hotel Index (MHI) quarterly + Investor Outlook annual

### 18. CoStar legal request — drop or pursue
- Legal request email drafted in SEO_LLM_PLAN_v2.md Appendix C
- Decision: **public-data-only fallback already specified**, so this is a "pursue if zero downside" — not blocking. Public-data MHI ships Q4 2026 either way.

---

## P3 — Ongoing (don't forget)

### 19. Author byline cleanup (still in old data)
- Three placeholder broker names that the data may still reference:
  - `sarah-chen` — already redirect-killed in vercel.json (good)
  - `marcus-reyes` — same
  - `elena-park` — same
- If you ever spot one of those names in a public-facing surface, it shouldn't be there. Filed in vercel.json as 301s.

### 20. /listings/walden-retreats-hill-country redirects to OM site
- Note from internal audit: Walden listing server-redirects to its OM. We lose indexable surface on that route.
- Decision: keep the OM-first redirect (drives qualified leads), OR render a public detail page with OM behind NDA gate (drives indexation + organic). User call.

### 21. LinkedIn amplification on Wave 5 articles
- 16 LinkedIn drafts at `content/linkedin-drafts/` (8 articles × Luke + Nate)
- Cadence: Luke 2x/week, Nate 3x/week
- Both repost + comment on each other's content (per SEO_LLM_PLAN_v2.md Pillar 5)

### 22. Quarterly refresh cadence on pillar pages
- 30-day refresh on Hotel Cap Rates, Hotel Valuation Guide, How to Sell a Hotel pages
- Update the visible "Last updated" date even on small refreshes — Perplexity citation rate drops ~40% past 30 days, ~65% past 90 days (ZipTie 2025)
- Use the new revalidate webhook to push without full deploys

### 23. Content production list (next 30-60 days)
- 41 prioritized content briefs in `reports/content-production-list.md`
- 9 P0 (next 7 days), 19 P1 (next 30 days), 13 P2 (next 60 days)
- Top wedges: parent-domain migration trio, BOV cluster (4 nodes), select-service segment page, "who" trio for LLM canonical broker question

---

## Source reports for everything in this file

| Report | What it covers |
|---|---|
| `reports/competitor-matrix.md` | 10 competitors, 50 highest-impact templates, top schema + linking patterns |
| `reports/query-universe.md` + `reports/priority-targets.md` | 250 queries + 30 priority targets with SERP snapshots |
| `reports/citation-patterns.md` | LLM citation winners' page structure (the 14-section template) |
| `reports/site-audit.md` (in Agent 4 transcript) | Pre-sprint URL inventory + fix list |
| `reports/link-targets.md` | 60+ link acquisition targets with contacts + priority |
| `reports/content-production-list.md` | 41 content briefs ranked by impact × effort |
| `SEO_LLM_PLAN_v2.md` (existing) | Full strategy doc with three appendices |
