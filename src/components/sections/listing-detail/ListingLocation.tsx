import * as React from "react";
import { MapPin } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Listing } from "@/lib/data/listings";

export interface ListingLocationProps {
  listing: Listing;
}

/**
 * Per-listing demand drivers shown in the right column of the location card.
 * Keep them tight, three lines max, copy-only — no hard distance claims that
 * would need fact-checking before launch.
 */
const DEMAND_DRIVERS: Record<string, string[]> = {
  "walden-retreats-hill-country": [
    "Twenty-five minutes to Fredericksburg wineries",
    "Ninety minutes to downtown Austin",
    "Direct creek frontage, 96 contiguous acres",
  ],
  "holiday-inn-express-austin-north-central": [
    "Three miles to The Domain",
    "Adjacent to Hwy 183, 168K daily vehicle counts",
    "ABIA airport 12 miles southeast",
  ],
  "hampton-inn-suites-round-rock": [
    "Two miles to Dell Round Rock campus",
    "Eight miles to Samsung Taylor fab",
    "Direct I-35 frontage, 232K daily vehicle counts",
  ],
  "courtyard-san-antonio-riverwalk": [
    "Two blocks from the Convention Center",
    "Riverwalk core — direct pedestrian access",
    "Henry B. Gonzalez expansion 2027",
  ],
  "the-driskill-trophy-lease-option": [
    "Sixth Street historic district anchor",
    "Three blocks from Texas Capitol grounds",
    "ABIA airport 12 minutes east",
  ],
  "fairfield-inn-suites-waco": [
    "Four miles to Magnolia Market",
    "Five miles to Baylor stadium and main campus",
    "Direct I-35 / Loop 340 interchange access",
  ],
};

export function ListingLocation({ listing }: ListingLocationProps) {
  const drivers = DEMAND_DRIVERS[listing.slug] ?? [];

  return (
    <section className="mt-16 lg:mt-20" aria-label="Location and demand drivers">
      <Eyebrow>Location</Eyebrow>
      <h2 className="font-semibold text-[clamp(28px,2.4vw,40px)] leading-[1.1] tracking-[0em] text-[color:var(--text-primary)]">
        Where the asset sits.
      </h2>

      <div className="mt-8 rounded-[22px] bg-[#f5f5f7] p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Address + drivers */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
            Address
          </p>
          <address className="not-italic mt-1.5 text-[17px] leading-[1.47] tracking-[-0.022em] text-[color:var(--text-primary)]">
            {listing.address}
            <br />
            {listing.city}, {listing.state}
          </address>

          {drivers.length > 0 && (
            <>
              <p className="mt-6 text-[11px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
                Demand drivers
              </p>
              <ul className="mt-2 space-y-2">
                {drivers.map((d) => (
                  <li
                    key={d}
                    className="flex gap-2.5 text-[15px] leading-[1.5] tracking-[-0.014em] text-[#424245]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0071e3]"
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Map placeholder — CSS-only grid pattern with a single pin marker */}
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-white"
          role="img"
          aria-label={`Map placeholder for ${listing.city}, ${listing.state}`}
        >
          {/* Grid pattern */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #e5e5e8 1px, transparent 1px), linear-gradient(to bottom, #e5e5e8 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Diagonal road */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rotate-[-12deg] bg-[#d2d2d7]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 rotate-[6deg] bg-[#d2d2d7]"
          />

          {/* Pin */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0071e3]/20 left-1/2 top-1/2 animate-ping"
                style={{ animationDuration: "2.4s" }}
              />
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0071e3] text-white shadow-[0_4px_12px_rgba(0,113,227,0.4)]">
                <MapPin
                  className="h-5 w-5"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Map caption */}
          <p className="absolute bottom-3 left-3 text-[11px] tracking-[-0.005em] text-[color:var(--text-tertiary)]">
            {listing.city}, {listing.state}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ListingLocation;
