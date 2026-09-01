"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import { ButtonLink } from "./Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-paper/95 backdrop-blur"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 leading-none"
          aria-label={`${site.name} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center bg-ink font-display text-sm font-extrabold tracking-widest text-paper">
            CS
          </span>
          <span className="flex flex-col">
            <span className="font-display text-[15px] font-bold tracking-tight text-ink">
              {site.name}
            </span>
            <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-ink-muted sm:block">
              {site.legalName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative font-display text-sm font-medium transition-colors",
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <ButtonLink href="/order" size="md">
            Start a Project
          </ButtonLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-6 bg-current transition-all",
                open && "top-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-0.5 w-6 bg-current transition-all",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-4 h-0.5 w-6 bg-current transition-all",
                open && "top-2 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden",
          open
            ? "block border-t border-line bg-paper"
            : "hidden"
        )}
      >
        <nav className="mx-auto max-w-6xl space-y-1 px-5 py-6" aria-label="Mobile">
          {[...nav, { label: "Start a Project", href: "/order" }].map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between border-b border-line/60 py-3 font-display text-lg font-medium",
                  active ? "text-accent" : "text-ink"
                )}
              >
                {item.label}
                <span aria-hidden className="text-ink-muted">
                  0{i + 1}
                </span>
              </Link>
            );
          })}
          <div className="pt-4">
            <ButtonLink href="/order" className="w-full" size="lg">
              Start a Project
            </ButtonLink>
            <div className="mt-4 flex gap-3 text-sm">
              <a href={`tel:${site.phoneHref}`} className="font-medium text-accent underline underline-offset-4">
                Call {site.phone}
              </a>
              <span className="text-ink-muted">·</span>
              <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline underline-offset-4">
                WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
