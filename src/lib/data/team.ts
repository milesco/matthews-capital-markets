/**
 * Matthews Hotel Team, broker roster.
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

export type Office = string;

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
   * Real headshot path under /public/team/ or a fully-qualified URL. When set,
   * the cover renders the photo instead of the editorial monogram. Falls back
   * to monogram when omitted.
   */
  photo?: string;
  /**
   * @deprecated Tailwind gradient class fragment from the old "initials on
   * gradient" placeholder. Kept as a derived alias for any consumer that
   * still reads it; new surfaces should use `cover.tone` with
   * `<MonogramCover>`.
   */
  photoTone: string;
  /**
   * Whether this member has a full editorial bio page at /team/[slug].
   * Defaults to true; set false for roster-only entries (lite cards, no link).
   */
  hasBio?: boolean;
  /** 2–3 paragraph narrative bio. */
  bio: string;
  yearsExperience: number;
  /** "$2.4B" / "$420M" / "$0" */
  careerVolume: string;
  last12Volume: string;
  designations: string[];
  education: string[];
  /** Industry memberships and licenses (RECA, ULI, TX RE License, etc.). */
  affiliations?: string[];
  /**
   * Editorial fact rows for the team grid card (Waterloo-style profile).
   * Each row renders as `LABEL | value`. 2-3 rows per broker. Keep short.
   */
  factRows?: { label: string; value: string }[];
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
 * Roster, 3 brokers (Luke Thompson, Miles Cortez, Nate Solomon)
 * ------------------------------------------------------------------------ */

export const team: TeamMember[] = [
  {
    slug: "luke-thompson",
    name: "Luke Thompson",
    title: "VP & Director, Capital Markets",
    office: "Austin",
    hasBio: true,
    specialties: ["Capital Markets"],
    phone: "(512) 771-1860",
    email: "luke.thompson@matthews.com",
    linkedin: "https://www.linkedin.com/in/hotelfinance101/",
    cover: { tone: "ink" },
    photo: "/headshots/luke-thompson.avif",
    photoTone: LEGACY_PHOTO_TONE.ink,
    bio: `Luke is a real estate professional at Matthews™ specializing in hospitality capital markets nationwide. He focuses on originating and closing loans and advising clients through investment-sales processes. His methodology centers on structured finance, development, and asset sales.

Before Matthews, Luke worked in private credit, direct lending, preferred equity, and mezzanine debt at Matterhorn Capital Partners. With over fifteen years of experience in hotel real estate structured finance, development, and asset sales, Luke has built a distinguished career. His background also includes the investment-banking arm of HVS, the world's leading hospitality consulting firm, and co-founding the boutique mortgage brokerage F10 Hotels.

In 2019, Luke spearheaded a joint venture to develop a 276-key, dual-branded Hilton hotel in downtown Austin, TX, which opened in 2024. He further expanded his personal portfolio through his investment arm, Coldwater Equites, with the ground-up development of the 103-key Home2 Suites by Hilton in Del Rio, TX, which opened in late 2025.`,
    yearsExperience: 15,
    careerVolume: "Confirm",
    last12Volume: "Confirm",
    designations: [],
    education: ["B.A., Communications & Business, Baylor University"],
    affiliations: [
      "Real Estate Council of Austin (RECA)",
      "Urban Land Institute (ULI)",
      "Asian American Hotel Owners Association (AAHOA)",
      "Texas Real Estate Commission, License No. 593889",
    ],
    factRows: [
      {
        label: "Discipline",
        value:
          "Hospitality capital markets. Loan origination, structured finance, asset sales.",
      },
      {
        label: "Background",
        value:
          "Matterhorn Capital Partners, HVS investment banking, co-founder of F10 Hotels.",
      },
      {
        label: "Roots",
        value:
          "B.A. Communications & Business, Baylor. Fifteen+ years in hotel real estate.",
      },
    ],
    topDeals: [],
  },
  {
    slug: "miles-cortez",
    name: "Miles Cortez III",
    title: "VP & Director, Hospitality Capital Markets",
    office: "Denver",
    hasBio: true,
    specialties: ["Capital Markets", "Portfolios"],
    phone: "(303) 653-2963",
    email: "miles.cortez@matthews.com",
    linkedin: "https://www.linkedin.com/in/miles-cortez-iii-3ab26212/",
    cover: { tone: "graphite" },
    photo: "/headshots/miles-cortez.avif",
    photoTone: LEGACY_PHOTO_TONE.graphite,
    bio: `Miles is a seasoned real estate investment banker and investment professional for Matthews™ Capital Markets, with an established track record of leading complex finance transactions across private equity, venture capital, and public markets, principally in the hospitality sector. A creative financial strategist, Miles leverages his buy-side experience to engineer tailored financial solutions for institutional clients. His expertise spans opportunity identification, capital sourcing, and transaction execution, and he brings professionalism and clarity to every stage of the investment lifecycle. Miles approaches every transaction through a buy-side lens, informed by his own experience as a principal.

Prior to Matthews, Miles founded and remains a principal and shareholder at SparkPoint Real Estate Advisors in Denver, Colorado, a real estate–focused merchant bank. He also led the institutional client effort at F10 Hotels, one of the nation's most active hotel mortgage brokers, where he placed more than $500 million in financing, including a landmark CMBS refinance for a major private equity client and a mezzanine piece for the acquisition of a portfolio from Blackstone.

Earlier in his career, Miles co-founded Aventine Capital Partners, where he played a pivotal role in the $1B+ development of Mayakoba, a master-planned luxury resort in Mexico, in partnership with Rosewood, Fairmont, Viceroy, and Hyatt. He also served as CFO and founding principal of Punch Bowl Social, leading the company's initial capitalization and building the financial infrastructure during its national expansion.`,
    // Career stats pending direct confirmation with Miles.
    yearsExperience: 0,
    careerVolume: "$1.5B+",
    last12Volume: "Confirm",
    designations: [],
    education: [],
    factRows: [
      {
        label: "Discipline",
        value:
          "Hospitality capital markets. Debt and equity placement, recapitalizations, structured finance.",
      },
      {
        label: "Background",
        value:
          "Founder of SparkPoint (Denver merchant bank). F10 Hotels institutional desk. Co-founder, Aventine Capital Partners.",
      },
      {
        label: "Track record",
        value:
          "$500M+ placed at F10 including a Blackstone-portfolio mezzanine. Pivotal role in the $1B+ Mayakoba resort.",
      },
    ],
    topDeals: [],
  },
  {
    slug: "nate-solomon",
    name: "Nate Solomon",
    title: "Hospitality Associate",
    office: "Austin",
    hasBio: true,
    specialties: ["Select Service"],
    phone: "(737) 296-3875",
    email: "nate.solomon@matthews.com",
    linkedin: "https://www.linkedin.com/in/nathaniel-solomon-4b2b9125a/",
    cover: { tone: "navy" },
    photo: "/headshots/nate-solomon.jpg",
    photoTone: LEGACY_PHOTO_TONE.navy,
    bio: `Nate is a real estate professional specializing in the acquisition and disposition of hospitality properties at Matthews™. He leverages extensive knowledge of underwriting and market fundamentals. Nate's expertise extends to asset management, property identification and acquisition, lease coordination and negotiation, compliance and permitting, and financial reconciliation and reporting, all of which provide a distinct advantage in navigating complex hospitality transactions. He is dedicated to providing clients with data-driven insights and meticulous attention to detail, ensuring strategic decision-making and optimal outcomes for every opportunity within the national hospitality market.`,
    // Career stats and named deals pending direct confirmation with Nate.
    yearsExperience: 0,
    careerVolume: "Confirm",
    last12Volume: "Confirm",
    designations: [],
    education: ["B.S., Economics, St. Edward's University"],
    affiliations: ["Texas Real Estate Commission, License No. 842300"],
    factRows: [
      {
        label: "Discipline",
        value:
          "Acquisition and disposition of hospitality assets. Underwriting, market intelligence.",
      },
      {
        label: "Background",
        value:
          "Hospitality investment sales at Matthews. Asset management, lease coordination, compliance, financial reconciliation.",
      },
      {
        label: "Roots",
        value:
          "B.S. Economics, St. Edward's University. Texas Real Estate Commission license.",
      },
    ],
    topDeals: [],
  },
  /* --------------------------------------------------------------------------
   * Extended hospitality bench, lite entries.
   * Scraped from matthews.com/about-us/our-agents?specialties=hospitality.
   * hasBio: false ⇒ rendered as photo + name + title cards only, no bio page.
   * ------------------------------------------------------------------------ */
  ...([
    { slug: "mitchell-glasson", name: "Mitchell Glasson", title: "First Vice President", office: "Orange County, CA", phone: "(949) 432-4502", email: "mitchell.glasson@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2016/05/Mitchell-Glasson-Web-Use.jpg" },
    { slug: "francisco-nacorda", name: "Francisco Nacorda", title: "Senior Vice President", office: "Fort Lauderdale, FL", phone: "", email: "francisco.nacorda@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/02/Francisco-Nacorda-Web-Use.jpg" },
    { slug: "dustin-robinett", name: "Dustin Robinett", title: "Vice President", office: "Kansas City, MO", phone: "(303) 268-8243", email: "dustin.robinett@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Dustin-Robinett-Web-Use-1.jpg" },
    { slug: "mabelle-perez", name: "Mabelle Perez", title: "Vice President", office: "Fort Lauderdale, FL", phone: "(786) 206-9739", email: "mabelle.perez@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Mabelle-Perez-Web-Use.jpg" },
    { slug: "david-loving", name: "David Loving", title: "Associate Market Leader", office: "Tampa, FL", phone: "(813) 358-3599", email: "david.loving@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/David-Loving-Web-Use-1.jpg" },
    { slug: "andrew-senatore", name: "Andrew Senatore", title: "Senior Associate", office: "Phoenix, AZ", phone: "(602) 946-4901", email: "andrew.senatore@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Andrew-Senatore-Web-Use.jpg" },
    { slug: "hunter-davis", name: "Hunter Davis", title: "Senior Associate", office: "Phoenix, AZ", phone: "(602) 946-4371", email: "hunter.davis@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Hunter-Davis-Web-Use-1-1.jpg" },
    { slug: "alfonso-garcia", name: "Alfonso Garcia", title: "Associate", office: "Dallas, TX", phone: "(214) 432-4719", email: "alfonso.garcia@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Alfonso-Garcia-Web-Use.jpg" },
    { slug: "ash-singh", name: "Ash Singh", title: "Associate", office: "Encino, CA", phone: "(818) 330-4508", email: "ash.singh@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Ash-Singh-Web-Use.jpg" },
    { slug: "chris-beavers", name: "Chris Beavers", title: "Associate", office: "Nashville, TN", phone: "(629) 262-0382", email: "chris.beavers@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Chris-Beavers-Web-Use.png" },
    { slug: "dominic-henderson", name: "Dominic Henderson", title: "Associate", office: "Orange County, CA", phone: "(310) 561-8254", email: "dominic.henderson@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Dominic-Henderson-Web-Use.jpg" },
    { slug: "elias-zakas", name: "Elias Zakas", title: "Associate", office: "Phoenix, AZ", phone: "(602) 715-2609", email: "elias.zakas@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Elias-Zakas-Web-Use.jpg" },
    { slug: "jake-senatore", name: "Jake Senatore", title: "Associate", office: "Phoenix, AZ", phone: "(602) 922-3471", email: "jake.senatore@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Jake-Senatore-Web-Use.jpg" },
    { slug: "julio-leyva", name: "Julio Leyva", title: "Associate", office: "Fort Lauderdale, FL", phone: "(754) 288-1327", email: "julio.leyva@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/03/Julio-Leyva-Web-Use.jpg" },
    { slug: "luke-whittaker", name: "Luke Whittaker", title: "Associate", office: "Orange County, CA", phone: "(317) 493-0055", email: "luke.whittaker@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Luke-Whittaker-Web-Use-2.jpg" },
    { slug: "ritik-patel", name: "Ritik Patel", title: "Associate", office: "Cleveland, OH", phone: "(216) 367-7832", email: "ritik.patel@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/09/Ritik-Patel-Web-Use.jpg" },
    { slug: "ryan-kawai-sanchez", name: "Ryan Kawai Sanchez", title: "Associate", office: "Orange County, CA", phone: "(949) 287-5854", email: "ryan.sanchez@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Ryan-Sanchez-Use-1.jpg" },
    { slug: "youssef-alkalabani", name: "Youssef Alkalabani", title: "Associate", office: "Nashville, TN", phone: "(615) 234-5749", email: "youssef.alkalabani@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/09/Youssef-Alkalabani-Web-Use.jpg" },
    { slug: "jordan-beletz", name: "Jordan Beletz", title: "Sales Analyst", office: "Phoenix, AZ", phone: "(520) 308-6079", email: "jordan.beletz@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/01/Jordan-Beletz-Web-Use.jpg" },
  ].map((a, i): TeamMember => {
    const tones: CoverTone[] = ["ink", "navy", "graphite", "paper"];
    const tone = tones[i % tones.length];
    return {
      ...a,
      hasBio: false,
      specialties: [],
      cover: { tone },
      photoTone: LEGACY_PHOTO_TONE[tone],
      bio: "",
      yearsExperience: 0,
      careerVolume: "$0",
      last12Volume: "$0",
      designations: [],
      education: [],
      topDeals: [],
    };
  })),
];

export function getBroker(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
