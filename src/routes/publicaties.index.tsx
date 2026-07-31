import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { KnowledgeTeasers } from "@/components/sections/KnowledgeTeasers";
import { OwnPublications } from "@/components/sections/OwnPublications";
import { LinkedInFeed } from "@/components/sections/LinkedInFeed";
import { ContactCta } from "@/components/sections/ContactCta";

export const Route = createFileRoute("/publicaties/")({
  head: () => ({
    meta: [
      { title: "Publicaties — Ketensamenwerking" },
      {
        name: "description",
        content:
          "Artikelen, publicaties en inzichten over ketensamenwerking, samenwerking in de bouw en implementatie van ketenprogramma's.",
      },
      { property: "og:title", content: "Publicaties" },
      { property: "og:description", content: "Inzichten over ketensamenwerking." },
      { property: "og:url", content: "/publicaties" },
    ],
    links: [{ rel: "canonical", href: "/publicaties" }],
  }),
  component: PublicatiesPage,
});

function PublicatiesPage() {
  return (
    <SiteShell>
      <OwnPublications />
      <KnowledgeTeasers />
      <LinkedInFeed />
      <ContactCta />
    </SiteShell>
  );
}
