import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Globe, BookOpen } from "lucide-react";
import { SITE, NAV } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy-deep text-white/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div>
          <div className="font-display text-lg font-semibold text-white">
            Ketenmanagement
          </div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
            Interim &amp; Advies
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            Analyse, strategie en ketenregie voor complexe samenwerkingen in
            bouw, vastgoed, onderhoud en publieke opgaven.
          </p>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
            Volg Marcel op LinkedIn
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Diensten
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {["Ketenanalyse", "Strategie & inrichting", "Partnerselectie", "Ketenregie & interim", "Dashboarding", "Inspiratiesessies"].map(
              (s) => (
                <li key={s}>
                  <Link to="/diensten" className="text-white/65 hover:text-white">
                    {s}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Navigatie
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/65 hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li className="text-white">{SITE.person}</li>
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" aria-hidden /> {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Globe className="h-4 w-4" aria-hidden /> ketenmanagement.com
              </a>
            </li>
            <li>
              <a href={SITE.blog} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <BookOpen className="h-4 w-4" aria-hidden /> ketensamenwerking.blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {SITE.name}. Alle rechten voorbehouden.</span>
          <span>dr.ing. Marcel Noordhuis · KvK-geregistreerd</span>
        </div>
      </div>
    </footer>
  );
}
