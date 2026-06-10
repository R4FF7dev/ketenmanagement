import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { AuthorityPillars } from "@/components/sections/AuthorityPillars";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MetingenBand } from "@/components/sections/MetingenBand";
import { KnowledgeTeasers } from "@/components/sections/KnowledgeTeasers";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { ContactCta } from "@/components/sections/ContactCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ketenmanagement Interim & Advies — Expert ketensamenwerking" },
      {
        name: "description",
        content:
          "dr.ing. Marcel Noordhuis helpt bouw, vastgoed, corporaties en gemeenten om ketensamenwerking meetbaar, bestuurbaar en resultaatgericht te maken.",
      },
      { property: "og:title", content: "Ketenmanagement Interim & Advies" },
      {
        property: "og:description",
        content: "Van analyse naar succesvolle implementatie van ketensamenwerking.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <AuthorityPillars />
      <ServicesGrid />
      <MetingenBand />
      <KnowledgeTeasers />
      <SectorsGrid />
      <ContactCta />
    </SiteShell>
  );
}
