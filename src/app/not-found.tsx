import { ROUTES } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream px-6 text-center">
      <div>
        <p className="font-display text-7xl text-olive italic">404</p>
        <p className="mt-3 text-ink/80">Esta página no está en el mapa.</p>
        <a
          href={ROUTES.home}
          className="mt-6 inline-flex rounded-full bg-olive px-5 py-3 font-display text-base text-forest italic"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
}
