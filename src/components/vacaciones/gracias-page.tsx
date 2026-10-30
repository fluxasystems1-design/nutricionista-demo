"use client";

import { useSearchParams } from "next/navigation";
import { PngSticker } from "@/components/png-sticker";
import { Header, Pill } from "@/components/chrome";
import { Reveal } from "@/components/motion";
import { ROUTES } from "@/lib/site";

const NAMES: Record<string, string> = {
  basico: "Básico",
  vip: "VIP",
};

export function GraciasPage() {
  const params = useSearchParams();
  const plan = NAMES[params.get("plan") ?? ""] ?? "de vacaciones";

  return (
    <>
      <Header cta={{ href: `${ROUTES.hormonas}#lista`, label: "Lista de febrero" }} />
      <main className="relative overflow-hidden">
        <PngSticker
          src="/stickers/flor.png"
          className="top-8 right-[6%] w-28 md:w-44"
          rotate={14}
        />
        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 py-20 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-forest/70 uppercase">
              Plan {plan}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-forest md:text-7xl">
              Ya estás <span className="italic text-lagoon">dentro.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
              Tu 15 % de descuento para Hazte Amiga de tus Hormonas queda reservado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill href={`${ROUTES.hormonas}#lista`}>Unirme a la lista de espera</Pill>
              <Pill href={ROUTES.home} tone="line">
                Volver al inicio
              </Pill>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}
