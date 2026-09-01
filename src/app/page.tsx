import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import PortfolioMedia from "@/components/PortfolioMedia";
import { site } from "@/data/site";
import { creative, digital, technology, labs } from "@/data/services";
import { portfolio } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  title: "ONE STUDIO. EVERY FORMAT.",
  description:
    "CS Media Studios — Conqueror Supreme Creative & Technology Studio. Design, Photo, Video, Motion and Campaign Media in South Africa. One studio, every format.",
});

export default function HomePage() {
  const featured = portfolio.slice(0, 4);

  return (
    <>
      {/* ── Cinematic Hero ───────────────────────────────── */}
      <section className="hero-gradient grain relative overflow-hidden text-paper">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40" aria-hidden />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
          <Reveal>
            <p className="mb-8 flex flex-wrap items-center gap-3 font-display text-[11px] font-medium uppercase tracking-[0.24em] text-paper/55">
              <span className="inline-flex h-7 w-7 items-center justify-center bg-paper font-display text-[11px] font-extrabold tracking-widest text-ink">
                CS
              </span>
              <span>{site.legalName}</span>
              <span className="hidden h-3 w-px bg-paper/20 sm:inline-block" aria-hidden />
              <span className="hidden sm:inline">South Africa — Est. 2026</span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-5xl text-[2.75rem] font-extrabold leading-[0.88] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="block">ONE STUDIO.</span>
              <span className="block text-accent-ink">EVERY FORMAT.</span>
            </h1>
          </Reveal>

          <div className="shimmer-line mt-8 h-px w-24 bg-accent-ink" aria-hidden />

          <Reveal delay={140}>
            <p className="mt-8 max-w-xl font-display text-sm font-semibold uppercase tracking-[0.2em] text-paper/80">
              Design · Photo · Video · Motion · Campaign Media
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-3 max-w-xl font-display text-xs font-medium uppercase tracking-[0.18em] text-paper/35">
              Web · Software · Technology · Coming soon
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/order" size="lg" className="min-w-[200px] justify-center">
                Start a Project →
              </ButtonLink>
              <ButtonLink href="/portfolio" variant="paper" size="lg" className="min-w-[190px] justify-center">
                Explore the Work ↓
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-12 flex flex-wrap gap-2 border-t border-paper/10 pt-8 md:gap-3">
              <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/40">Trusted for:</span>
              <span className="font-display text-xs text-paper/60">Political Campaigns</span>
              <span className="text-paper/20">·</span>
              <span className="font-display text-xs text-paper/60">Community Organisations</span>
              <span className="text-paper/20">·</span>
              <span className="font-display text-xs text-paper/60">Events & Businesses</span>
            </div>
          </Reveal>

          {/* editorial stats bar — honest, no fake numbers */}
          <Reveal delay={320}>
            <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden border border-paper/10 bg-paper/10 md:max-w-2xl">
              {[
                { k: "Formats", v: "Print + Digital" },
                { k: "Revisions", v: "2 Rounds Included" },
                { k: "Response", v: "~1 Business Day" },
              ].map((s) => (
                <div key={s.k} className="bg-ink/60 px-4 py-4 backdrop-blur md:px-6">
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/40">{s.k}</p>
                  <p className="mt-1 font-display text-sm font-semibold text-paper">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Signature statement ──────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-28">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">The Studio Statement</p>
          </Reveal>
          <Reveal delay={40}>
            <p className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              We don&apos;t just make content.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-2 font-display text-3xl font-extrabold leading-tight text-accent sm:text-4xl md:text-5xl">
              We build visual presence.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
              From a single poster to a complete campaign, from a photograph to a finished
              video, CS Media Studios turns ideas into visual communication designed to be
              seen, remembered and used.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="font-display text-sm font-semibold uppercase tracking-wider text-accent hover:underline underline-offset-4">Explore Services →</Link>
              <span className="text-line">|</span>
              <Link href="/campaigns" className="font-display text-sm font-semibold uppercase tracking-wider text-ink-muted hover:text-ink hover:underline underline-offset-4">Campaign Systems →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Creative ecosystem preview ───────────────────── */}
      <section className="bg-paper-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Creative — Live Today"
            title="Four divisions. One studio."
            intro="Design, Photo, Video and Motion — live now. Every brief becomes a connected set of outputs."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {creative.divisions.map((d) => (
              <Link
                key={d.id}
                href="/services"
                className="group bg-paper p-7 transition-all hover:bg-white hover:shadow-card md:p-8"
              >
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {d.label}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink group-hover:text-accent">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{d.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-display text-xs font-semibold uppercase tracking-wider text-accent">
                  {d.cta.label} <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
          <Reveal delay={80} className="mt-6">
            <p className="text-center font-display text-xs uppercase tracking-[0.18em] text-ink-muted">
              All four divisions accept briefs now — <Link href="/order" className="font-semibold text-accent underline underline-offset-4">Start a Project →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Campaigns are visual systems ────────────────── */}
      <section className="border-y border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <Reveal>
              <div>
                <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">Campaign Services</p>
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  Campaigns are
                  <br />
                  visual systems.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-paper/60">
                  A campaign rarely needs one poster. It needs a consistent visual language across print, social media, events, photography and video.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-paper/70">
                  {["Candidate posters","Ward campaigns","Campaign branding","Social graphics","Large-format","Motion & Video","Photo enhancement","Campaign asset systems"].map(w => (
                    <li key={w} className="flex items-center gap-2"><span className="h-1 w-1 bg-accent-ink" aria-hidden />{w}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink href="/campaigns" variant="paper">Build a Campaign →</ButtonLink>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="border border-paper/15 bg-paper/5 p-6 backdrop-blur md:p-8">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-ink">One Brief → Every Format</p>
                <div className="mt-6 space-y-2 font-display text-sm">
                  {[
                    { step: "01", label: "Candidate portrait & branding locked" },
                    { step: "02", label: "Poster & flyer system" },
                    { step: "03", label: "Social · WhatsApp · Story kit" },
                    { step: "04", label: "Large-format & event artwork" },
                    { step: "05", label: "Video & motion announcements" },
                  ].map(r => (
                    <div key={r.step} className="flex items-center gap-4 border border-paper/10 bg-ink/40 px-4 py-3">
                      <span className="font-bold text-accent-ink">{r.step}</span>
                      <span className="text-paper/80">{r.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-paper/40">One visual system · Every touchpoint · No disconnected suppliers.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Digital + Technology preview (coming soon) ───── */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">The Expansion</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">What&apos;s next — honestly labelled.</h2>
                <p className="mt-3 max-w-xl text-ink-muted">We show the future without pretending it&apos;s for sale today. No fake availability.</p>
              </div>
              <Link href="/services" className="font-display text-sm font-semibold uppercase tracking-wider text-accent hover:underline underline-offset-4">View full roadmap →</Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="border border-line bg-paper-alt p-7">
                <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Digital — Coming Soon
                </p>
                <h3 className="text-2xl font-bold leading-tight text-ink">The next chapter.</h3>
                <p className="mt-3 text-ink-muted">
                  Web, Software and Automation — the digital layer we&apos;re building toward.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {digital.divisions.map((d) => (
                    <span key={d.id} className="border border-line bg-white px-3 py-1.5 font-display text-xs font-medium text-ink-muted">
                      {d.label} <span className="ml-1 text-[10px] uppercase tracking-wider text-accent">Soon</span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="border border-line bg-paper-alt p-7">
                <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Technology — Coming Soon
                </p>
                <h3 className="text-2xl font-bold leading-tight text-ink">Built for power.</h3>
                <p className="mt-3 text-ink-muted">
                  Custom PC, Workstations, Servers and Infrastructure for creators and businesses.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {technology.divisions.map((d) => (
                    <span key={d.id} className="border border-line bg-white px-3 py-1.5 font-display text-xs font-medium text-ink-muted">
                      {d.label} <span className="ml-1 text-[10px] uppercase tracking-wider text-accent">Soon</span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="mt-6 border border-dashed border-line bg-paper p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">{labs.label} — Future Development</p>
                  <p className="mt-1 text-sm text-ink-muted">{labs.description}</p>
                </div>
                <span className="border border-line bg-paper-alt px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-ink-muted">Not yet available</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── One Brief. Multiple Outputs. ─────────────────── */}
      <section className="border-b border-line bg-paper-alt">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              One Brief. Multiple Outputs.
            </p>
            <h2 className="mt-4 text-center text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
              One brief.
              <br />
              <span className="text-accent">Every output.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-center text-ink-muted">
              Send one brief and receive a connected set — not disconnected files from
              disconnected suppliers.
            </p>
          </Reveal>
          <div className="mt-12 flex flex-col items-center">
            {["Photo", "Poster", "Social Graphic", "WhatsApp Status", "Video", "Motion Graphic", "YouTube Content", "Campaign System"].map((step, i) => (
              <div key={step} className="flex w-full flex-col items-center">
                <Reveal delay={i * 30} className="w-full max-w-sm">
                  <div className="flex min-h-12 w-full items-center justify-center border border-line bg-paper px-6 py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-ink shadow-sm">
                    <span className="mr-2 font-bold text-accent text-xs">0{i+1}</span>
                    {step}
                  </div>
                </Reveal>
                {i < 7 && (
                  <span aria-hidden className="my-1.5 text-accent">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
          <Reveal delay={120} className="mt-10 text-center">
            <ButtonLink href="/services" variant="secondary">
              See how it works
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* ── Portfolio strip ──────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading eyebrow="Selected Work" title="Work that works in the world." intro="New projects added as they are completed — never fabricated." />
            <Reveal delay={60} className="hidden shrink-0 md:block">
              <Link
                href="/portfolio"
                className="font-display text-sm font-semibold uppercase tracking-wider text-accent hover:underline underline-offset-4"
              >
                View all work →
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item, i) => (
              <Reveal key={item.id} delay={i * 60}>
                <Link href="/portfolio" className="group block">
                  <PortfolioMedia
                    src={item.image}
                    alt={item.title}
                    placeholder={item.placeholder}
                  />
                  <div className="pt-4">
                    <p className="font-display text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      {item.category}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold text-ink group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    {item.year && <p className="text-xs text-ink-muted">{item.year}</p>}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <ButtonLink href="/portfolio" variant="secondary" className="w-full">
              View all work
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── Evolution ──────────────────────────────────── */}
      <section className="border-y border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
              The Evolution
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Media → Creative → Digital → Technology
            </h2>
            <p className="mt-4 max-w-2xl text-paper/60">The honest trajectory — where we are, what&apos;s next, and what&apos;s being built for the future. No division is listed as available before it is.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { stage: "Today — Live", name: "CREATIVE", items: "Design · Photo · Video · Motion · Campaign Media", active: true },
              { stage: "Next — Building", name: "DIGITAL", items: "Web · Software · Automation", active: false },
              { stage: "Future — Planned", name: "TECHNOLOGY", items: "Custom PC · Workstations · Servers · Infrastructure · AI", active: false },
            ].map((col, i) => (
              <Reveal key={col.name} delay={i * 80}>
                <div className={`border p-6 md:p-7 ${col.active ? "border-accent-ink bg-paper/5" : "border-paper/15 bg-transparent"}`}>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-ink">
                    {col.stage}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">{col.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/60">{col.items}</p>
                  {!col.active && (
                    <span className="mt-4 inline-block border border-paper/20 px-2 py-1 font-display text-[10px] font-semibold uppercase tracking-wider text-paper/50">
                      Coming Soon
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10">
            <div className="border border-paper/10 bg-paper/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-display text-sm font-semibold text-paper">Want to be notified when Digital & Technology launch?</p>
                  <p className="text-sm text-paper/60">Join the waitlist — no spam, one email when each division opens.</p>
                </div>
                <ButtonLink href="/contact" variant="paper">Notify Me →</ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Political neutrality ───────────────────────── */}
      <section className="bg-paper-alt border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-xl font-bold text-ink">We design the message. You own the politics.</h2>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-muted">CS Media Studios is an independent creative studio. We provide creative services to lawful political parties, candidates, civic organisations, businesses, community organisations and independent campaigns. Providing a creative service does not constitute political endorsement.</p>
              </div>
              <Link href="/about" className="shrink-0 font-display text-xs font-semibold uppercase tracking-wider text-accent hover:underline underline-offset-4">About & neutrality →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
