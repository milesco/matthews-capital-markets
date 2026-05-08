import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";
import type { Listing } from "@/lib/data/listings";

export interface ListingHeroProps {
  listing: Listing;
}

export function ListingHero({ listing }: ListingHeroProps) {
  const hasPhoto = Boolean(listing.photo);

  return (
    <section
      className={cn(
        "dark-section relative overflow-hidden text-white pt-32 pb-20 lg:pt-40 lg:pb-24 min-h-[60vh]",
        !hasPhoto && "bg-gradient-to-br",
        !hasPhoto && listing.toneClass,
      )}
    >
      {/* Photo backdrop with bottom-anchored gradient for headline legibility */}
      {hasPhoto ? (
        <>
          <Image
            src={listing.photo}
            alt={listing.name}
            fill
            quality={92}
            sizes="100vw"
            priority
            className="object-cover"
          />
          {/* Bottom-anchored gradient — let the photo breathe up top, darken
              only where text sits at the bottom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.78) 100%)",
            }}
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(1200px 600px at 30% 30%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(900px 600px at 70% 80%, rgba(0,0,0,0.30), transparent 60%)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-[1024px] px-6">
        {/* Breadcrumb */}
        <p className="text-[12px] uppercase tracking-[0.18em] font-medium text-white/70">
          <Link
            href="/listings"
            className="hover:text-white transition-colors duration-200"
          >
            Listings
          </Link>
          <span aria-hidden="true" className="mx-2 opacity-60">
            ·
          </span>
          <span>
            {listing.city}, {listing.state}
          </span>
        </p>

        {/* Headline */}
        <div className="mt-6">
          <TwoToneHeadline
            as="h1"
            size="hero"
            tone="dark"
            lead={`${listing.name}.`}
            follow={`${listing.city}, ${listing.state}.`}
          />
        </div>

        {/* Status badge */}
        <div className="mt-6">
          <StatusBadge status={listing.status} />
        </div>

        {/* Chip rail: keys, segment, brand, year */}
        <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-[14px] tracking-[-0.014em] text-white/70">
          <li className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
            <span className="tabular-nums font-medium text-white">
              {listing.keys}
            </span>{" "}
            keys
          </li>
          <li className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
            {listing.segment}
          </li>
          <li className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
            {listing.brand}
          </li>
          <li className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
            <span className="tabular-nums">{listing.yearBuilt}</span>
            {listing.yearRenovated ? (
              <>
                {" "}/{" "}
                <span className="tabular-nums">{listing.yearRenovated}</span>
              </>
            ) : null}
          </li>
        </ul>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {listing.omUrl ? (
            <Pill
              variant="primary"
              size="default"
              href={listing.omUrl}
              target="_blank"
            >
              View OM
            </Pill>
          ) : (
            <Pill
              variant="primary"
              size="default"
              href={`/contact?ref=${encodeURIComponent(listing.slug)}`}
            >
              Request OM
            </Pill>
          )}
          <Pill
            variant="secondary"
            size="default"
            href={`/contact?ref=${encodeURIComponent(listing.slug)}`}
            className="border-white/40 text-white hover:bg-white hover:text-[#1d1d1f]"
          >
            Talk to broker
          </Pill>
        </div>
      </div>
    </section>
  );
}

export default ListingHero;
