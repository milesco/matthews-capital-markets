import * as React from "react";
import Link from "next/link";
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

/**
 * Editorial profile card. Modeled after New Waterloo's team page treatment:
 * portrait photo (square, grayscale), tracked-uppercase name + chevron, title
 * underneath, then 2-3 fact rows in `LABEL | value` format.
 *
 * Stays on white surface to match the rest of the site. Photo gets a CSS
 * grayscale filter that drops on hover so the broker still feels approachable
 * without going full magazine. Whole card is clickable to the broker detail
 * page where the full bio lives.
 */
export function TeamCard({ member }: TeamCardProps) {
  const href = `/team/${member.slug}`;
  const hasBio = member.hasBio !== false;

  const photoEl = (
    <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f7]">
      <MonogramCover
        initials={initials(member.name)}
        tone={member.cover.tone}
        size="hero"
        photoSrc={member.photo}
        photoAlt={`${member.name}, ${member.title}`}
      />
    </div>
  );

  return (
    <article className="group">
      {hasBio ? (
        <Link
          href={href}
          aria-label={`View bio for ${member.name}`}
          className="block focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a3a6b]"
        >
          {photoEl}
        </Link>
      ) : (
        photoEl
      )}

      <div className="mt-5">
        <h3 className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#1d1d1f]">
          {hasBio ? (
            <Link
              href={href}
              className="inline-flex items-baseline gap-1 hover:text-[#1a3a6b] transition-colors duration-200"
            >
              {member.name}
              <span aria-hidden="true" className="text-[#86868b]">
                ›
              </span>
            </Link>
          ) : (
            <span>{member.name}</span>
          )}
        </h3>

        <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-[#6e6e73]">
          {member.title}
          <span aria-hidden="true" className="mx-1.5 text-[#a1a1a6]">
            ·
          </span>
          {member.office}
        </p>

        {member.factRows && member.factRows.length > 0 ? (
          <dl className="mt-6 space-y-4">
            {member.factRows.map((row) => (
              <div key={row.label}>
                <dt className="inline text-[11px] uppercase tracking-[0.22em] font-medium text-[#1d1d1f]">
                  {row.label}
                </dt>
                <span aria-hidden="true" className="mx-2 text-[#a1a1a6]">
                  |
                </span>
                <dd className="inline text-[14px] leading-[1.5] tracking-[-0.014em] text-[#424245]">
                  {row.value}
                  {hasBio ? (
                    <>
                      {" "}
                      <Link
                        href={href}
                        className="text-[#1a3a6b] underline underline-offset-[3px] decoration-[#1a3a6b]/40 hover:decoration-[#1a3a6b] transition-colors duration-200"
                      >
                        more
                      </Link>
                    </>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </article>
  );
}

export default TeamCard;
