import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { insights } from "@/lib/data/insights";
import { getLatestMhi } from "@/lib/data/mhi";

const SITE_URL = "https://matthewshotelmarkets.com";

export const metadata: Metadata = {
  title: "Hotel Investment Research | Matthews Hotel Markets",
  description:
    "Quarterly Matthews Hotel Index, long-form insights, and market commentary. Public data, refreshed quarterly. Cite with attribution.",
  alternates: { canonical: `${SITE_URL}/research` },
  openGraph: {
    type: "website",
    title: "Hotel Investment Research | Matthews Hotel Markets",
    description: "Matthews Hotel Index quarterly cap-rate dataset, long-form insights, and market commentary.",
    url: `${SITE_URL}/research`,
  },
  twitter: { card: "summary_large_image", title: "Hotel Investment Research | Matthews Hotel Markets" },
};

export default function ResearchHubPage() {
  const latestMhi = getLatestMhi();
  const featuredInsights = insights.slice(0, 8);
  const url = `${SITE_URL}/research`;

  // CollectionPage @graph — the research hub is a "collection" of
  // datasets and articles. Surfaces topical depth to crawlers.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": url,
        url,
        name: "Hotel Investment Research",
        description: "Matthews Hotel Index quarterly cap-rate dataset, long-form insights, and market commentary from Matthews Hotel Markets.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#org` },
        hasPart: [
          {
            "@type": "Dataset",
            "@id": `${SITE_URL}/research/mhi/${latestMhi.slug}#dataset`,
            name: `Matthews Hotel Index, ${latestMhi.label}`,
            url: `${SITE_URL}/research/mhi/${latestMhi.slug}`,
          },
          ...featuredInsights.map((i) => ({
            "@type": "Article",
            "@id": `${SITE_URL}/insights/${i.slug}#article`,
            headline: i.title,
            url: `${SITE_URL}/insights/${i.slug}`,
          })),
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Research", item: url },
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
            <Eyebrow>Research</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead="Hotel investment research."
                follow="Quarterly data, long-form analysis, market commentary."
              />
            </div>
            <p className="mt-6 max-w-[64ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
              Public-data only. Cite with attribution to Matthews Hotel Markets and a link back to matthewshotelmarkets.com/research.
            </p>
          </div>
        </section>

        {/* MHI feature card */}
        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <Link
              href={`/research/mhi/${latestMhi.slug}`}
              className="group block rounded-[24px] bg-gradient-to-br from-[#0a1226] via-[#1a3a6b] to-[#0066cc] text-white p-10 lg:p-14"
            >
              <p className="text-[12px] uppercase tracking-[0.18em] font-medium text-white/70">Matthews Hotel Index</p>
              <h2 className="mt-6 text-[clamp(28px,3.5vw,48px)] font-semibold leading-[1.05] tracking-[-0.025em]">
                {latestMhi.label}: cap rates, ADR, RevPAR across 14 markets
              </h2>
              <p className="mt-4 max-w-[64ch] text-[17px] leading-[1.47] tracking-[-0.014em] text-white/85">
                {latestMhi.headline}
              </p>
              <p className="mt-6 inline-flex items-center gap-1 text-[15px] tracking-[-0.014em] text-white group-hover:underline underline-offset-[3px]">
                View the {latestMhi.label} dataset
                <ChevronRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </p>
            </Link>
          </div>
        </section>

        {/* Long-form insights grid */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                Long-form insights
              </h2>
              <Link
                href="/insights"
                className="text-[14px] tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
              >
                All insights
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredInsights.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/insights/${i.slug}`}
                    className="group block rounded-[18px] bg-[#f5f5f7] p-6 transition-colors hover:bg-[#ececef]"
                  >
                    <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                      {i.kind === "outlook" ? "Outlook" : i.kind === "white-paper" ? "White Paper" : "Briefing"} · {i.date}
                    </p>
                    <p className="mt-3 text-[18px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                      {i.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)] line-clamp-3">
                      {i.subtitle}
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
