import * as React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
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
        className="text-[#0071e3] hover:underline"
      >
        hotelteam@matthews.com
      </a>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    value: (
      <a href="tel:+15123387800" className="text-[#0071e3] hover:underline">
        (512) 338-7800
      </a>
    ),
  },
  {
    icon: MapPin,
    label: "Austin HQ",
    value: (
      <span className="block whitespace-pre-line text-[color:var(--text-primary)]">
        {"9600 N MoPac Expressway, Suite 300\nAustin, TX 78759"}
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
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[#0071e3]"
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

        <p className="mt-10 text-[12px] tracking-[-0.01em] text-[color:var(--text-secondary)]">
          <span className="font-medium uppercase tracking-[0.18em] text-[#86868b]">
            Office hours
          </span>
          <span className="mx-2 text-[color:var(--divider)]">/</span>
          Mon&ndash;Fri, 8am&ndash;6pm CT
        </p>
      </div>
    </Reveal>
  );
}

export default ContactInfo;
