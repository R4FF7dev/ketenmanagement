import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/content/site";
import { TopBar } from "./TopBar";
import { cn } from "@/lib/utils";
import logo from "@/assets/titel website.avif";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <TopBar />
      <div className="flex h-20 w-full items-center justify-between gap-4 px-5 md:h-24 md:px-8">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Ketenmanagement Interim & Advies" className="h-7 w-auto" />
        </Link>

        <nav className="hidden lg:flex" aria-label="Hoofdnavigatie">
          <ul className="flex items-center gap-5">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="whitespace-nowrap text-sm font-medium text-ink/80 transition-colors hover:text-navy"
                  activeProps={{ className: "text-navy" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

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

      <div className={cn("lg:hidden", open ? "block border-t border-hairline" : "hidden")}>
        <nav className="container-x py-4" aria-label="Mobiele navigatie">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-hairline py-3 text-sm font-medium text-ink/80"
                  activeProps={{ className: "text-navy" }}
                  activeOptions={{ exact: item.to === "/" }}
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
              Volg ons op LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
