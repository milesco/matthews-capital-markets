"use client";

import * as React from "react";
import { FilterBar, type FilterDef } from "@/components/ui/FilterBar";
import type { Office, Specialty } from "@/lib/data/team";

export interface TeamFilterValues {
  office: "" | Office;
  specialty: "" | Specialty;
}

export interface TeamFiltersProps {
  values: TeamFilterValues;
  onChange: (values: TeamFilterValues) => void;
  /** Total visible (filtered) count + total roster count for the result label. */
  visibleCount: number;
  totalCount: number;
}

const OFFICE_OPTIONS: { value: Office; label: string }[] = [
  { value: "Austin", label: "Austin" },
  { value: "Dallas", label: "Dallas" },
  { value: "Houston", label: "Houston" },
  { value: "San Antonio", label: "San Antonio" },
  { value: "Denver", label: "Denver" },
  { value: "Chicago", label: "Chicago" },
];

const SPECIALTY_OPTIONS: { value: Specialty; label: string }[] = [
  { value: "Select Service", label: "Select Service" },
  { value: "Full Service", label: "Full Service" },
  { value: "Resort", label: "Resort" },
  { value: "Lifestyle", label: "Lifestyle" },
  { value: "Boutique", label: "Boutique" },
  { value: "Capital Markets", label: "Capital Markets" },
  { value: "Distressed", label: "Distressed" },
  { value: "Portfolios", label: "Portfolios" },
];

const FILTER_DEFS: FilterDef[] = [
  { key: "office", label: "Office", options: OFFICE_OPTIONS },
  { key: "specialty", label: "Specialty", options: SPECIALTY_OPTIONS },
];

export function TeamFilters({
  values,
  onChange,
  visibleCount,
  totalCount,
}: TeamFiltersProps) {
  const handleChange = (key: string, value: string) => {
    onChange({
      ...values,
      [key]: value as Office | Specialty | "",
    });
  };

  const hasFilters = values.office !== "" || values.specialty !== "";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <FilterBar
        filters={FILTER_DEFS}
        values={values as unknown as Record<string, string>}
        onChange={handleChange}
      />
      <p className="text-[12px] uppercase tracking-[0.16em] text-[color:var(--text-secondary)]">
        {hasFilters
          ? `${visibleCount} of ${totalCount}`
          : `${totalCount} brokers`}
      </p>
    </div>
  );
}

export default TeamFilters;
