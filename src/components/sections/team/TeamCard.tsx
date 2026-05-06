import * as React from "react";
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
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
        className="block focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0071e3] rounded-[18px]"
        aria-label={`View bio for ${member.name}`}
      >
        <div
          className={`relative aspect-[3/4] w-full bg-gradient-to-br ${member.photoTone} flex items-center justify-center`}
          aria-hidden="true"
        >
          <span className="font-semibold text-white tracking-[-0.012em] text-[clamp(32px,4vw,64px)] leading-none">
            {initials(member.name)}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <h3 className="text-[16px] font-semibold tracking-[-0.014em] text-[#1d1d1f]">
          <Link href={href} className="hover:text-[#0071e3] transition-colors duration-200">
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
              className="text-[11px] text-[#0071e3] bg-[#0071e3]/10 rounded-full px-2.5 py-0.5"
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
