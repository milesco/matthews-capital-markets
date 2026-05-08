"use client";

import * as React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Pill } from "./Pill";
import { cn } from "@/lib/utils";

/** Editorial monogram tone, mirrors `MonogramCover` and `team.ts`. */
export type BrokerRailTone = "ink" | "navy" | "graphite" | "paper";

export interface BrokerRailContact {
  name: string;
  title: string;
  phone: string;
  email: string;
  /** Optional real photo URL. If absent, the monogram fallback is used. */
  photo?: string;
  /**
   * Editorial monogram tone for the avatar fallback when `photo` is absent.
   * Falls back to "navy" if neither this nor `photoTone` is provided.
   */
  tone?: BrokerRailTone;
  /**
   * @deprecated Legacy gradient class fragment retained for backward
   * compatibility. Prefer `tone`.
   */
  photoTone?: string;
}

export interface StickyBrokerRailProps {
  broker: BrokerRailContact;
  listingName: string;
  /** When set, the primary "Request OM" pill becomes "View OM" linking
   *  directly to this URL in a new tab. Falls back to mailto when unset. */
  omUrl?: string;
  className?: string;
}

const TONE_AVATAR: Record<BrokerRailTone, { bg: string; fg: string }> = {
  ink: { bg: "#0a0a0a", fg: "#ffffff" },
  navy: { bg: "#0e1a34", fg: "#fafafa" },
  graphite: { bg: "#1d1d1f", fg: "#f5f5f7" },
  paper: { bg: "#fafafa", fg: "#0a0a0a" },
};

function BrokerAvatar({
  photo,
  tone,
  name,
  size,
}: {
  photo?: string;
  tone?: BrokerRailTone;
  name: string;
  size: number;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (photo) {
    return (
      <Image
        src={photo}
        alt={name}
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    );
  }

  const spec = TONE_AVATAR[tone ?? "navy"];

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ backgroundColor: spec.bg }}
      aria-label={name}
    >
      <span
        className="font-[family-name:var(--font-fraunces)] leading-none"
        style={{
          color: spec.fg,
          fontSize: Math.round(size * 0.4),
          fontWeight: 500,
          letterSpacing: "-0.02em",
        }}
      >
        {initials}
      </span>
    </div>
  );
}

export function StickyBrokerRail({
  broker,
  listingName,
  omUrl,
  className,
}: StickyBrokerRailProps) {
  const subject = encodeURIComponent(`Request OM — ${listingName}`);
  const mailtoHref = `mailto:${broker.email}?subject=${subject}`;
  const telHref = `tel:${broker.phone.replace(/[^0-9+]/g, "")}`;
  // Primary CTA — direct OM link (same-tab redirect) when available,
  // mailto fallback otherwise.
  const primaryHref = omUrl ?? mailtoHref;
  const primaryLabel = omUrl ? "View OM" : "Request OM";

  return (
    <>
      {/* Desktop sticky rail */}
      <aside
        className={cn(
          "hidden lg:block sticky top-24 rounded-[18px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)] p-6",
          className,
        )}
      >
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[color:var(--surface-elevated)]">
            <BrokerAvatar
              photo={broker.photo}
              tone={broker.tone}
              name={broker.name}
              size={48}
            />
          </div>
          <div className="min-w-0">
            <p className="text-[15px] font-semibold text-[color:var(--text-primary)] truncate">
              {broker.name}
            </p>
            <p className="text-[13px] text-[color:var(--text-secondary)] truncate">
              {broker.title}
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <a
            href={telHref}
            className="flex items-center gap-2 text-[15px] text-[color:var(--text-primary)] hover:text-[#1a3a6b]"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            <span>{broker.phone}</span>
          </a>
          <a
            href={mailtoHref}
            className="flex items-center gap-2 text-[15px] text-[color:var(--text-primary)] hover:text-[#1a3a6b]"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            <span className="truncate">{broker.email}</span>
          </a>
        </div>

        <div className="mt-5">
          <Pill
            variant="primary"
            size="default"
            href={primaryHref}
            className="w-full"
          >
            {primaryLabel}
          </Pill>
        </div>
      </aside>

      {/* Mobile fixed bottom bar */}
      <div
        className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white border-t border-[color:var(--divider)] shadow-[0_-4px_16px_-8px_rgba(0,0,0,0.12)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[color:var(--surface-elevated)]">
            <BrokerAvatar
              photo={broker.photo}
              tone={broker.tone}
              name={broker.name}
              size={40}
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-semibold text-[color:var(--text-primary)] truncate">
              {broker.name}
            </p>
            <p className="text-[12px] text-[color:var(--text-secondary)] truncate">
              {broker.title}
            </p>
          </div>
          <Pill variant="primary" size="sm" href={primaryHref}>
            {primaryLabel}
          </Pill>
        </div>
      </div>
    </>
  );
}

export default StickyBrokerRail;
