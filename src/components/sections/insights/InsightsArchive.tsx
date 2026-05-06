import * as React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { Insight } from "@/lib/data/insights";

const kindLabel: Record<Insight["kind"], string> = {
  outlook: "Outlook",
  "white-paper": "White Paper",
  briefing: "Briefing",
};

export interface InsightsArchiveProps {
  items: Insight[];
}

export function InsightsArchive({ items }: InsightsArchiveProps) {
  return (
    <section className="bg-[color:var(--surface-elevated)] py-16">
      <div className="mx-auto max-w-[1024px] px-6">
        <h2 className="text-[clamp(24px,2vw,32px)] font-semibold tracking-[-0.012em] text-[#1d1d1f]">
          Archive
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((insight, i) => (
            <Reveal key={insight.slug} delay={i * 0.05}>
              <Link
                href={`/insights/${insight.slug}`}
                className="group block overflow-hidden rounded-[22px] bg-white card-lift h-full"
              >
                <div
                  className={`aspect-[16/10] w-full bg-gradient-to-br ${insight.cover}`}
                  aria-hidden="true"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]">
                    <span className="rounded-full bg-[#0071e3]/10 text-[#0071e3] px-2 py-0.5 font-medium">
                      {kindLabel[insight.kind]}
                    </span>
                    <span className="text-[#86868b]">{insight.date}</span>
                  </div>
                  <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.012em] leading-[1.2] text-[#1d1d1f]">
                    {insight.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.43] tracking-[-0.014em] text-[#86868b] line-clamp-3">
                    {insight.subtitle}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsightsArchive;
