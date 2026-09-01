import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "paper";
type Size = "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = ButtonBaseProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type NativeButtonProps = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: never };

const base =
  "inline-flex items-center justify-center gap-2 rounded-none border font-display font-medium tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "border-accent bg-accent text-white hover:bg-accent-hover hover:border-accent-hover hover:-translate-y-0.5 hover:shadow-lift",
  secondary:
    "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
  ghost:
    "border-transparent text-ink underline decoration-line underline-offset-4 hover:decoration-ink",
  paper:
    "border-paper bg-paper text-ink hover:bg-white hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export function Button({ variant = "primary", size = "md", className, children, ...props }: NativeButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant = "primary", size = "md", className, children, ...props }: LinkButtonProps) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}
