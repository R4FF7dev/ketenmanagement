import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";

export function ServicesGrid() {
  return (
    <section className="bg-surface">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel number="02">Diensten</SectionLabel>
            <h2 className="heading-rule mt-5 font-display text-3xl font-semibold md:text-4xl">
              Diensten voor betere ketensamenwerking
            </h2>
          </div>
          <p className="text-base leading-relaxed text-slate-soft md:col-span-7 md:pt-12">
            Van analyse en strategie tot implementatie, ketenregie en dashboarding. Wij ondersteunen
            organisaties bij het professioneel inrichten, meten en verbeteren van samenwerkingen in
            complexe ketens.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.slug}
                className="group relative bg-white p-8 transition-colors hover:bg-surface"
              >
                <span
                  className="absolute inset-y-0 left-0 w-0.5 bg-orange opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy/5 text-navy transition-colors group-hover:bg-orange/10 group-hover:text-orange">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-navy-deep">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-soft">{s.short}</p>
                <Link
                  to="/diensten"
                  hash={s.slug}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-orange"
                >
                  Lees meer
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
