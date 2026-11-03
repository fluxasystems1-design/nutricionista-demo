"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PngSticker } from "@/components/png-sticker";
import { Header, Pill } from "@/components/chrome";
import { RielHistorias, RielTestimonios } from "@/components/home/home-page";
import { Marquee, Reveal } from "@/components/motion";
import { INSTAGRAM, PRECIOS, ROUTES, TIKTOK, WHATSAPP } from "@/lib/site";

const slideEase = [0.25, 0.1, 0.25, 1] as const;

const SOLA = [
  "Buscas dietas y consejos diferentes cada semana.",
  "No sabes qué recomendaciones se adaptan a ti.",
  "Te cuesta organizarte cuando cambia tu rutina.",
  "Sientes que tienes que volver a empezar constantemente.",
];

const CON_MAFER = [
  "Recibes orientación individual basada en tus necesidades.",
  "Tienes una estrategia alimentaria diseñada para ti.",
  "Aprendes a organizar tus comidas en situaciones reales.",
  "Cuentas con seguimiento y espacio para realizar ajustes.",
];

const PARA_TI = [
  "Has probado tantas recomendaciones que ya no sabes cuáles tienen sentido para ti.",
  "Quieres comprender mejor tu digestión y tus hábitos alimentarios, sin seguir eliminando alimentos por tu cuenta.",
  "Te gustaría dejar de sentir que una salida o unas vacaciones arruinan todo tu progreso.",
  "Sabes que quieres cuidarte, pero necesitas ayuda para organizarlo dentro de tu rutina.",
  "Buscas una nutricionista que conozca tu caso y te acompañe más allá de entregarte un menú.",
];

const ETAPAS = [
  {
    n: "01",
    title: "Primero, vamos a conocerte.",
    text: "Revisamos tus hábitos, objetivos, antecedentes y necesidades. A partir de esa evaluación, Mafer diseña una estrategia nutricional individualizada.",
  },
  {
    n: "02",
    title: "Después, lo llevamos a tu vida real.",
    text: "Aprendes a organizar tus comidas, adaptar tus decisiones y utilizar herramientas prácticas. Mafer revisa contigo las dificultades y realiza ajustes cuando sea necesario.",
  },
  {
    n: "03",
    title: "Y construimos tu siguiente paso.",
    text: "Revisamos tus avances, lo que te ha funcionado y las herramientas que puedes seguir aplicando al finalizar el acompañamiento.",
  },
];

const INCLUYE = [
  {
    title: "Valoración nutricional integral",
    text: "Una primera sesión privada de 75 minutos para conocer tu punto de partida.",
    icon: "/media/acompanamiento-90-dias/incluye-valoracion.png",
  },
  {
    title: "Tres controles personalizados",
    text: "Encuentros de 40 minutos para revisar avances y realizar ajustes.",
    icon: "/media/acompanamiento-90-dias/incluye-controles.png",
  },
  {
    title: "Tu plan de alimentación",
    text: "Diseñado según tus necesidades, preferencias, objetivos y rutina.",
    icon: "/media/acompanamiento-90-dias/incluye-plan.png",
  },
  {
    title: "Biblioteca de recursos prácticos",
    text: "Recetario, herramientas para hacer mercado, organizar comidas y alimentarte fuera de casa.",
    icon: "/media/acompanamiento-90-dias/incluye-recursos.png",
  },
  {
    title: "Acompañamiento entre sesiones",
    text: "Espacio para dudas puntuales, con canales, horarios y tiempos de respuesta definidos.",
    icon: "/media/acompanamiento-90-dias/incluye-acompanamiento.png",
  },
  {
    title: "Tu espacio digital privado",
    text: "Acceso seguro a tus materiales y recomendaciones durante el acompañamiento.",
    icon: "/media/acompanamiento-90-dias/incluye-espacio.png",
  },
];

const FAQ = [
  {
    q: "¿Tengo que seguir una dieta estricta?",
    a: "El acompañamiento se adapta a tus necesidades nutricionales. La intención es construir herramientas prácticas y sostenibles, sin imponer restricciones innecesarias.",
  },
  {
    q: "¿Qué pasa si tengo dificultades digestivas o una condición hormonal?",
    a: "El proceso puede ayudarte a organizar tu alimentación. No reemplaza la valoración ni el tratamiento de tu médico.",
  },
  {
    q: "¿Las consultas son virtuales?",
    a: "Pueden ser presenciales u online, en Colombia y España.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: `Hay una opción propuesta de 3 pagos de ${PRECIOS.acompanamientoCuota.cop} COP · ${PRECIOS.acompanamientoCuota.eur}. Las condiciones de pago quedan por confirmar.`,
  },
  {
    q: "¿Qué sucede cuando terminan los 90 días?",
    a: "En la última etapa revisamos lo que te funcionó y las herramientas que puedes seguir usando por tu cuenta.",
  },
];

export function AcompanamientoPage() {
  const [inscripcionAbierta, setInscripcionAbierta] = useState(false);
  const cerrarInscripcion = useCallback(() => setInscripcionAbierta(false), []);

  useEffect(() => {
    const abrir = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href="#inscripcion"]');
      if (!link) return;
      event.preventDefault();
      setInscripcionAbierta(true);
    };
    document.addEventListener("click", abrir);
    return () => document.removeEventListener("click", abrir);
  }, []);

  return (
    <>
      <Header
        links={[
          { href: "#proceso", label: "El proceso" },
          { href: "#incluye", label: "Qué incluye" },
          { href: "#preguntas", label: "Preguntas" },
        ]}
        cta={{ href: "#inscripcion", label: "Quiero comenzar", tone: "black" }}
      />
      <main className="gals-type">
        <Hero />
        <Marquee
          face="display"
          mark="★"
          className="bg-[#0d3333] text-[#cde1aa]"
          items={[
            "90 días contigo",
            "sin empezar otra dieta",
            "una guía hecha para ti",
            "hábitos que puedas sostener",
            "atención personalizada",
            "tu cuerpo, tus horarios, tu vida",
          ]}
        />
        <Inversion />
        <SeparadorDesayuno />
        <Promesa />
        <Comparacion />
        <Marquee
          face="display"
          mark="★"
          className="bg-[#0d3333] text-[#cde1aa]"
          items={[
            "tu vida real",
            "sin empezar de cero",
            "comer bien",
            "con acompañamiento",
            "hábitos que puedas sostener",
          ]}
        />
        <Voces />
        <ParaTi />
        <Oferta />
        <Incluye />
        <PorQue />
        <Preguntas />
      </main>
      <Inscripcion abierta={inscripcionAbierta} onClose={cerrarInscripcion} />
      <Pie />
    </>
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

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f3eee6] px-4 pt-4 pb-12 text-[#3d2916] md:px-8 md:py-16">
      <div className="relative z-[3] mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,1fr)] lg:gap-x-10 lg:gap-y-6">
        <h1 className="mx-auto w-full max-w-xl lg:mx-0">
          <img
            src="/media/acompanamiento-90-dias/imagenes/titulo-hero.png"
            alt="Comer bien no debería sentirse tan complicado. 90 días en tu vida real."
            width={1024}
            height={682}
            className="mx-auto h-auto w-full lg:mx-0"
          />
        </h1>
        <figure className="relative z-10 mx-auto w-full max-w-md lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:max-w-none">
          <div className="relative rotate-1 rounded-[1.5rem] bg-[#f7f4ec] p-2.5 shadow-[0_22px_44px_rgba(61,41,22,0.16)] md:rotate-[2deg] md:p-3">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-3 left-8 z-10 h-7 w-24 -rotate-3 bg-[repeating-linear-gradient(-18deg,#e7d7ef_0_8px,#cbb8d4_8px_9px)] shadow-[0_8px_14px_rgba(61,41,22,0.12)]"
            />
            <img
              src="/media/acompanamiento-90-dias/imagenes/hero-cocina.jpg"
              alt="Mafe Cerquera en su cocina"
              width={819}
              height={1024}
              className="h-auto w-full rounded-[0.95rem]"
            />
          </div>
        </figure>
        <div className="mx-auto max-w-xl text-center lg:col-start-1 lg:mx-0 lg:text-left">
          <p className="font-display text-2xl leading-snug text-[#3d2916] italic md:text-3xl">
            90 días para aprender a alimentarte en tu vida real.
          </p>
          <div className="mt-6">
            <Pill href="#inscripcion" tone="black">
              Quiero empezar mi proceso
            </Pill>
          </div>
        </div>
      </div>
    </section>
  );
}

function Promesa() {
  return (
    <section className="relative overflow-hidden bg-[#eeedeb] px-5 py-16 text-[#3d2916] md:px-8 md:py-24">
      <PngSticker src="/stickers/flor.png" className="-top-6 -left-8 w-24 md:left-2 md:w-36" rotate={-14} />
      <PngSticker src="/stickers/fresa.png" className="right-1 bottom-6 w-16 md:right-6 md:w-28" rotate={16} delay={0.08} />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <Reveal>
          <p className="font-display text-2xl text-[#0d3333] italic">imagina</p>
          <h2 className="mt-2 max-w-4xl font-display text-4xl leading-[0.92] text-[#3d2916] md:text-6xl">
            Imagina dejar de preguntarte todo el tiempo qué deberías comer.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3d2916]/80">
            ¿Y si en lugar de empezar otra dieta, por fin aprendes a alimentarte de una manera que funcione para tu cuerpo, tus horarios y tu vida?
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3d2916]/80">
            Tener una guía creada para ti. Saber cómo organizar tus comidas, disfrutar tus planes y tomar decisiones con más confianza, incluso cuando tu rutina cambia.
          </p>
          <p className="mt-4 max-w-2xl font-display text-3xl leading-snug text-[#3d2916] italic">
            No se trata de comer perfecto. Se trata de aprender a cuidarte con herramientas que puedas sostener.
          </p>
        </Reveal>
        <div className="relative mx-auto w-full max-w-sm pb-8">
          <img
            src="/media/acompanamiento-90-dias/tostadas.png"
            alt="Tostadas con huevo y fresas"
            width={312}
            height={470}
            className="w-[78%] -rotate-3 rounded-[1.4rem] shadow-[0_16px_30px_rgba(13,51,51,0.14)]"
          />
          <img
            src="/media/acompanamiento-90-dias/tacos.png"
            alt="Tacos con verdura y queso"
            width={312}
            height={470}
            className="-mt-20 ml-auto w-[72%] rotate-2 rounded-[1.4rem] shadow-[0_16px_30px_rgba(13,51,51,0.16)]"
          />
        </div>
      </div>
    </section>
  );
}

function Comparacion() {
  const reduce = useReducedMotion();
  const columns = [
    {
      kicker: "sola",
      title: "Cuando lo haces sola",
      items: SOLA,
      from: "-100%",
      delays: [0, 0.05, 0.2, 0.15],
      className: "bg-[#0d3333] px-6 py-16 text-[#cde1aa] md:px-12 md:py-24",
      kickerClass: "text-[#cde1aa]",
    },
    {
      kicker: "con mafer",
      title: "Con el acompañamiento de Mafer",
      items: CON_MAFER,
      from: "100%",
      delays: [0, 0.05, 0.1, 0.2],
      className: "bg-[#bec1f4] px-6 py-16 text-[#3d2916] md:px-12 md:py-24",
      kickerClass: "text-[#0d3333]",
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="bg-[#0d3333] px-5 pt-16 text-[#cde1aa] md:px-8 md:pt-24">
        <h2 className="mx-auto max-w-5xl font-display text-4xl leading-[0.92] md:text-6xl">
          Quizás no necesitas comenzar desde cero otra vez.
        </h2>
      </div>
      <div className="grid md:grid-cols-2">
        {columns.map((col) => (
          <div key={col.title} className={`relative min-w-0 ${col.className} ${col.kicker === "con mafer" ? "pb-52 md:pb-64" : ""}`}>
            {col.kicker === "con mafer" ? (
              <>
                <video
                  className="pointer-events-none absolute top-2 right-1 z-20 aspect-[4/3] w-36 rotate-[7deg] rounded-[1.15rem] object-cover shadow-[0_16px_28px_rgba(13,51,51,0.24)] md:top-6 md:right-5 md:w-56"
                  autoPlay={!reduce}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden
                >
                  <source src="/media/acompanamiento-90-dias/testimonio-1.mp4" type="video/mp4" />
                </video>
                <video
                  className="pointer-events-none absolute bottom-3 left-1 z-20 aspect-[4/3] w-44 -rotate-[7deg] rounded-[1.15rem] object-cover shadow-[0_16px_28px_rgba(13,51,51,0.24)] md:bottom-6 md:left-5 md:w-64"
                  autoPlay={!reduce}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden
                >
                  <source src="/media/acompanamiento-90-dias/testimonio-2.mp4" type="video/mp4" />
                </video>
              </>
            ) : (
              <PngSticker src="/stickers/granada.png" className="bottom-2 -left-8 w-20 md:bottom-6 md:left-2 md:w-32" rotate={-12} />
            )}
            <p className={`relative z-[3] font-display text-2xl italic ${col.kickerClass}`}>{col.kicker}</p>
            <h3 className="relative z-[3] mt-2 font-display text-4xl leading-[0.95] italic md:text-5xl">{col.title}</h3>
            <ul className="relative z-[3] mt-8 space-y-3">
              {col.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, x: col.from }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.6, delay: col.delays[i], ease: slideEase }}
                  className="flex items-start gap-3 rounded-[1.35rem] bg-[#f4f3f1] px-5 py-4 shadow-[0_8px_22px_rgba(13,51,51,0.08)]"
                >
                  <span className="font-display text-2xl leading-none text-[#0d3333] italic">0{i + 1}</span>
                  <span className="text-sm leading-relaxed text-[#3d2916] md:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function SeparadorDesayuno() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/media/acompanamiento-90-dias/separador-desayuno.jpg"
        alt=""
        width={1800}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover object-[center_32%]"
      />
      <div className="relative flex min-h-[22rem] items-center justify-center px-5 py-14 md:min-h-[28rem] md:px-8">
        <p className="w-full max-w-xl rounded-[1.75rem] bg-[#fffdf8]/90 px-6 py-8 text-center font-display text-[1.7rem] leading-[1.08] text-[#0d3333] shadow-[0_18px_40px_rgba(13,51,51,0.16)] md:px-10 md:py-10 md:text-[2.15rem]">
          90 días para aprender a alimentarte en tu vida real.
        </p>
      </div>
    </section>
  );
}

function ParaTi() {
  const reduce = useReducedMotion();
  const columns = [PARA_TI.slice(0, 3), PARA_TI.slice(3)];
  const delays = [
    [0, 0.05, 0.2],
    [0, 0.12],
  ];

  return (
    <section className="relative overflow-hidden bg-[#0d3333] px-5 py-16 text-[#cde1aa] md:px-8 md:py-24">
      <PngSticker src="/stickers/hoja-higuera.png" className="-top-20 -left-36 w-56 md:-top-28 md:-left-52 md:w-[22rem]" rotate={-18} />
      <PngSticker src="/stickers/olivo.png" className="-top-6 -right-16 w-64 md:-top-8 md:-right-20 md:w-[22rem]" rotate={10} delay={0.05} />
      <PngSticker src="/stickers/olivo.png" className="-bottom-10 -left-16 w-56 md:-bottom-12 md:w-[20rem]" rotate={16} delay={0.16} flip />
      <PngSticker src="/stickers/hoja-higuera.png" className="-bottom-10 -right-16 w-64 md:-bottom-14 md:w-[24rem]" rotate={-12} delay={0.2} flip />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-2xl text-[#cde1aa] italic">¿te suena?</p>
          <h2 className="mt-2 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">
            Tal vez llegaste hasta aquí porque...
          </h2>
        </Reveal>
        <div className="mt-10 grid items-start gap-3 md:grid-cols-2 md:gap-x-8">
          {columns.map((col, colIndex) => (
            <ul key={colIndex} className="space-y-3">
              {col.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, x: colIndex === 0 ? "-100%" : "100%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.6, delay: delays[colIndex][i], ease: slideEase }}
                  className="flex items-start gap-3 rounded-[1.35rem] bg-[#f4f3f1] px-5 py-4 shadow-[0_8px_22px_rgba(13,51,51,0.08)]"
                >
                  <span className="font-display text-2xl leading-none text-[#0d3333] italic">0{colIndex * 3 + i + 1}</span>
                  <span className="text-sm leading-relaxed text-ink md:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          ))}
        </div>
        <Reveal className="mt-10 max-w-2xl">
          <p className="font-display text-3xl leading-snug italic">
            Si te identificaste con varias de estas situaciones, este espacio podría ser para ti.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#cde1aa]/85">No tienes que resolver todo antes de buscar ayuda.</p>
          <p className="mt-2 text-base leading-relaxed text-[#cde1aa]/85">
            Puedes empezar con tus dudas, tus hábitos actuales y lo que hoy necesitas trabajar.
          </p>
          <div className="mt-8">
            <Pill href="#inscripcion" tone="lilac">
              Quiero conocer si este proceso es para mí
            </Pill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Oferta() {
  const reduce = useReducedMotion();
  const tilt = ["md:-rotate-2", "md:rotate-1 md:translate-y-8", "md:rotate-2"];

  return (
    <section id="proceso" className="relative scroll-mt-24 overflow-hidden bg-[#bec1f4] text-[#3d2916]">
      <div aria-hidden className="field-lines pointer-events-none absolute inset-0" />
      <PngSticker src="/stickers/higo.png" className="-top-6 -right-4 w-32 md:-top-8 md:right-4 md:w-48" rotate={14} />
      <PngSticker src="/stickers/miel.png" className="-bottom-6 -left-10 w-28 md:bottom-2 md:left-0 md:w-40" rotate={-36} delay={0.08} />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <p className="font-display text-xl text-[#0d3333] italic">tu proceso</p>
            <div className="mt-2 flex items-end gap-3">
              <p aria-hidden className="shrink-0 font-display text-6xl leading-[0.72] text-[#0d3333] italic md:text-7xl">
                90
              </p>
              <h2 className="font-display text-3xl leading-[0.95] md:text-4xl">
                <span className="sr-only">90 </span>
                Nutre tu bienestar
              </h2>
            </div>
            <p className="mt-4 text-base leading-relaxed">
              Tres meses para dedicarte el tiempo que necesitas, con una guía creada especialmente para ti.
            </p>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Durante 90 días trabajaremos juntas para comprender tu alimentación, identificar qué necesitas y llevar esos cambios a tu vida cotidiana.
            </p>
            <p className="mt-3 font-display text-xl leading-snug italic md:text-2xl">
              No vas a recibir simplemente un menú para seguir. Tendrás un proceso de evaluación, orientación, aprendizaje y seguimiento para construir hábitos con mayor claridad y autonomía.
            </p>
          </Reveal>
          <figure className="relative z-[1] mx-auto w-full max-w-md -rotate-1 bg-[#f4f3f1] p-2.5 shadow-[0_22px_44px_rgba(13,51,51,0.16)] md:max-w-none md:p-3">
            <video
              className="aspect-[3/2] w-full bg-[#1a100c] object-cover"
              autoPlay={!reduce}
              muted
              loop
              playsInline
              controls={!!reduce}
              preload="metadata"
              aria-label="Mesa con frutas, verduras y un computador"
            >
              <source src="/media/acompanamiento-90-dias/proceso.m4v" type="video/mp4" />
            </video>
          </figure>
        </div>
        <div className="mt-14 grid items-start gap-5 md:grid-cols-3">
          {ETAPAS.map((etapa, i) => (
            <article key={etapa.n} className={`bg-[#f4f3f1] px-6 py-7 shadow-[0_18px_40px_rgba(13,51,51,0.12)] ${tilt[i]}`}>
              <p className="font-display text-5xl text-[#0d3333] italic">{etapa.n}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight italic">{etapa.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{etapa.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Incluye() {
  const reduce = useReducedMotion();

  return (
    <section id="incluye" className="relative scroll-mt-24 overflow-hidden bg-[#eeedeb] px-5 py-16 text-[#3d2916] md:px-8 md:py-24">
      <PngSticker src="/stickers/peonia.png" className="-top-8 -right-8 w-28 md:right-2 md:w-40" rotate={14} />
      <PngSticker src="/stickers/limon.png" className="bottom-2 -left-6 w-20 md:left-2 md:w-32" rotate={-10} delay={0.08} />
      <div className="relative z-[3] mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:gap-14">
        <Reveal>
          <p className="font-display text-2xl text-[#0d3333] italic">te llevas</p>
          <h2 className="mt-2 font-display text-4xl leading-[0.95] text-[#3d2916] md:text-5xl">
            Más que un plan de alimentación, tendrás un espacio para ti durante 90 días.
          </h2>
        </Reveal>
        <ul className="grid gap-3">
          {INCLUYE.map((item, i) => (
            <motion.li
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: slideEase }}
              className="flex items-center gap-4 rounded-[1.4rem] bg-white px-4 py-3.5 shadow-[0_8px_22px_rgba(13,51,51,0.08)]"
            >
              {item.icon ? (
                <img src={item.icon} alt="" width={80} height={80} className="h-16 w-16 shrink-0 object-contain" />
              ) : null}
              <div>
                <p className="font-semibold leading-snug text-[#3d2916]">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#3d2916]/75">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PorQue() {
  return (
    <section className="relative overflow-hidden bg-[#bec1f4] px-5 py-16 text-[#3d2916] md:px-8 md:py-24">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:gap-14">
        <Reveal className="flex justify-center">
          <figure className="w-[min(100%,17.5rem)] -rotate-2 bg-[#f4f3f1] p-3 pb-11 shadow-[0_22px_40px_rgba(13,51,51,0.22)] md:w-[19.5rem]">
            <img
              src="/media/acompanamiento-90-dias/mafer.png"
              alt="Mafer Cerquera"
              width={790}
              height={830}
              className="h-auto w-full"
            />
            <figcaption className="pt-3 text-center font-display text-2xl text-[#3d2916] italic">Mafer</figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display text-2xl text-[#0d3333] italic">por qué con mafer</p>
          <h2 className="mt-2 font-display text-5xl leading-[0.92] text-[#3d2916] md:text-7xl">Hola, soy Mafer Cerquera.</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#3d2916]/80">
            Soy nutricionista funcional y mi enfoque integra educación nutricional, bienestar digestivo y herramientas para construir una relación más consciente con la alimentación.
          </p>
          <p className="mt-4 font-display text-3xl leading-snug text-[#3d2916] italic">
            Mi intención es ayudarte a encontrar una forma de alimentarte que considere tus necesidades y que puedas llevar a tu día a día.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Voces() {
  return (
    <section className="relative overflow-hidden bg-[#e2d5e8] px-5 pt-14 pb-8 text-[#0d3333] md:px-8 md:pt-20">
      <div className="relative z-[3] mx-auto flex max-w-6xl items-end justify-between gap-4">
        <div>
          <h2 className="max-w-xl font-display text-4xl leading-[0.95] md:text-6xl">
            Cada proceso comienza en un lugar diferente.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#3d2916]/80">
            Estas experiencias pueden ayudarte a conocer cómo es trabajar con Mafer.
          </p>
        </div>
        <img src="/stickers/flor.png" alt="" className="h-20 w-20 shrink-0 -rotate-12 object-contain md:h-28 md:w-28" />
      </div>
      <RielTestimonios />
      <RielHistorias />
    </section>
  );
}

function Inversion() {
  return (
    <section className="relative bg-[#eeedeb] px-5 py-16 text-[#3d2916] md:px-8">
      <div className="relative mx-auto max-w-3xl">
        <img
          src="/media/acompanamiento-90-dias/dona.png"
          alt=""
          width={1024}
          height={770}
          className="pointer-events-none absolute top-3 right-3 z-10 w-16 rotate-12 drop-shadow-[0_12px_18px_rgba(13,51,51,0.2)] md:top-8 md:-right-16 md:w-36"
        />
        <img
          src="/stickers/mora.png"
          alt=""
          width={819}
          height={819}
          className="pointer-events-none absolute bottom-8 left-1 z-10 w-16 -rotate-12 drop-shadow-[0_12px_18px_rgba(13,51,51,0.2)] md:bottom-12 md:-left-4 md:w-24"
        />
        <div className="rounded-[2rem] bg-[#f7f4ec] px-6 py-10 text-center text-[#3d2916] shadow-[0_22px_50px_rgba(13,51,51,0.12)] md:px-12">
        <p className="font-display text-2xl text-[#0d3333] italic">tu acompañamiento</p>
        <h2 className="mt-3 font-display text-4xl leading-[0.95] md:text-5xl">
          Empieza a construir una forma de cuidarte que se adapte a tu vida.
        </h2>
        <p className="mt-6 font-display text-5xl text-[#0d3333] md:text-7xl">{PRECIOS.acompanamiento.cop}</p>
        <p className="text-sm text-[#3d2916]/70">COP · {PRECIOS.acompanamiento.eur}</p>
        <p className="mt-2 text-sm text-[#3d2916]/70">Inversión total por los tres meses</p>
        <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm text-[#3d2916]/85">
          <li>Valoración nutricional individual</li>
          <li>Tres controles privados</li>
          <li>Plan y recursos adaptados a ti</li>
          <li>Seguimiento durante 90 días</li>
        </ul>
        <p className="mt-8 text-sm text-[#3d2916]/75">También puedes dividir tu inversión</p>
        <p className="mt-1 font-display text-3xl text-[#0d3333] italic">
          3 pagos de {PRECIOS.acompanamientoCuota.cop} COP · {PRECIOS.acompanamientoCuota.eur}
        </p>
        <p className="mt-1 text-xs text-[#3d2916]/55">Opción propuesta, pendiente de confirmar condiciones de pago.</p>
        <div className="mt-8">
          <Pill href="#inscripcion" tone="pine">
            Quiero comenzar mi proceso
          </Pill>
        </div>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  const [open, setOpen] = useState(0);

  return (
    <section id="preguntas" className="relative scroll-mt-24 overflow-hidden bg-[#eeedeb] px-5 py-16 text-[#3d2916] md:px-8">
      <PngSticker src="/stickers/hoja-salvia.png" className="-top-8 -left-12 w-36 md:w-52" rotate={-16} />
      <PngSticker src="/stickers/tomates.png" className="-right-6 bottom-4 w-20 md:right-2 md:w-32" rotate={12} delay={0.08} />
      <div className="relative z-[3] mx-auto max-w-3xl">
        <p className="font-display text-2xl text-[#0d3333] italic">dudas</p>
        <h2 className="mt-2 font-display text-4xl text-[#3d2916] md:text-6xl">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-forest/10">
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
              {open === index ? <p className="pb-4 text-sm leading-relaxed text-ink/75">{item.a}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Inscripcion({ abierta, onClose }: { abierta: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);

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
        aria-labelledby="inscripcion-titulo"
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
          <p className="font-display text-2xl text-[#0d3333] italic">inscripción</p>
          <h2 id="inscripcion-titulo" className="mt-2 font-display text-4xl leading-[0.95] text-[#3d2916] md:text-5xl">
            Cuéntame por dónde quieres empezar.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            Un formulario breve para conocer el motivo de tu consulta y confirmar si este acompañamiento es para ti. El pago se confirma después, cuando haya cupo.
          </p>
        </div>
        {sent ? (
          <p className="self-center font-display text-3xl text-[#3d2916] italic">
            Quedó tu solicitud. Mafer confirma el cupo antes del pago.
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
                motivo: String(data.get("motivo") ?? ""),
                plan: "90-dias",
                origen: "acompanamiento",
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
              className="rounded-full bg-[#f4f3f1] px-5 py-3 text-sm text-[#3d2916] outline-none ring-1 ring-[#0d3333]/15"
            />
            <input
              required
              type="email"
              name="correo"
              placeholder="Tu correo"
              aria-label="Tu correo"
              className="rounded-full bg-[#f4f3f1] px-5 py-3 text-sm text-[#3d2916] outline-none ring-1 ring-[#0d3333]/15"
            />
            <input
              name="whatsapp"
              placeholder="WhatsApp"
              aria-label="WhatsApp"
              className="rounded-full bg-[#f4f3f1] px-5 py-3 text-sm text-[#3d2916] outline-none ring-1 ring-[#0d3333]/15"
            />
            <textarea
              required
              name="motivo"
              placeholder="¿Qué te gustaría trabajar en estos 90 días?"
              aria-label="Motivo de consulta"
              rows={4}
              className="rounded-[1.4rem] bg-[#f4f3f1] px-5 py-3 text-sm text-[#3d2916] outline-none ring-1 ring-[#0d3333]/15"
            />
            <button
              type="submit"
              className="mt-2 rounded-full bg-[#0d3333] px-6 py-3 font-display text-base text-[#cde1aa] italic transition-transform hover:scale-[1.02] hover:bg-[#164444]"
            >
              Quiero comenzar mi proceso
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
