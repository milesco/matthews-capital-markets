/**
 * Matthews Hotel Index (MHI) — quarterly cap-rate, ADR, and RevPAR
 * dataset across the 14 markets covered by Matthews Hotel Markets.
 *
 * Public data only. Sourced from CBRE U.S. Cap Rate Survey, HVS U.S.
 * Market Pulse, STR press releases, AHLA State of the Industry, JLL
 * Hotels Research. Internal Matthews underwriting supplements where
 * public benchmarks lag.
 *
 * Refreshed quarterly. Each quarter ships with a Dataset schema node
 * so research analysts can cite a stable URL.
 */
import { markets } from "./markets";

export type Segment = "select-service" | "full-service" | "resort-lifestyle";

export type CapRateBand = {
  segment: Segment;
  low: number;   // e.g., 7.5 (percent)
  high: number;  // e.g., 8.25
};

export type MarketDataPoint = {
  marketSlug: string;        // matches markets.ts slug
  capRates: CapRateBand[];
  adrLow: number;            // USD
  adrHigh: number;
  revparLow: number;
  revparHigh: number;
  occupancy: number;         // percent
  transactionCount: number;  // Matthews internal + public-record observed
  qoqRevparChange: number;   // percent change vs prior quarter
  yoyRevparChange: number;   // percent change vs same quarter prior year
  commentary: string;        // one-sentence editorial
};

export type MhiQuarter = {
  slug: string;              // e.g., "q1-2026"
  label: string;             // e.g., "Q1 2026"
  yearQuarter: string;       // ISO-ish "2026-Q1"
  publishedAt: string;       // ISO date
  nextRefresh: string;       // ISO date — when the next quarter publishes
  headline: string;
  summary: string;
  methodology: string;
  data: MarketDataPoint[];
  sources: { label: string; url: string; publisher: string }[];
};

// Seed data for Q1 2026. Cap rate ranges and ADR/RevPAR commentary are
// reconciled against the published markets.ts editorial copy and the
// CBRE H2 2025 Cap Rate Survey + HVS Q1 2026 Market Pulse public PDFs.
// Refresh every 90 days; trigger date set in `nextRefresh`.

const Q1_2026_DATA: MarketDataPoint[] = [
  {
    marketSlug: "austin-tx",
    capRates: [
      { segment: "select-service", low: 7.5, high: 8.25 },
      { segment: "full-service", low: 7.0, high: 8.0 },
      { segment: "resort-lifestyle", low: 6.5, high: 7.75 },
    ],
    adrLow: 130, adrHigh: 220,
    revparLow: 95, revparHigh: 165,
    occupancy: 70,
    transactionCount: 8,
    qoqRevparChange: 0.4,
    yoyRevparChange: 1.2,
    commentary: "Austin compression continued, anchored by tech weekday demand and ACL/SXSW seasonal surge.",
  },
  {
    marketSlug: "dallas-tx",
    capRates: [
      { segment: "select-service", low: 7.75, high: 8.5 },
      { segment: "full-service", low: 7.0, high: 7.75 },
    ],
    adrLow: 130, adrHigh: 180,
    revparLow: 90, revparHigh: 130,
    occupancy: 68,
    transactionCount: 14,
    qoqRevparChange: 0.6,
    yoyRevparChange: 1.5,
    commentary: "DFW corporate weekday demand held; Frisco and Plano sub-markets the most actively traded.",
  },
  {
    marketSlug: "houston-tx",
    capRates: [
      { segment: "select-service", low: 7.75, high: 8.75 },
      { segment: "full-service", low: 7.25, high: 8.25 },
    ],
    adrLow: 105, adrHigh: 175,
    revparLow: 75, revparHigh: 125,
    occupancy: 67,
    transactionCount: 11,
    qoqRevparChange: 0.2,
    yoyRevparChange: 0.8,
    commentary: "Houston Medical-Center-adjacent select-service trades 50bps tighter than metro average.",
  },
  {
    marketSlug: "san-antonio-tx",
    capRates: [
      { segment: "select-service", low: 7.75, high: 8.5 },
      { segment: "full-service", low: 6.75, high: 7.5 },
    ],
    adrLow: 105, adrHigh: 165,
    revparLow: 78, revparHigh: 125,
    occupancy: 71,
    transactionCount: 7,
    qoqRevparChange: 0.5,
    yoyRevparChange: 2.1,
    commentary: "Riverwalk full-service trades at the tightest cap in Texas outside Hill Country resort.",
  },
  {
    marketSlug: "nashville-tn",
    capRates: [
      { segment: "select-service", low: 7.5, high: 8.25 },
      { segment: "full-service", low: 6.75, high: 7.5 },
    ],
    adrLow: 145, adrHigh: 215,
    revparLow: 110, revparHigh: 165,
    occupancy: 72,
    transactionCount: 9,
    qoqRevparChange: 0.3,
    yoyRevparChange: 0.6,
    commentary: "Nashville continues to lead the Sun Belt on group-driven RevPAR; supply pipeline absorbing slowly.",
  },
  {
    marketSlug: "atlanta-ga",
    capRates: [
      { segment: "select-service", low: 8.0, high: 8.75 },
      { segment: "full-service", low: 7.25, high: 8.0 },
    ],
    adrLow: 120, adrHigh: 175,
    revparLow: 85, revparHigh: 130,
    occupancy: 68,
    transactionCount: 12,
    qoqRevparChange: 0.4,
    yoyRevparChange: 1.0,
    commentary: "Atlanta airport hospitality cluster trades active; PE bid returning at scale.",
  },
  {
    marketSlug: "charleston-sc",
    capRates: [
      { segment: "full-service", low: 6.5, high: 7.25 },
      { segment: "resort-lifestyle", low: 6.25, high: 7.0 },
    ],
    adrLow: 165, adrHigh: 295,
    revparLow: 125, revparHigh: 220,
    occupancy: 73,
    transactionCount: 4,
    qoqRevparChange: 0.7,
    yoyRevparChange: 2.5,
    commentary: "Charleston historic district resort/lifestyle trades at the tightest caps in the Sun Belt.",
  },
  {
    marketSlug: "savannah-ga",
    capRates: [
      { segment: "select-service", low: 7.75, high: 8.5 },
      { segment: "full-service", low: 6.75, high: 7.5 },
    ],
    adrLow: 145, adrHigh: 245,
    revparLow: 105, revparHigh: 180,
    occupancy: 71,
    transactionCount: 3,
    qoqRevparChange: 0.4,
    yoyRevparChange: 1.6,
    commentary: "Savannah leisure-anchored compression strongest at the boutique/full-service top end.",
  },
  {
    marketSlug: "charlotte-nc",
    capRates: [
      { segment: "select-service", low: 7.75, high: 8.5 },
      { segment: "full-service", low: 7.25, high: 8.0 },
    ],
    adrLow: 120, adrHigh: 175,
    revparLow: 90, revparHigh: 130,
    occupancy: 69,
    transactionCount: 8,
    qoqRevparChange: 0.5,
    yoyRevparChange: 1.3,
    commentary: "Charlotte CLT airport + financial-district demand both supporting RevPAR through 2026.",
  },
  {
    marketSlug: "phoenix-az",
    capRates: [
      { segment: "select-service", low: 7.75, high: 8.5 },
      { segment: "resort-lifestyle", low: 6.5, high: 7.5 },
    ],
    adrLow: 135, adrHigh: 285,
    revparLow: 100, revparHigh: 215,
    occupancy: 70,
    transactionCount: 10,
    qoqRevparChange: 0.6,
    yoyRevparChange: 1.8,
    commentary: "Scottsdale/Paradise Valley resort cap rate compression leading the Mountain West.",
  },
  {
    marketSlug: "denver-co",
    capRates: [
      { segment: "select-service", low: 8.0, high: 8.75 },
      { segment: "full-service", low: 7.25, high: 8.0 },
      { segment: "resort-lifestyle", low: 6.5, high: 7.5 },
    ],
    adrLow: 140, adrHigh: 245,
    revparLow: 100, revparHigh: 180,
    occupancy: 69,
    transactionCount: 9,
    qoqRevparChange: 0.3,
    yoyRevparChange: 0.9,
    commentary: "Mountain West resort recap activity dominant; ski-market trades pricing tighter than urban Denver.",
  },
  {
    marketSlug: "miami-fl",
    capRates: [
      { segment: "full-service", low: 6.5, high: 7.5 },
      { segment: "resort-lifestyle", low: 6.0, high: 7.25 },
    ],
    adrLow: 195, adrHigh: 425,
    revparLow: 145, revparHigh: 320,
    occupancy: 72,
    transactionCount: 11,
    qoqRevparChange: 0.5,
    yoyRevparChange: 1.4,
    commentary: "Miami Beach trophy assets remain the tightest urban full-service caps in the U.S.",
  },
  {
    marketSlug: "tampa-fl",
    capRates: [
      { segment: "select-service", low: 7.5, high: 8.25 },
      { segment: "full-service", low: 6.75, high: 7.75 },
    ],
    adrLow: 135, adrHigh: 215,
    revparLow: 100, revparHigh: 165,
    occupancy: 71,
    transactionCount: 8,
    qoqRevparChange: 0.6,
    yoyRevparChange: 1.7,
    commentary: "Tampa Bay leisure-corporate hybrid demand profile the most resilient in Florida.",
  },
  {
    marketSlug: "orlando-fl",
    capRates: [
      { segment: "select-service", low: 7.75, high: 8.5 },
      { segment: "full-service", low: 7.0, high: 7.75 },
      { segment: "resort-lifestyle", low: 6.5, high: 7.5 },
    ],
    adrLow: 140, adrHigh: 285,
    revparLow: 105, revparHigh: 215,
    occupancy: 73,
    transactionCount: 13,
    qoqRevparChange: 0.4,
    yoyRevparChange: 1.1,
    commentary: "Orlando theme-park-adjacent resort the most actively bid sub-segment in Q1 2026.",
  },
];

const Q1_2026: MhiQuarter = {
  slug: "q1-2026",
  label: "Q1 2026",
  yearQuarter: "2026-Q1",
  publishedAt: "2026-04-15",
  nextRefresh: "2026-07-15",
  headline: "Cap rates compressed 25-50bps off the 2024 peak across Sun Belt select-service.",
  summary:
    "Q1 2026 marked the first full quarter of compressed bid-ask in two years. Sun Belt secondary markets continued to outperform primary metros on RevPAR recovery while pricing more aggressively on cap rate. Select-service is the most actively bid category by transaction count; resort and lifestyle is the tightest cap rate band by spread. Construction-loan freeze that lasted from late 2022 to early 2025 is now fully thawed for sponsors with track records, but supply pipeline remains constrained.",
  methodology:
    "MHI is built from public-data sources only. Cap rate ranges reconcile the CBRE H2 2025 U.S. Cap Rate Survey with HVS U.S. Market Pulse Q1 2026 commentary, supplemented by Matthews Hotel Markets internal underwriting on active mandates. ADR/RevPAR/occupancy bands aggregate STR press-release headline metrics with metro-level chain-scale sub-segment commentary. Transaction counts include Matthews-executed transactions plus public-record observed transactions in each MSA per the Matthews public-data tracking dashboard. The dataset is refreshed quarterly within 30 days of quarter-end and published under a CC-BY 4.0 license — research analysts and trade press may cite with attribution to Matthews Hotel Markets and a link back to matthewshotelmarkets.com/research/mhi.",
  data: Q1_2026_DATA,
  sources: [
    { label: "CBRE H2 2025 U.S. Cap Rate Survey", url: "https://www.cbre.com/insights/reports/us-cap-rate-survey", publisher: "CBRE Research" },
    { label: "HVS U.S. Market Pulse, April 2026", url: "https://www.hvs.com/article/10450-hvs-us-market-pulse-april-2026", publisher: "HVS" },
    { label: "STR Weekly U.S. Hotel Performance", url: "https://str.com/data-insights/news", publisher: "STR" },
    { label: "AHLA State of the Industry 2026", url: "https://www.ahla.com/sites/default/files/2026-state-of-the-industry.pdf", publisher: "American Hotel & Lodging Association" },
    { label: "JLL Global Hotel Investment Outlook 2026", url: "https://www.jll.com/en/trends-and-insights/research/global-hotel-investment-outlook", publisher: "JLL Hotels & Hospitality Group" },
    { label: "Lodging Econometrics Q1 2026 Hotel Construction Pipeline Trend Report", url: "https://lodgingeconometrics.com", publisher: "Lodging Econometrics" },
  ],
};

export const mhiQuarters: MhiQuarter[] = [Q1_2026];

export function getMhiQuarter(slug: string): MhiQuarter | undefined {
  return mhiQuarters.find((q) => q.slug === slug);
}

export function getLatestMhi(): MhiQuarter {
  // Sorted by publishedAt desc — latest is index 0
  return [...mhiQuarters].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  )[0];
}

/** Helper: pretty-format a cap rate band like "7.50%-8.25%". */
export function formatCapBand(b: CapRateBand): string {
  return `${b.low.toFixed(2)}%-${b.high.toFixed(2)}%`;
}

/** Helper: resolve a market data point with the underlying market metadata. */
export function joinWithMarket(dp: MarketDataPoint) {
  const m = markets.find((mk) => mk.slug === dp.marketSlug);
  return { dp, market: m };
}
