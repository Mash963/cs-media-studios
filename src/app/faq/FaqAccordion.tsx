"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question} className="py-1">
            <h2>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span
                  className={cn(
                    "font-display text-lg font-semibold transition-colors",
                    isOpen ? "text-ink" : "text-ink hover:text-accent"
                  )}
                >
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center border border-line font-display text-lg transition-transform",
                    isOpen && "rotate-45"
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h2>
            <div
              id={`faq-${i}`}
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 leading-relaxed text-ink-muted">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="mt-12 text-center">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Still have a question?
        </h2>
        <p className="mt-3 text-ink-muted">We&apos;re happy to help.</p>
        <div className="mt-6 flex justify-center gap-3">
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
          <ButtonLink href="/order">Start a Project</ButtonLink>
        </div>
      </div>
    </div>
  );
}
