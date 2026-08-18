import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/Marcel.png";

export function Hero() {
  const [expanded, setExpanded] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const [moreHeight, setMoreHeight] = useState("0px");

  useEffect(() => {
    if (!moreRef.current) return;
    setMoreHeight(expanded ? `${moreRef.current.scrollHeight}px` : "0px");
  }, [expanded]);

  return (
    <section className="relative bg-surface">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="ambient-glow-orange absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full"
          aria-hidden
        />
        <div
          className="ambient-glow-navy absolute -bottom-40 -left-20 h-[480px] w-[480px] rounded-full"
          aria-hidden
        />
        <div className="blueprint-bg blueprint-drift absolute inset-0 opacity-50" aria-hidden />
      </div>
      <div className="container-x relative grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="lg:col-span-7">
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-navy-deep md:text-5xl lg:text-6xl">
            Ketensamenwerking van analyse naar succesvolle implementatie.
          </h1>
          <div className="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-slate-soft">
            <p>
              Wij ondersteunen corporaties, bouwers en installateurs op interim of
              projectbasis bij de implementatie van Ketensamenwerking/RGS zowel binnen de eigen
              organisatie alsook in samenwerking met ketenpartners. Het implementeren van
              Ketensamenwerking en RGS is geen sinecure. Het vergt kennis, inzicht,
              doorzettingsvermogen, koersvastheid en een plan.
            </p>
            <div
              className="overflow-hidden transition-[height] duration-500 ease-in-out"
              style={{ height: moreHeight }}
            >
              <div ref={moreRef} className="space-y-4 pt-4">
                <p>
                  Een plan dat wij graag samen met u en uw team ontwikkelen en implementeren tot dat
                  de beoogde resultaten worden bereikt. Hoe we dat doen en welke (deel)diensten we
                  hierbij kunnen leveren leggen wij u op de rest van deze website graag uit.
                </p>
                <p>
                  Ik zou het mooi vinden als ik of mijn collega&rsquo;s u hierbij van dienst mogen
                  zijn,
                </p>
                <p>
                  Groet,
                  <br />
                  dr.ing. Marcel Noordhuis
                </p>
                <p className="text-base text-slate-soft/80">
                  Interim I Advies I Kwartiermaker
                  <br />
                  email:{" "}
                  <a
                    href="mailto:m.noordhuis@ketenmanagement.com"
                    className="underline hover:text-navy"
                  >
                    m.noordhuis@ketenmanagement.com
                  </a>
                  <br />
                  mobiel:{" "}
                  <a href="tel:0614460880" className="underline hover:text-navy">
                    06 - 144 60 880
                  </a>
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-navy-deep hover:text-orange"
            >
              {expanded ? "Lees minder" : "Lees meer"}
              <ArrowRight
                className={`h-4 w-4 transition-transform duration-300 ${expanded ? "-rotate-90" : ""}`}
                aria-hidden
              />
            </button>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange/90"
            >
              Plan een kennismaking
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/diensten"
              className="inline-flex items-center gap-2 rounded-md border border-navy/20 bg-white px-5 py-3 text-sm font-semibold text-navy-deep transition-colors hover:border-navy"
            >
              Bekijk diensten
            </Link>
            <Link
              to="/publicaties"
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-navy-deep underline decoration-orange decoration-2 underline-offset-[6px] hover:decoration-navy"
            >
              Lees publicaties
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="shine-border-orange relative aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src={heroImage}
              alt="dr.ing. Marcel Noordhuis"
              width={617}
              height={638}
              className="h-full w-full object-cover opacity-95"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-md border border-white/15 bg-navy-deep/85 p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
                <div>
                  <div className="text-sm font-semibold text-white">
                    Ketenmanagement Interim &amp; Advies
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">
                    Onafhankelijk team met wetenschappelijke diepgang. Wij ondersteunen corporaties,
                    bouwers en installateurs bij ketensamenwerking.
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-white/70">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange" aria-hidden />
                    Wetenschappelijk én praktisch onderbouwd
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute -bottom-4 -right-4 -z-10 hidden h-40 w-40 rounded-md bg-orange/15 lg:block"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
