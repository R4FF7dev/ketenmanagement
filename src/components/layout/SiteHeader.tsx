import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV, SITE } from "@/content/site";
import { LinkedInButton } from "@/components/ui/linkedin-button";
import { TopBar } from "./TopBar";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <TopBar />
      <div className="container-x flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-base font-semibold text-navy-deep md:text-lg">
            Ketenmanagement
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-soft">
            Interim &amp; Advies
          </span>
        </Link>

        <nav className="hidden lg:flex" aria-label="Hoofdnavigatie">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm font-medium text-ink/80 transition-colors hover:text-navy"
                  activeProps={{ className: "text-navy" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LinkedInButton variant="icon" label="LinkedIn" />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-orange px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange/90"
          >
            Plan een kennismaking
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden",
          open ? "block border-t border-hairline" : "hidden",
        )}
      >
        <nav className="container-x py-4" aria-label="Mobiele navigatie">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-hairline py-3 text-sm font-medium text-ink/80"
                  activeProps={{ className: "text-navy" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-orange px-4 py-3 text-sm font-semibold text-white"
            >
              Plan een kennismaking
            </Link>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-hairline px-4 py-3 text-sm font-medium text-navy"
            >
              Volg Marcel op LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
