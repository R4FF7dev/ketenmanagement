import { SECTORS } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";

export function SectorsGrid() {
  return (
    <section className="bg-surface">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Opdrachtgevers</SectionLabel>
            <h2 className="heading-rule mt-5 font-display text-3xl font-semibold md:text-4xl">
              Voor wie werken wij?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-soft">
              Organisaties die in complexe ketens samenwerken aan grote maatschappelijke en
              bouwopgaven. Onafhankelijk en sectoroverstijgend.
            </p>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {SECTORS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="flex items-center gap-3 bg-white p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy/5 text-navy">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-navy-deep">{s.title}</span>
                </li>
              );
            })}
            <li className="flex items-center justify-center gap-3 bg-navy p-5 text-center text-xs uppercase tracking-[0.18em] text-white/70">
              + uw organisatie
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
