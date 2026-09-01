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
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-paper font-display text-sm font-extrabold tracking-widest text-ink">
                CS
              </span>
              <span className="font-display text-xl font-bold tracking-tight">{site.name}</span>
            </div>
            <p className="mt-2 font-display text-xs font-medium uppercase tracking-[0.18em] text-paper/60">
              {site.legalName}
            </p>
            <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent-ink">
              {site.tagline}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/70">
              We turn campaigns, candidates, events and ideas into visual communication
              people notice — and we&apos;re building toward something larger.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-paper/20 text-paper/80 transition-colors hover:border-paper hover:text-paper"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-paper/80 transition-colors hover:text-paper"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-paper/15 pt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-1 text-sm text-paper/60">
              <p>
                <a href={`tel:${site.phoneHref}`} className="hover:text-paper">
                  {site.phone}
                </a>
                <span className="mx-2">·</span>
                <a href={`mailto:${site.email}`} className="hover:text-paper">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.emailAlt}`} className="hover:text-paper">
                  {site.emailAlt}
                </a>
                <span className="mx-2">·</span>
                {site.location}
              </p>
            </div>
            <div className="text-sm text-paper/60 md:text-right">
              <p>© {year} {site.name}. All rights reserved.</p>
              <p className="mt-1 text-xs text-paper/40">
                {site.name} is politically independent and does not endorse any party.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
