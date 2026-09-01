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
    <div className={cn("relative w-full overflow-hidden bg-paper-alt", aspect, className)}>
      {failed ? (
        <Placeholder label={placeholder} />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={false}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1F3A5F] via-[#172C49] to-[#10121a]">
      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
        <div className="h-px w-10 bg-white/30" aria-hidden="true" />
        <span className="mt-4 font-display text-2xl font-bold uppercase tracking-[0.15em] text-white/90">
          {label}
        </span>
        <span className="mt-3 max-w-[16rem] text-[11px] uppercase tracking-[0.2em] text-white/40">
          Work in Progress
        </span>
        <div className="mt-4 h-px w-10 bg-white/30" aria-hidden="true" />
      </div>
    </div>
  );
}
