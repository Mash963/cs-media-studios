import { ButtonLink } from "@/components/Button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import Check from "@/components/Check";
import { designTiers, videoTiers, photoTiers, motionTiers, socialPackages, volumeTiers, volumeExclusions, included, printFormats, digitalFormats } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/pricing",
  title: "Pricing",
  description:
    "Transparent pricing for CS Media Studios — Graphic Design from R550, Video from R350, Photo from R150/image, Motion from R500, Social packages from R2,500/month. Volume discounts up to 25%. Printing quoted separately.",
});

function TierGrid({ tiers }: { tiers: typeof designTiers }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier, i) => (
        <Reveal key={tier.id} delay={(i % 3) * 80}>
          <article
            className={cn(
              "flex h-full flex-col border p-7 transition-all duration-300 hover:-translate-y-1",
              tier.featured
                ? "border-ink bg-ink text-paper shadow-lift"
                : "border-line bg-paper-alt"
            )}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <h3
                  className={cn(
                    "font-display text-sm font-semibold uppercase tracking-[0.18em]",
                    tier.featured ? "text-accent-ink" : "text-accent"
                  )}
                >
                  {tier.name}
                </h3>
                {tier.featured && (
                  <span className="border border-accent-ink px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wider text-accent-ink">
                    Popular
                  </span>
                )}
              </div>
              <p
                className={cn(
                  "mt-5 font-display text-4xl font-bold tracking-tight",
                  tier.featured ? "text-white" : "text-ink"
                )}
              >
                {tier.price}
                {tier.priceNote && <span className="ml-1 text-sm font-medium opacity-60">{tier.priceNote}</span>}
              </p>
              <p className={cn("mt-3 text-sm", tier.featured ? "text-paper/70" : "text-ink-muted")}>
                {tier.description}
              </p>
            </div>

            <ul className="mt-6 flex-1 space-y-2.5">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <span className={tier.featured ? "text-accent-ink" : "text-accent"}>
                    <Check />
                  </span>
                  <span className={tier.featured ? "text-paper/90" : "text-ink"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink
                href="/order"
                variant={tier.featured ? "paper" : "secondary"}
                className="w-full"
              >
                Get Started
              </ButtonLink>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing — Transparent & Honest"
        title={
          <>
            Clear pricing.
            <br />
            Honest scope.
          </>
        }
        intro="Transparent starting prices for design only. Large campaigns and custom packages are quoted individually. Printing is quoted separately."
      />

      {/* ── Graphic Design ─────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="01 — Graphic Design" title="Posters & campaign creative." intro="Five tiers from essential to custom campaign systems. All include 2 revision rounds." />
          <div className="mt-10">
            <TierGrid tiers={designTiers} />
          </div>
          <Reveal delay={100}>
            <div className="mt-8 flex items-start gap-4 border border-amber-200 bg-amber-50 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-amber-500 font-display text-sm font-bold text-white">!</span>
              <p className="text-sm leading-relaxed text-amber-900">
                <strong className="font-semibold">Printing is quoted separately.</strong> Prices above cover design only. We prepare files for print and can guide you on printer specifications. Rush / same-day service available for additional fee.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Volume Discounts ───────────────────────────── */}
      <section className="border-y border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">Volume Discounts — Design Fees Only</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              The more you build.
              <br />
              <span className="text-accent-ink">The more you save.</span>
            </h2>
            <p className="mt-4 max-w-xl text-paper/60">Volume discounts apply to qualifying <strong className="text-paper">design fees only</strong>. Exclusions apply.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {volumeTiers.map((v, i) => (
              <Reveal key={v.id} delay={i * 60}>
                <div className={cn("flex h-full flex-col border p-7", v.discount === "25% OFF" ? "border-accent-ink bg-paper/5" : "border-paper/15 bg-transparent")}>
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-ink">
                    {v.label}
                  </span>
                  <p className={cn("mt-4 font-display text-3xl font-bold", v.discount === "25% OFF" ? "text-accent-ink" : "text-white")}>{v.discount}</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/60">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="border border-paper/15 bg-paper/5 p-6">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper/60">What it applies to</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">Volume discounts apply to qualifying design fees when multiple designs are ordered together. The discount is calculated on the design portion only.</p>
              </div>
              <div className="border border-paper/15 bg-paper/5 p-6">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper/60">Excluded from discounts</p>
                <ul className="mt-3 grid grid-cols-2 gap-1.5 text-sm text-paper/70">
                  {volumeExclusions.map(e => (
                    <li key={e} className="flex items-center gap-2"><span className="h-1 w-1 bg-accent-ink" aria-hidden />{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={160} className="mt-8">
            <ButtonLink href="/order" variant="paper">Request Volume Quote →</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* ── Video Pricing ──────────────────────────────── */}
      <section className="bg-paper-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="02 — Video Editing" title="Video pricing." intro="From quick social edits to premium campaign packages. Final pricing depends on footage length, complexity, revisions, turnaround and deliverables." />
          <div className="mt-10">
            <TierGrid tiers={videoTiers} />
          </div>
        </div>
      </section>

      {/* ── Photo Pricing ──────────────────────────────── */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="03 — Photo Editing" title="Photo pricing." intro="Per-image pricing. Enhancement to advanced manipulation and restoration." />
          <div className="mt-10">
            <TierGrid tiers={photoTiers} />
          </div>
        </div>
      </section>

      {/* ── Motion Pricing ─────────────────────────────── */}
      <section className="border-t border-line bg-paper-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="04 — Motion Graphics" title="Motion pricing." intro="Bring posters and announcements to life for social feeds and WhatsApp." />
          <div className="mt-10">
            <TierGrid tiers={motionTiers} />
          </div>
        </div>
      </section>

      {/* ── Social Media Packages ──────────────────────── */}
      <section className="border-y border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">Social Media Packages — Monthly</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Stay visible. Every week.</h2>
            <p className="mt-3 max-w-xl text-paper/60">Monthly retainers with clear deliverables and revision limits. Cancel anytime.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {socialPackages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 70}>
                <div className={cn("flex h-full flex-col border p-7", pkg.featured ? "border-accent-ink bg-paper text-ink" : "border-paper/15 bg-transparent")}>
                  <h3 className={cn("font-display text-sm font-semibold uppercase tracking-[0.18em]", pkg.featured ? "text-accent" : "text-accent-ink")}>{pkg.name}</h3>
                  <p className={cn("mt-4 font-display text-4xl font-bold tracking-tight", pkg.featured ? "text-ink" : "text-white")}>
                    {pkg.price}
                    <span className="ml-1 text-sm font-medium opacity-60">{pkg.period}</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {pkg.features.map(f => (
                      <li key={f} className={cn("flex items-start gap-2.5 text-sm", pkg.featured ? "text-ink" : "text-paper/80")}>
                        <span className={pkg.featured ? "text-accent" : "text-accent-ink"}><Check /></span>{f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink href="/order" variant={pkg.featured ? "primary" : "paper"} className="w-full">Choose {pkg.name}</ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-6 text-center font-display text-xs uppercase tracking-[0.18em] text-paper/40">Deliverables and revision limits defined per package. Additional requests quoted separately.</p>
          </Reveal>
        </div>
      </section>

      {/* What is included */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="What's Included"
            title="Standard design scope."
            intro="Every package includes a defined design concept and up to two reasonable revision rounds. Additional revisions or major changes may incur additional charges."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 60}>
                <div className="flex h-full flex-col bg-paper p-6">
                  <span className="font-display text-xs font-bold text-accent">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-paper-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-ink">A4 → A0</span>
                  <div className="h-px w-8 bg-line" />
                </div>
                <h2 className="mt-2 text-3xl font-semibold text-ink">Print formats</h2>
                <p className="mt-2 text-sm text-ink-muted">Print-ready PDFs prepared for the printers you use.</p>
              </Reveal>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {printFormats.map((f) => (
                  <div
                    key={f.code}
                    className="flex items-center justify-between py-4 font-display"
                  >
                    <span className="text-sm font-semibold text-ink">{f.code}</span>
                    <span className="text-sm text-ink-muted">{f.size}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Reveal delay={80}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-ink">1080</span>
                  <div className="h-px w-8 bg-line" />
                </div>
                <h2 className="mt-2 text-3xl font-semibold text-ink">Digital formats</h2>
                <p className="mt-2 text-sm text-ink-muted">Pixel-perfect for every platform your audience lives on.</p>
              </Reveal>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {digitalFormats.map((f) => (
                  <div
                    key={f.code}
                    className="flex items-center justify-between py-4 font-display"
                  >
                    <span className="text-sm font-semibold text-ink">{f.code}</span>
                    <span className="text-sm text-ink-muted">{f.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Reveal delay={120}>
            <div className="mt-10 border border-line bg-paper p-6">
              <p className="text-sm leading-relaxed text-ink-muted">
                Final pricing depends on footage length, complexity, number of revisions, turnaround and deliverables. Large or urgent work is quoted clearly before production begins.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Ready for a quotation?"
        intro="Describe your campaign or event and we'll quote it clearly — no obligation until you approve."
      />
    </>
  );
}
