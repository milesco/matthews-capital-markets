"use client";

import * as React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Pill } from "./Pill";
import { cn } from "@/lib/utils";

export interface BrokerRailContact {
  name: string;
  title: string;
  phone: string;
  email: string;
  /** Optional real photo URL. If absent, `photoTone` is used as a gradient placeholder. */
  photo?: string;
  /** Tailwind gradient class fragment, e.g. "from-[#0a1226] to-[#1a3a6b]". */
  photoTone?: string;
}

export interface StickyBrokerRailProps {
  broker: BrokerRailContact;
  listingName: string;
  className?: string;
}

function BrokerAvatar({
  photo,
  photoTone,
  name,
  size,
}: {
  photo?: string;
  photoTone?: string;
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

  return (
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-br flex items-center justify-center text-white font-semibold tracking-[-0.014em]",
        photoTone ?? "from-[#1a3a6b] to-[#0a1226]",
      )}
      style={{ fontSize: Math.round(size * 0.36) }}
      aria-label={name}
    >
      {initials}
    </div>
  );
}

export function StickyBrokerRail({
  broker,
  listingName,
  className,
}: StickyBrokerRailProps) {
  const subject = encodeURIComponent(`Request OM — ${listingName}`);
  const mailtoHref = `mailto:${broker.email}?subject=${subject}`;
  const telHref = `tel:${broker.phone.replace(/[^0-9+]/g, "")}`;

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
              photoTone={broker.photoTone}
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
            className="flex items-center gap-2 text-[15px] text-[color:var(--text-primary)] hover:text-[#0071e3]"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            <span>{broker.phone}</span>
          </a>
          <a
            href={mailtoHref}
            className="flex items-center gap-2 text-[15px] text-[color:var(--text-primary)] hover:text-[#0071e3]"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            <span className="truncate">{broker.email}</span>
          </a>
        </div>

        <div className="mt-5">
          <Pill variant="primary" size="default" href={mailtoHref} className="w-full">
            Request OM
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
              photoTone={broker.photoTone}
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
          <Pill variant="primary" size="sm" href={mailtoHref}>
            Request OM
          </Pill>
        </div>
      </div>
    </>
  );
}

export default StickyBrokerRail;
