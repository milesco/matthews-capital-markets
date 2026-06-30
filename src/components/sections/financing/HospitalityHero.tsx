"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const ACTION_CARDS = [
  {
    label: "Get Hotel Financing",
    href: "/contact",
    img: "https://cms.matthews.com/wp-content/uploads/2026/05/Hospitality.jpg",
    newTab: false,
  },
  {
    label: "Hotel Rate Sheet",
    href: "https://june-2026-rate-sheet.vercel.app/",
    img: "/images/hero-landscape.jpg",
    newTab: false,
  },
  {
    label: "Hospitality Capital Markets Team",
    href: "/team",
    img: "https://cms.matthews.com/wp-content/uploads/2026/05/Hospitality.jpg",
    newTab: false,
  },
  {
    label: "Closed Hotel Transactions",
    href: "/closed",
    img: "/images/hero-landscape.jpg",
    newTab: false,
  },
  {
    label: "Hospitality Market Insights",
    href: "https://matthews-hotel-team.vercel.app/insights",
    img: "https://cms.matthews.com/wp-content/uploads/2026/05/Hospitality.jpg",
    newTab: false,
  },
];

export function HospitalityHero() {
  return (
    <>
      {/* Hero — white, two-column */}
      <section className="bg-white pt-16">
        <div className="px-[70px] py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12px] text-black/40 mb-10">
            <Link href="/services/debt-structured-finance" className="hover:text-black/70 transition-colors">
              Capital Markets
            </Link>
            <span>/</span>
            <span className="text-black/60">Hospitality</span>
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
                Hospitality<br />Financing
              </h1>

              <div className="space-y-5 max-w-[520px]">
                <p className="text-[1rem] leading-[1.7] text-[#3a3a3a]">
                  Matthews™ Capital Markets is a leading advisor for hotel financing
                  nationwide — from select-service to luxury full-service assets.
                  We source debt and equity across every chain scale and risk profile.
                </p>
                <p className="text-[1rem] leading-[1.7] text-[#3a3a3a]">
                  Loans from $5M with experience up to $200M. Our active lender
                  relationships drive competition and deliver optimal terms for every
                  deal.
                </p>
              </div>
            </div>

            {/* Right: hero image */}
            <div
              className="flex-shrink-0 rounded-[20px] overflow-hidden"
              style={{ width: "48%", height: "440px" }}
            >
              <Image
                src="/images/hero-landscape.jpg"
                alt="Hotel exterior"
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

      {/* Action cards */}
      <section className="bg-[#0e1626] px-[70px] py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {ACTION_CARDS.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              target={card.newTab ? "_blank" : undefined}
              rel={card.newTab ? "noopener noreferrer" : undefined}
              className="group relative rounded-[16px] overflow-hidden flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors duration-300"
              style={{ height: "280px", background: "#0e1626" }}
            >
              {/* Photo — fades out on hover */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.img}
                alt={card.label}
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
                {card.label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default HospitalityHero;
