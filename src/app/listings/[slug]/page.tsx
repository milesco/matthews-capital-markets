import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

  return {
    title: `${listing.name} — Matthews Hotel Team`,
    description: `${listing.keys}-key ${listing.segment.toLowerCase()} hotel for sale in ${listing.city}, ${listing.state}. ${listing.askingPrice}.`,
    openGraph: {
      title: `${listing.name} — Matthews Hotel Team`,
      description: `${listing.keys}-key ${listing.segment.toLowerCase()} hotel for sale in ${listing.city}, ${listing.state}.`,
      type: "article",
    },
  };
}

export default async function ListingDetailPage(
  props: { params: Promise<Params> },
) {
  const { slug } = await props.params;
  const listing = getListing(slug);
  if (!listing) notFound();

  const primaryBrokerSlug = listing.brokerSlugs[0];
  const primaryBroker = primaryBrokerSlug
    ? getBroker(primaryBrokerSlug)
    : undefined;

  return (
    <>
      <SiteHeader />
      <main>
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
                    tone: primaryBroker.cover.tone,
                  }}
                  listingName={listing.name}
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
