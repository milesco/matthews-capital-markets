export type Office = {
  city: string;
  address: string;
  state: string;
  zip: string;
  phone?: string;
  hq?: boolean;
};

// Matthews Hotel Team operates from Austin (HQ) and Denver. The parent firm
// has a national footprint behind that.
export const offices: Office[] = [
  {
    city: "Austin",
    address: "515 Congress Ave., Suite 2410",
    state: "TX",
    zip: "78701",
    hq: true,
  },
  {
    city: "Denver",
    address: "Confirm address with Miles",
    state: "CO",
    zip: "",
  },
];
