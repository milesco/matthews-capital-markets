"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterDef {
  key: string;
  label: string;
  options: FilterOption[];
}

export interface FilterBarProps {
  filters: FilterDef[];
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
  className?: string;
}

export function FilterBar({
  filters,
  values,
  onChange,
  className,
}: FilterBarProps) {
  return (
    <div
      className={cn(
        "flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      role="group"
      aria-label="Filters"
    >
      {filters.map((filter) => {
        const id = `filter-${filter.key}`;
        return (
          <div key={filter.key} className="shrink-0">
            <label htmlFor={id} className="sr-only">
              {filter.label}
            </label>
            <select
              id={id}
              value={values[filter.key] ?? ""}
              onChange={(e) => onChange(filter.key, e.target.value)}
              className="appearance-none rounded-full bg-[#f5f5f7] border border-[#d2d2d7] px-4 py-2 pr-8 text-[14px] text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/20 transition-colors duration-200"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='none' stroke='%231d1d1f' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' d='M1 1l4 4 4-4'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "10px 6px",
              }}
            >
              <option value="">{filter.label}</option>
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
}

export default FilterBar;
