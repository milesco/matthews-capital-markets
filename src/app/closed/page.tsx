"use client";

import * as React from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { ClosedHero } from "@/components/sections/closed/ClosedHero";
import {
  ClosedFilters,
  EMPTY_FILTERS,
  type ClosedFilterValues,
} from "@/components/sections/closed/ClosedFilters";
import { ClosedGrid } from "@/components/sections/closed/ClosedGrid";
import { closed } from "@/lib/data/closed";

export default function ClosedPage() {
  const [filters, setFilters] =
    React.useState<ClosedFilterValues>(EMPTY_FILTERS);

  const brands = React.useMemo(() => {
    const set = new Set<string>();
    for (const d of closed) {
      if (d.brand) set.add(d.brand);
    }
    return Array.from(set).sort();
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="pt-14">
        <ClosedHero />
        <section className="bg-white border-b border-[#d2d2d7]">
          <div className="max-w-[1024px] mx-auto px-6 py-6">
            <ClosedFilters
              values={filters}
              onChange={setFilters}
              brands={brands}
            />
          </div>
        </section>
        <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-24">
          <ClosedGrid filters={filters} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
