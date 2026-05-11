import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "bov",
  term: "BOV (Broker Opinion of Value)",
  shortDef:
    "A hotel BOV, or broker opinion of value, is a written valuation prepared by a hotel investment-sales broker that estimates the price an asset would clear in the current market, supported by comp set, financial analysis, and a buyer-pool view.",
  fullDef:
    "A broker opinion of value (BOV) is a hotel-specific valuation produced by a brokerage at the request of an owner. The deliverable typically includes a transaction-comp analysis, an as-is and as-stabilized cash flow projection, a cap-rate-based and per-key valuation range, a buyer-pool assessment, and a recommended go-to-market strategy. BOVs are confidential, free, and produced ahead of formal disposition.",
  body: [
    "BOVs are the entry point to most hotel transactions. An owner considering a sale, a refinance, a partner buyout, or simply a strategic update on portfolio value asks a hotel broker for a BOV to understand where the asset prices in the current market. The broker invests the underwriting time in exchange for the opportunity to be retained on the eventual disposition. There is no upfront fee. The owner gets a market-tested valuation; the broker gets the inside track on the listing.",
    "A complete hotel BOV runs 25 to 50 pages and covers six analytical layers. First, a property summary with chain scale, brand, year built, key count, last PIP, and physical-condition notes. Second, a market and submarket analysis with STR competitive set, supply pipeline, demand drivers, and forward RevPAR view. Third, a financial analysis covering trailing twelve months, year-to-date trends, and a stabilized pro forma. Fourth, a transaction-comp set with recent sales of similar assets, cap rates, per-key prices, and adjustment factors. Fifth, a valuation range expressed both as a cap rate band and as a per-key range, with the broker's specific recommendation. Sixth, a go-to-market strategy with timeline, marketing approach, and target buyer pool.",
    "BOVs differ from formal appraisals in three structural ways. An appraisal is produced by a state-licensed appraiser under USPAP standards and is typically required for lender underwriting; a BOV is produced by a broker and is intended for owner decision-making. An appraisal is paid (typically $8,000 to $25,000 for hotels); a BOV is delivered free as part of the broker's business development. An appraisal is a valuation opinion that needs to defend itself against a challenge; a BOV is a market-pricing opinion that needs to attract a buyer at the recommended price.",
    "BOVs are most useful when the broker has direct visibility into the active buyer pool. Generic valuation models can produce a number; what differentiates a useful BOV is the buyer-by-buyer view of who would underwrite this specific asset, at what cap rate, with what equity check, on what timeline. A broker actively in market with three Hampton Inn buyers in a Sun Belt secondary market produces a more credible BOV on a Hampton Inn in that market than a broker pulling from desktop comps alone.",
    "Owners often request BOVs in pairs or threes. Soliciting BOVs from two or three brokerages produces a price range and a strategic-fit comparison. The range is informative; a 5 to 10 percent spread between BOVs is normal and reflects different views on cap rate, NOI normalization, and buyer-pool depth. Spreads above 15 percent usually indicate that one of the brokers is either reaching for the listing with an inflated number or applying a meaningfully different stabilization assumption. Owners should ask for the underlying assumptions, not just the headline number.",
    "BOVs are confidential. The owner is not committed to a sale by requesting one. Brokers should not share BOV details outside the engagement, and owners can use BOVs to inform refinance decisions, partner buyouts, estate planning, internal portfolio review, or simply to track market value over time. The most disciplined owners run a fresh BOV on every asset every 18 to 24 months as part of standing portfolio governance, regardless of whether a sale is contemplated.",
  ].join("\n\n"),
  example:
    "A 110-key Hampton Inn owner in a Texas secondary market requests BOVs from two brokerages. Broker A returns a range of $18.5 million to $20.0 million (8.0 to 8.6 percent cap on $1.6 million stabilized NOI), recommends an asking price of $19.5 million, and identifies six likely buyers (two family offices, three PE roll-ups, one HNW first-time buyer). Broker B returns $19.0 million to $20.5 million (7.8 to 8.4 percent cap on the same NOI), recommends $20.0 million, and identifies a different buyer set of five names. The owner selects Broker A based on buyer-pool depth and goes to market at the recommended $19.5 million. The asset trades at $19.2 million to one of the family offices identified in the BOV.",
  misconceptions: [
    "A BOV is not an appraisal. A BOV is a broker's market-pricing opinion produced free as part of the disposition pitch. An appraisal is a USPAP-compliant valuation produced by a state-licensed appraiser, typically required by lenders. Lenders do not accept BOVs in lieu of appraisals.",
    "A higher BOV is not always a better BOV. Brokers sometimes inflate BOV values to win the listing, then push the owner to reduce the price after weeks of marketing. The right BOV reflects where the asset will actually clear, not the highest defensible number on the page.",
  ],
  faq: [
    {
      q: "How long does a hotel BOV take to complete?",
      a: "Typical turnaround is two to four weeks from the date the owner shares trailing twelve-month financials, STR data, and physical-condition information. Complex full-service or portfolio BOVs can take six to eight weeks. Brokers sometimes deliver a preliminary range within one week, with the full deliverable following.",
    },
    {
      q: "Do BOVs cost money?",
      a: "No. BOVs are produced free as part of the broker's business-development process. The broker invests underwriting time in exchange for the opportunity to be retained on the disposition. Owners are not committed to a sale by requesting a BOV.",
    },
    {
      q: "What information does a hotel broker need to produce a BOV?",
      a: "Trailing twelve months and year-to-date P&L, current STR competitive-set report, capital-expenditure history, current PIP status and cost estimates, franchise agreement summary, brand standards correspondence, property tax bills, and a current rent roll if applicable. The more information available, the more accurate the valuation.",
    },
    {
      q: "How accurate are hotel BOVs?",
      a: "A well-prepared BOV from an active broker typically prices within 3 to 7 percent of the eventual transaction value. Accuracy depends on the broker's depth of market knowledge, the quality of the financial information provided, and the stability of the cap-rate environment between BOV date and trade date.",
    },
    {
      q: "Should an owner solicit multiple BOVs?",
      a: "Yes, on assets where the owner is genuinely considering a sale or wants to test the market. Two or three BOVs produce a price range and let the owner compare strategic fit, buyer-pool depth, and marketing approach across brokerages. A spread of 5 to 10 percent between BOVs is normal; spreads above 15 percent warrant a closer look at the underlying assumptions.",
    },
  ],
  sources: [
    {
      label: "HVS Hotel Valuation Methodology",
      url: "https://www.hvs.com/article/category/172-valuation",
      publisher: "HVS",
    },
    {
      label: "USPAP (Uniform Standards of Professional Appraisal Practice)",
      url: "https://www.appraisalfoundation.org/imis/TAF/Standards/USPAP/TAF/USPAP.aspx",
      publisher: "The Appraisal Foundation",
    },
    {
      label: "AHLA Hotel Investment Resources",
      url: "https://www.ahla.com/research",
      publisher: "AHLA",
    },
    {
      label: "CBRE Hotels Research",
      url: "https://www.cbre.com/insights/sectors/hotels",
      publisher: "CBRE Research",
    },
    {
      label: "Broker Price Opinion Definition",
      url: "https://www.investopedia.com/terms/b/broker-price-opinion.asp",
      publisher: "Investopedia",
    },
  ],
  relatedTerms: ["iom", "cap-rate", "pip"],
  relatedMarkets: ["austin-tx", "dallas-tx", "nashville-tn"],
  relatedBrands: ["hampton-inn", "holiday-inn-express", "hilton"],
  relatedInsights: [
    "hotel-owners-refinancing-wave-2026",
    "select-service-vs-full-service-capital-markets-2026",
  ],
  lastUpdated: "2026-05-10",
  authorSlug: "nate-solomon",
};
