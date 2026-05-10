import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { closed } from "@/lib/data/closed";
import { team } from "@/lib/data/team";

const SITE_URL = "https://matthewshotelmarkets.com";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return closed.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const deal = closed.find((d) => d.slug === slug);
  if (!deal) return { title: "Closed Transaction" };

  const url = `${SITE_URL}/closed/${deal.slug}`;
  const title = `${deal.name} — ${deal.transactionTypeLabel ?? deal.transactionType}, ${deal.city}, ${deal.state}`;
  const description = `Matthews Hotel Markets closed the ${deal.name} ${deal.transactionTypeLabel ?? deal.transactionType.toLowerCase()} in ${deal.city}, ${deal.state} (${deal.year}). ${deal.keys} keys. ${deal.dealSize}.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      ...(deal.photo
        ? { images: [{ url: `${SITE_URL}${deal.photo}`, width: 1600, height: 900, alt: deal.name }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ClosedDealPage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const deal = closed.find((d) => d.slug === slug);
  if (!deal) notFound();

  const brokers = deal.brokerSlugs
    .map((s) => team.find((m) => m.slug === s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const url = `${SITE_URL}/closed/${deal.slug}`;
  const image = deal.photo
    ? `${SITE_URL}${deal.photo}`
    : `${SITE_URL}/images/hero-landscape.jpg`;

  // @graph: Article (the close announcement) + RealEstateListing-as-Product
  // (with Sold availability) + BreadcrumbList. Brokers credited as authors of
  // the close — their E-E-A-T signal compounds.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: `${deal.name} — closed by Matthews Hotel Markets`,
        description: `${deal.transactionTypeLabel ?? deal.transactionType} of the ${deal.name} (${deal.keys} keys, ${deal.city}, ${deal.state}). ${deal.dealSize}.`,
        datePublished: `${deal.year}-12-31`,
        dateModified: `${deal.year}-12-31`,
        inLanguage: "en-US",
        author:
          brokers.length > 0
            ? brokers.map((b) => ({
                "@type": "Person",
                "@id": `${SITE_URL}/team/${b.slug}#person`,
                name: b.name,
                url: `${SITE_URL}/team/${b.slug}`,
              }))
            : { "@id": `${SITE_URL}/#org` },
        publisher: { "@id": `${SITE_URL}/#org` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
      {
        "@type": ["Product", "Hotel"],
        "@id": `${url}#asset`,
        name: deal.name,
        ...(deal.brand ? { brand: { "@type": "Brand", name: deal.brand } } : {}),
        category: `${deal.segment} Hotel`,
        numberOfRooms: deal.keys,
        address: {
          "@type": "PostalAddress",
          addressLocality: deal.city,
          addressRegion: deal.state,
          addressCountry: "US",
        },
        offers: {
          "@type": "Offer",
          businessFunction: "http://purl.org/goodrelations/v1#Sell",
          availability: "https://schema.org/SoldOut",
          priceCurrency: "USD",
          price: deal.dealSize,
          validThrough: `${deal.year}-12-31`,
          broker: { "@id": `${SITE_URL}/#org` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Closed",
            item: `${SITE_URL}/closed`,
          },
          { "@type": "ListItem", position: 3, name: deal.name, item: url },
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
            <p className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
              <Link
                href="/closed"
                className="hover:text-[color:var(--text-primary)] transition-colors"
              >
                Closed Transactions
              </Link>
              <span aria-hidden="true" className="mx-2 opacity-60">
                ·
              </span>
              <span>
                {deal.city}, {deal.state}
              </span>
            </p>

            <div className="mt-6">
              <Eyebrow>{deal.transactionTypeLabel ?? deal.transactionType}</Eyebrow>
            </div>

            <div className="mt-4">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead={`${deal.name}.`}
                follow={`Closed ${deal.year}.`}
              />
            </div>

            <p className="mt-6 max-w-[58ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
              Matthews Hotel Markets advised on the {(deal.transactionTypeLabel ?? deal.transactionType).toLowerCase()} of the {deal.name}, a {deal.keys}-key {deal.segment.toLowerCase()} hotel{deal.brand ? ` operating under the ${deal.brand} flag` : ""} in {deal.city}, {deal.state}.
            </p>

            {deal.photo && (
              <div className="mt-12 relative aspect-[16/9] w-full overflow-hidden rounded-[18px] bg-[#f5f5f7]">
                <Image
                  src={deal.photo}
                  alt={`${deal.name}, ${deal.city}, ${deal.state}`}
                  fill
                  quality={88}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[color:var(--divider)] pt-10">
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Deal Size
                </dt>
                <dd className="mt-2 text-[20px] font-semibold tabular-nums tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {deal.dealSize}
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Keys
                </dt>
                <dd className="mt-2 text-[20px] font-semibold tabular-nums tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {deal.keys}
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Segment
                </dt>
                <dd className="mt-2 text-[16px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {deal.segment}
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Sponsor
                </dt>
                <dd className="mt-2 text-[16px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {deal.sponsorProfile}
                </dd>
              </div>
              {deal.brand && (
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                    Brand
                  </dt>
                  <dd className="mt-2 text-[16px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                    {deal.brand}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Region
                </dt>
                <dd className="mt-2 text-[16px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {deal.region}
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Closed
                </dt>
                <dd className="mt-2 text-[16px] tabular-nums tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {deal.year}
                </dd>
              </div>
            </dl>

            {brokers.length > 0 && (
              <div className="mt-16 border-t border-[color:var(--divider)] pt-10">
                <p className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                  Brokers on this transaction
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brokers.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/team/${b.slug}`}
                      className="group block rounded-[18px] bg-[#f5f5f7] p-6 transition-colors duration-200 hover:bg-[#ececef]"
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

            <div className="mt-16 flex flex-wrap items-center gap-5">
              <Link
                href="/closed"
                className="inline-flex items-center gap-1 text-[15px] tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
              >
                <ChevronRight className="h-3.5 w-3.5 rotate-180" strokeWidth={1.75} aria-hidden="true" />
                All closed transactions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[15px] tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
              >
                Discuss a similar transaction
                <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
