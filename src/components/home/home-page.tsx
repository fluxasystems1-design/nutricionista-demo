"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PngSticker } from "@/components/png-sticker";
import { Header, Pill } from "@/components/chrome";
import { Marquee, Reveal } from "@/components/motion";
import {
  CREDENCIALES,
  ENFOQUE,
  INSTAGRAM,
  LADY_BOSS,
  PRECIOS,
  ROUTES,
  TIKTOK,
  WHATSAPP,
} from "@/lib/site";

const PLANES = [
  {
    name: "Iniciemos juntos",
    price: PRECIOS.consultaInicio.cop,
    extra: `COP · ${PRECIOS.consultaInicio.eur}`,
    items: [
      "Valoración nutricional",
      "Evaluación y profundización de tu caso",
      "Plan de alimentación y suplementación",
      "Recetario: desayunos, almuerzos, cenas, snacks y smoothies verdes",
      "Prescripción de exámenes de laboratorio",
    ],
  },
  {
    name: "Basic",
    price: PRECIOS.consultaBasic.cop,
    extra: `COP · ${PRECIOS.consultaBasic.eur}`,
    items: ["Todo lo de Iniciemos juntos", "Lectura de etiquetas", "Consulta de control (20 días aprox.)"],
    featured: true,
  },
  {
    name: "Premium",
    price: PRECIOS.consultaPremium.cop,
    extra: `COP · ${PRECIOS.consultaPremium.eur}`,
    items: [
      "Todo lo de Basic",
      "Consulta de psicología: ansiedad, estrés, TCA y más",
    ],
  },
];

const slideEase = [0.25, 0.1, 0.25, 1] as const;

export function HomePage() {
  return (
    <>
      <Header
        overlay
        links={[
          { href: "#programas", label: "Programas" },
          { href: "#enfoque", label: "Enfoque" },
          { href: "#historia", label: "Historia" },
          { href: "#planes", label: "Planes" },
          { href: "#voces", label: "Voces" },
        ]}
        cta={{ href: "#programas", label: "Quiero empezar" }}
      />
      <main className="gals-type">
        <Hero />
        <Caminos />
        <Promesa />
        <SeparadorPromesa />
        <Enfoque />
        <Catalogo />
        <Separador />
        <Historia />
        <Planes />
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
        <Historias />
        <Cierre />
        <Credenciales />
      </main>
      <Pie />
    </>
  );
}

const FOTOS_PROMESA = [
  "/media/hazte-amiga-de-tus-hormonas/imagenes/separador.jpg",
  "/media/acompanamiento-90-dias/separador-desayuno.jpg",
  "/media/vacaciones-sin-restriccion/imagenes/lista-espera.jpg",
];

function SeparadorPromesa() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % FOTOS_PROMESA.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative h-44 overflow-hidden md:h-64" aria-hidden>
      {FOTOS_PROMESA.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"} ${i === 2 ? "object-[center_62%]" : "object-center"}`}
        />
      ))}
    </div>
  );
}

function Separador() {
  return (
    <div className="relative h-44 overflow-hidden md:h-64" aria-hidden>
      <img
        src="/media/home/separador.jpg"
        alt=""
        width={2000}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
      />
    </div>
  );
}

function Fila({ n, text, delay }: { n: string; text: string; delay: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: slideEase }}
      className="flex items-start gap-3 rounded-[1.35rem] bg-white px-5 py-4 shadow-[0_8px_22px_rgba(13,51,51,0.08)]"
    >
      <span className="font-display text-2xl leading-none text-[#b2bb68] italic">{n}</span>
      <span className="min-w-0 text-sm leading-relaxed text-[#3d2916] md:text-base">{text}</span>
    </motion.li>
  );
}

const CAMINOS = [
  {
    href: ROUTES.vacaciones,
    kicker: "Reto · 5 días",
    title: "Vacaciones sin restricción",
    price: `Desde ${PRECIOS.vacacionesBasico.cop} · ${PRECIOS.vacacionesBasico.eur}`,
    image: "/media/home/camino-vacaciones.png",
    imageClass: "object-[center_18%]",
  },
  {
    href: ROUTES.hormonas,
    kicker: "Programa · 4 semanas",
    title: "Hazte amiga de tus hormonas",
    price: `Desde ${PRECIOS.hormonasBasico.usd} USD · ${PRECIOS.hormonasBasico.eur}`,
    image: "/media/home/camino-hormonas.png",
    imageClass: "object-[center_22%]",
  },
  {
    href: ROUTES.acompanamiento,
    kicker: "Consulta privada · 90 días",
    title: "Consulta 1:1",
    price: `${PRECIOS.acompanamiento.cop} · ${PRECIOS.acompanamiento.eur}`,
    image: "/media/home/camino-consulta.png",
    imageClass: "object-[center_20%]",
  },
];

function Caminos() {
  return (
    <section id="landings" className="relative scroll-mt-24 overflow-x-clip bg-[#eeedeb] px-5 pt-8 pb-2 md:px-8 md:pt-12">
      <div className="relative mx-auto max-w-6xl">
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {CAMINOS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group relative flex min-h-[28rem] flex-col overflow-hidden rounded-[1.6rem] border-2 border-[#0d3333] transition-transform duration-300 hover:scale-[1.02] md:min-h-[34rem]"
          >
            <img src={item.image} alt="" className={`absolute inset-0 h-full w-full object-cover ${item.imageClass}`} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/60" />
            <div className="relative flex flex-1 flex-col px-4 pt-5 pb-4 text-center text-white md:px-5 md:pt-6">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase">{item.kicker}</p>
              <p className="mt-4 font-display text-[1.7rem] leading-[0.95] uppercase md:text-4xl">{item.title}</p>
              <p className="mt-2 text-sm text-white/85">{item.price}</p>
              <span className="mt-auto inline-flex items-center justify-center rounded-full bg-[#e7ef9a] px-5 py-3 text-sm font-semibold tracking-[0.14em] text-[#0d3333] uppercase">
                Ver plan
              </span>
            </div>
          </a>
        ))}
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
  const userSet = useRef(false);
  const [sound, setSound] = useState(false);

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

  return (
    <section id="inicio" className="overflow-x-clip bg-[#e2d5e8] px-4 pt-20 md:px-10 md:pt-24 lg:px-16">
      <h1 className="sr-only">Mafe Cerquera, nutricionista funcional y digestiva</h1>
      <div className="relative mx-auto max-w-7xl">
      <div className="relative z-10 rounded-[1.95rem] bg-[#fffdf8] p-1.5 shadow-[0_16px_36px_rgba(13,51,51,0.16)] md:rounded-[2.25rem] md:p-2">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-black md:rounded-[1.85rem]">
      <video
        ref={videoRef}
        className="aspect-video w-full bg-black object-contain"
        autoPlay={!reduce}
        muted
        loop
        playsInline
        controls={!!reduce}
        preload="metadata"
        aria-label="Mafe Cerquera en su cocina"
        onClick={() => {
          const video = videoRef.current;
          if (!video || !video.muted || reduce) return;
          toggleSound();
        }}
      >
        <source src="/media/home/hero.mp4" type="video/mp4" />
      </video>
      {!reduce && !sound ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            toggleSound();
          }}
          className="absolute top-1/2 left-1/2 z-20 w-[min(16rem,calc(100%-2.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#f7f4ec] px-5 py-3 text-center text-[#0d3333] shadow-[0_14px_32px_rgba(13,51,51,0.2)]"
        >
          <span className="block text-sm">Tu video ya comenzó</span>
          <span className="mt-1 block text-sm font-semibold underline underline-offset-4">Haz clic para escuchar</span>
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
      <PngSticker src="/stickers/sol-luna.png" className="top-2 -left-16 hidden w-32 md:top-4 md:-left-[7.5rem] md:block md:w-44" rotate={-14} />
      <PngSticker src="/stickers/pomelo.png" className="top-1 -right-14 hidden w-28 md:top-2 md:-right-[7rem] md:block md:w-40" rotate={16} delay={0.08} />
      <PngSticker src="/stickers/peonia.png" className="bottom-1 -left-16 hidden w-32 md:bottom-2 md:-left-[7.5rem] md:block md:w-48" rotate={10} delay={0.12} />
      <PngSticker src="/stickers/romero.png" className="top-[36%] -right-16 hidden w-32 md:-right-[7.5rem] md:block md:w-44" rotate={-24} delay={0.16} />
      <PngSticker src="/stickers/luna.png" className="-right-14 bottom-0 hidden w-28 md:-right-[7rem] md:bottom-1 md:block md:w-40" rotate={16} delay={0.2} />
      </div>

      <div className="-mx-4 mt-5 md:-mx-10 lg:-mx-16">
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

function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 10v4h3.2L12 18.2V5.8L7.2 10H4Z" />
      <path d="M15.2 9.2a3.6 3.6 0 0 1 0 5.6M17.6 6.8a7 7 0 0 1 0 10.4" />
    </svg>
  );
}

function Promesa() {
  const barras = ["Tu cuerpo", "lleva tiempo", "tratando de", "decirte algo"];

  return (
    <section className="relative overflow-x-clip bg-[#e2d5e8]">
      <PngSticker src="/stickers/granada.png" className="top-6 -left-6 hidden w-32 md:top-10 md:left-1 md:block md:w-48" rotate={-16} />
      <PngSticker src="/stickers/higo.png" className="bottom-4 -left-8 w-28 md:bottom-8 md:left-0 md:w-44" rotate={18} delay={0.08} />
      <PngSticker src="/stickers/miel.png" className="top-10 -right-8 hidden w-32 md:top-16 md:right-0 md:block md:w-48" rotate={22} delay={0.12} />
      <PngSticker src="/stickers/mora.png" className="right-0 bottom-6 w-24 md:right-3 md:bottom-10 md:w-36" rotate={-12} delay={0.16} />
      <div className="relative z-[3] mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[0.86fr_1.14fr] md:gap-14 md:px-8 md:py-28">
        <Reveal>
          <p className="font-display text-3xl text-[#0d3333] italic">promesa</p>
          <div className="mt-4 flex flex-col items-start gap-1.5">
            {barras.map((line) => (
              <span
                key={line}
                className="bg-[#e7ef9a] px-3 py-1.5 font-display text-[2rem] leading-none text-[#0d3333] uppercase md:text-5xl"
              >
                {line}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-sm font-display text-2xl leading-[1.05] text-[#0d3333] md:text-3xl">
            — en cómo digieres, en tu energía, en tu ciclo.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-px w-full bg-[#0d3333]/20" />
          <p className="mt-6 font-display text-[1.7rem] leading-[1.12] text-[#0d3333] md:text-4xl">
            Aquí vas a aprender a escucharlo, en lugar de pelear contra él con{" "}
            <span className="box-decoration-clone bg-[linear-gradient(transparent_64%,#e7ef9a_64%)]">otra dieta restrictiva.</span>
          </p>
          <div className="mt-6 space-y-4 text-lg leading-snug font-semibold text-ink/85 md:text-xl">
            <p>
              Quizás ya hiciste exámenes que salieron “normales” sin que eso te diera respuestas. Quizás te hinchas, te cansas, o sientes que tu cuerpo no responde como debería — y empiezas a preguntarte si algo está mal contigo. No es eso. Es que nadie te ha explicado que tu digestión, tu microbiota y tus hormonas son un mismo sistema, hablando un idioma que nunca te enseñaron a leer.
            </p>
            <p>
              Trabajamos ese sistema completo, desde los hábitos reales que puedes sostener en el tiempo — no desde un plan que se rompe la primera semana. Si algo necesita ajustarse, se ajusta a{" "}
              <span className="box-decoration-clone bg-[linear-gradient(transparent_64%,#e7ef9a_64%)]">tu caso real</span>
              {" "}— no por una lista genérica de prohibidos, sino con un acompañamiento que mira más allá de lo que tienes en el plato, para que vuelvas a confiar en tu cuerpo en lugar de desconfiar de él.
            </p>
          </div>
          <div className="mt-6 h-px w-full bg-[#0d3333]/20" />
        </Reveal>
      </div>
    </section>
  );
}

function Enfoque() {
  return (
    <section id="enfoque" className="relative scroll-mt-24 overflow-hidden bg-[#0d3333] text-[#f7f4ec]">
      <PngSticker src="/stickers/hoja-salvia.png" className="-top-16 -left-24 hidden w-64 md:-top-10 md:-left-16 md:block md:w-80" rotate={-18} />
      <PngSticker src="/stickers/hoja-roble.png" className="-right-20 -bottom-16 hidden w-64 md:-right-10 md:-bottom-8 md:block md:w-[22rem]" rotate={14} delay={0.08} />
      <div className="relative z-[3] mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="font-display text-2xl text-[#cde1aa] italic">mi enfoque</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-6xl">
            Nutrición funcional y digestiva,{" "}
            <span className="text-[#e7ef9a]">con mirada integral</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/80 md:text-lg">
            Soy nutricionista dietista de la Pontificia Universidad Javeriana, con mirada funcional y digestiva. No me quedo en “qué comes”: miro tu cuerpo como un sistema completo, donde tu digestión, tu microbiota y tus hormonas están conectadas, y trabajo contigo desde tus hábitos reales.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream/80 md:text-lg">
            En la consulta no nos centramos en el peso. Tu salud es el eje. Olvídate de contar calorías y de restringirte.
          </p>
          <p className="mt-4 font-display text-2xl text-[#f8bad1] italic">
            ¿Qué significa esto en la práctica cuando trabajamos juntas?
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ENFOQUE.map((item, i) => (
            <Fila key={item} n={String(i + 1).padStart(2, "0")} text={item} delay={(i % 3) * 0.08} />
          ))}
        </ul>
      </div>
    </section>
  );
}

const PROGRAMAS = [
  {
    kicker: "Programa digital · 4 semanas",
    title: "Hazte amiga de tus hormonas",
    text: "Acné que no se va, cabello que cae, un ciclo que hace lo que quiere — y la sensación de que “algo está mal contigo”. No lo está. Aprende a leer lo que tu cuerpo te dice sobre tu SOMP y tu resistencia a la insulina.",
    price: `Desde ${PRECIOS.hormonasBasico.usd} USD`,
    eur: PRECIOS.hormonasBasico.eur,
    href: ROUTES.hormonas,
    cta: "Quiero mi lugar",
    className: "bg-[#e2d5e8]",
    dark: false,
  },
  {
    kicker: "Mini-reto · 5 días · noviembre",
    title: "Vacaciones sin restricción",
    text: "Diciembre no tiene que ser el mes en que “todo se arruina” y enero el mes en que “empiezas de nuevo”. Desinflámate, disfruta tus vacaciones y llega a enero sin culpa ni castigo.",
    price: `Desde ${PRECIOS.vacacionesBasico.cop} COP`,
    eur: PRECIOS.vacacionesBasico.eur,
    href: ROUTES.vacaciones,
    cta: "Quiero mi plan",
    className: "bg-[#0d3333] text-[#f7f4ec]",
    dark: true,
  },
  {
    kicker: "Acompañamiento personalizado",
    title: "Consulta 1:1",
    text: "Ya intentaste dietas que no se sostienen. Aquí construimos un plan desde tus hábitos reales, con acompañamiento que mira tu digestión, tu microbiota y tus hormonas como el sistema conectado que son.",
    price: `Desde ${PRECIOS.consultaInicio.cop} COP`,
    eur: PRECIOS.consultaInicio.eur,
    href: "#planes",
    cta: "Quiero mi consulta",
    className: "border-2 border-[#0d3333]/35 bg-[#fffdf8]",
    dark: false,
  },
];

function Catalogo() {
  return (
    <section id="programas" className="relative scroll-mt-24 overflow-hidden bg-[#eeedeb] px-5 py-20 md:px-8 md:py-28">
      <PngSticker
        src="/stickers/palta.png"
        className="-right-8 bottom-4 hidden w-36 md:-right-2 md:block md:w-52"
        rotate={12}
      />
      <div className="relative z-[3] mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-2xl text-[#7d648c] italic">catálogo</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-[0.95] text-[#0d3333] md:text-6xl">
            Elige tu punto de partida
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PROGRAMAS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <a
                href={item.href}
                className={`group flex h-full flex-col rounded-[1.8rem] p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-[-0.4deg] md:p-7 ${item.className}`}
              >
                <p className={`font-display text-2xl italic ${item.dark ? "text-[#cde1aa]" : "text-[#7d648c]"}`}>{item.kicker}</p>
                <h3 className={`mt-3 font-display text-3xl leading-[1.05] ${item.dark ? "text-[#f7f4ec]" : "text-[#0d3333]"}`}>{item.title}</h3>
                <p className={`mt-4 flex-1 text-sm leading-relaxed ${item.dark ? "text-[#f7f4ec]/85" : "text-[#3d2916]/85"}`}>{item.text}</p>
                <p className={`mt-6 font-display text-2xl ${item.dark ? "text-[#f7f4ec]" : "text-[#0d3333]"}`}>{item.price}</p>
                <p className={`text-sm ${item.dark ? "text-[#f7f4ec]/70" : "text-[#3d2916]/70"}`}>{item.eur}</p>
                <span className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#e7ef9a] px-6 py-3 text-center font-display text-base text-[#0d3333] italic">
                  {item.cta}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section id="historia" className="relative scroll-mt-24 overflow-hidden bg-[#e2d5e8]">
      <PngSticker src="/stickers/peonia.png" className="-top-10 -right-8 w-36 md:-right-2 md:w-48" rotate={14} />
      <div className="relative z-[3] mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[minmax(16rem,0.82fr)_1.18fr] md:gap-14 md:px-8 md:py-28">
        <figure className="mx-auto w-full max-w-md md:max-w-none">
          <div className="rounded-[1.6rem] bg-[#fffdf8] p-3 shadow-[0_18px_40px_rgba(13,51,51,0.16)] md:-rotate-1 md:p-4">
            <img
              src="/media/home/historia-mafe.png"
              alt="Mafe Cerquera"
              width={510}
              height={768}
              className="aspect-[2/3] w-full rounded-[1.15rem] object-cover"
            />
          </div>
        </figure>
        <Reveal>
          <p className="font-display text-2xl text-[#7d648c] italic">mi historia</p>
          <h2 className="mt-3 font-display text-4xl text-[#0d3333] md:text-5xl">
            ¡Bienvenida a mi mundo!
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/85 md:text-lg">
            <p>
              Lo que acabas de leer no es solo una promesa de marketing. Es lo que yo misma tuve que aprender en carne propia.
            </p>
            <p>
              Mi pasión por la nutrición nació a través de mi experiencia y de un giro de 180 grados en el que logré una mejor versión de mí misma, cambiando hábitos e implementando estilos de vida saludables sin restricciones.
            </p>
            <p>
              Por esta razón quiero compartir todo este conocimiento contigo, apoyarte y acompañarte a lograr tu mejor versión.
            </p>
            <p>
              Sé que empezar un proceso puede dar miedo, especialmente cuando lo has intentado tantas veces antes. Por eso quiero que aquí te sientas escuchada, acompañada y entendida. Mi objetivo no es solo ayudarte a cambiar físicamente, sino enseñarte a construir hábitos y una relación con la comida que realmente puedas disfrutar y mantener en el tiempo.
            </p>
          </div>
          <p className="mt-8 font-display text-2xl text-[#0d3333] italic">— Mafe Cerquera</p>
          <p className="mt-2 text-sm text-[#0d3333]/70">
            María Fernanda Cerquera · fundadora de Lady Boss Club Colombia
          </p>
        </Reveal>
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
      <div className="relative z-[3] mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-[0.86fr_1.14fr] md:gap-12 md:px-8 md:py-24">
        <figure className="mx-auto w-full max-w-sm md:max-w-none">
          <div className="rounded-[1.6rem] bg-[#fffdf8] p-3 shadow-[0_18px_40px_rgba(13,51,51,0.16)] md:p-4">
            <img
              src="/media/home/mafe-cocina.png"
              alt="Mafe Cerquera"
              width={524}
              height={800}
              className="aspect-[2/3] w-full rounded-[1.15rem] object-cover object-[center_18%]"
            />
          </div>
        </figure>
        <div className="rounded-[1.8rem] bg-[#fffdf8] px-6 py-8 shadow-[0_18px_40px_rgba(13,51,51,0.12)] md:px-10 md:py-12">
          <h2 className="font-display text-4xl leading-[0.92] text-[#0d3333] uppercase md:text-6xl">
            Educación & credenciales
          </h2>
          <ul className="mt-8 space-y-4 text-base leading-relaxed text-[#0d3333] md:text-lg">
            {CREDENCIALES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7d648c]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Planes() {
  return (
    <section id="planes" className="scroll-mt-24 bg-[#eeedeb] px-5 py-16 text-[#3d2916] md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="font-display text-2xl text-[#0d3333] italic">consulta 1:1</p>
          <h2 className="mt-2 font-display text-4xl leading-[0.92] text-[#0d3333] md:text-6xl">Iniciemos juntos</h2>
        </Reveal>
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANES.map((plan) => (
            <article
              key={plan.name}
              className="flex h-full flex-col rounded-[1.75rem] border-2 border-[#0d3333]/35 bg-[#fffdf8] px-7 py-9 text-center"
            >
              <h3 className="flex min-h-[4.8rem] items-center justify-center font-display text-3xl leading-none tracking-wide text-[#0d3333] uppercase">
                {plan.name}
              </h3>
              <p className="mt-6 font-display text-5xl leading-none text-[#0d3333]">{plan.price}</p>
              <p className="mt-2 text-sm text-[#3d2916]/70">{plan.extra}</p>
              <ul className="mx-auto mt-6 w-full max-w-xs flex-1 space-y-2 text-left text-sm leading-relaxed">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d3333]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Pill
                  href={`${WHATSAPP}?text=${encodeURIComponent(`Hola Mafe, quiero información del plan ${plan.name}.`)}`}
                  tone="cream"
                  className="w-full !bg-[#e7ef9a] !text-[#0d3333] hover:!bg-[#d7e388]"
                >
                  quiero este plan
                </Pill>
              </div>
            </article>
          ))}
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

const MENSAJES = [
  "Quería un cambio en mi vida respecto a la alimentación que es parte fundamental para la buena salud física y mental y de pronto vi el trabajo que hacías como nutricionista para que logremos una relación magnífica con la comida, sin restricciones pero consciente. Desde que comencé mi proceso he sentido ese cambio grande que quería, he mejorado mi tránsito intestinal, mi estado de ánimo, cambios físicos y además con los suplementos que me has recomendado siento como me ayudan y complementan a los cambios que quiero seguir logrando. Graciasssss!! Sin duda la mejor y la mejor nutricionista que pude encontrar para mi salud y mi cuerpo!!",
  "Mafee mil gracias por tu acompañamiento en todo este proceso! Hoy me siento más segura de que puedo lograr lo que me propongo y muy feliz de poder haber cambiado mi estilo de vida a uno más saludable! Toodoo gracias a tiiii eres la mejor. La mejor decisión poder acceder a tu programa",
  "Holaaa Maf. Bueno te quiero agradecer un montón, no solo ayudaste a tener una relación sana con la comida sino que también me ayudaste a crear un hábito único. Me ayudaste a entender el proceso y lo saludable que es comer bien. Pues con este hábito empezaron a llegar hábitos nuevos como el cuidarme física, mental y emocionalmente y el más importante el buen descanso. Con esto a llegado cosas grandiosas como que mi piel está más hermosa sin tantos granos en la cara, mi cuerpo se siente más liviano, mi cabello está más brillante. También te agradezco porque no solo me ayudaste a mí si no también a mi familia al ellos adaptarse a lo que yo como ellos empezaron a ver también cambios",
  "Mi salud intestinal ha mejorado, me entusiasma mucho hacer desayuno, complementar mis almuerzos y hacer mis cenas.",
];

function RielHistorias() {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);

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
      className="stories-rail relative z-[3] -mx-5 mt-14 overflow-hidden md:-mx-8"
      role="region"
      aria-label="Historias"
    >
      <div className="animate-marquee-stories flex w-max items-center gap-4">
        {loop.map((item, i) => {
          const copy = i >= HISTORIAS_RIEL.length;
          const frame = item.tall ? "aspect-[9/16]" : "aspect-[3/4]";
          return (
            <article
              key={`${item.src}-${i}`}
              aria-hidden={copy || undefined}
              className="w-40 shrink-0 overflow-hidden rounded-[1.3rem] border-2 border-[#0d3333] bg-black md:w-52"
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
  const reduce = useReducedMotion();
  const dir = useRef(1);
  const [index, setIndex] = useState(0);
  const [per, setPer] = useState(1);
  const total = MENSAJES.length;
  const pages = Math.ceil(total / per);
  const page = ((index % pages) + pages) % pages;
  const visible = MENSAJES.slice(page * per, page * per + per);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      setPer(mq.matches ? 2 : 1);
      setIndex(0);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const go = (next: number) => {
    dir.current = next > index ? 1 : -1;
    setIndex(next);
  };

  return (
    <section id="voces" className="relative scroll-mt-24 overflow-hidden bg-[#e2d5e8] px-5 py-20 md:px-8 md:py-28">
      <PngSticker src="/stickers/flor.png" className="top-4 -right-16 hidden w-36 md:top-8 md:-right-2 md:block md:w-52" rotate={12} />
      <div className="relative z-[3] mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl leading-[0.95] text-[#0d3333] md:text-6xl">
            Historias que inspiran
          </h2>
        </Reveal>
        <div className="relative mt-10" role="region" aria-roledescription="carrusel" aria-label="Testimonios">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${per}-${page}`}
              aria-roledescription="diapositiva"
              aria-label={`Página ${page + 1} de ${pages}`}
              initial={reduce ? false : { opacity: 0, x: dir.current * 56 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: dir.current * -56 }}
              transition={{ duration: 0.4, ease: slideEase }}
              className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8"
            >
              {visible.map((mensaje, offset) => (
                <article
                  key={mensaje.slice(0, 24)}
                  className={`relative h-full min-h-[18rem] overflow-hidden bg-[#fffdf6] px-5 py-6 shadow-[0_16px_34px_rgba(13,51,51,0.14)] md:px-7 ${offset % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"}`}
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, transparent 2.35rem, rgba(196, 92, 106, 0.7) 2.35rem, rgba(196, 92, 106, 0.7) calc(2.35rem + 2px), transparent calc(2.35rem + 2px)), repeating-linear-gradient(to bottom, transparent 0, transparent 2.05rem, rgba(13, 51, 51, 0.14) 2.05rem, rgba(13, 51, 51, 0.14) calc(2.05rem + 1px))",
                    backgroundPosition: "0 1.35rem, 0 1.15rem",
                  }}
                >
                  <span aria-hidden className="absolute top-8 left-3 h-3.5 w-3.5 rounded-full bg-[#e2d5e8] ring-1 ring-[#0d3333]/15" />
                  <span aria-hidden className="absolute bottom-8 left-3 h-3.5 w-3.5 rounded-full bg-[#e2d5e8] ring-1 ring-[#0d3333]/15" />
                  <p className="pl-8 font-[family-name:var(--font-caveat)] text-[1.65rem] leading-[2.06rem] text-[#16343a] md:text-[1.7rem]">
                    {mensaje}
                  </p>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Testimonios anteriores"
              onClick={() => go(index - 1)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#0d3333] text-[#0d3333] transition hover:bg-[#0d3333] hover:text-[#fffdf8]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 5 8 12l7 7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: pages }, (_, dot) => (
                <button
                  key={dot}
                  type="button"
                  aria-label={`Página ${dot + 1}`}
                  aria-current={dot === page ? "true" : undefined}
                  onClick={() => go(dot)}
                  className={`h-2.5 rounded-full bg-[#0d3333] transition-all ${dot === page ? "w-8" : "w-2.5 opacity-30"}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Testimonios siguientes"
              onClick={() => go(index + 1)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#0d3333] text-[#0d3333] transition hover:bg-[#0d3333] hover:text-[#fffdf8]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <RielHistorias />
    </section>
  );
}

function Cierre() {
  return (
    <section className="relative overflow-hidden bg-[#eeedeb] px-5 py-20 md:px-8 md:py-28">
      <PngSticker src="/stickers/hoja.png" className="-top-8 right-4 hidden w-32 md:block md:w-44" rotate={-20} />
      <div className="relative z-[3] mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.05] text-forest md:text-6xl">
            Iniciemos este camino juntas
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/85 md:text-lg">
            <p>
              Recuerda que solo tú puedes iniciar este cambio y que no se trata de llenarte de restricciones o dejar de comer, sino de encontrar alternativas saludables y que aprendas a conectar con tu cuerpo, alma y mente.
            </p>
            <p>Es tu turno de iniciar este cambio, nadie lo hará por ti.</p>
            <p className="font-display text-2xl text-forest italic">
              Aquí te espero para que iniciemos este cambio junto(a)s.
            </p>
          </div>
          <div className="mt-8">
            <Pill href="#programas">Quiero empezar</Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pie() {
  const paginas = [
    { href: ROUTES.home, label: "Inicio" },
    { href: ROUTES.vacaciones, label: "Vacaciones sin restricción" },
    { href: ROUTES.hormonas, label: "Hazte amiga de tus hormonas" },
    { href: ROUTES.acompanamiento, label: "Consulta 1:1" },
    { href: LADY_BOSS, label: "Lady Boss Club" },
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
            <a
              key={item.href}
              href={item.href}
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              className="transition hover:text-[#f7f4ec]"
            >
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
