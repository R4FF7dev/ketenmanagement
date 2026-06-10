import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionLabel } from "@/components/ui/section-label";
import { ContactCta } from "@/components/sections/ContactCta";
import { SERVICES } from "@/content/site";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten — Ketenmanagement Interim & Advies" },
      {
        name: "description",
        content:
          "Ketenanalyse, strategie, partnerselectie, ketenregie, dashboarding en inspiratiesessies voor betere ketensamenwerking.",
      },
      { property: "og:title", content: "Diensten — Ketenmanagement" },
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
          <SectionLabel number="01">Diensten</SectionLabel>
          <h1 className="heading-rule mt-5 font-display text-4xl font-semibold text-navy-deep md:text-5xl">
            Diensten voor betere ketensamenwerking
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-soft">
            Van analyse en strategie tot implementatie, ketenregie en
            dashboarding. Marcel ondersteunt organisaties bij het professioneel
            inrichten, meten en verbeteren van samenwerkingen in complexe
            ketens.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-20">
          <div className="space-y-px overflow-hidden rounded-lg border border-hairline bg-hairline">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.slug}
                  id={s.slug}
                  className="grid gap-6 bg-white p-8 scroll-mt-24 md:grid-cols-12 md:p-10"
                >
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy/5 text-navy">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="font-mono text-xs text-orange">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="font-display text-2xl font-semibold text-navy-deep">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-soft">
                      {s.short}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCta />
    </SiteShell>
  );
}
