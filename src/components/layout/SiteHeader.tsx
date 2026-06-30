"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface NavChild {
  href: string;
  label: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  /** Top-level link — omit when the item is dropdown-only. */
  href?: string;
  external?: boolean;
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Properties",
    children: [
      { href: "/listings", label: "Investment Sales" },
      { href: "/hotels-for-sale", label: "Leasing" },
    ],
  },
  {
    label: "Financing",
    href: "/services/debt-structured-finance",
    children: [
      { href: "/financing/multifamily", label: "Multifamily" },
      { href: "/financing/industrial", label: "Industrial" },
      { href: "/financing/shopping-center", label: "Shopping Center" },
      { href: "/financing/healthcare", label: "Healthcare" },
      { href: "/financing/net-lease-retail", label: "Net Lease Retail" },
      { href: "/financing/hospitality", label: "Hospitality" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/services/investment-sales", label: "Investment Sales" },
      { href: "/services/debt-structured-finance", label: "Debt & Structured Finance" },
      { href: "/services/capital-markets", label: "Equity" },
      { href: "/hotels-for-sale", label: "Leasing" },
      { href: "/services", label: "Auction Services" },
      { href: "/services", label: "1031 Exchange Program" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { href: "/insights", label: "Insights" },
      { href: "/insights/matthews-publication", label: "Matthews Publication" },
      { href: "/insights/matthews-mentality-podcast", label: "Matthews Mentality Podcast" },
      { href: "/insights/matthews-market-pulse", label: "The Matthews Market Pulse" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { href: "/company", label: "About Matthews" },
      { href: "/company", label: "Executive Leadership" },
      { href: "/company", label: "Our Agents" },
      { href: "/company", label: "Client Success" },
      { href: "/company", label: "Sales Careers" },
      { href: "/company", label: "Corporate Careers" },
      { href: "/company", label: "Giving Back" },
      { href: "/company", label: "In the News" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { href: "/contact", label: "Office Locations" },
      { href: "/contact", label: "License Information & Online Disclosures" },
      { href: "/contact", label: "Texas Real Estate Commission Info About Brokerage Services" },
      { href: "/contact", label: "Privacy Policy" },
    ],
  },
];

/**
 * Returns the label of the single best-matching nav item for the current
 * pathname. Priority (highest first):
 *   1. Exact item.href match
 *   2. Exact child href match
 *   3. Child href prefix match (e.g. /team/john-doe under /team)
 *   4. Item href prefix match
 * This ensures only ONE item is ever active at a time.
 */
function getActiveLabel(pathname: string, items: NavItem[]): string | null {
  for (const item of items)
    if (item.href && pathname === item.href) return item.label;
  for (const item of items)
    if (item.children?.some((c) => pathname === c.href)) return item.label;
  for (const item of items)
    if (item.children?.some((c) => pathname.startsWith(c.href + "/"))) return item.label;
  for (const item of items)
    if (item.href && pathname.startsWith(item.href + "/")) return item.label;
  return null;
}

/** Desktop dropdown nav item with hover reveal. */
function DropdownItem({
  item,
  textColor,
  activeLabel,
}: {
  item: NavItem;
  textColor: string;
  activeLabel: string | null;
}) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const isActive = item.label === activeLabel;

  const triggerClass = cn(
    "relative flex items-center gap-0.5 text-[13px] tracking-[-0.01em] transition-colors duration-300 hover:opacity-80 cursor-pointer select-none pb-1",
    isActive && "font-bold",
    textColor,
  );

  const activeUnderline = isActive ? (
    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563eb] rounded-full" />
  ) : null;

  // Close on outside click
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (!item.children) {
    // Plain link — no dropdown
    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={triggerClass}
        >
          {item.label}
          {activeUnderline}
        </a>
      );
    }
    return (
      <button
        type="button"
        className={triggerClass}
        onClick={() => router.push(item.href!)}
      >
        {item.label}
        {activeUnderline}
      </button>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Always a button — navigate on click if item has its own href */}
      <button
        type="button"
        className={triggerClass}
        aria-expanded={open}
        onClick={() => item.href && router.push(item.href)}
      >
        {item.label}
        {activeUnderline}
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            open && "rotate-180",
          )}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: ease.standard }}
            className="absolute left-0 top-full pt-2 min-w-[200px] z-50"
          >
            <div className="bg-white rounded-[8px] border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden py-1">
              {item.children.map((child) =>
                child.external ? (
                  <a
                    key={child.href}
                    href={child.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-[13px] text-[color:var(--text-primary)] hover:bg-black/[0.04] transition-colors"
                  >
                    {child.label}
                  </a>
                ) : (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 text-[13px] text-[color:var(--text-primary)] hover:bg-black/[0.04] transition-colors"
                  >
                    {child.label}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const activeLabel = getActiveLabel(pathname, NAV_ITEMS);
  const transparentRoute = pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchType, setSearchType] = React.useState<"Sale" | "Lease">("Sale");
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const frosted = scrolled || mobileOpen || !transparentRoute;
  const textColor = frosted ? "text-[color:var(--text-primary)]" : "text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        frosted
          ? "bg-white/72 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.08]"
          : "bg-transparent border-b border-transparent",
      )}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
      }}
    >
      <div className="px-[70px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Matthews, home"
            className="flex items-center gap-2.5"
          >
            <Image
              src="/images/matthews-logo.jpg"
              alt="Matthews"
              width={48}
              height={48}
              priority
              className="h-10 w-10 rounded-[8px]"
            />
            <span
              className={cn(
                "text-[17px] font-semibold tracking-[-0.014em] transition-colors duration-300",
                textColor,
              )}
            >
              Matthews
            </span>
          </Link>

          {/* Desktop nav — hover dropdowns */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <DropdownItem key={item.label} item={item} textColor={textColor} activeLabel={activeLabel} />
            ))}
            {/* Property Search CTA */}
            <button
              type="button"
              onClick={() => { setSearchOpen(true); setTimeout(() => searchInputRef.current?.focus(), 50); }}
              className={cn(
                "flex items-center gap-1.5 text-[13px] font-bold tracking-[-0.01em] transition-colors duration-300 hover:opacity-80",
                textColor,
              )}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Property Search
            </button>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className={cn(
                "md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full transition-colors duration-300",
                textColor,
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Property Search overlay — full-width bar below the nav */}
      <AnimatePresence initial={false}>
        {searchOpen && (
          <motion.div
            key="search-bar"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: ease.standard }}
            className="border-t border-white/10"
            style={{ background: "#0e1626" }}
          >
            <div className="px-[70px] py-3 flex items-center gap-3">
              {/* Search icon */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="text-white/60 shrink-0">
                <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>

              {/* Sale / Lease toggles */}
              {(["Sale", "Lease"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSearchType(t)}
                  className="px-3 py-1 rounded-md text-[13px] font-semibold transition-colors"
                  style={{
                    background: searchType === t ? "#fff" : "transparent",
                    color: searchType === t ? "#0e1626" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {t}
                </button>
              ))}

              {/* Text input */}
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent text-white placeholder-white/40 text-[15px] outline-none"
              />

              {/* Close */}
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            {/* Blue bottom border like in the screenshot */}
            <div className="h-[2px] mx-[70px]" style={{ background: "#5d80b8" }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.button
            key="drawer-scrim"
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: ease.standard }}
            className="md:hidden fixed left-0 right-0 bottom-0 top-16 cursor-default bg-black/30"
          />
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: ease.standard }}
            className="relative md:hidden bg-white/95 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.08]"
          >
            <div className="px-[70px] py-4">
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const baseClass =
                    "py-3 text-[17px] text-[color:var(--text-primary)] border-b border-[color:var(--divider)] last:border-b-0";

                  if (item.children) {
                    const expanded = mobileExpanded === item.label;
                    return (
                      <div key={item.label} className="border-b border-[color:var(--divider)] last:border-b-0">
                        <button
                          type="button"
                          className="w-full flex items-center justify-between py-3 text-[17px] text-[color:var(--text-primary)]"
                          onClick={() =>
                            setMobileExpanded(expanded ? null : item.label)
                          }
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              expanded && "rotate-180",
                            )}
                            strokeWidth={1.75}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              key="mobile-sub"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: ease.standard }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 pl-4 flex flex-col gap-1">
                                {item.children.map((child) =>
                                  child.external ? (
                                    <a
                                      key={child.href}
                                      href={child.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="py-2 text-[15px] text-[color:var(--text-secondary)]"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {child.label}
                                    </a>
                                  ) : (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="py-2 text-[15px] text-[color:var(--text-secondary)]"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                  ),
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className={baseClass}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className={baseClass}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default SiteHeader;
