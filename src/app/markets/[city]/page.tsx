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
import { markets } from "@/lib/data/markets";
import { listings } from "@/lib/data/listings";
import { closed } from "@/lib/data/closed";
import { team } from "@/lib/data/team";

const SITE_URL = "https://matthewshotelmarkets.com";

type Params = { city: string };

export function generateStaticParams(): Params[] {
  return markets.map((m) => ({ city: m.slug }));
}

function findActiveListings(slug: string) {
  const m = markets.find((x) => x.slug === slug);
  if (!m) return [];
  return listings.filter(
    (l) => l.city === m.city && l.state === m.state,
  );
}

function findRecentClosed(slug: string, limit = 9) {
  const m = markets.find((x) => x.slug === slug);
  if (!m) return [];
  return closed
    .filter((d) => d.city === m.city && d.state === m.state)
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: slug } = await props.params;
  const m = markets.find((x) => x.slug === slug);
  if (!m) return { title: "Hotels for Sale" };

  const url = `${SITE_URL}/markets/${m.slug}`;
  const title = `Hotels for Sale in ${m.city}, ${m.state} | Matthews Hotel Markets`;
  const description = `Hotels for sale in ${m.city}, ${m.state}. ${m.marketCommentary.slice(0, 100)}`.slice(
    0,
    160,
  );

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function MarketPage(props: { params: Promise<Params> }) {
  const { city: slug } = await props.params;
  const m = markets.find((x) => x.slug === slug);
  if (!m) notFound();

  const active = findActiveListings(slug);
  const recentClosed = findRecentClosed(slug, 9);
  const marketBrokers = m.brokerSlugs
    .map((s) => team.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const url = `${SITE_URL}/markets/${m.slug}`;

  // @graph: WebPage with mainEntity Place + Place node + ItemList of active
  // listings + BreadcrumbList. Place schema gives this market page a real
  // entity that AI Overview retrievers can attach to "hotels for sale [city]"
  // queries.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `${url}#place`,
        name: m.msa,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: m.state === "TX" ? "Texas" : m.state,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: m.geo.lat,
          longitude: m.geo.lng,
        },
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `Hotels for Sale in ${m.city}, ${m.state}`,
        description: m.marketCommentary,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#place` },
        provider: { "@id": `${SITE_URL}/#org` },
        mainEntity: {
          "@type": "ItemList",
          name: `Active hotels for sale in ${m.city}, ${m.state}`,
          itemListElement: active.map((l, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/listings/${l.slug}`,
            name: l.name,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Markets",
            item: `${SITE_URL}/markets`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${m.city}, ${m.state}`,
            item: url,
          },
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
            <Eyebrow>{m.primaryRegionLabel}</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead={`Hotels for sale in ${m.city}, ${m.state}.`}
                follow={m.tagline}
              />
            </div>
            <p className="mt-6 max-w-[64ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
              {m.marketCommentary}
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[color:var(--divider)] pt-10">
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Active Matthews listings
                </p>
                <p className="mt-2 text-[28px] font-semibold tabular-nums tracking-[-0.025em] text-[color:var(--text-primary)]">
                  {active.length}
                </p>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Recent Matthews closes
                </p>
                <p className="mt-2 text-[28px] font-semibold tabular-nums tracking-[-0.025em] text-[color:var(--text-primary)]">
                  {recentClosed.length}+
                </p>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  MSA
                </p>
                <p className="mt-2 text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {m.msa}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cap rate + ADR commentary */}
        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[18px] bg-white p-8">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                Cap rate range (Q1 2026)
              </h2>
              <p className="mt-4 text-[17px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                {m.capRateRange}
              </p>
              <p className="mt-3 text-[13px] tracking-[-0.014em] text-[color:var(--text-tertiary)]">
                Source: CBRE H2 2025 U.S. Cap Rate Survey, HVS U.S. Market Pulse, Matthews Hotel Markets internal underwriting (Q1 2026).
              </p>
            </div>
            <div className="rounded-[18px] bg-white p-8">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                ADR + RevPAR commentary
              </h2>
              <p className="mt-4 text-[17px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                {m.adrCommentary}
              </p>
              <p className="mt-3 text-[13px] tracking-[-0.014em] text-[color:var(--text-tertiary)]">
                Source: STR / CoStar public press releases (Q1 2026).
              </p>
            </div>
          </div>
        </section>

        {/* Demand drivers */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              {m.city} demand drivers
            </h2>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {m.demandDrivers.map((d, i) => (
                <li
                  key={i}
                  className="rounded-[18px] bg-[#f5f5f7] p-5 text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Active listings */}
        {active.length > 0 && (
          <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
            <div className="mx-auto max-w-[1024px] px-6">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                Active listings in {m.city}
              </h2>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {active.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/listings/${l.slug}`}
                      className="group block rounded-[18px] bg-white p-6 transition-colors duration-200 hover:bg-[#fafafa]"
                    >
                      <p className="text-[18px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                        {l.name}
                      </p>
                      <p className="mt-1 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                        {l.keys} keys · {l.brand} · {l.segment}
                      </p>
                      <p className="mt-3 text-[14px] font-semibold tabular-nums tracking-[-0.014em] text-[color:var(--text-primary)]">
                        {l.askingPrice}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-1 text-[14px] tracking-[-0.014em] text-[#1a3a6b] group-hover:underline underline-offset-[3px]">
                        View listing
                        <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Recent closed */}
        {recentClosed.length > 0 && (
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-[1024px] px-6">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                Recent {m.city} closes by Matthews
              </h2>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentClosed.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/closed/${d.slug}`}
                      className="group block rounded-[18px] bg-[#f5f5f7] p-6 transition-colors duration-200 hover:bg-[#ececef]"
                    >
                      <p className="text-[18px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                        {d.name}
                      </p>
                      <p className="mt-1 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                        {d.keys} keys · {d.year} · {d.transactionTypeLabel ?? d.transactionType}
                      </p>
                      <p className="mt-3 text-[14px] font-semibold tabular-nums tracking-[-0.014em] text-[color:var(--text-primary)]">
                        {d.dealSize}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-1 text-[14px] tracking-[-0.014em] text-[#1a3a6b] group-hover:underline underline-offset-[3px]">
                        View transaction
                        <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Brokers + CTA */}
        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            <div>
              {marketBrokers.length > 0 && (
                <div>
                  <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                    {m.city} market specialists
                  </h2>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {marketBrokers.map((b) => (
                      <Link
                        key={b.slug}
                        href={`/team/${b.slug}`}
                        className="group block rounded-[18px] bg-white p-6 transition-colors duration-200 hover:bg-[#fafafa]"
                      >
                        <p className="text-[18px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                          {b.name}
                        </p>
                        <p className="mt-1 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                          {b.title}
                        </p>
                        <p className="mt-4 inline-flex items-center gap-1 text-[14px] tracking-[-0.014em] text-[#1a3a6b] group-hover:underline underline-offset-[3px]">
                          View profile
                          <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="rounded-[18px] bg-white p-8 self-start">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                Selling a {m.city} hotel?
              </h2>
              <p className="mt-4 text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                Talk to our {m.city} team. Confidential conversation, BOV available, no obligation.
              </p>
              <div className="mt-6">
                <Pill variant="primary" href="/contact" className="w-full">
                  Talk to us
                </Pill>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
