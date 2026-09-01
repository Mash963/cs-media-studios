import Link from "next/link";
import { site } from "@/data/site";
import { XIcon, InstagramIcon, FacebookIcon } from "./icons";

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Work", href: "/portfolio" },
      { label: "Services", href: "/services" },
      { label: "Campaigns", href: "/campaigns" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "POPIA Notice", href: "/popia" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, icon: FacebookIcon },
  { label: "X (Twitter)", href: site.social.x, icon: XIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute right-[-1vw] top-10 hidden text-gold/5 lg:block" aria-hidden>
        <span className="font-display text-[12rem] font-extrabold leading-none tracking-tighter">CS</span>
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-paper font-display text-sm font-extrabold tracking-widest text-ink">
                CS
              </span>
              <span className="font-display text-xl font-bold tracking-tight">{site.name}</span>
              <span className="ml-2 hidden border-l border-paper/15 pl-3 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-gold md:block">CS / 001 — 2026</span>
            </div>
            <p className="mt-2 font-display text-xs font-medium uppercase tracking-[0.18em] text-paper/50">
              {site.legalName}
            </p>
            <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {site.tagline}
            </p>
            <div className="mt-4 h-px w-12 bg-gold/20" aria-hidden />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              We turn campaigns, candidates, events and ideas into visual communication
              people notice — and we&apos;re building toward something larger.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-paper/15 bg-paper/5 text-paper/60 transition-colors hover:border-gold/30 hover:bg-gold/10 hover:text-gold"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="label-studio text-paper/40">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {l.label} <span className="text-gold/0 transition-all group-hover:text-gold/60 group-hover:translate-x-0.5" aria-hidden>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-paper/10 pt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-1 text-sm text-paper/50">
              <p>
                <a href={`tel:${site.phoneHref}`} className="text-gold hover:text-gold-soft transition-colors">
                  {site.phone}
                </a>
                <span className="mx-2 text-paper/20">·</span>
                <a href={`mailto:${site.email}`} className="hover:text-paper transition-colors">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.emailAlt}`} className="hover:text-paper transition-colors">
                  {site.emailAlt}
                </a>
                <span className="mx-2 text-paper/20">·</span>
                {site.location}
              </p>
              <p className="pt-2 label-studio text-paper/30">CS / MADE IN SOUTH AFRICA — DESIGNED BY CS — 2026</p>
            </div>
            <div className="text-sm text-paper/50 md:text-right">
              <p>© {year} {site.name}. All rights reserved.</p>
              <p className="mt-1 text-xs leading-relaxed text-paper/30">
                {site.name} is politically independent and does not endorse any party.
                <br />
                <span className="text-gold/50">Conqueror Supreme Creative & Technology Studio</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
