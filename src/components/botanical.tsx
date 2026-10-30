export function Blob({
  className = "",
  color = "var(--lilac)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute animate-drift rounded-[58%_42%_48%_52%/46%_58%_42%_54%] ${className}`}
      style={{ background: color, ["--spin" as string]: "-8deg" }}
    />
  );
}

export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      aria-hidden
      className={`pointer-events-none absolute animate-drift ${className}`}
    >
      <path
        d="M18 62c2-22 18-40 46-46-2 24-16 42-42 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M22 58c10-8 22-16 36-22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Bloom({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      aria-hidden
      className={`pointer-events-none absolute animate-drift-slow ${className}`}
    >
      <g fill="currentColor">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="40"
            cy="18"
            rx="8"
            ry="16"
            transform={`rotate(${deg} 40 40)`}
            opacity="0.9"
          />
        ))}
        <circle cx="40" cy="40" r="7" fill="var(--butter)" />
      </g>
    </svg>
  );
}
