"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/** PNG recortado, sin fondo, con el mismo pop de sticker de las referencias. */
export function PngSticker({
  src,
  className = "",
  rotate = -10,
  delay = 0,
  flip = false,
  enter,
}: {
  src: string;
  className?: string;
  rotate?: number;
  delay?: number;
  flip?: boolean;
  enter?: "right";
}) {
  const reduce = useReducedMotion();
  const fromRight = enter === "right";
  const anchorRef = useRef<HTMLDivElement>(null);
  const inView = useInView(anchorRef, { once: true, amount: 0.25 });

  if (fromRight) {
    return (
      <div ref={anchorRef} className={`pointer-events-none absolute z-[2] select-none ${className}`} aria-hidden>
        <motion.div
          initial={reduce ? false : { x: 280, opacity: 0 }}
          animate={reduce || !inView ? undefined : { x: 0, opacity: 1, y: [0, -12, 0] }}
          style={{ rotate }}
          transition={
            reduce
              ? undefined
              : {
                  x: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
                  opacity: { duration: 0.35, delay },
                  y: {
                    duration: 5.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.9,
                  },
                }
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            draggable={false}
            className={`h-auto w-full object-contain drop-shadow-[0_16px_24px_rgba(74,39,19,0.22)] ${flip ? "-scale-x-100" : ""}`}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={`pointer-events-none absolute z-[2] select-none ${className}`}
      initial={reduce ? false : fromRight ? { x: 280, opacity: 0, rotate } : { scale: 0.55, rotate: rotate - 18, opacity: 0 }}
      whileInView={fromRight ? { x: 0, opacity: 1, rotate } : { scale: 1, rotate, opacity: 1 }}
      viewport={{ once: true, amount: fromRight ? 0.5 : 0.15 }}
      animate={reduce ? undefined : { y: [0, -12, 0] }}
      transition={
        reduce
          ? undefined
          : fromRight
            ? {
                x: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
                opacity: { duration: 0.35, delay },
                y: {
                  duration: 5.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay + 0.9,
                },
              }
            : {
                scale: { type: "spring", stiffness: 220, damping: 14, delay },
                opacity: { duration: 0.35, delay },
                rotate: { type: "spring", stiffness: 220, damping: 14, delay },
                y: {
                  duration: 5.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay + 0.45,
                },
              }
      }
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        draggable={false}
        className={`h-auto w-full object-contain drop-shadow-[0_16px_24px_rgba(74,39,19,0.22)] ${flip ? "-scale-x-100" : ""}`}
      />
    </motion.div>
  );
}
