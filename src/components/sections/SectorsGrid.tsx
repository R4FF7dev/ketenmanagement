import { useRef } from "react";
import { SECTORS, CLIENT_LOGOS } from "@/content/site";
import { SectionLabel } from "@/components/ui/section-label";

export function SectorsGrid() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Changing animation-duration on hover restarts/jumps the CSS animation's
  // timing calculation. Setting playbackRate on the running animation via
  // the Web Animations API instead slows it down in place, with no jump.
  const setSpeed = (rate: number) => {
    for (const animation of trackRef.current?.getAnimations() ?? []) {
      animation.playbackRate = rate;
    }
  };

  return (
    <section className="bg-surface">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel number="05">Opdrachtgevers</SectionLabel>
            <h2 className="heading-rule mt-5 font-display text-3xl font-semibold md:text-4xl">
              Voor wie werken wij?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-soft">
              Organisaties die in complexe ketens samenwerken aan grote maatschappelijke en
              bouwopgaven. Onafhankelijk en sectoroverstijgend.
            </p>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {SECTORS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="flex items-center gap-3 bg-white p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy/5 text-navy">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-navy-deep">{s.title}</span>
                </li>
              );
            })}
            <li className="flex items-center justify-center gap-3 bg-navy p-5 text-center text-xs uppercase tracking-[0.18em] text-white/70">
              + uw organisatie
            </li>
          </ul>
        </div>

        <div className="mt-12 overflow-hidden border-x border-hairline bg-white py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            ref={trackRef}
            className="animate-marquee flex w-max items-center gap-20"
            onMouseEnter={() => setSpeed(0.15)}
            onMouseLeave={() => setSpeed(1)}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-16 w-auto shrink-0 object-contain opacity-50 transition hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
