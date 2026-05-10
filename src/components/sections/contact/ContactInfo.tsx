import * as React from "react";
import { Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Row = {
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    "aria-hidden"?: boolean;
  }>;
  label: string;
  value: React.ReactNode;
};

const rows: Row[] = [
  {
    icon: Mail,
    label: "Email",
    value: (
      <a
        href="mailto:hotelteam@matthews.com"
        className="inline-flex min-h-[44px] -my-2 items-center text-[#1a3a6b] hover:underline"
      >
        hotelteam@matthews.com
      </a>
    ),
  },
  {
    icon: MapPin,
    label: "Austin HQ",
    value: (
      <span className="block whitespace-pre-line text-[color:var(--text-primary)]">
        {"515 Congress Ave., Suite 2410\nAustin, TX 78701"}
      </span>
    ),
  },
  {
    icon: MapPin,
    label: "Denver",
    value: (
      <span className="block whitespace-pre-line text-[color:var(--text-primary)]">
        Denver, CO
      </span>
    ),
  },
];

export function ContactInfo() {
  return (
    <Reveal>
      <div>
        <ul className="space-y-7">
          {rows.map((row) => {
            const Icon = row.icon;
            return (
              <li key={row.label} className="flex items-start gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a3a6b]/10 text-[#1a3a6b]"
                  aria-hidden="true"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <div className="min-w-0 pt-[3px]">
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#86868b]">
                    {row.label}
                  </p>
                  <div className="text-[15px] tracking-[-0.014em] text-[#1d1d1f] leading-[1.45]">
                    {row.value}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    </Reveal>
  );
}

export default ContactInfo;
