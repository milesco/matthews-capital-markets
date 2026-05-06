import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { GhostLink } from "@/components/ui/GhostLink";
import { Reveal } from "@/components/ui/Reveal";
import { getListing } from "@/lib/data/listings";

type Featured = {
  slug: string;
  name: string;
  city: string;
  keys: number;
  segment: string;
  asking: string;
  gradient: string;
  photo?: string;
};

const featuredSeed: Omit<Featured, "photo">[] = [
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

const featured: Featured[] = featuredSeed.map((f) => ({
  ...f,
  photo: getListing(f.slug)?.photo,
}));

export function HomeFeatured() {
  return (
    <section className="bg-[color:var(--surface-elevated)] py-24 lg:py-32">
      <div className="mx-auto max-w-[1024px] px-6">
        {/* Editorial header: headline → hairline → caption + ghostlink */}
        <Reveal>
          <TwoToneHeadline
            size="section"
            lead="Listings."
            follow="Hotels available now."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 border-t border-[color:var(--divider)] pt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--text-tertiary)]">
              Updated weekly · Last refresh Q1 2026
            </p>
            <GhostLink href="/listings">See all listings</GhostLink>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((listing, i) => (
            <Reveal key={listing.slug} delay={i * 0.05}>
              <Link
                href={`/listings/${listing.slug}`}
                className="group block overflow-hidden rounded-[18px] bg-white card-lift"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  {listing.photo ? (
                    <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]">
                      <Image
                        src={listing.photo}
                        alt={listing.name}
                        fill
                        quality={88}
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${listing.gradient}`}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="p-7">
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
