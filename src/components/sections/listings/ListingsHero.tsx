import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { listings } from "@/lib/data/listings";

export function ListingsHero() {
  const totalKeys = listings.reduce((sum, l) => sum + l.keys, 0);
  const segments = new Set(listings.map((l) => l.segment)).size;
  const states = new Set(listings.map((l) => l.state)).size;

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <Eyebrow>Available for acquisition</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <TwoToneHeadline
            as="h1"
            size="section"
            lead="Listings."
            follow="Six active assignments across Texas and beyond."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[15px] tracking-[-0.014em]">
            <div className="flex items-baseline gap-2">
              <dt className="text-[color:var(--text-secondary)]">Active</dt>
              <dd className="font-semibold tabular-nums text-[color:var(--text-primary)]">
                {listings.length}
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="text-[color:var(--text-secondary)]">Keys</dt>
              <dd className="font-semibold tabular-nums text-[color:var(--text-primary)]">
                {totalKeys.toLocaleString()}
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="text-[color:var(--text-secondary)]">Segments</dt>
              <dd className="font-semibold tabular-nums text-[color:var(--text-primary)]">
                {segments}
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="text-[color:var(--text-secondary)]">Markets</dt>
              <dd className="font-semibold tabular-nums text-[color:var(--text-primary)]">
                {states}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export default ListingsHero;
