import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { METINGEN } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";

export function MetingenBand() {
  const [expanded, setExpanded] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const [moreHeight, setMoreHeight] = useState("0px");

  useEffect(() => {
    if (!moreRef.current) return;
    setMoreHeight(expanded ? `${moreRef.current.scrollHeight}px` : "0px");
  }, [expanded]);

  return (
    <section className="relative bg-navy-deep text-white">
      <div className="blueprint-bg absolute inset-0 opacity-30" aria-hidden />
      <div className="container-x relative py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="section-label text-orange">
              <span>Maturity Metingen</span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-white md:text-4xl">
              Voer cyclische Maturity Meting uit om te bepalen of u op de juiste wijze invulling
              geeft aan de principes van Ketensamenwerking/RGS
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              U plukt pas de vruchten van de implementatie van in- of externe ketensamenwerking /
              RGS als u de onderliggende principes van ketensamenwerking of RGS ook daadwerkelijk
              geïmplementeerd hebt. Daar waar ketensamenwerking meer gaat over het stroomlijnen van
              de samenwerking binnen en tussen organisaties gaat de toepassing van RGS primair over
              het maken van slimme keuzes bij het configureren van de bouwopgave zelf, zodat
              daardoor een optimale TCO ontstaat.
            </p>
            <div
              className="overflow-hidden transition-[height] duration-500 ease-in-out"
              style={{ height: moreHeight }}
            >
              <p ref={moreRef} className="max-w-2xl pt-4 text-base leading-relaxed text-white/70">
                De mate waarin ketens volgens de principes van in- en externe ketensamenwerking zijn
                ingericht alsook de mate waarin invulling wordt gegeven aan de principes van RGS, is
                te meten. Door ook nog te kijken naar de mate waarin teams vanuit de zachte kant
                slim zijn ingericht, kunnen wij partijen voorzien van een schat aan inzichten die
                gebruikt kunnen worden om bestaande samenwerkingsverbanden slim te laten doorstarten
                of richting te geven bij de start van nieuwe samenwerkingsverbanden. Dit om er voor
                te zorgen dat er maximaal waarde wordt gerealiseerd in ambitieuze
                samenwerkingsverbanden.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-white hover:text-orange"
            >
              {expanded ? "Lees minder" : "Lees meer"}
              <ArrowRight
                className={`h-4 w-4 transition-transform duration-300 ${expanded ? "-rotate-90" : ""}`}
                aria-hidden
              />
            </button>
            <Link
              to="/ketenmetingen"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange/90"
            >
              Ontdek welke meting past bij uw organisatie
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ul className="grid gap-4 lg:col-span-7">
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
