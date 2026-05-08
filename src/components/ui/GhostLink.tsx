import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GhostLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function GhostLink({ href, children, className }: GhostLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-1 text-[#1a3a6b] text-[15px] tracking-[-0.014em] hover:underline underline-offset-[3px] [.dark-section_&]:text-[#5d80b8]",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
    </>
  );

  const isExternal =
    /^https?:\/\//.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export default GhostLink;
