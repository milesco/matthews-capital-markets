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

export function ListingsBrowser() {
  const [activeSegment, setActiveSegment] = React.useState<string>("");

  const availableSegments = React.useMemo<Segment[]>(() => {
    const present = new Set(listings.map((l) => l.segment));
    return SEGMENT_ORDER.filter((s) => present.has(s));
  }, []);

  const filtered = React.useMemo(
    () =>
      activeSegment
        ? listings.filter((l) => l.segment === activeSegment)
        : listings,
    [activeSegment],
  );

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
