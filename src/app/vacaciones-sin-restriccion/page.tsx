import type { Metadata } from "next";
import { VacacionesPage } from "@/components/vacaciones/vacaciones-page";

export const metadata: Metadata = {
  title: "Vacaciones sin restricción",
  description:
    "Reto de 5 días con Mafe Cerquera y Natalia Galvis. Inicio 23 de noviembre. Energía, digestión ligera y vacaciones sin culpa.",
};

export default function Page() {
  return <VacacionesPage />;
}
