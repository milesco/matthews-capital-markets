import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "./TeamCard";
import type { TeamMember } from "@/lib/data/team";

export interface TeamGridProps {
  filtered: TeamMember[];
}

export function TeamGrid({ filtered }: TeamGridProps) {
  return (
    <section className="bg-[#f5f5f7] py-16 lg:py-20">
      <div className="mx-auto max-w-[1024px] px-6">
        {filtered.length === 0 ? (
          <div className="rounded-[18px] bg-white p-10 text-center">
            <p className="text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f]">
              No team members match those filters.
            </p>
            <p className="mt-2 text-[15px] tracking-[-0.014em] text-[#86868b]">
              Try clearing a filter or viewing all eight specialists.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((member, i) => (
              <Reveal key={member.slug} delay={i * 0.05}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TeamGrid;
