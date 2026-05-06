/**
 * Matthews Hotel Team — broker roster.
 *
 * Canonical source of truth for all team-related surfaces (Team index, Team
 * bio pages, Listing detail sticky broker rail, broker chips, Closed-deal
 * broker attribution).
 *
 * NOTE: bios, deal track records, and volume figures below are placeholder
 * content for build-out. They are believable but fictional. Replace with
 * legally cleared copy before public launch.
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

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  office: Office;
  specialties: Specialty[];
  phone: string;
  email: string;
  linkedin?: string;
  /** Tailwind gradient class fragment, e.g. "from-[#0a1226] to-[#1a3a6b]" */
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

/* --------------------------------------------------------------------------
 * Photo tones — four gradients distributed across the eight brokers so the
 * /team grid reads as varied without commissioning real photography yet.
 * ------------------------------------------------------------------------ */

const TONE_NAVY_DEEP = "from-[#0a1226] to-[#1a3a6b]";
const TONE_BLUE_BRIGHT = "from-[#0066cc] to-[#1a56db]";
const TONE_NAVY_REVERSE = "from-[#1a3a6b] to-[#0a1226]";
const TONE_GRAPHITE = "from-[#1d1d1f] to-[#2c2c2e]";

/* --------------------------------------------------------------------------
 * Roster — 8 brokers
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
    linkedin: "https://www.linkedin.com/in/luke-thompson",
    photoTone: TONE_NAVY_DEEP,
    bio: `Luke leads Matthews' Texas hospitality capital markets practice, advising owners, developers, and institutional sponsors on full-service and lifestyle hotel transactions across the Sun Belt. Over fifteen years he has closed more than $2.4 billion in hospitality investment sales, with a sweet spot in branded full-service assets between $20M and $150M.

Before joining Matthews, Luke spent eight years on the hospitality investment sales desk of a national platform, where he led the firm's Texas resort and lifestyle practice. His current pipeline includes call-for-offers assignments in Austin, San Antonio, and the Hill Country, as well as recapitalization mandates for repeat institutional sponsors.

Luke is active in HAMA, AHLA, and the Urban Land Institute hotel council. He sources roughly half of his transactions through repeat client relationships and the rest through Matthews' national investor reach.`,
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
    slug: "nate-solomon",
    name: "Nate Solomon",
    title: "Hospitality Associate",
    office: "Austin",
    specialties: ["Select Service", "Boutique"],
    phone: "(737) 296-3875",
    email: "nate.solomon@matthews.com",
    linkedin: "https://www.linkedin.com/in/natesolomon",
    photoTone: TONE_BLUE_BRIGHT,
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
  {
    slug: "sarah-chen",
    name: "Sarah Chen",
    title: "Vice President, Select Service",
    office: "Austin",
    specialties: ["Select Service", "Portfolios"],
    phone: "(512) 338-7800",
    email: "sarah.chen@matthews.com",
    linkedin: "https://www.linkedin.com/in/sarah-chen",
    photoTone: TONE_NAVY_REVERSE,
    bio: `Sarah is one of the most active select-service brokers in Texas, with a particular focus on multi-asset portfolio dispositions for institutional sponsors. Over twelve years she has closed more than $1.6 billion in select-service and extended-stay transactions across the Sun Belt.

Her client roster spans private-equity hospitality funds, REITs, and developer-sponsors, and her referral network into the franchise community routinely surfaces off-market portfolios before they reach the broader investor pool.

Sarah is a frequent panelist at the AHLA Hospitality Investment Forum and an active mentor in the Hospitality Sales Mentorship Program.`,
    yearsExperience: 12,
    careerVolume: "$1.6B",
    last12Volume: "$310M",
    designations: ["CHB", "CCIM"],
    education: [
      "MBA, McCombs School of Business, UT Austin",
      "BA Economics, Rice University",
    ],
    topDeals: [
      {
        name: "12-Asset Hilton Garden Inn Portfolio (Texas)",
        year: 2025,
        keys: 1456,
        segment: "Select Service",
        city: "Various",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Hampton Inn & Suites Frisco North",
        year: 2024,
        keys: 110,
        segment: "Select Service",
        city: "Frisco",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Courtyard Houston Energy Corridor",
        year: 2024,
        keys: 152,
        segment: "Select Service",
        city: "Houston",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Hilton Garden Inn College Station",
        year: 2023,
        keys: 119,
        segment: "Select Service",
        city: "College Station",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "TownePlace Suites Sugar Land",
        year: 2023,
        keys: 96,
        segment: "Select Service",
        city: "Sugar Land",
        state: "TX",
        role: "Buy-side advisor",
      },
      {
        name: "Residence Inn Austin Domain",
        year: 2022,
        keys: 168,
        segment: "Select Service",
        city: "Austin",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Holiday Inn Express Houston Westchase",
        year: 2021,
        keys: 124,
        segment: "Select Service",
        city: "Houston",
        state: "TX",
        role: "Sell-side advisor",
      },
    ],
  },
  {
    slug: "marcus-reyes",
    name: "Marcus Reyes",
    title: "Director, Resort & Lifestyle",
    office: "Austin",
    specialties: ["Resort", "Lifestyle", "Boutique"],
    phone: "(512) 338-7801",
    email: "marcus.reyes@matthews.com",
    linkedin: "https://www.linkedin.com/in/marcus-reyes",
    photoTone: TONE_GRAPHITE,
    bio: `Marcus is the Texas hospitality team's lead resort and lifestyle specialist, advising on independent and soft-branded full-service assets, destination resorts, and emerging boutique product. Eighteen years of hospitality brokerage experience and roughly $2.9 billion in closed transactions.

His practice covers Hill Country resort assemblages, Gulf Coast beach assets, and the West Texas glamping and outdoor-hospitality category that has accelerated since 2022. Marcus underwrites alongside the operations team — most of his closed transactions transition with management plans for the buyer in the deal book.

Marcus serves on the board of the Texas Travel Alliance and is a regular contributor to Hotel Management's resort outlook coverage.`,
    yearsExperience: 18,
    careerVolume: "$2.9B",
    last12Volume: "$480M",
    designations: ["CHB"],
    education: [
      "BA Hospitality Administration, Cornell University School of Hotel Administration",
    ],
    topDeals: [
      {
        name: "Miraval Austin Resort & Spa",
        year: 2025,
        keys: 117,
        segment: "Resort",
        city: "Austin",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "The Driskill Trophy Lease Option",
        year: 2025,
        keys: 189,
        segment: "Lifestyle",
        city: "Austin",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Hyatt Hill Country Resort & Spa",
        year: 2024,
        keys: 500,
        segment: "Resort",
        city: "San Antonio",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "South Congress Hotel",
        year: 2024,
        keys: 83,
        segment: "Boutique",
        city: "Austin",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "La Cantera Resort & Spa Recap",
        year: 2023,
        keys: 496,
        segment: "Resort",
        city: "San Antonio",
        state: "TX",
        role: "Debt placement",
      },
      {
        name: "Hotel Saint Cecilia",
        year: 2022,
        keys: 14,
        segment: "Boutique",
        city: "Austin",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Holiday Inn Resort Galveston",
        year: 2021,
        keys: 230,
        segment: "Resort",
        city: "Galveston",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "The Crockett Hotel San Antonio",
        year: 2020,
        keys: 138,
        segment: "Boutique",
        city: "San Antonio",
        state: "TX",
        role: "Sell-side advisor",
      },
    ],
    languages: ["English", "Spanish"],
  },
  {
    slug: "elena-park",
    name: "Elena Park",
    title: "Senior Associate, Capital Markets",
    office: "Houston",
    specialties: ["Capital Markets", "Distressed"],
    phone: "(713) 452-4200",
    email: "elena.park@matthews.com",
    linkedin: "https://www.linkedin.com/in/elena-park",
    photoTone: TONE_NAVY_DEEP,
    bio: `Elena anchors Matthews' Houston hospitality desk and leads the team's distressed and special-situations practice. Nine years of hospitality and CRE capital markets experience, including loan-sale and note-purchase advisory through the post-COVID workout cycle.

She has closed approximately $1.1 billion of investment sales and debt placements, with a recent surge of activity in CMBS-distressed select-service assets across Texas and Louisiana. Elena's relationships with special-servicer asset managers and bridge-debt funds give the platform unusual access to deals that are not yet on the open market.

Outside the desk, Elena chairs the Houston chapter of CREW Network's hospitality subcommittee.`,
    yearsExperience: 9,
    careerVolume: "$1.1B",
    last12Volume: "$240M",
    designations: ["CCIM"],
    education: [
      "MBA Real Estate, Bauer College of Business, University of Houston",
      "BS Finance, Texas A&M University",
    ],
    topDeals: [
      {
        name: "Crowne Plaza Houston River Oaks (Note Sale)",
        year: 2025,
        keys: 354,
        segment: "Full Service",
        city: "Houston",
        state: "TX",
        role: "Loan-sale advisor",
      },
      {
        name: "DoubleTree by Hilton Houston Greenway",
        year: 2024,
        keys: 388,
        segment: "Full Service",
        city: "Houston",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Holiday Inn Express Houston Westchase",
        year: 2024,
        keys: 124,
        segment: "Select Service",
        city: "Houston",
        state: "TX",
        role: "Debt placement",
      },
      {
        name: "Hampton Inn Baton Rouge Citiplace (REO)",
        year: 2023,
        keys: 130,
        segment: "Select Service",
        city: "Baton Rouge",
        state: "LA",
        role: "Sell-side advisor",
      },
      {
        name: "Embassy Suites Houston Downtown",
        year: 2023,
        keys: 262,
        segment: "Full Service",
        city: "Houston",
        state: "TX",
        role: "Debt placement",
      },
      {
        name: "Hilton Garden Inn The Woodlands",
        year: 2022,
        keys: 122,
        segment: "Select Service",
        city: "The Woodlands",
        state: "TX",
        role: "Sell-side advisor",
      },
    ],
    languages: ["English", "Korean"],
  },
  {
    slug: "david-okafor",
    name: "David Okafor",
    title: "Associate, Select Service",
    office: "Dallas",
    specialties: ["Select Service"],
    phone: "(972) 755-5200",
    email: "david.okafor@matthews.com",
    linkedin: "https://www.linkedin.com/in/davidokafor",
    photoTone: TONE_BLUE_BRIGHT,
    bio: `David covers select-service hotel transactions across the DFW Metroplex and surrounding North Texas markets. Six years of brokerage experience and approximately $340 million in closed volume.

Before joining Matthews, David was a senior underwriter at a regional hospitality bridge lender, where he reviewed roughly 200 hotel financings annually. That credit lens shapes his current practice — every assignment ships with a financing memo built for the lender intake desk, not just the equity reviewer.

David serves on the AAHOA Texas region young-professionals council.`,
    yearsExperience: 6,
    careerVolume: "$340M",
    last12Volume: "$130M",
    designations: [],
    education: ["BBA Finance, Cox School of Business, Southern Methodist University"],
    topDeals: [
      {
        name: "Fairfield Inn & Suites Frisco",
        year: 2025,
        keys: 88,
        segment: "Select Service",
        city: "Frisco",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Hampton Inn Plano",
        year: 2024,
        keys: 96,
        segment: "Select Service",
        city: "Plano",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Holiday Inn Express Dallas Park Cities",
        year: 2024,
        keys: 102,
        segment: "Select Service",
        city: "Dallas",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Home2 Suites by Hilton Allen",
        year: 2023,
        keys: 91,
        segment: "Select Service",
        city: "Allen",
        state: "TX",
        role: "Buy-side advisor",
      },
      {
        name: "TownePlace Suites Arlington Six Flags",
        year: 2022,
        keys: 100,
        segment: "Select Service",
        city: "Arlington",
        state: "TX",
        role: "Sell-side advisor",
      },
    ],
  },
  {
    slug: "maya-patel",
    name: "Maya Patel",
    title: "Analyst",
    office: "Austin",
    specialties: ["Select Service", "Capital Markets"],
    phone: "(512) 338-7802",
    email: "maya.patel@matthews.com",
    linkedin: "https://www.linkedin.com/in/maya-patel",
    photoTone: TONE_NAVY_REVERSE,
    bio: `Maya supports the Texas hospitality team across underwriting, market intelligence, and broker-opinion-of-value production. Two years on the desk, with a research focus on Sun Belt secondary-market ADR and RevPAR recovery.

She owns the team's comp database and is the lead analyst on the quarterly Hotel Investment Outlook. Senior brokers across the team route their early-stage underwriting through Maya before client delivery.

Maya is a CCIM candidate and an active participant in the AHLA's Under 30 Gateway program.`,
    yearsExperience: 2,
    careerVolume: "$0",
    last12Volume: "$0",
    designations: ["CCIM Candidate"],
    education: [
      "BBA Real Estate Finance, McCombs School of Business, UT Austin",
    ],
    topDeals: [],
    languages: ["English", "Hindi", "Gujarati"],
  },
  {
    slug: "patrick-graham",
    name: "Patrick Graham",
    title: "Broker of Record",
    office: "Dallas",
    specialties: ["Capital Markets", "Full Service"],
    phone: "(972) 755-5200",
    email: "patrick.graham@matthews.com",
    linkedin: "https://www.linkedin.com/in/patrickgraham",
    photoTone: TONE_GRAPHITE,
    bio: `Patrick serves as Matthews' Texas Broker of Record, overseeing licensing, regulatory compliance, and the legal infrastructure of the hospitality team's transactions. Twenty-five years of brokerage experience and approximately $5.8 billion in closed hospitality transactions across his career.

In his prior principal role he led the Texas hospitality desk of a national investment-sales platform and personally closed transactions across the full chain-scale spectrum, from luxury full-service trophies to extended-stay portfolios. Today his role is structural — he reviews every Matthews hospitality engagement letter and represented-party disclosure, and serves as the team's senior advisor on complex deal structures.

Patrick is past chair of TREC's Hospitality Advisory Committee and a frequent expert witness in hotel valuation and brokerage-standard disputes.`,
    yearsExperience: 25,
    careerVolume: "$5.8B",
    last12Volume: "$0",
    designations: ["CHB", "CCIM", "MAI"],
    education: [
      "JD, University of Texas School of Law",
      "BBA Finance, Texas Christian University",
    ],
    topDeals: [
      {
        name: "Four Seasons Hotel Houston",
        year: 2024,
        keys: 404,
        segment: "Full Service",
        city: "Houston",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "The Adolphus Dallas",
        year: 2023,
        keys: 407,
        segment: "Full Service",
        city: "Dallas",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Omni Dallas Hotel",
        year: 2022,
        keys: 1001,
        segment: "Full Service",
        city: "Dallas",
        state: "TX",
        role: "Debt placement",
      },
      {
        name: "Fairmont Dallas",
        year: 2022,
        keys: 545,
        segment: "Full Service",
        city: "Dallas",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "The Joule Dallas",
        year: 2021,
        keys: 161,
        segment: "Lifestyle",
        city: "Dallas",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Renaissance Dallas Hotel",
        year: 2021,
        keys: 514,
        segment: "Full Service",
        city: "Dallas",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Sheraton Dallas Hotel",
        year: 2020,
        keys: 1840,
        segment: "Full Service",
        city: "Dallas",
        state: "TX",
        role: "Debt placement",
      },
      {
        name: "Hilton Anatole Dallas",
        year: 2020,
        keys: 1606,
        segment: "Full Service",
        city: "Dallas",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "The Statler Dallas",
        year: 2020,
        keys: 159,
        segment: "Lifestyle",
        city: "Dallas",
        state: "TX",
        role: "Sell-side advisor",
      },
      {
        name: "Hyatt Regency Dallas",
        year: 2020,
        keys: 1120,
        segment: "Full Service",
        city: "Dallas",
        state: "TX",
        role: "Sell-side advisor",
      },
    ],
  },
];

/* --------------------------------------------------------------------------
 * Lookup helper used by listing/closed pages where a record references brokers
 * by slug.
 * ------------------------------------------------------------------------ */

export function getBroker(slug: string): TeamMember | undefined {
  return team.find((b) => b.slug === slug);
}
