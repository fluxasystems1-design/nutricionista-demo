import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";

export const metadata: Metadata = {
  title: "Nutrición integral",
  description:
    "María Fernanda Cerquera, nutricionista funcional y digestiva. Consultas presenciales y online en Colombia y España.",
};

export default function Page() {
  return <HomePage />;
}
