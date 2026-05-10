export type ServiceLine = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  audience: string;
  keyPoints: { label: string; body: string }[];
  rangeLabel: string;
  rangeValue: string;
  ctaLabel: string;
};

export const services: ServiceLine[] = [
  {
    slug: "investment-sales",
    name: "Hotel Investment Sales",
    shortName: "Investment Sales",
    tagline: "Confidential dispositions, every chain scale.",
    description:
      "Matthews Hotel Markets executes hotel dispositions across select-service, full-service, resort, lifestyle, boutique, and extended-stay segments. We run a 24-week marketing playbook refined across hundreds of closings, with broker-led underwriting, a curated buyer pool drawn from 1M+ relationships, and a confidential process that protects asset performance through close.",
    audience: "Hotel owners, sponsors, REITs, family offices, developers, and operators planning a sale.",
    rangeLabel: "Disposition range",
    rangeValue: "$2M to $200M+",
    keyPoints: [
      {
        label: "24-week playbook",
        body:
          "Engagement → BOV → call-for-offers → negotiation → close. Published timeline, verifiable across past transactions.",
      },
      {
        label: "Direct buyer relationships",
        body:
          "1M+ investor relationships across PE, REITs, family offices, developers, owner-operators, and HNW capital.",
      },
      {
        label: "Confidential by default",
        body:
          "Off-market and discreet on-market processes. Property identity gated behind NDA when seller requires.",
      },
      {
        label: "Underwriting discipline",
        body:
          "Cap rates, ADR/RevPAR, PIP overhang, debt assumption — every BOV is broker-built, not template-built.",
      },
    ],
    ctaLabel: "Request a confidential BOV",
  },
  {
    slug: "capital-markets",
    name: "Hospitality Capital Markets",
    shortName: "Capital Markets",
    tagline: "Hotel debt and equity placement, $5M to $200M+.",
    description:
      "Matthews Capital Markets places hotel debt and equity for acquisitions, refinancings, recapitalizations, construction, and bridge-to-perm executions. Our hospitality capital markets team has structured loans across every chain scale, from Hampton Inn select-service refinancings to luxury resort recapitalizations.",
    audience: "Hotel sponsors, owners, and developers raising debt or equity for hospitality assets.",
    rangeLabel: "Loan size",
    rangeValue: "$5M to $200M+",
    keyPoints: [
      {
        label: "Senior, mezz, bridge, CMBS",
        body:
          "Full capital stack execution. Lender relationships across CMBS, banks, life companies, debt funds, and bridge specialists.",
      },
      {
        label: "Construction + bridge-to-perm",
        body:
          "Active in construction lending and bridge-to-permanent take-outs as the debt market thaws post-rate-cut cycle.",
      },
      {
        label: "Recap + repositioning",
        body:
          "Sponsor recapitalizations, joint-venture equity, preferred equity, and PIP-driven repositioning capital.",
      },
      {
        label: "Underwriting alignment",
        body:
          "Same hospitality underwriting team that runs investment sales — debt requests get a real read, not a generic CRE pitch.",
      },
    ],
    ctaLabel: "Discuss a financing",
  },
  {
    slug: "acquisition-advisory",
    name: "Hotel Acquisition Advisory",
    shortName: "Acquisition Advisory",
    tagline: "Buy-side mandates for institutional and private capital.",
    description:
      "Matthews Hotel Markets advises buy-side capital on hotel acquisitions: deal sourcing, underwriting, market intelligence, and execution. We work with institutional investors, family offices, developers, and HNW principals deploying into hotels for the first time or scaling an existing portfolio.",
    audience: "Institutional investors, family offices, developers, and HNW principals deploying into hotels.",
    rangeLabel: "Acquisition mandate",
    rangeValue: "$5M to portfolio scale",
    keyPoints: [
      {
        label: "Off-market sourcing",
        body:
          "First look at confidential dispositions before they hit market. Our 670+ closing record gives buyers a feed of opportunities.",
      },
      {
        label: "Underwriting support",
        body:
          "BOV-quality underwriting on candidate acquisitions: cap rate, RevPAR forecast, PIP, debt-readiness, exit comps.",
      },
      {
        label: "Market intelligence",
        body:
          "Submarket comps, brand-flag economics, and supply-pipeline reads across the 30+ markets where Matthews is active.",
      },
      {
        label: "Discreet execution",
        body:
          "Buy-side mandates run quietly. We protect buyer identity through LOI when the seller's process requires it.",
      },
    ],
    ctaLabel: "Discuss a buy-side mandate",
  },
];

export function getService(slug: string): ServiceLine | undefined {
  return services.find((s) => s.slug === slug);
}
