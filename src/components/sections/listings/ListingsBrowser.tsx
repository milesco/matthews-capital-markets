"use client";

import * as React from "react";
import { SegmentChips } from "@/components/sections/listings/SegmentChips";
import { ListingsGrid } from "@/components/sections/listings/ListingsGrid";
import { listings, type Segment } from "@/lib/data/listings";

const SEGMENT_ORDER: Segment[] = [
  "Select Service",
  "Full Service",
  "Resort",
  "Lifestyle",
  "Boutique",
  "Extended Stay",
];

/** Curated listings that always render at the top of the grid, in this order. */
const PINNED_SLUGS = [
  "walden-retreats-hill-country",
  "hampton-inn-shelbyville",
];

/** Parse "$6,400,000" → 6400000. "Upon Request" / unparseable → -Infinity (sorts last). */
function priceValue(askingPrice: string): number {
  const digits = askingPrice.replace(/[^0-9]/g, "");
  return digits ? Number(digits) : -Infinity;
}

export function ListingsBrowser() {
  const [activeSegment, setActiveSegment] = React.useState<string>("");

  const availableSegments = React.useMemo<Segment[]>(() => {
    const present = new Set(listings.map((l) => l.segment));
    return SEGMENT_ORDER.filter((s) => present.has(s));
  }, []);

  const filtered = React.useMemo(() => {
    const base = activeSegment
      ? listings.filter((l) => l.segment === activeSegment)
      : listings;

    const pinned = PINNED_SLUGS.map((slug) =>
      base.find((l) => l.slug === slug),
    ).filter((l): l is (typeof base)[number] => Boolean(l));

    const rest = base
      .filter((l) => !PINNED_SLUGS.includes(l.slug))
      .sort((a, b) => priceValue(b.askingPrice) - priceValue(a.askingPrice));

    return [...pinned, ...rest];
  }, [activeSegment]);

  return (
    <>
      {availableSegments.length > 1 && (
        <section className="bg-white">
          <div className="mx-auto max-w-[1024px] px-6 pb-2">
            <SegmentChips
              segments={availableSegments}
              active={activeSegment}
              onChange={setActiveSegment}
              resultCount={filtered.length}
            />
          </div>
        </section>
      )}

      <ListingsGrid listings={filtered} />
    </>
  );
}

export default ListingsBrowser;
