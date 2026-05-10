export type Market = {
  slug: string;
  city: string;
  state: string;
  region: "Texas" | "Sun Belt" | "Mountain West";
  msa: string;
  geo: { lat: number; lng: number };
  tagline: string;
  marketCommentary: string;
  capRateRange: string;
  adrCommentary: string;
  demandDrivers: string[];
  brokerSlugs: string[];
  primaryRegionLabel: string;
};

// 14 metros prioritized by Matthews's actual coverage density and Sun Belt
// hotel-investment-sales activity. Cap rate ranges and ADR commentary reflect
// Q1 2026 published benchmarks (CBRE H2 2025 Cap Rate Survey, HVS U.S. Market
// Pulse, STR press releases). Refresh quarterly.
export const markets: Market[] = [
  {
    slug: "austin-tx",
    city: "Austin",
    state: "TX",
    region: "Texas",
    msa: "Austin-Round Rock-Georgetown MSA",
    geo: { lat: 30.2672, lng: -97.7431 },
    tagline: "Hotels for sale in Austin, TX.",
    marketCommentary:
      "Austin is one of the deepest hotel investment markets in Texas. Demand is anchored by the State Capitol, University of Texas, the Austin tech corridor, ACL/SXSW seasonal compression, and steady leisure demand from Hill Country crossover. Matthews's headquarters is downtown on Congress Ave., and the Austin team handles dispositions across select-service, full-service, and Hill Country resort assets.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.50%–8.25%. Full-service urban: 7.00%–8.00%. Resort/lifestyle: 6.50%–7.75%.",
    adrCommentary:
      "Austin ADR has held roughly $180–$220 across stabilized urban full-service through Q1 2026, with ACL and SXSW driving event-week premiums. Select-service sits closer to $130–$160 in Round Rock and northwest Austin.",
    demandDrivers: [
      "Texas State Capitol + state-government business travel",
      "University of Texas at Austin (parents, alumni, recruiting)",
      "Austin tech corridor (Tesla, Apple, Oracle, Meta, Indeed)",
      "ACL Music Festival, SXSW (March + October compression)",
      "Hill Country crossover leisure",
      "Formula 1 USGP (October)",
    ],
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    primaryRegionLabel: "Texas Triangle",
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "TX",
    region: "Texas",
    msa: "Dallas-Fort Worth-Arlington MSA",
    geo: { lat: 32.7767, lng: -96.797 },
    tagline: "Hotels for sale in Dallas-Fort Worth, TX.",
    marketCommentary:
      "Dallas-Fort Worth is the largest hotel market in Texas by transaction volume. Corporate-driven weekday demand from Plano, Frisco, Las Colinas, and downtown Dallas is paired with strong group/convention demand at the Hyatt Regency Dallas and Omni Dallas. The DFW Airport hospitality cluster trades actively; Frisco and Plano sub-markets have been the most resilient through cycle resets.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.75%–8.50%. Full-service urban: 7.25%–8.00%. Convention-adjacent full-service: 7.00%–7.75%.",
    adrCommentary:
      "DFW ADR sits around $130–$180 stabilized for select-service across the metro. Convention compression (Mavs games, State Fair, large conferences) drives event-week pricing power.",
    demandDrivers: [
      "Corporate (American Airlines HQ, ExxonMobil, AT&T, Toyota, McKesson)",
      "DFW International Airport hospitality cluster",
      "State Fair of Texas (October)",
      "Dallas Cowboys, Mavericks, Stars, Rangers (year-round event)",
      "Convention business (Kay Bailey Hutchison Convention Center, Frisco Star)",
      "Plano + Frisco corporate relocations",
    ],
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    primaryRegionLabel: "Texas Triangle",
  },
  {
    slug: "houston-tx",
    city: "Houston",
    state: "TX",
    region: "Texas",
    msa: "Houston-The Woodlands-Sugar Land MSA",
    geo: { lat: 29.7604, lng: -95.3698 },
    tagline: "Hotels for sale in Houston, TX.",
    marketCommentary:
      "Houston is an energy-cycle-sensitive market with structural medical and convention demand that smooths the cycle. Texas Medical Center alone drives material year-round demand. The Galleria, Energy Corridor, downtown, and Woodlands sub-markets each have distinct buyer pools and underwriting profiles.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.75%–8.75% (energy-cycle premium). Full-service urban: 7.50%–8.25%. Convention/medical-adjacent: 7.25%–8.00%.",
    adrCommentary:
      "Houston ADR runs $110–$170 stabilized across select-service. Energy-cycle volatility is real but compressed in the most recent cycle as crude prices stabilized in 2025.",
    demandDrivers: [
      "Texas Medical Center (year-round medical / patient-family demand)",
      "Energy Corridor (oil & gas corporate)",
      "Houston Ship Channel (industrial)",
      "Toyota Center, Minute Maid Park, NRG Stadium",
      "George R. Brown Convention Center",
      "Galleria retail district",
    ],
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    primaryRegionLabel: "Texas Triangle",
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "TX",
    region: "Texas",
    msa: "San Antonio-New Braunfels MSA",
    geo: { lat: 29.4241, lng: -98.4936 },
    tagline: "Hotels for sale in San Antonio, TX.",
    marketCommentary:
      "San Antonio is anchored by leisure (the Alamo, River Walk, SeaWorld, Six Flags Fiesta Texas) plus a strong military demand layer (Joint Base San Antonio is the largest military installation in DoD). Convention business at the Henry B. Gonzalez Convention Center adds group depth. Riverwalk hotels trade at premium versus suburban.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.75%–8.50%. Riverwalk full-service: 6.75%–7.50%. Suburban full-service: 7.50%–8.25%.",
    adrCommentary:
      "San Antonio ADR: Riverwalk full-service $180–$240, select-service citywide $110–$150. Fiesta (April) drives material event-week premium.",
    demandDrivers: [
      "Alamo + River Walk leisure",
      "Joint Base San Antonio (military)",
      "SeaWorld, Six Flags, Schlitterbahn",
      "Henry B. Gonzalez Convention Center",
      "South Texas Medical Center",
      "Fiesta San Antonio (April)",
    ],
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    primaryRegionLabel: "Texas Triangle",
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "TN",
    region: "Sun Belt",
    msa: "Nashville-Davidson-Murfreesboro-Franklin MSA",
    geo: { lat: 36.1627, lng: -86.7816 },
    tagline: "Hotels for sale in Nashville, TN.",
    marketCommentary:
      "Nashville is one of the most-watched Sun Belt hotel markets. Music tourism, bachelorette/bachelor party demand, and convention business at Music City Center drive top-tier RevPAR among comparable secondary metros. New supply through 2024-2025 has been heavy; underwriting now centers on which sub-markets absorb the supply best (Music Row, Gulch, downtown core vs. Brentwood/Cool Springs suburban).",
    capRateRange:
      "Stabilized PIP-current select-service: 7.50%–8.25%. Downtown full-service: 6.75%–7.75%. Lifestyle/independent: 6.50%–7.25%.",
    adrCommentary:
      "Nashville ADR has held remarkably resilient: full-service downtown $220–$280 stabilized, select-service $140–$180 citywide. Bachelorette weekends sustain weekend ADR at near-event-pricing levels year-round.",
    demandDrivers: [
      "Music tourism (Grand Ole Opry, Country Music Hall of Fame, Broadway honky-tonks)",
      "Bachelorette / bachelor party leisure",
      "Music City Center (convention)",
      "Healthcare (HCA Healthcare HQ, Vanderbilt Medical)",
      "Sports (Titans, Predators, MLS Nashville SC)",
      "CMA Fest, Jingle Ball, Bonnaroo regional spillover",
    ],
    brokerSlugs: ["luke-thompson", "nate-solomon"],
    primaryRegionLabel: "Sun Belt",
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "GA",
    region: "Sun Belt",
    msa: "Atlanta-Sandy Springs-Alpharetta MSA",
    geo: { lat: 33.749, lng: -84.388 },
    tagline: "Hotels for sale in Atlanta, GA.",
    marketCommentary:
      "Atlanta is the largest Southeast hotel market and a corporate / convention powerhouse. Hartsfield-Jackson Airport drives airport-hotel volume; downtown / Midtown / Buckhead each have distinct underwriting profiles. Atlanta has been the most actively traded Sun Belt market by transaction count, with strong PE and family-office bid for select-service portfolios.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.75%–8.50%. Full-service downtown/Midtown/Buckhead: 7.00%–8.00%. Airport-cluster: 8.00%–8.75%.",
    adrCommentary:
      "Atlanta ADR: full-service Buckhead $200–$250, downtown convention $170–$220, airport select-service $110–$140.",
    demandDrivers: [
      "Hartsfield-Jackson International Airport (busiest airport in U.S.)",
      "Convention (Georgia World Congress Center, Mercedes-Benz Stadium)",
      "Corporate (Coca-Cola, Delta, UPS, Home Depot, Cox, Mercedes-Benz HQ)",
      "Film + TV production",
      "Sports (Falcons, Hawks, Braves, Atlanta United)",
      "Higher education (Georgia Tech, Emory, Georgia State)",
    ],
    brokerSlugs: ["luke-thompson", "miles-cortez"],
    primaryRegionLabel: "Sun Belt",
  },
  {
    slug: "charleston-sc",
    city: "Charleston",
    state: "SC",
    region: "Sun Belt",
    msa: "Charleston-North Charleston MSA",
    geo: { lat: 32.7765, lng: -79.9311 },
    tagline: "Hotels for sale in Charleston, SC.",
    marketCommentary:
      "Charleston is a top-tier Southeast leisure destination with material weekend ADR premium and growing weekday corporate / industrial demand from Boeing, Mercedes-Benz Vans, and the Charleston port. Historic downtown hotel inventory is supply-constrained — this is one of the few Southeast markets where new construction is genuinely difficult, supporting the bid.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.25%–8.00%. Downtown historic full-service: 6.25%–7.25% (supply-constrained premium).",
    adrCommentary:
      "Charleston ADR: historic downtown full-service $300–$450 peak, $200–$280 stabilized. Select-service Mt. Pleasant / North Charleston $130–$170.",
    demandDrivers: [
      "Historic downtown leisure (King Street, Battery, Rainbow Row)",
      "Wedding destination (top 5 in U.S.)",
      "Boeing 787 Dreamliner facility",
      "Mercedes-Benz Vans manufacturing",
      "Port of Charleston",
      "Spoleto Festival USA, Cooper River Bridge Run",
    ],
    brokerSlugs: ["luke-thompson"],
    primaryRegionLabel: "Sun Belt",
  },
  {
    slug: "savannah-ga",
    city: "Savannah",
    state: "GA",
    region: "Sun Belt",
    msa: "Savannah MSA",
    geo: { lat: 32.0809, lng: -81.0912 },
    tagline: "Hotels for sale in Savannah, GA.",
    marketCommentary:
      "Savannah is a similar profile to Charleston — historic-district leisure premium plus growing port and industrial demand from Hyundai's $7.6B Bryan County plant. Boutique and lifestyle hotels in the historic district command top-of-market ADR. Select-service inventory at the I-95/I-16 interchange and around Hunter Army Airfield trades to a different buyer pool.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.50%–8.25%. Historic-district lifestyle/boutique: 6.50%–7.50%.",
    adrCommentary:
      "Savannah ADR: historic district lifestyle/boutique $230–$320 stabilized, select-service citywide $110–$150. St. Patrick's Day (March) drives material weekend compression.",
    demandDrivers: [
      "Historic district leisure (Forsyth Park, River Street, squares)",
      "Wedding destination",
      "Port of Savannah",
      "Hyundai Metaplant America (Bryan County)",
      "Savannah College of Art and Design (SCAD)",
      "St. Patrick's Day (one of largest in U.S.)",
    ],
    brokerSlugs: ["luke-thompson"],
    primaryRegionLabel: "Sun Belt",
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "NC",
    region: "Sun Belt",
    msa: "Charlotte-Concord-Gastonia MSA",
    geo: { lat: 35.2271, lng: -80.8431 },
    tagline: "Hotels for sale in Charlotte, NC.",
    marketCommentary:
      "Charlotte is a financial-services driven hotel market — Bank of America, Truist, and Wells Fargo (East Coast HQ) anchor weekday corporate demand. Charlotte Douglas International Airport supports a strong airport hotel cluster. Uptown + South End trade at premium; suburban airport / Concord / Pineville at select-service economics.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.75%–8.50%. Uptown full-service: 7.00%–8.00%.",
    adrCommentary:
      "Charlotte ADR: Uptown full-service $180–$230, select-service citywide $120–$160.",
    demandDrivers: [
      "Banking + financial services (Bank of America, Truist, Wells Fargo)",
      "Charlotte Douglas Int'l Airport",
      "Bank of America Stadium (Panthers), Spectrum Center (Hornets)",
      "NASCAR (Charlotte Motor Speedway, Concord)",
      "UNC Charlotte, Davidson College",
      "Convention (Charlotte Convention Center)",
    ],
    brokerSlugs: ["luke-thompson"],
    primaryRegionLabel: "Sun Belt",
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "AZ",
    region: "Mountain West",
    msa: "Phoenix-Mesa-Chandler MSA",
    geo: { lat: 33.4484, lng: -112.074 },
    tagline: "Hotels for sale in Phoenix and Scottsdale, AZ.",
    marketCommentary:
      "Phoenix and Scottsdale are one of the largest Mountain West hotel markets and a top resort/lifestyle destination. Scottsdale resort assets command premium economics through peak season (October–April). Phoenix select-service at the airport and in Tempe / Chandler / Mesa serves corporate demand from Intel, TSMC, and the Sky Harbor airport cluster.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.50%–8.25%. Scottsdale resort: 6.00%–7.25% (peak-season premium). Phoenix urban full-service: 7.25%–8.00%.",
    adrCommentary:
      "Scottsdale resort ADR: $400–$700 peak season, $200–$320 stabilized full-year. Phoenix select-service $120–$170 citywide.",
    demandDrivers: [
      "Spring training (Cactus League, March)",
      "Scottsdale resort leisure",
      "Intel Ocotillo + TSMC Phoenix campus",
      "Sky Harbor International Airport",
      "Arizona State University (largest public university in U.S. by enrollment)",
      "WM Phoenix Open, Barrett-Jackson auction",
    ],
    brokerSlugs: ["miles-cortez"],
    primaryRegionLabel: "Mountain West",
  },
  {
    slug: "denver-co",
    city: "Denver",
    state: "CO",
    region: "Mountain West",
    msa: "Denver-Aurora-Centennial MSA",
    geo: { lat: 39.7392, lng: -104.9903 },
    tagline: "Hotels for sale in Denver, CO.",
    marketCommentary:
      "Denver is the largest Mountain West hotel market and Matthews's secondary office. Convention demand at the Colorado Convention Center, year-round outdoor leisure (the gateway to the Rockies), and corporate demand from the energy and aerospace clusters all support stable RevPAR. The DEN airport cluster and downtown / RiNo / LoDo each have distinct sub-market profiles.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.50%–8.25%. Downtown full-service: 7.00%–7.75%. Resort/lifestyle (Aspen, Vail, Steamboat): 5.25%–6.75% (premium).",
    adrCommentary:
      "Denver ADR: downtown full-service $200–$260, select-service citywide $130–$170. Mountain resort markets command $400+ during peak ski season.",
    demandDrivers: [
      "Outdoor leisure (Rocky Mountain National Park, ski resorts, hiking)",
      "Convention (Colorado Convention Center, Gaylord Rockies)",
      "DEN International Airport",
      "Energy + aerospace corporate",
      "Sports (Broncos, Nuggets, Avalanche, Rockies, Rapids)",
      "Outdoor brands HQ cluster (VF Corp, Otterbox, Crocs nearby)",
    ],
    brokerSlugs: ["miles-cortez"],
    primaryRegionLabel: "Mountain West",
  },
  {
    slug: "miami-fl",
    city: "Miami",
    state: "FL",
    region: "Sun Belt",
    msa: "Miami-Fort Lauderdale-Pompano Beach MSA",
    geo: { lat: 25.7617, lng: -80.1918 },
    tagline: "Hotels for sale in Miami, FL.",
    marketCommentary:
      "Miami is one of the highest-RevPAR markets in the U.S. and a top-tier luxury/lifestyle destination. Miami Beach (South Beach, Mid-Beach, North Beach) commands premium economics; Brickell and downtown serve corporate; Wynwood and Design District attract lifestyle and boutique buyers. Cap rates are tight; it is a market where capital is willing to accept lower yield for the supply-constrained urban / beachfront positioning.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.00%–8.00%. South Beach lifestyle/luxury: 5.25%–6.50%. Brickell full-service: 6.50%–7.25%.",
    adrCommentary:
      "Miami Beach lifestyle/luxury ADR: $400–$1,200+ peak, $300–$500 stabilized. Brickell full-service $250–$350. Select-service citywide $150–$210.",
    demandDrivers: [
      "South Beach / Mid-Beach / North Beach leisure",
      "Latin America business gateway",
      "Art Basel Miami Beach (December)",
      "Cruise (Port Miami)",
      "Sports (Heat, Marlins, Dolphins, Inter Miami CF)",
      "Miami International Airport",
    ],
    brokerSlugs: ["luke-thompson"],
    primaryRegionLabel: "Sun Belt",
  },
  {
    slug: "tampa-fl",
    city: "Tampa",
    state: "FL",
    region: "Sun Belt",
    msa: "Tampa-St. Petersburg-Clearwater MSA",
    geo: { lat: 27.9506, lng: -82.4572 },
    tagline: "Hotels for sale in Tampa, FL.",
    marketCommentary:
      "Tampa Bay is a top-10 Sun Belt hotel market with broad-based demand: corporate (the Westshore business district), leisure (Clearwater Beach), convention (Tampa Convention Center), and sports (Buccaneers, Lightning, Rays). The market has been one of the most actively traded in 2024-2026.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.50%–8.25%. Beach-adjacent full-service: 6.75%–7.50%. Westshore corporate-cluster select-service: 7.75%–8.50%.",
    adrCommentary:
      "Tampa ADR: Clearwater Beach $250–$400 peak, downtown select-service $130–$170, beach-adjacent full-service $200–$280.",
    demandDrivers: [
      "Clearwater Beach + St. Pete leisure",
      "Westshore business district (corporate)",
      "Convention (Tampa Convention Center)",
      "Sports (Buccaneers, Lightning, Rays)",
      "Tampa International Airport",
      "Cruise (Port Tampa Bay)",
    ],
    brokerSlugs: ["luke-thompson"],
    primaryRegionLabel: "Sun Belt",
  },
  {
    slug: "orlando-fl",
    city: "Orlando",
    state: "FL",
    region: "Sun Belt",
    msa: "Orlando-Kissimmee-Sanford MSA",
    geo: { lat: 28.5383, lng: -81.3792 },
    tagline: "Hotels for sale in Orlando, FL.",
    marketCommentary:
      "Orlando is the largest leisure hotel market in the U.S. by transaction volume and one of the most institutional. Walt Disney World, Universal Studios (with Epic Universe expansion), SeaWorld, and the Orange County Convention Center anchor a market with extraordinary visitor volume. Lake Buena Vista and International Drive each have distinct buyer pools.",
    capRateRange:
      "Stabilized PIP-current select-service: 7.50%–8.25%. Disney/Universal-adjacent full-service: 7.00%–7.75%. International Drive convention-cluster: 7.25%–8.00%.",
    adrCommentary:
      "Orlando ADR: full-service Disney/Universal-adjacent $230–$340 stabilized, select-service citywide $120–$170. Universal Epic Universe (opened 2025) has materially shifted demand patterns in 2026.",
    demandDrivers: [
      "Walt Disney World",
      "Universal Studios + Epic Universe",
      "SeaWorld + Discovery Cove",
      "Orange County Convention Center (2nd-largest in U.S.)",
      "Orlando International Airport",
      "Lake Nona medical city + Disney corporate",
    ],
    brokerSlugs: ["luke-thompson"],
    primaryRegionLabel: "Sun Belt",
  },
];

export function getMarket(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug);
}
