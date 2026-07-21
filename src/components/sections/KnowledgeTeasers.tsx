import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS, SITE } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";

export function KnowledgeTeasers() {
  return (
    <section className="bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel number="04">Publicaties</SectionLabel>
            <h2 className="heading-rule mt-5 font-display text-3xl font-semibold md:text-4xl">
              Laatste inzichten over ketensamenwerking
            </h2>
          </div>
          <a
            href={SITE.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-orange"
          >
            Bekijk alle artikelen op het kennisblog
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <li
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-hairline bg-white transition-shadow hover:shadow-[0_12px_40px_-20px_rgba(11,31,58,0.25)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                <div className="blueprint-bg absolute inset-0 opacity-60" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-deep/70" aria-hidden />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  {p.category}
                </div>
                <div className="absolute bottom-5 right-5 text-white/30 font-display text-5xl font-semibold" aria-hidden>
                  {p.category.slice(0, 1)}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-navy-deep">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft">
                  {p.excerpt}
                </p>
                <a
                  href={SITE.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-navy/20 px-4 py-2 text-sm font-semibold text-navy-deep transition-colors hover:border-navy hover:bg-surface"
                >
                  Lees artikel
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
