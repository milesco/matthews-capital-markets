import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import { offices } from "@/lib/data/offices";
import { team } from "@/lib/data/team";

const SITE_URL = "https://matthewshotelmarkets.com";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return offices.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const office = offices.find((o) => o.slug === slug);
  if (!office) return { title: "Office" };

  const url = `${SITE_URL}/offices/${office.slug}`;
  const title = `${office.city} Hotel Brokers | Matthews Hotel Markets ${office.city} Office`;
  const description = `Matthews Hotel Markets ${office.city}, ${office.state}. ${office.marketTagline} ${office.marketCommentary.slice(0, 60)}`;

  return {
    title,
    description: description.slice(0, 160),
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function OfficePage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const office = offices.find((o) => o.slug === slug);
  if (!office) notFound();

  const officeBrokers = office.brokerSlugs
    .map((s) => team.find((m) => m.slug === s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const url = `${SITE_URL}/offices/${office.slug}`;

  // LocalBusiness schema with office Place node + broker references.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "RealEstateAgent"],
        "@id": `${url}#office`,
        name: `Matthews Hotel Markets — ${office.city}`,
        description: office.marketCommentary,
        url,
        telephone: office.phone,
        email: "hotelteam@matthews.com",
        parentOrganization: { "@id": `${SITE_URL}/#org` },
        address: {
          "@type": "PostalAddress",
          ...(office.streetAddress
            ? { streetAddress: office.streetAddress }
            : {}),
          addressLocality: office.city,
          addressRegion: office.state,
          ...(office.zip ? { postalCode: office.zip } : {}),
          addressCountry: "US",
        },
        ...(office.geo
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: office.geo.lat,
                longitude: office.geo.lng,
              },
            }
          : {}),
        areaServed: { "@type": "State", name: office.state },
        employee: officeBrokers.map((b) => ({
          "@type": "Person",
          "@id": `${SITE_URL}/team/${b.slug}#person`,
          name: b.name,
          url: `${SITE_URL}/team/${b.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Offices",
            item: `${SITE_URL}/offices`,
          },
          { "@type": "ListItem", position: 3, name: office.city, item: url },
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
            <Eyebrow>{office.isHeadquarters ? "Headquarters" : "Office"}</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead={`Matthews Hotel Markets ${office.city}.`}
                follow={office.marketTagline}
              />
            </div>
            <p className="mt-6 max-w-[58ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
              {office.marketCommentary}
            </p>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
              <div>
                {officeBrokers.length > 0 && (
                  <div>
                    <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                      Brokers in {office.city}
                    </h2>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {officeBrokers.map((b) => (
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
              </div>

              <aside className="rounded-[18px] bg-[#f5f5f7] p-6">
                <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                  Visit
                </h2>
                <div className="mt-4 space-y-3 text-[15px] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-1 shrink-0 text-[#1a3a6b]" strokeWidth={1.75} aria-hidden="true" />
                    <div>
                      {office.streetAddress && <div>{office.streetAddress}</div>}
                      <div>
                        {office.city}, {office.state}
                        {office.zip ? ` ${office.zip}` : ""}
                      </div>
                    </div>
                  </div>
                  {office.phone && (
                    <a
                      href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                      className="flex items-center gap-3 hover:text-[#1a3a6b] transition-colors"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-[#1a3a6b]" strokeWidth={1.75} aria-hidden="true" />
                      <span>{office.phone}</span>
                    </a>
                  )}
                  <a
                    href="mailto:hotelteam@matthews.com"
                    className="flex items-center gap-3 hover:text-[#1a3a6b] transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#1a3a6b]" strokeWidth={1.75} aria-hidden="true" />
                    <span>hotelteam@matthews.com</span>
                  </a>
                </div>
                <div className="mt-6">
                  <Pill variant="primary" href="/contact" className="w-full">
                    Talk to the team
                  </Pill>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
