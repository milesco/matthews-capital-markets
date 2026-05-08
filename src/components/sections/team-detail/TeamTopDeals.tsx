import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import type { TeamMember, NamedDeal } from "@/lib/data/team";

export interface TeamTopDealsProps {
  member: TeamMember;
}

function DealCard({ deal }: { deal: NamedDeal }) {
  return (
    <article className="rounded-[18px] bg-[#f5f5f7] p-6">
      <div className="flex items-center gap-2">
        <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-[#1d1d1f]">
          {deal.year}
        </span>
        <span className="inline-flex rounded-full bg-[#1a3a6b]/10 px-2.5 py-1 text-[11px] text-[#1a3a6b]">
          {deal.segment}
        </span>
      </div>

      <h3 className="mt-4 text-[18px] font-semibold leading-[1.25] tracking-[-0.014em] text-[#1d1d1f]">
        {deal.name}
      </h3>
      <p className="mt-1 text-[13px] tracking-[-0.014em] text-[#86868b]">
        {deal.city}, {deal.state}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-[color:var(--divider)] pt-4 text-[13px] tracking-[-0.014em] text-[#1d1d1f]">
        <span>
          {deal.keys.toLocaleString("en-US")} keys
        </span>
        <span className="text-[#86868b]">{deal.role}</span>
      </div>
    </article>
  );
}

export function TeamTopDeals({ member }: TeamTopDealsProps) {
  const deals = member.topDeals;
  // Hide the whole section when there's no real named track record yet.
  // The closed deals on /closed already speak for the team's execution; an
  // empty "Top deals" section with one-size-fits-all placeholder copy
  // implies the broker hasn't closed anything, which misreads especially
  // for senior brokers whose advisory deals live on /closed.
  if (deals.length === 0) return null;

  return (
    <section>
      <Reveal>
        <Eyebrow>Named track record</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-semibold text-[clamp(28px,2.4vw,40px)] leading-[1.1] tracking-[0em] text-[#1d1d1f]">
          Top deals.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {deals.map((deal, i) => (
          <Reveal key={`${deal.name}-${deal.year}`} delay={i * 0.04}>
            <DealCard deal={deal} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default TeamTopDeals;
