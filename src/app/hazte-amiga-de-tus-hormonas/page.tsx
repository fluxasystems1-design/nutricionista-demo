import type { Metadata } from "next";
import { HormonasPage } from "@/components/hormonas/hormonas-page";

export const metadata: Metadata = {
  title: "Hazte amiga de tus hormonas",
  description:
    "Programa digital de 4 semanas para leer tu SOMP y tu resistencia a la insulina. Desde $59 USD · 53 €. Inicio febrero 2027.",
};

export default function Page() {
  return <HormonasPage />;
}
