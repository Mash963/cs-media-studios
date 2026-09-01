"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PortfolioMediaProps {
  src: string;
  alt: string;
  placeholder: string;
  className?: string;
  aspect?: string;
  sizes?: string;
}

export default function PortfolioMedia({
  src,
  alt,
  placeholder,
  className,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: PortfolioMediaProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative w-full overflow-hidden bg-ink", aspect, className)}>
      {failed ? (
        <Placeholder label={placeholder} />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={false}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          onError={() => setFailed(true)}
        />
      )}
      {/* subtle gold hairline on hover */}
      <span className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-gold/15" aria-hidden />
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0F0F12] via-[#1A1A1E] to-[#0F0F12]">
      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
        <div className="h-px w-12 bg-gold/30" aria-hidden />
        <span className="mt-4 font-display text-2xl font-bold uppercase tracking-[0.14em] text-paper/90">
          {label}
        </span>
        <span className="mt-2 font-display text-[10px] uppercase tracking-[0.2em] text-gold/60">
          CS / Exhibition — Work in Progress
        </span>
        <div className="mt-4 h-px w-12 bg-gold/30" aria-hidden />
        <span className="mt-3 font-display text-[10px] uppercase tracking-[0.2em] text-paper/25">Project — CS Media Studios</span>
      </div>
    </div>
  );
}
