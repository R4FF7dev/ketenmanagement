import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { METINGEN } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";

export function MetingenBand() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="blueprint-bg absolute inset-0 opacity-30" aria-hidden />
      <div className="container-x relative py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="section-label text-orange">
              <span className="text-white/40">03</span>
              <span className="h-px w-6 bg-orange/70" aria-hidden />
              <span>Ketenmetingen</span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-white md:text-4xl">
              Maak ketensamenwerking meetbaar
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Samenwerking wordt pas bestuurbaar wanneer ze zichtbaar en meetbaar is. Met bewezen
              metingen brengen wij de volwassenheid, kwaliteit en ontwikkeling van uw keten in
              kaart.
            </p>
            <Link
              to="/ketenmetingen"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange/90"
            >
              Ontdek welke meting past bij uw organisatie
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {METINGEN.map((m) => (
              <li
                key={m.code}
                className="group rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-orange/60 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded bg-orange/20 px-2 py-1 font-mono text-[11px] font-semibold text-orange">
                    {m.code}
                  </span>
                  <span className="h-px flex-1 bg-white/10" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{m.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
