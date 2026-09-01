import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal>
        <h2 className="text-3xl font-semibold leading-[1.05] text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={80}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
