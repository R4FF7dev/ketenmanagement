import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionLabel } from "@/components/ui/section-label";

export const Route = createFileRoute("/opdrachtgevers")({
  head: () => ({
    meta: [
      { title: "Opdrachtgevers — Ketenmanagement" },
      {
        name: "description",
        content:
          "Marcel werkt voor woningcorporaties, gemeenten, bouwers, installateurs, vastgoed- en onderhoudsorganisaties aan complexe ketensamenwerking.",
      },
      { property: "og:title", content: "Opdrachtgevers" },
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
          <SectionLabel>Opdrachtgevers</SectionLabel>
          <h1 className="heading-rule mt-5 font-display text-4xl font-semibold text-navy-deep md:text-5xl">
            Voor wie werken wij?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-soft">
            Wij adviseren toonaangevende organisaties die in complexe ketens werken aan grote bouw-,
            vastgoed- en maatschappelijke opgaven — van strategische vraagstukken op directieniveau
            tot ketenregie in de uitvoering.
          </p>
        </div>
      </section>

      <SectorsGrid />

      <ContactCta />
    </SiteShell>
  );
}
