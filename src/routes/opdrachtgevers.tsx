import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { ContactCta } from "@/components/sections/ContactCta";

export const Route = createFileRoute("/opdrachtgevers")({
  head: () => ({
    meta: [
      { title: "Opdrachtgevers — Ketensamenwerking" },
      {
        name: "description",
        content:
          "Marcel werkt voor woningcorporaties, bouwers, installateurs, vastgoed- en onderhoudsorganisaties aan complexe ketensamenwerking.",
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
      <SectorsGrid
        as="h1"
        description="Wij adviseren toonaangevende organisaties die in complexe ketens werken aan grote bouw-, vastgoed- en maatschappelijke opgaven — van strategische vraagstukken op directieniveau tot ketenregie in de uitvoering."
      />

      <ContactCta />
    </SiteShell>
  );
}
