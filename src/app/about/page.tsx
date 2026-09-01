import { ButtonLink } from "@/components/Button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/about",
  title: "About — Good Design Gets Noticed",
  description:
    "CS Media Studios — Conqueror Supreme Creative & Technology Studio. A South African multimedia creative studio. We build visual presence. Politically neutral by design.",
});

const principles = [
  { title: "Design", body: "Composition, hierarchy and craft applied with care." },
  { title: "Communication", body: "Every element exists to carry your message clearly." },
  { title: "Consistency", body: "A recognisable presence across every format." },
  { title: "Professional execution", body: "Print-ready, digital-clear, delivered on time." },
  { title: "Adaptability", body: "One concept, many formats and touch points." },
  { title: "Strategic visual thinking", body: "Design decisions made with the goal in mind." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About — Conqueror Supreme Creative & Technology Studio"
        title={
          <>
            Good design
            <br />
            gets noticed.
          </>
        }
        intro="We create visual communication designed to give campaigns, organisations and ideas a stronger presence — then we build toward something larger."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Who we are
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  An independent multimedia creative studio.
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
                  <p>
                    <strong className="font-semibold text-ink">CS Media Studios</strong> is the public name for <strong className="font-semibold text-ink">Conqueror Supreme Creative &amp; Technology Studio</strong> — a South African independent studio built to grow from multimedia production into a broader creative, digital and technology company.
                  </p>
                  <p>
                    Today we are <strong className="font-semibold text-ink">Creative</strong>: Design, Photo, Video, Motion and Campaign Media — working with political parties, councillor and independent candidates, community organisations, NGOs, businesses, musicians, artists, events and individuals.
                  </p>
                  <p>
                    Tomorrow we expand into <strong className="font-semibold text-ink">Digital</strong> (Web, Software, Automation) and <strong className="font-semibold text-ink">Technology</strong> (Custom PC, Workstations, Servers, Infrastructure) — each honestly labelled &ldquo;Coming Soon&rdquo; until it is operational. No service is offered before it exists.
                  </p>
                </div>
                <div className="mt-6 border-l-2 border-accent pl-5">
                  <p className="font-display text-sm font-semibold italic text-ink">&ldquo;We build visual presence — so ideas are seen, remembered and used.&rdquo;</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-6">
                <div className="border border-line bg-paper-alt p-8 md:p-10">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Politically independent
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                    We design the message. You own the politics.
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink-muted">
                    CS Media Studios is an independent creative studio. We provide creative services to lawful political parties, candidates, civic organisations, businesses, community organisations and independent campaigns. Providing a creative service does not constitute political endorsement. We do not take sides.
                  </p>
                </div>
                <div className="border border-line bg-ink p-7 text-paper md:p-8">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-ink">Honest scale</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">
                    We are a small, focused studio — we do not fabricate a large team, fake clients, fake testimonials, fake awards or fake statistics. The quality of the work creates credibility. As we grow, we will say so clearly.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">The Evolution — Honestly Shown</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Media → Creative → Digital → Technology</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { stage: "Origin", name: "Media", items: "Posters, photo, video — the craft that started it.", active: false },
              { stage: "Today · Live", name: "Creative", items: "Design · Photo · Video · Motion · Campaign Media", active: true },
              { stage: "Next · Building", name: "Digital", items: "Web · Software · Automation", active: false },
              { stage: "Future · Planned", name: "Technology", items: "Custom PC · Workstations · Servers · Infrastructure · AI", active: false },
            ].map((col, i) => (
              <Reveal key={col.name} delay={i * 60}>
                <div className={`border p-6 ${col.active ? "border-accent-ink bg-paper/5" : "border-paper/15"}`}>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-ink">{col.stage}</p>
                  <h3 className="mt-2 font-display text-lg font-extrabold tracking-tight">{col.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">{col.items}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Philosophy"
            title="Six principles in everything we make."
            intro="Visual communication, craft, precision, consistency, multimedia and creative problem-solving — with growth built in."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70}>
                <div className="flex h-full flex-col bg-paper p-7">
                  <span className="font-display text-xs font-bold text-accent">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/services">Explore All Services</ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">See the Work</ButtonLink>
          </Reveal>
        </div>
      </section>

      <CTABanner title="The website itself is the first masterpiece." intro="If you feel the craft here, imagine what we do for your campaign." />
    </>
  );
}
