import type { Market } from "@/lib/data/markets";
import type { BrandFlag } from "@/lib/data/brands";

export type Faq = { q: string; a: string };

export function marketFaqs(m: Market): Faq[] {
  return [
    {
      q: `What is the current cap rate range for hotels in ${m.city}, ${m.state}?`,
      a: `${m.capRateRange} (Q1 2026). Ranges reflect stabilized, PIP-current assets across select-service, full-service, and where applicable resort/lifestyle. Cycle-trough resets, distressed assignments, and PIP-overhang trades clear at materially wider levels. Source: CBRE H2 2025 U.S. Cap Rate Survey, HVS U.S. Market Pulse, Matthews Hotel Markets internal underwriting.`,
    },
    {
      q: `What are ADR and RevPAR doing in ${m.city} right now?`,
      a: `${m.adrCommentary} STR press releases (str.com) and the AHLA State of the Industry are the public benchmarks we cite for ADR/occ/RevPAR. We supplement with internal underwriting on every active mandate.`,
    },
    {
      q: `Who are the named demand drivers behind ${m.city} hotel performance?`,
      a: `${m.demandDrivers.slice(0, 5).join("; ")}. Underwriting in this market keys on the diversification of those drivers — concentration in any single demand source is the most common reason a buyer haircuts our pro-forma RevPAR.`,
    },
    {
      q: `Who at Matthews Hotel Markets covers ${m.city}?`,
      a: `Our ${m.city} mandates are led by ${m.brokerSlugs.length > 0 ? m.brokerSlugs.map(slugToName).join(" and ") : "the Matthews Hotel Markets investment sales team"}. ${m.brokerSlugs.length > 0 ? `Direct contact info is on each broker's profile. ` : ""}For confidential disposition or acquisition conversations, the team responds within 24 hours.`,
    },
    {
      q: `How long does a typical ${m.city} hotel disposition take?`,
      a: `Matthews's published 24-week playbook applies in ${m.city} — engagement letter and BOV in weeks 1–4, OM and marketing launch in weeks 5–8, call-for-offers and finalist round in weeks 9–14, definitive agreement and closing in weeks 15–24. Construction-loan workouts and recap structures sometimes compress; PIP-cycle disputes can extend.`,
    },
  ];
}

export function brandFaqs(b: BrandFlag): Faq[] {
  return [
    {
      q: `What does a ${b.name} hotel typically trade at in 2026?`,
      a: `${b.underwritingNotes[1] ?? `Cap rates for stabilized, PIP-current ${b.name} assets sit in the broader ${b.segment} range as of Q1 2026.`} Distressed and PIP-overhang trades clear materially wider; trophy or scarcity assets compress. Source: CBRE U.S. Cap Rate Survey, HVS U.S. Market Pulse, Matthews internal underwriting.`,
    },
    {
      q: `Who buys ${b.name} hotels?`,
      a: b.buyerPool,
    },
    {
      q: `What are the most important ${b.name} underwriting variables?`,
      a: `${b.underwritingNotes.slice(0, 3).join(" ")} The ${b.parentCompany} brand standards refresh cycle is the single biggest pre-close diligence question for buyers.`,
    },
    {
      q: `Does Matthews execute ${b.name} dispositions and acquisitions?`,
      a: `${b.ourActivity} Engagements range from single-asset dispositions to multi-property portfolio sales and capital-markets recapitalizations.`,
    },
    {
      q: `How does Matthews's ${b.name} disposition process work?`,
      a: `Matthews runs a 24-week playbook on ${b.name} dispositions — broker-built BOV, curated buyer pool drawn from select-service-focused REITs, family offices, PE roll-ups, and HNW capital, confidential by default. Key timing risk for ${b.name} specifically is franchise license renewal and PIP cycle alignment with the marketing window.`,
    },
  ];
}

const NAME_BY_SLUG: Record<string, string> = {
  "luke-thompson": "Luke Thompson",
  "nate-solomon": "Nate Solomon",
  "miles-cortez": "Miles Cortez",
};

function slugToName(slug: string): string {
  return NAME_BY_SLUG[slug] ?? slug;
}

export function faqJsonLdNode(url: string, faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
