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
  {
    slug: "hampton-inn-austin-round-rock",
    name: "Hampton Inn Austin Round Rock",
    city: "Round Rock",
    state: "TX",
    region: "Texas",
    year: 2024,
    segment: "Select Service",
    brand: "Hilton",
    keys: 98,
    dealSize: "$19,400,000",
    transactionType: "Investment Sale",
    sponsorProfile: "PE",
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    toneClass: "from-[#0e1a34] to-[#1a3a6b]",
  },
  {
    slug: "courtyard-houston-westchase-portfolio",
    name: "Courtyard Houston Westchase Portfolio",
    city: "Houston",
    state: "TX",
    region: "Texas",
    year: 2024,
    segment: "Full Service",
    brand: "Marriott",
    keys: 218,
    dealSize: "$52,800,000",
    transactionType: "Investment Sale",
    sponsorProfile: "REIT",
    brokerSlugs: ["luke-thompson", "elena-park"],
    toneClass: "from-[#1a3a6b] to-[#0a1226]",
  },
  {
    slug: "holiday-inn-express-plano",
    name: "Holiday Inn Express Plano",
    city: "Plano",
    state: "TX",
    region: "Texas",
    year: 2023,
    segment: "Select Service",
    brand: "IHG",
    keys: 112,
    dealSize: "$14,200,000",
    transactionType: "Investment Sale",
    sponsorProfile: "Family Office",
    brokerSlugs: ["patrick-graham", "david-okafor"],
    toneClass: "from-[#0066cc] to-[#1a56db]",
  },
  {
    slug: "margaritaville-lake-conroe",
    name: "Margaritaville Lake Conroe",
    city: "Montgomery",
    state: "TX",
    region: "Texas",
    year: 2025,
    segment: "Resort",
    brand: "Independent",
    keys: 360,
    dealSize: "Confidential",
    transactionType: "Investment Sale",
    sponsorProfile: "Developer",
    brokerSlugs: ["marcus-reyes", "luke-thompson"],
    toneClass: "from-[#1d1d1f] to-[#2c2c2e]",
  },
  {
    slug: "tru-by-hilton-san-antonio-nw",
    name: "Tru by Hilton San Antonio NW",
    city: "San Antonio",
    state: "TX",
    region: "Texas",
    year: 2023,
    segment: "Select Service",
    brand: "Hilton",
    keys: 87,
    dealSize: "$11,800,000",
    transactionType: "Debt Placement",
    sponsorProfile: "PE",
    brokerSlugs: ["sarah-chen", "elena-park"],
    toneClass: "from-[#0e1a34] to-[#1a3a6b]",
  },
  {
    slug: "fairfield-inn-austin-domain",
    name: "Fairfield Inn Austin Domain",
    city: "Austin",
    state: "TX",
    region: "Texas",
    year: 2022,
    segment: "Select Service",
    brand: "Marriott",
    keys: 110,
    dealSize: "$16,400,000",
    transactionType: "Investment Sale",
    sponsorProfile: "Family Office",
    brokerSlugs: ["sarah-chen", "maya-patel"],
    toneClass: "from-[#1a3a6b] to-[#0a1226]",
  },
  {
    slug: "the-westin-austin-downtown",
    name: "The Westin Austin Downtown",
    city: "Austin",
    state: "TX",
    region: "Texas",
    year: 2024,
    segment: "Full Service",
    brand: "Marriott",
    keys: 366,
    dealSize: "$98,500,000",
    transactionType: "Investment Sale",
    sponsorProfile: "REIT",
    brokerSlugs: ["luke-thompson", "patrick-graham"],
    toneClass: "from-[#0a1226] to-[#1a3a6b]",
  },
  {
    slug: "home2-suites-lubbock",
    name: "Home2 Suites Lubbock",
    city: "Lubbock",
    state: "TX",
    region: "Texas",
    year: 2023,
    segment: "Extended Stay",
    brand: "Hilton",
    keys: 92,
    dealSize: "$12,100,000",
    transactionType: "Investment Sale",
    sponsorProfile: "Developer",
    brokerSlugs: ["david-okafor", "nate-solomon"],
    toneClass: "from-[#0066cc] to-[#1a56db]",
  },
  {
    slug: "boutique-1886-galveston",
    name: "Boutique 1886 Galveston",
    city: "Galveston",
    state: "TX",
    region: "Texas",
    year: 2025,
    segment: "Boutique",
    brand: "Independent",
    keys: 42,
    dealSize: "$8,600,000",
    transactionType: "Investment Sale",
    sponsorProfile: "Corporate",
    brokerSlugs: ["marcus-reyes", "maya-patel"],
    toneClass: "from-[#1d1d1f] to-[#2c2c2e]",
  },
  {
    slug: "hilton-garden-inn-college-station",
    name: "Hilton Garden Inn College Station",
    city: "College Station",
    state: "TX",
    region: "Texas",
    year: 2022,
    segment: "Select Service",
    brand: "Hilton",
    keys: 122,
    dealSize: "$17,900,000",
    transactionType: "Investment Sale",
    sponsorProfile: "Family Office",
    brokerSlugs: ["sarah-chen", "david-okafor"],
    toneClass: "from-[#0e1a34] to-[#1a3a6b]",
  },
  {
    slug: "aloft-dallas-las-colinas",
    name: "Aloft Dallas Las Colinas",
    city: "Irving",
    state: "TX",
    region: "Texas",
    year: 2024,
    segment: "Lifestyle",
    brand: "Marriott",
    keys: 142,
    dealSize: "$24,600,000",
    transactionType: "Equity Placement",
    sponsorProfile: "PE",
    brokerSlugs: ["patrick-graham", "elena-park"],
    toneClass: "from-[#1a3a6b] to-[#0066cc]",
  },
  {
    slug: "la-cantera-resort-recap",
    name: "La Cantera Resort Recapitalization",
    city: "San Antonio",
    state: "TX",
    region: "Texas",
    year: 2025,
    segment: "Resort",
    brand: "Independent",
    keys: 496,
    dealSize: "Confidential",
    transactionType: "Recapitalization",
    sponsorProfile: "REIT",
    brokerSlugs: ["luke-thompson", "marcus-reyes"],
    toneClass: "from-[#0a1226] to-[#1a3a6b]",
  },

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
    brokerSlugs: ["luke-thompson", "elena-park"],
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
    brokerSlugs: ["luke-thompson", "patrick-graham"],
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
    brokerSlugs: ["luke-thompson", "elena-park"],
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
    brokerSlugs: ["luke-thompson", "patrick-graham"],
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
    brokerSlugs: ["luke-thompson", "elena-park"],
    toneClass: "from-[#0066cc] to-[#1a56db]",
  },
];

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
