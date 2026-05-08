import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { GhostLink } from "@/components/ui/GhostLink";
import { cn } from "@/lib/utils";
import type { Listing } from "@/lib/data/listings";

export interface ListingCardProps {
  listing: Listing;
  className?: string;
}

/** First-sentence preview of the listing summary, capped to ~140 chars. */
function previewFromSummary(summary: string): string {
  if (!summary) return "";
  // Take the first sentence (period followed by space, or end of paragraph).
  const firstSentence = summary.split(/(?<=\.)\s/)[0] ?? summary;
  const compact = firstSentence.replace(/\s+/g, " ").trim();
  return compact.length > 140 ? compact.slice(0, 137).trimEnd() + "…" : compact;
}

export function ListingCard({ listing, className }: ListingCardProps) {
  const isUponRequest = /upon request/i.test(listing.askingPrice);
  // When a listing has a hosted OM, every click on the card jumps straight
  // to it (same tab) — the detail page is skipped entirely. Without an OM,
  // the card links to the internal detail page as usual.
  const cardHref = listing.omUrl ?? `/listings/${listing.slug}`;
  const isExternal = Boolean(listing.omUrl);
  const linkLabel = listing.omUrl ? "View OM" : "View listing";
  const description = previewFromSummary(listing.summary);

  // Shared cover content — same JSX inside either <a> or <Link> wrapper.
  const cover = (
    <>
      {listing.photo ? (
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]">
          <Image
            src={listing.photo}
            alt={listing.name}
            fill
            quality={88}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]",
            listing.toneClass,
          )}
          aria-hidden="true"
        />
      )}
      <div className="absolute top-3 left-3">
        <StatusBadge status={listing.status} size="sm" />
      </div>
      <div className="absolute top-3 right-3">
        <span className="rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] font-medium text-[#1d1d1f]">
          {listing.brand}
        </span>
      </div>
    </>
  );

  const coverClass =
    "block relative aspect-[16/10] w-full overflow-hidden";
  const titleClass = "after:absolute after:inset-0 after:content-['']";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[18px] bg-white card-lift",
        className,
      )}
    >
      {/* Cover */}
      {isExternal ? (
        <a
          href={cardHref}
          className={coverClass}
          aria-label={`${listing.name}, ${listing.city}, ${listing.state}`}
        >
          {cover}
        </a>
      ) : (
        <Link
          href={cardHref}
          className={coverClass}
          aria-label={`${listing.name}, ${listing.city}, ${listing.state}`}
        >
          {cover}
        </Link>
      )}

      <div className="p-6">
        <p className="text-[12px] tracking-[-0.01em] text-[#86868b] mb-2">
          {listing.city}, {listing.state}
        </p>
        <h3 className="font-semibold text-[18px] tracking-[-0.022em] text-[#1d1d1f] line-clamp-2">
          {isExternal ? (
            <a href={cardHref} className={titleClass}>
              {listing.name}
            </a>
          ) : (
            <Link href={cardHref} className={titleClass}>
              {listing.name}
            </Link>
          )}
        </h3>

        {description ? (
          <p className="mt-3 text-[14px] leading-[1.45] tracking-[-0.014em] text-[#424245] line-clamp-3">
            {description}
          </p>
        ) : null}

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
          <GhostLink href={cardHref}>{linkLabel}</GhostLink>
        </div>
      </div>
    </article>
  );
}

export default ListingCard;
