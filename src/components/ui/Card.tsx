import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "light" | "elevated" | "dark";
type Radius = "md" | "lg" | "xl";
type Padding = 5 | 6 | 7 | 8 | 10 | 14;

export interface CardProps {
  variant?: Variant;
  radius?: Radius;
  padding?: Padding;
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
  // We use a union of common element tags rather than `any` so the value is type-safe.
  as?: keyof React.JSX.IntrinsicElements;
}

const variantClass: Record<Variant, string> = {
  light:
    "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)]",
  elevated: "bg-[#f5f5f7]",
  dark: "bg-[#1d1d1f] text-white",
};

const radiusClass: Record<Radius, string> = {
  md: "rounded-[18px]",
  lg: "rounded-[22px]",
  xl: "rounded-[28px]",
};

const paddingClass: Record<Padding, string> = {
  5: "p-5",
  6: "p-6",
  7: "p-7",
  8: "p-8",
  10: "p-10",
  14: "p-14",
};

export function Card({
  variant = "light",
  radius = "md",
  padding = 6,
  hover = false,
  className,
  children,
  as = "div",
}: CardProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={cn(
        variantClass[variant],
        radiusClass[radius],
        paddingClass[padding],
        hover && "card-lift",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default Card;
