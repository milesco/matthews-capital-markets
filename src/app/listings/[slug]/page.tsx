import * as React from "react";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StickyBrokerRail } from "@/components/ui/StickyBrokerRail";
import { ListingHero } from "@/components/sections/listing-detail/ListingHero";
import { ListingStatPanel } from "@/components/sections/listing-detail/ListingStatPanel";
import { ListingNarrative } from "@/components/sections/listing-detail/ListingNarrative";
import { ListingGallery } from "@/components/sections/listing-detail/ListingGallery";
import { ListingLocation } from "@/components/sections/listing-detail/ListingLocation";
import { ListingSimilar } from "@/components/sections/listing-detail/ListingSimilar";
import { listings, getListing } from "@/lib/data/listings";
import { getBroker } from "@/lib/data/team";

const SITE_URL = "https://matthewshotelmarkets.com";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata(
  props: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const listing = getListing(slug);
  if (!listing) return {};

  const url = `${SITE_URL}/listings/${listing.slug}`;
  const title = `${listing.name} | ${listing.keys}-key ${listing.segment} Hotel for Sale, ${listing.city}, ${listing.state}`;
  const description = `${listing.keys}-key ${listing.segment.toLowerCase()} ${listing.brand} hotel for sale in ${listing.city}, ${listing.state}. Asking ${listing.askingPrice}. Call for Offers ${listing.callForOffersDate ?? "ongoing"}.`.slice(
    0,
    160,
  );

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      ...(listing.photo
        ? {
            images: [
              {
                url: `${SITE_URL}${listing.photo}`,
                width: 1600,
                height: 900,
                alt: listing.name,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(listing.photo ? { images: [`${SITE_URL}${listing.photo}`] } : {}),
    },
  };
}

export default async function ListingDetailPage(
  props: { params: Promise<Params> },
) {
  const { slug } = await props.params;
  const listing = getListing(slug);
  if (!listing) notFound();

  // When a listing has a hosted OM, the detail page is skipped entirely ,
  // anyone hitting this route gets redirected straight to the OM. The card
  // on /listings does the same redirect on click. Server-side redirect is
  // the cleanest path: works for direct URL hits, shared links, and any
  // residual internal links.
  if (listing.omUrl) {
    redirect(listing.omUrl);
  }

  const primaryBrokerSlug = listing.brokerSlugs[0];
  const primaryBroker = primaryBrokerSlug
    ? getBroker(primaryBrokerSlug)
    : undefined;

  const url = `${SITE_URL}/listings/${listing.slug}`;
  const description = `${listing.keys}-key ${listing.segment} ${listing.brand} hotel for sale in ${listing.city}, ${listing.state}. ${listing.summary.slice(0, 200)}`;
  const image = listing.photo
    ? `${SITE_URL}${listing.photo}`
    : `${SITE_URL}/images/hero-landscape.jpg`;

  // Single @graph: MTE Product+Hotel + Offer (sell) + Place + BreadcrumbList
  // + WebPage. AI Overview retrievers consume @graph more reliably than
  // multiple separate <script> tags.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Product", "Hotel"],
        "@id": `${url}#listing`,
        name: listing.name,
        description,
        image,
        url,
        brand: { "@type": "Brand", name: listing.brand },
        category: `${listing.segment} Hotel`,
        numberOfRooms: listing.keys,
        address: {
          "@type": "PostalAddress",
          streetAddress: listing.address,
          addressLocality: listing.city,
          addressRegion: listing.state,
          addressCountry: "US",
        },
        offers: { "@id": `${url}#offer` },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Keys", value: listing.keys },
          { "@type": "PropertyValue", name: "Segment", value: listing.segment },
          { "@type": "PropertyValue", name: "Brand", value: listing.brand },
          {
            "@type": "PropertyValue",
            name: "Year Built",
            value: listing.yearBuilt,
          },
          ...(listing.yearRenovated
            ? [
                {
                  "@type": "PropertyValue",
                  name: "Year Renovated",
                  value: listing.yearRenovated,
                },
              ]
            : []),
          ...(listing.adr
            ? [{ "@type": "PropertyValue", name: "ADR", value: listing.adr }]
            : []),
          ...(listing.revpar
            ? [
                {
                  "@type": "PropertyValue",
                  name: "RevPAR",
                  value: listing.revpar,
                },
              ]
            : []),
          ...(listing.occupancy
            ? [
                {
                  "@type": "PropertyValue",
                  name: "Occupancy",
                  value: listing.occupancy,
                },
              ]
            : []),
        ],
      },
      {
        "@type": "Offer",
        "@id": `${url}#offer`,
        // GoodRelations 'Sell' — disambiguates from a stay-night booking.
        businessFunction: "http://purl.org/goodrelations/v1#Sell",
        availability:
          listing.status === "available"
            ? "https://schema.org/InStock"
            : "https://schema.org/Reserved",
        priceCurrency: "USD",
        price: listing.askingPrice,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          description: listing.callForOffersDate
            ? `Call for Offers ${listing.callForOffersDate}`
            : listing.askingPrice,
        },
        url,
        itemOffered: { "@id": `${url}#listing` },
        broker: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Listings",
            item: `${SITE_URL}/listings`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: listing.name,
            item: url,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        primaryImageOfPage: image,
        mainEntity: { "@id": `${url}#listing` },
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main className={primaryBroker ? "pb-20 lg:pb-0" : undefined}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ListingHero listing={listing} />
        <ListingStatPanel listing={listing} />

        <div className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            <div className="min-w-0">
              <ListingNarrative listing={listing} />
              <ListingGallery listing={listing} />
              <ListingLocation listing={listing} />
            </div>

            {primaryBroker && (
              <aside className="lg:pt-2">
                <StickyBrokerRail
                  broker={{
                    name: primaryBroker.name,
                    title: primaryBroker.title,
                    phone: primaryBroker.phone,
                    email: primaryBroker.email,
                    photo: primaryBroker.photo,
                    tone: primaryBroker.cover.tone,
                  }}
                  listingName={listing.name}
                  omUrl={listing.omUrl}
                />
              </aside>
            )}
          </div>
        </div>

        <ListingSimilar currentSlug={listing.slug} />
      </main>
      <SiteFooter />
      {/* Mobile broker rail spacer so the fixed bar doesn't overlap the footer text */}
      {primaryBroker && <div aria-hidden="true" className="h-20 lg:hidden" />}
    </>
  );
}
