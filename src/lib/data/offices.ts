export type Office = {
  slug: string;
  city: string;
  state: string;
  name: string;
  isHeadquarters: boolean;
  streetAddress?: string;
  zip?: string;
  // Legacy alias retained so existing footer / contact components keep
  // compiling without churn.
  address?: string;
  phone?: string;
  geo?: { lat: number; lng: number };
  marketTagline: string;
  marketCommentary: string;
  brokerSlugs: string[];
  hq?: boolean;
};

// Matthews Hotel Markets operates from Austin (HQ) and Denver. The parent
// firm has a national footprint behind that.
export const offices: Office[] = [
  {
    slug: "austin",
    city: "Austin",
    state: "TX",
    name: "Austin Headquarters",
    isHeadquarters: true,
    streetAddress: "515 Congress Ave., Suite 2410",
    address: "515 Congress Ave., Suite 2410",
    zip: "78701",
    geo: { lat: 30.2672, lng: -97.7431 },
    marketTagline: "Texas Sun Belt hotel investment sales, anchored downtown.",
    marketCommentary:
      "Austin is the densest hospitality investment-sales market in Texas, and Matthews Hotel Markets's headquarters sits two blocks from the Capitol on Congress Ave. Our Austin team covers Hill Country resort assets, Austin MSA select-service hotels, and capital markets execution across the Texas triangle (Austin / San Antonio / Houston / Dallas-Fort Worth). Texas accounted for the largest single-state share of the team's 2024 production.",
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    hq: true,
  },
  {
    slug: "denver",
    city: "Denver",
    state: "CO",
    name: "Denver Office",
    isHeadquarters: false,
    address: "Confirm address with Miles",
    zip: "",
    geo: { lat: 39.7392, lng: -104.9903 },
    marketTagline: "Mountain West hospitality capital markets.",
    marketCommentary:
      "The Denver office handles Mountain West hospitality, focused on Colorado, Wyoming, Montana, and Utah resort and lifestyle assets. Capital markets execution covers debt and equity placement across the West, including ski-market resort recapitalizations, urban Denver select-service refinancings, and Mountain West construction financings.",
    brokerSlugs: ["miles-cortez"],
  },
];

export function getOffice(slug: string): Office | undefined {
  return offices.find((o) => o.slug === slug);
}
