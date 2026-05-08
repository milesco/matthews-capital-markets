import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";

export function HomeInsightTeaser() {
  return (
    <section className="dark-section relative overflow-hidden bg-black py-24 lg:py-32">
      {/* Subtle radial gradient, apple-tokens.md §7.C */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(900px 500px at 25% 40%, rgba(70,90,160,0.30), transparent 60%), radial-gradient(700px 500px at 80% 70%, rgba(150,80,160,0.20), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1024px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              <Eyebrow className="text-white/60">Quarterly Outlook</Eyebrow>
              <TwoToneHeadline
                size="section"
                tone="dark"
                lead="Q1 2026 Hotel Investment Outlook."
                follow="Cap rates, ADR recovery, the year ahead."
              />
              <p className="mt-6 max-w-[48ch] text-[17px] leading-[1.47] tracking-[0.012em] text-white/70">
                Our quarterly outlook synthesizes proprietary transaction data
                with Smith Travel and Trepp benchmarks to map where hotel cap
                rates compress, where ADR recovery is real, and where
                under-the-radar markets reward early conviction in 2026.
              </p>
              <div className="mt-8">
                <Pill variant="primary" href="/insights/q1-2026-outlook">
                  Read the report
                </Pill>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <article
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a1226] to-[#1a3a6b] p-8 text-white"
              aria-label="Q1 2026 Hotel Investment Outlook cover"
            >
              {/* Editorial chart-pattern background, three diagonal arcs */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 500"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Three thin arcing diagonals, apple.com/iphone-17-pro chart-y feel */}
                <path
                  d="M-20,470 Q120,360 220,300 T420,140"
                  fill="none"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
                <path
                  d="M-20,500 Q140,420 260,340 T420,200"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
                <path
                  d="M-20,440 Q100,300 200,250 T420,80"
                  fill="none"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />

                {/* Soft area wash beneath the strongest arc */}
                <path
                  d="M-20,470 Q120,360 220,300 T420,140 L420,500 L-20,500 Z"
                  fill="url(#chartFade)"
                />
              </svg>

              <div className="relative flex h-full flex-col justify-between">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                  Report
                </p>

                <div>
                  <p
                    className="font-normal leading-[0.92] tracking-[-0.04em] text-white text-[clamp(80px,14vw,200px)]"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontVariationSettings: "'opsz' 144",
                    }}
                  >
                    Q1 2026
                  </p>
                  <p className="mt-3 text-[15px] tracking-[-0.014em] text-white/80">
                    Hotel Investment Outlook
                  </p>
                  <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
                    March 2026 · Luke Thompson &amp; Sarah Chen
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default HomeInsightTeaser;
