"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { site } from "@/data/site";
import { MailIcon, WhatsAppIcon, PhoneIcon } from "@/components/icons";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const inputClass =
  "w-full rounded-none border border-line bg-white px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setStatus("submitting");

    if (!ENDPOINT) {
      setStatus("error");
      setError(
        "Contact form is not connected yet. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT to activate. Direct contact details are below."
      );
      return;
    }

    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Unable to reach our system. Check your connection and try again.");
    }
  }

  const contactLinks = [
    { icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: WhatsAppIcon, label: "WhatsApp", value: site.whatsapp, href: site.social.whatsapp },
    { icon: PhoneIcon, label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
        {contactLinks.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 border border-line bg-paper-alt p-5 transition-colors hover:border-ink"
          >
            <c.icon className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {c.label}
              </p>
              <p className="font-medium text-ink group-hover:text-accent">{c.value}</p>
            </div>
          </a>
        ))}
        <p className="px-1 text-sm text-ink-muted">
          Based in <span className="text-ink">{site.location}</span>. We work with
          clients across the country.
        </p>
      </aside>

      <div className="border border-line bg-white p-6 md:p-10">
        {status === "success" ? (
          <div className="py-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Message sent
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
              Thank you.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ink-muted">
              We&apos;ve received your message and will respond shortly.
            </p>
            <Button
              type="button"
              variant="secondary"
              className="mt-6"
              onClick={() => setStatus("idle")}
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
            <input type="hidden" name="form-type" value="contact" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-display text-sm font-semibold uppercase tracking-wide text-ink">
                  Name
                </label>
                <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-display text-sm font-semibold uppercase tracking-wide text-ink">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={inputClass} placeholder="you@email.co.za" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block font-display text-sm font-semibold uppercase tracking-wide text-ink">
                Subject
              </label>
              <input id="subject" name="subject" type="text" required className={inputClass} placeholder="What is it about?" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-display text-sm font-semibold uppercase tracking-wide text-ink">
                Message
              </label>
              <textarea id="message" name="message" rows={5} required className={inputClass} placeholder="Your message" />
            </div>
            {status === "error" && (
              <div role="alert" className="border border-red-300 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}
            <Button type="submit" size="lg" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send message"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
