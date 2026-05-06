import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ListingCard } from "./ListingCard";
import type { Listing } from "@/lib/data/listings";

export interface ListingsGridProps {
  listings: Listing[];
}

export function ListingsGrid({ listings }: ListingsGridProps) {
  return (
    <section className="bg-[#f5f5f7] py-16 lg:py-20">
      <div className="mx-auto max-w-[1024px] px-6">
        {listings.length === 0 ? (
          <div className="rounded-[22px] bg-white py-16 text-center">
            <p className="text-[17px] font-semibold tracking-[-0.022em] text-[#1d1d1f]">
              No listings match your filters.
            </p>
            <p className="mt-2 text-[15px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              Try clearing one or two filters to see more results.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing, i) => (
              <Reveal key={listing.slug} delay={i * 0.05}>
                <ListingCard listing={listing} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ListingsGrid;
