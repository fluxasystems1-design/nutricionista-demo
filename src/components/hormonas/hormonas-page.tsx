"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PngSticker } from "@/components/png-sticker";
import { Header, Pill } from "@/components/chrome";
import { Marquee, Reveal } from "@/components/motion";
import { Historias } from "@/components/home/home-page";
import { INSTAGRAM, PRECIOS, ROUTES, TESTIMONIOS, TIKTOK, WHATSAPP } from "@/lib/site";

const SEMANAS = [
  {
    n: "01",
    verb: "Descifra",
    title: "Entiende tu cuerpo",
    text: "Aprende sobre alimentación, metabolismo, ciclo menstrual y salud femenina. Identifica hábitos y necesidades que merece la pena conocer.",
    resultado: "Registro inicial de hábitos y objetivos.",
    days: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    n: "02",
    verb: "Nutre",
    title: "Aprende a alimentarte",
    text: "Aprende a combinar alimentos, organizar comidas y utilizar porciones orientativas para construir una alimentación flexible.",
    resultado: "Tu estructura de alimentación semanal.",
    days: [8, 9, 10, 11, 12, 13, 14],
  },
  {
    n: "03",
    verb: "Transforma",
    title: "Construye tu nueva rutina",
    text: "Lleva lo aprendido a tu vida real, integra el movimiento y prepara un plan para seguir cuidándote después de los 21 días.",
    resultado: "Tu plan de continuidad.",
    days: [15, 16, 17, 18, 19, 20, 21],
  },
] as const;

const KIT = [
  {
    title: "Menú + recetario",
    text: "Menú flexible de ejemplo y 20 recetas propuestas para tus comidas.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/kit-menu.jpg",
  },
  {
    title: "Listas de mercado",
    text: "Tres listas semanales editables para organizar tus compras.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/kit-mercado.jpg",
  },
  {
    title: "Rutina de ejercicio",
    text: "Propuesta de movimiento y fuerza por niveles, validada profesionalmente.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/kit-rutina.jpg",
  },
  {
    title: "Diario hormonal",
    text: "Registra tu ciclo, hábitos, energía y bienestar.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/kit-diario.jpg",
  },
] as const;

const RECURSOS = [
  {
    title: "Método de 21 días",
    text: "Clases grabadas y actividades semanales.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-metodo.png",
  },
  {
    title: "Menú + 20 recetas propuestas",
    text: "Opciones variadas para desayunos, almuerzos, cenas y snacks.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-recetas.png",
  },
  {
    title: "Guía visual de porciones",
    text: "Aprende a construir platos completos sin cálculos individuales ficticios.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-porciones.png",
  },
  {
    title: "Listas de mercado",
    text: "Tres listas semanales editables para organizar tus compras.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-mercado.png",
  },
  {
    title: "Rutina de movimiento",
    text: "Propuesta de movimiento y fuerza por niveles, validada profesionalmente.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-movimiento.png",
  },
  {
    title: "Planeador hormonal",
    text: "Registra tu ciclo, hábitos, energía y bienestar.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-planeador.png",
  },
  {
    title: "Guía de alimentación femenina",
    text: "Educación sobre salud metabólica, SOMP y ciclo menstrual.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-guia.png",
  },
  {
    title: "Comunidad privada",
    text: "El espacio de comunidad del programa.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-comunidad.png",
  },
] as const;

const FAQ = [
  {
    q: "¿Necesito un diagnóstico de SOMP o resistencia a la insulina para hacer esto?",
    a: "No es obligatorio, pero si ya sospechas que algo hormonal está pasando, este método te ayuda a entender qué preguntar y qué pedir en tu próxima consulta.",
  },
  {
    q: "¿Esto reemplaza mi tratamiento médico?",
    a: "No. Es un complemento que te ayuda a entender tu cuerpo y a aprovechar mejor tus consultas — no un reemplazo de supervisión médica cuando la necesitas.",
  },
  {
    q: "¿Cuánto tiempo necesito a la semana?",
    a: "Son cuatro fases, una por semana. El tiempo exacto de cada módulo lo confirma Mafe al abrir el programa.",
  },
  {
    q: "¿Qué pasa si no tengo SOMP pero sí resistencia a la insulina, o al revés?",
    a: "El método está diseñado para ambos casos porque comparten el mismo mecanismo de fondo: glucosa e inflamación desreguladas.",
  },
];

export function HormonasPage() {
  const [listaAbierta, setListaAbierta] = useState(false);
  const cerrarLista = useCallback(() => setListaAbierta(false), []);

  useEffect(() => {
    const abrir = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href="#lista"]');
      if (!link) return;
      event.preventDefault();
      setListaAbierta(true);
    };
    document.addEventListener("click", abrir);
    return () => document.removeEventListener("click", abrir);
  }, []);

  return (
    <>
      <Header
        links={[
          { href: "#metodo", label: "El método" },
          { href: "#preguntas", label: "Preguntas" },
        ]}
        cta={{ href: "#lista", label: "Quiero mi lugar", tone: "black" }}
      />
      <main className="gals-type">
        <Hero />
        <Marquee
          face="display"
          mark="★"
          className="bg-[#0d3333] text-[#cde1aa]"
          items={["4 semanas", "sin dietas extremas", "tu ciclo", "tu glucosa", "febrero 2027", "deja de adivinar"]}
        />
        <Cuestionario />
        <VocesCuerpo />
        <Separador />
        <Metodo />
        <Comparacion />
        <Historias id="historias" />
        <HistoriaMafe />
        <Marquee
          face="display"
          mark="★"
          className="bg-[#7d648c] text-[#f7f4ec]"
          items={[
            "menos dieta",
            "más escucha",
            "nunca fue falta de voluntad",
            "deja de adivinar",
            "tu cuerpo no está fallando",
            "febrero 2027",
          ]}
        />
        <Faq />
        <Cierre />
      </main>
      <Pie />
      <Lista abierta={listaAbierta} onClose={cerrarLista} />
    </>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLElement>(null);
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

  return (
    <section className={`relative bg-[#f3eee6] px-4 pt-3 pb-10 text-[#3d2916] md:px-6 md:py-14 lg:px-8 ${focus ? "overflow-visible" : "overflow-hidden"}`}>
      {focus ? (
        <button
          type="button"
          className="fixed inset-0 z-[80] bg-black/95 md:hidden"
          aria-label="Cerrar el video"
          onClick={closeFocus}
        />
      ) : null}
      <PngSticker src="/stickers/peonia.png" className="-bottom-14 -left-14 w-36 md:-left-4 md:w-48" rotate={12} delay={0.1} />
      <PngSticker src="/stickers/sol-luna.png" className="-right-14 -bottom-14 w-36 md:-right-4 md:w-48" rotate={-12} delay={0.06} />
      <div className={`relative mx-auto grid max-w-7xl items-center gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(24rem,1.22fr)] lg:gap-x-8 lg:gap-y-4 ${focus ? "z-auto" : "z-[3]"}`}>
        <div className="text-center lg:col-start-1 lg:row-start-1 lg:text-left">
          <h1 className="mx-auto max-w-xl lg:mx-0">
            <img
              src="/media/hazte-amiga-de-tus-hormonas/imagenes/titulo-hero.png"
              alt="Hazte amiga de tus hormonas. Escucha. Menos dieta, más escucha."
              width={1024}
              height={443}
              className="mx-auto h-auto w-full lg:mx-0"
            />
          </h1>
        </div>
        {focus ? <div className="md:hidden" style={{ height: hold }} aria-hidden /> : null}
        <figure
          ref={frameRef}
          className={
            focus
              ? "fixed top-[36%] left-1/2 z-[90] w-[calc(100vw-0.75rem)] -translate-x-1/2 -translate-y-1/2 md:static md:top-auto md:left-auto md:z-10 md:w-full md:translate-x-0 md:translate-y-0 lg:col-start-2 lg:row-start-1 lg:row-span-2"
              : "relative z-10 w-full lg:col-start-2 lg:row-start-1 lg:row-span-2"
          }
        >
          <div className={`relative rounded-[1.5rem] bg-[#f7f4ec] p-2.5 shadow-[0_22px_44px_rgba(13,51,51,0.16)] md:p-3 ${focus ? "md:rotate-[2deg]" : "rotate-1 md:rotate-[2deg]"}`}>
            <span
              aria-hidden
              className="pointer-events-none absolute -top-3 left-8 z-10 h-7 w-24 -rotate-3 bg-[repeating-linear-gradient(-18deg,#e7d7ef_0_8px,#cbb8d4_8px_9px)] shadow-[0_8px_14px_rgba(61,41,22,0.12)]"
            />
            <video
              ref={videoRef}
              className="aspect-video w-full rounded-[0.95rem] bg-[#1a100c] object-cover"
              autoPlay={!reduce}
              muted
              loop
              playsInline
              onClick={onVideoClick}
              controls={!!reduce}
              preload="metadata"
              aria-label="Mafe presenta Hazte amiga de tus hormonas"
            >
              <source src="/media/hazte-amiga-de-tus-hormonas/videos/hero.mp4" type="video/mp4" />
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
                className="absolute right-4 bottom-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-[#0d3333] text-[#cde1aa] shadow-[0_8px_18px_rgba(13,51,51,0.28)]"
              >
                <SoundIcon on />
              </button>
            ) : null}
          </div>
        </figure>
        <div
          className={
            focus
              ? "fixed inset-x-0 bottom-0 z-[85] overflow-y-auto bg-black px-5 pt-4 pb-6 text-center max-md:top-[calc(36%+((100vw-2rem)*0.5625+1.25rem)/2)] md:static md:inset-auto md:z-auto md:overflow-visible md:bg-transparent md:px-0 md:pt-0 md:pb-0 lg:col-start-1 lg:row-start-2 lg:text-left"
              : "text-center lg:col-start-1 lg:row-start-2 lg:text-left"
          }
        >
          <p className={`text-xs font-semibold tracking-[0.16em] uppercase ${focus ? "text-white/80 md:text-[#7d648c]" : "text-[#7d648c]"}`}>
            Método de 21 días · Alimentación femenina
          </p>
          <p className={`mx-auto mt-3 max-w-xl font-display text-[1.65rem] leading-[1.05] md:text-3xl lg:mx-0 ${focus ? "text-white md:text-[#3d2916]" : "text-[#3d2916]"}`}>
            ¿Te sientes inflamada, te cuesta bajar de peso y sientes que tu cuerpo cambia sin entender por qué?
          </p>
          <p className={`mx-auto mt-4 max-w-xl text-base leading-relaxed md:text-lg lg:mx-0 ${focus ? "text-white/90 md:text-[#3d2916]/80" : "text-[#3d2916]/80"}`}>
            Aprende a alimentarte teniendo en cuenta tus necesidades, conoce mejor tu ciclo y comienza a construir hábitos que apoyen tus objetivos físicos y tu salud hormonal, sin una dieta extrema.
          </p>
          <p className={`mx-auto mt-4 max-w-xl text-base lg:mx-0 ${focus ? "text-white md:text-[#3d2916]" : "text-[#3d2916]"}`}>
            Conoce Hazte Amiga de tus Hormonas.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Pill href="#lista" tone="black" className={focus ? "max-md:!bg-white max-md:!text-black" : ""}>
              Quiero acceso prioritario
            </Pill>
          </div>
          <p className={`mt-3 text-sm ${focus ? "text-white/70 md:text-[#3d2916]/70" : "text-[#3d2916]/70"}`}>
            Inscripción gratuita · Beneficios exclusivos de lanzamiento
          </p>
          {focus ? (
            <button
              type="button"
              onClick={closeFocus}
              className="mx-auto mt-4 flex w-fit items-center gap-1 rounded-full border border-white/35 bg-white/10 px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.08em] text-white uppercase md:hidden"
            >
              <span aria-hidden>←</span>
              Volver
            </button>
          ) : null}
        </div>
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

function SoundIcon({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 10v4h3.2L12 18.2V5.8L7.2 10H4Z" />
      {on ? (
        <path d="M15.2 9.2a3.6 3.6 0 0 1 0 5.6M17.6 6.8a7 7 0 0 1 0 10.4" />
      ) : (
        <path d="M16 10.2 19.6 13.8M19.6 10.2 16 13.8" />
      )}
    </svg>
  );
}

const VOCES = [
  { src: "/media/hazte-amiga-de-tus-hormonas/videos/voz-1.m4v", label: "Mafe, primer momento" },
  { src: "/media/hazte-amiga-de-tus-hormonas/videos/voz-2.m4v", label: "Mafe, segundo momento" },
] as const;

function VocesCuerpo() {
  const reduce = useReducedMotion();
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const [sound, setSound] = useState<number | null>(null);
  const [expand, setExpand] = useState<number | null>(null);

  useEffect(() => {
    refs.current.forEach((video) => {
      if (!video) return;
      if (reduce) {
        video.pause();
        return;
      }
      video.muted = true;
      void video.play().catch(() => {});
    });
  }, [reduce]);

  useEffect(() => {
    const leave = () => {
      refs.current.forEach((video) => {
        if (!video || document.fullscreenElement === video) return;
        video.controls = !!reduce;
      });
    };
    document.addEventListener("fullscreenchange", leave);
    return () => document.removeEventListener("fullscreenchange", leave);
  }, [reduce]);

  const toggleSound = (index: number) => {
    const current = refs.current[index];
    if (!current) return;
    const turningOn = sound !== index;
    refs.current.forEach((video, i) => {
      if (!video) return;
      video.muted = i !== index || !turningOn;
      if (i === index && turningOn) {
        video.volume = 1;
        void video.play();
      }
    });
    setSound(turningOn ? index : null);
  };

  const openFullscreen = (index: number) => {
    const video = refs.current[index];
    if (!video) return;
    const ios = video as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
    if (typeof ios.webkitEnterFullscreen === "function" && /iP(hone|ad|od)/.test(navigator.userAgent)) {
      ios.webkitEnterFullscreen();
      return;
    }
    video.controls = true;
    void video.requestFullscreen?.().catch(() => {
      video.controls = false;
      ios.webkitEnterFullscreen?.();
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#0d3333] py-14 text-[#f4f7ef] md:py-20">
      <PngSticker src="/stickers/hoja-salvia.png" className="-top-8 -left-14 w-40 md:w-64" rotate={-16} />
      <PngSticker src="/stickers/hoja-roble.png" className="-top-6 -right-14 w-44 md:w-72" rotate={12} delay={0.06} />
      <PngSticker src="/stickers/hoja-higuera.png" className="-bottom-10 -left-12 w-40 md:w-60" rotate={18} delay={0.1} flip />
      <PngSticker src="/stickers/hoja.png" className="-right-12 -bottom-8 w-40 md:w-64" rotate={-12} delay={0.14} />
      <div className="relative z-[3]">
        <div className="mx-auto max-w-xl px-5 text-center">
          <h2 className="font-display text-[2.15rem] leading-[1.05] text-[#f4f7ef] italic md:text-[2.6rem]">
            Voces que inspiran
          </h2>
        </div>
        <div className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[8vw] pb-8">
          {VOCES.map((clip, index) => (
            <figure
              key={clip.src}
              className={`w-[82vw] max-w-3xl shrink-0 snap-center ${index === 0 ? "-rotate-2" : "rotate-2"}`}
            >
              <div className="relative overflow-hidden rounded-[1.6rem] bg-[#071c1c] shadow-[0_22px_40px_rgba(0,0,0,0.28)]">
                <video
                  ref={(node) => {
                    refs.current[index] = node;
                  }}
                  className="aspect-video w-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay={!reduce}
                  controls={!!reduce}
                  preload="metadata"
                  aria-label={clip.label}
                  onClick={() => setExpand(index)}
                >
                  <source src={clip.src} type="video/mp4" />
                </video>
                {expand === index ? (
                  <button
                    type="button"
                    aria-label="Ver en pantalla completa"
                    onClick={(event) => {
                      event.stopPropagation();
                      openFullscreen(index);
                    }}
                    className="absolute top-3 right-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-[#0d3333]/85 text-[#fffdf8] shadow-[0_8px_18px_rgba(0,0,0,0.28)]"
                  >
                    <ExpandIcon />
                  </button>
                ) : null}
                <button
                  type="button"
                  aria-pressed={sound === index}
                  aria-label={sound === index ? "Quitar el audio" : "Activar el audio"}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleSound(index);
                  }}
                  className="absolute right-3 bottom-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-[#0d3333] text-[#cde1aa] shadow-[0_8px_18px_rgba(0,0,0,0.28)]"
                >
                  <SoundIcon on={sound === index} />
                </button>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Separador() {
  return (
    <section className="bg-[#f7f4ec] md:px-8 md:py-10">
      <img
        src="/media/hazte-amiga-de-tus-hormonas/imagenes/separador-mensaje.jpg"
        alt="Cuidar tus hormonas no es pelear con la comida. Sin otra lista de prohibidos. Come flexible, a tu medida. Menos restricciones. Más conocimiento."
        width={1024}
        height={576}
        className="h-auto w-full md:mx-auto md:max-w-4xl md:rounded-[1.6rem]"
      />
    </section>
  );
}

function Metodo() {
  const reduce = useReducedMotion();
  const [semana, setSemana] = useState(0);

  return (
    <section id="metodo" className="relative scroll-mt-24 overflow-hidden bg-[#eeedeb] px-5 py-10 text-[#3d2916] md:px-8 md:py-14">
      <PngSticker src="/stickers/peonia.png" className="-top-6 -left-12 hidden w-40 lg:block lg:w-52" rotate={-14} />
      <PngSticker src="/stickers/sol-luna.png" className="-top-4 -right-10 hidden w-36 lg:block lg:w-48" rotate={12} delay={0.06} />
      <PngSticker src="/stickers/luna.png" className="-bottom-12 -left-10 hidden w-36 lg:block lg:w-48" rotate={16} delay={0.1} />
      <PngSticker src="/stickers/granada.png" className="-right-8 -bottom-10 hidden w-32 lg:block lg:w-44" rotate={-12} delay={0.14} />
      <div className="relative z-[3] mx-auto max-w-3xl lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:gap-10">
        <div className="rounded-[1.8rem] bg-[#f7f4ec] px-5 py-7 shadow-[0_16px_36px_rgba(13,51,51,0.06)] md:px-8 md:py-9">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#7d648c] uppercase">Conoce tu próxima experiencia</p>
          <h2 className="mt-2 font-display text-4xl leading-[0.95] text-[#5c4d78] md:text-5xl">Hazte Amiga de tus Hormonas</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#3d2916] md:text-base">
            21 días para dejar de improvisar con tu alimentación, comprender mejor tu cuerpo y construir hábitos que puedas mantener.
          </p>
          <img
            src="/media/hazte-amiga-de-tus-hormonas/imagenes/flyer-experiencia.jpg"
            alt="Mafe Cerquera junto al programa Hazte Amiga de tus Hormonas"
            width={1024}
            height={682}
            className="mt-6 w-full rounded-2xl"
          />
          <div className="mt-6 grid grid-cols-3 gap-2 md:gap-3">
            {[
              ["21 días", "calendario"],
              ["Método práctico", "guia"],
              ["A tu ritmo", "corazon"],
            ].map(([label, icon]) => (
              <div key={label} className="rounded-2xl bg-[#fffdf8] px-2 py-4 text-center text-[#5c4d78]">
                {icon === "calendario" ? <IconoCalendario /> : icon === "guia" ? <IconoGuia /> : <IconoCorazon />}
                <p className="mt-2 text-xs font-semibold text-[#3d2916] md:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
        <div className="relative z-10 mx-auto mt-8 mb-6 max-w-xl lg:mt-0">
          <div className="flex items-center gap-2 rounded-full bg-[#fffdf8] py-2.5 pr-2.5 pl-2.5 shadow-[0_14px_32px_rgba(13,51,51,0.14)]">
            <h3 className="min-w-0 truncate rounded-2xl bg-[#0d3333] px-4 py-2.5 text-[0.98rem] font-semibold text-[#fffdf8]">
              Explora las tres fases
            </h3>
            <span className="ml-auto grid h-10 w-10 shrink-0 place-items-center text-[#0d3333]/45" aria-hidden>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M6 11a6 6 0 0 0 12 0M12 17v3" />
              </svg>
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eeedeb] text-[#0d3333]/55" aria-hidden>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </span>
          </div>
          <span aria-hidden className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.65rem] leading-none text-[#7f93c9]">
            ★
          </span>
        </div>
        <div className="mt-4 space-y-4">
          {SEMANAS.map((item, index) => {
            const activa = index === semana;
            return (
              <div key={item.n}>
                <button
                  type="button"
                  aria-expanded={activa}
                  onClick={() => setSemana(index)}
                  className={`flex w-full items-center justify-between gap-4 border border-[#d5d2cb] bg-[#eeedeb] px-5 py-4 text-left text-[#0d3333] transition-transform ${
                    activa
                      ? "rounded-t-2xl shadow-none"
                      : "rounded-2xl shadow-[0_4px_0_rgba(61,41,22,0.16)] hover:-translate-y-0.5"
                  }`}
                >
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.14em] uppercase">Semana {item.n}</span>
                    <span className="mt-1 flex items-center gap-2">
                      <span className="font-display text-3xl leading-none italic">{item.verb}</span>
                      <span
                        aria-hidden
                        className={`grid h-6 w-6 place-items-center ${reduce ? "" : "transition-transform duration-300"} ${activa ? "rotate-180" : ""}`}
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </span>
                  <span className="font-display text-xl italic">
                    {item.days[0]}–{item.days[6]}
                  </span>
                </button>
                <div aria-live="polite">
                  <AnimatePresence initial={false}>
                    {activa ? (
                      <motion.div
                        key={item.n}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="rounded-b-2xl border border-t-0 border-[#d5d2cb] bg-[#eeedeb] px-5 pt-1 pb-5 text-[#0d3333]">
                          <p className="font-display text-2xl leading-tight font-semibold italic">{item.title}</p>
                          <p className="mt-2 text-sm leading-relaxed font-semibold md:text-base">{item.text}</p>
                          <p className="mt-3 flex items-start gap-2 text-sm font-semibold md:text-base">
                            <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#1f7a45] text-[0.7rem] text-white">
                              ✓
                            </span>
                            Resultado: {item.resultado}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}

function IconoCalendario() {
  return (
    <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3.5v3M16 3.5v3M4 10h16" />
    </svg>
  );
}

function IconoGuia() {
  return (
    <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M6 4.5h9.5A2.5 2.5 0 0 1 18 7v12.5H8.5A2.5 2.5 0 0 0 6 22V4.5Z" />
      <path d="M6 4.5A2.5 2.5 0 0 1 8.5 7H18" />
    </svg>
  );
}

function IconoCorazon() {
  return (
    <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M12 19s-7-4.2-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.8-7 9-7 9Z" />
    </svg>
  );
}

function MarcoImagen({ src, alt, className, fit }: { src: string; alt: string; className: string; fit: "cover" | "contain" }) {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) setVisible(false);
  }, []);

  return (
    <div className={className}>
      {visible ? (
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
          onError={() => setVisible(false)}
        />
      ) : null}
    </div>
  );
}

function Comparacion() {
  const reduce = useReducedMotion();
  const [pagina, setPagina] = useState(0);
  const paginas = [RECURSOS.slice(0, 4), RECURSOS.slice(4)];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setPagina((current) => (current + 1) % paginas.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduce, pagina, paginas.length]);

  return (
    <section className="relative overflow-hidden bg-[#0d3333] px-5 py-16 text-[#cde1aa] md:px-8 md:py-24">
      <PngSticker
        src="/stickers/linaza.png"
        className="-top-28 -right-48 w-72 md:-top-36 md:-right-20 md:w-[30rem]"
        rotate={10}
      />
      <PngSticker src="/stickers/espiral.png" className="-bottom-16 -left-20 w-40 md:-bottom-10 md:-left-12 md:w-56" rotate={-8} delay={0.08} />
      <div className="relative z-[3] mx-auto max-w-xl md:max-w-4xl">
        <Reveal>
          <p className="text-center font-display text-2xl italic">Tu kit de transformación</p>
          <h2 className="mt-3 text-center font-display text-[2rem] leading-[0.95] text-[#f7f4ec] md:text-[2.6rem]">
            No solo vas a aprender qué comer. Vas a tener las herramientas para empezar a hacerlo.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[0.95rem] leading-relaxed text-[#cde1aa]/85">
            Un método, recursos prácticos y una experiencia de aprendizaje para empezar a cuidar de ti sin complicarte.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-5">
          {KIT.map((item) => (
            <figure key={item.title}>
              <MarcoImagen src={item.image} alt="" fit="cover" className="aspect-square overflow-hidden rounded-[1.35rem] bg-[#fffdf8]" />
              <figcaption className="mt-3 font-display text-[1.15rem] leading-tight text-[#f7f4ec] md:text-[1.35rem]">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
        <h3 className="mt-12 text-center font-display text-[2rem] leading-[0.95] text-[#f7f4ec] md:text-[2.4rem]">Descubre todo lo que vas a recibir</h3>
        <div className="mt-8 overflow-hidden" aria-roledescription="carrusel">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pagina}
              initial={reduce ? false : { opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -48 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-3 md:gap-4"
              aria-live="polite"
            >
              {paginas[pagina].map((item) => (
                <article
                  key={item.title}
                  className="flex items-center gap-3 rounded-[1.35rem] bg-[#fffdf8] px-3 py-2.5 text-[#0d3333] shadow-[0_8px_22px_rgba(13,51,51,0.08)]"
                >
                  <MarcoImagen src={item.image} alt="" fit="contain" className="h-16 w-16 shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[1.35rem] leading-[0.95]">{item.title}</span>
                    <span className="mt-1 block text-[0.9rem] leading-snug text-[#0d3333]/80">{item.text}</span>
                  </span>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="mt-5 flex justify-center gap-2">
            {paginas.map((grupo, i) => (
              <button
                key={grupo[0].title}
                type="button"
                aria-label={`Recursos ${i * 4 + 1} a ${i * 4 + grupo.length}`}
                aria-current={i === pagina ? "true" : undefined}
                onClick={() => setPagina(i)}
                className={`h-2.5 rounded-full transition-all ${i === pagina ? "w-8 bg-[#f7f4ec]" : "w-2.5 bg-[#f7f4ec]/35"}`}
              />
            ))}
          </div>
        </div>
        <p className="mt-8 text-center font-display text-3xl leading-tight text-[#f7f4ec] md:text-4xl">
          Valor total {PRECIOS.hormonasTotal.usd} · {PRECIOS.hormonasTotal.eur}
        </p>
      </div>
    </section>
  );
}

function HistoriaMafe() {
  return (
    <>
    <section className="bg-[#f7f4ec] px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-xl overflow-hidden rounded-[1.8rem] bg-[#e7d6ee] shadow-[0_16px_36px_rgba(13,51,51,0.12)] md:flex md:max-w-5xl md:items-stretch">
        <div className="md:relative md:w-[46%] md:shrink-0">
          <img
            src="/media/hazte-amiga-de-tus-hormonas/imagenes/mafe-historia.png"
            alt="Mafe Cerquera"
            width={942}
            height={820}
            className="h-auto w-full md:absolute md:inset-0 md:h-full md:object-cover md:object-[center_30%]"
          />
        </div>
        <div className="px-6 py-8 text-[#0d3333] md:flex md:flex-1 md:flex-col md:justify-center md:px-10 md:py-12">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#1f6b58] uppercase">La mujer detrás del método</p>
          <h2 className="mt-3 font-display text-[2.15rem] leading-[1.02] md:text-5xl">Hola, soy Mafe Cerquera.</h2>
          <p className="mt-3 text-base font-semibold md:text-lg">Nutricionista funcional y digestiva.</p>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            Sé lo frustrante que puede ser intentar cuidarte y sentir que todavía tienes demasiadas preguntas sobre tu alimentación y tu cuerpo.
          </p>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            Por eso creé Hazte Amiga de tus Hormonas: para enseñarte una forma práctica de comprender la alimentación femenina y construir hábitos sostenibles, sin otra dieta extrema.
          </p>
        </div>
      </div>
    </section>
    <section className="relative overflow-hidden">
      <img
        src="/media/hazte-amiga-de-tus-hormonas/imagenes/separador.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative flex min-h-[26rem] items-center justify-center px-5 py-14 md:min-h-[32rem] md:px-8">
        <div className="w-full max-w-xl rounded-[1.75rem] bg-[#fffdf8]/90 px-6 py-8 text-center text-[#0d3333] shadow-[0_18px_40px_rgba(13,51,51,0.16)] backdrop-blur-[2px] md:px-10 md:py-10">
          <p className="font-display text-[1.7rem] leading-[1.08] italic md:text-[2.15rem]">
            Quiero que dejes de preguntarte qué dieta sigue y empieces a entender cómo alimentarte mejor.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

function Precios() {
  const planes = [
    {
      nombre: "Básico",
      detalle: "4 fases · febrero 2027",
      linea: "4 semanas",
      precio: PRECIOS.hormonasBasico,
      items: ["Acceso a las 4 fases", "Guía descargable y bonos", "Comunidad de apoyo"],
      nota: "",
      cta: "quiero el básico",
    },
    {
      nombre: "Plus",
      detalle: "Seguimiento · cupos limitados",
      linea: "Acompañamiento",
      precio: PRECIOS.hormonasPlus,
      items: ["Todo lo del Básico", "Seguimiento personalizado semanal", "Descuento en consulta 1:1 con Mafe"],
      nota: "Cupos limitados de acompañamiento Plus por mes: el seguimiento personalizado no escala igual que el contenido grabado.",
      cta: "quiero el plus",
    },
  ];

  return (
    <section id="precios" className="scroll-mt-24 bg-[#eeedeb] px-5 py-16 text-[#3d2916] md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="font-display text-2xl text-[#0d3333] italic">tu lugar</p>
          <h2 className="mt-2 font-display text-4xl leading-[0.92] md:text-6xl">Elige tu experiencia</h2>
        </Reveal>
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2">
          {planes.map((plan) => (
            <article
              key={plan.nombre}
              className="flex h-full flex-col rounded-[1.75rem] border-2 border-[#0d3333]/35 bg-[#fffdf8] px-7 py-9 text-center"
            >
              <h3 className="font-display text-3xl tracking-wide text-[#0d3333] uppercase">{plan.nombre}</h3>
              <p className="mt-2 font-display text-2xl text-[#7d648c] italic">{plan.detalle}</p>
              <p className="mt-2 text-[0.72rem] font-semibold tracking-[0.22em] text-[#0d3333]/55 uppercase">{plan.linea}</p>
              <p className="mt-6 font-display text-6xl leading-none text-[#0d3333]">{plan.precio.usd}</p>
              <p className="mt-2 text-sm text-[#3d2916]/70">USD · {plan.precio.eur}</p>
              <ul className="mx-auto mt-6 w-full max-w-xs space-y-2 text-left text-sm leading-relaxed">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d3333]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {plan.nota ? <p className="mt-4 text-xs leading-relaxed text-[#3d2916]/65">{plan.nota}</p> : null}
              <div className="mt-auto pt-8">
                <Pill href="#lista" tone="cream" className="w-full !bg-[#e7ef9a] !text-[#0d3333] hover:!bg-[#d7e388]">
                  {plan.cta}
                </Pill>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParaTi() {
  return (
    <section id="para-ti" className="relative scroll-mt-24 grid overflow-hidden md:grid-cols-2">
      <PngSticker src="/stickers/luna.png" className="-right-14 -bottom-16 w-36 md:-right-6 md:-bottom-14 md:w-48" rotate={18} />
      <Reveal className="relative z-[3] flex bg-[#cde1aa] px-5 py-14 text-[#3d2916] md:px-10 md:py-20">
        <article className="relative mx-auto w-full max-w-lg -rotate-1 bg-[#f7f4ec] py-8 pr-7 pl-10 shadow-[0_22px_44px_rgba(13,51,51,0.16)] before:absolute before:inset-y-0 before:left-7 before:w-px before:bg-[#e7a0a8] before:content-[''] md:py-10 md:pr-10 md:pl-12">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-3 left-10 z-10 h-7 w-24 -rotate-3 bg-[repeating-linear-gradient(-18deg,#e7d7ef_0_8px,#cbb8d4_8px_9px)] shadow-[0_8px_14px_rgba(61,41,22,0.12)]"
          />
          <p className="font-display text-3xl text-[#0d3333] italic">es para ti si</p>
          <ul className="mt-4 space-y-3 font-display text-2xl leading-snug text-[#3d2916] italic">
            <li>Tienes SOMP (SOP), resistencia a la insulina, o sospechas que algo hormonal está detrás de tus síntomas.</li>
            <li>Ya probaste dietas restrictivas y nada funcionó a largo plazo.</li>
            <li>Quieres entender tu cuerpo en lugar de seguir otro plan genérico.</li>
            <li>Estás dispuesta a dedicarle 4 semanas reales a esto.</li>
          </ul>
        </article>
      </Reveal>
      <Reveal delay={0.08} className="flex bg-[#bec1f4] px-5 py-14 text-[#3d2916] md:px-10 md:py-20">
        <article className="relative mx-auto w-full max-w-lg rotate-1 bg-[#f7f4ec] py-8 pr-7 pl-10 shadow-[0_22px_44px_rgba(13,51,51,0.16)] before:absolute before:inset-y-0 before:left-7 before:w-px before:bg-[#e7a0a8] before:content-[''] md:mt-8 md:py-10 md:pr-10 md:pl-12">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-3 right-12 z-10 h-7 w-24 rotate-2 bg-[repeating-linear-gradient(16deg,#cde1aa_0_8px,#b7d48f_8px_9px)] shadow-[0_8px_14px_rgba(61,41,22,0.12)]"
          />
          <p className="font-display text-3xl text-[#0d3333] italic">probablemente no</p>
          <ul className="mt-4 space-y-3 font-display text-2xl leading-snug text-[#3d2916] italic">
            <li>Buscas una solución de una semana sin cambiar nada de fondo.</li>
            <li>No tienes disposición para revisar tu alimentación y tu ciclo con atención.</li>
            <li>Necesitas una valoración médica urgente. Esto complementa a tu médico, no lo reemplaza.</li>
          </ul>
        </article>
      </Reveal>
    </section>
  );
}

function Voces() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const total = TESTIMONIOS.length;

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 5600);
    return () => window.clearInterval(id);
  }, [reduce, total, index]);

  const go = (step: number) => setIndex((current) => (current + step + total) % total);

  return (
    <section id="voces" className="relative scroll-mt-24 overflow-hidden bg-[#eeedeb] px-5 py-16 text-[#3d2916] md:px-8 md:py-24" aria-roledescription="carrusel">
      <PngSticker src="/stickers/flor.png" className="top-4 -right-16 w-36 md:top-8 md:-right-2 md:w-52" rotate={12} />
      <PngSticker src="/stickers/fresa.png" className="-right-16 -bottom-12 w-28 md:-right-2 md:-bottom-8 md:w-44" rotate={-14} delay={0.08} />
      <div className="relative z-[3] mx-auto max-w-3xl">
        <Reveal>
          <p className="font-display text-2xl text-[#0d3333] italic">voces</p>
          <h2 className="mt-2 font-display text-4xl leading-[0.92] md:text-6xl">
            Mujeres como tú, que ya lo vivieron
          </h2>
        </Reveal>
        <div className="relative mt-8 min-h-[18rem] overflow-hidden md:min-h-[15rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.blockquote
              key={TESTIMONIOS[index]}
              initial={reduce ? false : { opacity: 0, x: 56 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -56 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-2xl leading-snug text-[#0d3333] italic md:text-3xl"
              aria-live="polite"
            >
              “{TESTIMONIOS[index]}”
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            aria-label="Testimonio anterior"
            onClick={() => go(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#0d3333]/20 text-xl text-[#0d3333] transition hover:bg-[#0d3333] hover:text-[#cde1aa]"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {TESTIMONIOS.map((quote, i) => (
              <button
                key={quote.slice(0, 18)}
                type="button"
                aria-label={`Testimonio ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-[#0d3333]" : "w-2.5 bg-[#0d3333]/25"}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Testimonio siguiente"
            onClick={() => go(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#0d3333]/20 text-xl text-[#0d3333] transition hover:bg-[#0d3333] hover:text-[#cde1aa]"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="preguntas" className="relative scroll-mt-24 overflow-hidden bg-[#f7f4ec] px-5 py-16 text-[#3d2916] md:px-8 md:py-24">
      <PngSticker src="/stickers/almendras.png" className="-right-16 -bottom-10 w-44 md:-right-6 md:w-60" rotate={12} />
      <div className="relative z-[3] mx-auto max-w-3xl">
        <p className="font-display text-2xl text-[#0d3333] italic">dudas</p>
        <h2 className="mt-2 font-display text-4xl leading-[0.92] md:text-6xl">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-[#0d3333]/15">
          {FAQ.map((item, index) => (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-display text-2xl leading-tight text-[#3d2916] italic"
                aria-expanded={open === index}
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                {item.q}
                <span aria-hidden className="font-display text-3xl not-italic">
                  {open === index ? "–" : "+"}
                </span>
              </button>
              {open === index ? <p className="pb-4 text-sm leading-relaxed text-[#3d2916]/75">{item.a}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="relative overflow-hidden bg-[#7d648c] px-5 py-20 text-white md:px-8 md:py-28">
      <PngSticker src="/stickers/femenino.png" className="-top-6 -left-12 w-28 md:top-6 md:left-2 md:w-40" rotate={-8} />
      <PngSticker src="/stickers/pomelo.png" className="-bottom-8 -left-14 w-40 md:-left-4 md:w-56" rotate={-12} />
      <PngSticker src="/stickers/granada.png" className="-right-6 -bottom-4 w-28 md:right-8 md:w-40" rotate={12} delay={0.08} />
      <Reveal className="relative z-[3] mx-auto max-w-4xl text-center">
        <img src="/stickers/fases.png" alt="" width={1024} height={341} className="mx-auto mb-8 h-auto w-full max-w-md" />
        <h2 className="font-display text-4xl leading-[0.88] uppercase md:text-6xl">
          Tu cuerpo no está fallando.
        </h2>
        <p className="mt-4 font-display text-3xl italic">Solo nadie te había enseñado a escucharlo.</p>
        <div className="mt-8">
          <Pill href="#lista" tone="pine">
            Hazte Amiga de tus Hormonas — Empieza ahora
          </Pill>
        </div>
      </Reveal>
    </section>
  );
}

const PASO = "Tu siguiente paso es aprender a cuidar de ti con una estrategia que tenga sentido para tu vida.";

const OPCIONES = [
  {
    id: "hinchada",
    title: "Sentirme menos hinchada",
    text: "Quieres entender qué hábitos podrían influir en tu digestión y dejar de eliminar alimentos sin saber por qué.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-hinchada.png",
    note: "bg-[#f3a7c4]",
  },
  {
    id: "grasa",
    title: "Bajar grasa y ver cambios",
    text: "Buscas una alimentación que acompañe tus objetivos físicos sin vivir haciendo dietas cada lunes.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-grasa.png",
    note: "bg-[#9dce8a]",
  },
  {
    id: "ciclo",
    title: "Entender mis hormonas y mi ciclo",
    text: "Quieres comprender mejor tu ciclo, tus hábitos y cómo cuidar de tu salud femenina.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-ciclo.png",
    note: "bg-[#f0b08a]",
  },
  {
    id: "somp",
    title: "Entender mejor el SOMP",
    text: "Tienes un diagnóstico o dudas sobre tu salud hormonal y quieres educación nutricional confiable.",
    image: "/media/hazte-amiga-de-tus-hormonas/imagenes/logo-somp.png",
    note: "bg-[#8ec8e6]",
  },
] as const;

function Cuestionario() {
  const reduce = useReducedMotion();
  const [elegida, setElegida] = useState<(typeof OPCIONES)[number]["id"] | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#bec1f4] px-5 pt-12 pb-4 text-[#3d2916] md:px-8 md:pt-16 md:pb-8">
      <PngSticker src="/stickers/flor.png" className="top-2 -left-10 hidden w-36 md:block md:w-48" rotate={-16} />
      <PngSticker src="/stickers/limon.png" className="bottom-0 left-6 hidden w-24 md:block md:w-36" rotate={14} delay={0.08} />
      <PngSticker src="/stickers/fresa.png" className="top-6 -right-6 hidden w-28 md:block md:w-40" rotate={18} delay={0.12} />
      <PngSticker src="/stickers/tomates.png" className="right-4 -bottom-6 hidden w-28 md:block md:w-40" rotate={-12} delay={0.16} />
      <div className="relative z-[3] mx-auto max-w-3xl">
        <h2 className="text-center font-display text-[1.7rem] leading-[1.05] text-[#0d3333] md:text-4xl">
          ¿Qué te gustaría cambiar en la relación con tu cuerpo?
        </h2>
        <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm text-[#3d2916]/75 md:text-base">
          <span>Toca la opción que más se parece a ti.</span>
          <Mano reduce={reduce} />
        </p>
        <div className="relative mt-8 grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5">
          {OPCIONES.map((item, index) => {
            const activa = item.id === elegida;
            return (
              <div key={item.id}>
                <div className="relative z-[2]">
                  <span aria-hidden className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#efe6d6]" />
                  <button
                    type="button"
                    aria-pressed={activa}
                    aria-expanded={activa}
                    onClick={() => setElegida(item.id)}
                    className={`relative grid min-h-[5.75rem] w-full grid-cols-[4.25rem_1fr_auto] items-center border border-[#e4d7c4] bg-[#fffdf8] text-left shadow-[0_1px_0_rgba(61,41,22,0.04)] transition-transform duration-200 hover:-translate-y-0.5 md:min-h-24 ${
                      index % 2 === 0 ? "-rotate-[0.4deg]" : "rotate-[0.35deg]"
                    }`}
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, transparent 0 27px, rgba(126, 150, 178, 0.4) 27px 28px)",
                    }}
                  >
                    <img src={item.image} alt="" className="mx-auto h-11 w-11 object-contain md:h-12 md:w-12" />
                    <span aria-hidden className="absolute top-1.5 bottom-1.5 left-[4.25rem] w-[1.5px] bg-[#c4525a]/80" />
                    <span className="min-w-0 px-3">
                      <span
                        className={`font-display text-[1.65rem] leading-[1.12] text-[#0d3333] italic md:text-[1.85rem] ${
                          activa ? `box-decoration-clone px-1 ${item.note}` : ""
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`mr-3 grid h-5 w-5 place-items-center rounded-full border text-[0.65rem] ${
                        activa ? "border-[#1f7a45] bg-[#1f7a45] text-white" : "border-[#0d3333]/25 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </button>
                </div>
                <div aria-live="polite">
                  <AnimatePresence initial={false}>
                    {activa ? (
                      <motion.div
                        key={item.id}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-[1] overflow-hidden"
                      >
                        <div
                          className={`relative mx-5 -mt-3 mb-1 origin-top px-4 pt-6 pb-4 text-[#0d3333] shadow-[3px_4px_0_rgba(61,41,22,0.14)] ${item.note} ${
                            index % 2 === 0 ? "rotate-[1.4deg]" : "-rotate-[1.1deg]"
                          }`}
                        >
                          <span aria-hidden className="absolute top-2 left-1/2 h-3.5 w-12 -translate-x-1/2 bg-[#f7f4ec]/80" />
                          <p className="font-display text-lg leading-snug font-semibold text-[#0d3333] italic md:text-xl">{item.text}</p>
                          <p className="mt-2 font-display text-base leading-snug font-semibold text-[#0d3333] italic md:text-lg">{PASO}</p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Mano({ reduce }: { reduce: boolean | null }) {
  return (
    <motion.span
      aria-hidden
      className="inline-flex shrink-0"
      animate={reduce ? undefined : { y: [0, -3, 10, 10, 0] }}
      transition={
        reduce
          ? undefined
          : {
              duration: 1.05,
              repeat: Infinity,
              times: [0, 0.28, 0.46, 0.58, 0.82],
              ease: ["easeOut", "easeIn", "linear", "easeOut"],
            }
      }
    >
      <img src="/media/hazte-amiga-de-tus-hormonas/imagenes/logo-mano.png" alt="" className="h-10 w-10 object-contain" />
    </motion.span>
  );
}

function Lista({ abierta, onClose }: { abierta: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [plan, setPlan] = useState("lista");

  useEffect(() => {
    if (!abierta) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [abierta, onClose]);

  if (!abierta) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#3d2916]/55 px-4 py-8" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lista-titulo"
        className="relative mx-auto grid w-full max-w-5xl gap-8 rounded-[2rem] bg-[#bec1f4] px-6 py-10 text-[#3d2916] md:grid-cols-2 md:px-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full text-2xl leading-none text-[#0d3333]"
        >
          ×
        </button>
        <div>
          <p className="font-display text-2xl text-[#0d3333] italic">febrero 2027</p>
          <h2 id="lista-titulo" className="mt-2 font-display text-4xl leading-[0.92] md:text-5xl">Lista de espera</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#3d2916]/80">
            Acceso prioritario y aviso antes de que abran cupos. Quienes hagan el reto de noviembre guardan 15% de descuento.
          </p>
          <a href={ROUTES.vacaciones} className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">
            Ver el reto de noviembre
          </a>
        </div>
        {sent ? (
          <p className="self-center font-display text-3xl text-[#0d3333] italic">
            Quedaste en la lista. Te avisamos antes de abrir febrero.
          </p>
        ) : (
          <form
            className="grid gap-3"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const entry = {
                nombre: String(data.get("nombre") ?? ""),
                correo: String(data.get("correo") ?? ""),
                whatsapp: String(data.get("whatsapp") ?? ""),
                plan,
                origen: "hormonas",
                at: new Date().toISOString(),
              };
              const prev = JSON.parse(window.localStorage.getItem("mafe-lista") ?? "[]");
              window.localStorage.setItem("mafe-lista", JSON.stringify([...prev, entry]));
              setSent(true);
            }}
          >
            <input
              required
              name="nombre"
              placeholder="Tu nombre"
              aria-label="Tu nombre"
              className="rounded-full bg-[#f7f4ec] px-5 py-3 text-sm text-[#3d2916] outline-none ring-1 ring-[#0d3333]/15"
            />
            <input
              required
              type="email"
              name="correo"
              placeholder="Tu correo"
              aria-label="Tu correo"
              className="rounded-full bg-[#f7f4ec] px-5 py-3 text-sm text-[#3d2916] outline-none ring-1 ring-[#0d3333]/15"
            />
            <input
              name="whatsapp"
              placeholder="WhatsApp"
              aria-label="WhatsApp"
              className="rounded-full bg-[#f7f4ec] px-5 py-3 text-sm text-[#3d2916] outline-none ring-1 ring-[#0d3333]/15"
            />
            <label className="text-sm text-[#3d2916]/80">
              Me interesa
              <select
                value={plan}
                onChange={(event) => setPlan(event.target.value)}
                className="mt-2 w-full rounded-full bg-[#f7f4ec] px-5 py-3 text-sm text-[#3d2916] outline-none ring-1 ring-[#0d3333]/15"
              >
                <option value="lista">Solo la lista</option>
                <option value="basico">Básico · {PRECIOS.hormonasBasico.usd} · {PRECIOS.hormonasBasico.eur}</option>
                <option value="plus">Plus · {PRECIOS.hormonasPlus.usd} · {PRECIOS.hormonasPlus.eur}</option>
              </select>
            </label>
            <button
              type="submit"
              className="mt-2 rounded-full bg-[#0d3333] px-6 py-3 font-display text-base text-[#cde1aa] italic transition-transform hover:scale-[1.02] hover:bg-[#164444]"
            >
              Unirme a la lista de espera
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Pie() {
  const paginas = [
    { href: ROUTES.home, label: "Inicio" },
    { href: ROUTES.vacaciones, label: "Vacaciones sin restricción" },
    { href: ROUTES.hormonas, label: "Hazte amiga de tus hormonas" },
    { href: ROUTES.acompanamiento, label: "Consulta 1:1" },
  ];
  const redes = [
    { href: INSTAGRAM, label: "Instagram", icon: "instagram" },
    { href: TIKTOK, label: "TikTok", icon: "tiktok" },
    { href: WHATSAPP, label: "WhatsApp", icon: "whatsapp" },
  ] as const;

  return (
    <footer className="gals-type bg-[#0d3333] pb-[env(safe-area-inset-bottom)] text-[#d7ebc8]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-5 py-10 md:px-8">
        <nav aria-label="Páginas" className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm">
          {paginas.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#f7f4ec]">
              {item.label}
            </a>
          ))}
        </nav>
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
      </div>
    </footer>
  );
}

function RedIcon({ name }: { name: "instagram" | "tiktok" | "whatsapp" }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M14.2 3.2c.5 2.6 2 4.4 4.5 4.8v2.5c-1.5 0-2.9-.5-4.1-1.3v6.6c0 3.4-2.6 6-6 6-3.2 0-5.6-2.4-5.6-5.6 0-3.1 2.4-5.5 5.5-5.6v2.7c-1.5.1-2.8 1.3-2.8 2.9 0 1.6 1.3 2.9 2.9 2.9 1.7 0 3-1.3 3-3.1V3.2h2.6Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M19.1 4.9A9.8 9.8 0 0 0 2.1 15.2L1 21.2l6.1-1.1A9.8 9.8 0 0 0 19.1 4.9Zm-7 15.2c-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.6.7.7-3.5-.2-.3A8 8 0 1 1 12.1 20.1Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.5.1-.7l.5-.6.2-.4c.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1.2 1.9-1.2 3 0 2.4 1.8 4.6 4.1 6.1 2.1 1.4 2.9 1.1 3.5 1 .5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.2-.2-.4-.3Z" />
    </svg>
  );
}
