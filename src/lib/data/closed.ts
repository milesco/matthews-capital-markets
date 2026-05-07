export type SponsorProfile =
  | "PE"
  | "REIT"
  | "Developer"
  | "Family Office"
  | "Corporate";

export type TransactionType =
  | "Investment Sale"
  | "Debt Placement"
  | "Equity Placement"
  | "Recapitalization";

export type Region =
  | "Texas"
  | "Southeast"
  | "Midwest"
  | "West"
  | "Northeast";

export type Segment =
  | "Select Service"
  | "Full Service"
  | "Resort"
  | "Lifestyle"
  | "Boutique"
  | "Extended Stay";

export type ClosedDeal = {
  slug: string;
  name: string;
  city: string;
  state: string;
  region: Region;
  year: number;
  segment: Segment;
  brand?: string;
  keys: number;
  dealSize: string;
  transactionType: TransactionType;
  sponsorProfile: SponsorProfile;
  brokerSlugs: string[];
  toneClass: string;
};

export const closed: ClosedDeal[] = [
  // === MCC Capital Markets — Debt Placement Track Record ===
  // Sourced from "MCC Deals for Matthews" (May 2026).
  // Some keys are estimates (source sheet listed total raise / fees only).
  {
    slug: "26-hotel-portfolio-acquisition-debt",
    name: "26-Hotel Acquisition Portfolio",
    city: "Multi-Asset",
    state: "FL",
    region: "Southeast",
    year: 2021,
    segment: "Select Service",
    brand: "Multi-Brand",
    keys: 2600,
    dealSize: "$90,000,000",
    transactionType: "Debt Placement",
    sponsorProfile: "PE",
    brokerSlugs: ["luke-thompson", "miles-cortez"],
    toneClass: "from-[#1a3a6b] to-[#0066cc]",
  },
  {
    slug: "courtyard-lake-charles-debt",
    name: "Courtyard by Marriott Lake Charles",
    city: "Lake Charles",
    state: "LA",
    region: "Southeast",
    year: 2020,
    segment: "Select Service",
    brand: "Marriott",
    keys: 142,
    dealSize: "$10,850,000",
    transactionType: "Debt Placement",
    sponsorProfile: "Family Office",
    brokerSlugs: ["luke-thompson", "miles-cortez"],
    toneClass: "from-[#0e1a34] to-[#1a3a6b]",
  },
  {
    slug: "marriott-2-pack-del-mar-debt",
    name: "Marriott 2-Pack Del Mar (Select + Full Service)",
    city: "Del Mar",
    state: "CA",
    region: "West",
    year: 2019,
    segment: "Full Service",
    brand: "Marriott",
    keys: 500,
    dealSize: "$100,000,000",
    transactionType: "Debt Placement",
    sponsorProfile: "Developer",
    brokerSlugs: ["luke-thompson", "miles-cortez"],
    toneClass: "from-[#0a1226] to-[#1a3a6b]",
  },
  {
    slug: "full-service-marriott-fort-collins-debt",
    name: "Full Service Marriott Fort Collins",
    city: "Fort Collins",
    state: "CO",
    region: "West",
    year: 2019,
    segment: "Full Service",
    brand: "Marriott",
    keys: 250,
    dealSize: "$26,000,000",
    transactionType: "Debt Placement",
    sponsorProfile: "Developer",
    brokerSlugs: ["luke-thompson", "miles-cortez"],
    toneClass: "from-[#1d1d1f] to-[#2c2c2e]",
  },
  {
    slug: "4-pack-marriott-intercon-portfolio-debt",
    name: "4-Pack Portfolio (3 Marriott + InterContinental)",
    city: "Multi-City",
    state: "FL",
    region: "Southeast",
    year: 2019,
    segment: "Full Service",
    brand: "Multi-Brand",
    keys: 1000,
    dealSize: "$200,000,000",
    transactionType: "Debt Placement",
    sponsorProfile: "PE",
    brokerSlugs: ["luke-thompson", "miles-cortez"],
    toneClass: "from-[#0066cc] to-[#1a56db]",
  },
];

/* --------------------------------------------------------------------------
 * Photo mapping — closed-deal cards use stock-archetype photos by segment.
 * Photos live in /public/closed/ (sourced from Unsplash). Each segment
 * cycles through its available photos in deal-list order so adjacent cards
 * in the grid don't repeat.
 * ------------------------------------------------------------------------ */

const SEGMENT_PHOTOS: Record<Segment, string[]> = {
  "Select Service": [
    "/closed/select-service-1.jpg",
    "/closed/select-service-2.jpg",
    "/closed/select-service-3.jpg",
  ],
  "Full Service": [
    "/closed/full-service-1.jpg",
    "/closed/full-service-2.jpg",
  ],
  Resort: ["/closed/resort-1.jpg", "/closed/resort-2.jpg"],
  Lifestyle: ["/closed/lifestyle-1.jpg"],
  Boutique: ["/closed/boutique-historic-1.jpg"],
  "Extended Stay": ["/closed/extended-stay-1.jpg"],
};

/**
 * Returns a stable photo for a closed deal: cycles through the available
 * archetype photos for that segment based on the deal's index in the
 * filtered segment list. Same deal → same photo, every render.
 */
export function getDealPhoto(deal: ClosedDeal): string {
  const photos = SEGMENT_PHOTOS[deal.segment];
  if (!photos || photos.length === 0) return "/closed/select-service-1.jpg";
  // Index within same-segment deals, in canonical `closed` array order.
  const sameSegment = closed.filter((d) => d.segment === deal.segment);
  const idx = sameSegment.findIndex((d) => d.slug === deal.slug);
  return photos[idx % photos.length];
}

/**
 * Parse a deal-size string like "$19,400,000" into a number.
 * Returns NaN for "Confidential" so it can be sorted last.
 */
export function parseDealSize(value: string): number {
  if (!value || /confidential/i.test(value)) return NaN;
  const cleaned = value.replace(/[^0-9.]/g, "");
  const num = parseFloat(cleaned);
  return Number.isFinite(num) ? num : NaN;
}

/** Sum all numeric deal sizes (skipping Confidential). */
export function totalKnownVolume(items: ClosedDeal[] = closed): number {
  return items.reduce((sum, d) => {
    const n = parseDealSize(d.dealSize);
    return Number.isFinite(n) ? sum + n : sum;
  }, 0);
}
