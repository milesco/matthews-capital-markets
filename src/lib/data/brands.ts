export type BrandFlag = {
  slug: string;
  name: string;
  parentCompany: string;
  parentTicker?: string;
  flagFamilies: string[];
  segment: string;
  tagline: string;
  intro: string;
  underwritingNotes: string[];
  buyerPool: string;
  ourActivity: string;
};

export const brands: BrandFlag[] = [
  {
    slug: "hampton-inn",
    name: "Hampton Inn",
    parentCompany: "Hilton Worldwide",
    parentTicker: "HLT",
    flagFamilies: ["Hampton Inn", "Hampton Inn & Suites", "Hampton by Hilton"],
    segment: "Select Service / Upper Midscale",
    tagline: "Hampton Inn for sale: select-service investment specialists.",
    intro:
      "Hampton Inn is the largest single-flag select-service brand in the United States and one of the most actively traded select-service hospitality assets in commercial real estate. Matthews Hotel Markets executes Hampton Inn dispositions, capital markets, and acquisition advisory across all Hampton family flags (Hampton Inn, Hampton Inn & Suites, Hampton by Hilton). We work with owners selling a single Hampton or a portfolio, and with buyers underwriting Hampton acquisitions.",
    underwritingNotes: [
      "Hampton economics are anchored on Hilton Honors mix, ADR premium versus competing midscale flags, and PIP cycle timing — typically 7-10 years.",
      "Cap rates for stabilized, PIP-current Hamptons in Texas secondary markets compressed 25-50bps in early 2026 versus the 2024 peak. Limited new construction supports the bid.",
      "Buyer pool is broad: HNW first-time hotel buyers, family offices scaling, PE roll-ups, and select-service REITs (Apple Hospitality, Summit Hotel Properties, Chatham Lodging Trust).",
      "Renovation reserves and franchise license-extension status are the two underwriting questions buyers ask first.",
    ],
    buyerPool:
      "Family offices, HNW first-time hotel buyers, PE roll-ups, and select-service REITs (Apple Hospitality, Summit, Chatham, Service Properties Trust).",
    ourActivity:
      "Matthews has closed Hampton Inn dispositions across Texas, the Sun Belt, and the Midwest. We currently advise on Hampton acquisitions and dispositions ranging from single-asset to multi-property portfolios.",
  },
  {
    slug: "holiday-inn-express",
    name: "Holiday Inn Express",
    parentCompany: "InterContinental Hotels Group (IHG)",
    parentTicker: "IHG",
    flagFamilies: [
      "Holiday Inn Express",
      "Holiday Inn Express & Suites",
    ],
    segment: "Select Service / Upper Midscale",
    tagline: "Holiday Inn Express for sale: select-service capital markets execution.",
    intro:
      "Holiday Inn Express is IHG's flagship select-service brand and one of the most actively transacted hospitality assets in the United States. Matthews Hotel Markets executes HIE dispositions, capital markets placement, and acquisition advisory across the Holiday Inn Express family. The flag's economics, Holiday Inn Club Rewards (now IHG One Rewards) loyalty contribution, and PIP cycle timing are the levers we underwrite for sellers and buyers.",
    underwritingNotes: [
      "HIE economics anchor on IHG One Rewards channel mix, breakfast cost discipline, and the franchise's 10-year PIP cycle.",
      "Mid-market HIE properties trade in the 7.75-8.50% cap range for stabilized PIP-current assets in Sun Belt secondary markets as of Q1 2026.",
      "Active buyer pool: PE select-service roll-ups, family offices, owner-operators expanding within market, and franchise-experienced HNW investors.",
      "Brand standards refresh ('IHG Express Renovation') is the single largest underwriting variable — properties due in the next 18 months trade at meaningful PIP-overhang discount.",
    ],
    buyerPool:
      "PE select-service roll-ups, family offices, owner-operators, and franchise-experienced HNW investors. IHG-affiliated operating groups and Apple Hospitality / Summit / Chatham buyers when the asset fits portfolio strategy.",
    ourActivity:
      "Matthews advises on HIE dispositions, capital markets placement, and acquisition mandates across the Sun Belt, Midwest, and Mountain West. Hampton Inn Portfolio Atlanta and the broader Sun Belt HIE pipeline have been recent areas of focus.",
  },
  {
    slug: "marriott",
    name: "Marriott",
    parentCompany: "Marriott International",
    parentTicker: "MAR",
    flagFamilies: [
      "Courtyard by Marriott",
      "Fairfield Inn & Suites",
      "Residence Inn",
      "TownePlace Suites",
      "SpringHill Suites",
      "AC Hotels",
      "Marriott (Full Service)",
    ],
    segment: "Select Service through Full Service",
    tagline: "Marriott hotel for sale: full Marriott family disposition + capital markets.",
    intro:
      "Matthews Hotel Markets executes hotel transactions across the full Marriott International family — Courtyard, Fairfield, Residence Inn, TownePlace Suites, SpringHill Suites, AC Hotels, and full-service Marriott assets. Marriott's loyalty program (Bonvoy) and the segmentation between select-service and full-service flags drive distinctly different underwriting and buyer pools.",
    underwritingNotes: [
      "Marriott select-service flags (Courtyard, Fairfield, Residence Inn) trade most actively. Bonvoy channel mix typically lifts ADR 8-15% versus comparable midscale.",
      "Full-service Marriott (the 'flag' itself) is a different game — trophy-asset bid, larger check size, smaller buyer pool. We advise both lanes.",
      "Residence Inn and TownePlace Suites (extended-stay) command premium cap rate discipline as of 2026 — extended-stay performance through the cycle has been the most consistent across all Marriott flags.",
    ],
    buyerPool:
      "Select-service Marriott: REITs (Apple, Summit, Chatham, Diamondrock), family offices, PE roll-ups. Full-service Marriott: Host Hotels, Pebblebrook, sovereign wealth funds, large family offices, Bonvoy-strategic operators.",
    ourActivity:
      "Active Marriott dispositions span Courtyard, Fairfield, and Residence Inn flags across Texas, the Sun Belt, and Mountain West.",
  },
  {
    slug: "hilton",
    name: "Hilton",
    parentCompany: "Hilton Worldwide",
    parentTicker: "HLT",
    flagFamilies: [
      "Hilton (Full Service)",
      "Hilton Garden Inn",
      "Home2 Suites",
      "Tru by Hilton",
      "DoubleTree by Hilton",
      "Embassy Suites",
      "Hampton Inn",
    ],
    segment: "Select Service through Full Service + Luxury (Conrad, Waldorf)",
    tagline: "Hilton hotel for sale: every Hilton family flag, every chain scale.",
    intro:
      "Matthews Hotel Markets executes hotel transactions across Hilton Worldwide's full brand portfolio. Hilton's brand depth — from Tru by Hilton midscale to Waldorf Astoria luxury — means each flag has its own underwriting playbook, buyer pool, and cap rate band. We advise sellers and buyers across the entire stack.",
    underwritingNotes: [
      "Hilton Honors loyalty contribution is consistently the highest in U.S. hospitality (typically 65%+ of room nights at urban full-service flags).",
      "Hilton Garden Inn and Home2 Suites are the most actively traded select-service Hilton flags after Hampton.",
      "DoubleTree economics depend heavily on conversion vs. ground-up — converted DoubleTree assets often command different underwriting than purpose-built.",
      "Tru by Hilton, the newest midscale flag, has limited stabilized comp set; market is still pricing the brand.",
    ],
    buyerPool:
      "Spans the full institutional capital stack — Apple Hospitality (select-service Hilton REIT focus), Park Hotels (full-service spin-off), family offices, PE roll-ups, and luxury-focused buyers for Conrad / Waldorf.",
    ourActivity:
      "Hampton Inn family is documented separately. Active Hilton transactions include Hilton Garden Inn, Home2 Suites, and DoubleTree across the Sun Belt.",
  },
  {
    slug: "ihg",
    name: "IHG (Holiday Inn family)",
    parentCompany: "InterContinental Hotels Group",
    parentTicker: "IHG",
    flagFamilies: [
      "Holiday Inn",
      "Holiday Inn Express",
      "Staybridge Suites",
      "Candlewood Suites",
      "InterContinental",
      "Crowne Plaza",
      "voco",
      "Avid Hotels",
    ],
    segment: "Midscale Select-Service through Full Service + Luxury (InterContinental)",
    tagline: "IHG hotels for sale: Holiday Inn, Express, Staybridge, Candlewood.",
    intro:
      "Matthews Hotel Markets executes hotel transactions across the IHG portfolio. Holiday Inn Express is documented separately as our most actively traded IHG flag. Beyond HIE: Holiday Inn (mid-tier full-service), Staybridge Suites and Candlewood Suites (extended-stay), InterContinental and Crowne Plaza (full-service / convention), and the newer voco and Avid Hotels flags.",
    underwritingNotes: [
      "Holiday Inn full-service is a workout segment — many properties carry PIP overhang and conversion-candidate economics rather than stabilized cash flow.",
      "Staybridge Suites and Candlewood Suites trade at extended-stay premium cap discipline — buyer pool overlaps with WoodSpring and TownePlace.",
      "InterContinental and Crowne Plaza are urban / convention-driven — ADR and group mix dominate the underwriting; recoveries have been uneven post-2020.",
      "voco and Avid are too new to have a deep comp set; pricing reflects brand-conversion thesis as much as in-place cash flow.",
    ],
    buyerPool:
      "Holiday Inn Express + Staybridge + Candlewood: select-service REITs (Apple, Summit, Chatham, Service Properties Trust), family offices, PE. Full-service IHG (InterContinental, Crowne Plaza): Host, Pebblebrook, sovereign / international capital.",
    ourActivity:
      "Active across Holiday Inn Express portfolios, Staybridge Suites dispositions, and select-service IHG capital markets placements.",
  },
  {
    slug: "best-western",
    name: "Best Western",
    parentCompany: "Best Western Hotels & Resorts",
    flagFamilies: [
      "Best Western",
      "Best Western Plus",
      "Best Western Premier",
      "SureStay",
      "BW Premier Collection",
    ],
    segment: "Midscale through Upper Upscale",
    tagline: "Best Western hotels for sale: midscale-to-upscale brand family.",
    intro:
      "Matthews Hotel Markets transacts across Best Western Hotels & Resorts' multi-tier brand family. Best Western, Best Western Plus, and Best Western Premier represent ascending midscale-to-upscale tiers; SureStay covers economy; BW Premier Collection is the soft-brand layer for boutique and independent conversions. The brand family typically attracts owner-operator and family-office capital.",
    underwritingNotes: [
      "Best Western membership economics differ from franchise structures — the brand is owner-cooperative-style with annual member fees rather than purely franchise royalties. Underwriting reflects this.",
      "Best Western Plus and Premier in Sun Belt and Mountain West markets have been actively traded.",
      "Average BW deal size sits below the typical Hilton / Marriott / IHG transaction — middle-market and smaller-portfolio buyers.",
    ],
    buyerPool:
      "Owner-operators, family offices, AAHOA membership-network buyers, smaller PE select-service funds.",
    ourActivity:
      "Best Western dispositions across Texas, the Midwest, and Mountain West. Track record includes multiple Best Western and Best Western Plus closes.",
  },
  {
    slug: "hyatt",
    name: "Hyatt",
    parentCompany: "Hyatt Hotels Corporation",
    parentTicker: "H",
    flagFamilies: [
      "Hyatt Place",
      "Hyatt House",
      "Hyatt Regency",
      "Hyatt",
      "Hyatt Centric",
      "Andaz",
      "Park Hyatt",
      "Grand Hyatt",
    ],
    segment: "Select Service through Luxury",
    tagline: "Hyatt hotels for sale: Hyatt Place, Hyatt House, full-service Hyatt assets.",
    intro:
      "Matthews Hotel Markets executes Hyatt transactions across the brand's full stack. Hyatt Place and Hyatt House anchor the select-service and extended-stay segments; full-service flags (Hyatt, Hyatt Regency, Grand Hyatt, Park Hyatt) sit in the upper-upscale and luxury tiers; Andaz and Hyatt Centric occupy the lifestyle layer. World of Hyatt loyalty contribution and the brand's smaller-but-premium positioning relative to Marriott/Hilton drive distinct economics.",
    underwritingNotes: [
      "World of Hyatt is a smaller loyalty program than Bonvoy or Hilton Honors but compensates with high-spend skew — important for ADR underwriting at full-service flags.",
      "Hyatt Place and Hyatt House have a deep public-REIT comp set (Apple Hospitality, Summit, Chatham hold material exposure).",
      "Andaz and Hyatt Centric (lifestyle) attract a different buyer pool than core Hyatt — boutique and lifestyle-focused capital, often with brand-conversion thesis.",
    ],
    buyerPool:
      "Select-service Hyatt: Apple Hospitality, Summit, Chatham, family offices. Full-service: Pebblebrook, Sunstone, Host (selectively). Lifestyle (Andaz / Centric): boutique-focused PE funds, family offices, branded-experience operators.",
    ourActivity:
      "Active Hyatt transactions span Hyatt Place and Hyatt House select-service through full-service Hyatt Regency assets.",
  },
  {
    slug: "choice",
    name: "Choice Hotels",
    parentCompany: "Choice Hotels International",
    parentTicker: "CHH",
    flagFamilies: [
      "Comfort Inn",
      "Comfort Suites",
      "Quality Inn",
      "Sleep Inn",
      "MainStay Suites",
      "WoodSpring Suites",
      "Cambria",
      "Ascend Hotel Collection",
      "Radisson",
    ],
    segment: "Economy through Upscale + Soft Brand",
    tagline: "Choice Hotels for sale: midscale, economy, extended-stay, and Cambria upscale.",
    intro:
      "Matthews Hotel Markets transacts across Choice Hotels' brand portfolio. Comfort Inn / Comfort Suites and Quality Inn sit in the midscale tier; Sleep Inn and MainStay Suites cover budget-conscious extended-stay; WoodSpring is the dedicated extended-stay flag; Cambria is the upscale tier; Radisson (acquired in 2022) adds full-service and upscale. Choice's footprint skews toward middle-market and franchise-experienced ownership.",
    underwritingNotes: [
      "WoodSpring Suites is the most actively traded Choice flag, and one of the strongest-performing extended-stay segments through 2024-2026.",
      "Cambria has limited stabilized comp set but has attracted institutional buyers as Choice expanded the brand.",
      "Radisson integration is still maturing — full-service Radisson assets trade with ongoing brand-strategy uncertainty as a discount factor.",
      "Comfort Inn and Quality Inn dominate ownership-by-count for franchise-experienced owner-operators; the buyer pool here overlaps heavily with Best Western.",
    ],
    buyerPool:
      "Comfort / Quality / Sleep Inn: owner-operators, family offices, AAHOA buyers. WoodSpring Suites: extended-stay-focused REITs and PE. Cambria: upscale-focused buyers, including larger family offices and PE.",
    ourActivity:
      "Active Choice transactions span Comfort Inn, Quality Inn, and WoodSpring Suites across Texas, the Sun Belt, and the Midwest.",
  },
  {
    slug: "wyndham",
    name: "Wyndham",
    parentCompany: "Wyndham Hotels & Resorts",
    parentTicker: "WH",
    flagFamilies: [
      "La Quinta Inn & Suites",
      "Wingate by Wyndham",
      "Microtel Inn & Suites",
      "Hawthorn Suites",
      "Days Inn",
      "Super 8",
      "Howard Johnson",
      "Travelodge",
      "Ramada",
      "Ramada Plaza",
      "Wyndham Garden",
      "Wyndham",
    ],
    segment: "Economy through Upper Midscale",
    tagline: "Wyndham hotels for sale: La Quinta, Wingate, Microtel, Days Inn family.",
    intro:
      "Matthews Hotel Markets transacts across Wyndham's portfolio of franchised hotel brands. La Quinta Inn & Suites is Wyndham's flagship midscale brand and the most actively traded; Wingate and Microtel sit in upper-economy / midscale; Hawthorn Suites covers extended-stay; Days Inn, Super 8, Travelodge, and Howard Johnson dominate the economy tier; Ramada and Wyndham branded full-service round out the upper-midscale lane.",
    underwritingNotes: [
      "La Quinta is the asset to underwrite most carefully — Wyndham acquired the brand in 2018 and the franchise standards have shifted; PIP-cycle timing is critical.",
      "Days Inn / Super 8 / Travelodge: economy underwriting focused on ADR resilience versus competing OYO / Vacasa-class properties.",
      "Wingate by Wyndham and Microtel Inn & Suites have a smaller institutional comp set; transactions are owner-operator dominated.",
      "Hawthorn Suites: extended-stay; thinner comp set than WoodSpring / Staybridge but rising buyer interest in 2025-2026.",
    ],
    buyerPool:
      "La Quinta / Wingate / Microtel: family offices, owner-operators, smaller PE roll-ups. Days Inn / Super 8 / Travelodge: economy-focused investor pool, often franchise-experienced AAHOA-network buyers.",
    ourActivity:
      "Active Wyndham transactions span La Quinta and Days Inn family flags across Texas and the Sun Belt.",
  },
];

export function getBrand(slug: string): BrandFlag | undefined {
  return brands.find((b) => b.slug === slug);
}
