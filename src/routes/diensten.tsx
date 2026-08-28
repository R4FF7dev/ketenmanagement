import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionLabel } from "@/components/ui/section-label";
import { ContactCta } from "@/components/sections/ContactCta";
import { SERVICES } from "@/content/site";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten — Ketensamenwerking Interim & Advies" },
      {
        name: "description",
        content:
          "Ketenanalyse, strategie, partnerselectie, ketenregie, dashboarding en inspiratiesessies voor betere ketensamenwerking.",
      },
      { property: "og:title", content: "Diensten — Ketensamenwerking" },
      {
        property: "og:description",
        content: "Diensten voor analyse, strategie, ketenregie en metingen.",
      },
      { property: "og:url", content: "/diensten" },
    ],
    links: [{ rel: "canonical", href: "/diensten" }],
  }),
  component: DienstenPage,
});

function DienstenPage() {
  return (
    <SiteShell>
      <section className="border-b border-hairline bg-surface">
        <div className="container-x py-16 md:py-24">
          <SectionLabel>Diensten</SectionLabel>
          <h1 className="heading-rule mt-5 font-display text-4xl font-semibold text-navy-deep md:text-5xl">
            Diensten voor betere ketensamenwerking
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-soft">
            Van analyse tot advies, van implementatieplan tot realisatie daarvan, wij ondersteunen
            organisaties bij het professioneel inrichten, aanjagen, doorlichten van samenwerkingen
            in complexe ketens. Onderstaand een indruk van de (deel)diensten die wij kunnen leveren.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-20">
          <ul className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.slug} id={s.slug} className="scroll-mt-24 bg-white p-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy/5 text-navy">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-mono text-xs text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 min-h-14 font-display text-lg font-semibold text-navy-deep">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-soft">{s.short}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ContactCta />
    </SiteShell>
  );
}
