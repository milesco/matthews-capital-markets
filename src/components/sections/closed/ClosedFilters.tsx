"use client";

import * as React from "react";
import { X } from "lucide-react";
import { FilterBar, type FilterDef } from "@/components/ui/FilterBar";
import { cn } from "@/lib/utils";

export type ClosedFilterValues = {
  year: string;
  segment: string;
  region: string;
  brand: string;
  sponsorProfile: string;
  transactionType: string;
};

export const EMPTY_FILTERS: ClosedFilterValues = {
  year: "",
  segment: "",
  region: "",
  brand: "",
  sponsorProfile: "",
  transactionType: "",
};

export interface ClosedFiltersProps {
  values: ClosedFilterValues;
  onChange: (next: ClosedFilterValues) => void;
  brands: string[];
}

const labelMap: Record<keyof ClosedFilterValues, string> = {
  year: "Year",
  segment: "Segment",
  region: "Region",
  brand: "Brand",
  sponsorProfile: "Sponsor Profile",
  transactionType: "Transaction Type",
};

export function ClosedFilters({
  values,
  onChange,
  brands,
}: ClosedFiltersProps) {
  const filters: FilterDef[] = [
    {
      key: "year",
      label: "Year",
      options: [
        { value: "2025", label: "2025" },
        { value: "2024", label: "2024" },
        { value: "2023", label: "2023" },
        { value: "2022", label: "2022" },
      ],
    },
    {
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
    },
    {
      key: "region",
      label: "Region",
      options: [
        { value: "Texas", label: "Texas" },
        { value: "Southeast", label: "Southeast" },
        { value: "Midwest", label: "Midwest" },
        { value: "West", label: "West" },
        { value: "Northeast", label: "Northeast" },
      ],
    },
    {
      key: "brand",
      label: "Brand",
      options: brands.map((b) => ({ value: b, label: b })),
    },
    {
      key: "sponsorProfile",
      label: "Sponsor Profile",
      options: [
        { value: "PE", label: "PE" },
        { value: "REIT", label: "REIT" },
        { value: "Developer", label: "Developer" },
        { value: "Family Office", label: "Family Office" },
        { value: "Corporate", label: "Corporate" },
      ],
    },
    {
      key: "transactionType",
      label: "Transaction Type",
      options: [
        { value: "Investment Sale", label: "Investment Sale" },
        { value: "Debt Placement", label: "Debt Placement" },
        { value: "Equity Placement", label: "Equity Placement" },
        { value: "Recapitalization", label: "Recapitalization" },
      ],
    },
  ];

  const active = (Object.keys(values) as (keyof ClosedFilterValues)[]).filter(
    (k) => values[k] !== "",
  );

  const clearAll = () => onChange(EMPTY_FILTERS);

  return (
    <div>
      <FilterBar
        filters={filters}
        values={values}
        onChange={(key, v) =>
          onChange({ ...values, [key as keyof ClosedFilterValues]: v })
        }
      />

      {active.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {active.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() =>
                onChange({ ...values, [key]: "" })
              }
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full bg-[#0071e3]/10 text-[#0071e3]",
                "px-3 py-1.5 text-[12px] font-medium tracking-[-0.01em]",
                "hover:bg-[#0071e3]/15 transition-colors duration-200",
              )}
              aria-label={`Remove filter ${labelMap[key]}: ${values[key]}`}
            >
              <span className="text-[#86868b] font-normal">
                {labelMap[key]}:
              </span>
              <span>{values[key]}</span>
              <X className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
            </button>
          ))}
          <button
            type="button"
            onClick={clearAll}
            className="ml-1 text-[12px] tracking-[-0.01em] text-[#86868b] hover:text-[#1d1d1f] underline-offset-[3px] hover:underline transition-colors duration-200"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}

export default ClosedFilters;
