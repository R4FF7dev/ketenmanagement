import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionLabel } from "@/components/ui/section-label";
import { METINGEN } from "@/content/site";
import { ContactCta } from "@/components/sections/ContactCta";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/ketenmetingen")({
  head: () => ({
    meta: [
      { title: "Maturity Metingen — KMM, KSI, RMM" },
      {
        name: "description",
        content:
          "Meet cyclisch of u op de juiste wijze invulling geeft aan de principes van ketensamenwerking en RGS, met de interne en externe KetenMaturityMeting en de RGS Maturity Meting.",
      },
      { property: "og:title", content: "Maturity Metingen" },
      { property: "og:description", content: "Bewezen metingen voor ketensamenwerking." },
      { property: "og:url", content: "/ketenmetingen" },
    ],
    links: [{ rel: "canonical", href: "/ketenmetingen" }],
  }),
  component: KetenmetingenPage,
});

function KetenmetingenPage() {
  const [expanded, setExpanded] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const [moreHeight, setMoreHeight] = useState("0px");

  useEffect(() => {
    if (!moreRef.current) return;
    setMoreHeight(expanded ? `${moreRef.current.scrollHeight}px` : "0px");
  }, [expanded]);

  return (
    <SiteShell>
      <section className="border-b border-hairline bg-surface">
        <div className="container-x py-16 md:py-24">
          <SectionLabel>Maturity Metingen</SectionLabel>
          <h1 className="heading-rule mt-5 font-display text-4xl font-semibold text-navy-deep md:text-5xl">
            Voer cyclische Maturity Meting uit om te bepalen of u op de juiste wijze invulling geeft
            aan de principes van Ketensamenwerking/RGS
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-soft">
            U plukt pas de vruchten van de implementatie van in- of externe ketensamenwerking / RGS
            als u de onderliggende principes van ketensamenwerking of RGS ook daadwerkelijk
            geïmplementeerd hebt. Daar waar ketensamenwerking meer gaat over het stroomlijnen van de
            samenwerking binnen en tussen organisaties gaat de toepassing van RGS primair over het
            maken van slimme keuzes bij het configureren van de bouwopgave zelf, zodat daardoor een
            optimale TCO ontstaat.
          </p>
          <div
            className="overflow-hidden transition-[height] duration-500 ease-in-out"
            style={{ height: moreHeight }}
          >
            <div ref={moreRef} className="max-w-3xl space-y-4 pt-4">
              <p className="text-lg leading-relaxed text-slate-soft">
                De mate waarin ketens volgens de principes van in- en externe ketensamenwerking zijn
                ingericht alsook de mate waarin invulling wordt gegeven aan de principes van RGS, is
                te meten.
              </p>
              <p className="text-lg leading-relaxed text-slate-soft">
                Door ook nog te kijken naar de mate waarin teams vanuit de zachte kant slim zijn
                ingericht, kunnen wij partijen voorzien van een schat aan inzichten die gebruikt
                kunnen worden om bestaande samenwerkingsverbanden slim te laten doorstarten of
                richting te geven bij de start van nieuwe samenwerkingsverbanden. Dit om er voor te
                zorgen dat er maximaal waarde wordt gerealiseerd in ambitieuze
                samenwerkingsverbanden.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-navy-deep hover:text-orange"
          >
            {expanded ? "Lees minder" : "Lees meer"}
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-300 ${expanded ? "-rotate-90" : ""}`}
              aria-hidden
            />
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-20">
          <ul className="grid gap-6 md:grid-cols-2">
            {METINGEN.map((m) => (
              <li
                key={m.code}
                className="rounded-lg border border-hairline bg-white p-8 transition-colors hover:border-navy/30"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded bg-orange/10 px-2.5 py-1 font-mono text-xs font-semibold text-orange">
                    {m.code}
                  </span>
                  <span className="h-px flex-1 bg-hairline" aria-hidden />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold text-navy-deep">
                  {m.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-soft">{m.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-surface p-8">
            <p className="max-w-xl text-base text-navy-deep">
              Welke meting past bij uw organisatie en opgave? Wij adviseren u graag in een
              vrijblijvende kennismaking.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange/90"
            >
              Plan een kennismaking
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </SiteShell>
  );
}
