"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { Segment } from "@/lib/data/listings";

export interface SegmentChipsProps {
  segments: Segment[];
  active: Segment | "";
  onChange: (next: Segment | "") => void;
  resultCount: number;
}

export function SegmentChips({
  segments,
  active,
  onChange,
  resultCount,
}: SegmentChipsProps) {
  const chips: Array<{ value: Segment | ""; label: string }> = [
    { value: "", label: "All" },
    ...segments.map((s) => ({ value: s, label: s })),
  ];

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <ul className="flex items-center gap-2 flex-wrap" role="tablist">
        {chips.map((chip) => {
          const selected = chip.value === active;
          return (
            <li key={chip.value || "all"}>
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => onChange(chip.value)}
                className={cn(
                  "inline-flex h-8 items-center rounded-full px-3.5 text-[13px] tracking-[-0.014em] transition-colors duration-200",
                  selected
                    ? "bg-[color:var(--text-primary)] text-white"
                    : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]",
                )}
              >
                {chip.label}
              </button>
            </li>
          );
        })}
      </ul>

      <span
        className="ml-auto text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-tertiary)] tabular-nums"
        aria-live="polite"
      >
        {resultCount} {resultCount === 1 ? "listing" : "listings"}
      </span>
    </div>
  );
}

export default SegmentChips;
