import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS, SITE } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";

export function KnowledgeTeasers() {
  return (
    <section className="bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Externe blogs</SectionLabel>
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
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-lg border border-hairline bg-white transition-shadow hover:shadow-[0_12px_40px_-20px_rgba(11,31,58,0.25)]"
            >
              <Link
                to="/publicaties/$slug"
                params={{ slug: p.slug }}
                className="relative block aspect-[16/9] overflow-hidden bg-navy"
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  width={940}
                  height={627}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent"
                  aria-hidden
                />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  {p.category}
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-navy-deep">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft">{p.excerpt}</p>
                <Link
                  to="/publicaties/$slug"
                  params={{ slug: p.slug }}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-navy/20 px-4 py-2 text-sm font-semibold text-navy-deep transition-colors hover:border-navy hover:bg-surface"
                >
                  Lees artikel
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
