import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "adr",
  term: "ADR (Average Daily Rate)",
  shortDef:
    "ADR, or average daily rate, is a hotel's rooms revenue divided by the number of occupied rooms in the same period. It measures pricing power per night sold.",
  fullDef:
    "Average daily rate (ADR) is total rooms revenue divided by the number of paid occupied rooms in a given period. ADR isolates pricing from volume. A hotel running $200 ADR is selling each occupied room at an average $200 nightly rate, regardless of how many rooms were occupied. ADR pairs with occupancy to produce RevPAR.",
  body: [
    "ADR is the hotel industry's pricing metric. It tells an operator and an investor how much the property is charging for each room it actually sells, after blending all booked channels, all rate plans, all loyalty discounts, and all promotional rates into one weighted-average number. Where RevPAR captures total productivity, ADR isolates the rate component. A hotel cannot move RevPAR without moving either occupancy or ADR, and the two levers carry very different cost behavior.",
    "The formula is simple. ADR equals total rooms revenue divided by paid occupied room nights. A 100-key hotel that sells 2,250 occupied rooms in a 30-day month at total rooms revenue of $382,500 has an ADR of $170.00. ADR includes all paid rooms, including loyalty and discounted rates, but typically excludes complimentary and house-use rooms. Definitions vary slightly between STR, public REIT 10-Q reporting, and brand-system reports, so analysts should confirm the basis before comparing across sources.",
    "ADR moves on three primary levers: chain scale and brand standard, market and submarket pricing power, and seasonal or event-driven compression. A Hampton Inn in Lubbock and a Hampton Inn in Charleston both operate under the same brand standards, but Charleston commands a meaningful ADR premium because of its supply-constrained downtown leisure market. Within a single property, an ACL weekend in Austin or a Fiesta weekend in San Antonio can lift ADR 50 to 150 percent above the typical baseline for those nights.",
    "The relationship between ADR and occupancy is the central yield-management trade-off. Operators run revenue management systems that constantly adjust rates to maximize RevPAR, not occupancy or ADR alone. Pushing rate too aggressively erodes occupancy and gives away RevPAR. Discounting rate to fill rooms inflates occupancy, increases variable costs (housekeeping, amenities, F&B covers), and can erode brand positioning. The right balance differs by property, but ADR is rarely maximized at the same point that occupancy is maximized.",
    "ADR is the cleanest pricing-power signal in hotel investment. When a market's ADR grows faster than inflation through a cycle, that market has structural pricing power and the underlying assets are more durable. When ADR declines or stays flat through a recovery, the market is supply-saturated, has lost a major demand source, or is competing against new construction. Texas secondary markets like College Station, Tyler, and Waco have produced positive year-over-year ADR growth in 38 of the past 42 months, a signal of demand strength that institutional underwriters have been slow to price.",
    "ADR is not the same as net rate. Hotels report ADR on the gross room rate, before commissions paid to OTAs (online travel agencies like Expedia and Booking.com) or to consortia like American Express FHR. A hotel reporting $200 ADR on Expedia bookings nets approximately $170 to $180 after the OTA commission. For underwriting purposes, the cost of acquisition through paid channels comes through as a marketing or commission expense line, not as a reduction to ADR.",
  ].join("\n\n"),
  example:
    "A 150-key Courtyard by Marriott in Plano, Texas runs at 71 percent occupancy with 38,853 occupied room nights over the trailing twelve months. Total rooms revenue is $7.0 million. ADR equals $7.0 million divided by 38,853, or $180.16. If the hotel raises rates and ADR moves to $189.00 with occupancy holding flat, rooms revenue grows to $7.34 million, a 4.9 percent gain. If the same rate push erodes occupancy to 68 percent and 37,212 occupied room nights, rooms revenue grows to only $7.03 million, a 0.5 percent gain. The trade-off is what revenue managers solve for daily.",
  misconceptions: [
    "ADR is a gross figure, not a net figure. It includes the full room rate before OTA commissions, travel-agent commissions, and loyalty redemption discounts that are recorded as expenses elsewhere in the P&L. A property with high ADR and a heavy OTA mix can have lower realized economics than a property with lower ADR and direct booking.",
    "ADR alone does not measure performance. A property can grow ADR while losing total rooms revenue if occupancy declines faster than ADR rises. RevPAR, the product of occupancy and ADR, is the cleaner performance benchmark.",
  ],
  faq: [
    {
      q: "How is hotel ADR calculated?",
      a: "ADR equals total rooms revenue divided by the number of paid occupied rooms in the same period. STR, brand-system reports, and public REIT disclosures all use this definition, though treatment of complimentary rooms and loyalty redemptions varies slightly across sources.",
    },
    {
      q: "What is a typical hotel ADR in 2026?",
      a: "It depends on chain scale and market. Select-service hotels in Sun Belt secondary markets typically run $130 to $180 stabilized ADR. Full-service downtown urban properties run $200 to $300. Trophy resort and lifestyle assets in destination markets can stabilize at $400 or more, with peak-week pricing exceeding $1,000 in markets like Miami Beach and Scottsdale.",
    },
    {
      q: "What is the difference between ADR and rate?",
      a: "Rate is the price for a single room on a single night. ADR is the weighted-average rate across all occupied rooms in a period. A hotel might publish a $189 best-available-rate for a Tuesday night and a $359 rate for a Saturday night during a major event, then report a $217 ADR for that month after blending all channels and rate plans.",
    },
    {
      q: "Does ADR include resort fees and other surcharges?",
      a: "Generally no. Resort fees, parking, and ancillary charges are typically excluded from ADR and reported separately. ADR is a rooms-only revenue metric. For full-picture revenue benchmarking, operators look at TRevPOR (total revenue per occupied room) alongside ADR.",
    },
    {
      q: "Why does ADR matter to hotel investors?",
      a: "ADR pricing power signals the durability of demand and the competitive position of the property. Markets with structurally rising ADR command tighter cap rates because forward NOI growth is more credible. Markets with flat or declining ADR get marked down even when current cash flow looks healthy.",
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
      label: "Average Daily Rate Definition",
      url: "https://www.investopedia.com/terms/a/average-daily-rate.asp",
      publisher: "Investopedia",
    },
  ],
  relatedTerms: ["revpar", "cap-rate", "bov"],
  relatedMarkets: ["austin-tx", "san-antonio-tx", "charleston-sc"],
  relatedBrands: ["hampton-inn", "marriott", "hyatt"],
  relatedInsights: [
    "adr-recovery-texas-secondary",
    "q1-2026-outlook",
  ],
  lastUpdated: "2026-05-10",
  authorSlug: "luke-thompson",
};
