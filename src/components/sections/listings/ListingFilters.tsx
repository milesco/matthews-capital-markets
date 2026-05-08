"use client";

import * as React from "react";
import { X } from "lucide-react";
import { FilterBar } from "@/components/ui/FilterBar";
import type { FilterDef } from "@/components/ui/FilterBar";
import { cn } from "@/lib/utils";
import type { Listing } from "@/lib/data/listings";

export type ListingFilterValues = {
  segment: string;
  region: string;
  brand: string;
  status: string;
  keys: string;
};

export const EMPTY_FILTERS: ListingFilterValues = {
  segment: "",
  region: "",
  brand: "",
  status: "",
  keys: "",
};

const KEYS_BUCKETS: Record<string, (n: number) => boolean> = {
  "lt-100": (n) => n < 100,
  "100-150": (n) => n >= 100 && n < 150,
  "150-250": (n) => n >= 150 && n < 250,
  "250-plus": (n) => n >= 250,
};

const KEYS_LABELS: Record<string, string> = {
  "lt-100": "<100 keys",
  "100-150": "100–150",
  "150-250": "150–250",
  "250-plus": "250+",
};

const SEGMENT_OPTIONS: FilterDef = {
  key: "segment",
  label: "Segment",
  options: [
    { value: "Select Service", label: "Select Service" },
    { value: "Full Service", label: "Full Service" },
    { value: "Resort", label: "Resort" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Boutique", label: "Boutique" },
    { value: "Extended Stay", label: "Extended Stay" },
  ],
};

const REGION_OPTIONS: FilterDef = {
  key: "region",
  label: "Region",
  options: [
    { value: "Texas", label: "Texas" },
    { value: "Southeast", label: "Southeast" },
    { value: "Midwest", label: "Midwest" },
    { value: "West", label: "West" },
    { value: "Northeast", label: "Northeast" },
  ],
};

const STATUS_OPTIONS: FilterDef = {
  key: "status",
  label: "Status",
  options: [
    { value: "available", label: "Available" },
    { value: "under-contract", label: "Under Contract" },
  ],
};

const KEYS_OPTIONS: FilterDef = {
  key: "keys",
  label: "Keys",
  options: [
    { value: "lt-100", label: KEYS_LABELS["lt-100"] },
    { value: "100-150", label: KEYS_LABELS["100-150"] },
    { value: "150-250", label: KEYS_LABELS["150-250"] },
    { value: "250-plus", label: KEYS_LABELS["250-plus"] },
  ],
};

export function applyListingFilters(
  listings: Listing[],
  values: ListingFilterValues,
): Listing[] {
  return listings.filter((l) => {
    if (values.segment && l.segment !== values.segment) return false;
    if (values.region && l.region !== values.region) return false;
    if (values.brand && l.brand !== values.brand) return false;
    if (values.status && l.status !== values.status) return false;
    if (values.keys) {
      const test = KEYS_BUCKETS[values.keys];
      if (test && !test(l.keys)) return false;
    }
    return true;
  });
}

export interface ListingFiltersProps {
  brands: string[];
  values: ListingFilterValues;
  onChange: (next: ListingFilterValues) => void;
  resultCount: number;
}

export function ListingFilters({
  brands,
  values,
  onChange,
  resultCount,
}: ListingFiltersProps) {
  const brandFilter: FilterDef = {
    key: "brand",
    label: "Brand",
    options: brands.map((b) => ({ value: b, label: b })),
  };

  const filters: FilterDef[] = [
    SEGMENT_OPTIONS,
    REGION_OPTIONS,
    brandFilter,
    STATUS_OPTIONS,
    KEYS_OPTIONS,
  ];

  const flatValues = values as unknown as Record<string, string>;
  const activeChips = (Object.keys(values) as Array<keyof ListingFilterValues>)
    .filter((k) => values[k])
    .map((k) => ({
      key: k,
      label: chipLabel(k, values[k]),
    }));

  const hasActive = activeChips.length > 0;

  const handleChange = (key: string, value: string) => {
    onChange({ ...values, [key]: value });
  };

  const clearOne = (key: keyof ListingFilterValues) => {
    onChange({ ...values, [key]: "" });
  };

  const clearAll = () => onChange(EMPTY_FILTERS);

  return (
    <div>
      <div className="flex items-end gap-4 flex-wrap">
        <FilterBar
          filters={filters}
          values={flatValues}
          onChange={handleChange}
          className="flex-1 min-w-0"
        />
        <p
          className="text-[13px] tracking-[-0.014em] text-[color:var(--text-secondary)] tabular-nums shrink-0 self-center"
          aria-live="polite"
        >
          {resultCount} {resultCount === 1 ? "listing" : "listings"}
        </p>
      </div>

      {hasActive && (
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          {activeChips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={() => clearOne(chip.key)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full bg-[#1a3a6b]/10 text-[#1a3a6b] px-3 py-1 text-[12px] tracking-[-0.01em] hover:bg-[#1a3a6b]/15 transition-colors duration-200",
              )}
            >
              <span>{chip.label}</span>
              <X className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">Remove filter</span>
            </button>
          ))}
          <button
            type="button"
            onClick={clearAll}
            className="text-[12px] tracking-[-0.01em] text-[color:var(--text-secondary)] hover:text-[#1d1d1f] underline underline-offset-[3px]"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}

function chipLabel(
  key: keyof ListingFilterValues,
  value: string,
): string {
  if (key === "keys") return KEYS_LABELS[value] ?? value;
  if (key === "status") {
    return value === "under-contract" ? "Under Contract" : "Available";
  }
  return value;
}

export default ListingFilters;
