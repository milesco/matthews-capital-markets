import * as React from "react";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import type { TeamMember } from "@/lib/data/team";

export interface TeamStatsProps {
  member: TeamMember;
}

interface Stat {
  label: string;
  value: string;
  /** When true, render with Counter (animated). Strings without numbers fall back to plain. */
  animated?: boolean;
}

// A stat is "unset" when its underlying value is a placeholder. Hide rather
// than render "0 / Confirm" — Miles's stats are still pending confirmation
// while Luke and Nate are filled in.
function isPlaceholder(value: string): boolean {
  return value === "" || value === "0" || value === "$0" || /confirm|tbd|pending/i.test(value);
}

function buildStats(member: TeamMember): Stat[] {
  const all: Stat[] = [
    {
      label: "Years experience",
      value: `${member.yearsExperience}`,
      animated: true,
    },
    {
      label: "Career volume",
      value: member.careerVolume,
      animated: member.careerVolume !== "$0",
    },
    {
      label: "Last 12 months",
      value: member.last12Volume,
      animated: member.last12Volume !== "$0",
    },
    {
      label: "Named deals",
      value: `${member.topDeals.length}`,
      animated: true,
    },
  ];
  return all.filter((s) => !isPlaceholder(s.value));
}

export function TeamStats({ member }: TeamStatsProps) {
  const stats = buildStats(member);

  if (stats.length === 0) return null;

  return (
    <section className="bg-white py-16 border-b border-[color:var(--divider)]">
      <div className="mx-auto max-w-[1024px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  {s.label}
                </p>
                <p className="mt-3 text-[clamp(32px,4vw,56px)] font-semibold leading-[1.0625] tracking-[-0.012em] text-[#1d1d1f]">
                  {s.animated ? <Counter value={s.value} /> : s.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamStats;
