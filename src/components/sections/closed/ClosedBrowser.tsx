"use client";

import * as React from "react";
import {
  EMPTY_FILTERS,
  type ClosedFilterValues,
} from "@/components/sections/closed/ClosedFilters";
import { ClosedGrid } from "@/components/sections/closed/ClosedGrid";
import { SegmentChips } from "@/components/sections/listings/SegmentChips";
import { closed } from "@/lib/data/closed";

const SEGMENT_ORDER = [
  "Select Service",
  "Full Service",
  "Resort",
  "Lifestyle",
  "Boutique",
  "Extended Stay",
] as const;

export function ClosedBrowser() {
  const [activeSegment, setActiveSegment] = React.useState<string>("");

  const availableSegments = React.useMemo(() => {
    const present = new Set(closed.map((d) => d.segment));
    return SEGMENT_ORDER.filter((s) => present.has(s));
  }, []);

  const filterValues: ClosedFilterValues = React.useMemo(
    () => ({ ...EMPTY_FILTERS, segment: activeSegment }),
    [activeSegment],
  );

  const visibleCount = React.useMemo(
    () =>
      activeSegment
        ? closed.filter((d) => d.segment === activeSegment).length
        : closed.length,
    [activeSegment],
  );

  return (
    <>
      {availableSegments.length > 1 && (
        <section className="bg-white">
          <div className="mx-auto max-w-[1024px] px-6 pb-2">
            <SegmentChips
              segments={availableSegments as unknown as string[]}
              active={activeSegment}
              onChange={setActiveSegment}
              resultCount={visibleCount}
              unitLabel="closing"
            />
          </div>
        </section>
      )}
      <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-24">
        <ClosedGrid filters={filterValues} />
      </section>
    </>
  );
}

export default ClosedBrowser;
