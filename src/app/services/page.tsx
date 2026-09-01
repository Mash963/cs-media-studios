import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { creative, digital, technology, labs } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/services",
  title: "Services — Creative · Digital · Technology",
  description:
    "CS Media Studios — Creative (Design, Photo, Video, Motion) live now. Digital (Web, Software, Automation) and Technology (Custom PC, Workstations, Servers, Infrastructure) coming soon. One studio, every format.",
});

function DivisionCard({ division, index, dark }: { division: typeof creative.divisions[number]; index: number; dark?: boolean }) {
  const isLive = division.status === "live";
  return (
    <article id={division.id} className={`flex h-full flex-col border p-7 md:p-8 scroll-mt-28 ${dark ? "border-paper/15 bg-paper/5 backdrop-blur" : "border-line bg-paper"} ${isLive ? "hover:shadow-card transition-shadow" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <span className={`font-display text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-accent-ink" : "text-accent"}`}>{division.label}</span>
        <span className={`border px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wider ${isLive ? "border-emerald-200 bg-emerald-50 text-emerald-700" : dark ? "border-paper/20 text-paper/60" : "border-line bg-paper-alt text-ink-muted"}`}>
          {isLive ? "Live — Book Now" : division.status === "coming-soon" ? "Coming Soon" : "Future Development"}
        </span>
      </div>
      <h3 className={`mt-4 font-display text-xl font-semibold md:text-2xl ${dark ? "text-paper" : "text-ink"}`}>{division.title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-paper/60" : "text-ink-muted"}`}>{division.description}</p>
      <ul className="mt-5 space-y-1.5">
        {division.services.map(s => (
          <li key={s} className={`flex items-start gap-2 text-sm ${dark ? "text-paper/70" : "text-ink"}`}>
            <span className={`mt-1 h-1 w-1 shrink-0 ${dark ? "bg-accent-ink" : "bg-accent"}`} aria-hidden />
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-7">
        <ButtonLink
          href={isLive ? "/order" : "/contact"}
          variant={isLive ? "primary" : dark ? "paper" : "secondary"}
          className="w-full justify-center"
        >
          {division.cta.label} <span aria-hidden>→</span>
        </ButtonLink>
      </div>
      <p className={`mt-3 text-center font-display text-[10px] uppercase tracking-[0.18em] ${dark ? "text-paper/30" : "text-ink-muted/60"}`}>
        {isLive ? "0" + (index + 1) + " · Active division" : "Not yet available — waitlist only"}
      </p>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services — Four Ecosystems"
        title={
          <>
            One studio
            <br />
            Every format.
          </>
        }
        intro="Creative is live today. Digital and Technology are honestly marked as coming soon. Future is exploratory. We never list a service as available before it is."
      />

      {/* ── CREATIVE ───────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">01 — Creative · Live Today</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{creative.name}</h2>
                <p className="mt-2 max-w-xl text-ink-muted">{creative.description}</p>
              </div>
              <span className="border border-emerald-200 bg-emerald-50 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-emerald-700">4 Divisions Live</span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {creative.divisions.map((d, i) => (
              <Reveal key={d.id} delay={(i % 2) * 80}>
                <DivisionCard division={d} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-8 border border-line bg-paper-alt p-6 text-center">
              <p className="font-display text-sm font-semibold text-ink">Need a combination? Most clients do.</p>
              <p className="mx-auto mt-1 max-w-xl text-sm text-ink-muted">Brief once for Design + Photo + Video + Motion — we deliver a connected set instead of disconnected files.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/order">Start a Project →</ButtonLink>
                <ButtonLink href="/campaigns" variant="secondary">See Campaign Systems →</ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DIGITAL ────────────────────────────────────── */}
      <section className="border-y border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-paper/15 pb-6">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">02 — Digital · Coming Soon</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{digital.name}</h2>
                <p className="mt-2 max-w-xl text-paper/60">{digital.description}</p>
              </div>
              <span className="border border-paper/20 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-paper/60">Waitlist Only</span>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {digital.divisions.map((d, i) => (
              <Reveal key={d.id} delay={i * 70}>
                <DivisionCard division={d} index={i} dark />
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border border-paper/10 bg-paper/5 p-6">
              <p className="text-sm text-paper/70">Want to be first to know when CS WEB launches?</p>
              <ButtonLink href="/contact" variant="paper">Join the Waitlist →</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TECHNOLOGY ─────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">03 — Technology · Coming Soon</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{technology.name}</h2>
                <p className="mt-2 max-w-xl text-ink-muted">{technology.description}</p>
              </div>
              <span className="border border-line bg-paper-alt px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-ink-muted">Coming Soon</span>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technology.divisions.map((d, i) => (
              <Reveal key={d.id} delay={(i % 4) * 60}>
                <DivisionCard division={d} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURE: CS LABS ────────────────────────────── */}
      <section className="border-y border-line bg-paper-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <div className="border border-dashed border-line bg-paper p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">{labs.label} — Future Development</p>
                  <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{labs.title}</h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">{labs.description}</p>
                </div>
                <span className="shrink-0 border border-amber-200 bg-amber-50 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-amber-700">Not for sale yet</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {labs.services.map(s => (
                  <span key={s} className="border border-line bg-paper-alt px-3 py-1.5 font-display text-xs text-ink-muted">{s}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/about" variant="secondary">Learn About the Vision →</ButtonLink>
                <Link href="/contact" className="inline-flex items-center font-display text-sm font-semibold text-accent underline underline-offset-4">Notify me when it launches →</Link>
              </div>
              <p className="mt-6 border-t border-line pt-4 font-display text-xs uppercase tracking-[0.18em] text-ink-muted/60">We label future work clearly. No service is offered before it is operational — that is a promise.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Evolution anchor ───────────────────────────── */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <SectionHeading eyebrow="The Trajectory" title="Media → Creative → Digital → Technology" intro="Where we are today, what comes next, and what we're building toward — shown honestly." />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { label: "Today", title: "Creative", copy: "Design, Photo, Video, Motion, Campaign Media — live and taking briefs.", active: true },
              { label: "Next", title: "Digital", copy: "Web, Software, Automation — the digital layer, waitlist open.", active: false },
              { label: "Future", title: "Technology", copy: "Custom PC, Workstations, Servers, Infrastructure + CS Labs.", active: false },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className={`border p-6 ${c.active ? "border-accent-ink bg-paper/5" : "border-paper/15"}`}>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-ink">{c.label}</p>
                  <h3 className="mt-2 font-display text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">{c.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Need just one division — or all four?" intro="Tell us what you're building and we'll map the right combination." />
    </>
  );
}
