import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-paper">
      <div className="mx-auto max-w-2xl px-5 py-24 text-center md:px-8">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink">
          Page not found.
        </h1>
        <p className="mt-5 text-lg text-ink-muted">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
