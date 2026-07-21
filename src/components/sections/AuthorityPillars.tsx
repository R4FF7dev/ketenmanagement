import { Link } from "@tanstack/react-router";
import { AUTHORITY } from "@/content/site";
import { ArrowRight } from "lucide-react";
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
              Waarom wij?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-soft">
              Een zeldzame combinatie van wetenschappelijke diepgang en praktische ervaring met
              ketensamenwerking in complexe bouw- en vastgoedprogramma's.
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange/90"
            >
              Plan een kennismaking
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ol className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2">
              {AUTHORITY.map((point) => (
                <li key={point} className="bg-navy p-6 text-white">
                  <div className="font-display text-2xl font-semibold text-orange">+</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{point}</p>
                </li>
              ))}
              <li className="bg-navy p-6 text-white">
                <div className="font-display text-2xl font-semibold text-orange">+</div>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Onafhankelijk, integer en gericht op duurzame, meetbare resultaten in de keten.
                </p>
              </li>
            </div>
          </ol>
        </div>

        <div className="mt-14 border-t border-hairline pt-14">
          <h3 className="font-display text-xl font-semibold text-navy-deep">
            Onze laatste updates op LinkedIn
          </h3>
          <div className="mt-6">
            <LinkedInWidgetEmbed compact />
          </div>
        </div>
      </div>
    </section>
  );
}
