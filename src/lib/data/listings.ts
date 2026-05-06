/**
 * Active listings — typed catalog used by /listings, /listings/[slug],
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
  summary: string;
  bullets: string[];
  toneClass: string;
};

// Four reusable gradient placeholders — match the Home page tones so the
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
    toneClass: TONE.navy,
    summary:
      "Walden Retreats is a 15-key luxury glamping resort on 96 acres in the Texas Hill Country, twenty-five minutes from downtown Fredericksburg and ninety minutes from Austin. The asset opened in 2020, expanded its food and beverage program in 2022, and trades at the highest ADR of any independent resort in its competitive set.\n\nThe offering is unencumbered with no debt, no franchise, and no management contract. A successor sponsor inherits a stabilized cash flow with embedded upside from cabin expansion (entitled for 24 additional units), wedding venue activation, and a wellness layer the current owner has not pursued.",
    bullets: [
      "Trophy land basis. 96 contiguous acres in Blanco County with creek frontage.",
      "Top-of-set ADR. $612 trailing-twelve, 38% premium to nearest comp.",
      "Expansion entitled. 24 additional cabin pads approved through 2027.",
      "Unencumbered. No debt, no franchise, no management contract.",
      "Repeat guest base. 41% repeat rate inside 18 months — driven by wedding bookings.",
    ],
  },
  {
    slug: "holiday-inn-express-austin-north-central",
    name: "Holiday Inn Express Austin North Central",
    address: "8901 Business Park Drive",
    city: "Austin",
    state: "TX",
    region: "Texas",
    segment: "Select Service",
    brand: "IHG",
    status: "available",
    keys: 124,
    yearBuilt: 2015,
    yearRenovated: 2022,
    askingPrice: "$24,500,000",
    adr: "$162",
    revpar: "$124",
    occupancy: "76%",
    callForOffersDate: "February 28, 2026",
    encumbrance: "Encumbered (IHG franchise through 2035)",
    brokerSlugs: ["luke-thompson", "sarah-chen"],
    photo: "/listings/holiday-inn-express-austin-north-central.jpg",
    photoCount: 24,
    toneClass: TONE.blue,
    summary:
      "A 124-key Holiday Inn Express in Austin's North Central submarket, three miles from The Domain and adjacent to Highway 183 with 168,000 vehicles per day. The asset was completed in 2015 to current IHG Formula Blue prototype and completed a $1.4M soft-goods PIP in 2022 — putting the next franchise-required PIP outside any reasonable hold.\n\nThe sale offers a stabilized select-service hotel inside Austin's tightest submarket for new supply. PIP-light, brand-protected, and underwritten conservatively at trailing-twelve numbers.",
    bullets: [
      "Domain-adjacent. 3 miles from Austin's #1 office and retail submarket.",
      "PIP-light. 2022 soft-goods refresh; next required PIP not until 2030.",
      "Franchise long. IHG license through 2035 — full term assumable.",
      "76% occupancy. Strong corporate and crew-room contract base.",
      "183 visibility. 168K daily vehicle count, full pylon signage.",
    ],
  },
  {
    slug: "hampton-inn-suites-round-rock",
    name: "Hampton Inn & Suites Round Rock",
    address: "2401 N IH-35",
    city: "Round Rock",
    state: "TX",
    region: "Texas",
    segment: "Select Service",
    brand: "Hilton",
    status: "available",
    keys: 98,
    yearBuilt: 2018,
    askingPrice: "$18,900,000",
    adr: "$148",
    revpar: "$108",
    occupancy: "73%",
    callForOffersDate: "March 21, 2026",
    encumbrance: "Encumbered (Hilton franchise through 2033)",
    brokerSlugs: ["sarah-chen", "david-okafor"],
    photo: "/listings/hampton-inn-suites-round-rock.jpg",
    photoCount: 22,
    toneClass: TONE.midnight,
    summary:
      "A 98-key Hampton Inn & Suites in Round Rock, the fastest-growing suburb in the Austin MSA. Direct I-35 frontage with 232,000 daily vehicle counts, two miles from the Dell campus and eight miles from the Samsung Taylor fab now ramping production.\n\nThe hotel was developed in 2018 to current Hampton prototype, has never required a brand-mandated PIP, and benefits from Round Rock's industrial absorption story — 11.4M square feet under construction within a fifteen-mile radius as of Q4 2025.",
    bullets: [
      "Samsung Taylor proximity. 8 miles to the $17B fab now in production.",
      "Dell HQ adjacent. 2 miles to Round Rock campus, 36K employees.",
      "PIP-clean. 2018 vintage on current prototype; no required PIP.",
      "I-35 visibility. 232K daily vehicle counts, full freeway signage.",
      "Industrial absorption. 11.4M SF under construction within 15 miles.",
    ],
  },
  {
    slug: "courtyard-san-antonio-riverwalk",
    name: "Courtyard San Antonio Riverwalk",
    address: "207 N St. Mary's Street",
    city: "San Antonio",
    state: "TX",
    region: "Texas",
    segment: "Full Service",
    brand: "Marriott",
    status: "under-contract",
    keys: 154,
    yearBuilt: 2008,
    yearRenovated: 2021,
    askingPrice: "$42,000,000",
    adr: "$214",
    revpar: "$162",
    occupancy: "76%",
    callForOffersDate: "Open ended",
    encumbrance: "Encumbered (Marriott franchise through 2031)",
    brokerSlugs: ["luke-thompson", "elena-park"],
    photo: "/listings/courtyard-san-antonio-riverwalk.jpg",
    photoCount: 31,
    toneClass: TONE.graphite,
    summary:
      "A 154-key Courtyard by Marriott on the San Antonio Riverwalk, two blocks from the Convention Center and one block from the Henry B. Gonzalez Convention Center expansion. The asset completed a $9.2M comprehensive renovation in 2021, including all guestrooms, public space, F&B, and a rooftop bar conversion.\n\nUnder contract — re-trade contingency window expires December 2025. The buyer is a private REIT executing a Marriott select-service rollup across Texas Tier 1 markets.",
    bullets: [
      "Riverwalk core. Two blocks from Convention Center main entry.",
      "Recent renovation. $9.2M comprehensive 2021 reposition.",
      "Rooftop activation. F&B converted to top-grossing rooftop in submarket.",
      "Convention demand. Henry B. Gonzalez expansion adds 350K sq ft by 2027.",
      "Long franchise. Marriott license through 2031 — assumable.",
    ],
  },
  {
    slug: "the-driskill-trophy-lease-option",
    name: "The Driskill Trophy Lease Option",
    address: "604 Brazos Street",
    city: "Austin",
    state: "TX",
    region: "Texas",
    segment: "Lifestyle",
    brand: "Independent",
    status: "available",
    keys: 189,
    yearBuilt: 1886,
    yearRenovated: 2017,
    askingPrice: "Upon Request",
    adr: "$398",
    revpar: "$311",
    occupancy: "78%",
    callForOffersDate: "Open ended — qualified parties only",
    encumbrance: "Long-term ground lease (term and rent disclosed under NDA)",
    brokerSlugs: ["luke-thompson", "marcus-reyes"],
    photo: "/listings/the-driskill-trophy-lease-option.jpg",
    photoCount: 32,
    toneClass: TONE.graphite,
    summary:
      "The Driskill is the iconic 189-key luxury hotel in downtown Austin, originally built in 1886 and substantially renovated in 2017. The offering is a leasehold acquisition opportunity — the underlying fee is held by a long-tenured family ownership group, and the lease is being marketed to a qualified successor operator.\n\nThe Driskill carries the highest leisure-mix ADR of any hotel in downtown Austin and serves as the social anchor of the Sixth Street historic district. This is a discreet process; financials and lease terms are released under NDA only.",
    bullets: [
      "Trophy asset. The most iconic hotel in Austin — period.",
      "Sixth Street anchor. Social and F&B center of downtown's historic core.",
      "$398 ADR. Highest leisure-mix rate in downtown Austin.",
      "Leasehold structure. Discreet sale to qualified luxury operator.",
      "Brand-flexible. Independent today; soft-brand conversion underwritten.",
    ],
  },
  {
    slug: "fairfield-inn-suites-waco",
    name: "Fairfield Inn & Suites Waco",
    address: "5650 Legend Lake Parkway",
    city: "Waco",
    state: "TX",
    region: "Texas",
    segment: "Select Service",
    brand: "Marriott",
    status: "available",
    keys: 84,
    yearBuilt: 2019,
    askingPrice: "$11,200,000",
    adr: "$132",
    revpar: "$94",
    occupancy: "71%",
    callForOffersDate: "April 4, 2026",
    encumbrance: "Encumbered (Marriott franchise through 2034)",
    brokerSlugs: ["david-okafor", "maya-patel"],
    photo: "/listings/fairfield-inn-suites-waco.jpg",
    photoCount: 18,
    toneClass: TONE.midnight,
    summary:
      "An 84-key Fairfield Inn & Suites by Marriott in Waco, four miles from Magnolia Market and adjacent to the I-35 / Loop 340 interchange. The asset was developed in 2019 to current Fairfield Generation 4.5 prototype — no required PIP through 2030.\n\nWaco's leisure-tourism story is durable: Magnolia, Baylor athletics, and a steady regional drive-to base out of Dallas-Fort Worth. The asset trades below replacement cost at $133K per key.",
    bullets: [
      "Below replacement. $133K per key vs. ~$165K replacement build cost.",
      "Magnolia adjacent. 4 miles to Magnolia Market and Silos District.",
      "Baylor proximity. 5 miles to Baylor stadium and main campus.",
      "PIP-clean. 2019 vintage on current prototype.",
      "Drive-to demand. 90 minutes from DFW — durable leisure base.",
    ],
  },
];

export const listingSlugs = listings.map((l) => l.slug);

export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}
