"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PngSticker } from "@/components/png-sticker";
import { Eyebrow, Header } from "@/components/chrome";
import { Historias } from "@/components/home/home-page";
import { Marquee, Reveal } from "@/components/motion";
import { COHORT_START, INSTAGRAM, ROUTES, TIKTOK, WHATSAPP } from "@/lib/site";


export function VacacionesPage() {
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
        logoHref="#inicio"
        links={[
          { href: "#plan", label: "El plan" },
          { href: "#confian", label: "Testimonios" },
          { href: "#incluye", label: "Qué incluye" },
          { href: "#planes", label: "Planes" },
        ]}
        cta={{ href: "#lista", label: "Quiero mi plan", tone: "black" }}
      />
      <main>
        <Hero />
        <OfertaPlan />
        <div className="gals-type">
        <Marquee
          face="display"
          compact
          mark="★"
          className="bg-[#0d3333] text-[#d7ebc8]"
          items={[
            "Vacaciones sin restricción / disfruta",
            "Vacaciones sin restricción / sin culpa",
            "Vacaciones sin restricción / energía real",
            "Vacaciones sin restricción / digestión ligera",
          ]}
        />
        <Identificacion />
        <SeparadorFrase />
        <Promesa />
        <Marquee
          face="display"
          className="bg-[#0d3333] text-[#d7ebc8]"
          items={[
            "disfruta",
            "sin culpa",
            "sin restricción",
            "energía real",
            "digestión ligera",
          ]}
        />
        <KitDigital />
        <PlanDia />
        <Historias id="confian" />
        <Marquee
          face="display"
          mark="★"
          className="bg-[#f8e4e8] text-[#381018]"
          items={[
            "disfruta",
            "sin culpa",
            "sin restricción",
            "energía real",
            "digestión ligera",
          ]}
        />
        <BioMafe />
        <OfertaPrincipal />
        <Preguntas />
        <Comunidad />
        <CierreKit />
        </div>
      </main>
      <Pie />
      <Lista abierta={listaAbierta} onClose={cerrarLista} />
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
    <footer className="gals-type bg-[#0d3333] text-[#d7ebc8]">
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

function Identificacion() {
  const items = [
    {
      title: "Comes diferente",
      text: "Y terminas con sensación de pesadez o abdomen hinchado.",
      image: "/media/vacaciones-sin-restriccion/imagenes/logo-comes.png",
    },
    {
      title: "Sales de tu rutina",
      text: "Y los viajes, las cenas y los cambios de horarios afectan tu bienestar.",
      image: "/media/vacaciones-sin-restriccion/imagenes/logo-rutina.png",
    },
    {
      title: "Empiezas de cero",
      text: "Regresas de vacaciones pensando que necesitas otra dieta.",
      image: "/media/vacaciones-sin-restriccion/imagenes/logo-cero.png",
    },
  ];

  return (
    <section className="bg-[#f7f4ec] px-5 py-14 text-[#0d3333] md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mx-auto max-w-3xl font-display text-[2rem] leading-[0.95] md:text-5xl">
          ¿Te identificas con alguna de estas situaciones?
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {items.map((item) => (
            <article key={item.title}>
              <img src={item.image} alt="" width={819} height={819} className="mx-auto h-28 w-28 object-contain md:h-32 md:w-32" />
              <h3 className="mt-4 font-display text-2xl leading-none md:text-[1.7rem]">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-[#0d3333]/80 md:text-base">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeparadorFrase() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/media/vacaciones-sin-restriccion/imagenes/lista-espera.jpg"
        alt=""
        width={1024}
        height={676}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative flex min-h-[22rem] items-center justify-center px-5 py-14 md:min-h-[28rem] md:px-8">
        <p className="w-full max-w-xl rounded-[1.75rem] bg-[#fffdf8]/90 px-6 py-8 text-center font-display text-[1.7rem] leading-[1.08] text-[#0d3333] shadow-[0_18px_40px_rgba(13,51,51,0.16)] md:px-10 md:py-10 md:text-[2.15rem]">
          Cuidarte no debería significar dejar de disfrutar tus vacaciones.
        </p>
      </div>
    </section>
  );
}

function Lista({ abierta, onClose }: { abierta: boolean; onClose: () => void }) {
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
        aria-labelledby="lista-titulo"
        className="gals-type relative mx-auto w-full max-w-xl rounded-[2rem] bg-[#fffdf8] px-6 py-10 text-center text-[#0d3333] shadow-[0_18px_40px_rgba(13,51,51,0.16)] md:px-10"
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
        <p className="font-display text-2xl italic">Lista de espera</p>
        <h2 id="lista-titulo" className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
          Vacaciones sin restricción
        </h2>
        <p className="mt-4 text-base leading-relaxed">
          Empieza en febrero 2027. Te avisamos primero cuando abran cupos. Quienes hagan el reto de noviembre tienen 15 % de descuento en el programa.
        </p>
        {sent ? (
          <p className="mt-8 font-display text-3xl italic">Quedaste en la lista. Te avisamos antes de abrir febrero.</p>
        ) : (
          <form
            className="mt-8 grid gap-3 text-left"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const entry = {
                nombre: String(data.get("nombre") ?? ""),
                correo: String(data.get("correo") ?? ""),
                whatsapp: "",
                plan: "lista",
                origen: "vacaciones",
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
              className="rounded-full bg-paper px-5 py-3.5 text-sm text-[#0d3333] outline-none ring-1 ring-[#0d3333]/20"
            />
            <input
              required
              type="email"
              name="correo"
              placeholder="Tu correo"
              aria-label="Tu correo"
              className="rounded-full bg-paper px-5 py-3.5 text-sm text-[#0d3333] outline-none ring-1 ring-[#0d3333]/20"
            />
            <button
              type="submit"
              className="mt-2 rounded-full bg-olive px-6 py-3.5 font-display text-base text-[#0d3333] italic transition-transform hover:scale-[1.02] hover:bg-butter-deep"
            >
              Unirme a la lista de espera
            </button>
          </form>
        )}
        <p className="mt-4 text-sm">Acceso prioritario y aviso antes de que abran cupos.</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate w-full max-w-[100vw] overflow-hidden bg-[#ede8e2] md:min-h-[84svh]">
      <img
        src="/media/vacaciones-sin-restriccion/imagenes/hero.jpg"
        alt=""
        width={554}
        height={832}
        className="absolute inset-y-0 left-0 hidden h-full w-auto md:block md:[mask-image:linear-gradient(90deg,#000_82%,transparent)]"
      />
      <PngSticker
        src="/stickers/limon.png"
        className="top-4 left-2 hidden w-28 md:block"
        rotate={-16}
      />
      <PngSticker
        src="/stickers/fresa.png"
        className="bottom-4 left-4 hidden w-28 md:block"
        rotate={-8}
        delay={0.12}
      />
      <div className="relative z-10 md:flex md:min-h-[84svh] md:items-center md:py-0 md:pr-8 md:pl-[28%] lg:pr-12 lg:pl-[31%]">
        <Reveal className="w-full min-w-0 max-w-full text-center text-forest">
          <div className="hidden md:block">
            <div className="hero-lockup">
              <Eyebrow>Mafe Cerquera × Natalia Galvis · Inicio 23 de noviembre</Eyebrow>
              <h1 className="mt-4">
                <img
                  src="/media/vacaciones-sin-restriccion/imagenes/titulo-hero.png"
                  alt="Vacaciones sin restricción. Disfruta. Sin culpa."
                  width={1024}
                  height={404}
                  className="block h-auto w-full"
                  style={{ width: "100%", maxWidth: "calc(100vw - 2.5rem)", height: "auto" }}
                />
              </h1>
            </div>
          </div>
          <div className="md:hidden">
            <h1 className="relative z-10 px-4 pt-4">
              <img
                src="/media/vacaciones-sin-restriccion/imagenes/titulo-hero.png"
                alt="Vacaciones sin restricción. Disfruta. Sin culpa."
                width={1024}
                height={404}
                className="block h-auto w-full"
              />
            </h1>
            <div className="relative -mt-[22%]">
              <img
                src="/media/vacaciones-sin-restriccion/imagenes/hero.jpg"
                alt=""
                width={554}
                height={832}
                className="relative z-0 block h-auto w-full"
              />
              <PngSticker src="/stickers/fresa.png" className="bottom-2 left-1 w-20" rotate={-8} delay={0.12} />
            </div>
          </div>
          <div className="px-5 pb-8 text-[#bb3350] md:px-0 md:pb-0">
            <p className="mt-1 font-display text-2xl italic md:mt-4 md:text-3xl">
              Inicio: 23 de noviembre · hora Colombia
            </p>
            <Countdown compact labels={["Días", "Hrs", "Min", "Seg"]} />
            <p className="mt-2 text-[0.68rem] font-semibold tracking-[0.22em] uppercase">
              Cupos limitados · en vivo y sesiones VIP
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function OfertaPlan() {
  return (
    <section className="gals-type bg-[#ede8e2] px-5 pt-2 pb-10 text-center text-[#0d3333] md:px-8 md:pb-14">
      <div className="mx-auto max-w-xl">
        <p className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase">Tu plan digital de 5 días</p>
        <h2 className="mt-3 font-display text-[2.15rem] leading-[0.95] md:text-5xl">Vacaciones sin Restricciones</h2>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-[#0d3333]/80 md:text-base">
          ¿Quieres sentir tu abdomen menos inflamado estas vacaciones? Descubre cómo organizar tu alimentación, cuidar tu digestión y complementar tus hábitos con movimiento, sin dejar de disfrutar tus comidas favoritas.
        </p>
        <p className="mt-5 flex items-baseline justify-center gap-3">
          <span className="font-display text-4xl leading-none md:text-5xl">USD 14</span>
          <span className="text-sm text-[#0d3333]/70">Pago único</span>
        </p>
        <a
          href="#lista"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white uppercase"
        >
          Quiero mi plan desinflamante
          <span aria-hidden>→</span>
        </a>
        <p className="mt-4 text-sm text-[#0d3333]/60">Programa digital · Alimentación + movimiento</p>
      </div>
    </section>
  );
}

function Promesa() {
  return (
    <section className="relative z-10 bg-[#0d3333] text-[#d7ebc8]">
      <PngSticker src="/stickers/fresa.png" className="top-10 right-1 hidden w-24 min-[1400px]:block" rotate={16} />
      <div className="relative z-[3] mx-auto grid max-w-6xl items-end gap-4 px-5 pt-12 md:grid-cols-[minmax(0,1.05fr)_minmax(260px,440px)] md:items-start md:px-8 md:pt-10">
        <Reveal>
          <p className="font-display text-3xl leading-[0.95] italic md:text-5xl">
            Un plan que se adapta a tus vacaciones. No al revés.
          </p>
          <p className="mt-5 text-base leading-relaxed text-[#d7ebc8]/80 md:text-lg">
            Durante cinco días aprenderás a construir comidas equilibradas, incorporar hábitos digestivos y mantenerte activa con ejercicios prácticos.
          </p>
          <p className="mt-3 font-display text-[1.7rem] leading-none italic text-[#f4f7ef]">
            Sin dietas extremas. Sin rutinas imposibles.
          </p>
          <ul className="mt-5 grid gap-3 lg:grid-cols-3 lg:gap-4">
            <li>
              <p className="text-sm font-semibold text-[#f4f7ef]">Alimentación flexible</p>
              <p className="mt-0.5 text-sm leading-snug text-[#d7ebc8]/75">
                Comidas prácticas y opciones para adaptar tu menú.
              </p>
            </li>
            <li>
              <p className="text-sm font-semibold text-[#f4f7ef]">Bienestar digestivo</p>
              <p className="mt-0.5 text-sm leading-snug text-[#d7ebc8]/75">
                Hábitos para ayudarte a manejar molestias habituales de hinchazón.
              </p>
            </li>
            <li>
              <p className="text-sm font-semibold text-[#f4f7ef]">Movimiento</p>
              <p className="mt-0.5 text-sm leading-snug text-[#d7ebc8]/75">
                Ejercicios sencillos que puedes integrar durante las vacaciones.
              </p>
            </li>
          </ul>
          <a
            href="#lista"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white uppercase"
          >
            Empezar mi plan
            <span aria-hidden>→</span>
          </a>
        </Reveal>
        <div className="relative z-10 -mb-16">
          <p className="pointer-events-none absolute top-[12%] left-[6%] z-20 -rotate-8 font-display text-xl text-[#f8bad1] italic md:top-[14%] md:left-[8%] md:text-3xl">
            sin culpa
          </p>
          <img
            src="/media/vacaciones-sin-restriccion/imagenes/mujer.png"
            alt="Mujer disfrutando una manzana y un snack"
            width={672}
            height={1024}
            className="mx-auto w-[min(100%,380px)] drop-shadow-[0_22px_36px_rgba(74,39,19,0.16)] md:w-full md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

function KitDigital() {
  const piezas = [
    { src: "/media/vacaciones-sin-restriccion/imagenes/logo-alimentacion.png", title: "Plan de alimentación", text: "5 días de comidas flexibles." },
    { src: "/media/vacaciones-sin-restriccion/imagenes/logo-recetario.png", title: "Recetario de vacaciones", text: "Preparaciones fáciles y prácticas." },
    { src: "/media/vacaciones-sin-restriccion/imagenes/logo-sustituciones.png", title: "Guía de sustituciones", text: "Alternativas para organizar tus platos." },
    { src: "/media/vacaciones-sin-restriccion/imagenes/logo-ejercicios.png", title: "Plan de ejercicios", text: "Rutinas sencillas para moverte donde estés." },
    { src: "/media/vacaciones-sin-restriccion/imagenes/logo-comer.png", title: "Guía para comer fuera", text: "Herramientas para restaurantes y celebraciones." },
    { src: "/media/vacaciones-sin-restriccion/imagenes/logo-checklist.png", title: "Checklist digestivo", text: "Hábitos y registro de bienestar." },
  ];

  return (
    <section id="incluye" className="scroll-mt-24 bg-[#f7f4ec] px-5 py-14 text-[#0d3333] md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center font-display text-[2.1rem] leading-[0.95] md:text-5xl">
            Todo lo que recibes por USD 14
          </h2>
        </Reveal>
        <img
          src="/media/vacaciones-sin-restriccion/imagenes/kit-digital.jpg"
          alt="Mafe presenta el kit digital de Vacaciones sin restricción, con el plan, el recetario y las guías en el teléfono, la tablet y el computador."
          width={1024}
          height={768}
          className="mt-8 h-auto w-full"
        />
        <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {piezas.map((item) => (
            <li key={item.title} className="rounded-[1.4rem] bg-[#fffdf8] px-3 py-4 md:px-5 md:py-5">
              <img src={item.src} alt="" width={160} height={160} className="mx-auto mb-3 block h-20 w-auto max-w-full object-contain md:h-28" />
              <p className="font-semibold">{item.title}</p>
              <p className="mt-1 text-sm leading-snug text-[#0d3333]/70">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a
            href="#lista"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white uppercase"
          >
            Quiero mi kit de vacaciones
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const PLAN_DIAS = [
  {
    titulo: "Empieza por tu digestión",
    texto: "Identifica hábitos cotidianos que pueden influir en tu sensación de inflamación.",
  },
  {
    titulo: "Plan de alimentación",
    texto: "5 días de comidas flexibles.",
  },
  {
    titulo: "Recetario de vacaciones",
    texto: "Preparaciones fáciles y prácticas.",
  },
  {
    titulo: "Plan de ejercicios",
    texto: "Rutinas sencillas para moverte donde estés.",
  },
  {
    titulo: "Guía para comer fuera",
    texto: "Herramientas para restaurantes y celebraciones.",
  },
];

const PREGUNTAS = [
  {
    q: "¿Es una dieta estricta?",
    a: "No. Es un plan flexible para organizar tu alimentación en vacaciones, sin dietas extremas ni rutinas imposibles.",
  },
  {
    q: "¿Los ejercicios requieren gimnasio?",
    a: "No. Son rutinas sencillas que puedes integrar donde estés.",
  },
  {
    q: "¿Voy a tener el abdomen plano en cinco días?",
    a: "No. Este plan no promete bajar de talla en cinco días. Te da herramientas para cuidar tu digestión mientras disfrutas.",
  },
  {
    q: "¿Puedo hacerlo si no viajo?",
    a: "Sí. Sirve en un viaje, en casa o en una celebración.",
  },
  {
    q: "¿Cómo accedo al programa?",
    a: "Es un programa digital. Al unirte recibes el acceso al contenido para consultarlo y adaptarlo a tu rutina.",
  },
  {
    q: "¿Reemplaza una consulta nutricional?",
    a: "No. No reemplaza una consulta nutricional ni un tratamiento médico.",
  },
];

function PlanDia() {
  const [dia, setDia] = useState(0);
  const actual = PLAN_DIAS[dia];

  return (
    <section id="plan" className="relative scroll-mt-24 overflow-hidden bg-[#0d3333] px-5 py-14 text-[#f4f7ef] md:px-8 md:py-20">
      <PngSticker src="/stickers/hoja-salvia.png" className="-top-10 -left-16 w-52 md:-left-20 md:w-72" rotate={-16} />
      <PngSticker src="/stickers/hoja-roble.png" className="-top-8 -right-16 w-56 md:-right-20 md:w-80" rotate={12} delay={0.06} />
      <PngSticker src="/stickers/hoja-higuera.png" className="-bottom-12 -left-14 w-48 md:w-64" rotate={18} delay={0.12} flip />
      <PngSticker src="/stickers/hoja.png" className="-bottom-10 -right-14 w-52 md:w-72" rotate={-12} delay={0.16} />
      <div className="relative z-[3] mx-auto max-w-3xl">
        <h2 className="text-center font-display text-[2.1rem] leading-[0.95] text-[#f4f7ef] md:text-5xl">Tu plan, día a día.</h2>
        <div className="mt-8 rounded-[1.6rem] bg-[#fffdf8] p-3 text-[#0d3333] md:p-5">
          <div className="grid grid-cols-5 gap-1.5">
            {PLAN_DIAS.map((item, index) => (
              <button
                key={item.titulo}
                type="button"
                aria-pressed={dia === index}
                onClick={() => setDia(index)}
                className={`rounded-full px-1 py-2 text-center text-xs font-semibold whitespace-nowrap md:px-3 md:text-sm ${
                  dia === index ? "bg-[#0d3333] text-[#f4f7ef]" : "bg-[#e7f0e4] text-[#0d3333]"
                }`}
              >
                Día {index + 1}
              </button>
            ))}
          </div>
          <div className="px-2 pt-6 pb-3 md:px-4">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase">Día {dia + 1}</p>
            <h3 className="mt-2 font-display text-2xl md:text-3xl">{actual.titulo}</h3>
            <p className="mt-2 text-base leading-relaxed text-[#0d3333]/75">{actual.texto}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BioMafe() {
  return (
    <section className="relative bg-[#f7f4ec] px-5 py-14 md:px-8 md:py-20">
      <PngSticker src="/stickers/flor.png" className="top-3 left-0 w-16 md:top-6 md:left-2 md:w-28" rotate={-16} />
      <PngSticker src="/stickers/limon.png" className="top-4 right-0 w-14 md:top-8 md:right-2 md:w-24" rotate={18} delay={0.08} />
      <PngSticker src="/stickers/granada.png" className="bottom-3 right-1 w-16 md:bottom-6 md:right-4 md:w-28" rotate={-12} delay={0.14} />
      <div className="relative z-[1] mx-auto max-w-xl rounded-[1.8rem] bg-[#e7f0e4] px-4 pt-6 pb-2 shadow-[0_16px_36px_rgba(13,51,51,0.12)] md:flex md:max-w-5xl md:items-center md:gap-8 md:px-8 md:py-10">
        <div className="md:w-[46%] md:shrink-0">
          <div className="relative -rotate-2 rounded-[1.15rem] bg-[#fffdf8] p-2.5 shadow-[0_18px_34px_rgba(13,51,51,0.18)] md:p-3">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-3 left-8 z-10 h-7 w-24 -rotate-3 bg-[repeating-linear-gradient(-18deg,#f7f4ec_0_8px,#d9d3c8_8px_9px)] shadow-[0_8px_14px_rgba(61,41,22,0.12)]"
            />
            <img
              src="/media/hazte-amiga-de-tus-hormonas/imagenes/mafe-historia.png"
              alt="Mafe Cerquera"
              width={942}
              height={820}
              className="h-auto w-full rounded-[0.7rem]"
            />
          </div>
        </div>
        <div className="px-2 py-8 text-[#0d3333] md:flex md:flex-1 md:flex-col md:justify-center md:px-2 md:py-4">
          <h2 className="font-display text-[2.15rem] leading-[1.02] md:text-5xl">Hola, soy Mafe Cerquera.</h2>
          <p className="mt-3 text-base font-semibold md:text-lg">Nutricionista funcional y digestiva.</p>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            Creo en una alimentación que se adapte a tu vida y a tus necesidades, sin restricciones extremas.
          </p>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            Creé Vacaciones sin Restricciones para compartir herramientas prácticas que te permitan cuidar tu digestión, mantenerte activa y disfrutar más tus vacaciones.
          </p>
        </div>
      </div>
    </section>
  );
}

function OfertaPrincipal() {
  const incluye = [
    "Plan de alimentación flexible de cinco días",
    "Recetas y guías prácticas",
    "Guía para comer en vacaciones",
    "Plan de ejercicios y movilidad",
    "Checklist de bienestar digestivo",
    "Acceso digital al contenido",
  ];

  return (
    <section id="planes" className="scroll-mt-24 bg-[#f7f4ec] px-5 py-14 text-[#0d3333] md:px-8 md:py-20">
      <div className="mx-auto max-w-xl rounded-[1.8rem] bg-[#0d3333] px-6 py-8 text-[#f4f7ef] md:px-10 md:py-10">
        <p className="text-xs font-semibold tracking-[0.16em] uppercase">Tu programa digital</p>
        <h2 className="mt-3 font-display text-3xl leading-[0.95] md:text-5xl">Vacaciones sin Restricciones</h2>
        <p className="mt-4 flex items-baseline gap-3">
          <span className="font-display text-4xl">USD 14</span>
          <span className="text-sm text-[#f4f7ef]/70">Pago único</span>
        </p>
        <div className="my-6 h-px bg-[#f4f7ef]/20" />
        <p className="font-semibold">Incluye:</p>
        <ul className="mt-3 grid gap-2">
          {incluye.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-snug">
              <span aria-hidden>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-[#f4f7ef]/75">
          Herramientas que puedes consultar y adaptar a tu rutina, incluso después de los cinco días.
        </p>
        <a
          href="#lista"
          className="mt-6 flex items-center justify-center rounded-full bg-[#f4f7ef] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-[#0d3333] uppercase"
        >
          Empezar ahora
        </a>
        <p className="mt-3 text-center text-xs text-[#f4f7ef]/60">Pago seguro · Sin suscripción mensual</p>
      </div>
    </section>
  );
}

function Preguntas() {
  const [open, setOpen] = useState(0);

  return (
    <section id="preguntas" className="bg-[#f7f4ec] px-5 py-14 text-[#0d3333] md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-4xl leading-[0.95] md:text-5xl">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-[#0d3333]/15 rounded-[1.4rem] border border-[#0d3333]/15 bg-[#fffdf8] px-5">
          {PREGUNTAS.map((item, index) => (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold"
                aria-expanded={open === index}
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                {item.q}
                <span aria-hidden className="text-2xl leading-none">
                  {open === index ? "–" : "+"}
                </span>
              </button>
              {open === index ? <p className="pb-4 text-sm leading-relaxed text-[#0d3333]/75">{item.a}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comunidad() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/media/vacaciones-sin-restriccion/imagenes/separador-playa.jpg"
        alt=""
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative flex min-h-[26rem] items-center justify-center px-5 py-14 md:min-h-[32rem] md:px-8">
      <div className="w-full max-w-xl rounded-[1.6rem] bg-[#e7f0e4]/92 px-6 py-8 text-[#0d3333] shadow-[0_18px_40px_rgba(13,51,51,0.16)] md:px-10">
        <p className="text-xs font-semibold tracking-[0.16em] uppercase">¿Aún no quieres comprar?</p>
        <h2 className="mt-3 font-display text-3xl leading-[0.95] md:text-4xl">Empieza gratis en mi comunidad.</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#0d3333]/80">
          Un espacio para mujeres que quieren aprender a cuidar su alimentación, comprender mejor su digestión y construir hábitos sostenibles.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center justify-center rounded-full border border-[#0d3333] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] uppercase"
        >
          Unirme gratis
        </a>
      </div>
      </div>
    </section>
  );
}

function CierreKit() {
  return (
    <section className="bg-[#f7f4ec] px-5 pb-16 md:px-8 md:pb-24">
      <div className="mx-auto max-w-3xl rounded-[1.6rem] bg-[#0d3333] px-6 py-10 text-center text-[#f4f7ef] md:px-10">
        <h2 className="font-display text-2xl leading-snug md:text-4xl">
          Disfruta tus vacaciones. Cuida tu digestión. Muévete a tu ritmo.
        </h2>
        <p className="mt-3 text-base text-[#f4f7ef]/75">
          Cinco días de herramientas prácticas para cuidarte sin dietas extremas.
        </p>
        <p className="mt-5 font-display text-4xl">USD 14</p>
        <a
          href="#lista"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f4f7ef] px-8 py-3.5 text-sm font-semibold tracking-[0.06em] text-[#0d3333] uppercase"
        >
          Empezar ahora
        </a>
      </div>
    </section>
  );
}


function Countdown({
  onForest = false,
  compact = false,
  labels = ["días", "horas", "min", "seg"],
}: {
  onForest?: boolean;
  compact?: boolean;
  labels?: string[];
}) {
  const [parts, setParts] = useState<string[] | null>(null);

  useEffect(() => {
    const target = new Date(COHORT_START).getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setParts([
        String(days).padStart(2, "0"),
        String(hours).padStart(2, "0"),
        String(mins).padStart(2, "0"),
        String(secs).padStart(2, "0"),
      ]);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const reduce = useReducedMotion();
  const numberClass = `font-price leading-none tracking-normal ${compact ? "text-5xl sm:text-6xl" : "text-5xl sm:text-6xl"} ${onForest ? "text-butter" : ""}`;

  return (
    <div className={`${compact ? "mt-2" : "mt-4"} grid grid-cols-4 gap-1 sm:mx-auto sm:max-w-xl ${onForest ? "text-cream" : ""}`}>
      {(parts ?? ["--", "--", "--", "--"]).map((value, i) => (
        <div key={labels[i]} className={`text-center ${compact ? "py-0" : "py-2"}`}>
          <FlipNum value={value} className={numberClass} reduce={reduce} live={i === 3} />
          <p className="mt-1 text-[0.62rem] font-semibold tracking-[0.2em] uppercase">{labels[i]}</p>
        </div>
      ))}
    </div>
  );
}

function FlipNum({
  value,
  className,
  reduce,
  live,
}: {
  value: string;
  className: string;
  reduce: boolean | null;
  live: boolean;
}) {
  if (reduce) return <p className={className}>{value}</p>;

  return (
    <span className="inline-grid overflow-hidden">
      <span className={`invisible col-start-1 row-start-1 ${className}`} aria-hidden>
        {value}
      </span>
      <AnimatePresence initial={false}>
        <motion.span
          key={value}
          className={`col-start-1 row-start-1 ${className}`}
          initial={{ y: "0.55em", opacity: 0, scale: live ? 0.86 : 1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: "-0.55em", opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
