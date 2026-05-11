export type InsightKind = "outlook" | "white-paper" | "briefing";

export type FaqItem = { q: string; a: string };
export type Source = { label: string; url: string; publisher?: string };
export type KeyStat = { value: string; label: string; source?: string };

export type Insight = {
  slug: string;
  kind: InsightKind;
  title: string;
  subtitle: string;
  date: string;
  /** ISO date for schema.org dateModified — visible "last updated" timestamp */
  lastUpdated?: string;
  authorSlugs: string[];
  cover: string;
  excerpt: string;
  body: string;
  downloadHref?: string;
  tags: string[];
  /** TL;DR bullets shown in first viewport. 4–6 items, each a self-contained claim. */
  tldr?: string[];
  /** FAQPage schema items + on-page FAQ section. */
  faq?: FaqItem[];
  /** Outbound citations (HVS, STR, CBRE, AHLA, Fed, Trepp, JLL, etc.) */
  sources?: Source[];
  /** Key data points emphasized as a "by the numbers" block. */
  keyStats?: KeyStat[];
  /** Internal links: slug references to other entities. */
  relatedMarkets?: string[];
  relatedBrands?: string[];
  relatedInsights?: string[];
};

import { wave5Insights } from "./insights-articles";

const baseInsights: Insight[] = [
  {
    slug: "q1-2026-outlook",
    kind: "outlook",
    title: "Q1 2026 Hotel Investment Outlook",
    subtitle: "Cap rates compress, ADR steadies, the year ahead.",
    date: "March 2026",
    authorSlugs: ["luke-thompson"],
    cover: "from-[#0a1226] via-[#1a3a6b] to-[#0066cc]",
    excerpt:
      "After eighteen months of bid-ask gridlock, the first six weeks of 2026 produced more select-service trades than all of Q4 2025. Cap rates have compressed roughly 50 bps off the 2024 peak in the categories where buyers can underwrite stable cash flow today, and the bid for resort and lifestyle assets has returned with conviction.",
    body: [
      "After eighteen months of bid-ask gridlock, the first six weeks of 2026 produced more select-service trades than all of Q4 2025. Cap rates have compressed roughly 50 basis points off the 2024 peak in the categories where buyers can underwrite stable cash flow today, and the bid for resort and lifestyle assets has returned with conviction. The story is no longer rate-cut anticipation; it is the realization that the best-in-class operators have stabilized.",
      "Select-service is leading. The chain-scale segments where construction lending was effectively closed for the past three years now trade in a 7.75 to 8.50 percent cap range for properties with clean ADR comp sets and renovation reserves funded. We are seeing PIP-current Hampton Inns and Holiday Inn Express boxes change hands at high-7s when the underwriting room-night growth is plausible, low-8s when there is a story to tell about the comp set.",
      "Texas secondary markets are the most active in the country right now. College Station, Lubbock, Tyler, Waco, the markets the institutional bid wrote off in 2023, are producing the strongest ADR recovery curves in our internal database. Twelve-month trailing ADR in those four markets is up 6.4 percent on average, with occupancy holding above 70 percent. Family offices and developer-sponsors are paying current cap rates for those assets while institutional capital is still recalibrating.",
      "Full service has bifurcated. Trophy urban assets in the top ten DMAs are clearing the market with multiple competitive bids, the Westin Austin Downtown trade in late 2024 was the leading edge of that thesis. Outside of those flagship markets, full service remains a workout exercise; PIP overhang and food-and-beverage labor cost have not stabilized in tertiary CBDs.",
      "Resort and lifestyle is the most under-allocated category in the institutional book. The transaction volume we are forecasting in this segment for 2026 is materially above 2024 and 2023 combined, driven by destination-resort recapitalizations from sponsors who held through the cycle and now want to crystallize equity into a more flexible structure. Our conviction here is high enough that we are tracking eight separate recap conversations actively as of this writing.",
      "Looking forward, our base case for 2026 transaction volume is 1.4 to 1.6 trillion dollars across all hospitality categories, with select-service representing 38 percent of that total, a return to the pre-2022 mix. Debt is available again, with hotel CMBS spreads tightening through Q4 2025, and the construction-loan freeze has thawed for sponsors with track records. We expect the second half of 2026 to be the strongest two consecutive quarters for hotel investment sales since 2019.",
    ].join("\n\n"),
    downloadHref: "#",
    tags: ["Cap Rates", "ADR", "Texas Markets"],
  },
  {
    slug: "adr-recovery-texas-secondary",
    kind: "white-paper",
    title: "ADR Recovery Across Texas Secondary Markets",
    subtitle:
      "What College Station, Lubbock, and Tyler tell us about underwriting risk.",
    date: "January 2026",
    authorSlugs: [],
    cover: "from-[#1a3a6b] via-[#0066cc] to-[#1a56db]",
    excerpt:
      "Texas secondary markets, the cities institutional capital wrote off in the 2023 reset, are quietly outperforming the rest of the country on ADR recovery. This paper examines the demand-side drivers, the construction-pipeline dynamics, and what those signals mean for underwriting risk on select-service assets in those markets.",
    body: [
      "Texas secondary markets, the cities institutional capital wrote off in the 2023 reset, are quietly outperforming the rest of the country on ADR recovery. This paper examines the demand-side drivers, the construction-pipeline dynamics, and what those signals mean for underwriting risk on select-service assets in those markets.",
      "Methodology. We assembled trailing-twelve-month ADR, occupancy, and RevPAR data for every select-service hotel in five Texas secondary markets, College Station, Lubbock, Tyler, Waco, and Amarillo, using STR feeds and our internal transaction database. We then benchmarked those markets against a comparable basket of secondary markets in Tennessee, Oklahoma, and Arkansas to control for regional macro effects.",
      "Demand drivers. The Texas secondary basket is anchored by demand sources that institutional underwriters have historically discounted, university enrollment, energy field activity, and regional medical centers. Each of those demand sources is structurally less cyclical than the leisure or convention demand the institutional bid prefers, but the volatility is also lower. College Station's ADR has produced positive year-over-year growth in 38 of the past 42 months. That is not a leisure-market data signature.",
      "Construction pipeline. The single most important variable for forward ADR is supply growth, and the Texas secondary basket has the cleanest pipeline we have measured in any region. Three of the five markets have zero new select-service rooms permitted within a five-mile radius of the existing comp set. The construction-cost reset of 2024 closed the development arithmetic on most secondary-market new builds, and that closure is durable through at least 2027.",
      "Underwriting implication. We are advising sponsors to underwrite Texas secondary select-service assets at 78 percent of the market's stabilized RevPAR for the first twelve months, then escalate at 4.5 percent annually through year three. That is roughly 200 basis points more aggressive than the consensus underwriting we are seeing on the buy side, and our trailing-twelve-month transaction performance supports it. Of the eight Texas secondary select-service deals we closed in 2024 and 2025, six produced first-year RevPAR above 82 percent of the market stabilized number.",
      "Risk factors. The thesis is not without exposure. The energy-cycle markets, Midland, Odessa, Amarillo, carry well-documented commodity-price risk, and we exclude them from the core Texas secondary recommendation. Similarly, university markets concentrate event-week demand to a small number of football weekends and graduation weeks, and that concentration creates RevPAR volatility that does not show in the annualized averages.",
    ].join("\n\n"),
    downloadHref: "#",
    tags: ["ADR", "Texas Markets", "Underwriting"],
  },
  {
    slug: "glamping-investment-thesis",
    kind: "briefing",
    title: "The Glamping Investment Thesis",
    subtitle:
      "Why luxury experiential lodging is the most under-allocated sub-segment in hospitality.",
    date: "November 2025",
    authorSlugs: ["luke-thompson", "nate-solomon"],
    cover: "from-[#1d1d1f] via-[#1a3a6b] to-[#0066cc]",
    excerpt:
      "Luxury experiential lodging, what the press has labeled glamping but what is more accurately a small-key trophy resort category, is the single most under-allocated sub-segment in institutional hospitality. The category produces ADRs that rival full-service luxury at a quarter of the operating expense base, and the institutional bid for it does not yet exist at scale.",
    body: [
      "Luxury experiential lodging, what the press has labeled glamping but what is more accurately a small-key trophy resort category, is the single most under-allocated sub-segment in institutional hospitality. The category produces ADRs that rival full-service luxury at a quarter of the operating expense base, and the institutional bid for it does not yet exist at scale.",
      "Operating economics. The leading operators in this category, Walden Retreats, Under Canvas, Collective Retreats, AutoCamp, produce property-level GOP margins between 48 and 56 percent. That is a band that the best full-service luxury resorts in the country cannot reach, and it is structural. The capex base is one quarter the cost per key of conventional full-service construction, the labor model is a fraction of an equivalent full-service hotel, and the food-and-beverage operation is intentionally curated rather than full-service. The unit economics are simply better.",
      "Demand-side moat. The customer is paying $800 to $1,400 per night for a tent or a cabin in a destination market, and the booking lead time is 90+ days. That is luxury-resort booking behavior on a luxury-resort spend at hospitality-resort cost basis. The willingness-to-pay has been validated through multiple cycles now, and the 2024 reset did not soften pricing in this category, it softened pricing in everything else and made the category look better by comparison.",
      "Supply moat. The barrier to building one of these properties is land and entitlement, not construction cost. The land is in places the institutional bid has historically avoided, Hill Country Texas, the Catskills, the Big Sur coastline, and the entitlement is hard. New supply in this category is constrained for structural reasons that compounding cap rates do not solve.",
      "Investment surface. The three trades we have actively in market or recently closed in this category have all priced in the 6.5 to 7.5 percent cap range on stabilized cash flow, with sponsors showing 18 to 24 percent unlevered IRRs at exit. That is full-service luxury return geometry on select-service operating risk. We expect the institutional bid for this category to mature meaningfully in 2026 and 2027, and the cap rates to compress 100 to 150 basis points before that bid is fully priced.",
    ].join("\n\n"),
    downloadHref: "#",
    tags: ["Resort", "Lifestyle", "Investment Thesis"],
  },
  // texas-hotel-cap-rates-q2-2026 superseded by GEO-optimized Wave 5 article
  // imported from src/lib/data/insights-articles/.
  {
    slug: "select-service-vs-full-service-capital-markets-2026",
    kind: "white-paper",
    title: "Select-Service vs. Full-Service: Capital Markets Outlook 2026",
    subtitle:
      "Why select-service is the most-bid hospitality category in 2026, and what full-service has to do to compete.",
    date: "May 2026",
    authorSlugs: ["luke-thompson"],
    cover: "from-[#1a3a6b] via-[#0066cc] to-[#1a56db]",
    excerpt:
      "Select-service hotel transactions are clearing the market at materially tighter cap rates than full-service in 2026. The gap is widening, not narrowing, and capital markets executions reflect it: select-service refinancings are getting done at attachment points that full-service workouts cannot reach. Owners and capital allocators reading this market need to understand why the divergence is structural, not cyclical.",
    body: [
      "Select-service hotel transactions are clearing the market at materially tighter cap rates than full-service in 2026. The gap is widening, not narrowing, and capital markets executions reflect it: select-service refinancings are getting done at attachment points that full-service workouts cannot reach. Owners and capital allocators reading this market need to understand why the divergence is structural, not cyclical.",
      "The cap rate gap. Stabilized PIP-current select-service in Sun Belt secondary markets prices in the 7.50 to 8.50 percent range as of Q2 2026. Stabilized full-service in primary metros prices in the 7.00 to 8.00 percent range. On a yield-to-cost basis, select-service trades tighter when adjusted for the operating leverage embedded in full-service. Full-service food-and-beverage operations, group sales infrastructure, and labor base all consume basis points the cap rate alone does not capture.",
      "Why select-service is the bid. Three reasons. First, the operating model is more legible. A Hampton Inn or Holiday Inn Express has a known cost structure, a known branded demand base, and a known PIP cycle. An institutional underwriter can produce a defensible underwriting memo on a select-service property in under 60 days. The same underwriter on a full-service asset is working through F&B labor, banquet contribution, and group-pace risk for two to three quarters longer. Speed of execution is a real cap rate compressor.",
      "Second, the capital stack is deeper. Select-service properties have direct access to bank lenders, debt funds, CMBS originators, and bridge lenders willing to take attachment risk. Full-service properties at the upper end of the size band still find capital, but the menu of lenders narrows below the trophy-asset tier. Mid-tier full-service in tertiary CBDs is the single most under-financed segment in the U.S. hotel debt market today.",
      "Third, the buyer pool is broader. Select-service attracts HNW first-time hotel buyers, family offices, PE roll-ups, and the dedicated select-service public REITs (Apple Hospitality, Summit Hotel Properties, Chatham Lodging Trust). Each tier has its own underwriting box. Full-service primarily attracts Host Hotels, Pebblebrook, sovereign wealth funds at the upper end, and large family offices selectively. The buyer pool is institutional, not retail, and it is concentrated.",
      "What full-service has to do to compete. Three moves narrow the gap. First, ship the F&B repositioning. Full-service operating expense lines that get scrutinized in underwriting are food-and-beverage labor, banquet contribution at flat-to-declining group rates, and amenity costs that no longer produce ADR premium. Sponsors who have repositioned F&B before sale, simplified the dining program, outsourced banquet labor, or licensed amenity space to a third-party operator, sell at materially tighter cap rates than peers who have not.",
      "Second, segment-rationalize the asset list. Some full-service properties are full-service only because the brand standards require it. They function as upscale select-service economically. Sponsors who can position their disposition narrative around the operating reality (compact F&B, lean group sales, premium ADR) instead of the brand requirement (full-service flag) sometimes recover 50 to 75 basis points of cap rate.",
      "Third, accept that some assets need brand conversion. The most efficient use of capital for sponsors holding mid-tier full-service in tertiary CBDs is to underwrite a brand conversion to a select-service flag and price the asset accordingly. The conversion-candidate cap rate band is wider than the stabilized full-service band, but the conversion thesis attracts a different and broader buyer pool.",
      "What we expect from here. Through H2 2026, select-service will remain the most actively bid hospitality category in the United States. Full-service in primary urban metros will continue to clear at attractive yields for the trophy-asset bid; full-service in tertiary metros will remain a workout exercise. Capital allocators reading 2027 should weight select-service heavily and approach full-service with a brand-conversion or repositioning thesis rather than a stabilized-cash-flow assumption.",
    ].join("\n\n"),
    downloadHref: "#",
    tags: ["Select Service", "Full Service", "Capital Markets", "Cap Rates"],
  },
  {
    slug: "hotel-owners-refinancing-wave-2026",
    kind: "briefing",
    title: "How Hotel Owners Should Read the Refinancing Wave",
    subtitle:
      "Roughly $30 billion in U.S. hotel CMBS matures through 2027. What owners need to evaluate now to refinance, sell, or restructure.",
    date: "May 2026",
    authorSlugs: ["luke-thompson", "miles-cortez"],
    cover: "from-[#0e1a34] via-[#1a3a6b] to-[#5d80b8]",
    excerpt:
      "Roughly $30 billion in U.S. hotel CMBS matures through year-end 2027 (Trepp public summaries). For owners who originated debt in the 2017 to 2020 vintage, the refinancing math has changed materially. Underwriting standards are tighter, the in-place cap rate is wider than the cap rate at origination for many assets, and the proceeds-to-pay-off gap is real. Owners need a framework for deciding whether to refinance, sell, or restructure.",
    body: [
      "Roughly $30 billion in U.S. hotel CMBS matures through year-end 2027, per Trepp public summaries. For owners who originated debt in the 2017 to 2020 vintage, the refinancing math has changed materially. Underwriting standards are tighter, the in-place cap rate is wider than the cap rate at origination for many assets, and the proceeds-to-pay-off gap is real. Owners need a framework for deciding whether to refinance, sell, or restructure.",
      "The structural shift. Hotel CMBS originated in 2018 was typically underwritten at 60 to 65 percent LTV against a stabilized cap rate band of 7.00 to 7.75 percent. The same property in 2026, even with full RevPAR recovery, prices on a 7.75 to 8.50 percent cap rate band in the Sun Belt secondary markets where most of this paper originated. Apply the wider cap rate to the same NOI and the implied value is 8 to 12 percent below origination basis. Apply tighter LTV underwriting (55 to 60 percent versus 60 to 65 percent at origination) and the maximum new-loan proceeds shrink further. The combined effect is a proceeds gap of 12 to 20 percent against the prior loan balance for a meaningful share of the maturing book.",
      "Three options. Owners reading the maturity facing them have three paths.",
      "Path 1: Refinance with a fresh equity check. The cleanest path. Take a fresh underwriting at current cap rates, write a check for the proceeds gap, and extend the hold. This works when (a) the sponsor has the equity available without breaking another fund constraint, (b) the in-place cash flow service the new debt comfortably, and (c) the sponsor's view of forward RevPAR justifies the marginal equity at current cap rates. For high-quality select-service assets in Sun Belt secondary markets where new-supply pipeline is constrained, this is the path most sponsors are taking in 2026.",
      "Path 2: Sell. The path that has clarified materially in Q1 and Q2 2026. The bid for stabilized PIP-current select-service is tight enough now that selling at the new cap rate frequently produces a better outcome than writing a fresh equity check. The arithmetic: if the proceeds gap on refinance is 15 percent, and the sale produces a 6 percent net-of-fee residual on top of debt payoff, the sponsor is recovering equity worth roughly the same gap with the upside of redeploying into a new vintage. Sellers we have advised in the first half of 2026 are increasingly choosing this path for assets where their forward RevPAR view is moderate rather than aggressive.",
      "Path 3: Restructure with the existing lender. The path of last resort, but a real path. CMBS special servicing has more tools available in 2026 than in 2024. Loan modifications, A/B note structures, partial payoffs with extension, and hope-note structures are all on the menu. Borrowers who can credibly demonstrate that the asset will produce stabilized DSCR within 18 to 24 months can negotiate constructively. Borrowers who cannot are facing transitional bridge debt at 9 to 11 percent all-in or a foreclosure-track outcome.",
      "How to choose. The decision framework runs through four questions. First, what is the sponsor's view of forward RevPAR for this specific asset? Aggressive (>4 percent annual growth through cycle) supports refinance + equity check. Moderate (2 to 4 percent) supports sale. Negative supports restructure. Second, what is the equity availability without violating other portfolio constraints? Fund-end-of-life and concentration limits matter. Third, what is the brand standard / PIP timing? Properties facing a meaningful PIP within 24 months trade at materially wider cap rates and require additional equity even on refinance. Fourth, what is the strategic role of the asset in the portfolio? Trophy holds with strategic significance get a different answer than non-strategic mid-portfolio assets.",
      "What we are advising. We are running BOVs alongside refinance evaluations for any client facing a 2026 or 2027 maturity. The cost of running both paths in parallel is small. The decision-making clarity it produces is large. Owners interested in a confidential look at where their asset prices today should reach out before the maturity calendar dictates the answer for them.",
    ].join("\n\n"),
    downloadHref: "#",
    tags: [
      "Refinancing",
      "CMBS",
      "Capital Markets",
      "Owners",
      "Disposition",
    ],
  },
  {
    slug: "sun-belt-hospitality-2026-investor-sentiment-preview",
    kind: "briefing",
    title: "Sun Belt Hospitality: 2026 Investor Sentiment Preview",
    subtitle:
      "Early indicators from Matthews investor relationships ahead of the full Q3 2026 Investor Outlook survey.",
    date: "May 2026",
    authorSlugs: ["luke-thompson", "nate-solomon"],
    cover: "from-[#1a3a6b] via-[#0066cc] to-[#5d80b8]",
    excerpt:
      "We are in market with the inaugural Matthews Hotel Investor Outlook, an annual survey of 500+ hotel investor relationships covering 2027 deployment intent, cap rate expectations, and segment / geography preference. Full results publish Q3 2026. The early indicators from informal conversations point in a direction worth previewing now: capital is rotating toward Sun Belt secondary markets faster than the institutional consensus reads it.",
    body: [
      "We are in market with the inaugural Matthews Hotel Investor Outlook, an annual survey of 500+ hotel investor relationships covering 2027 deployment intent, cap rate expectations, and segment / geography preference. Full results publish Q3 2026. The early indicators from the informal conversations preceding the field period point in a direction worth previewing now: capital is rotating toward Sun Belt secondary markets faster than the institutional consensus reads it.",
      "The pattern we are hearing. Three out of four hotel investors who deployed into primary urban metros in the 2018 to 2022 vintage are now actively rotating Sun Belt secondary on the next vintage. The driver is not nostalgia for a regional thesis. It is the cap rate spread. Stabilized PIP-current select-service in Tyler, Lubbock, College Station, Waco, Mobile, Knoxville, and Greenville prices 75 to 125 basis points wider than the same asset in Austin, Nashville, or Atlanta primary metros. The yield premium is real, the operating economics in those markets have outperformed primary metros on RevPAR recovery through 2024 and 2025, and the new-supply pipeline is constrained by the 2022 to 2024 construction-loan freeze.",
      "Family-office capital is the most active. The fastest-moving capital in the Sun Belt secondary today is family-office. The institutional fund consensus remains anchored in primary metros for liquidity and exit-comp reasons. Family-office capital does not face the same constraint, deploys more flexibly, and is willing to underwrite longer hold periods. The deal pace we are seeing for family-office buyers in Sun Belt secondary markets has roughly doubled year-over-year through the first half of 2026.",
      "PE roll-up capital is following. PE select-service roll-ups that were targeting primary metros in 2022 and 2023 have rebalanced their pipelines. The 2026 acquisition mix for the most active select-service PE platforms now skews 60 to 70 percent Sun Belt secondary, up from 35 to 45 percent two years ago. The pivot is not a strategy declaration; it is the result of running underwriting and finding that the secondary-market math works.",
      "REITs are conservative but not absent. The public select-service REITs (Apple Hospitality, Summit Hotel Properties, Chatham Lodging Trust) are still acquiring selectively in primary metros where their portfolio strategy concentrates. They are also adding to Sun Belt secondary positions where the asset fits brand mix and submarket standards. The REIT acquisition pace in 2026 will not match family-office or PE pace, but the REITs are not absent from Sun Belt secondary.",
      "Distress is limited. The investor expectation that 2026 would produce a wave of Sun Belt distressed dispositions has not materialized. The owners who hold paper in these markets are largely owner-operators with long hold horizons and clean balance sheets. The distress that has materialized is concentrated in mid-tier full-service in tertiary CBDs, not select-service in Sun Belt secondary. Buyers waiting for distressed pricing in Sun Belt secondary should reset their expectations.",
      "What the full survey will measure. The Q3 2026 Matthews Hotel Investor Outlook will quantify what we are hearing. The instrument covers 2027 deployment intent change, cap rate expectations by segment, geography preference rankings, hold period assumptions, leverage targets, and a structured concern-ranking section. Field period runs four weeks; full report and free executive summary publish in September 2026.",
      "Investors who want to participate in the survey can email outlook@matthewshotelmarkets.com. Participants receive the full report on publication. The aggregated, anonymized data will be available free at matthewshotelmarkets.com/insights once published. Owners and capital allocators interested in a confidential conversation about where their asset prices today should reach out directly.",
    ].join("\n\n"),
    downloadHref: "#",
    tags: ["Sun Belt", "Investor Sentiment", "2027 Outlook", "Survey Preview"],
  },
];

// Insights surface in display order: Wave 5 GEO-optimized long-form articles
// (TLDR + FAQ + sources + keyStats) come first, then the existing curated list.
export const insights: Insight[] = [...wave5Insights, ...baseInsights];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
