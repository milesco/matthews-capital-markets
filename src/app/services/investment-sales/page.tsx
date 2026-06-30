import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Investment Sales | Matthews",
  description: "Matthews | Real Estate Investment Services",
};

const ASSET_CLASSES = [
  {
    label: "Net Lease Retail",
    href: "/services/investment-sales/net-lease-retail",
    img: "https://cms.matthews.com/wp-content/uploads/2025/08/Starbucks-Pleasonton-1.jpg",
  },
  {
    label: "Shopping Centers",
    href: "/services/investment-sales/shopping-centers",
    img: "https://cms.matthews.com/wp-content/uploads/2025/08/DJI_20250614151839_0144_D.jpg",
  },
  {
    label: "Apartments",
    href: "/services/investment-sales/apartments",
    img: "https://cms.matthews.com/wp-content/uploads/2025/06/70355eb5c93fbd24d2e1ddb389c6d1965fe00cb5.jpg",
  },
  {
    label: "Industrial",
    href: "/services/investment-sales/industrial",
    img: "https://cms.matthews.com/wp-content/uploads/2025/08/ChatGPT-Image-Aug-28-2025-01_12_25-PM.png",
  },
  {
    label: "Healthcare",
    href: "/services/investment-sales/healthcare",
    img: "https://cms.matthews.com/wp-content/uploads/2025/08/5950-Summerhill-Rd-Texarkana-TX-9-scaled.png",
  },
  {
    label: "Self Storage",
    href: "/services/investment-sales/self-storage",
    img: "https://cms.matthews.com/wp-content/uploads/2025/08/AdobeStock_1281995043-1-scaled.jpeg",
  },
  {
    label: "Hospitality",
    href: "/services/investment-sales/hospitality",
    img: "https://cms.matthews.com/wp-content/uploads/2026/05/Hospitality.jpg",
  },
];

function AssetCard({ ac }: { ac: typeof ASSET_CLASSES[number] }) {
  return (
    <Link
      href={ac.href}
      className="group relative rounded-[16px] overflow-hidden flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors duration-300"
      style={{ height: "280px", background: "#0e1626", display: "flex" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ac.img}
        alt={ac.label}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
      />
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.82) 100%)" }}
      />
      <span
        className="relative text-white font-bold text-[22px] text-center leading-tight px-4"
        style={{ fontFamily: "'Archivo Black', 'Arial Black', sans-serif" }}
      >
        {ac.label}
      </span>
    </Link>
  );
}

export default function InvestmentSalesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-white pt-16">
          <div className="px-[70px] py-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] text-black/40 mb-10">
              <Link href="/services" className="hover:text-black/70 transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-black/60">Investment Sales</span>
            </div>

            {/* Two-column layout */}
            <div className="flex gap-16 items-start">
              {/* Left: headline + body */}
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
                  Investment<br />Sales
                </h1>

                <div className="space-y-5 max-w-[520px]">
                  <p className="text-[1rem] leading-[1.7] text-[#3a3a3a]">
                    Defined by passion and guided by leadership from competitive
                    backgrounds, our clients experience unrivaled execution and an
                    unprecedented level of synergy. Together, we attack every deal
                    with a strategy built for your objectives to deliver real-time
                    execution and give you the highest level of value.
                  </p>
                  <p className="text-[1rem] leading-[1.7] text-[#3a3a3a]">
                    Supplementing sales with in-house financial consulting,
                    transaction management and expert marketing, our centralized
                    client services promote specialization, collaboration, and a
                    heightened client experience from list to close.
                  </p>
                </div>
              </div>

              {/* Right: photo */}
              <div
                className="flex-shrink-0 rounded-[20px] overflow-hidden"
                style={{ width: "48%", height: "440px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cms.matthews.com/wp-content/uploads/2025/08/AdobeStock_1007275348-scaled.jpeg"
                  alt="Investment Sales"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Asset class cards */}
        <section className="bg-[#0e1626] px-[70px] py-20">
          {/* Row 1 — 4 cards */}
          <div className="grid grid-cols-4 gap-5 mb-5">
            {ASSET_CLASSES.slice(0, 4).map((ac) => (
              <AssetCard key={ac.label} ac={ac} />
            ))}
          </div>
          {/* Row 2 — 3 cards, each same width as top-row card, centered */}
          <div className="flex justify-center gap-5">
            {ASSET_CLASSES.slice(4).map((ac) => (
              <div key={ac.label} style={{ width: "calc((100% - 3 * 20px) / 4)" }}>
                <AssetCard ac={ac} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
