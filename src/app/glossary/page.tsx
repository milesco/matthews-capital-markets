import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { glossary } from "@/lib/data/glossary";

const SITE_URL = "https://matthewshotelmarkets.com";

export const metadata: Metadata = {
  title: "Hotel Investment Glossary | Matthews Hotel Markets",
  description:
    "Definitions for the terms hotel investors actually use: cap rate, RevPAR, ADR, PIP, BOV, IM. Trade-journalism voice, public sources cited.",
  alternates: { canonical: `${SITE_URL}/glossary` },
  openGraph: {
    type: "website",
    title: "Hotel Investment Glossary | Matthews Hotel Markets",
    description: "Definitions for the terms hotel investors actually use.",
    url: `${SITE_URL}/glossary`,
  },
  twitter: { card: "summary_large_image", title: "Hotel Investment Glossary" },
};

export default function GlossaryIndexPage() {
  const url = `${SITE_URL}/glossary`;
  const entries = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTermSet",
        "@id": `${url}#glossary`,
        url,
        name: "Hotel Investment Glossary",
        description: "Definitions for the terms hotel investors actually use.",
        hasDefinedTerm: entries.map((e) => ({
          "@type": "DefinedTerm",
          "@id": `${SITE_URL}/glossary/${e.slug}#term`,
          name: e.term,
          description: e.shortDef,
          url: `${SITE_URL}/glossary/${e.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Glossary", item: url },
        ],
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <Eyebrow>Glossary</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead="Hotel investment glossary."
                follow="Definitions for the terms hotel investors actually use."
              />
            </div>
            <p className="mt-6 max-w-[64ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
              Each entry has a 30-word direct-answer definition for the LLM lift, a worked example, common misconceptions, and a 5-question FAQ. Public sources cited.
            </p>
          </div>
        </section>

        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {entries.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/glossary/${e.slug}`}
                    className="group block rounded-[18px] bg-white p-6 transition-colors hover:bg-[#fafafa]"
                  >
                    <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                      {e.slug}
                    </p>
                    <p className="mt-2 text-[20px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                      {e.term}
                    </p>
                    <p className="mt-3 text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)] line-clamp-3">
                      {e.shortDef}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1 text-[14px] tracking-[-0.014em] text-[#1a3a6b] group-hover:underline underline-offset-[3px]">
                      Read definition
                      <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
