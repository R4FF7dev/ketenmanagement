import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { SITE } from "@/content/site";
import cityImage from "@/assets/1.Featureimage.jpg";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="blueprint-bg absolute inset-0 opacity-25" aria-hidden />
      <div
        className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-orange/20 to-transparent"
        aria-hidden
      />
      <div className="container-x relative py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="section-label text-orange">
              <span>Kennismaking</span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-white md:text-5xl">
              Wilt u weten waar uw ketensamenwerking beter kan?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              Plan een vrijblijvende kennismaking met ons in en ontdek hoe wij u kunnen helpen uw
              keten(s) door te lichten, knelpunten bloot te leggen en mee te denken (en te doen) bij
              het oplossen van die knelpunten. Niet alleen op de harde kant maar zeker ook op de
              zachte kant, want uiteindelijk moet een duidelijke koers en implementatieplan in
              combinatie met de juiste sturing en teamcoaching u helpen de goede dingen te doen en
              de dingen goed te doen!
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
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-lg border border-white/10 lg:ml-auto">
              <img
                src={cityImage}
                alt="Wolkenkrabbers gezien vanaf de straat"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
