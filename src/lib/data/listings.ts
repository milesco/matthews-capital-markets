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
  /**
   * Whether this listing has a full editorial detail page at /listings/[slug].
   * Defaults to true. Lite listings (set to false) appear on the index grid
   * but rely on `omUrl` for the click target — no internal detail page is
   * generated and the entry is skipped from the sitemap.
   */
  hasDetail?: boolean;
  /** Optional. When unset, the card and detail hero render the toneClass
   *  gradient as a placeholder until photography lands. */
  photo?: string;
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
  {
    slug: "hampton-inn-shelbyville",
    name: "Hampton Inn Shelbyville",
    address: "59 E Rampart St",
    city: "Shelbyville",
    state: "IN",
    region: "Midwest",
    segment: "Select Service",
    brand: "Hampton by Hilton",
    status: "available",
    keys: 57,
    yearBuilt: 1999,
    yearRenovated: 2025,
    askingPrice: "$6,400,000",
    adr: "$136.16",
    revpar: "$94.84",
    occupancy: "69.7%",
    encumbrance: "Hilton franchise, 15-year license extension",
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    photoCount: 12,
    toneClass: TONE.midnight,
    summary:
      "A 57-key Hampton Inn in Shelbyville, Indiana, southeast of Indianapolis with direct access to Interstate 74. The asset combines stabilized in-place cash flow with a fresh 15-year Hilton license extension and a 2025 renovation already scheduled, removing the two underwriting questions buyers ask first.\n\nDemand draws from a diversified base. Manufacturing employers Knauf Insulation and Ryobi Die Casting anchor weekday compression. Indiana Grand Racing & Casino drives leisure on weekends. Indianapolis demand generators including the Indiana Convention Center, Lucas Oil Stadium, Eli Lilly, and Salesforce sit within commuting distance and overflow to the Shelbyville sub-market when the urban core sells out.\n\nGuidance is $6.4M, 3.47x trailing-twelve room revenue.",
    bullets: [
      "57 keys, upper-midscale, three stories, interior corridor.",
      "Fresh 15-year Hilton license extension. 2025 renovation scheduled.",
      "2024 projected: 69.7% occupancy, $136.16 ADR, $94.84 RevPAR.",
      "Pricing $6.4M, $112K per key, $196 per SF (32,516 SF on 1.99 acres).",
      "Diversified demand: Knauf, Ryobi, Indiana Grand Casino, Indianapolis spillover.",
      "Amenities: fitness, pool, event space, hot breakfast, meeting rooms, pet friendly, digital key.",
    ],
  },
  /* --------------------------------------------------------------------------
   * Extended hospitality bench. Scraped from
   * matthews.com/listings?propertyType=Hospitality. hasDetail: false → cards
   * appear on /listings index but link out to the matthews.com property page
   * via omUrl; no internal detail page is generated.
   * ------------------------------------------------------------------------ */
  ...([
    { slug: "comfort-suites-daytona-beach", name: "Comfort Suites Daytona Beach", address: "2900 W International Speedway Blvd", city: "Daytona Beach", state: "FL", region: "Southeast" as const, segment: "Select Service" as const, brand: "Comfort Suites", keys: 64, askingPrice: "$8,250,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Comfort-Suites-Daytona-Beach-2900-International-Speedway-I-95-Daytona-Beach-FL-pic-1.jpg", omUrl: "https://www.matthews.com/properties/hospitality-comfort-suites-daytona-beach-daytona-beach-fl", tone: TONE.navy },
    { slug: "super-8-wyndham-kinder", name: "Super 8 by Wyndham", address: "12312 Highway 165", city: "Kinder", state: "LA", region: "Southeast" as const, segment: "Select Service" as const, brand: "Super 8", keys: 56, askingPrice: "$2,350,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Super-8-By-Wyndham-12312-Highway-165-Kinder-LA-pic-3.jpg", omUrl: "https://www.matthews.com/properties/hospitality-super-8-by-wyndham-kinder-la", tone: TONE.midnight },
    { slug: "microtel-wyndham-sidney", name: "Microtel Inn & Suites by Wyndham", address: "1500 S Central Ave", city: "Sidney", state: "MT", region: "West" as const, segment: "Select Service" as const, brand: "Microtel", keys: 76, askingPrice: "$1,750,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Microtel-Inn-Suites-By-Wyndham-1500-S-Central-Ave-Sidney-MT-pic-1.jpg", omUrl: "https://www.matthews.com/properties/hospitality-microtel-inn-suites-by-wyndham-sidney-mt", tone: TONE.blue },
    { slug: "quality-inn-blytheville", name: "Quality Inn Blytheville", address: "1520 E Main St", city: "Blytheville", state: "AR", region: "Southeast" as const, segment: "Select Service" as const, brand: "Quality Inn", keys: 105, askingPrice: "$2,150,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/001_WebPhoto-1.png", omUrl: "https://www.matthews.com/properties/hospitality-quality-inn-blytheville-ar", tone: TONE.graphite },
    { slug: "americas-best-value-inn-caldwell", name: "Americas Best Value Inn Caldwell", address: "1108 W Highway 21", city: "Caldwell", state: "TX", region: "Texas" as const, segment: "Select Service" as const, brand: "Americas Best Value Inn", keys: 52, askingPrice: "$1,410,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Americas-Best-Value-Inn-Caldwell-1108-W-Highway-21-Caldwell-TX-pic-1-1.jpg", omUrl: "https://www.matthews.com/properties/hospitality-americas-best-value-inn-caldwell-tx", tone: TONE.navy },
    { slug: "hampton-by-hilton-akron", name: "Hampton by Hilton Akron", address: "80 Springside Dr", city: "Akron", state: "OH", region: "Midwest" as const, segment: "Select Service" as const, brand: "Hampton by Hilton", keys: 63, askingPrice: "$6,500,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/001_Webfolder-26-scaled.jpg", omUrl: "https://www.matthews.com/properties/hospitality-hampton-by-hilton-akron-oh", tone: TONE.midnight },
    { slug: "springhill-suites-pittsburgh-washington", name: "SpringHill Suites Pittsburgh Washington", address: "16 Trinity Point Dr", city: "Washington", state: "PA", region: "Northeast" as const, segment: "Select Service" as const, brand: "SpringHill Suites", keys: 86, askingPrice: "$5,500,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Springhill-Suites-Pittsburgh-Washington-16-Trinity-Point-Dr-Washington-PA-pic-1.jpg", omUrl: "https://www.matthews.com/properties/hospitality-springhill-suites-pittsburgh-washington-washington-pa", tone: TONE.blue },
    { slug: "la-quinta-wyndham-lumberton", name: "La Quinta Inn & Suites by Wyndham Lumberton", address: "104 North LHS Drive", city: "Lumberton", state: "TX", region: "Texas" as const, segment: "Select Service" as const, brand: "La Quinta by Wyndham", keys: 0, askingPrice: "$5,180,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/03/La-Quinta-Inn-Suites-By-Wyndham-Lumberton-104-North-LHS-Drive-Lumberton-TX-pic-2-scaled.jpg", omUrl: "https://www.matthews.com/properties/hospitality-la-quinta-inn-suites-by-wyndham-lumberton-tx", tone: TONE.graphite },
    { slug: "fox-river-resort-sheridan", name: "Fox River Resort at Sheridan", address: "2558 N 3653 Road", city: "Sheridan", state: "IL", region: "Midwest" as const, segment: "Resort" as const, brand: "Independent", keys: 332, askingPrice: "$2,000,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/03/Fox-River-Resort-At-Sheridan-2558-N.-3653-Road-Sheridan-IL-pic-5-scaled.jpg", omUrl: "https://www.matthews.com/properties/hospitality-fox-river-resort-at-sheridan-sheridan-il", tone: TONE.navy },
    { slug: "hotel-pad-site-morrisville", name: "Hotel Pad Site Morrisville", address: "902 Church Street", city: "Morrisville", state: "NC", region: "Southeast" as const, segment: "Select Service" as const, brand: "Pad Site", keys: 138, askingPrice: "$4,000,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/03/001-Web-Photo.png", omUrl: "https://www.matthews.com/properties/hospitality-hotel-pad-site-morrisville-nc", tone: TONE.midnight },
    { slug: "quality-inn-johnson-city", name: "Quality Inn Johnson City", address: "119 Pinnacle Dr", city: "Johnson City", state: "TN", region: "Southeast" as const, segment: "Select Service" as const, brand: "Quality Inn", keys: 60, askingPrice: "$3,700,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/03/Quality-Inn-119-Pinnacle-Dr-Johnson-City-TN-pic-1.jpg", omUrl: "https://www.matthews.com/properties/hospitality-quality-inn-johnson-city-tn", tone: TONE.blue },
    { slug: "days-inn-wyndham-del-rio", name: "Days Inn by Wyndham Del Rio", address: "2005 Veterans Blvd", city: "Del Rio", state: "TX", region: "Texas" as const, segment: "Select Service" as const, brand: "Days Inn", keys: 101, askingPrice: "$4,200,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/03/Days-Inn-website-1.avif", omUrl: "https://www.matthews.com/properties/hospitality-days-inn-by-wyndham-del-rio-tx", tone: TONE.graphite },
    { slug: "fairfield-inn-suites-monaca", name: "Fairfield Inn & Suites Monaca", address: "1438 Brodhead Road", city: "Monaca", state: "PA", region: "Northeast" as const, segment: "Select Service" as const, brand: "Fairfield by Marriott", keys: 82, askingPrice: "$7,900,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/02/Fairfield-Inn-Suites-1438-Brodhead-Road-Monaca-PA-pic-1.jpg", omUrl: "https://www.matthews.com/properties/hospitality-fairfield-inn-suites-monaca-pa", tone: TONE.navy },
    { slug: "sinclair-gas-hotel-bluff", name: "Sinclair Gas Station + Hotel", address: "161 US-191", city: "Bluff", state: "UT", region: "West" as const, segment: "Boutique" as const, brand: "Sinclair", keys: 26, askingPrice: "$2,400,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/02/Sinclair-Gas-Station-26-Room-Hotel-161-US-191-Bluff-UT-pic-1.jpg", omUrl: "https://www.matthews.com/properties/hospitality-sinclair-gas-station-26-room-hotel-bluff-ut", tone: TONE.midnight },
    { slug: "econo-lodge-suburban-studios-daytona", name: "Econo Lodge & Suburban Studios", address: "2904 W International Speedway Blvd", city: "Daytona Beach", state: "FL", region: "Southeast" as const, segment: "Select Service" as const, brand: "Econo Lodge", keys: 163, askingPrice: "$8,000,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/02/Econo-Lodge-Suburban-Studios-2904-W-International-Speedway-Blvd-Daytona-Beach-FL-pic-1-scaled.jpg", omUrl: "https://www.matthews.com/properties/hospitality-econo-lodge-suburban-studios-daytona-beach-fl", tone: TONE.blue },
    { slug: "place-in-the-sun-palm-springs", name: "A Place in the Sun Garden Hotel", address: "754 E San Lorenzo", city: "Palm Springs", state: "CA", region: "West" as const, segment: "Boutique" as const, brand: "Independent", keys: 17, askingPrice: "$5,750,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/02/001-cover--scaled.jpg", omUrl: "https://www.matthews.com/properties/hospitality-a-place-in-the-sun-garden-hotel-palm-springs-ca", tone: TONE.graphite },
    { slug: "red-roof-inn-somerset", name: "Red Roof Inn Somerset", address: "220 Waterworks Rd", city: "Somerset", state: "PA", region: "Northeast" as const, segment: "Select Service" as const, brand: "Red Roof Inn", keys: 94, askingPrice: "$2,400,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/02/002_WebPhoto-10.jpg", omUrl: "https://www.matthews.com/properties/stnl-red-roof-inn-somerset-pa", tone: TONE.navy },
    { slug: "apple-mountain-resort-clarkesville", name: "Former Apple Mountain Resort (For Auction)", address: "200 Apple Seed Ct", city: "Clarkesville", state: "GA", region: "Southeast" as const, segment: "Resort" as const, brand: "Independent", keys: 96, askingPrice: "Upon Request", photo: "https://cms.matthews.com/wp-content/uploads/2026/01/001_WebPhoto-8-1-scaled.jpg", omUrl: "https://www.matthews.com/properties/hospitality-former-apple-mountain-resort-clarkesville-ga", tone: TONE.midnight },
    { slug: "best-western-plus-fresno", name: "Best Western Plus Fresno Inn", address: "480 E Shaw Ave", city: "Fresno", state: "CA", region: "West" as const, segment: "Select Service" as const, brand: "Best Western Plus", keys: 55, askingPrice: "$7,665,000", photo: "https://cms.matthews.com/wp-content/uploads/2026/01/001_WebPhoto-7-1-scaled.jpg", omUrl: "https://www.matthews.com/properties/hospitality-best-western-plus-fresno-inn-fresno-ca", tone: TONE.blue },
  ].map((l): Listing => ({
    slug: l.slug,
    name: l.name,
    address: l.address,
    city: l.city,
    state: l.state,
    region: l.region,
    segment: l.segment,
    brand: l.brand,
    status: "available",
    keys: l.keys,
    yearBuilt: 0,
    askingPrice: l.askingPrice,
    encumbrance: "See OM",
    brokerSlugs: [],
    hasDetail: false,
    photo: l.photo,
    photoCount: 1,
    omUrl: l.omUrl,
    toneClass: l.tone,
    summary: `${l.keys > 0 ? `${l.keys}-key ` : ""}${l.brand} in ${l.city}, ${l.state}. Full offering details on matthews.com.`,
    bullets: [],
  }))),
];


export const listingSlugs = listings.map((l) => l.slug);

export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}
