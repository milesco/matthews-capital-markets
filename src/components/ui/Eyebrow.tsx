import * as React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)] mb-3",
        className,
      )}
    >
      {children}
    </p>
  );
}

export default Eyebrow;
