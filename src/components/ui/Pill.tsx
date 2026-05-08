import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "default" | "sm";

export interface PillProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  /** Anchor target, only respected when `href` is an external URL. */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /** Anchor rel, only respected when `href` is an external URL. */
  rel?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center rounded-full leading-none font-normal whitespace-nowrap min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a3a6b] transition-colors duration-200";

const sizeClass: Record<Size, string> = {
  default: "px-[22px] py-[12px] text-[17px]",
  sm: "px-[18px] py-[11px] text-[15px]",
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-[#1a3a6b] text-white hover:bg-[#234a82] active:bg-[#0e1a34]",
  secondary:
    "border border-[#1a3a6b] text-[#1a3a6b] hover:bg-[#1a3a6b] hover:text-white",
};

export function Pill({
  variant = "primary",
  size = "default",
  href,
  target,
  rel,
  onClick,
  children,
  className,
  type = "button",
  ariaLabel,
}: PillProps) {
  const classes = cn(base, sizeClass[size], variantClass[variant], className);

  if (href) {
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      // Default rel for new-tab external links, security + perf hardening.
      const safeRel =
        rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
      return (
        <a
          href={href}
          target={target}
          rel={safeRel}
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Pill;
