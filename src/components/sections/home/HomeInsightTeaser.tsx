import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";

export function HomeInsightTeaser() {
  return (
    <section className="dark-section relative overflow-hidden bg-black py-24 lg:py-32">
      {/* Subtle radial gradient — apple-tokens.md §7.C */}
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
              {/* Sketchy CSS chart illustration */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-50"
                viewBox="0 0 400 500"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2997ff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#2997ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Horizontal grid lines */}
                {[0.3, 0.45, 0.6, 0.75, 0.9].map((p) => (
                  <line
                    key={p}
                    x1="40"
                    x2="380"
                    y1={500 * p}
                    y2={500 * p}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                  />
                ))}
                {/* Filled trend area */}
                <path
                  d="M40,420 L100,400 L160,360 L220,330 L280,260 L340,210 L380,180 L380,470 L40,470 Z"
                  fill="url(#chartFade)"
                />
                {/* Trend line */}
                <path
                  d="M40,420 L100,400 L160,360 L220,330 L280,260 L340,210 L380,180"
                  fill="none"
                  stroke="#2997ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Secondary dashed line */}
                <path
                  d="M40,440 L120,420 L200,400 L280,360 L360,320"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="4 6"
                />
                {/* Data dots on the trend line */}
                {[
                  [100, 400],
                  [220, 330],
                  [340, 210],
                ].map(([cx, cy]) => (
                  <circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="#2997ff"
                  />
                ))}
              </svg>

              <div className="relative flex h-full flex-col justify-between">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                  Report
                </p>

                <div>
                  <p
                    className="text-[clamp(48px,7vw,80px)] font-normal leading-[1.05] tracking-[-0.02em] text-white"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Q1 2026
                  </p>
                  <p className="mt-3 text-[15px] tracking-[-0.014em] text-white/80">
                    Hotel Investment Outlook
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
