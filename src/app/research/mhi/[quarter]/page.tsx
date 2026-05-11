import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import {
  mhiQuarters,
  getMhiQuarter,
  formatCapBand,
  joinWithMarket,
} from "@/lib/data/mhi";

const SITE_URL = "https://matthewshotelmarkets.com";

type Params = { quarter: string };

export function generateStaticParams(): Params[] {
  return mhiQuarters.map((q) => ({ quarter: q.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { quarter: slug } = await props.params;
  const q = getMhiQuarter(slug);
  if (!q) return { title: "MHI" };
  const url = `${SITE_URL}/research/mhi/${q.slug}`;
  const title = `Matthews Hotel Index, ${q.label} | Quarterly Cap Rate Dataset`;
  const description = `${q.headline} ${q.label} cap rates, ADR, and RevPAR across 14 U.S. hotel markets. Public data, refreshed every 90 days.`.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url, publishedTime: q.publishedAt },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function MhiQuarterPage(props: {
  params: Promise<Params>;
}) {
  const { quarter: slug } = await props.params;
  const q = getMhiQuarter(slug);
  if (!q) notFound();

  const url = `${SITE_URL}/research/mhi/${q.slug}`;

  // Dataset schema — research analysts and trade press cite Datasets
  // by URL. variableMeasured spells out the cap rate / ADR / RevPAR
  // measurements. spatialCoverage names the 14 markets explicitly.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        "@id": `${url}#dataset`,
        name: `Matthews Hotel Index, ${q.label}`,
        alternateName: `MHI ${q.label}`,
        description: q.summary,
        url,
        identifier: `mhi-${q.yearQuarter.toLowerCase()}`,
        license: "https://creativecommons.org/licenses/by/4.0/",
        creator: { "@id": `${SITE_URL}/#org` },
        publisher: { "@id": `${SITE_URL}/#org` },
        datePublished: q.publishedAt,
        dateModified: q.publishedAt,
        temporalCoverage: q.yearQuarter,
        spatialCoverage: q.data.map((dp) => {
          const j = joinWithMarket(dp);
          return j.market
            ? {
                "@type": "Place",
                name: j.market.msa,
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: j.market.geo.lat,
                  longitude: j.market.geo.lng,
                },
              }
            : { "@type": "Place", name: dp.marketSlug };
        }),
        keywords: [
          "hotel cap rates",
          "hotel investment",
          "hospitality CRE",
          "ADR",
          "RevPAR",
          "Sun Belt hotel investment",
          q.label,
        ].join(", "),
        variableMeasured: [
          { "@type": "PropertyValue", name: "Cap Rate (Stabilized PIP-Current)", unitText: "percent" },
          { "@type": "PropertyValue", name: "ADR", unitText: "USD" },
          { "@type": "PropertyValue", name: "RevPAR", unitText: "USD" },
          { "@type": "PropertyValue", name: "Occupancy", unitText: "percent" },
          { "@type": "PropertyValue", name: "Transaction Count", unitText: "count" },
        ],
        distribution: {
          "@type": "DataDownload",
          encodingFormat: "text/html",
          contentUrl: url,
        },
        citation: q.sources.map((s) => ({
          "@type": "CreativeWork",
          name: s.label,
          url: s.url,
          publisher: { "@type": "Organization", name: s.publisher },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Research", item: `${SITE_URL}/research` },
          { "@type": "ListItem", position: 3, name: "Matthews Hotel Index", item: `${SITE_URL}/research/mhi` },
          { "@type": "ListItem", position: 4, name: q.label, item: url },
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
            <Eyebrow>Matthews Hotel Index</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead={`MHI ${q.label}.`}
                follow="Cap rates, ADR, RevPAR across 14 markets."
              />
            </div>
            <p className="mt-6 max-w-[64ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
              {q.headline}
            </p>
            <p className="mt-4 max-w-[64ch] text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              {q.summary}
            </p>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-[color:var(--divider)] pt-10">
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">Quarter</dt>
                <dd className="mt-2 text-[20px] font-semibold tabular-nums tracking-[-0.014em] text-[color:var(--text-primary)]">{q.label}</dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">Published</dt>
                <dd className="mt-2 text-[14px] tracking-[-0.014em] text-[color:var(--text-primary)]">{q.publishedAt}</dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">Markets</dt>
                <dd className="mt-2 text-[20px] font-semibold tabular-nums tracking-[-0.014em] text-[color:var(--text-primary)]">{q.data.length}</dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">License</dt>
                <dd className="mt-2 text-[13px] tracking-[-0.014em] text-[color:var(--text-primary)]">CC-BY 4.0</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Per-market table */}
        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              {q.label} per-market data
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[920px] text-[14px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                <thead className="border-b border-[color:var(--divider)] text-left text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  <tr>
                    <th className="py-3 pr-3 font-medium">Market</th>
                    <th className="py-3 pr-3 font-medium">Select-svc cap</th>
                    <th className="py-3 pr-3 font-medium">Full-svc cap</th>
                    <th className="py-3 pr-3 font-medium">Resort cap</th>
                    <th className="py-3 pr-3 font-medium">ADR</th>
                    <th className="py-3 pr-3 font-medium">RevPAR</th>
                    <th className="py-3 pr-3 font-medium">Occ</th>
                    <th className="py-3 pr-3 font-medium">YoY RevPAR</th>
                  </tr>
                </thead>
                <tbody>
                  {q.data.map((dp) => {
                    const j = joinWithMarket(dp);
                    const ss = dp.capRates.find((c) => c.segment === "select-service");
                    const fs = dp.capRates.find((c) => c.segment === "full-service");
                    const rl = dp.capRates.find((c) => c.segment === "resort-lifestyle");
                    return (
                      <tr key={dp.marketSlug} className="border-b border-[color:var(--divider)]">
                        <td className="py-3 pr-3 font-semibold">
                          <Link href={`/markets/${dp.marketSlug}`} className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                            {j.market ? `${j.market.city}, ${j.market.state}` : dp.marketSlug}
                          </Link>
                        </td>
                        <td className="py-3 pr-3 tabular-nums">{ss ? formatCapBand(ss) : "—"}</td>
                        <td className="py-3 pr-3 tabular-nums">{fs ? formatCapBand(fs) : "—"}</td>
                        <td className="py-3 pr-3 tabular-nums">{rl ? formatCapBand(rl) : "—"}</td>
                        <td className="py-3 pr-3 tabular-nums">${dp.adrLow}-${dp.adrHigh}</td>
                        <td className="py-3 pr-3 tabular-nums">${dp.revparLow}-${dp.revparHigh}</td>
                        <td className="py-3 pr-3 tabular-nums">{dp.occupancy}%</td>
                        <td className="py-3 pr-3 tabular-nums">{dp.yoyRevparChange >= 0 ? "+" : ""}{dp.yoyRevparChange.toFixed(1)}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[12px] tracking-[-0.014em] text-[color:var(--text-tertiary)]">
              Cap rates: stabilized, PIP-current. ADR/RevPAR: blended chain-scale range across each metro. Occupancy: TTM blended.
            </p>
          </div>
        </section>

        {/* Per-market commentary */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              Per-market read
            </h2>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {q.data.map((dp) => {
                const j = joinWithMarket(dp);
                return (
                  <li key={dp.marketSlug} className="rounded-[18px] bg-[#f5f5f7] p-5">
                    <p className="text-[15px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                      {j.market ? `${j.market.city}, ${j.market.state}` : dp.marketSlug}
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                      {dp.commentary}
                    </p>
                    <Link
                      href={`/markets/${dp.marketSlug}`}
                      className="mt-3 inline-flex items-center gap-1 text-[13px] tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
                    >
                      Full market profile
                      <ChevronRight className="h-3 w-3" strokeWidth={1.75} aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Methodology */}
        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              Methodology
            </h2>
            <p className="mt-6 max-w-[64ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
              {q.methodology}
            </p>
            <p className="mt-4 text-[13px] tracking-[-0.014em] text-[color:var(--text-tertiary)]">
              Next refresh: {q.nextRefresh}
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              Sources
            </h2>
            <ol className="mt-6 space-y-3 list-decimal list-outside pl-5 marker:text-[color:var(--text-secondary)]">
              {q.sources.map((s, i) => (
                <li key={i} className="text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  <a href={s.url} rel="noopener external" target="_blank" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                    {s.label}
                  </a>
                  <span className="text-[color:var(--text-secondary)]"> · {s.publisher}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <div className="rounded-[18px] bg-white p-10 lg:p-14 text-center">
              <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">Cite the dataset</p>
              <p className="mt-4 max-w-[58ch] mx-auto text-[17px] leading-[1.47] tracking-[-0.022em] text-[color:var(--text-primary)]">
                Research analysts and trade press: cite as &ldquo;Matthews Hotel Index, {q.label} (matthewshotelmarkets.com/research/mhi/{q.slug})&rdquo;. Released under CC-BY 4.0.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <Pill variant="primary" href="/contact">Talk to the team</Pill>
                <Pill variant="secondary" href="/research">All research</Pill>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
