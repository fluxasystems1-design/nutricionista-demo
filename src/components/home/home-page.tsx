"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PngSticker } from "@/components/png-sticker";
import { Header } from "@/components/chrome";
import { Marquee, Reveal } from "@/components/motion";
import {
  ENFOQUE,
  INSTAGRAM,
  LADY_BOSS,
  PRECIOS,
  ROUTES,
  TIKTOK,
  WHATSAPP,
} from "@/lib/site";

const slideEase = [0.25, 0.1, 0.25, 1] as const;

export function HomePage() {
  return (
    <>
      <Header
        overlay
        links={[
          { href: "#programas", label: "Programas" },
          { href: "#enfoque", label: "Enfoque" },
          { href: "#voces", label: "Voces" },
        ]}
        cta={{ href: "#programas", label: "Quiero empezar" }}
      />
      <main className="gals-type">
        <Hero />
        <Mejorar />
        <Caminos />
        <Historias />
        <SeparadorPromesa />
        <Enfoque />
        <Marquee
          face="display"
          mark="★"
          className="bg-[#0d3333] text-[#cde1aa]"
          items={[
            "entiende tu cuerpo",
            "deja las restricciones",
            "hábitos reales",
            "sin restricciones",
            "tu mejor versión",
            "escuchar el cuerpo",
          ]}
        />
        <Credenciales />
        <CierreComunidad />
      </main>
      <Pie />
    </>
  );
}

function SeparadorPromesa() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/media/home/separador-cambio.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
      />
      <div className="relative flex min-h-[30rem] items-center justify-center px-5 py-14 md:min-h-[34rem] md:px-8">
        <div className="w-full max-w-xl rounded-[1.75rem] bg-[#fffdf8]/90 px-6 py-8 text-center shadow-[0_18px_40px_rgba(13,51,51,0.16)] backdrop-blur-[2px] md:px-10 md:py-10">
          <p className="font-display text-[1.9rem] leading-[1.02] text-[#0d3333] md:text-5xl">
            Solo tú puedes iniciar este cambio.
          </p>
          <p className="mt-4 text-xl leading-snug font-semibold text-[#0d3333] md:text-[1.65rem]">
            No se trata de restringirte. Se trata de conectar con tu cuerpo.
          </p>
          <p className="mt-5 font-display text-[1.85rem] leading-tight text-[#0d3333] italic md:text-4xl">
            Aquí te espero para empezarlo juntas.
          </p>
          <a
            href="#programas"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold tracking-[0.08em] text-white uppercase"
          >
            Comenzar
          </a>
        </div>
      </div>
    </section>
  );
}

function CarruselEnfoque() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % ENFOQUE.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  const items = reduce
    ? ENFOQUE.map((text, i) => ({ text, n: String(i + 1).padStart(2, "0") }))
    : Array.from({ length: 4 }, (_, offset) => {
        const i = (index + offset) % ENFOQUE.length;
        return { text: ENFOQUE[i], n: String(i + 1).padStart(2, "0") };
      });

  return (
    <ul
      className="relative mt-8 grid gap-3 overflow-hidden md:grid-cols-2 lg:grid-cols-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {items.map((item) => (
          <motion.li
            key={item.n}
            layout
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -36 }}
            transition={{ duration: 0.5, ease: slideEase }}
            className="flex items-start gap-3 rounded-[1.35rem] bg-white px-5 py-4 shadow-[0_8px_22px_rgba(13,51,51,0.08)]"
          >
            <span className="font-display text-2xl leading-none text-[#b2bb68] italic">{item.n}</span>
            <span className="min-w-0 text-sm leading-relaxed text-[#3d2916] md:text-base">{item.text}</span>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

const CAMINOS = [
  {
    href: ROUTES.acompanamiento,
    kicker: "Consulta privada · 90 días",
    title: "Consulta 1:1",
    price: `${PRECIOS.acompanamiento.cop} · ${PRECIOS.acompanamiento.eur}`,
    image: "/media/home/camino-consulta.jpg",
    imageClass: "object-center",
    aspect: "aspect-[1024/677]",
    alt: "Mafe Cerquera en su sala",
    panel: true,
  },
  {
    href: ROUTES.vacaciones,
    kicker: "Reto · 5 días",
    title: "Vacaciones sin restricción",
    price: `Desde ${PRECIOS.vacacionesBasico.cop} · ${PRECIOS.vacacionesBasico.eur}`,
    image: "/media/home/camino-vacaciones.jpg",
    imageClass: "object-[center_22%]",
    aspect: "aspect-[3/4]",
    alt: "Mafe Cerquera en su sala",
    panel: true,
  },
  {
    href: ROUTES.hormonas,
    kicker: "Programa · 4 semanas",
    title: "Hazte amiga de tus hormonas",
    price: `Desde ${PRECIOS.hormonasBasico.usd} USD · ${PRECIOS.hormonasBasico.eur}`,
    image: "/media/home/camino-hormonas.jpg",
    imageClass: "object-top",
    aspect: "aspect-[3/4]",
    alt: "Mafe Cerquera en su cocina",
    panel: true,
  },
];

const MEJORAR = [
  {
    href: ROUTES.acompanamiento,
    title: "Mi digestión",
    text: "Siéntete más cómoda al comer",
    image: "/media/home/logo-digestion.png",
    logo: "left",
  },
  {
    href: ROUTES.acompanamiento,
    title: "Mi cuerpo",
    text: "Avanza hacia tus objetivos físicos",
    image: "/media/home/logo-cuerpo.png",
    logo: "right",
  },
  {
    href: ROUTES.hormonas,
    title: "Mis hormonas",
    text: "Comprende mejor tu ciclo",
    image: "/media/home/logo-hormonas.png",
    logo: "left",
  },
  {
    href: ROUTES.vacaciones,
    title: "Mis hábitos",
    text: "Quiero comer mejor sin vivir haciendo dietas.",
    image: "/media/home/logo-habitos.png",
    logo: "right",
  },
] as const;

function Mejorar() {
  return (
    <section className="bg-[#e2d5e8] px-5 pt-10 pb-0 md:px-10 md:pt-14 md:pb-0">
      <div className="mx-auto max-w-xl md:max-w-4xl">
        <h2 className="text-center font-display text-[2rem] leading-[0.95] text-[#0d3333] md:text-[2.4rem]">
          ¿Qué quieres mejorar?
        </h2>
        <p className="mt-3 text-center text-[0.95rem] leading-relaxed text-[#0d3333]/80">
          Elige el camino que más conecta contigo.
        </p>
        <div className="mt-8 flex flex-col gap-3 md:mt-10 md:grid md:grid-cols-2 md:gap-4">
          {MEJORAR.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-[1.35rem] border border-[#0d3333]/20 bg-[#fffdf8] px-3 py-2.5 shadow-[0_8px_20px_rgba(13,51,51,0.06)]"
            >
              <img
                src={item.image}
                alt=""
                className={`h-16 w-16 shrink-0 object-contain ${item.logo === "right" ? "order-2 md:order-none" : ""}`}
              />
              <span className={`min-w-0 flex-1 ${item.logo === "right" ? "order-1 text-right md:order-none md:text-left" : ""}`}>
                <span className="block font-display text-[1.35rem] leading-[0.95] text-[#0d3333]">
                  {item.title}
                </span>
                <span className="mt-1 block text-[0.9rem] leading-snug text-[#0d3333]/80">{item.text}</span>
              </span>
              <span aria-hidden className="order-3 grid h-8 w-8 shrink-0 place-items-center rounded-full text-lg text-[#0d3333]">
                →
              </span>
            </a>
          ))}
        </div>
        <div className="relative z-10 mx-auto mt-8 -mb-8 md:max-w-xl" aria-hidden>
          <div className="flex items-center gap-2 rounded-full bg-[#fffdf8] py-2.5 pr-2.5 pl-2.5 shadow-[0_14px_32px_rgba(13,51,51,0.14)]">
            <p className="min-w-0 truncate rounded-2xl bg-[#0d3333] px-4 py-2.5 text-[0.98rem] font-semibold text-[#fffdf8]">
              Tres formas de empezar
            </p>
            <span className="ml-auto grid h-10 w-10 shrink-0 place-items-center text-[#0d3333]/45">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M6 11a6 6 0 0 0 12 0M12 17v3" />
              </svg>
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eeedeb] text-[#0d3333]/55">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </span>
          </div>
          <span className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.65rem] leading-none text-[#7f93c9]">★</span>
        </div>
      </div>
    </section>
  );
}

function TarjetaCamino({ item, wide = false }: { item: (typeof CAMINOS)[number]; wide?: boolean }) {
  return (
    <a
      href={item.href}
      className={`flex flex-col overflow-hidden rounded-[1.6rem] border-2 border-[#0d3333] bg-[#111] text-white ${wide ? "md:flex-row" : ""}`}
    >
      <img
        src={item.image}
        alt={item.alt}
        className={`${item.aspect} w-full object-cover ${item.imageClass} ${wide ? "md:aspect-auto md:h-auto md:w-[56%] md:shrink-0 md:self-center" : ""}`}
      />
      <div className={`flex flex-1 flex-col px-4 pt-4 pb-4 ${wide ? "md:justify-center md:px-10 md:py-8" : ""}`}>
        <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-white/75 uppercase">{item.kicker}</p>
        <p className={`mt-2 font-display text-[1.7rem] leading-[0.95] ${wide ? "" : "min-h-[3.25rem]"}`}>{item.title}</p>
        <p className="mt-2 text-sm text-white/80">{item.price}</p>
        <span className={`mt-4 inline-flex items-center justify-center rounded-full bg-[#e7ef9a] px-5 py-3 text-sm font-semibold tracking-[0.14em] text-[#0d3333] uppercase ${wide ? "md:w-fit md:px-8" : ""}`}>
          Ver plan
        </span>
      </div>
    </a>
  );
}

function Caminos() {
  return (
    <section id="programas" className="relative scroll-mt-24 overflow-x-clip bg-[#eeedeb] px-5 pt-16 pb-2 md:px-8 md:pt-20">
      <div className="relative mx-auto max-w-6xl">
      <div className="flex flex-col gap-4 md:gap-5">
        <TarjetaCamino item={CAMINOS[0]} wide />
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {CAMINOS.slice(1).map((item) => (
            <TarjetaCamino key={item.href} item={item} />
          ))}
        </div>
      </div>
      </div>
      <div className="relative h-40 md:h-48">
        <div className="absolute inset-y-0 left-0 right-36 z-[3] flex items-center justify-start md:right-[21rem] md:justify-end md:pr-3">
          <div className="flex items-center gap-3 md:gap-4">
            {[
              { href: INSTAGRAM, label: "Instagram", icon: "instagram" as const },
              { href: TIKTOK, label: "TikTok", icon: "tiktok" as const },
              { href: WHATSAPP, label: "WhatsApp", icon: "whatsapp" as const },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="grid h-14 w-14 place-items-center rounded-full border-2 border-[#0d3333] text-[#0d3333] transition hover:bg-[#0d3333] hover:text-[#fffdf8] md:h-16 md:w-16"
              >
                <RedIcon name={item.icon} className="h-7 w-7" />
              </a>
            ))}
          </div>
        </div>
        <PngSticker src="/stickers/tenedor.png" enter="right" className="-right-20 top-10 w-52 md:-right-6 md:top-4 md:w-[22rem]" rotate={-8} />
      </div>
    </section>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const userSet = useRef(false);
  const [sound, setSound] = useState(false);
  const [focus, setFocus] = useState(false);
  const [hold, setHold] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduce) {
      video.pause();
      video.muted = false;
      return;
    }
    let alive = true;
    video.muted = true;
    void video.play().catch(() => {
      if (!alive || userSet.current) return;
    });
    return () => {
      alive = false;
    };
  }, [reduce]);

  useEffect(() => {
    if (!focus) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeFocus();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [focus]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    const leave = () => {
      if (document.fullscreenElement === video) return;
      video.controls = false;
    };
    document.addEventListener("fullscreenchange", leave);
    video.addEventListener("webkitendfullscreen", leave);
    return () => {
      document.removeEventListener("fullscreenchange", leave);
      video.removeEventListener("webkitendfullscreen", leave);
    };
  }, [reduce]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    userSet.current = true;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (!nextMuted) {
      video.volume = 1;
      void video.play();
    }
    setSound(!nextMuted);
  };

  const playWithSound = () => {
    const video = videoRef.current;
    if (!video) return;
    userSet.current = true;
    video.muted = false;
    video.volume = 1;
    void video.play();
    setSound(true);
  };

  const closeFocus = () => {
    const video = videoRef.current;
    setFocus(false);
    if (!video) return;
    video.muted = true;
    setSound(false);
  };

  const openFullscreen = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const ios = video as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
    if (typeof ios.webkitEnterFullscreen === "function" && /iP(hone|ad|od)/.test(navigator.userAgent)) {
      ios.webkitEnterFullscreen();
      return;
    }
    video.controls = true;
    void video.requestFullscreen?.().catch(() => {
      if (!reduce) video.controls = false;
      ios.webkitEnterFullscreen?.();
    });
  };

  const onVideoClick = () => {
    if (reduce) return;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    if (mobile) {
      if (focus) {
        closeFocus();
        return;
      }
      setHold(frameRef.current?.offsetHeight ?? 0);
      setFocus(true);
      playWithSound();
      return;
    }
    const video = videoRef.current;
    if (!video || !video.muted) return;
    toggleSound();
  };

  const frame = (
      <div
        ref={frameRef}
        className={
          focus
            ? "fixed top-[36%] left-1/2 z-[90] w-[calc(100vw-0.75rem)] -translate-x-1/2 -translate-y-1/2 md:static md:top-auto md:left-auto md:z-10 md:w-auto md:translate-x-0 md:translate-y-0"
            : "relative z-10"
        }
      >
      <div className="rounded-[1.95rem] bg-[#fffdf8] p-1.5 shadow-[0_16px_36px_rgba(13,51,51,0.16)] md:rounded-[2.25rem] md:p-2">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-black md:rounded-[1.85rem]">
      <video
        ref={videoRef}
        className="w-full aspect-video bg-black object-contain"
        autoPlay={!reduce}
        muted
        loop
        playsInline
        controls={!!reduce}
        preload="metadata"
        aria-label="Mafe Cerquera en su cocina"
        onClick={onVideoClick}
      >
        <source src="/media/home/hero.mp4" type="video/mp4" />
      </video>
      {!reduce && !sound ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onVideoClick();
          }}
          className="absolute top-1/2 left-1/2 z-20 w-[min(16rem,calc(100%-2.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#f7f4ec] px-5 py-3 text-center text-[#0d3333] shadow-[0_14px_32px_rgba(13,51,51,0.2)]"
        >
          <span className="block text-sm">Tu video ya comenzó</span>
          <span className="mt-1 block text-sm font-semibold underline underline-offset-4">Haz clic para escuchar</span>
        </button>
      ) : null}

      {!reduce ? (
        <button
          type="button"
          onClick={openFullscreen}
          aria-label="Ver en pantalla completa"
          className="absolute top-3 right-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-[#0d3333]/80 text-[#fffdf8] shadow-[0_8px_18px_rgba(13,51,51,0.28)] md:top-4 md:right-4"
        >
          <ExpandIcon />
        </button>
      ) : null}
      {!reduce && sound ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            toggleSound();
          }}
          aria-pressed="true"
          aria-label="Quitar el audio"
          className="absolute right-4 bottom-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-[#0d3333] text-[#cde1aa] shadow-[0_8px_18px_rgba(13,51,51,0.28)] md:right-6 md:bottom-6"
        >
          <SoundIcon />
        </button>
      ) : null}
      </div>
      </div>
      </div>
  );

  return (
    <section
      id="inicio"
      className={`bg-[#e2d5e8] px-1.5 pt-20 md:overflow-x-clip md:px-10 md:pt-24 lg:px-16 ${focus ? "overflow-visible" : "overflow-x-clip"}`}
    >
      <h1 className="sr-only">Mafe Cerquera, nutricionista funcional y digestiva</h1>
      {focus ? (
        <button
          type="button"
          className="fixed inset-0 z-[80] bg-black/95 md:hidden"
          aria-label="Cerrar el video"
          onClick={closeFocus}
        />
      ) : null}
      <div className="relative mx-auto max-w-7xl">
      {focus ? <div className="md:hidden" style={{ height: hold }} aria-hidden /> : null}
      {frame}
      <PngSticker src="/stickers/sol-luna.png" className="top-2 -left-16 hidden w-32 md:top-4 md:-left-[7.5rem] md:block md:w-44" rotate={-14} />
      <PngSticker src="/stickers/pomelo.png" className="top-1 -right-14 hidden w-28 md:top-2 md:-right-[7rem] md:block md:w-40" rotate={16} delay={0.08} />
      <PngSticker src="/stickers/peonia.png" className="bottom-1 -left-16 hidden w-32 md:bottom-2 md:-left-[7.5rem] md:block md:w-48" rotate={10} delay={0.12} />
      <PngSticker src="/stickers/romero.png" className="top-[36%] -right-16 hidden w-32 md:-right-[7.5rem] md:block md:w-44" rotate={-24} delay={0.16} />
      <PngSticker src="/stickers/luna.png" className="-right-14 bottom-0 hidden w-28 md:-right-[7rem] md:bottom-1 md:block md:w-40" rotate={16} delay={0.2} />
      </div>

      <div
        className={`px-5 text-center md:hidden ${focus ? "fixed inset-x-0 bottom-0 z-[85] bg-black pt-4" : "pt-6 pb-1"}`}
        style={focus ? { top: "calc(36% + ((100vw - 1.5rem) * 0.5625 + 0.75rem) / 2)" } : undefined}
      >
        <p className={`text-[0.68rem] font-semibold tracking-[0.16em] uppercase ${focus ? "text-white" : "text-[#0d3333]"}`}>
          Nutrición funcional y digestiva
        </p>
        <p className={`mt-3 font-display text-[2.35rem] leading-[0.95] ${focus ? "text-white" : "text-[#0d3333]"}`}>
          Sentirte bien empieza desde adentro.
        </p>
        <p className={`mt-3 text-[0.95rem] leading-relaxed ${focus ? "text-white/90" : "text-[#0d3333]/80"}`}>
          Cuida tu digestión, transforma tus hábitos y trabaja por tus objetivos físicos sin vivir entre dietas y restricciones.
        </p>
        <a
          href="#programas"
          className={`mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.06em] uppercase ${focus ? "bg-white text-black" : "bg-black text-white"}`}
        >
          Explorar programas
          <span aria-hidden>→</span>
        </a>
        {focus ? (
          <button
            type="button"
            onClick={closeFocus}
            className="mx-auto mt-3 flex w-fit items-center gap-1 rounded-full border border-white/35 bg-white/10 px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.08em] text-white uppercase"
          >
            <span aria-hidden>←</span>
            Volver
          </button>
        ) : null}
      </div>

      <div className="-mx-1.5 mt-5 md:-mx-10 lg:-mx-16">
        <Marquee
          face="display"
          compact
          mark="★"
          className="bg-[#eeedeb] text-[#0d3333]"
          items={[
            "digestión",
            "microbiota",
            "hormonas",
            "energía",
            "ciclo",
            "sin restricciones",
            "hábitos reales",
          ]}
        />
      </div>
    </section>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 10v4h3.2L12 18.2V5.8L7.2 10H4Z" />
      <path d="M15.2 9.2a3.6 3.6 0 0 1 0 5.6M17.6 6.8a7 7 0 0 1 0 10.4" />
    </svg>
  );
}

function Enfoque() {
  return (
    <section id="enfoque" className="relative scroll-mt-24 overflow-hidden bg-[#0d3333] text-[#f7f4ec]">
      <PngSticker src="/stickers/fresa.png" className="top-2 right-2 w-28 md:top-4 md:right-10 md:w-44" rotate={-12} />
      <PngSticker src="/stickers/hoja.png" className="top-[30%] -left-16 w-28 md:top-[24%] md:-left-4 md:w-44" rotate={8} delay={0.06} />
      <PngSticker src="/stickers/hoja-higuera.png" className="top-[50%] -right-28 w-36 md:top-[42%] md:-right-14 md:w-52" rotate={-6} delay={0.1} />
      <PngSticker src="/stickers/hoja-salvia.png" className="top-[72%] -left-16 w-24 md:top-[64%] md:-left-2 md:w-40" rotate={20} delay={0.14} />
      <PngSticker src="/stickers/hoja-roble.png" className="-bottom-4 -left-14 w-36 md:bottom-4 md:left-2 md:w-56" rotate={12} delay={0.08} />
      <PngSticker src="/stickers/hoja.png" className="-right-16 bottom-4 w-28 md:-right-4 md:bottom-8 md:w-44" rotate={-20} delay={0.18} />
      <div className="relative z-[3] mx-auto max-w-6xl px-5 pt-10 pb-16 md:px-8 md:py-20">
        <Reveal>
          <h2 className="max-w-[15.5rem] font-display text-[2.15rem] leading-[0.95] md:max-w-2xl md:text-6xl">
            ¿Por qué iniciar un proceso conmigo?
          </h2>
        </Reveal>
        <CarruselEnfoque />
      </div>
    </section>
  );
}

function Credenciales() {
  return (
    <section id="credenciales" className="relative scroll-mt-24 overflow-hidden bg-[#efe8f3]">
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 flex w-[140%] -translate-x-1/2 -translate-y-1/2 flex-col gap-1 font-display text-[4.6rem] leading-[0.78] tracking-tight text-[#7d648c]/35 uppercase md:text-[8.5rem]">
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i} className={`whitespace-nowrap ${i % 2 === 0 ? "-translate-x-6" : "-translate-x-[22%]"}`}>
              quien soy quien soy quien soy
            </p>
          ))}
        </div>
      </div>
      <div className="relative z-[3] mx-auto w-full max-w-md px-5 py-16 md:max-w-5xl md:px-8 md:py-24">
        <div className="flex flex-col rounded-[1.8rem] bg-[#fffdf8] p-3 shadow-[0_18px_40px_rgba(13,51,51,0.16)] md:flex-row md:items-center md:gap-8 md:p-6">
          <img
            src="/media/home/mafe-cocina.png"
            alt="Mafe Cerquera"
            width={524}
            height={800}
            className="aspect-[2/3] w-full rounded-[1.2rem] object-cover object-[center_18%] md:aspect-[4/5] md:w-[46%] md:shrink-0"
          />
          <div className="min-w-0 flex-1 px-3 pt-6 pb-4 md:px-2 md:py-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#7d648c] uppercase">Hola, soy Mafe</p>
            <h2 className="mt-4 font-display text-[2.15rem] leading-[1.02] text-[#0d3333] md:text-5xl">
              Quiero que aprendas a cuidarte sin dejar de disfrutar.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#0d3333]/85 md:text-lg">
              Soy nutricionista funcional y digestiva. Mi enfoque busca ayudarte a comprender tu alimentación y construir hábitos que funcionen para tu vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CierreComunidad() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/media/home/separador.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
      />
      <div className="relative flex min-h-[28rem] items-center px-5 py-14 md:min-h-[32rem] md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-3xl rounded-[1.6rem] bg-[#e7eee4] px-6 py-7 text-[#0d3333] shadow-[0_18px_40px_rgba(13,51,51,0.18)] md:px-10 md:py-9">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase">Bien desde adentro</p>
          <h2 className="mt-3 max-w-2xl font-display text-[1.85rem] leading-[1.05] md:text-[2.4rem]">
            Tu camino hacia una mejor relación con tu cuerpo empieza aquí.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed md:text-lg">
            Únete a un espacio donde hablamos de alimentación, hábitos y bienestar de forma práctica y sin restricciones extremas.
          </p>
          <a
            href={LADY_BOSS}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-white uppercase"
          >
            Unirme a la comunidad
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const HISTORIAS_RIEL = [
  { type: "image" as const, src: "/media/home/historias/historia-01.png", alt: "Collage de platos de pacientes", tall: true },
  { type: "video" as const, src: "/media/acompanamiento-90-dias/testimonio-1.mp4", alt: "Testimonio en videollamada, junto a la ventana", tall: false },
  { type: "image" as const, src: "/media/home/historias/historia-02.png", alt: "Mensajes de feedback de pacientes", tall: true },
  { type: "image" as const, src: "/media/acompanamiento-90-dias/tostadas.png", alt: "Tostadas con huevo y fresas", tall: false },
  { type: "image" as const, src: "/media/home/historias/historia-03.png", alt: "Collage de comidas de una paciente", tall: true },
  { type: "video" as const, src: "/media/acompanamiento-90-dias/testimonio-2.mp4", alt: "Testimonio en videollamada, en el sofá", tall: false },
  { type: "image" as const, src: "/media/home/historias/historia-04.png", alt: "Lonchera con palta, frutos secos y huevos", tall: true },
  { type: "image" as const, src: "/media/acompanamiento-90-dias/tacos.png", alt: "Tacos con verduras", tall: false },
  { type: "image" as const, src: "/media/home/historias/historia-05.png", alt: "Plato con pollo, ensalada y berenjena", tall: true },
  { type: "image" as const, src: "/media/home/historia-mafe.png", alt: "Mafe Cerquera", tall: false },
  { type: "image" as const, src: "/media/home/historias/historia-06.png", alt: "Cena con vegetales y arepas", tall: true },
  { type: "image" as const, src: "/media/home/separador.jpg", alt: "Mesa de desayuno", tall: false },
  { type: "image" as const, src: "/media/home/historias/historia-07.png", alt: "Salmón con ensalada de una paciente", tall: true },
  { type: "image" as const, src: "/media/acompanamiento-90-dias/separador-desayuno.jpg", alt: "Desayuno", tall: false },
  { type: "image" as const, src: "/media/home/historias/historia-08.png", alt: "Collage de desayunos y almuerzos", tall: true },
  { type: "image" as const, src: "/media/home/historias/historia-09.png", alt: "Historia con mensajes de pacientes", tall: true },
  { type: "image" as const, src: "/media/home/historias/historia-10.png", alt: "Desayuno con huevos, champiñones y tomate", tall: true },
];

const TESTIMONIOS = [
  "/media/home/testimonios/testimonio-01.png",
  "/media/home/testimonios/testimonio-02.png",
  "/media/home/testimonios/testimonio-03.png",
  "/media/home/testimonios/testimonio-04.png",
  "/media/home/testimonios/testimonio-05.png",
  "/media/home/testimonios/testimonio-06.png",
  "/media/home/testimonios/testimonio-07.png",
];

const MARQUEE_SPEED = 36;

function useMarqueeSpeed(trackRef: { current: HTMLDivElement | null }, reduce: boolean | null) {
  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduce) return;
    const apply = () => {
      const half = track.scrollWidth / 2;
      if (half > 0) track.style.animationDuration = `${half / MARQUEE_SPEED}s`;
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(track);
    return () => observer.disconnect();
  }, [reduce, trackRef]);
}

function RielTestimonios() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  useMarqueeSpeed(trackRef, reduce);
  const loop = [...TESTIMONIOS, ...TESTIMONIOS];

  return (
    <div className="marquee-rail relative z-[3] -mx-5 mt-4 overflow-hidden md:-mx-8" role="region" aria-label="Testimonios">
      <div ref={trackRef} className="animate-marquee-stories is-reverse flex w-max items-end gap-4">
        {loop.map((src, i) => {
          const copy = i >= TESTIMONIOS.length;
          return (
            <img
              key={`${src}-${i}`}
              src={src}
              alt={copy ? "" : `Testimonio de una paciente, ${i + 1}`}
              aria-hidden={copy || undefined}
              className="w-80 shrink-0 rounded-[1.4rem] shadow-[0_16px_34px_rgba(13,51,51,0.14)] md:w-96"
            />
          );
        })}
      </div>
    </div>
  );
}

function RielHistorias() {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useMarqueeSpeed(trackRef, reduce);

  useEffect(() => {
    const videos = railRef.current?.querySelectorAll("video") ?? [];
    if (reduce) {
      videos.forEach((video) => video.pause());
      return;
    }
    videos.forEach((video) => {
      video.muted = true;
      void video.play().catch(() => {});
    });
  }, [reduce]);

  const loop = [...HISTORIAS_RIEL, ...HISTORIAS_RIEL];

  return (
    <div
      ref={railRef}
      className="marquee-rail relative z-[3] -mx-5 mt-10 overflow-hidden md:-mx-8"
      role="region"
      aria-label="Historias"
    >
      <div ref={trackRef} className="animate-marquee-stories flex w-max items-center gap-4">
        {loop.map((item, i) => {
          const copy = i >= HISTORIAS_RIEL.length;
          const frame = item.tall ? "aspect-[9/16]" : "aspect-[3/4]";
          return (
            <article
              key={`${item.src}-${i}`}
              aria-hidden={copy || undefined}
              className="w-72 shrink-0 overflow-hidden rounded-[1.3rem] border-2 border-[#0d3333] bg-black md:w-80"
            >
              {item.type === "video" ? (
                <video muted loop playsInline preload="auto" aria-label={copy ? undefined : item.alt} className={`${frame} w-full object-cover`}>
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img src={item.src} alt={copy ? "" : item.alt} className={`${frame} w-full object-cover`} />
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

function Historias() {
  return (
    <section id="voces" className="relative scroll-mt-24 overflow-hidden bg-[#e2d5e8] px-5 pt-6 pb-12 md:px-8 md:pt-10 md:pb-16">
      <div className="relative z-[3] mx-auto flex max-w-6xl items-center justify-between gap-3">
        <Reveal>
          <h2 className="font-display text-4xl leading-[0.95] text-[#0d3333] md:text-6xl">
            Historias que inspiran
          </h2>
        </Reveal>
        <img src="/stickers/flor.png" alt="" className="h-[4.75rem] w-[4.75rem] shrink-0 -rotate-12 object-contain md:h-28 md:w-28" />
      </div>
      <RielTestimonios />
      <RielHistorias />
    </section>
  );
}

function Pie() {
  const redes = [
    { href: INSTAGRAM, label: "Instagram", icon: "instagram" },
    { href: TIKTOK, label: "TikTok", icon: "tiktok" },
    { href: WHATSAPP, label: "WhatsApp", icon: "whatsapp" },
  ] as const;

  return (
    <footer className="gals-type bg-[#0d3333] pb-[env(safe-area-inset-bottom)] text-[#d7ebc8]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 md:px-8">
        <div className="flex items-center gap-3">
          {redes.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#d7ebc8]/35 transition hover:bg-[#d7ebc8] hover:text-[#0d3333]"
            >
              <RedIcon name={item.icon} />
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-[#d7ebc8]/70">© 2026 Mafe Cerquera. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function RedIcon({ name, className = "h-5 w-5" }: { name: "instagram" | "tiktok" | "whatsapp"; className?: string }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M14.2 3.2c.5 2.6 2 4.4 4.5 4.8v2.5c-1.5 0-2.9-.5-4.1-1.3v6.6c0 3.4-2.6 6-6 6-3.2 0-5.6-2.4-5.6-5.6 0-3.1 2.4-5.5 5.5-5.6v2.7c-1.5.1-2.8 1.3-2.8 2.9 0 1.6 1.3 2.9 2.9 2.9 1.7 0 3-1.3 3-3.1V3.2h2.6Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.1 4.9A9.8 9.8 0 0 0 2.1 15.2L1 21.2l6.1-1.1A9.8 9.8 0 0 0 19.1 4.9Zm-7 15.2c-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.6.7.7-3.5-.2-.3A8 8 0 1 1 12.1 20.1Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.5.1-.7l.5-.6.2-.4c.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1.2 1.9-1.2 3 0 2.4 1.8 4.6 4.1 6.1 2.1 1.4 2.9 1.1 3.5 1 .5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.2-.2-.4-.3Z" />
    </svg>
  );
}
