"use client";

import * as React from "react";
import Image from "next/image";
import {
  closed as allClosed,
  getDealPhoto,
  type ClosedDeal,
} from "@/lib/data/closed";
import type { ClosedFilterValues } from "./ClosedFilters";

export interface ClosedGridProps {
  filters: ClosedFilterValues;
}

function applyFilters(items: ClosedDeal[], f: ClosedFilterValues): ClosedDeal[] {
  return items.filter((d) => {
    if (f.year && String(d.year) !== f.year) return false;
    if (f.segment && d.segment !== f.segment) return false;
    if (f.region && d.region !== f.region) return false;
    if (f.brand && d.brand !== f.brand) return false;
    if (f.sponsorProfile && d.sponsorProfile !== f.sponsorProfile) return false;
    if (f.transactionType && d.transactionType !== f.transactionType)
      return false;
    return true;
  });
}

/** Format a deal-size string for the card (drops trailing ',000' rounding). */
function formatPrice(raw: string): string {
  if (!raw) return "—";
  if (/confidential/i.test(raw)) return "Confidential";
  return raw; // Already pre-formatted as e.g. "$19,400,000"
}

export function ClosedGrid({ filters }: ClosedGridProps) {
  const filtered = React.useMemo(
    () => applyFilters(allClosed, filters),
    [filters],
  );

  if (filtered.length === 0) {
    return (
      <div className="mx-auto max-w-[1024px] px-6 py-20 text-center">
        <p className="text-[15px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
          No transactions match these filters. Clear a filter or two and try
          again.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1280px] px-6">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((deal) => {
          const photo = getDealPhoto(deal);
          const location = `${deal.city}, ${deal.state}`;
          return (
            <li
              key={deal.slug}
              className="group overflow-hidden rounded-[18px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_32px_-10px_rgba(0,0,0,0.14)]"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f7]">
                <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]">
                  <Image
                    src={photo}
                    alt={`${deal.name} — ${location}`}
                    fill
                    quality={86}
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card body — centered, US-Hotel-Advisors style */}
              <div className="px-5 pt-6 pb-7 text-center">
                <h3
                  className="font-semibold text-[#1d1d1f] tracking-[-0.014em] inline-block underline decoration-[#0071e3] decoration-[2px] underline-offset-[6px]"
                  style={{ fontSize: "18px", lineHeight: 1.2 }}
                >
                  {deal.name}
                </h3>
                <p className="mt-3 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                  {deal.transactionTypeLabel ?? deal.transactionType}
                </p>
                <p className="text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                  {location}
                </p>
                <p className="mt-3 text-[16px] font-semibold tabular-nums tracking-[-0.014em] text-[#1d1d1f]">
                  {formatPrice(deal.dealSize)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-12 text-center text-[12px] tracking-[-0.01em] text-[color:var(--text-tertiary)]">
        Showing {filtered.length} of {allClosed.length} transactions. Filter to
        narrow by year, segment, region, brand, sponsor profile, or
        transaction type.
      </p>
    </div>
  );
}

export default ClosedGrid;
