import * as React from "react";
import { cn } from "@/lib/utils";

type Status = "available" | "under-contract" | "closed" | "sold";
type Size = "default" | "sm";

export interface StatusBadgeProps {
  status: Status;
  size?: Size;
  className?: string;
}

const labelMap: Record<Status, string> = {
  available: "Available",
  "under-contract": "Under Contract",
  closed: "Closed",
  sold: "Sold",
};

const sizeClass: Record<Size, string> = {
  default: "text-[11px]",
  sm: "text-[10px]",
};

const variantClass: Record<Status, string> = {
  available: "bg-white/95 text-[#1d1d1f] backdrop-blur",
  "under-contract": "bg-[#30d158]/10 text-[#1c8b3c]",
  closed: "bg-[#1d1d1f]/90 text-white",
  sold: "bg-[#1d1d1f]/90 text-white",
};

export function StatusBadge({
  status,
  size = "default",
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 uppercase tracking-[0.18em] font-medium inline-flex items-center gap-1.5",
        sizeClass[size],
        variantClass[status],
        className,
      )}
    >
      {status === "under-contract" && (
        <span
          aria-hidden="true"
          className="relative inline-flex h-1.5 w-1.5"
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#30d158] opacity-75 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#30d158]" />
        </span>
      )}
      {labelMap[status]}
    </span>
  );
}

export default StatusBadge;
