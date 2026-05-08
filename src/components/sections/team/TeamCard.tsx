import * as React from "react";
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
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

export interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const href = `/team/${member.slug}`;
  return (
    <article className="group overflow-hidden rounded-[18px] bg-white card-lift">
      <Link
        href={href}
        className="block focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a3a6b] rounded-[18px]"
        aria-label={`View bio for ${member.name}`}
      >
        <MonogramCover
          initials={initials(member.name)}
          tone={member.cover.tone}
          size="card"
          photoSrc={member.photo}
          photoAlt={`${member.name}, ${member.title}`}
        />
      </Link>

      <div className="p-5">
        <h3 className="text-[16px] font-semibold tracking-[-0.014em] text-[#1d1d1f]">
          <Link href={href} className="hover:text-[#1a3a6b] transition-colors duration-200">
            {member.name}
          </Link>
        </h3>
        <p className="mt-1 text-[13px] tracking-[-0.014em] text-[#86868b]">
          {member.title}
        </p>

        <div className="mt-3">
          <span className="inline-flex bg-[#f5f5f7] rounded-full px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-[#1d1d1f]">
            {member.office}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {member.specialties.map((s) => (
            <span
              key={s}
              className="text-[11px] text-[#1a3a6b] bg-[#1a3a6b]/10 rounded-full px-2.5 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <Pill variant="secondary" size="sm" href={href}>
            View bio
          </Pill>
        </div>
      </div>
    </article>
  );
}

export default TeamCard;
