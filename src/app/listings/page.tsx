"use client";

import * as React from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ListingsHero } from "@/components/sections/listings/ListingsHero";
import {
  ListingFilters,
  EMPTY_FILTERS,
  applyListingFilters,
  type ListingFilterValues,
} from "@/components/sections/listings/ListingFilters";
import { ListingsGrid } from "@/components/sections/listings/ListingsGrid";
import { listings } from "@/lib/data/listings";

export default function ListingsPage() {
  const [values, setValues] =
    React.useState<ListingFilterValues>(EMPTY_FILTERS);

  const brands = React.useMemo(
    () => Array.from(new Set(listings.map((l) => l.brand))).sort(),
    [],
  );

  const filtered = React.useMemo(
    () => applyListingFilters(listings, values),
    [values],
  );

  return (
    <>
      <SiteHeader />
      <main className="pt-14">
        <ListingsHero />

        <section className="bg-white">
          <div className="mx-auto max-w-[1024px] px-6 py-8">
            <ListingFilters
              brands={brands}
              values={values}
              onChange={setValues}
              resultCount={filtered.length}
            />
          </div>
        </section>

        <ListingsGrid listings={filtered} />
      </main>
      <SiteFooter />
    </>
  );
}
