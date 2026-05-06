"use client";

import * as React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import {
  closed as allClosed,
  parseDealSize,
  type ClosedDeal,
  type SponsorProfile,
} from "@/lib/data/closed";
import { cn } from "@/lib/utils";
import type { ClosedFilterValues } from "./ClosedFilters";

type SortKey = "year" | "keys" | "dealSize";
type SortDir = "asc" | "desc";

export interface ClosedTableProps {
  filters: ClosedFilterValues;
}

const sponsorChip: Record<SponsorProfile, string> = {
  PE: "bg-[#0071e3]/10 text-[#0071e3]",
  REIT: "bg-[#30d158]/12 text-[#1c8b3c]",
  Developer: "bg-[#ff9f0a]/15 text-[#a25b00]",
  "Family Office": "bg-[#7d3cff]/12 text-[#5e2bcb]",
  Corporate: "bg-[#86868b]/15 text-[#55555a]",
};

function applyFilters(
  items: ClosedDeal[],
  f: ClosedFilterValues,
): ClosedDeal[] {
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

function applySort(
  items: ClosedDeal[],
  key: SortKey,
  dir: SortDir,
): ClosedDeal[] {
  const factor = dir === "asc" ? 1 : -1;
  const copy = [...items];
  copy.sort((a, b) => {
    if (key === "year") return (a.year - b.year) * factor;
    if (key === "keys") return (a.keys - b.keys) * factor;
    // dealSize: Confidential always sorts last regardless of direction
    const an = parseDealSize(a.dealSize);
    const bn = parseDealSize(b.dealSize);
    const aIsNaN = !Number.isFinite(an);
    const bIsNaN = !Number.isFinite(bn);
    if (aIsNaN && bIsNaN) return 0;
    if (aIsNaN) return 1;
    if (bIsNaN) return -1;
    return (an - bn) * factor;
  });
  return copy;
}

export function ClosedTable({ filters }: ClosedTableProps) {
  const [sortKey, setSortKey] = React.useState<SortKey>("year");
  const [sortDir, setSortDir] = React.useState<SortDir>("desc");

  const rows = React.useMemo(() => {
    const filtered = applyFilters(allClosed, filters);
    return applySort(filtered, sortKey, sortDir);
  }, [filters, sortKey, sortDir]);

  const onSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "year" ? "desc" : "desc");
    }
  };

  const SortIndicator = ({ k }: { k: SortKey }) => {
    if (sortKey !== k) return null;
    return sortDir === "asc" ? (
      <ArrowUp className="inline h-3 w-3 ml-1" strokeWidth={2} />
    ) : (
      <ArrowDown className="inline h-3 w-3 ml-1" strokeWidth={2} />
    );
  };

  return (
    <section className="bg-[#f5f5f7] py-16 lg:py-20">
      <div className="mx-auto max-w-[1024px] px-6">
        <div className="flex items-baseline justify-between">
          <p className="text-[13px] tracking-[-0.014em] text-[#86868b]">
            <span className="text-[#1d1d1f] font-medium">{rows.length}</span>{" "}
            of {allClosed.length} closed transactions
          </p>
        </div>

        {rows.length === 0 ? (
          <div className="mt-10 rounded-[22px] bg-white p-10 text-center">
            <p className="text-[17px] text-[#1d1d1f]">
              No deals match the current filters.
            </p>
            <p className="mt-2 text-[14px] text-[#86868b]">
              Try clearing filters above to see the full track record.
            </p>
          </div>
        ) : (
          <>
            {/* Desktop: real table */}
            <div className="hidden md:block mt-8 overflow-hidden rounded-[22px] bg-white">
              <table className="w-full text-left">
                <colgroup>
                  <col style={{ width: "8%" }} />
                  <col style={{ width: "26%" }} />
                  <col style={{ width: "16%" }} />
                  <col style={{ width: "13%" }} />
                  <col style={{ width: "8%" }} />
                  <col style={{ width: "13%" }} />
                  <col style={{ width: "12%" }} />
                  <col style={{ width: "13%" }} />
                </colgroup>
                <thead>
                  <tr className="border-b border-[#d2d2d7]">
                    <th
                      scope="col"
                      className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#86868b] font-medium"
                    >
                      <button
                        type="button"
                        onClick={() => onSort("year")}
                        className="inline-flex items-center hover:text-[#1d1d1f] transition-colors duration-200 uppercase tracking-[0.18em]"
                      >
                        Year
                        <SortIndicator k="year" />
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#86868b] font-medium"
                    >
                      Asset
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#86868b] font-medium"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#86868b] font-medium"
                    >
                      Segment
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#86868b] font-medium text-right"
                    >
                      <button
                        type="button"
                        onClick={() => onSort("keys")}
                        className="inline-flex items-center hover:text-[#1d1d1f] transition-colors duration-200 uppercase tracking-[0.18em]"
                      >
                        Keys
                        <SortIndicator k="keys" />
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#86868b] font-medium text-right"
                    >
                      <button
                        type="button"
                        onClick={() => onSort("dealSize")}
                        className="inline-flex items-center hover:text-[#1d1d1f] transition-colors duration-200 uppercase tracking-[0.18em]"
                      >
                        Deal Size
                        <SortIndicator k="dealSize" />
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#86868b] font-medium"
                    >
                      Sponsor
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#86868b] font-medium"
                    >
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((d) => (
                    <tr
                      key={d.slug}
                      className="border-b border-[#d2d2d7] last:border-b-0 hover:bg-[#fbfbfd] transition-colors duration-200"
                    >
                      <td className="px-5 py-4 text-[15px] tracking-[-0.014em] text-[#1d1d1f] tabular-nums">
                        {d.year}
                      </td>
                      <td className="px-5 py-4 text-[15px] tracking-[-0.014em] text-[#1d1d1f]">
                        <div className="font-medium">{d.name}</div>
                        {d.brand && (
                          <div className="text-[12px] text-[#86868b] mt-0.5">
                            {d.brand}
                          </div>
                        )}
                      </td>
                      <td className="px-5 py-4 text-[15px] tracking-[-0.014em] text-[#1d1d1f]">
                        {d.city}, {d.state}
                      </td>
                      <td className="px-5 py-4 text-[15px] tracking-[-0.014em] text-[#1d1d1f]">
                        {d.segment}
                      </td>
                      <td className="px-5 py-4 text-[15px] tracking-[-0.014em] text-[#1d1d1f] text-right tabular-nums">
                        {d.keys}
                      </td>
                      <td className="px-5 py-4 text-[15px] tracking-[-0.014em] text-[#1d1d1f] text-right tabular-nums">
                        {d.dealSize === "Confidential" ? (
                          <span className="text-[#86868b]">Confidential</span>
                        ) : (
                          d.dealSize
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium tracking-[-0.005em]",
                            sponsorChip[d.sponsorProfile],
                          )}
                        >
                          {d.sponsorProfile}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-[13px] tracking-[-0.014em] text-[#1d1d1f]">
                        {d.transactionType}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: stacked cards */}
            <div className="md:hidden mt-8 grid grid-cols-1 gap-3">
              {rows.map((d) => (
                <div
                  key={d.slug}
                  className="rounded-[18px] bg-white p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[12px] uppercase tracking-[0.18em] text-[#86868b]">
                        {d.year}
                      </p>
                      <h3 className="mt-1 text-[17px] font-semibold tracking-[-0.014em] text-[#1d1d1f]">
                        {d.name}
                      </h3>
                      <p className="mt-0.5 text-[13px] text-[#86868b]">
                        {d.city}, {d.state}
                        {d.brand ? ` · ${d.brand}` : ""}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[-0.005em]",
                        sponsorChip[d.sponsorProfile],
                      )}
                    >
                      {d.sponsorProfile}
                    </span>
                  </div>

                  <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-[color:var(--divider)] pt-3">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.18em] text-[#86868b]">
                        Keys
                      </dt>
                      <dd className="mt-1 text-[14px] text-[#1d1d1f] tabular-nums">
                        {d.keys}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.18em] text-[#86868b]">
                        Segment
                      </dt>
                      <dd className="mt-1 text-[14px] text-[#1d1d1f]">
                        {d.segment}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.18em] text-[#86868b]">
                        Size
                      </dt>
                      <dd className="mt-1 text-[14px] text-[#1d1d1f] tabular-nums">
                        {d.dealSize === "Confidential"
                          ? "—"
                          : d.dealSize}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-3 text-[12px] tracking-[-0.014em] text-[#86868b]">
                    {d.transactionType}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ClosedTable;
