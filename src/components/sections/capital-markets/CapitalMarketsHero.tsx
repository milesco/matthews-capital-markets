"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const ASSET_CLASSES = [
  {
    label: "Multifamily",
    href: "/financing/multifamily",
    img: "https://cms.matthews.com/wp-content/uploads/2025/06/70355eb5c93fbd24d2e1ddb389c6d1965fe00cb5.jpg",
  },
  {
    label: "Industrial",
    href: "/financing/industrial",
    img: "https://cms.matthews.com/wp-content/uploads/2025/08/ChatGPT-Image-Aug-28-2025-01_12_25-PM.png",
  },
  {
    label: "Shopping Center",
    href: "/financing/shopping-center",
    img: "https://cms.matthews.com/wp-content/uploads/2025/08/DJI_20250614151839_0144_D.jpg",
  },
  {
    label: "Healthcare",
    href: "/financing/healthcare",
    img: "https://cms.matthews.com/wp-content/uploads/2025/08/5950-Summerhill-Rd-Texarkana-TX-9-scaled.png",
  },
  {
    label: "Net Lease Retail",
    href: "/financing/net-lease-retail",
    img: "https://cms.matthews.com/wp-content/uploads/2025/08/Starbucks-Pleasonton-1.jpg",
  },
  {
    label: "Hospitality",
    href: "/financing/hospitality",
    img: "https://cms.matthews.com/wp-content/uploads/2026/05/Hospitality.jpg",
  },
];

export function CapitalMarketsHero() {
  return (
    <>
      {/* Hero — white, two-column */}
      <section className="bg-white pt-16">
        <div className="px-[70px] py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-black/40 mb-10">
            <Link href="/services" className="hover:text-black/70 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-black/60">Debt &amp; Structured Finance</span>
          </div>

          {/* Two-column */}
          <div className="flex gap-16 items-start">
            {/* Left */}
            <div className="flex-1 min-w-0">
              <h1
                className="text-black uppercase leading-[0.9] mb-10"
                style={{
                  fontFamily: "'Archivo Black', 'Arial Black', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(3.2rem, 6vw, 5rem)",
                  letterSpacing: "-1px",
                }}
              >
                Capital<br />Markets
              </h1>

              <div className="space-y-5 max-w-[520px]">
                <p className="text-[1rem] leading-[1.7] text-[#3a3a3a]">
                  Matthews™ Capital Markets delivers end-to-end real estate
                  financing nationwide, offering tailored debt and equity solutions
                  for all asset classes and risk profiles.
                </p>
                <p className="text-[1rem] leading-[1.7] text-[#3a3a3a]">
                  Leveraging the industry&rsquo;s largest active lender database and
                  deep market expertise, we create lender competition to secure
                  optimal terms.
                </p>
              </div>
            </div>

            {/* Right: columns image */}
            <div
              className="flex-shrink-0 rounded-[20px] overflow-hidden"
              style={{ width: "48%", height: "440px" }}
            >
              <Image
                src="/images/columns-hero.jpg"
                alt="Capital Markets"
                width={900}
                height={440}
                quality={88}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Asset class cards */}
      <section className="bg-[#0e1626] px-[70px] py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {ASSET_CLASSES.map((ac) => (
            <Link
              key={ac.label}
              href={ac.href}
              className="group relative rounded-[16px] overflow-hidden flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors duration-300"
              style={{ height: "280px", background: "#0e1626" }}
            >
              {/* Photo — fades out on hover */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ac.img}
                alt={ac.label}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Gradient — also fades out on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.82) 100%)",
                }}
              />
              <span
                className="relative text-white font-bold text-[22px] text-center leading-tight px-4"
                style={{ fontFamily: "'Archivo Black', 'Arial Black', sans-serif" }}
              >
                {ac.label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default CapitalMarketsHero;
