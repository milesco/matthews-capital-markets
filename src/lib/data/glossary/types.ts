export type GlossaryFaq = { q: string; a: string };
export type GlossarySource = { label: string; url: string; publisher?: string };

export type GlossaryEntry = {
  slug: string;
  term: string;
  /** ≤30 words, the direct-answer lead the LLM lifts. */
  shortDef: string;
  /** ~50 words, a self-contained quick-definition paragraph. */
  fullDef: string;
  /** 400–700 words, the main body. Paragraph breaks via \n\n. */
  body: string;
  /** Worked example with realistic numbers. */
  example: string;
  /** 1–2 common misconceptions. */
  misconceptions: string[];
  /** 4–5 FAQ pairs for FAQPage schema and on-page block. */
  faq: GlossaryFaq[];
  /** 4–6 outbound source citations. */
  sources: GlossarySource[];
  /** 2–3 sibling glossary slugs. */
  relatedTerms: string[];
  /** 2–3 market slugs from src/lib/data/markets.ts. */
  relatedMarkets?: string[];
  /** 2–3 brand slugs from src/lib/data/brands.ts. */
  relatedBrands?: string[];
  /** 2 insight slugs from src/lib/data/insights.ts. */
  relatedInsights?: string[];
  /** ISO date, surfaced as the visible "last updated" stamp. */
  lastUpdated: string;
  /** Optional author byline slug. */
  authorSlug?: string;
};
