import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { SITE } from "@/content/site";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="blueprint-bg absolute inset-0 opacity-25" aria-hidden />
      <div
        className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-orange/20 to-transparent"
        aria-hidden
      />
      <div className="container-x relative py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="section-label text-orange">
            <span className="text-white/40">06</span>
            <span className="h-px w-6 bg-orange/70" aria-hidden />
            <span>Kennismaking</span>
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold text-white md:text-5xl">
            Wilt u weten waar uw ketensamenwerking beter kan?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Plan een kennismaking met ons en ontdek hoe analyse, structuur en ketenregie kunnen
            bijdragen aan betere samenwerking en betere projectresultaten.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange/90"
            >
              Plan een kennismaking
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:border-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Stuur een e-mail
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:border-white"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              Volg ons op LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
