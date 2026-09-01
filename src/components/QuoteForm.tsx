"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-none border border-line bg-white px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-0";
const selectClass = cn(inputClass, "appearance-none");

const STEPS = [
  { n: "01", title: "Who are you?", desc: "Your contact details" },
  { n: "02", title: "What do you need?", desc: "Services & formats" },
  { n: "03", title: "How much?", desc: "Quantity & deliverables" },
  { n: "04", title: "When?", desc: "Deadline & urgency" },
  { n: "05", title: "Project brief", desc: "The details that matter" },
  { n: "06", title: "Submit", desc: "Review & send" },
] as const;

const needOptions = ["Design", "Photo", "Video", "Motion", "Campaign", "Digital", "Other"] as const;

export function Field({ label, name, required, optional, hint, children }: { label: string; name: string; required?: boolean; optional?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <label htmlFor={name} className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
          {label}
        </label>
        <span className="text-xs font-medium text-ink-muted">
          {required ? "Required" : optional ? "Optional" : ""}
        </span>
      </div>
      {children}
      {hint && <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{hint}</p>}
    </div>
  );
}

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);

  function toggleNeed(v: string) {
    setNeeds((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  }

  function canContinue() {
    if (typeof document === "undefined") return true;
    const form = document.getElementById("quote-form") as HTMLFormElement | null;
    if (!form) return true;
    // Validate only visible step fields
    const stepEl = form.querySelector(`[data-step="${step}"]`);
    if (!stepEl) return true;
    const inputs = stepEl.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea");
    for (const el of Array.from(inputs)) {
      if (el instanceof HTMLInputElement && el.type === "checkbox" && !el.required) continue;
      if (!el.checkValidity()) return false;
    }
    if (step === 2 && needs.length === 0) return false;
    return true;
  }

  // lightweight reactive validation
  function validateStep() {
    canContinue();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setStatus("submitting");

    if (!ENDPOINT) {
      setStatus("error");
      setError(
        "This form is not yet connected to a Formspree endpoint. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your environment to activate submissions. Direct contact: csupreme@gmail.com · 069 312 1571"
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    // ensure needs are sent
    data.set("needs", needs.join(", "));

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setNeeds([]);
        setStep(1);
      } else {
        const body = await res.json().catch(() => null);
        setStatus("error");
        setError(body?.errors?.[0]?.message || "Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      setStatus("error");
      setError("Unable to reach our system. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-paper-alt p-8 text-center md:p-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">Brief Received</p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink">BRIEF RECEIVED.</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-muted">
          Your project request has landed. We&apos;ll review the requirements and respond with a quotation.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button type="button" variant="primary" onClick={() => setStatus("idle")}>
            Submit another brief
          </Button>
          <a href="https://wa.me/27693121571" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-ink px-6 py-3 font-display text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors">
            WhatsApp Us →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form id="quote-form" onSubmit={handleSubmit} onChange={validateStep} className="space-y-0" noValidate>
      <input type="hidden" name="form-type" value="quote" />
      <input type="hidden" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      {/* hidden needs field for Formspree */}
      <input type="hidden" name="needs" value={needs.join(", ")} />

      {/* Stepper */}
      <div className="mb-8 border-b border-line pb-6">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">Tell us what you&apos;re building — 6 steps</p>
        <div className="mt-4 flex gap-2">
          {STEPS.map((s, idx) => (
            <button
              key={s.n}
              type="button"
              onClick={() => idx + 1 < step && setStep(idx + 1)}
              className={cn(
                "flex-1 border px-2 py-2 text-center transition-colors md:px-3",
                idx + 1 === step
                  ? "border-ink bg-ink text-paper"
                  : idx + 1 < step
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700 cursor-pointer"
                    : "border-line bg-paper-alt text-ink-muted"
              )}
              aria-current={idx + 1 === step ? "step" : undefined}
            >
              <span className="block font-display text-[11px] font-bold tracking-wider">{s.n}</span>
              <span className="hidden font-display text-xs font-medium md:block">{s.title}</span>
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="font-display text-sm font-semibold text-ink">
            Step {String(step).padStart(2, "0")} — {STEPS[step - 1].title}
          </p>
          <p className="text-xs text-ink-muted">{STEPS[step - 1].desc}</p>
        </div>
        <div className="mt-3 h-1 bg-line">
          <div className="h-full bg-accent transition-all duration-500" style={{ width: `${(step / STEPS.length) * 100}%` }} />
        </div>
      </div>

      {/* Step 1 */}
      <div data-step="1" className={cn(step === 1 ? "block space-y-6" : "hidden")}>
        <Field label="Full name" name="full_name" required>
          <input id="full_name" name="full_name" type="text" required className={inputClass} placeholder="Your full name" autoComplete="name" />
        </Field>
        <Field label="Organisation / Party / Business" name="organisation" optional hint="Political party, ward, NGO, business or 'Personal'">
          <input id="organisation" name="organisation" type="text" className={inputClass} placeholder="e.g. Ward 12 Campaign · ABC Business" autoComplete="organization" />
        </Field>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Email" name="email" required>
            <input id="email" name="email" type="email" required className={inputClass} placeholder="you@email.co.za" autoComplete="email" />
          </Field>
          <Field label="Phone / WhatsApp" name="phone" required>
            <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="+27 69 312 1571" autoComplete="tel" />
          </Field>
        </div>
      </div>

      {/* Step 2 */}
      <div data-step="2" className={cn(step === 2 ? "block space-y-6" : "hidden")}>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink">What do you need? <span className="text-xs font-medium normal-case tracking-normal text-ink-muted">Select all that apply — Required</span></p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {needOptions.map((opt) => (
              <label
                key={opt}
                className={cn(
                  "flex cursor-pointer items-center gap-2 border px-4 py-3 transition-colors",
                  needs.includes(opt) ? "border-ink bg-ink text-paper" : "border-line bg-white hover:border-ink"
                )}
              >
                <input
                  type="checkbox"
                  checked={needs.includes(opt)}
                  onChange={() => { toggleNeed(opt); setTimeout(validateStep, 0); }}
                  className="h-4 w-4 accent-accent"
                  aria-label={opt}
                />
                <span className="font-display text-sm font-medium">{opt}</span>
              </label>
            ))}
          </div>
          {/* hidden required input to tie validation */}
          <input type="hidden" name="needs_required" value={needs.length > 0 ? "ok" : ""} required={needs.length === 0 ? false : true} />
          {needs.length === 0 && <p className="mt-2 text-xs text-amber-700">Select at least one service.</p>}
        </div>
        <Field label="If Other, please specify" name="other_detail" optional>
          <input id="other_detail" name="other_detail" type="text" className={inputClass} placeholder="Describe other needs (optional)" />
        </Field>
        <Field label="Project type detail" name="project_type" required>
          <select id="project_type" name="project_type" required defaultValue="" className={selectClass}>
            <option value="" disabled>Select type</option>
            <option>Political campaign poster</option>
            <option>Councillor / candidate branding</option>
            <option>Event poster / invitation</option>
            <option>Social media campaign graphics</option>
            <option>Large-format artwork</option>
            <option>Campaign visual system</option>
            <option>Photo enhancement / retouching</option>
            <option>Video editing</option>
            <option>Motion graphics</option>
            <option>Custom / mixed</option>
          </select>
        </Field>
      </div>

      {/* Step 3 */}
      <div data-step="3" className={cn(step === 3 ? "block space-y-6" : "hidden")}>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Quantity — how many designs?" name="quantity" required>
            <select id="quantity" name="quantity" required defaultValue="" className={selectClass}>
              <option value="" disabled>Select quantity</option>
              <option>1 design</option>
              <option>2 – 5 designs</option>
              <option>6 – 10 designs</option>
              <option>11 – 20 designs</option>
              <option>20–49 designs</option>
              <option>50+ designs (volume pricing)</option>
              <option>Not sure yet</option>
            </select>
          </Field>
          <Field label="Required formats" name="format" required>
            <select id="format" name="format" required defaultValue="" className={selectClass}>
              <option value="" disabled>Select format</option>
              <option>Print — A4</option>
              <option>Print — A3</option>
              <option>Print — A2</option>
              <option>Print — A1 / A0</option>
              <option>Digital — Social media (1080×1350)</option>
              <option>Digital — Story / Status (1080×1920)</option>
              <option>Digital — Widescreen / Video (1920×1080)</option>
              <option>Multiple / Not sure</option>
            </select>
          </Field>
        </div>
        <Field label="Video / motion duration (if applicable)" name="duration" optional hint="e.g. 15s reel, 60s promo, 3 min event video">
          <input id="duration" name="duration" type="text" className={inputClass} placeholder="e.g. 30 seconds · 2 minutes (optional)" />
        </Field>
        <Field label="Photo count (if photo work)" name="photo_count" optional>
          <input id="photo_count" name="photo_count" type="text" className={inputClass} placeholder="e.g. 5 images for retouching (optional)" />
        </Field>
      </div>

      {/* Step 4 */}
      <div data-step="4" className={cn(step === 4 ? "block space-y-6" : "hidden")}>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Deadline" name="deadline" required hint="When do you need the final files?">
            <input id="deadline" name="deadline" type="date" required className={inputClass} />
          </Field>
          <Field label="Campaign / event date" name="campaign_date" optional hint="If it relates to an event or election date">
            <input id="campaign_date" name="campaign_date" type="date" className={inputClass} />
          </Field>
        </div>
        <Field label="Urgency" name="urgency" required>
          <select id="urgency" name="urgency" required defaultValue="" className={selectClass}>
            <option value="" disabled>Select urgency</option>
            <option>Standard (3–5 business days)</option>
            <option>Priority (1–2 business days)</option>
            <option>Urgent / Same-day (rush fee may apply)</option>
            <option>Flexible / No rush</option>
          </select>
        </Field>
        <Field label="Budget range" name="budget" required>
          <select id="budget" name="budget" required defaultValue="" className={selectClass}>
            <option value="" disabled>Select budget</option>
            <option>Under R500</option>
            <option>R500 – R1,000</option>
            <option>R1,000 – R2,000</option>
            <option>R2,000 – R5,000</option>
            <option>R5,000 – R10,000</option>
            <option>R10,000+</option>
            <option>Flexible / Not sure</option>
          </select>
        </Field>
      </div>

      {/* Step 5 */}
      <div data-step="5" className={cn(step === 5 ? "block space-y-6" : "hidden")}>
        <Field label="Description / Brief" name="brief" required hint="Goal, context, audience, where it will be used">
          <textarea id="brief" name="brief" rows={4} required className={inputClass} placeholder="Describe the project, the goal and the context." />
        </Field>
        <Field label="Main message / Required text" name="message" required hint="Exact wording to appear — we will not change factual text without instruction">
          <textarea id="message" name="message" rows={3} required className={inputClass} placeholder="The main message or wording to appear on the design. Include names, slogans, dates exactly as they should read." />
        </Field>
        <Field label="People featured" name="people" optional hint="Names of people to appear — ensure you have permission to provide their photos">
          <input id="people" name="people" type="text" className={inputClass} placeholder="Names to feature (optional)" />
        </Field>
        <Field label="Reference material" name="reference" optional hint="Links, style references or inspiration">
          <textarea id="reference" name="reference" rows={2} className={inputClass} placeholder="Links or descriptions of the look and feel you want (optional)" />
        </Field>
        <Field label="Assets — logos / photos / files" name="assets" optional hint="Describe what you'll provide. We'll share a secure upload method on quotation — do not email large files blindly.">
          <textarea id="assets" name="assets" rows={2} className={inputClass} placeholder="Describe the assets you'll provide, or how we should receive them." />
        </Field>
        <Field label="Additional information" name="additional" optional>
          <textarea id="additional" name="additional" rows={2} className={inputClass} placeholder="Anything else we should know." />
        </Field>
      </div>

      {/* Step 6 */}
      <div data-step="6" className={cn(step === 6 ? "block space-y-6" : "hidden")}>
        <div className="border border-line bg-paper-alt p-6">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">Before you send</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-muted">
            <li>You confirm you have permission to provide supplied photographs, logos, text and assets.</li>
            <li>You are responsible for factual accuracy of names, dates, political claims, contact info and event info.</li>
            <li>Pricing is for design only — printing quoted separately. Rush fees may apply.</li>
          </ul>
        </div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
          <input type="checkbox" name="authorisation" required className="mt-0.5 h-4 w-4 shrink-0 accent-accent" />
          <span>
            I confirm that the information and materials I will supply are authorised for use and that I am responsible for the accuracy of supplied campaign claims, names, dates and other factual information.
          </span>
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
          <input type="checkbox" name="terms" required className="mt-0.5 h-4 w-4 shrink-0 accent-accent" />
          <span>
            I have read and agree to the{" "}
            <a href="/terms" target="_blank" rel="noopener" className="text-accent underline underline-offset-2">
              Terms & Conditions
            </a>{" "}
            and the{" "}
            <a href="/privacy" target="_blank" rel="noopener" className="text-accent underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
          <input type="checkbox" name="popia" required className="mt-0.5 h-4 w-4 shrink-0 accent-accent" />
          <span>
            I consent to CS Media Studios processing my information for quotation and project communication per the{" "}
            <a href="/popia" target="_blank" rel="noopener" className="text-accent underline underline-offset-2">
              POPIA Notice
            </a>
            .
          </span>
        </label>
      </div>

      {status === "error" && (
        <div role="alert" className="mt-6 border border-red-300 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
        <div className="flex gap-3">
          {step > 1 && (
            <Button type="button" variant="secondary" onClick={() => setStep((s) => Math.max(1, s - 1))}>
              ← Back
            </Button>
          )}
        </div>
        <div className="flex gap-3">
          {step < 6 ? (
            <Button
              type="button"
              onClick={() => {
                const form = document.getElementById("quote-form") as HTMLFormElement | null;
                if (form) {
                  const stepEl = form.querySelector(`[data-step="${step}"]`);
                  if (stepEl) {
                    const inputs = stepEl.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea");
                    let valid = true;
                    for (const el of Array.from(inputs)) {
                      if (el instanceof HTMLInputElement && el.type === "checkbox" && el.name === "needs") continue;
                      if (!el.checkValidity()) {
                        el.reportValidity();
                        valid = false;
                        break;
                      }
                    }
                    if (step === 2 && needs.length === 0) {
                      setError("Please select at least one service in Step 02.");
                      return;
                    }
                    if (!valid) return;
                    setError("");
                  }
                }
                setStep((s) => Math.min(6, s + 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Continue →
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send Project Brief →"}
            </Button>
          )}
        </div>
      </div>

      <p className="mt-4 text-center font-display text-xs uppercase tracking-[0.18em] text-ink-muted/60">
        Step {step} of {STEPS.length} · Secure via Formspree · Encrypted in transit
      </p>
    </form>
  );
}
