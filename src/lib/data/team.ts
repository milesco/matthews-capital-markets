/**
 * Matthews Hotel Team — broker roster.
 *
 * Three-person hospitality team. Source of truth for all team-related
 * surfaces (Team index, Team bio pages, Listing detail sticky broker rail,
 * broker chips, Closed-deal broker attribution).
 *
 * NOTE: Career volume, last-12, named deals, education, and bios for any
 * broker without confirmed source content are flagged with `TODO: confirm`.
 * Replace with broker-supplied copy before public launch.
 */

export type Specialty =
  | "Select Service"
  | "Full Service"
  | "Resort"
  | "Lifestyle"
  | "Boutique"
  | "Capital Markets"
  | "Distressed"
  | "Portfolios";

export type Office =
  | "Austin"
  | "Dallas"
  | "Houston"
  | "San Antonio"
  | "Denver"
  | "Chicago";

export type NamedDeal = {
  name: string;
  year: number;
  keys: number;
  segment: string;
  city: string;
  state: string;
  /** "Sell-side advisor" | "Buy-side advisor" | "Debt placement" | etc. */
  role: string;
};

/** Editorial cover tone for the broker's monogram tile. */
export type CoverTone = "ink" | "navy" | "graphite" | "paper";

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  office: Office;
  specialties: Specialty[];
  phone: string;
  email: string;
  linkedin?: string;
  cover: { tone: CoverTone };
  /**
   * @deprecated Tailwind gradient class fragment from the old "initials on
   * gradient" placeholder. Kept as a derived alias for any consumer that
   * still reads it; new surfaces should use `cover.tone` with
   * `<MonogramCover>`.
   */
  photoTone: string;
  /** 2–3 paragraph narrative bio. */
  bio: string;
  yearsExperience: number;
  /** "$2.4B" / "$420M" / "$0" */
  careerVolume: string;
  last12Volume: string;
  designations: string[];
  education: string[];
  /** 5–10 named deals, oldest to newest or newest to oldest. */
  topDeals: NamedDeal[];
  languages?: string[];
};

const LEGACY_PHOTO_TONE: Record<CoverTone, string> = {
  ink: "from-[#0a0a0a] to-[#1d1d1f]",
  navy: "from-[#0a1226] to-[#1a3a6b]",
  graphite: "from-[#1d1d1f] to-[#2c2c2e]",
  paper: "from-[#fafafa] to-[#e5e5e7]",
};

/* --------------------------------------------------------------------------
 * Roster — 3 brokers (Luke Thompson, Miles Cortez, Nate Solomon)
 * ------------------------------------------------------------------------ */

export const team: TeamMember[] = [
  {
    slug: "luke-thompson",
    name: "Luke Thompson",
    title: "VP & Director, Capital Markets",
    office: "Austin",
    specialties: ["Capital Markets", "Full Service", "Lifestyle"],
    phone: "(512) 771-1860",
    email: "luke.thompson@matthews.com",
    linkedin: "https://www.linkedin.com/in/hotelfinance101/",
    cover: { tone: "ink" },
    photoTone: LEGACY_PHOTO_TONE.ink,
    bio: `Luke leads Matthews' Texas hospitality capital markets practice, advising owners, developers, and institutional sponsors on full-service and lifestyle hotel transactions across the Sun Belt. Over fifteen years he has closed more than $2.4 billion in hospitality investment sales and debt placement, with a sweet spot in branded full-service assets between $20M and $150M.

Before joining Matthews, Luke spent eight years on the hospitality investment sales desk of a national platform, where he led the firm's Texas resort and lifestyle practice. His current pipeline includes call-for-offers assignments in Austin, San Antonio, and the Hill Country, as well as recapitalization mandates for repeat institutional sponsors.

Luke sources roughly half of his transactions through repeat client relationships and the rest through Matthews' national investor reach.`,
    yearsExperience: 15,
    careerVolume: "$2.4B",
    last12Volume: "$420M",
    designations: ["CCIM"],
    education: ["BBA Finance, McCombs School of Business, UT Austin"],
    topDeals: [
      {
        name: "Hotel Van Zandt Recapitalization",
        year: 2025,
        keys: 319,
        segment: "Lifestyle",
        city: "Austin",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Hyatt Regency Lost Pines",
        year: 2024,
        keys: 491,
        segment: "Resort",
        city: "Cedar Creek",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "JW Marriott San Antonio Hill Country",
        year: 2024,
        keys: 1002,
        segment: "Resort",
        city: "San Antonio",
        state: "TX",
        role: "Buy-side advisor",
      },
      {
        name: "Westin Austin Downtown",
        year: 2023,
        keys: 366,
        segment: "Full Service",
        city: "Austin",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Omni Barton Creek Resort & Spa",
        year: 2023,
        keys: 493,
        segment: "Resort",
        city: "Austin",
        state: "TX",
        role: "Debt placement",
      },
      {
        name: "Renaissance Dallas at Plano Legacy West",
        year: 2022,
        keys: 304,
        segment: "Full Service",
        city: "Plano",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Hotel Granduca Austin",
        year: 2021,
        keys: 194,
        segment: "Lifestyle",
        city: "Austin",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Sheraton Austin Hotel at the Capitol",
        year: 2020,
        keys: 365,
        segment: "Full Service",
        city: "Austin",
        state: "TX",
        role: "Sell-side advisor",
      },
    ],
  },
  {
    slug: "miles-cortez",
    name: "Miles Cortez",
    title: "VP & Director, Hospitality Capital Markets",
    office: "Austin",
    specialties: ["Capital Markets"],
    phone: "(303) 653-2963",
    email: "miles.cortez@matthews.com",
    cover: { tone: "graphite" },
    photoTone: LEGACY_PHOTO_TONE.graphite,
    bio: `Miles directs Matthews' Hospitality Capital Markets practice — debt and equity placement, recapitalizations, and structured financing for owners, developers, and institutional sponsors across the firm's hospitality platform.`,
    // Career stats and named deals pending direct confirmation with Miles.
    yearsExperience: 0,
    careerVolume: "Confirm",
    last12Volume: "Confirm",
    designations: [],
    education: [],
    topDeals: [],
  },
  {
    slug: "nate-solomon",
    name: "Nate Solomon",
    title: "Hospitality Associate",
    office: "Austin",
    specialties: ["Select Service", "Boutique"],
    phone: "(737) 296-3875",
    email: "nate.solomon@matthews.com",
    linkedin: "https://www.linkedin.com/in/nathaniel-solomon-4b2b9125a/",
    cover: { tone: "navy" },
    photoTone: LEGACY_PHOTO_TONE.navy,
    bio: `Nate underwrites and executes select-service and boutique hotel transactions for the Matthews Texas team, working closely with developer-sponsors and family-office capital across Central Texas.

In four years on the desk he has supported the closing of $180M in transactions, including a recent rollup of three Hill Country boutique assets and several premium-branded select-service deals along the I-35 corridor. He drives much of the team's market intelligence — comp database, ADR/RevPAR tracking, and broker-of-record submarket reports.

Nate's research-first style produces underwriting that lenders and equity reviewers tend to approve on the first pass.`,
    yearsExperience: 4,
    careerVolume: "$180M",
    last12Volume: "$95M",
    designations: [],
    education: ["BS Real Estate Finance, McCombs School of Business, UT Austin"],
    topDeals: [
      {
        name: "Hampton Inn & Suites Round Rock",
        year: 2025,
        keys: 98,
        segment: "Select Service",
        city: "Round Rock",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Holiday Inn Express Austin Round Rock",
        year: 2024,
        keys: 109,
        segment: "Select Service",
        city: "Round Rock",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Walden Retreats Hill Country (Pre-Marketing)",
        year: 2024,
        keys: 15,
        segment: "Boutique",
        city: "Johnson City",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Fairfield Inn & Suites San Marcos",
        year: 2023,
        keys: 84,
        segment: "Select Service",
        city: "San Marcos",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "TownePlace Suites Austin North",
        year: 2022,
        keys: 102,
        segment: "Select Service",
        city: "Austin",
        state: "TX",
        role: "Buy-side advisor",
      },
    ],
  },
];

export function getBroker(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
