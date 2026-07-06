import { AUTHORITY, SITE } from "@/content/site";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { LinkedInWidgetEmbed } from "@/components/sections/LinkedInFeed";

export function AuthorityPillars() {
  return (
    <section className="border-t border-hairline bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel number="01">Autoriteit</SectionLabel>
            <h2 className="heading-rule mt-5 font-display text-3xl font-semibold md:text-4xl">
              Waarom Marcel Noordhuis?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-soft">
              Een zeldzame combinatie van wetenschappelijke diepgang en
              praktische ervaring met ketensamenwerking in complexe bouw- en
              vastgoedprogramma's.
            </p>

            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 block rounded-lg border border-hairline bg-surface p-6 transition-colors hover:border-navy/40"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#0A66C2] text-white">
                  <Linkedin className="h-5 w-5" aria-hidden />
                </span>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-navy-deep">
                    Volg Marcel op LinkedIn
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-soft">
                    Inzichten over ketensamenwerking, samenwerking in de bouw
                    en succesvolle implementatie van ketenprogramma's.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-orange">
                    Bekijk LinkedIn-profiel
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </div>
            </a>
          </div>

          <ol className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2">
              {AUTHORITY.map((point, i) => (
                <li
                  key={point}
                  className="bg-white p-6 transition-colors hover:bg-surface"
                >
                  <div className="font-display text-2xl font-semibold text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-navy-deep">
                    {point}
                  </p>
                </li>
              ))}
              <li className="bg-navy p-6 text-white">
                <div className="font-display text-2xl font-semibold text-orange">+</div>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Onafhankelijk, integer en gericht op duurzame, meetbare
                  resultaten in de keten.
                </p>
              </li>
            </div>
          </ol>
        </div>

        <div className="mt-14 border-t border-hairline pt-14">
          <h3 className="font-display text-xl font-semibold text-navy-deep">
            Laatste updates van Marcel op LinkedIn
          </h3>
          <div className="mt-6">
            <LinkedInWidgetEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
