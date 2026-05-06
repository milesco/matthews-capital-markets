import * as React from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { GhostLink } from "@/components/ui/GhostLink";
import { cn } from "@/lib/utils";
import type { Listing } from "@/lib/data/listings";

export interface ListingCardProps {
  listing: Listing;
  className?: string;
}

export function ListingCard({ listing, className }: ListingCardProps) {
  const isUponRequest = /upon request/i.test(listing.askingPrice);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[18px] bg-white card-lift",
        className,
      )}
    >
      {/* Cover — gradient placeholder until photography lands */}
      <Link
        href={`/listings/${listing.slug}`}
        className="block relative aspect-[16/10] w-full overflow-hidden"
        aria-label={`${listing.name}, ${listing.city}, ${listing.state}`}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]",
            listing.toneClass,
          )}
          aria-hidden="true"
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={listing.status} size="sm" />
        </div>
        <div className="absolute top-3 right-3">
          <span className="rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] font-medium text-[#1d1d1f]">
            {listing.brand}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <p className="text-[12px] tracking-[-0.01em] text-[#86868b] mb-2">
          {listing.city}, {listing.state}
        </p>
        <h3 className="font-semibold text-[18px] tracking-[-0.022em] text-[#1d1d1f] line-clamp-2">
          <Link
            href={`/listings/${listing.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {listing.name}
          </Link>
        </h3>

        <div className="mt-5 hairline" />

        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="font-semibold text-[22px] leading-none tabular-nums tracking-[-0.014em] text-[#1d1d1f]">
              {listing.keys}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] font-medium text-[#86868b]">
              Keys
            </p>
          </div>
          <div className="text-right">
            <p
              className={cn(
                "text-[15px] tracking-[-0.014em]",
                isUponRequest
                  ? "text-[#86868b]"
                  : "font-medium text-[#1d1d1f]",
              )}
            >
              {listing.askingPrice}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] font-medium text-[#86868b]">
              Asking
            </p>
          </div>
        </div>

        <div className="mt-5 relative z-10">
          <GhostLink href={`/listings/${listing.slug}`}>
            View listing
          </GhostLink>
        </div>
      </div>
    </article>
  );
}

export default ListingCard;
