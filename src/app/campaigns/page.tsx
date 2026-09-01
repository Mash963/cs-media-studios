import { ButtonLink } from "@/components/Button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/campaigns",
  title: "Campaign Services — Visual Systems",
  description:
    "Campaigns are visual systems — candidate posters, ward campaigns, branding, social graphics, large-format, motion, video and photo enhancement from one studio.",
});

const flow = [
  { label: "One Campaign Concept", note: "Colour, type, name lock-up, visual language locked once" },
  { label: "A3 Print Poster", note: "Street poster — built for distance and daylight" },
  { label: "A4 Poster / Flyer", note: "Hand-to-hand and community distribution" },
  { label: "Social Media Post", note: "Feed — 1080×1350, legible on small screens" },
  { label: "Story / WhatsApp Status", note: "Vertical — 1080×1920, thumb-stopping" },
  { label: "Digital Banner", note: "Widescreen and event screens" },
  { label: "Video / Motion Graphic", note: "Animated announcement for social and WhatsApp" },
  { label: "Campaign Asset System", note: "A prepared library — every format, one system" },
];

const deliverables = [
  "Candidate posters",
  "Ward campaigns",
  "Campaign branding",
  "Event campaigns",
  "Social graphics",
  "Large-format artwork (A3–A0)",
  "Motion graphics",
  "Video edits",
  "Photo enhancement",
  "Campaign asset systems",
];

export default function CampaignsPage() {
  return (
    <>
      <PageHero
        eyebrow="Campaign Services"
        title={
          <>
            Campaigns are
            <br />
            visual systems.
          </>
        }
        intro="A campaign rarely needs one poster. It needs a consistent visual language across print, social media, events, photography and video — built once, deployed everywhere."
      />

      {/* Flow */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="mb-2 text-center font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              One concept · Every touch point
            </p>
            <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">One concept becomes every format.</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-ink-muted">
              We don&apos;t deliver disconnected files. We design a system — then adapt it rigorously into every format your audience will see.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col items-center">
            {flow.map((step, i) => (
              <div key={step.label} className="flex w-full flex-col items-center">
                <Reveal delay={i * 35} className="w-full max-w-xl">
                  <div className="flex items-center gap-4 border border-line bg-paper-alt px-6 py-5 md:px-8">
                    <span className="font-display text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1">
                      <p className="font-display text-base font-semibold text-ink">{step.label}</p>
                      <p className="text-xs leading-relaxed text-ink-muted">{step.note}</p>
                    </div>
                  </div>
                </Reveal>
                {i < flow.length - 1 && (
                  <span aria-hidden className="my-2 text-accent">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why a system */}
      <section className="border-y border-line bg-paper-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Consistency is credibility
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  Recognisable everywhere your message appears.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  When a poster, a flyer, a social post and a banner all belong to the same
                  campaign, the message starts to be trusted. Consistency builds presence —
                  presence builds authority.
                </p>
                <div className="mt-8 border border-line bg-paper p-6">
                  <p className="font-display text-sm font-semibold text-ink">What we deliver</p>
                  <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-ink-muted">
                    {deliverables.map(d => (
                      <li key={d} className="flex items-center gap-2"><span className="h-1 w-1 bg-accent" aria-hidden />{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <div className="space-y-4">
              {[
                { title: "A defined colour and type direction", body: "Chosen once, applied everywhere — no accidental rebrands." },
                { title: "A consistent name and slogan lock-up", body: "So every piece is instantly recognisable as yours." },
                { title: "Templates that make every format a variation", body: "One idea, intelligently adapted — not rebuilt from scratch." },
                { title: "A prepared asset library", body: "Files ready for print and digital — delivered organised." },
                { title: "Formats engineered for each medium", body: "Print accuracy and digital clarity handled correctly." },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="flex items-start gap-4 border border-line bg-paper p-5">
                    <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                    <div>
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Political neutrality inline */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <Reveal>
            <div className="border border-paper/15 bg-paper/5 p-6 md:p-8">
              <h2 className="font-display text-lg font-bold">We design the message. You own the politics.</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-paper/60">
                CS Media Studios is an independent creative studio. We provide creative services to lawful political parties, candidates, civic organisations, businesses, community organisations and independent campaigns. Providing a creative service does not constitute political endorsement. We do not take sides — we build visual presence for lawful campaigns.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Build your campaign as a system, not a pile of files.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
              Tell us about your campaign — ward, candidate, message, timeline — and we&apos;ll design the system behind it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/order" size="lg">
                Build a Campaign →
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary" size="lg">
                View Pricing
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner title="One brief. Every output." intro="Start with the campaign — we'll map every format from there." />
    </>
  );
}
