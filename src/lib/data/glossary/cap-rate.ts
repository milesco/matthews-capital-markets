import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "cap-rate",
  term: "Hotel Cap Rate",
  shortDef:
    "A hotel cap rate is the property's stabilized net operating income divided by its purchase price, expressed as a percentage. It is the unlevered first-year yield a buyer accepts.",
  fullDef:
    "A hotel capitalization rate, or cap rate, is the ratio of stabilized net operating income (NOI) to purchase price. A $20 million hotel producing $1.6 million of NOI prices at an 8.0 percent cap rate. Cap rates compare hotel investments to other yield-bearing assets and to each other across markets, brands, and chain scales.",
  body: [
    "Cap rates are the single most-quoted underwriting metric in hotel investment sales. They translate a property's operating performance into a yield that capital allocators can compare against Treasury rates, corporate bonds, and other commercial real estate categories. When a hotel broker quotes an 8.25 percent cap on a Holiday Inn Express in a Sun Belt secondary market, that single number encodes the buyer's view of cash flow stability, brand quality, PIP exposure, and submarket supply risk all at once.",
    "The formula is straightforward. Stabilized NOI divided by purchase price equals the cap rate. NOI is revenue minus operating expenses, with capital expenditures, debt service, and income taxes excluded. The word stabilized matters. Buyers underwrite a forward NOI that assumes the property is operating at its sustainable run rate, not a depressed trailing twelve months caused by a renovation, a brand transition, or a one-time revenue disruption. That stabilized number is what gets divided into price.",
    "Cap rates move inversely with price. When a buyer accepts a tighter cap rate, they are paying more dollars per dollar of NOI. A hotel producing $1.6 million of NOI sells for $20.0 million at an 8.0 percent cap, $21.3 million at 7.5 percent, and $18.8 million at 8.5 percent. Fifty basis points of cap rate compression on a typical select-service trade moves the price by roughly six percent. That is why owners and brokers track cap rate movement closely.",
    "Cap rate bands vary by chain scale, market, and PIP status. As of Q1 2026, stabilized PIP-current select-service hotels in Sun Belt secondary markets price in the 7.50 to 8.50 percent range. Trophy full-service in primary metros prices 7.00 to 8.00 percent. Resort and lifestyle assets in supply-constrained leisure destinations price tighter, often 6.00 to 7.50 percent. Economy and tertiary-market assets price wider, sometimes 9.00 percent or more. The spread between segments has widened, not narrowed, since 2023.",
    "The two variables that move cap rates the most are interest rates and perceived cash flow risk. When the 10-year Treasury moves 100 basis points, hotel cap rates eventually follow, though with a lag of two to four quarters. When buyers grow more confident in the durability of NOI, they accept lower cap rates. When uncertainty rises, around brand standards, PIP costs, F&B labor, or supply growth, buyers demand higher cap rates as compensation for that risk.",
    "Cap rates are unlevered yields. They say nothing about the financing structure. A buyer paying an 8.0 percent cap with 60 percent debt at 7.0 percent interest is targeting a meaningfully different return than a cash buyer at the same cap rate. Sponsors translate cap rates into levered IRRs through their capital stack assumptions. The cap rate is the input. The IRR is the output.",
  ].join("\n\n"),
  example:
    "Consider a 95-key Hampton Inn in a Texas secondary market. Stabilized revenue runs $4.2 million at 72 percent occupancy and $165 ADR. Operating expenses, including franchise fees, brand marketing, property taxes, insurance, and management, total $2.6 million. Stabilized NOI is $1.6 million. The asset trades to a family office at $20.0 million. The cap rate is $1.6 million divided by $20.0 million, or 8.0 percent. If the same buyer pays $21.3 million instead, the cap rate compresses to 7.5 percent and the per-key price moves from $211,000 to $224,000.",
  misconceptions: [
    "Cap rate is not yield-on-cost. Cap rate uses the purchase price as the denominator, not the all-in basis. A buyer paying $20 million for an asset and then funding a $3 million PIP underwrites a meaningfully lower yield-on-cost than the headline cap rate suggests.",
    "A lower cap rate is not always a better deal. Tighter cap rates mean higher prices. Whether the trade is good depends on the buyer's view of forward NOI, hold period, and exit cap, not on whether the cap rate prints low or high.",
  ],
  faq: [
    {
      q: "What is a typical hotel cap rate in 2026?",
      a: "Stabilized PIP-current select-service hotels in Sun Belt secondary markets are trading in the 7.50 to 8.50 percent cap range as of Q1 2026, per HVS US Market Pulse. Full-service trophy assets in primary metros price 7.00 to 8.00 percent. Resort and lifestyle assets in supply-constrained markets price tighter, often 6.00 to 7.50 percent.",
    },
    {
      q: "How is hotel NOI calculated for cap rate purposes?",
      a: "Hotel NOI is total revenue (rooms, F&B, ancillary) minus operating expenses (department costs, undistributed expenses, franchise and brand fees, management fees, property taxes, and insurance). It excludes capital expenditures, debt service, depreciation, and income taxes. The number used in a cap rate calculation should be stabilized, not trailing twelve months in a transition period.",
    },
    {
      q: "Why are select-service hotel cap rates tighter than full-service?",
      a: "Select-service NOI is more legible and predictable. Limited F&B exposure, lean labor, and a known PIP cycle make underwriting faster and the cash flow more durable. Buyers accept tighter cap rates for assets they can underwrite in 60 days versus full-service properties that require multiple quarters of F&B and group-pace analysis.",
    },
    {
      q: "How do interest rates affect hotel cap rates?",
      a: "Cap rates and the 10-year Treasury move directionally together with a two-to-four-quarter lag. Roughly 50 to 75 percent of a sustained Treasury move translates into hotel cap rates over time, though risk premiums and segment-specific factors influence the exact transmission. Cap rates compressed about 50 basis points off the 2024 peak through Q1 2026.",
    },
    {
      q: "What is the difference between going-in cap rate and exit cap rate?",
      a: "The going-in cap rate is the yield at acquisition, calculated against the purchase price. The exit cap rate is the assumed yield at sale, used in underwriting models to derive the residual value. Sponsors typically underwrite exit caps 25 to 50 basis points wider than going-in caps to be conservative on residual.",
    },
  ],
  sources: [
    {
      label: "HVS US Hotel Market Pulse",
      url: "https://www.hvs.com/article/category/126-market-pulse",
      publisher: "HVS",
    },
    {
      label: "CBRE H2 2025 US Cap Rate Survey",
      url: "https://www.cbre.com/insights/reports/us-cap-rate-survey-h2-2025",
      publisher: "CBRE Research",
    },
    {
      label: "STR / CoStar US Hotel Performance Reports",
      url: "https://str.com/data-insights/news",
      publisher: "STR",
    },
    {
      label: "AHLA 2026 State of the Hotel Industry",
      url: "https://www.ahla.com/research/state-hotel-industry",
      publisher: "AHLA",
    },
    {
      label: "Capitalization Rate Definition",
      url: "https://www.investopedia.com/terms/c/capitalizationrate.asp",
      publisher: "Investopedia",
    },
    {
      label: "Federal Reserve H.15 Selected Interest Rates",
      url: "https://www.federalreserve.gov/releases/h15/",
      publisher: "Federal Reserve",
    },
  ],
  relatedTerms: ["revpar", "adr", "bov"],
  relatedMarkets: ["austin-tx", "nashville-tn", "atlanta-ga"],
  relatedBrands: ["hampton-inn", "holiday-inn-express", "marriott"],
  relatedInsights: [
    "select-service-vs-full-service-capital-markets-2026",
    "q1-2026-outlook",
  ],
  lastUpdated: "2026-05-10",
  authorSlug: "luke-thompson",
};
