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
import { brands } from "@/lib/data/brands";
import { listings } from "@/lib/data/listings";
import { closed } from "@/lib/data/closed";
import { markets } from "@/lib/data/markets";
import { brandFaqs, faqJsonLdNode } from "@/lib/seo/faq";

const SITE_URL = "https://matthewshotelmarkets.com";

type Params = { brand: string };

export function generateStaticParams(): Params[] {
  return brands.map((b) => ({ brand: b.slug }));
}

function findActiveListings(brand: string) {
  // Match by listing.brand string contains any of the brand's flag families.
  const b = brands.find((br) => br.slug === brand);
  if (!b) return [];
  const flags = b.flagFamilies.map((f) => f.toLowerCase());
  return listings.filter((l) =>
    flags.some((f) => l.brand.toLowerCase().includes(f.toLowerCase().split(" ")[0])),
  );
}

function findRecentClosed(brand: string, limit = 6) {
  const b = brands.find((br) => br.slug === brand);
  if (!b) return [];
  const flags = b.flagFamilies.map((f) => f.toLowerCase());
  return closed
    .filter((d) => {
      if (!d.brand) return false;
      return flags.some((f) =>
        d.brand!.toLowerCase().includes(f.toLowerCase().split(" ")[0]),
      );
    })
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { brand: slug } = await props.params;
  const b = brands.find((br) => br.slug === slug);
  if (!b) return { title: "Hotels for Sale" };

  const url = `${SITE_URL}/hotels-for-sale/${b.slug}`;
  const title = `${b.name} for Sale | ${b.segment} Hotel Investment Sales`;
  const description = `${b.tagline} ${b.intro.slice(0, 100)}`.slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function BrandPage(props: { params: Promise<Params> }) {
  const { brand: slug } = await props.params;
  const b = brands.find((br) => br.slug === slug);
  if (!b) notFound();

  const active = findActiveListings(slug);
  const recentClosed = findRecentClosed(slug, 6);
  const url = `${SITE_URL}/hotels-for-sale/${b.slug}`;
  const faqs = brandFaqs(b);
  // Top-tier markets where this brand trades — surface as cross-links for
  // topical-authority signal.
  const topMarkets = markets.slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `${b.name} for Sale | Matthews Hotel Markets`,
        description: b.intro,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: {
          "@type": "Brand",
          name: b.name,
          ...(b.parentTicker
            ? {
                parentOrganization: {
                  "@type": "Organization",
                  name: b.parentCompany,
                  ...(b.parentTicker ? { tickerSymbol: b.parentTicker } : {}),
                },
              }
            : {
                parentOrganization: {
                  "@type": "Organization",
                  name: b.parentCompany,
                },
              }),
        },
        mainEntity: {
          "@type": "ItemList",
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
            name: "Hotels for Sale",
            item: `${SITE_URL}/hotels-for-sale`,
          },
          { "@type": "ListItem", position: 3, name: b.name, item: url },
        ],
      },
      faqJsonLdNode(url, faqs),
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
            <Eyebrow>{b.segment}</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead={`${b.name} for sale.`}
                follow={`Investment sales advisory across the ${b.parentCompany} family.`}
              />
            </div>
            <p className="mt-6 max-w-[64ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
              {b.intro}
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[color:var(--divider)] pt-10">
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Brand family
                </p>
                <p className="mt-2 text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {b.flagFamilies.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Parent company
                </p>
                <p className="mt-2 text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {b.parentCompany}
                  {b.parentTicker && (
                    <span className="text-[color:var(--text-secondary)]">
                      {" "}
                      ({b.parentTicker})
                    </span>
                  )}
                </p>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Active Matthews listings
                </p>
                <p className="mt-2 text-[28px] font-semibold tabular-nums tracking-[-0.025em] text-[color:var(--text-primary)]">
                  {active.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Underwriting commentary */}
        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              Brand-specific underwriting
            </h2>
            <ul className="mt-6 space-y-4">
              {b.underwritingNotes.map((n, i) => (
                <li
                  key={i}
                  className="rounded-[18px] bg-white p-6 text-[16px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]"
                >
                  {n}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-[18px] bg-white p-6">
                <h3 className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Buyer pool
                </h3>
                <p className="mt-2 text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {b.buyerPool}
                </p>
              </div>
              <div className="rounded-[18px] bg-white p-6">
                <h3 className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Our activity
                </h3>
                <p className="mt-2 text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {b.ourActivity}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Active listings */}
        {active.length > 0 && (
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-[1024px] px-6">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                Active {b.name} listings
              </h2>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {active.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/listings/${l.slug}`}
                      className="group block rounded-[18px] bg-[#f5f5f7] p-6 transition-colors duration-200 hover:bg-[#ececef]"
                    >
                      <p className="text-[18px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                        {l.name}
                      </p>
                      <p className="mt-1 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                        {l.city}, {l.state} · {l.keys} keys
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
          <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
            <div className="mx-auto max-w-[1024px] px-6">
              <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                Recent {b.name} closes
              </h2>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentClosed.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/closed/${d.slug}`}
                      className="group block rounded-[18px] bg-white p-6 transition-colors duration-200 hover:bg-[#fafafa]"
                    >
                      <p className="text-[18px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                        {d.name}
                      </p>
                      <p className="mt-1 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                        {d.city}, {d.state} · {d.keys} keys · {d.year}
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

        {/* Markets where this brand trades */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              Markets where we sell {b.name}
            </h2>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {topMarkets.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/markets/${m.slug}`}
                    className="group block rounded-[14px] bg-[#f5f5f7] p-4 transition-colors duration-200 hover:bg-[#ececef]"
                  >
                    <p className="text-[14px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                      {m.city}, {m.state}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1 text-[12px] tracking-[-0.014em] text-[#1a3a6b] group-hover:underline underline-offset-[3px]">
                      View market
                      <ChevronRight className="h-3 w-3" strokeWidth={1.75} aria-hidden="true" />
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ — direct citation surface for AI Overview / ChatGPT / Perplexity */}
        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              {b.name} investment FAQ
            </h2>
            <dl className="mt-8 divide-y divide-[color:var(--divider)]">
              {faqs.map((f, i) => (
                <div key={i} className="py-6 first:pt-0 last:pb-0">
                  <dt className="text-[18px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                    {f.q}
                  </dt>
                  <dd className="mt-3 text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6">
            <div className="rounded-[18px] bg-[color:var(--surface-elevated)] p-10 lg:p-14 text-center">
              <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                {b.name}
              </p>
              <h2 className="mt-4 text-[clamp(28px,3vw,40px)] font-semibold leading-[1.1] tracking-[-0.012em] text-[color:var(--text-primary)]">
                Selling a {b.name}? Or buying one?
              </h2>
              <p className="mt-4 max-w-[58ch] mx-auto text-[17px] leading-[1.47] tracking-[-0.022em] text-[color:var(--text-secondary)]">
                Talk to the team. Confidential conversation, no obligation.
              </p>
              <div className="mt-8 flex justify-center">
                <Pill variant="primary" href="/contact">
                  Talk to us
                </Pill>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
