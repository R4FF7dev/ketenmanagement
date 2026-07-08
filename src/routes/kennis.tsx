import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { KnowledgeTeasers } from "@/components/sections/KnowledgeTeasers";
import {
  LinkedInFeed,
  isLinkedInWidgetConfigured,
  linkedInWidgetScriptSrc,
} from "@/components/sections/LinkedInFeed";
import { ContactCta } from "@/components/sections/ContactCta";
import { SectionLabel } from "@/components/ui/section-label";
import { SITE } from "@/content/site";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/kennis")({
  head: () => ({
    meta: [
      { title: "Kennis & Publicaties — Ketensamenwerking" },
      {
        name: "description",
        content:
          "Artikelen, publicaties en inzichten over ketensamenwerking, samenwerking in de bouw en implementatie van ketenprogramma's.",
      },
      { property: "og:title", content: "Kennis & Publicaties" },
      { property: "og:description", content: "Inzichten over ketensamenwerking." },
      { property: "og:url", content: "/kennis" },
    ],
    links: [{ rel: "canonical", href: "/kennis" }],
    scripts: isLinkedInWidgetConfigured ? [{ src: linkedInWidgetScriptSrc, defer: true }] : [],
  }),
  component: KennisPage,
});

function KennisPage() {
  return (
    <SiteShell>
      <section className="border-b border-hairline bg-surface">
        <div className="container-x py-16 md:py-24">
          <SectionLabel number="01">Kennis &amp; Publicaties</SectionLabel>
          <h1 className="heading-rule mt-5 font-display text-4xl font-semibold text-navy-deep md:text-5xl">
            Inzichten over ketensamenwerking
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-soft">
            Wij delen regelmatig artikelen, onderzoeksinzichten en praktijkervaringen over
            ketensamenwerking in bouw, vastgoed en onderhoud. Een groeiend kennisplatform voor
            opdrachtgevers, bestuurders en professionals.
          </p>
          <a
            href={SITE.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-navy/20 bg-white px-5 py-3 text-sm font-semibold text-navy-deep hover:border-navy"
          >
            <BookOpen className="h-4 w-4" aria-hidden />
            Bezoek het kennisblog
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>

      <KnowledgeTeasers />
      <LinkedInFeed />
      <ContactCta />
    </SiteShell>
  );
}
