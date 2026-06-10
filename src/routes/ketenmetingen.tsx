import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionLabel } from "@/components/ui/section-label";
import { METINGEN } from "@/content/site";
import { ContactCta } from "@/components/sections/ContactCta";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/ketenmetingen")({
  head: () => ({
    meta: [
      { title: "Ketenmetingen — KMM, KSI, Kr8 van Zacht" },
      {
        name: "description",
        content:
          "Maak ketensamenwerking meetbaar met de KetenMaturityMeting, KetenSamenwerkingsIndex, Kr8 van Zacht en programmaevaluaties.",
      },
      { property: "og:title", content: "Ketenmetingen" },
      { property: "og:description", content: "Bewezen metingen voor ketensamenwerking." },
      { property: "og:url", content: "/ketenmetingen" },
    ],
    links: [{ rel: "canonical", href: "/ketenmetingen" }],
  }),
  component: KetenmetingenPage,
});

function KetenmetingenPage() {
  return (
    <SiteShell>
      <section className="border-b border-hairline bg-surface">
        <div className="container-x py-16 md:py-24">
          <SectionLabel number="01">Ketenmetingen</SectionLabel>
          <h1 className="heading-rule mt-5 font-display text-4xl font-semibold text-navy-deep md:text-5xl">
            Maak ketensamenwerking meetbaar
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-soft">
            Samenwerking wordt pas bestuurbaar wanneer ze zichtbaar en
            meetbaar is. Met bewezen instrumenten brengt Marcel de
            volwassenheid, kwaliteit en ontwikkeling van uw keten in kaart —
            als basis voor gericht verbeteren en sturen.
          </p>
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
                <p className="mt-3 text-base leading-relaxed text-slate-soft">
                  {m.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-surface p-8">
            <p className="max-w-xl text-base text-navy-deep">
              Welke meting past bij uw organisatie en opgave? Marcel adviseert
              u graag in een vrijblijvende kennismaking.
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
