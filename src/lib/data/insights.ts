export type InsightKind = "outlook" | "white-paper" | "briefing";

export type Insight = {
  slug: string;
  kind: InsightKind;
  title: string;
  subtitle: string;
  date: string;
  authorSlugs: string[];
  cover: string;
  excerpt: string;
  body: string;
  downloadHref?: string;
  tags: string[];
};

export const insights: Insight[] = [
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
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
