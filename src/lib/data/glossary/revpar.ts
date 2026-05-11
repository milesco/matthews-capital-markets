import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "revpar",
  term: "RevPAR (Revenue Per Available Room)",
  shortDef:
    "RevPAR is revenue per available room. It equals occupancy multiplied by ADR, or rooms revenue divided by total available room nights. It is the headline performance metric in hotel investment.",
  fullDef:
    "Revenue per available room, or RevPAR, is a hotel's rooms revenue divided by total available room nights in the period. Equivalently, it is occupancy times ADR. RevPAR captures how well a property is monetizing its room inventory and is the primary year-over-year performance benchmark used by STR, public REITs, and underwriters.",
  body: [
    "RevPAR is the metric the hotel industry standardized on because it solves a problem that occupancy and ADR alone cannot. A hotel can run 90 percent occupancy at a discounted ADR and look strong on one metric; another hotel can run 65 percent occupancy at premium ADR and look strong on the other. RevPAR collapses both into a single number that captures total rooms-revenue productivity per unit of inventory. Two hotels with the same RevPAR are extracting the same revenue from each available room, regardless of how they got there.",
    "The formula is straightforward. RevPAR equals total rooms revenue divided by total available room nights. A 100-key hotel with 30 days in the month has 3,000 available room nights. If rooms revenue for the month is $450,000, RevPAR is $150. The same number arrives by multiplying occupancy by ADR. If the hotel ran 75 percent occupancy at $200 ADR, RevPAR is 0.75 times $200, or $150.",
    "STR is the industry standard for RevPAR reporting in the United States. Owners subscribe to STR competitive sets to benchmark their RevPAR against direct competitors. The RevPAR index, sometimes called the MPI, ARI, or RGI depending on which STR product is referenced, tells an owner whether they are gaining or losing share of the market RevPAR. A RevPAR index of 110 means the property is producing 10 percent more RevPAR than the competitive set average. An index below 100 means the property is underperforming the comp set.",
    "Underwriters lean on RevPAR because it is the cleanest top-line growth assumption. Forward NOI starts with forward rooms revenue, and forward rooms revenue starts with forward RevPAR. A hotel investment underwriting model typically projects RevPAR growth year by year, then applies a flow-through assumption to translate each dollar of incremental rooms revenue into a dollar of incremental NOI. Flow-through is the lever; RevPAR is the input.",
    "RevPAR mix matters as much as the absolute number. Two hotels with identical $150 RevPAR can have very different cash flow profiles. A property running 70 percent occupancy at $214 ADR carries different cost behavior than one running 90 percent occupancy at $167 ADR. The first has more pricing power and lower variable cost per occupied room; the second has more wear-and-tear, more housekeeping labor, and more food-and-beverage cover counts if the hotel has a restaurant. Underwriters look at the components, not just the headline.",
    "RevPAR is a rooms-only metric. It does not capture food and beverage, parking, spa, resort fees, or ancillary revenue. For full-service and resort hotels where ancillary revenue can be 30 to 50 percent of the top line, TRevPAR (total revenue per available room) is the better full-picture metric. Most public REITs and STR reports lead with RevPAR because rooms is the largest and most comparable line, but full-service operators internally watch TRevPAR alongside RevPAR.",
  ].join("\n\n"),
  example:
    "A 120-key Hampton Inn in Tyler, Texas runs at 74 percent occupancy with a $158 ADR over the trailing twelve months. RevPAR is 0.74 times $158, or $116.92. Total rooms revenue for the year equals RevPAR times available room nights: $116.92 times 120 keys times 365 days equals $5.12 million. If the same hotel grows occupancy to 76 percent and ADR to $164 the following year, RevPAR moves to $124.64, a 6.6 percent year-over-year increase, and rooms revenue grows to $5.46 million.",
  misconceptions: [
    "RevPAR growth is not the same as NOI growth. Flow-through varies by property, brand, and cost structure. A 5 percent RevPAR gain might translate into 7 to 9 percent NOI growth at a select-service hotel with disciplined cost behavior, or it might translate into 3 to 4 percent NOI growth at a full-service property absorbing labor inflation.",
    "A higher RevPAR is not automatically a better-performing hotel. RevPAR must be benchmarked against the competitive set. A $150 RevPAR is exceptional in some submarkets and underperforming in others. The RevPAR index against the comp set is what indicates real performance.",
  ],
  faq: [
    {
      q: "What is a good RevPAR for a hotel?",
      a: "It depends entirely on the chain scale and market. Select-service hotels in Sun Belt secondary markets typically run $90 to $130 RevPAR. Full-service downtown urban properties run $150 to $250. Trophy resort and lifestyle assets can exceed $400 stabilized RevPAR. The right benchmark is always the STR competitive set, not an absolute number.",
    },
    {
      q: "What is the difference between RevPAR and ADR?",
      a: "ADR (average daily rate) is rooms revenue divided by occupied rooms. RevPAR is rooms revenue divided by available rooms. ADR captures pricing per night sold. RevPAR captures revenue per night of inventory, occupied or not. RevPAR equals occupancy times ADR.",
    },
    {
      q: "How is RevPAR used in hotel valuation?",
      a: "Underwriters project forward RevPAR by year, multiply by available room nights to get forward rooms revenue, then layer in F&B and ancillary revenue, then apply a flow-through assumption to derive NOI. NOI divided by an exit cap rate produces the residual value. RevPAR growth is the single largest driver of forward IRR in most hotel underwriting models.",
    },
    {
      q: "What is RevPAR index?",
      a: "RevPAR index, often shown as MPI, ARI, or RGI on STR reports, is a property's RevPAR divided by the competitive set's RevPAR, multiplied by 100. An index of 110 means the property is outperforming its comp set by 10 percent. An index of 90 means it is underperforming by 10 percent.",
    },
    {
      q: "Why do hotels report RevPAR instead of just revenue?",
      a: "RevPAR normalizes for hotel size and reporting period, so a 90-key hotel can be compared to a 300-key hotel and a Q1 reporting period can be compared to a Q3 reporting period. Total rooms revenue tells you how big the business is. RevPAR tells you how productively each room is being monetized.",
    },
  ],
  sources: [
    {
      label: "STR US Hotel Performance Reports",
      url: "https://str.com/data-insights/news",
      publisher: "STR",
    },
    {
      label: "AHLA State of the Hotel Industry 2026",
      url: "https://www.ahla.com/research/state-hotel-industry",
      publisher: "AHLA",
    },
    {
      label: "HVS US Hotel Market Pulse",
      url: "https://www.hvs.com/article/category/126-market-pulse",
      publisher: "HVS",
    },
    {
      label: "CBRE Hotels Research",
      url: "https://www.cbre.com/insights/sectors/hotels",
      publisher: "CBRE Research",
    },
    {
      label: "RevPAR Definition",
      url: "https://www.investopedia.com/terms/r/revpar.asp",
      publisher: "Investopedia",
    },
  ],
  relatedTerms: ["adr", "cap-rate", "bov"],
  relatedMarkets: ["nashville-tn", "miami-fl", "tampa-fl"],
  relatedBrands: ["hampton-inn", "marriott", "hilton"],
  relatedInsights: [
    "adr-recovery-texas-secondary",
    "sun-belt-hospitality-2026-investor-sentiment-preview",
  ],
  lastUpdated: "2026-05-10",
  authorSlug: "luke-thompson",
};
