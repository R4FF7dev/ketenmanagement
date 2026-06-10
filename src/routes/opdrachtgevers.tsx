import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionLabel } from "@/components/ui/section-label";

export const Route = createFileRoute("/opdrachtgevers")({
  head: () => ({
    meta: [
      { title: "Opdrachtgevers & Cases — Ketenmanagement" },
      {
        name: "description",
        content:
          "Marcel werkt voor woningcorporaties, gemeenten, bouwers, installateurs, vastgoed- en onderhoudsorganisaties aan complexe ketensamenwerking.",
      },
      { property: "og:title", content: "Opdrachtgevers & Cases" },
      { property: "og:description", content: "Sectoren en typen opdrachtgevers." },
      { property: "og:url", content: "/opdrachtgevers" },
    ],
    links: [{ rel: "canonical", href: "/opdrachtgevers" }],
  }),
  component: OpdrachtgeversPage,
});

function OpdrachtgeversPage() {
  return (
    <SiteShell>
      <section className="border-b border-hairline bg-surface">
        <div className="container-x py-16 md:py-24">
          <SectionLabel number="01">Opdrachtgevers</SectionLabel>
          <h1 className="heading-rule mt-5 font-display text-4xl font-semibold text-navy-deep md:text-5xl">
            Voor wie werkt Marcel?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-soft">
            Marcel adviseert toonaangevende organisaties die in complexe
            ketens werken aan grote bouw-, vastgoed- en maatschappelijke
            opgaven — van strategische vraagstukken op directieniveau tot
            ketenregie in de uitvoering.
          </p>
        </div>
      </section>

      <SectorsGrid />

      <section className="bg-white">
        <div className="container-x py-16">
          <div className="rounded-lg border border-hairline bg-surface p-8">
            <SectionLabel number="02">Cases</SectionLabel>
            <h2 className="mt-4 font-display text-2xl font-semibold text-navy-deep">
              Cases op aanvraag
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-soft">
              Vanwege de strategische en vertrouwelijke aard van veel trajecten
              worden cases en referenties uitsluitend op aanvraag en in overleg
              met opdrachtgevers gedeeld. Neem contact op voor een toelichting.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />
    </SiteShell>
  );
}
