"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PngSticker } from "@/components/png-sticker";
import { Header, Pill } from "@/components/chrome";
import { Marquee, Reveal } from "@/components/motion";
import { INSTAGRAM, PRECIOS, ROUTES, TESTIMONIOS, TIKTOK, WHATSAPP } from "@/lib/site";

const FASES = [
  {
    n: "01",
    verb: "Descifra",
    title: "Reset hormonal: estabiliza tu glucosa",
    text: "Entiendes por qué tus antojos, tu energía y tu peso dependen de tu glucosa, y aprendes a estabilizarla sin dietas extremas ni prohibiciones.",
  },
  {
    n: "02",
    verb: "Nutre",
    title: "Alimenta tus hormonas",
    text: "Dejas de restringir y aprendes qué comer, y cómo combinarlo, para que tu cuerpo tenga lo que necesita para regularse — no lo que una dieta genérica dice que “deberías” comer.",
  },
  {
    n: "03",
    verb: "Conecta",
    title: "Tu ciclo y tu SOMP",
    text: "Aprendes a leer cada fase de tu ciclo y cómo se relaciona con tus síntomas — y entiendes qué significa realmente tener SOMP (el nuevo nombre científico del SOP) en tu caso.",
  },
  {
    n: "04",
    verb: "Confirma",
    title: "Exámenes para SOMP e insulina",
    text: "Aprendes a leer tus propios exámenes y a pedirle a tu médico exactamente lo que necesitas, para dejar de escuchar “todo está normal” sin respuestas reales.",
  },
];

const ANTES = [
  ["Adivinas qué dieta probar esta vez", "Sabes exactamente qué necesita tu cuerpo y por qué"],
  ["Tus exámenes “normales” no te dan respuestas", "Sabes qué pedir y cómo leer tus resultados"],
  ["Un síntoma a la vez, sin conexión entre ellos", "Entiendes cómo tu ciclo, tu glucosa y tu alimentación se conectan"],
  ["Te sientes culpable por no tener “disciplina”", "Sabes que nunca fue falta de voluntad"],
  ["Vives pendiente de la próxima recaída", "Tienes una estrategia sostenible, no una dieta temporal"],
  ["Te ves al espejo con frustración", "Te ves al espejo con calma, porque entiendes lo que está pasando"],
  ["Piensas en comida todo el día", "Dejas de pelear contra tus antojos porque entiendes de dónde vienen"],
];

const INCLUYE = [
  ["Acceso completo a las 4 fases del método", "$120 USD · 108 €"],
  ["Guía semana a semana descargable", "$25 USD · 23 €"],
  ["Bono: guía de lectura de etiquetas", "$15 USD · 14 €"],
  ["Bono: lista de mercado semanal editable", "$15 USD · 14 €"],
  ["Bono: kit de exámenes para pedirle a tu médico", "$20 USD · 18 €"],
  ["Comunidad de apoyo", "$20 USD · 18 €"],
];

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
  return (
    <>
      <Header
        links={[
          { href: "#metodo", label: "El método" },
          { href: "#incluye", label: "Qué incluye" },
          { href: "#precios", label: "Experiencia" },
          { href: "#para-ti", label: "Para ti" },
          { href: "#voces", label: "Voces" },
          { href: "#preguntas", label: "Preguntas" },
        ]}
        cta={{ href: "#lista", label: "Quiero mi lugar" }}
      />
      <main className="gals-type">
        <Hero />
        <Marquee
          face="display"
          mark="★"
          className="bg-[#0d3333] text-[#cde1aa]"
          items={["4 semanas", "sin dietas extremas", "tu ciclo", "tu glucosa", "febrero 2027", "deja de adivinar"]}
        />
        <Lista />
        <Separador />
        <Metodo />
        <Comparacion />
        <Incluye />
        <Precios />
        <ParaTi />
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
        <Voces />
        <Faq />
        <Cierre />
      </main>
      <Pie />
    </>
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
    video.muted = false;
    video.volume = 1;
    void video.play()
      .then(() => {
        if (alive) setSound(true);
      })
      .catch(() => {
        if (!alive || userSet.current) return;
        video.muted = true;
        setSound(false);
        void video.play().catch(() => {});
      });
    return () => {
      alive = false;
    };
  }, [reduce]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    userSet.current = true;
    const next = !video.muted;
    video.muted = next;
    if (!next) {
      video.volume = 1;
      void video.play();
    }
    setSound(!next);
  };

  return (
    <section className="relative overflow-hidden bg-[#f3eee6] px-4 py-10 text-[#3d2916] md:px-6 md:py-14 lg:px-8">
      <PngSticker src="/stickers/sol-luna.png" className="-top-2 -left-6 w-32 md:left-0 md:w-44 lg:left-2 lg:w-52" rotate={-10} delay={0.06} />
      <PngSticker src="/stickers/peonia.png" className="-bottom-14 -left-14 w-36 md:-left-4 md:w-48" rotate={12} delay={0.1} />
      <div className="relative z-[3] mx-auto grid max-w-7xl items-center gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(24rem,1.22fr)] lg:gap-x-8 lg:gap-y-4">
        <div className="text-center lg:col-start-1 lg:row-start-1 lg:text-left">
          <p className="font-display text-3xl text-[#7d648c] italic">febrero 2027</p>
          <h1 className="mx-auto mt-3 max-w-xl lg:mx-0">
            <img
              src="/media/hazte-amiga-de-tus-hormonas/imagenes/titulo-hero.png"
              alt="Hazte amiga de tus hormonas. Escucha. Menos dieta, más escucha."
              width={1024}
              height={443}
              className="mx-auto h-auto w-full lg:mx-0"
            />
          </h1>
        </div>
        <figure
          className="relative z-10 w-full lg:col-start-2 lg:row-start-1 lg:row-span-2"
          onClick={() => {
            const video = videoRef.current;
            if (!video || !video.muted) return;
            userSet.current = true;
            video.muted = false;
            video.volume = 1;
            void video.play();
            setSound(true);
          }}
        >
          <div className="relative rotate-1 rounded-[1.5rem] bg-[#f7f4ec] p-2.5 shadow-[0_22px_44px_rgba(13,51,51,0.16)] md:rotate-[2deg] md:p-3">
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
              controls={!!reduce}
              preload="metadata"
              aria-label="Mafer presenta Hazte amiga de tus hormonas"
            >
              <source src="/media/hazte-amiga-de-tus-hormonas/videos/hero.mp4" type="video/mp4" />
            </video>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                toggleSound();
              }}
              aria-pressed={sound}
              aria-label={sound ? "Quitar el audio" : "El video está en silencio. Activar el audio"}
              className={
                sound
                  ? "absolute right-4 bottom-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-[#0d3333] text-[#cde1aa] shadow-[0_8px_18px_rgba(13,51,51,0.28)]"
                  : "absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full bg-[#0d3333] px-4 py-2.5 text-sm font-semibold tracking-wide text-[#cde1aa] shadow-[0_10px_22px_rgba(13,51,51,0.32)]"
              }
            >
              <SoundIcon on={sound} />
              {sound ? null : "Activar audio"}
            </button>
          </div>
        </figure>
        <div className="text-center lg:col-start-1 lg:row-start-2 lg:text-left">
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#3d2916]/80 md:text-lg lg:mx-0">
            Acné que no se va, cabello que cae, un ciclo que hace lo que quiere — y la sensación de que “algo está mal contigo”. No lo está. Aprende a leer lo que tu cuerpo te dice sobre tu SOMP y tu resistencia a la insulina.
          </p>
          <p className="mt-6 font-display text-3xl text-[#0d3333] lg:text-4xl">
            Desde {PRECIOS.hormonasBasico.usd} USD · {PRECIOS.hormonasBasico.eur}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Pill href="#precios" tone="lilac">
              Ver experiencias
            </Pill>
            <Pill href="#lista" tone="pine">
              Unirme a la lista
            </Pill>
          </div>
        </div>
      </div>
    </section>
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

function Separador() {
  return (
    <div className="relative h-44 overflow-hidden md:h-64" aria-hidden>
      <img
        src="/media/hazte-amiga-de-tus-hormonas/imagenes/separador.jpg"
        alt=""
        width={2000}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
      />
    </div>
  );
}

function Metodo() {
  return (
    <section id="metodo" className="scroll-mt-24 overflow-hidden bg-[#eeedeb] py-8 text-[#3d2916] md:py-12">
      <div className="md:grid md:grid-cols-[minmax(240px,min(42vw,520px))_minmax(0,1fr)] md:items-center">
        <img
          src="/media/hazte-amiga-de-tus-hormonas/imagenes/matcha.png"
          alt="Mano revolviendo un latte de matcha"
          width={1024}
          height={894}
          className="block w-full max-w-none"
        />
        <div className="px-5 py-10 md:py-8 md:pr-10 md:pl-6 lg:pr-16">
          <Reveal>
            <p className="font-display text-2xl text-[#0d3333] italic">el método</p>
            <h2 className="mt-2 font-display text-4xl leading-[0.92] md:text-6xl">Dejar de adivinar</h2>
            <p className="mt-4 max-w-xl text-sm text-[#3d2916]/70">
              Cuatro fases. Los nombres se afinan con Mafe antes de publicar.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 xl:grid-cols-2">
            {FASES.map((fase, i) => (
              <Reveal key={fase.n} delay={(i % 2) * 0.08}>
                <article className="h-full rounded-[1.8rem] bg-[#f7f4ec] p-6 shadow-[0_16px_36px_rgba(13,51,51,0.08)]">
                  <div className="flex items-end justify-between gap-4">
                    <p className="font-display text-2xl text-[#0d3333] italic">{fase.verb}</p>
                    <p className="font-display text-5xl leading-none text-[#7d648c]">{fase.n}</p>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-[#3d2916]">{fase.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3d2916]/80">{fase.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparacion() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0d3333] px-5 py-16 text-[#cde1aa] md:px-8 md:py-24">
      <PngSticker
        src="/stickers/linaza.png"
        className="-top-28 -right-48 w-72 md:-top-36 md:-right-20 md:w-[30rem]"
        rotate={10}
      />
      <PngSticker src="/stickers/espiral.png" className="-bottom-16 -left-20 w-40 md:-bottom-10 md:-left-12 md:w-56" rotate={-8} delay={0.08} />
      <div className="relative z-[3] mx-auto max-w-5xl">
        <Reveal>
          <p className="font-display text-2xl italic">en cuatro semanas</p>
          <h2 className="mt-2 max-w-3xl font-display text-4xl leading-[0.92] text-[#f7f4ec] md:text-6xl">
            Antes / después de las 4 semanas
          </h2>
        </Reveal>
        <ul className="mt-10 space-y-3">
          {ANTES.map(([before, after], i) => (
            <motion.li
              key={before}
              initial={reduce ? false : { opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-start gap-3 rounded-[1.35rem] bg-white px-5 py-4 shadow-[0_8px_22px_rgba(13,51,51,0.08)]"
            >
              <span className="font-display text-2xl leading-none text-[#b2bb68] italic">0{i + 1}</span>
              <div className="grid min-w-0 flex-1 gap-2 md:grid-cols-2 md:gap-8">
                <p className="text-sm leading-relaxed text-[#3d2916]/65 md:text-base">{before}</p>
                <p className="text-sm leading-relaxed text-[#3d2916] md:text-base">{after}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Incluye() {
  return (
    <section id="incluye" className="relative scroll-mt-24 overflow-hidden bg-[#bec1f4] px-5 py-16 text-[#3d2916] md:px-8 md:py-24">
      <PngSticker src="/stickers/romero.png" className="-bottom-20 -left-24 w-36 md:-bottom-8 md:-left-28 md:w-48" rotate={-32} />
      <div className="relative z-[3] mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] md:gap-16">
        <div>
          <Reveal>
            <p className="font-display text-2xl text-[#0d3333] italic">te llevas</p>
            <h2 className="mt-2 font-display text-4xl leading-[0.92] md:text-6xl">Qué incluye</h2>
          </Reveal>
          <ul className="mt-8 divide-y divide-[#0d3333]/15">
            {INCLUYE.map(([item, value]) => (
              <li key={item} className="flex items-baseline justify-between gap-4 py-4">
                <span className="text-sm md:text-base">{item}</span>
                <span className="shrink-0 font-display text-xl text-[#0d3333] italic">{value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-display text-3xl leading-tight md:text-4xl">
            Valor total {PRECIOS.hormonasTotal.usd} · {PRECIOS.hormonasTotal.eur}
          </p>
        </div>
        <Reveal delay={0.08} className="flex justify-center">
          <figure className="relative w-[min(100%,19.5rem)] rotate-2 bg-[#f7f4ec] p-3 pb-16 shadow-[0_22px_44px_rgba(13,51,51,0.18)]">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-3 left-8 z-10 h-7 w-28 -rotate-3 bg-[repeating-linear-gradient(-18deg,#e7d7ef_0_8px,#cbb8d4_8px_9px)] shadow-[0_8px_14px_rgba(61,41,22,0.12)]"
            />
            <img
              src="/media/hazte-amiga-de-tus-hormonas/imagenes/mafer.png"
              alt="Mafer Cerquera"
              width={550}
              height={814}
              className="h-auto w-full"
            />
            <figcaption className="px-1 pt-3 text-center font-display text-2xl leading-none text-[#7d648c] italic">
              Nunca fue
              <br />
              falta de voluntad.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
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

function Lista() {
  const [sent, setSent] = useState(false);
  const [plan, setPlan] = useState("lista");

  return (
    <section id="lista" className="relative scroll-mt-24 overflow-hidden bg-[#eeedeb] px-5 pt-16 pb-8 text-[#3d2916] md:px-8 md:pt-24 md:pb-10">
      <PngSticker src="/stickers/mora.png" className="-bottom-6 left-1 w-20 md:bottom-8 md:left-4 md:w-28" rotate={-14} />
      <div className="relative z-[1] mx-auto grid max-w-5xl gap-8 rounded-[2rem] bg-[#bec1f4] px-6 py-10 md:grid-cols-2 md:px-10">
        <div>
          <p className="font-display text-2xl text-[#0d3333] italic">febrero 2027</p>
          <h2 className="mt-2 font-display text-4xl leading-[0.92] md:text-5xl">Lista de espera</h2>
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
    </section>
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
