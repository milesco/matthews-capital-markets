import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    heading: "Brokerage",
    links: [
      { href: "/listings", label: "Active Listings" },
      { href: "/closed", label: "Closed Deals" },
      { href: "/insights", label: "Quarterly Outlook" },
    ],
  },
  {
    heading: "Listings",
    links: [
      { href: "/listings#texas", label: "Texas" },
      { href: "/listings#southeast", label: "Southeast" },
      { href: "/listings#midwest", label: "Midwest" },
      { href: "/listings#west", label: "West" },
    ],
  },
  {
    heading: "Insights",
    links: [
      { href: "/insights", label: "All Insights" },
      { href: "/insights", label: "Quarterly Outlook" },
      { href: "/insights", label: "Press" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/team", label: "Team" },
      { href: "/contact", label: "Contact" },
      { href: "https://www.matthews.com", label: "Matthews.com", external: true },
      {
        href: "https://www.linkedin.com/company/matthewscre/",
        label: "LinkedIn",
        external: true,
      },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("bg-[color:var(--surface-elevated)]")}>
      <div className="mx-auto max-w-[1024px] px-6 py-12 md:py-16">
        {/* Top: wordmark + tagline */}
        <div className="flex flex-col gap-2">
          <span className="text-[17px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
            Matthews
          </span>
          <p className="text-[14px] text-[color:var(--text-secondary)]">
            National hospitality investment sales.
          </p>
        </div>

        <div className="mt-8 hairline" />

        {/* Columns */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-[color:var(--text-primary)] mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={`${col.heading}-${link.label}-${link.href}`}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:underline underline-offset-[3px] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[13px] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:underline underline-offset-[3px] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 hairline" />

        {/* Legal */}
        <div className="mt-6 space-y-1.5">
          <p className="text-[11px] tracking-[-0.005em] text-[color:var(--text-tertiary)]">
            Matthews Real Estate Investment Services — 901 S MoPac Expressway, Building 4, Suite 150, Austin, TX 78746.
          </p>
          <p className="text-[11px] tracking-[-0.005em] text-[color:var(--text-tertiary)]">
            Copyright &copy; {year} Matthews Real Estate Investment Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
