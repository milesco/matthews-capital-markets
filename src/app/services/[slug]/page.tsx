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
import { services } from "@/lib/data/services";

const SITE_URL = "https://matthewshotelmarkets.com";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };

  const url = `${SITE_URL}/services/${service.slug}`;
  const title = `${service.name} | Matthews Hotel Markets`;
  const description = `${service.tagline} ${service.description.slice(0, 110)}`;

  return {
    title,
    description: description.slice(0, 160),
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ServicePage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const url = `${SITE_URL}/services/${service.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.name,
        serviceType: "Commercial Real Estate Brokerage",
        description: service.description,
        provider: { "@id": `${SITE_URL}/#org` },
        areaServed: { "@type": "Country", name: "United States" },
        audience: {
          "@type": "BusinessAudience",
          audienceType: service.audience,
        },
        offers: {
          "@type": "Offer",
          businessFunction:
            service.slug === "investment-sales"
              ? "http://purl.org/goodrelations/v1#Sell"
              : "http://purl.org/goodrelations/v1#ProvideService",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          { "@type": "ListItem", position: 3, name: service.name, item: url },
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
            <Eyebrow>{service.shortName}</Eyebrow>
            <div className="mt-6">
              <TwoToneHeadline
                as="h1"
                size="section"
                lead={`${service.name}.`}
                follow={service.tagline}
              />
            </div>
            <p className="mt-6 max-w-[64ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-secondary)]">
              {service.description}
            </p>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-[color:var(--divider)] pt-10">
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  {service.rangeLabel}
                </dt>
                <dd className="mt-2 text-[28px] font-semibold tracking-[-0.025em] text-[color:var(--text-primary)]">
                  {service.rangeValue}
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  Who we serve
                </dt>
                <dd className="mt-2 text-[15px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
                  {service.audience}
                </dd>
              </div>
            </dl>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.keyPoints.map((p) => (
                <div
                  key={p.label}
                  className="rounded-[18px] bg-[#f5f5f7] p-6"
                >
                  <h3 className="text-[16px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                    {p.label}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.5] tracking-[-0.014em] text-[#424245]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-5">
              <Pill variant="primary" href="/contact">
                {service.ctaLabel}
              </Pill>
              <Link
                href="/process"
                className="inline-flex min-h-[44px] -my-2 items-center gap-1 text-[15px] tracking-[-0.014em] text-[#1a3a6b] hover:underline underline-offset-[3px]"
              >
                Read the 24-week process
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
