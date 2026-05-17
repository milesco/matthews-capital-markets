import * as React from "react";
import type { Listing } from "@/lib/data/listings";

export interface ListingStatPanelProps {
  listing: Listing;
}

type Stat = { label: string; value: string };

export function ListingStatPanel({ listing }: ListingStatPanelProps) {
  const rawStats: (Stat | null)[] = [
    { label: "Keys", value: listing.keys > 0 ? listing.keys.toLocaleString() : null },
    { label: "Brand", value: listing.brand },
    { label: "Chain Scale", value: listing.segment },
    { label: "Year Built", value: listing.yearBuilt > 0 ? String(listing.yearBuilt) : null },
    { label: "Year Renovated", value: listing.yearRenovated ? String(listing.yearRenovated) : null },
    { label: "ADR", value: listing.adr ?? null },
    { label: "RevPAR", value: listing.revpar ?? null },
    { label: "Occupancy", value: listing.occupancy ?? null },
    { label: "Asking Price", value: listing.askingPrice },
    { label: "Encumbrance", value: listing.encumbrance },
    {
      label: "Mgmt / Franchise",
      value:
        listing.brand === "Independent"
          ? "Independent"
          : `${listing.brand} (franchise)`,
    },
    { label: "Call for Offers", value: listing.callForOffersDate ?? "Open ended" },
  ].map((s) => (s.value ? { label: s.label, value: s.value } : null));

  const stats: Stat[] = rawStats.filter((s): s is Stat => s !== null);

  return (
    <section
      className="bg-white border-b border-[color:var(--divider)] py-10"
      aria-label="Asset specifications"
    >
      <div className="mx-auto max-w-[1024px] px-6">
        <dl className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-[11px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                {s.label}
              </dt>
              <dd className="mt-1.5 font-semibold text-[18px] tracking-[-0.014em] text-[color:var(--text-primary)] tabular-nums [overflow-wrap:break-word]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default ListingStatPanel;
