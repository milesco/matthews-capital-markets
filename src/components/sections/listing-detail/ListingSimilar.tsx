import * as React from "react";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { GhostLink } from "@/components/ui/GhostLink";
import { Reveal } from "@/components/ui/Reveal";
import { ListingCard } from "@/components/sections/listings/ListingCard";
import { listings } from "@/lib/data/listings";

export interface ListingSimilarProps {
  currentSlug: string;
}

export function ListingSimilar({ currentSlug }: ListingSimilarProps) {
  const others = listings.filter((l) => l.slug !== currentSlug).slice(0, 3);

  if (others.length === 0) return null;

  return (
    <section className="bg-[color:var(--surface-elevated)] py-20">
      <div className="mx-auto max-w-[1024px] px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <TwoToneHeadline
              size="subsection"
              lead="Similar listings."
              follow="More from the team."
            />
          </Reveal>
          <Reveal delay={0.05}>
            <GhostLink href="/listings">See all listings</GhostLink>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {others.map((listing, i) => (
            <Reveal key={listing.slug} delay={i * 0.05}>
              <ListingCard listing={listing} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListingSimilar;
