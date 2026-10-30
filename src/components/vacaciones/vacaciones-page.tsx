"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PngSticker } from "@/components/png-sticker";
import { Eyebrow, Header, Pill } from "@/components/chrome";
import { Marquee, Reveal } from "@/components/motion";
import { COHORT_START, INSTAGRAM, PRECIOS, ROUTES, TESTIMONIOS, TIKTOK, WHATSAPP } from "@/lib/site";

const QUIZ = [
  "Me inflamo apenas rompo mi rutina",
  "Quiero sentir mi abdomen desinflamado en bikini o en la cena",
  "Vuelvo sintiéndome peor que antes de salir",
  "Todas las anteriores",
];

const ESCENAS = [
  { icon: "🧳", text: "Vas a viajar y ya sabes cómo termina: hinchada, pesada, con la ropa que no cierra igual al tercer día." },
  { icon: "🎉", text: "Te quedas en casa, pero cada celebración familiar es el mismo ciclo: comes con culpa, te inflamas y pasas la noche incómoda." },
  { icon: "🔁", text: "Ya lo intentaste el año pasado y terminaste exactamente donde empezaste." },
  { icon: "😔", text: "Te da miedo que este año sea igual." },
  { icon: "📸", text: "Evitas las fotos familiares o de viaje porque no te sientes bien en tu cuerpo." },
  { icon: "🤐", text: "Te aíslas de planes por miedo a cómo te vas a sentir después." },
  { icon: "🧠", text: "Sientes que tu cuerpo te traiciona justo cuando más quieres disfrutar." },
  { icon: "🗓️", text: "Ya te estás imaginando enero: otra vez “empezando de cero”." },
];

const SENALES = [
  "Te despiertas liviana, pero para la tarde ya sientes el abdomen duro e hinchado.",
  "Descartas la ropa que más te gusta porque “hoy no es un buen día de cuerpo”.",
  "Pasas la noche calculando “cómo compensar” lo que comiste.",
  "Llegas de un viaje más cansada de lo que saliste.",
  "Evitas mirar tus fotos de la última vacación.",
];

const DIAS = [
  "Reinicia tu digestión: base antiinflamatoria",
  "Plan viajero y navideño: comer fuera sin culpa",
  "Rutinas antiinflamatorias de movimiento (bono Natalia)",
  "Mentalidad sin culpa: sesión en vivo",
  "Sostener el cambio al volver y tu siguiente paso: cierre en vivo, con la presentación de Hazte Amiga de tus Hormonas",
];

const INCLUYE = [
  "🥗 Protocolo Antiinflamatorio Portátil: guía diaria adaptable a viaje, playa o casa",
  "🛒 Lista de Mercado Desinflamante",
  "🎄 Recetas Navideñas Saludables",
  "🥤 Recetario de Bebidas Antiinflamatorias",
  "🧳 Plan Viajero Desinflamado",
  "🏃‍♀️ Rutinas Antiinflamatorias de Movimiento (con Natalia)",
  "🎥 Videos explicativos guiados",
  "💬 Acompañamiento diario en grupo + 2 sesiones en vivo con Mafer",
];

const ADIOS = [
  "Elegir entre disfrutar tus vacaciones o cuidar tu cuerpo",
  "Volver sintiéndote peor que cuando saliste",
  "Dietas que no sobreviven a una maleta o una cena familiar",
  "Empezar “modo restricción” apenas terminan tus vacaciones",
];

const HOLA = [
  "Herramientas simples que se adaptan a donde estés",
  "Energía real para disfrutar cada día",
  "Digestión ligera y menos inflamación, comas lo que comas",
  "Sentir tu abdomen desinflamado y tonificado, sin que sea lo único que importe",
  "Volver con continuidad y un siguiente paso claro, no con culpa",
];

export function VacacionesPage() {
  return (
    <>
      <Header
        logoHref="#inicio"
        links={[
          { href: "#plan", label: "El plan" },
          { href: "#voces", label: "Testimonios" },
          { href: "#incluye", label: "Qué incluye" },
          { href: "#planes", label: "Planes" },
        ]}
        cta={{ href: "#planes", label: "Quiero mi plan", tone: "berry" }}
      />
      <main>
        <Hero />
        <div className="gals-type">
        <Marquee
          face="display"
          compact
          mark="★"
          className="on-pink bg-[#f8e4e8] text-[#381018]"
          items={[
            "Vacaciones sin restricción / disfruta",
            "Vacaciones sin restricción / sin culpa",
            "Vacaciones sin restricción / energía real",
            "Vacaciones sin restricción / digestión ligera",
          ]}
        />
        <ListaArriba />
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
        <Quiz />
        <Escenarios />
        <Pilares />
        <Reencuadre />
        <Senales />
        <Voces />
        <Metodo />
        <Marquee
          face="display"
          mark="★"
          className="bg-[#0d3333] text-[#d7ebc8]"
          items={[
            "vive tus vacaciones completas",
            "disfruta sin dejar de cuidarte",
            "no es otra dieta de viaje",
            "energía real, estés donde estés",
            "5 días para sostener tu cuerpo",
            "elige básico o vip",
          ]}
        />
        <Planes />
        <Agenda />
        <Incluye />
        <AdiosHola />
        <Califica />
        <ComoFunciona />
        <Puente />
        </div>
      </main>
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

function ListaArriba() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative isolate overflow-hidden px-5 py-14 text-[#0d3333] md:py-16">
      <img
        src="/media/vacaciones-sin-restriccion/imagenes/lista-espera.jpg"
        alt=""
        width={1024}
        height={676}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative mx-auto max-w-xl rounded-[2rem] bg-[#fffdf8]/90 px-6 py-10 text-center shadow-[0_18px_40px_rgba(13,51,51,0.16)] md:px-10">
        <p className="font-display text-2xl italic">Lista de espera</p>
        <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">Vacaciones sin restricción</h2>
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
    </section>
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
              <Eyebrow>Mafer Cerquera × Natalia Galvis · Inicio 23 de noviembre</Eyebrow>
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

function Promesa() {
  return (
    <section className="relative z-10 bg-[#0d3333] text-[#d7ebc8]">
      <div className="mx-auto grid max-w-6xl items-end gap-4 px-5 pt-12 md:grid-cols-[minmax(0,1.05fr)_minmax(260px,440px)] md:px-8 md:pt-10">
        <Reveal>
          <p className="font-display text-3xl leading-snug italic md:text-5xl">
            Energía real, digestión ligera y un abdomen desinflamado para tus vacaciones, sin tener que elegir entre disfrutar y cuidarte.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[#d7ebc8]/80">
            5 días para sostener tu cuerpo en cualquier vacación: viaje, playa, familia o fiesta.
          </p>
          <div className="mt-8">
            <Pill href="#planes">Quiero mi plan de vacaciones</Pill>
          </div>
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

function Quiz() {
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden on-pink bg-[#f8e4e8] px-5 py-16 text-forest md:px-8 md:py-24">
      <PngSticker
        src="/stickers/hoja.png"
        className="-right-10 -bottom-14 w-48 md:w-64"
        rotate={-12}
      />
      <PngSticker src="/stickers/tomates.png" className="top-2 -left-8 w-24 md:left-0 md:w-48" rotate={8} delay={0.08} />
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <Eyebrow>Quiz</Eyebrow>
            <p className="font-display text-2xl text-[#b03040] italic">Elige una opción</p>
          </div>
          <h2 className="mt-3 font-display text-3xl text-forest md:text-5xl">
            ¿Qué es lo que más te preocupa de tus próximas vacaciones?
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-3">
          {QUIZ.map((option) => {
            const active = choice === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setChoice(option)}
                className={`rounded-[1.3rem] px-5 py-4 text-left text-sm font-medium transition-transform md:text-base ${
                  active
                    ? "scale-[1.01] bg-[#0d3333] text-[#d7ebc8]"
                    : "bg-paper text-forest hover:-translate-y-0.5"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        <AnimatePresence>
          {choice ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 grid gap-3 md:grid-cols-2"
            >
              <a href="#planes" className="rounded-[1.4rem] bg-butter p-5">
                <p className="font-display text-2xl text-forest italic">Ver el reto de 5 días</p>
                <p className="mt-2 text-sm leading-relaxed text-forest/80">
                  Empieza el 23 de noviembre y desbloquea 15 % de descuento en el programa de febrero.
                </p>
              </a>
              <a
                href={`${ROUTES.hormonas}#lista`}
                className="rounded-[1.4rem] bg-paper p-5 ring-1 ring-forest/10"
              >
                <p className="font-display text-2xl text-forest italic">Solo quiero la lista de espera</p>
                <p className="mt-2 text-sm leading-relaxed text-forest/80">
                  Te avisamos primero cuando abra Hazte Amiga de tus Hormonas.
                </p>
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Escenarios() {
  const reduce = useReducedMotion();
  const columns = [ESCENAS.slice(0, 4), ESCENAS.slice(4)];
  const delays = [
    [0, 0.05, 0.2, 0.15],
    [0, 0.05, 0.1, 0.2],
  ];

  return (
    <section className="relative overflow-hidden bg-[#0d3333] px-5 py-16 text-[#d7ebc8] md:px-8 md:py-24">
      <PngSticker src="/stickers/hoja-salvia.png" className="-top-6 -left-16 w-64 md:-top-8 md:-left-20 md:w-[24rem]" rotate={-14} />
      <PngSticker src="/stickers/hoja-roble.png" className="-top-4 -right-14 w-72 md:-top-6 md:-right-16 md:w-[28rem]" rotate={8} delay={0.05} />
      <PngSticker src="/stickers/hoja-roble.png" className="top-[18%] -left-20 w-56 md:-left-24 md:w-[22rem]" rotate={-8} delay={0.1} flip />
      <PngSticker src="/stickers/hoja-salvia.png" className="top-[22%] -right-16 w-56 md:-right-20 md:w-[22rem]" rotate={16} delay={0.14} flip />
      <PngSticker src="/stickers/hoja-salvia.png" className="top-[48%] -left-14 w-52 md:-left-16 md:w-72" rotate={12} delay={0.18} />
      <PngSticker src="/stickers/hoja-roble.png" className="top-[52%] -right-16 w-56 md:-right-20 md:w-80" rotate={-6} delay={0.2} />
      <PngSticker src="/stickers/hoja-roble.png" className="-bottom-8 -left-16 w-60 md:-bottom-10 md:-left-20 md:w-[22rem]" rotate={18} delay={0.24} flip />
      <PngSticker src="/stickers/hoja-salvia.png" className="-bottom-6 -right-14 w-64 md:-bottom-8 md:-right-16 md:w-[24rem]" rotate={-10} delay={0.28} flip />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-2xl text-olive italic">¿te suena?</p>
          <h2 className="mt-2 max-w-3xl font-display text-4xl leading-[0.95] md:text-6xl">
            ¿Te reconoces en alguno de estos escenarios?
          </h2>
        </Reveal>
        <div className="mt-10 grid items-start gap-3 md:grid-cols-2 md:gap-x-8">
          {columns.map((col, colIndex) => (
            <ul key={colIndex} className="space-y-3">
              {col.map((item, i) => (
                <motion.li
                  key={item.text}
                  initial={reduce ? false : { opacity: 0, x: colIndex === 0 ? "-100%" : "100%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.6, delay: delays[colIndex][i], ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex items-start gap-3 rounded-[1.35rem] bg-white px-5 py-4 shadow-[0_8px_22px_rgba(13,51,51,0.08)]"
                >
                  <span className="font-display text-2xl leading-none text-olive italic">0{colIndex * 4 + i + 1}</span>
                  <span className="text-sm leading-relaxed text-ink md:text-base">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pilares() {
  const items = [
    "Protocolo Antiinflamatorio Portátil",
    "Movimiento sin Gimnasio",
    "Mentalidad sin Culpa",
  ];
  const tilt = ["md:-rotate-2", "md:rotate-1 md:translate-y-8", "md:rotate-2"];
  return (
    <section id="plan" className="relative scroll-mt-24 overflow-hidden on-pink bg-[#f8e4e8] text-forest">
      <div aria-hidden className="field-lines pointer-events-none absolute inset-0" />
      <PngSticker src="/stickers/flor.png" className="-top-8 right-6 w-24 md:w-36" rotate={16} />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-center text-[0.72rem] font-semibold tracking-[0.28em] uppercase">El plan de 5 días</p>
          <p className="mx-auto mt-5 max-w-4xl text-center font-display text-3xl leading-snug italic md:text-5xl">
            Olvida la idea de que “cuidarte” y “disfrutar” son cosas distintas. Un plan de 5 días diseñado para mujeres que quieren vivir sus vacaciones completas, sin pagar la cuenta con su cuerpo después.
          </p>
        </Reveal>
        <div className="mt-14 grid items-start gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <article key={item} className={`bg-paper px-6 py-7 shadow-[0_18px_40px_rgba(74,39,19,0.12)] ${tilt[i]}`}>
              <p className="font-display text-5xl text-olive italic">0{i + 1}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight italic">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reencuadre() {
  return (
    <section className="relative overflow-hidden py-20 text-[#f7f4ec] md:py-28">
      <img
        src="/media/vacaciones-sin-restriccion/imagenes/lista-espera.jpg"
        alt=""
        width={1024}
        height={676}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 bg-[#0d3333]/88" />
      <p
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-[-10vw] z-[1] -translate-y-1/2 font-display text-[18vw] leading-none whitespace-nowrap text-[#f7f4ec]/10 italic select-none md:left-[-2.5vw] md:text-[12vw]"
      >
        sin culpa
      </p>
      <Reveal className="relative z-10 mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="font-display text-4xl md:text-5xl">¿Te suena familiar?</h2>
        <p className="mt-4 text-lg leading-relaxed">
          Comes bien todo el año, pero tus vacaciones te inflaman igual. No es que te falte fuerza de voluntad. Es que nadie te ha dado una estrategia que se adapte a TU cuerpo cuando tu rutina cambia. Tu cuerpo no te está traicionando: se está protegiendo.
        </p>
        <div className="mt-8">
          <Pill href="#planes">Quiero vivir mis vacaciones sin restricción</Pill>
        </div>
      </Reveal>
    </section>
  );
}

function Senales() {
  return (
    <section className="relative overflow-hidden on-pink bg-[#f8e4e8] text-forest">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-28">
        <Reveal>
          <p className="font-display text-2xl italic">sin culpa</p>
          <h2 className="mt-2 font-display text-5xl leading-[0.92] italic md:text-7xl">¿Te sientes así?</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <ol className="space-y-5">
            {SENALES.map((item, i) => (
              <li key={item} className="grid grid-cols-[auto_1fr] gap-4 border-b border-forest/15 pb-5">
                <span className="font-display text-2xl italic">0{i + 1}</span>
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-display text-3xl italic">
            Si te identificaste con más de una, no es casualidad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Voces() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setIndex((v) => (v + 1) % TESTIMONIOS.length), 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="voces" className="scroll-mt-24 overflow-hidden bg-[#0d3333] px-5 py-16 text-[#d7ebc8] md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <Eyebrow light>Testimonios</Eyebrow>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Se sentían igual que tú. Esto es lo que cuentan ahora.
          </h2>
        </div>
        <div className="relative">
          <PngSticker src="/stickers/limon.png" className="-top-8 -right-4 w-20 md:w-28" rotate={18} />
          <span
            aria-hidden
            className="pointer-events-none absolute -top-3 left-10 z-10 h-7 w-28 -rotate-6 bg-[repeating-linear-gradient(-18deg,#d5d6f8_0_8px,#bec1f4_8px_9px)] shadow-[0_8px_14px_rgba(74,39,19,0.12)]"
          />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, rotate: -2, y: 16 }}
              animate={{ opacity: 1, rotate: -1.5, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-paper px-7 py-8 shadow-[0_22px_50px_rgba(74,39,19,0.14)]"
            >
              <p className="font-display text-5xl leading-none text-olive italic">“</p>
              <p className="font-display text-2xl leading-snug text-forest italic md:text-3xl">
                {TESTIMONIOS[index]}
              </p>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-6 flex gap-2 pl-4">
            {TESTIMONIOS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Testimonio ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full ${i === index ? "w-8 bg-[#d7ebc8]" : "w-2.5 bg-[#d7ebc8]/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metodo() {
  return (
    <section className="relative overflow-hidden on-pink bg-[#f8e4e8] text-forest">
      <PngSticker src="/stickers/palta.png" className="right-2 bottom-0 w-28 md:right-10 md:w-44" rotate={12} />
      <div className="relative mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-display text-2xl text-olive italic">el método</p>
          <h2 className="mt-3 max-w-4xl font-display text-5xl leading-[0.92] md:text-7xl">
            Método Vacaciones sin restricción
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest/80">
            No es otra dieta que abandonas en el primer viaje. Es sostener tu cuerpo en medio del caos real de tus vacaciones, sin elegir entre disfrutar y cuidarte.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Agenda() {
  const tilt = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1"];
  const tape = ["bg-[#d7ebc8]", "bg-[#f8bad1]", "bg-[#e4f48a]", "bg-[#d7ebc8]", "bg-[#f8bad1]"];

  return (
    <section className="relative overflow-hidden bg-[#0d3333] px-5 py-10 text-[#d7ebc8] md:px-8 md:py-12">
      <PngSticker src="/stickers/hoja-salvia.png" className="-top-8 -left-16 w-52 md:-left-20 md:w-72" rotate={-16} />
      <PngSticker src="/stickers/hoja-roble.png" className="-top-6 -right-16 w-56 md:-right-20 md:w-80" rotate={12} delay={0.06} />
      <PngSticker src="/stickers/hoja-roble.png" className="top-[30%] -left-20 w-44 md:w-60" rotate={-8} delay={0.1} flip />
      <PngSticker src="/stickers/hoja-salvia.png" className="top-[28%] -right-16 w-44 md:w-60" rotate={14} delay={0.14} flip />
      <PngSticker src="/stickers/hoja-roble.png" className="-bottom-10 -left-14 w-48 md:w-64" rotate={18} delay={0.18} flip />
      <PngSticker src="/stickers/hoja-salvia.png" className="-bottom-8 -right-14 w-52 md:w-72" rotate={-12} delay={0.22} />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:gap-8">
        <div className="flex items-center gap-3">
          <p aria-hidden className="shrink-0 font-display text-[7.5rem] leading-[0.72] text-olive italic">
            5
          </p>
          <h2 className="font-display text-2xl leading-[1.05] italic md:text-4xl">
            <span className="sr-only">5 </span>
            días contigo: guía de cada día, dos sesiones en vivo con Mafer.
          </h2>
        </div>
        <ol className="grid grid-cols-2 gap-3 pt-2 lg:grid-cols-6">
          {DIAS.map((item, i) => (
            <li
              key={item}
              className={`relative bg-[#fffdf8] px-3 pt-4 pb-3 shadow-[0_10px_16px_rgba(0,0,0,0.22)] lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${tilt[i]}`}
            >
              <span aria-hidden className={`absolute -top-1.5 left-1/2 h-3 w-9 -translate-x-1/2 ${tape[i]}`} />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, transparent 0.65rem, rgba(187,51,80,0.5) 0.65rem, rgba(187,51,80,0.5) calc(0.65rem + 1.5px), transparent calc(0.65rem + 1.5px)), repeating-linear-gradient(to bottom, transparent 0 1.2rem, rgba(61,41,22,0.14) 1.2rem calc(1.2rem + 1px))",
                  backgroundRepeat: "no-repeat, repeat",
                  backgroundPosition: "0 0, 0 1.45rem",
                }}
              />
              <div className="relative pl-3">
                <p className="font-display text-2xl leading-none text-[#7a8a3c] italic">0{i + 1}</p>
                <p className="mt-0.5 font-display text-base leading-tight text-[#3d2916] italic">{item}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function OneLine({ text }: { text: string }) {
  const box = useRef<HTMLSpanElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!box.current || !label.current) return;
      setShift(Math.max(0, label.current.scrollWidth - box.current.clientWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text]);

  return (
    <span ref={box} className="block min-w-0 flex-1 overflow-hidden">
      <motion.span
        ref={label}
        className="inline-block whitespace-nowrap text-base font-bold leading-none tracking-tight text-[#1a1210]"
        animate={shift > 0 && !reduce ? { x: [0, -shift, 0] } : { x: 0 }}
        transition={
          shift > 0 && !reduce
            ? { duration: Math.max(5, shift / 36), repeat: Infinity, ease: "linear", repeatDelay: 1.1 }
            : { duration: 0 }
        }
      >
        {text}
      </motion.span>
    </span>
  );
}

function Incluye() {
  const reduce = useReducedMotion();
  const items = INCLUYE.map((item) => {
    const match = item.match(/^(\S+)\s+([\s\S]+)$/);
    return match ? { icon: match[1], text: match[2] } : { icon: "", text: item };
  });
  const [per, setPer] = useState(2);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides: (typeof items)[] = [];
  for (let i = 0; i < items.length; i += per) slides.push(items.slice(i, i + per));
  const safe = index % slides.length;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setPer(mq.matches ? 2 : 1);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => setIndex((v) => v + 1), 3200);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  return (
    <section id="incluye" className="relative scroll-mt-24 overflow-hidden bg-[#ede8e2] px-5 py-16 text-[#381018] md:px-8 md:py-24">
      <PngSticker src="/stickers/tenedor.png" className="-right-8 top-2 w-28 md:-right-6 md:top-4 md:w-[22rem]" rotate={-8} />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-5xl md:text-6xl">Qué incluye</h2>
          <p className="mt-3 font-display text-2xl text-[#b03040] italic">te llevas</p>
        </div>
        <div
          className="relative mt-10 h-16 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence initial={false}>
            <motion.ul
              key={`${per}-${safe}`}
              initial={reduce ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 grid grid-cols-1 items-center gap-3 md:grid-cols-2 md:gap-5"
            >
              {slides[safe].map((item, col) => {
                const lime = (safe + col) % 2 === 0;
                return (
                  <li
                    key={item.text}
                    className={`flex h-16 w-full min-w-0 items-center gap-3 overflow-hidden rounded-full border-2 border-[#1a1210] px-5 ${lime ? "bg-[#e4f48a]" : "bg-[#ffc2dc]"}`}
                  >
                    <span className="shrink-0 text-lg leading-none" aria-hidden>
                      {item.icon}
                    </span>
                    <OneLine text={item.text} />
                  </li>
                );
              })}
            </motion.ul>
          </AnimatePresence>
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Grupo ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full ${i === safe ? "w-8 bg-[#381018]" : "w-2.5 bg-[#381018]/30"}`}
            />
          ))}
        </div>
        <p className="mt-8 text-center font-display text-2xl italic">
          Bono: Body Sculpt Challenge, Abdomen Tonificado (Natalia Galvis)
        </p>
      </div>
    </section>
  );
}

function AdiosHola() {
  const reduce = useReducedMotion();
  const columns = [
    {
      kicker: "suelta",
      title: "Dile adiós a",
      items: ADIOS,
      from: "-100%",
      delays: [0, 0.05, 0.2, 0.15],
      className: "bg-[#0d3333] px-6 py-16 text-[#d7ebc8] md:px-12 md:py-24",
      kickerClass: "text-butter",
    },
    {
      kicker: "quédate",
      title: "Dile hola a",
      items: HOLA,
      from: "100%",
      delays: [0, 0.05, 0.1, 0.2, 0.15],
      className: "on-pink bg-[#f8e4e8] px-6 py-16 text-forest md:px-12 md:py-24",
      kickerClass: "text-olive",
    },
  ];

  return (
    <section className="grid overflow-hidden md:grid-cols-2">
      {columns.map((col) => (
        <div key={col.title} className={col.className}>
          <p className={`font-display text-2xl italic ${col.kickerClass}`}>{col.kicker}</p>
          <h2 className="mt-2 font-display text-5xl italic md:text-6xl">{col.title}</h2>
          <ul className="mt-8 space-y-3">
            {col.items.map((item, i) => (
              <motion.li
                key={item}
                initial={reduce ? false : { opacity: 0, x: col.from }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.6, delay: col.delays[i], ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-start gap-3 rounded-[1.35rem] bg-white px-5 py-4 shadow-[0_8px_22px_rgba(13,51,51,0.08)]"
              >
                <span className="font-display text-2xl leading-none text-[#b2bb68] italic">0{i + 1}</span>
                <span className="text-sm leading-relaxed text-[#3d2916] md:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

function Califica() {
  return (
    <section className="bg-[#0d3333] text-[#d7ebc8]">
      <div className="relative isolate overflow-hidden px-5 py-16 md:px-8 md:pt-24 md:pb-20">
        <img
          src="/media/vacaciones-sin-restriccion/imagenes/separador-playa.jpg"
          alt=""
          width={1280}
          height={720}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_52%]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[#0d3333]/64 via-[#0d3333]/48 to-[#0d3333]" />
        <div className="relative mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-2">
          <article className="bg-paper p-8 shadow-[0_18px_40px_rgba(13,51,51,0.28)] md:rotate-1">
            <p className="font-display text-2xl text-olive italic">sí</p>
            <h2 className="mt-2 font-display text-4xl text-forest italic md:text-5xl">Es para ti si</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              Quieres herramientas reales para sostener tu cuerpo en tus vacaciones, sin dietas extremas ni renunciar a disfrutar.
            </p>
          </article>
          <article className="on-pink bg-[#f8e4e8] p-8 text-forest shadow-[0_18px_40px_rgba(13,51,51,0.28)] md:-rotate-1 md:translate-y-8">
            <p className="font-display text-2xl italic">todavía no</p>
            <h2 className="mt-2 font-display text-4xl text-forest italic md:text-5xl">Probablemente no es para ti si</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              Buscas bajar de talla en 5 días, o esperas que esto reemplace tu tratamiento médico.
            </p>
          </article>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-14 text-sm leading-relaxed text-[#d7ebc8] md:px-8 md:pb-16">
        ¿Este reto no es lo tuyo ahora? Hazte Amiga de tus Hormonas empieza en febrero.{" "}
        <a href={`${ROUTES.hormonas}#lista`} className="font-semibold underline underline-offset-4">
          Unirme a la lista de espera
        </a>
      </p>
    </section>
  );
}

function Planes() {
  const cards = [
    {
      name: "Básico",
      price: PRECIOS.vacacionesBasico.cop,
      note: `COP · ${PRECIOS.vacacionesBasico.eur}`,
      text: "Protocolo completo, 5 días de acompañamiento grabado, todos los bonos y 2 sesiones grupales en vivo.",
      href: `${ROUTES.gracias}?plan=basico`,
      cta: "Quiero mi plan Básico",
    },
    {
      name: "VIP · 1:1",
      price: PRECIOS.vacacionesVip.cop,
      note: `COP · ${PRECIOS.vacacionesVip.eur}`,
      text: "Todo lo del Básico, más 1 sesión personalizada 1:1 con Mafer para ajustar el protocolo a tu caso.",
      href: `${ROUTES.gracias}?plan=vip`,
      cta: "Quiero mi plan VIP",
    },
  ];

  return (
    <section id="planes" className="scroll-mt-24 bg-[#ede8e2] px-5 py-16 text-[#381018] md:px-8 md:py-24">
      <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.name}
            className="flex flex-col rounded-[1.75rem] border border-[#0d3333]/20 bg-white px-8 py-10 text-center"
          >
            <h3 className="font-display text-3xl tracking-tight uppercase">{card.name}</h3>
            <p className="mt-6 font-price text-5xl text-[#bb3350] sm:text-6xl">{card.price}</p>
            <p className="mt-2 text-sm font-semibold tracking-[0.16em] uppercase">{card.note}</p>
            <p className="mt-6 text-base leading-relaxed">{card.text}</p>
            <div className="mt-auto pt-8">
              <Pill href={card.href} className="w-full">
                {card.cta}
              </Pill>
            </div>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-5xl text-center text-sm">
        ¿Aún no estás lista para el reto?{" "}
        <a href={`${ROUTES.hormonas}#lista`} className="font-semibold underline underline-offset-4">
          Unirme a la lista de espera
        </a>
      </p>
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

function ComoFunciona() {
  const steps = [
    "Elige tu plan (Básico o VIP)",
    "Entras al grupo de acompañamiento desde el día 1",
    "Empieza tu reto, estés donde estés",
  ];
  const tilt = ["md:-rotate-1", "md:rotate-1 md:translate-y-5", "md:-rotate-2"];
  return (
    <section className="overflow-hidden on-pink bg-[#f8e4e8] px-5 py-16 text-forest md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-2xl text-olive italic">en tres pasos</p>
        <h2 className="mt-2 font-display text-5xl text-forest italic md:text-6xl">Cómo funciona</h2>
        <ol className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step} className={`relative bg-paper px-6 pt-10 pb-7 shadow-[0_16px_36px_rgba(74,39,19,0.1)] ${tilt[i]}`}>
              <span className="absolute -top-5 left-5 font-display text-5xl text-olive italic">0{i + 1}</span>
              <p className="font-display text-2xl leading-snug text-forest italic">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Pill href="#planes">Empezar mis vacaciones sin restricción</Pill>
        </div>
      </div>
    </section>
  );
}

function Puente() {
  return (
    <section className="grid bg-[#ede8e2] text-[#381018] md:grid-cols-2">
      <div className="px-6 py-16 md:px-12 md:py-24">
        <p className="font-display text-2xl italic">febrero</p>
        <h2 className="mt-2 font-display text-5xl italic md:text-6xl">
          ¿Y después de tus vacaciones, qué?
        </h2>
      </div>
      <div className="px-6 py-16 md:px-12 md:py-24">
        <p className="max-w-md text-lg leading-relaxed">
          Estos 5 días son el primer paso. Hazte Amiga de tus Hormonas, que empieza en febrero 2027, es el siguiente.
        </p>
        <p className="mt-4 max-w-md text-lg leading-relaxed">
          Quienes hagan el reto de noviembre tienen 15 % de descuento en el programa.
        </p>
        <div className="mt-8">
          <Pill href={`${ROUTES.hormonas}#lista`}>Unirme a la lista de espera</Pill>
        </div>
        <p className="mt-3 text-sm text-[#381018]/70">
          Acceso prioritario y aviso antes de que abran cupos.
        </p>
      </div>
    </section>
  );
}
