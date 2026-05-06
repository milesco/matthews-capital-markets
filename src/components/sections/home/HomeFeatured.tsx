import * as React from "react";
import Link from "next/link";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { GhostLink } from "@/components/ui/GhostLink";
import { Reveal } from "@/components/ui/Reveal";

type Featured = {
  slug: string;
  name: string;
  city: string;
  keys: number;
  segment: string;
  asking: string;
  gradient: string;
};

const featured: Featured[] = [
  {
    slug: "walden-retreats-hill-country",
    name: "Walden Retreats Hill Country",
    city: "Johnson City, TX",
    keys: 15,
    segment: "Boutique",
    asking: "Upon Request",
    gradient: "from-[#1a3a6b] to-[#0a1226]",
  },
  {
    slug: "holiday-inn-express-austin-north-central",
    name: "Holiday Inn Express Austin North Central",
    city: "Austin, TX",
    keys: 124,
    segment: "Select Service · IHG",
    asking: "Upon Request",
    gradient: "from-[#0066cc] to-[#1a56db]",
  },
  {
    slug: "hampton-inn-suites-round-rock",
    name: "Hampton Inn & Suites Round Rock",
    city: "Round Rock, TX",
    keys: 98,
    segment: "Select Service · Hilton",
    asking: "Upon Request",
    gradient: "from-[#0e1a34] to-[#1a3a6b]",
  },
];

export function HomeFeatured() {
  return (
    <section className="bg-[color:var(--surface-elevated)] py-24 lg:py-32">
      <div className="mx-auto max-w-[1024px] px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <TwoToneHeadline
              size="section"
              lead="Listings."
              follow="Hotels available now."
            />
          </Reveal>
          <Reveal delay={0.05}>
            <GhostLink href="/listings">See all listings</GhostLink>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((listing, i) => (
            <Reveal key={listing.slug} delay={i * 0.05}>
              <Link
                href={`/listings/${listing.slug}`}
                className="group block overflow-hidden rounded-[18px] bg-white card-lift"
              >
                <div
                  className={`aspect-[16/10] w-full bg-gradient-to-br ${listing.gradient}`}
                  aria-hidden="true"
                />
                <div className="p-6">
                  <h3 className="text-[18px] font-semibold tracking-[-0.022em] text-[#1d1d1f]">
                    {listing.name}
                  </h3>
                  <p className="mt-1 text-[13px] tracking-[-0.014em] text-[#86868b]">
                    {listing.city}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-[color:var(--divider)] pt-4 text-[13px] tracking-[-0.014em] text-[#1d1d1f]">
                    <span>
                      {listing.keys} keys
                      <span className="text-[#86868b]"> · {listing.segment}</span>
                    </span>
                    <span className="text-[#86868b]">{listing.asking}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeFeatured;
