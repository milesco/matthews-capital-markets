import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "default" | "sm";

export interface PillProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center rounded-full leading-none font-normal whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0071e3] transition-colors duration-200";

const sizeClass: Record<Size, string> = {
  default: "px-[22px] py-[12px] text-[17px]",
  sm: "px-[18px] py-[10px] text-[15px]",
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-[#0071e3] text-white hover:bg-[#0077ed] active:bg-[#006edb]",
  secondary:
    "border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white",
};

export function Pill({
  variant = "primary",
  size = "default",
  href,
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
      return (
        <a href={href} className={classes} aria-label={ariaLabel}>
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
