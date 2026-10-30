"use client";

import { useEffect, useState, type ReactNode } from "react";
import { INSTAGRAM, LADY_BOSS, ROUTES, TIKTOK, WHATSAPP } from "@/lib/site";

const tones = {
  forest: "bg-olive text-forest hover:bg-butter-deep",
  cream: "bg-cream text-forest hover:bg-paper",
  butter: "bg-butter text-forest hover:bg-butter-deep",
  line: "border border-forest/15 bg-paper/70 text-forest hover:bg-paper",
  blush: "bg-blush text-forest hover:bg-white",
  berry: "!bg-[#bb3350] !text-[#f7f4ec] hover:!bg-[#9a2c44]",
  lilac: "!bg-[#bec1f4] !text-[#3d2916] hover:!bg-[#adb1ea]",
  pine: "!bg-[#0d3333] !text-[#cde1aa] hover:!bg-[#164444]",
} as const;

export function Pill({
  href,
  children,
  tone = "forest",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-display text-base leading-none text-forest italic transition-transform duration-300 hover:scale-[1.03] ${tones[tone]} ${className}`}
    >
      {children}
    </a>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[0.72rem] font-semibold tracking-[0.22em] uppercase ${
        light ? "text-cream/80" : "text-forest/70"
      }`}
    >
      {children}
    </p>
  );
}

const HOME_LINKS = [
  { href: "/#programas", label: "Programas" },
  { href: "/#enfoque", label: "Enfoque" },
  { href: "/#planes", label: "Planes" },
  { href: "/#historia", label: "Historia" },
];

export function Header({
  cta = { href: "/#programas", label: "Ver programas" },
  links,
  logoHref = ROUTES.home,
  overlay = false,
}: {
  cta?: { href: string; label: string; tone?: keyof typeof tones };
  links?: { href: string; label: string }[];
  logoHref?: string;
  overlay?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const bare = overlay && !scrolled && !open;
  const heavy = "font-[family-name:var(--font-archivo)] not-italic tracking-tight";
  const desktop = links ?? [
    ...HOME_LINKS,
    { href: ROUTES.vacaciones, label: "Vacaciones" },
    { href: ROUTES.hormonas, label: "Hormonas" },
    { href: ROUTES.acompanamiento, label: "1:1" },
  ];
  const mobile = links ?? [
    ...HOME_LINKS,
    { href: ROUTES.vacaciones, label: "Vacaciones sin restricción" },
    { href: ROUTES.hormonas, label: "Hazte amiga de tus hormonas" },
    { href: ROUTES.acompanamiento, label: "Consulta 1:1" },
  ];

  return (
    <header
      className={
        bare
          ? "fixed inset-x-0 top-0 z-40 border-b border-transparent bg-transparent"
          : overlay
            ? "fixed inset-x-0 top-0 z-40 border-b border-forest/10 bg-cream"
            : "sticky top-0 z-40 border-b border-forest/10 bg-cream/80 backdrop-blur-md"
      }
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 md:h-[4.5rem] md:px-8">
        <a href={logoHref} className="leading-none">
          <span className={overlay ? `${heavy} text-2xl text-[#0d3333]` : "font-display text-2xl font-medium tracking-tight text-forest italic"}>
            mafe
          </span>
          <span className={overlay ? `ml-1.5 ${heavy} text-xs uppercase text-[#0d3333]/70` : "ml-1.5 text-[0.68rem] font-semibold tracking-[0.18em] text-forest/70 uppercase"}>
            cerquera
          </span>
        </a>

        <nav
          className={`hidden items-center text-sm md:flex ${
            overlay
              ? `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-6 ${heavy} text-[#0d3333]`
              : "gap-7 font-medium text-forest/80"
          }`}
        >
          {desktop.map((link) => (
            <a key={link.href} href={link.href} className={overlay ? "hover:text-[#0d3333]/70" : "hover:text-forest"}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          {overlay ? (
            <a href={cta.href} className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm leading-none ${heavy} ${tones[cta.tone ?? "forest"]} ${overlay ? "!text-[#0d3333]" : ""}`}>
              {cta.label}
            </a>
          ) : (
            <Pill href={cta.href} tone={cta.tone}>{cta.label}</Pill>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={cta.href}
            className={`inline-flex items-center rounded-full px-3 py-2 text-sm leading-none ${overlay ? heavy : "font-display italic"} ${tones[cta.tone ?? "forest"]} ${overlay ? "!text-[#0d3333]" : ""}`}
          >
            {cta.label}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span className={`h-0.5 w-full transition ${overlay ? "bg-[#0d3333]" : "bg-forest"} ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-full transition ${overlay ? "bg-[#0d3333]" : "bg-forest"} ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full transition ${overlay ? "bg-[#0d3333]" : "bg-forest"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-forest/10 bg-cream px-5 py-4 md:hidden">
          <div className={`flex flex-col gap-3 text-base ${overlay ? `${heavy} text-[#0d3333]` : "font-medium"}`}>
            {mobile.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            {links ? null : (
              <Pill href={cta.href} className="mt-2">
                {cta.label}
              </Pill>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer({
  note = "Nutrición funcional y digestiva.",
  legal = "© 2026 Mafe Cerquera. Todos los derechos reservados.",
  className = "bg-forest text-cream",
}: {
  note?: string;
  legal?: string;
  className?: string;
}) {
  return (
    <footer className={className}>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-4xl italic">mafe cerquera</p>
          {note ? (
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">{note}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href={ROUTES.home} className="hover:text-butter">
            Inicio
          </a>
          <a href={ROUTES.vacaciones} className="hover:text-butter">
            Vacaciones sin restricción
          </a>
          <a href={ROUTES.hormonas} className="hover:text-butter">
            Hazte amiga de tus hormonas
          </a>
          <a href={ROUTES.acompanamiento} className="hover:text-butter">
            Consulta 1:1
          </a>
          <a href="/#planes" className="hover:text-butter">
            Planes 1:1
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-butter">
            WhatsApp
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-butter">
            @mafecerquerap.nutricion
          </a>
          <a href={TIKTOK} target="_blank" rel="noreferrer" className="hover:text-butter">
            TikTok
          </a>
          <a href={LADY_BOSS} target="_blank" rel="noreferrer" className="hover:text-butter">
            Lady Boss Club Colombia
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-4 text-xs text-cream/60 md:px-8">
        {legal}
      </div>
    </footer>
  );
}
