import type { Metadata } from "next";
import { AcompanamientoPage } from "@/components/acompanamiento/acompanamiento-page";

export const metadata: Metadata = {
  title: "Consulta 1:1",
  description:
    "Acompañamiento nutricional privado de 90 días con Mafer Cerquera. $897.000 COP · 280 €. Consultas presenciales y online.",
};

export default function Page() {
  return <AcompanamientoPage />;
}
