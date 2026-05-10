"use client";

import * as React from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ListingsHero } from "@/components/sections/listings/ListingsHero";
import { SegmentChips } from "@/components/sections/listings/SegmentChips";
import { ListingsGrid } from "@/components/sections/listings/ListingsGrid";
import PosterCTA from "@/components/sections/shared/PosterCTA";
import { listings, type Segment } from "@/lib/data/listings";

export default function ListingsPage() {
  const [activeSegment, setActiveSegment] = React.useState<string>("");

  // Only show segments that actually exist in the catalog. Doubles as a
  // content signal: "these are the categories we trade in."
  const availableSegments = React.useMemo<Segment[]>(() => {
    const order: Segment[] = [
      "Select Service",
      "Full Service",
      "Resort",
      "Lifestyle",
      "Boutique",
      "Extended Stay",
    ];
    const present = new Set(listings.map((l) => l.segment));
    return order.filter((s) => present.has(s));
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
      <SiteHeader />
      <main className="pt-14">
        <ListingsHero />

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
        <PosterCTA
          lead="Don't see your asset?"
          follow="Bring it to market."
        />
      </main>
      <SiteFooter />
    </>
  );
}
