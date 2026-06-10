import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionLabel } from "@/components/ui/section-label";
import { ContactForm } from "@/components/forms/ContactForm";
import { LinkedInButton } from "@/components/ui/linkedin-button";
import { SITE } from "@/content/site";
import { Mail, Globe, BookOpen, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ketenmanagement Interim & Advies" },
      {
        name: "description",
        content:
          "Plan een kennismaking met dr.ing. Marcel Noordhuis. Advies en ketenregie voor bouw, vastgoed, corporaties en gemeenten.",
      },
      { property: "og:title", content: "Contact — Marcel Noordhuis" },
      { property: "og:description", content: "Plan een kennismaking." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-hairline bg-surface">
        <div className="container-x py-16 md:py-24">
          <SectionLabel number="01">Contact</SectionLabel>
          <h1 className="heading-rule mt-5 font-display text-4xl font-semibold text-navy-deep md:text-5xl">
            Plan een kennismaking
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-soft">
            Vertel kort waar uw vraagstuk over gaat. Marcel neemt persoonlijk
            contact met u op voor een vrijblijvende kennismaking.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-lg border border-hairline bg-surface p-8">
              <h2 className="font-display text-xl font-semibold text-navy-deep">
                Contactgegevens
              </h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">Naam</dt>
                  <dd className="mt-1 text-navy-deep">{SITE.person}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">Bedrijf</dt>
                  <dd className="mt-1 text-navy-deep">{SITE.name}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">E-mail</dt>
                  <dd className="mt-1">
                    <a className="inline-flex items-center gap-2 text-navy hover:text-orange" href={`mailto:${SITE.email}`}>
                      <Mail className="h-4 w-4" aria-hidden /> {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">Website</dt>
                  <dd className="mt-1">
                    <a className="inline-flex items-center gap-2 text-navy hover:text-orange" href={SITE.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" aria-hidden /> ketenmanagement.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">Kennisblog</dt>
                  <dd className="mt-1">
                    <a className="inline-flex items-center gap-2 text-navy hover:text-orange" href={SITE.blog} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="h-4 w-4" aria-hidden /> ketensamenwerking.blog
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">Regio</dt>
                  <dd className="mt-1 inline-flex items-center gap-2 text-navy-deep">
                    <MapPin className="h-4 w-4 text-orange" aria-hidden /> Nederland
                  </dd>
                </div>
              </dl>
              <div className="mt-8">
                <LinkedInButton />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
