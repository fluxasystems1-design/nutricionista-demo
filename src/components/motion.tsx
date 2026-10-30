"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Marquee({
  items,
  className = "bg-olive text-forest",
  face = "script",
  mark = "✦",
  compact = false,
}: {
  items: string[];
  className?: string;
  face?: "script" | "display";
  mark?: string;
  compact?: boolean;
}) {
  const loop = [...items, ...items];
  const type =
    face === "display"
      ? compact
        ? "font-display text-sm tracking-[0.14em] uppercase md:text-base"
        : "font-display text-2xl tracking-tight uppercase md:text-3xl"
      : "font-display text-lg italic md:text-2xl";
  return (
    <div className={`overflow-hidden ${compact ? "py-3" : "py-4"} ${className}`}>
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className={`flex items-center gap-8 ${type}`}>
            {item}
            <span aria-hidden className="text-current/50">
              {mark}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
