import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";
import type { TeamMember } from "@/lib/data/team";

export interface TeamCredentialsProps {
  member: TeamMember;
}

interface Block {
  label: string;
  items: string[];
}

function buildBlocks(member: TeamMember): Block[] {
  const blocks: Block[] = [];
  if (member.education.length > 0) {
    blocks.push({ label: "Education", items: member.education });
  }
  if (member.designations.length > 0) {
    blocks.push({ label: "Designations", items: member.designations });
  }
  if (member.languages && member.languages.length > 0) {
    blocks.push({ label: "Languages", items: member.languages });
  }
  return blocks;
}

export function TeamCredentials({ member }: TeamCredentialsProps) {
  const blocks = buildBlocks(member);
  if (blocks.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="font-semibold text-[24px] leading-[1.1667] tracking-[0.009em] text-[#1d1d1f]">
        Credentials.
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blocks.map((b, i) => (
          <Reveal key={b.label} delay={i * 0.05}>
            <div className="rounded-[18px] bg-[#f5f5f7] p-6">
              <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                {b.label}
              </p>
              <ul className="mt-3 space-y-1.5">
                {b.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-[1.47] tracking-[-0.014em] text-[#1d1d1f]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default TeamCredentials;
