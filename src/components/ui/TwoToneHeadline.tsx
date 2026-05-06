import * as React from "react";
import { cn } from "@/lib/utils";

type Size = "section" | "subsection" | "hero";
type AsTag = "h1" | "h2" | "h3";
type Tone = "light" | "dark";

export interface TwoToneHeadlineProps {
  lead: string;
  follow: string;
  size?: Size;
  as?: AsTag;
  tone?: Tone;
  className?: string;
}

const sizeClass: Record<Size, string> = {
  section:
    "font-semibold text-[clamp(32px,3vw,48px)] leading-[1.08] tracking-[-0.003em]",
  subsection:
    "font-semibold text-[clamp(28px,2.4vw,40px)] leading-[1.1] tracking-[0em]",
  hero: "font-semibold text-[clamp(48px,7vw,96px)] leading-[1.05] tracking-[-0.015em]",
};

export function TwoToneHeadline({
  lead,
  follow,
  size = "section",
  as = "h2",
  tone = "light",
  className,
}: TwoToneHeadlineProps) {
  const Tag = as as React.ElementType;

  const leadColor =
    tone === "dark" ? "text-white" : "text-[color:var(--text-primary)]";
  const followColor =
    tone === "dark"
      ? "text-[#a1a1a6]"
      : "text-[color:var(--text-secondary)]";

  return (
    <Tag className={cn(sizeClass[size], className)}>
      <span className={leadColor}>{lead}</span>{" "}
      <span className={followColor}>{follow}</span>
    </Tag>
  );
}

export default TwoToneHeadline;
