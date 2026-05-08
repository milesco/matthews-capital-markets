import * as React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { MonogramCover } from "@/components/ui/MonogramCover";
import type { TeamMember } from "@/lib/data/team";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export interface TeamDetailHeroProps {
  member: TeamMember;
}

export function TeamDetailHero({ member }: TeamDetailHeroProps) {
  const paragraphs = member.bio.split(/\n{2,}/).filter(Boolean);

  return (
    <section className="bg-[#f5f5f7] pt-28 pb-20 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-14">
          {/* Editorial monogram cover */}
          <Reveal>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px]">
              <MonogramCover
                initials={initials(member.name)}
                tone={member.cover.tone}
                size="hero"
                photoSrc={member.photo}
                photoAlt={`${member.name} — ${member.title}`}
              />
            </div>
          </Reveal>

          {/* Right column */}
          <div>
            <Reveal>
              <Eyebrow>Matthews Hotel Team</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <TwoToneHeadline
                as="h1"
                size="section"
                lead={`${member.name}.`}
                follow={member.title}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex bg-white border border-[color:var(--divider)] rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#1d1d1f]">
                  {member.office}
                </span>
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-[12px] text-[#1a3a6b] bg-[#1a3a6b]/10 rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 max-w-[58ch] space-y-5">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[17px] leading-[1.47] tracking-[-0.022em] text-[#424245]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamDetailHero;
