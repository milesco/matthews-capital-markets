/**
 * Active listings, typed catalog used by /listings, /listings/[slug],
 * and the Home featured strip. Six listings per design spec.
 *
 * `toneClass` is a Tailwind gradient (used until photography lands).
 * `photoCount` is the gallery placeholder count shown on the detail page.
 */

export type Segment =
  | "Select Service"
  | "Full Service"
  | "Resort"
  | "Lifestyle"
  | "Boutique"
  | "Extended Stay";

export type Status = "available" | "under-contract";

export type Listing = {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  region: "Texas" | "Southeast" | "Midwest" | "West" | "Northeast";
  segment: Segment;
  brand: string;
  status: Status;
  keys: number;
  yearBuilt: number;
  yearRenovated?: number;
  askingPrice: string;
  adr?: string;
  revpar?: string;
  occupancy?: string;
  callForOffersDate?: string;
  encumbrance: string;
  brokerSlugs: string[];
  photo: string;
  photoCount: number;
  /**
   * Direct link to a hosted Offering Memorandum. When set, the "Request OM"
   * CTA on the listing detail and broker rail becomes "View OM" and opens
   * this URL in a new tab. Falls back to the contact-form mailto when unset.
   */
  omUrl?: string;
  summary: string;
  bullets: string[];
  toneClass: string;
};

// Four reusable gradient placeholders, match the Home page tones so the
// listings feel like the same family of photography until real images land.
const TONE = {
  navy: "from-[#0a1226] to-[#1a3a6b]",
  blue: "from-[#0066cc] to-[#1a56db]",
  midnight: "from-[#0e1a34] to-[#1a3a6b]",
  graphite: "from-[#1d1d1f] to-[#2c2c2e]",
} as const;

export const listings: Listing[] = [
  {
    slug: "walden-retreats-hill-country",
    name: "Walden Retreats Hill Country",
    address: "5101 Miller Creek Loop",
    city: "Johnson City",
    state: "TX",
    region: "Texas",
    segment: "Boutique",
    brand: "Independent",
    status: "available",
    keys: 15,
    yearBuilt: 2020,
    yearRenovated: 2022,
    askingPrice: "Upon Request",
    adr: "$612",
    revpar: "$465",
    occupancy: "76%",
    callForOffersDate: "March 14, 2026",
    encumbrance: "Unencumbered",
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    photo: "/listings/walden-retreats-hill-country.jpg",
    photoCount: 28,
    omUrl: "https://walden-retreats-om.vercel.app/",
    toneClass: TONE.navy,
    summary:
      "Walden Retreats is a 15-key luxury glamping resort on 96 acres in the Texas Hill Country, twenty-five minutes from downtown Fredericksburg and ninety minutes from Austin. The asset opened in 2020, expanded its food and beverage program in 2022, and trades at the highest ADR of any independent resort in its competitive set.\n\nThe offering is unencumbered with no debt, no franchise, and no management contract. A successor sponsor inherits a stabilized cash flow with embedded upside from cabin expansion (entitled for 24 additional units), wedding venue activation, and a wellness layer the current owner has not pursued.",
    bullets: [
      "Trophy land basis. 96 contiguous acres in Blanco County with creek frontage.",
      "Top-of-set ADR. $612 trailing-twelve, 38% premium to nearest comp.",
      "Expansion entitled. 24 additional cabin pads approved through 2027.",
      "Unencumbered. No debt, no franchise, no management contract.",
      "Repeat guest base. 41% repeat rate inside 18 months, driven by wedding bookings.",
    ],
  },
];


export const listingSlugs = listings.map((l) => l.slug);

export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}
