export type Office = {
  city: string;
  address: string;
  state: string;
  zip: string;
  phone: string;
  hq?: boolean; // mark Austin as Hospitality Team HQ
};

export const offices: Office[] = [
  {
    city: "Austin",
    address: "9600 N MoPac Expressway, Suite 300",
    state: "TX",
    zip: "78759",
    phone: "(512) 338-7800",
    hq: true,
  },
  {
    city: "Dallas",
    address: "5001 Spring Valley Rd, Suite 100W",
    state: "TX",
    zip: "75244",
    phone: "(972) 755-5200",
  },
  {
    city: "Houston",
    address: "Three Riverway, Suite 800",
    state: "TX",
    zip: "77056",
    phone: "(713) 452-4200",
  },
  {
    city: "San Antonio",
    address: "8200 IH 10 West, Suite 603",
    state: "TX",
    zip: "78230",
    phone: "(210) 343-7800",
  },
  {
    city: "Denver",
    address: "1225 17th Street, Suite 1800",
    state: "CO",
    zip: "80202",
    phone: "(303) 328-2000",
  },
  {
    city: "Chicago Downtown",
    address: "333 W Wacker Dr, Suite 200",
    state: "IL",
    zip: "60606",
    phone: "(312) 327-5400",
  },
  {
    city: "Oakbrook Terrace",
    address: "One Mid-America Plaza, Suite 200",
    state: "IL",
    zip: "60181",
    phone: "(630) 570-2200",
  },
];
