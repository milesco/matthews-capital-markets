import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { closed, totalKnownVolume } from "@/lib/data/closed";

function formatVolume(num: number): string {
  if (num >= 1_000_000_000) {
    const b = num / 1_000_000_000;
    return `$${b.toFixed(1)}B+`;
  }
  if (num >= 1_000_000) {
    const m = num / 1_000_000;
    return `$${m.toFixed(0)}M+`;
  }
  return `$${num.toLocaleString("en-US")}`;
}

export function ClosedHero() {
  const totalDeals = `${closed.length}`;
  const volume = formatVolume(totalKnownVolume(closed));
  const segmentsCovered = new Set(closed.map((d) => d.segment)).size;

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <Reveal>
          <Eyebrow>Recent Transactions</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <TwoToneHeadline
            size="section"
            lead="Selected closings."
            follow="Capital markets, debt placement, and investment sales."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[640px] text-[19px] leading-[1.42] tracking-[0.012em] text-[#86868b]">
            A representative slice of recent hospitality transactions across
            the team. Filter by year, segment, region, brand, sponsor, or
            transaction type — the same way buyers think.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-3 gap-6 md:gap-12 border-t border-[color:var(--divider)] pt-10">
          <Reveal>
            <div>
              <Counter
                value={totalDeals}
                className="block text-[#1d1d1f] font-semibold tabular-nums text-[clamp(36px,4.5vw,64px)] leading-none tracking-[-0.04em]"
              />
              <p className="mt-3 text-[13px] tracking-[-0.014em] text-[#86868b]">
                Featured transactions
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div>
              <Counter
                value={volume}
                className="block text-[#1d1d1f] font-semibold tabular-nums text-[clamp(36px,4.5vw,64px)] leading-none tracking-[-0.04em]"
              />
              <p className="mt-3 text-[13px] tracking-[-0.014em] text-[#86868b]">
                Disclosed volume
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <Counter
                value={`${segmentsCovered}`}
                className="block text-[#1d1d1f] font-semibold tabular-nums text-[clamp(36px,4.5vw,64px)] leading-none tracking-[-0.04em]"
              />
              <p className="mt-3 text-[13px] tracking-[-0.014em] text-[#86868b]">
                Chain-scale segments
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ClosedHero;
