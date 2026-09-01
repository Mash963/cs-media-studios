import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import PortfolioMedia from "@/components/PortfolioMedia";
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
      {/* ── Cinematic Hero — art-directed ───────────────────── */}
      <section className="hero-gradient grain relative overflow-hidden text-paper">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/55" aria-hidden />
        <div className="grid-fine absolute inset-0 opacity-[0.035]" aria-hidden />
        {/* Huge typographic watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-start justify-end overflow-hidden" aria-hidden>
          <span className="watermark watermark-gold select-none pt-20 pr-[2vw] text-[22vw] leading-none md:text-[18vw] lg:text-[16rem] xl:text-[19rem]">
            CS
          </span>
        </div>
        <div className="pointer-events-none absolute left-[-2vw] bottom-[8%] hidden md:block" aria-hidden>
          <span className="watermark text-[11vw] leading-none opacity-[0.045] lg:text-[9rem]">CONQUEROR</span>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
          {/* Top technical bar */}
          <Reveal>
            <div className="mb-10 flex items-center justify-between border-b border-paper/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center bg-paper font-display text-xs font-extrabold tracking-widest text-ink">CS</span>
                <span className="hidden sm:inline font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/50">CS / 001 — EST. 2026 — South Africa</span>
                <span className="sm:hidden font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/50">CS / 001</span>
              </div>
              <span className="hidden md:inline font-display text-[10px] font-medium uppercase tracking-[0.2em] text-paper/35">CONQUEROR SUPREME — CREATIVE & TECHNOLOGY STUDIO</span>
              <span className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">Made in South Africa</span>
            </div>
          </Reveal>

          {/* Asymmetrical hero grid */}
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:items-end">
            <div>
              <Reveal>
                <p className="mb-4 flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                  <span className="h-px w-6 bg-gold" aria-hidden />
                  Conqueror Supreme
                </p>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="font-display text-[2.55rem] font-extrabold leading-[0.88] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4.6rem]">
                  <span className="block text-paper/90">CS MEDIA</span>
                  <span className="block text-paper">STUDIOS</span>
                </h1>
              </Reveal>
              <Reveal delay={110}>
                <p className="mt-4 font-display text-xs font-medium uppercase tracking-[0.2em] text-paper/40">Conqueror Supreme Creative & Technology Studio</p>
              </Reveal>
              <div className="rule-gold shimmer-line mt-6 w-20" aria-hidden />
              <Reveal delay={160}>
                <h2 className="mt-6 max-w-xl font-display text-[2.2rem] font-bold leading-[0.9] tracking-[-0.03em] sm:text-4xl md:text-5xl">
                  <span className="block text-paper">ONE STUDIO.</span>
                  <span className="block text-gold">EVERY FORMAT.</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 max-w-md font-display text-sm font-semibold uppercase tracking-[0.18em] leading-relaxed text-paper/70">
                  Design <span className="text-gold/80">·</span> Photo <span className="text-gold/80">·</span> Video <span className="text-gold/80">·</span> Motion <span className="text-gold/80">·</span> Campaign Media
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-2 font-display text-xs font-medium uppercase tracking-[0.18em] text-paper/30">Web · Software · Technology — Coming soon</p>
              </Reveal>
            </div>

            <div className="lg:pb-2">
              <Reveal delay={180}>
                <div className="border border-paper/10 bg-ink/40 p-6 backdrop-blur md:p-7">
                  <p className="label-studio text-gold">Start here</p>
                  <p className="mt-3 font-display text-base font-semibold leading-snug text-paper">A creative studio that proves its claim on its own homepage.</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/55">One brief becomes posters, social, video and motion — a connected system, not disconnected files.</p>
                  <div className="mt-6 flex flex-col gap-3">
                    <ButtonLink href="/order" size="lg" className="btn-shimmer btn-arrow justify-center">
                      Start a Project <span aria-hidden>→</span>
                    </ButtonLink>
                    <ButtonLink href="/portfolio" variant="paper" size="lg" className="btn-arrow justify-center">
                      Explore the Work <span aria-hidden>↓</span>
                    </ButtonLink>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-paper/10 pt-4">
                    <span className="label-studio text-paper/35">CS / 2026 — 001</span>
                    <span className="font-display text-xs text-paper/35">Design. Print. Digital.</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom studio strip */}
          <Reveal delay={300}>
            <div className="mt-12 grid grid-cols-3 gap-px overflow-hidden border border-paper/10 bg-paper/10 md:mt-16 md:max-w-3xl">
              {[
                { k: "SELECTED WORK", v: "Exhibition →", href: "/portfolio" },
                { k: "CAMPAIGN SYSTEM", v: "Visual System →", href: "/campaigns" },
                { k: "PRICING", v: "From R550 →", href: "/pricing" },
              ].map((s) => (
                <Link key={s.k} href={s.href} className="group bg-ink/60 px-4 py-4 backdrop-blur transition-colors hover:bg-ink/80 md:px-6">
                  <p className="label-studio text-paper/40 group-hover:text-gold transition-colors">{s.k}</p>
                  <p className="mt-1 font-display text-sm font-semibold text-paper flex items-center gap-1">{s.v} <span className="transition-transform group-hover:translate-x-1" aria-hidden>↗</span></p>
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Fine gold rule */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-gold/30 via-paper/5 to-transparent" aria-hidden />
          <div className="mt-3 flex flex-wrap gap-3 font-display text-[10px] uppercase tracking-[0.18em] text-paper/35">
            <span>Political Campaigns</span><span className="text-paper/15">·</span><span>Businesses</span><span className="text-paper/15">·</span><span>Musicians</span><span className="text-paper/15">·</span><span>Events</span><span className="text-paper/15">·</span><span>Organisations</span>
          </div>
        </div>
      </section>

      {/* ── Signature statement — art-directed ─────────────── */}
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div className="pointer-events-none absolute right-[-2vw] top-6 hidden lg:block" aria-hidden>
          <span className="font-display text-[9rem] font-extrabold leading-none tracking-tighter text-ink/[0.04]">CS</span>
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-28">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden />
              <p className="label-studio text-accent">The Studio Statement — CS / 002</p>
            </div>
          </Reveal>
          <Reveal delay={40}>
            <p className="mt-6 font-display text-[2rem] font-semibold leading-[0.95] tracking-tight text-ink sm:text-4xl md:text-5xl">
              We don&apos;t just make
              <span className="block font-extrabold text-ink">content.</span>
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-2 font-display text-[2rem] font-extrabold leading-[0.95] tracking-tighter text-gold sm:text-4xl md:text-5xl">
              We build visual presence.
            </p>
          </Reveal>
          <div className="rule-gold mt-6 w-16" aria-hidden />
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
              From a single poster to a complete campaign, from a photograph to a finished
              video, CS Media Studios turns ideas into visual communication designed to be
              seen, remembered and used.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/portfolio" variant="secondary" className="btn-arrow">
                Enter the Exhibition <span aria-hidden>→</span>
              </ButtonLink>
              <Link href="/services" className="btn-arrow inline-flex items-center gap-2 border border-line bg-paper-alt px-6 py-3 font-display text-sm font-medium text-ink hover:border-gold hover:text-ink transition-colors">
                Explore Services <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-ink-muted/50">
            <span className="h-px w-6 bg-line" aria-hidden /> CS / MADE IN SOUTH AFRICA — 2026
          </div>
        </div>
      </section>

      {/* ── Creative ecosystem — creative menu ─────────────── */}
      <section className="bg-paper-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6">
              <div>
                <p className="label-studio text-gold">CS / 003 — Creative — Live Today</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Four divisions. <span className="font-light text-ink-muted">One studio.</span></h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">Design, Photo, Video and Motion — live now. Every brief becomes a connected set of outputs.</p>
              </div>
              <span className="border border-gold/25 bg-gold/10 px-3 py-1 label-studio text-gold-deep">4 Divisions Live — Book Now</span>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {creative.divisions.map((d, i) => (
              <Link
                key={d.id}
                href="/services"
                className="card-lift group relative overflow-hidden bg-paper p-7 md:p-8"
              >
                <span className="pointer-events-none absolute right-4 top-4 font-display text-5xl font-extrabold leading-none tracking-tighter text-ink/[0.04] group-hover:text-gold/[0.06] transition-colors">
                  0{i+1}
                </span>
                <span className="label-studio text-gold-deep">
                  {d.label} <span className="ml-2 text-[9px] tracking-[0.18em] text-emerald-700 border border-emerald-200 bg-emerald-50 px-1.5 py-0.5">Live</span>
                </span>
                <h3 className="relative mt-3 font-display text-xl font-semibold text-ink group-hover:text-ink transition-colors md:text-2xl">{d.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">{d.description}</p>
                <div className="relative mt-4 flex flex-wrap gap-1.5">
                  {d.services.slice(0,3).map(s => (
                    <span key={s} className="bg-paper-alt px-2 py-1 font-display text-[10px] uppercase tracking-wide text-ink-muted">{s}</span>
                  ))}
                </div>
                <span className="btn-arrow relative mt-5 inline-flex items-center gap-1.5 label-studio text-ink group-hover:text-gold-deep transition-colors">
                  {d.cta.label} <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
          <Reveal delay={80} className="mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-gold/30" aria-hidden />
            <p className="label-studio text-ink-muted">All four accept briefs — <Link href="/order" className="font-bold text-ink underline underline-offset-4 decoration-gold/40 hover:decoration-gold">Start a Project →</Link></p>
            <span className="h-px w-6 bg-gold/30" aria-hidden />
          </Reveal>
        </div>
      </section>

      {/* ── Campaigns — not the identity, one category ─────── */}
      <section className="border-y border-line bg-ink text-paper relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-0 hidden lg:block" aria-hidden>
          <span className="font-display text-[14rem] font-extrabold leading-none tracking-tighter text-paper/[0.035]">014</span>
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <Reveal>
              <div>
                <p className="label-studio text-gold">CS / 004 — Campaign Services — One Category</p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-[2.6rem]">
                  Campaigns are
                  <br />
                  <span className="font-light text-paper/70">visual systems.</span>
                </h2>
                <div className="rule-gold mt-4 w-12" aria-hidden />
                <p className="mt-5 text-lg leading-relaxed text-paper/60">
                  A campaign rarely needs one poster. It needs a consistent visual language across print, social media, events, photography and video.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-paper/70">
                  {["Candidate posters","Ward campaigns","Campaign branding","Social graphics","Large-format","Motion & Video","Photo enhancement","Campaign asset systems"].map(w => (
                    <li key={w} className="flex items-center gap-2"><span className="h-1 w-1 bg-gold" aria-hidden />{w}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink href="/campaigns" variant="paper" className="btn-arrow btn-shimmer">
                    Build a Campaign <span aria-hidden>→</span>
                  </ButtonLink>
                </div>
                <p className="mt-4 label-studio text-paper/35">Creative studio first — campaigns one specialised category</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="border border-paper/10 bg-paper/5 p-6 backdrop-blur md:p-8">
                <div className="flex items-center justify-between">
                  <p className="label-studio text-gold">One Brief → Every Format</p>
                  <span className="label-studio text-paper/30">CS / SYSTEM</span>
                </div>
                <div className="mt-6 space-y-2">
                  {[
                    { step: "01", label: "Candidate portrait & branding locked" },
                    { step: "02", label: "Poster & flyer system" },
                    { step: "03", label: "Social · WhatsApp · Story kit" },
                    { step: "04", label: "Large-format & event artwork" },
                    { step: "05", label: "Video & motion announcements" },
                  ].map(r => (
                    <div key={r.step} className="flex items-center gap-4 border border-paper/10 bg-ink/50 px-4 py-3 transition-colors hover:border-gold/20 hover:bg-ink/70">
                      <span className="font-display text-sm font-bold text-gold">{r.step}</span>
                      <span className="font-display text-sm text-paper/80">{r.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 label-studio text-paper/30">One visual system · Every touchpoint</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Digital + Technology — honest, not overpowering ── */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
              <div>
                <p className="label-studio text-ink-muted">The Expansion — Honestly Labelled</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">What&apos;s next <span className="font-light text-ink-muted">— not for sale yet.</span></h2>
                <p className="mt-2 max-w-xl text-sm text-ink-muted">We show the future without pretending it&apos;s available. No fake availability.</p>
              </div>
              <Link href="/services" className="btn-arrow label-studio text-ink hover:text-gold-deep transition-colors">View full roadmap <span aria-hidden>→</span></Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="border border-line bg-paper-alt p-7 card-lift">
                <p className="label-studio text-gold-deep">02 — Digital — Coming Soon</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink">The next chapter.</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">Web, Software and Automation — the digital layer we&apos;re building toward.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {digital.divisions.map((d) => (
                    <span key={d.id} className="border border-line bg-white px-3 py-1.5 label-studio text-ink-muted">
                      {d.label} <span className="ml-1 text-gold-deep">Soon</span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="border border-line bg-paper-alt p-7 card-lift">
                <p className="label-studio text-gold-deep">03 — Technology — Coming Soon</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink">Built for power.</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">Custom PC, Workstations, Servers and Infrastructure for creators and businesses.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {technology.divisions.map((d) => (
                    <span key={d.id} className="border border-line bg-white px-3 py-1.5 label-studio text-ink-muted">
                      {d.label} <span className="ml-1 text-gold-deep">Soon</span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="mt-6 border border-dashed border-gold/20 bg-gold/faint p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="label-studio text-gold-deep">{labs.label} — Future Development</p>
                  <p className="mt-1 text-sm text-ink-muted">{labs.description}</p>
                </div>
                <span className="border border-line bg-paper px-3 py-1 label-studio text-ink-muted">Not yet available</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── One Brief. Multiple Outputs. ─────────────────── */}
      <section className="border-b border-line bg-paper-alt">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="text-center label-studio text-gold-deep">CS / 005 — One Brief. Multiple Outputs.</p>
            <h2 className="mt-3 text-center font-display text-3xl font-extrabold leading-tight tracking-tighter text-ink sm:text-4xl md:text-5xl">
              One brief.
              <br />
              <span className="text-gold-deep">Every output.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-ink-muted">
              Send one brief and receive a connected set — not disconnected files from disconnected suppliers.
            </p>
            <div className="mx-auto mt-4 h-px w-12 bg-gold/30" aria-hidden />
          </Reveal>
          <div className="mt-10 flex flex-col items-center">
            {["Photo", "Poster", "Social Graphic", "WhatsApp Status", "Video", "Motion Graphic", "YouTube Content", "Campaign System"].map((step, i) => (
              <div key={step} className="flex w-full flex-col items-center">
                <Reveal delay={i * 28} className="w-full max-w-sm">
                  <div className="card-lift flex min-h-12 w-full items-center justify-center border border-line bg-paper px-6 py-3 text-center shadow-sm">
                    <span className="mr-3 font-display text-xs font-bold text-gold-deep">0{i+1}</span>
                    <span className="font-display text-sm font-semibold uppercase tracking-wide text-ink">{step}</span>
                    <span className="ml-auto h-px w-6 bg-gold/20 hidden sm:block" aria-hidden />
                  </div>
                </Reveal>
                {i < 7 && (
                  <span aria-hidden className="my-1.5 text-gold-deep">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
          <Reveal delay={120} className="mt-10 text-center">
            <ButtonLink href="/services" variant="secondary" className="btn-arrow">
              See how it works <span aria-hidden>→</span>
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* ── Portfolio — exhibition ─────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
            <Reveal>
              <div>
                <p className="label-studio text-gold-deep">CS / 006 — Selected Work — Exhibition</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Work that <span className="font-light text-ink-muted">works in the world.</span></h2>
                <p className="mt-2 max-w-xl text-sm text-ink-muted">New projects added as completed — never fabricated. Give real artwork enormous priority.</p>
              </div>
            </Reveal>
            <Reveal delay={60} className="hidden shrink-0 md:block">
              <ButtonLink href="/portfolio" variant="secondary" className="btn-arrow">
                Enter the Exhibition <span aria-hidden>→</span>
              </ButtonLink>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item, i) => (
              <Reveal key={item.id} delay={i * 60}>
                <Link href="/portfolio" className="group block">
                  <div className="img-zoom border border-line bg-paper-alt">
                    <PortfolioMedia
                      src={item.image}
                      alt={item.title}
                      placeholder={item.placeholder}
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="label-studio text-gold-deep">
                        {item.category} <span className="mx-1 text-ink-muted/40">·</span> {item.year}
                      </p>
                      <h3 className="mt-1 font-display text-base font-semibold leading-tight text-ink group-hover:text-gold-deep transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-line bg-paper text-ink-muted transition-colors group-hover:border-gold/30 group-hover:bg-gold/10 group-hover:text-gold-deep">
                      <span aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 md:hidden">
            <ButtonLink href="/portfolio" variant="secondary" className="btn-arrow w-full justify-center">
              Enter the Exhibition <span aria-hidden>→</span>
            </ButtonLink>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gold/20" aria-hidden />
            <span className="label-studio text-ink-muted/50">Project 001 — 004 / CS Exhibition</span>
            <span className="h-px w-8 bg-gold/20" aria-hidden />
          </div>
        </div>
      </section>

      {/* ── Evolution — honest ─────────────────────────── */}
      <section className="border-y border-line bg-ink text-paper relative overflow-hidden">
        <div className="pointer-events-none absolute right-6 top-6 hidden text-gold/10 md:block" aria-hidden>
          <span className="font-display text-7xl font-extrabold tracking-tighter">2026</span>
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="label-studio text-gold">The Evolution — Honest Trajectory</p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Media <span className="font-light text-paper/40">→</span> Creative <span className="font-light text-paper/40">→</span> Digital <span className="font-light text-paper/40">→</span> Technology
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/55">Where we are, what&apos;s next, and what&apos;s being built. No division listed as available before it is.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { stage: "Today — Live", name: "CREATIVE", items: "Design · Photo · Video · Motion · Campaign Media", active: true },
              { stage: "Next — Building", name: "DIGITAL", items: "Web · Software · Automation", active: false },
              { stage: "Future — Planned", name: "TECHNOLOGY", items: "Custom PC · Workstations · Servers · Infrastructure · AI", active: false },
            ].map((col, i) => (
              <Reveal key={col.name} delay={i * 80}>
                <div className={`relative overflow-hidden border p-6 md:p-7 card-lift ${col.active ? "border-gold/30 bg-paper/5" : "border-paper/12 bg-transparent"}`}>
                  <span className="pointer-events-none absolute right-3 top-3 font-display text-4xl font-extrabold leading-none tracking-tighter text-paper/[0.04]">0{i+1}</span>
                  <p className="label-studio text-gold">
                    {col.stage}
                  </p>
                  <h3 className="relative mt-2 font-display text-2xl font-extrabold tracking-tight">{col.name}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-paper/60">{col.items}</p>
                  {!col.active && (
                    <span className="relative mt-4 inline-block border border-paper/15 px-2 py-1 label-studio text-paper/40">
                      Coming Soon
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border border-gold/15 bg-paper/5 p-6">
              <div>
                <p className="font-display text-sm font-semibold text-paper">Want to be notified when Digital & Technology launch?</p>
                <p className="text-sm text-paper/50">Join the waitlist — one email when each division opens.</p>
              </div>
              <ButtonLink href="/contact" variant="paper" className="btn-arrow btn-shimmer">
                Notify Me <span aria-hidden>→</span>
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Political neutrality — subtle ─────────────── */}
      <section className="bg-paper-alt border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-px w-6 shrink-0 bg-gold/40 hidden sm:block" aria-hidden />
                <div>
                  <h2 className="font-display text-base font-bold text-ink">We design the message. You own the politics.</h2>
                  <p className="mt-1 max-w-2xl text-xs leading-relaxed text-ink-muted">Independent studio for lawful parties, candidates, civic orgs, businesses & independents. Service ≠ endorsement.</p>
                </div>
              </div>
              <Link href="/about" className="btn-arrow shrink-0 label-studio text-gold-deep hover:text-ink transition-colors">About & neutrality <span aria-hidden>→</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
