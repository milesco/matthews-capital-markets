"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const RATES = [
  { label: "Prime Rate", value: "6.750%" },
  { label: "SOFR Overnight", value: "3.630%" },
  { label: "5 YR TR", value: "4.280%" },
  { label: "10 YR TR", value: "4.492%" },
];

export function MatthewsHero() {
  const [searchType, setSearchType] = React.useState<"Sale" | "Lease">("Sale");
  const [query, setQuery] = React.useState("");

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1a]">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        aria-hidden="true"
      >
        <source
          src="https://cms.matthews.com/wp-content/uploads/2025/06/banner_bg_video_desktop.webm"
          type="video/webm"
        />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,15,26,0.92) 0%, rgba(10,15,26,0.78) 50%, rgba(10,15,26,0.60) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative w-full px-6 sm:px-10 lg:px-[70px] py-32 pt-40 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-center">
        {/* Left: headline + search */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-white/60 mb-6">
            Relationship driven. Technology powered
          </p>

          <h1
            className="text-white uppercase leading-[0.9]"
            style={{
              fontFamily: "'Archivo Black', 'Arial Black', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 8.5vw, 5.5rem)",
              letterSpacing: "-0.04em",
              wordBreak: "normal",
              overflowWrap: "normal",
            }}
          >
            CRE<br />
            <span style={{ color: "#5d80b8" }}>REVO</span>LUTIONIZED
          </h1>

          {/* Property search */}
          <div className="mt-10 max-w-[560px]">
            <div className="flex items-center gap-2 mb-3">
              {(["Sale", "Lease"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSearchType(t)}
                  className="px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors"
                  style={{
                    background: searchType === t ? "#fff" : "rgba(255,255,255,0.1)",
                    color: searchType === t ? "#0a0f1a" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <div
              className="flex items-center gap-3 rounded-[10px] px-4 py-3"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Search className="h-4 w-4 text-white/50 shrink-0" strokeWidth={1.75} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by address, city, state, or ZIP"
                className="flex-1 bg-transparent text-white placeholder-white/40 text-[15px] outline-none"
              />
              <Link
                href={`/listings?type=${searchType.toLowerCase()}&q=${encodeURIComponent(query)}`}
                className="px-4 py-1.5 rounded-[8px] text-[13px] font-semibold transition-opacity hover:opacity-80"
                style={{ background: "#5d80b8", color: "#fff" }}
              >
                Search
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Today's Rates card */}
        <div
          className="hidden lg:block rounded-[16px] p-6"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50 mb-1">
            Today&rsquo;s Rates
          </p>
          <p className="text-[11px] text-white/35 mb-5">{today}</p>

          <div className="flex flex-col gap-4">
            {RATES.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-[13px] text-white/70">{label}</span>
                <span
                  className="text-[16px] font-bold text-white tabular-nums"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MatthewsHero;
