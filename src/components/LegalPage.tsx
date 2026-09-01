import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro?: string;
  updated?: string;
  notice?: string;
  sections: LegalSection[];
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  notice,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          {updated && (
            <Reveal>
              <p className="mb-8 text-sm text-ink-muted">Last updated: {updated}</p>
            </Reveal>
          )}
          {notice && (
            <Reveal>
              <p className="mb-8 border-l-2 border-accent bg-paper-alt p-5 text-sm leading-relaxed text-ink-muted">
                {notice}
              </p>
            </Reveal>
          )}
          <ol className="space-y-10">
            {sections.map((s, i) => (
              <Reveal key={s.heading} as="li" delay={Math.min(i * 20, 120)}>
                <h2 className="font-display text-xl font-semibold text-ink">
                  <span className="mr-3 text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                <div className="mt-3 space-y-3 pl-9 leading-relaxed text-ink-muted">
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
