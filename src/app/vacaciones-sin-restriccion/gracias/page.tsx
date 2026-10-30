import type { Metadata } from "next";
import { Suspense } from "react";
import { GraciasPage } from "@/components/vacaciones/gracias-page";

export const metadata: Metadata = {
  title: "Ya estás dentro",
  description: "Tu 15% para Hazte Amiga de tus Hormonas queda reservado.",
};

export default function Page() {
  return (
    <Suspense fallback={<main className="min-h-[50vh] bg-cream" />}>
      <GraciasPage />
    </Suspense>
  );
}
