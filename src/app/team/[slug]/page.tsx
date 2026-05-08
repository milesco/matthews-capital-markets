import * as React from "react";
import { notFound } from "next/navigation";
import { Phone, Mail, ExternalLink } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { Pill } from "@/components/ui/Pill";
import TeamDetailHero from "@/components/sections/team-detail/TeamDetailHero";
import TeamStats from "@/components/sections/team-detail/TeamStats";
import TeamTopDeals from "@/components/sections/team-detail/TeamTopDeals";
import TeamCredentials from "@/components/sections/team-detail/TeamCredentials";
import { team, type TeamMember } from "@/lib/data/team";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return { title: "Team, Matthews Hotel Team" };
  return {
    title: `${member.name}, Matthews Hotel Team`,
    description: `${member.title}, ${member.office}. ${member.specialties.join(
      ", ",
    )}.`,
  };
}

interface BrokerRailProps {
  broker: TeamMember;
}

const TONE_AVATAR: Record<
  TeamMember["cover"]["tone"],
  { bg: string; fg: string }
> = {
  ink: { bg: "#0a0a0a", fg: "#ffffff" },
  navy: { bg: "#0e1a34", fg: "#fafafa" },
  graphite: { bg: "#1d1d1f", fg: "#f5f5f7" },
  paper: { bg: "#fafafa", fg: "#0a0a0a" },
};

function BrokerContactRail({ broker }: BrokerRailProps) {
  const subject = encodeURIComponent(`Inquiry, ${broker.name}`);
  const mailtoHref = `mailto:${broker.email}?subject=${subject}`;
  const telHref = `tel:${broker.phone.replace(/[^0-9+]/g, "")}`;
  const avatar = TONE_AVATAR[broker.cover.tone];
  const brokerInitials = broker.name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <aside className="lg:sticky lg:top-24 rounded-[18px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)] p-6">
      <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
        Get in touch
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div
          className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full flex items-center justify-center"
          style={{ backgroundColor: avatar.bg }}
          aria-hidden="true"
        >
          <span
            className="font-[family-name:var(--font-fraunces)] text-[18px] leading-none"
            style={{
              color: avatar.fg,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            {brokerInitials}
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-[15px] font-semibold tracking-[-0.014em] text-[#1d1d1f] truncate">
            {broker.name}
          </p>
          <p className="text-[13px] tracking-[-0.014em] text-[#86868b] truncate">
            {broker.title}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        <a
          href={telHref}
          className="flex items-center gap-2 text-[15px] tracking-[-0.014em] text-[#1d1d1f] hover:text-[#1a3a6b] transition-colors duration-200"
        >
          <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span>{broker.phone}</span>
        </a>
        <a
          href={mailtoHref}
          className="flex items-center gap-2 text-[15px] tracking-[-0.014em] text-[#1d1d1f] hover:text-[#1a3a6b] transition-colors duration-200"
        >
          <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span className="truncate">{broker.email}</span>
        </a>
        {broker.linkedin && (
          <a
            href={broker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[15px] tracking-[-0.014em] text-[#1d1d1f] hover:text-[#1a3a6b] transition-colors duration-200"
          >
            <ExternalLink
              className="h-4 w-4 shrink-0"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>LinkedIn</span>
          </a>
        )}
      </div>

      <div className="mt-6">
        <Pill variant="primary" size="default" href={mailtoHref} className="w-full">
          Send a message
        </Pill>
      </div>
    </aside>
  );
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <TeamDetailHero member={member} />
        <TeamStats member={member} />
        <div className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1024px] px-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            <div>
              <TeamTopDeals member={member} />
              <TeamCredentials member={member} />
            </div>
            <BrokerContactRail broker={member} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
