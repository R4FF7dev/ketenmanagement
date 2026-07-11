import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/images.jpg";

export function Hero() {
  return (
    <section className="relative flow-root bg-surface">
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
        <div
          className="zip-line-h zip-anim-right"
          style={
            { top: "12%", "--zip-duration": "4.6s", "--zip-delay": "-0.4s" } as React.CSSProperties
          }
        />
        <div
          className="zip-line-h zip-anim-left"
          style={
            {
              top: "34%",
              "--zip-duration": "6.1s",
              "--zip-delay": "-2.8s",
              "--zip-color": "var(--color-navy)",
            } as React.CSSProperties
          }
        />
        <div
          className="zip-line-h zip-anim-right"
          style={
            { top: "61%", "--zip-duration": "5.3s", "--zip-delay": "-4.1s" } as React.CSSProperties
          }
        />
        <div
          className="zip-line-h zip-anim-left"
          style={
            { top: "83%", "--zip-duration": "5.9s", "--zip-delay": "-1.5s" } as React.CSSProperties
          }
        />
        <div
          className="zip-line-v zip-anim-down"
          style={
            { left: "20%", "--zip-duration": "5.5s", "--zip-delay": "-1.1s" } as React.CSSProperties
          }
        />
        <div
          className="zip-line-v zip-anim-up"
          style={
            {
              left: "48%",
              "--zip-duration": "4.8s",
              "--zip-delay": "-3.4s",
              "--zip-color": "var(--color-navy)",
            } as React.CSSProperties
          }
        />
        <div
          className="zip-line-v zip-anim-down"
          style={
            { left: "72%", "--zip-duration": "6.4s", "--zip-delay": "-0.7s" } as React.CSSProperties
          }
        />
        <div
          className="zip-line-v zip-anim-up"
          style={
            { left: "90%", "--zip-duration": "5.1s", "--zip-delay": "-2.3s" } as React.CSSProperties
          }
        />
      </div>
      <div className="container-x relative grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="-mt-16 md:-mt-24 lg:col-span-7 lg:-mt-32">
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-navy-deep md:text-5xl lg:text-6xl">
            <span className="text-breathing-gradient">Ketensamenwerking</span> van analyse naar
            succesvolle implementatie.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-soft">
            Wij helpen corporaties, gemeenten, bouwers, installateurs en vastgoedorganisaties om
            complexe samenwerkingen meetbaar, bestuurbaar en resultaatgericht te maken.
          </p>
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
              to="/kennis"
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-navy-deep underline decoration-orange decoration-2 underline-offset-[6px] hover:decoration-navy"
            >
              Lees kennisartikelen
            </Link>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-hairline pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-soft">Promotie</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-navy-deep">dr.ing.</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-soft">Sectoren</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-navy-deep">7+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-slate-soft">Focus</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-navy-deep">Ketenregie</dd>
            </div>
          </dl>
        </div>

        <div className="relative -mt-32 md:-mt-44 lg:col-span-5 lg:-mt-56">
          <div className="shine-border-orange group relative aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src={heroImage}
              alt="Moderne kantoortorens in een Nederlandse stad"
              width={393}
              height={508}
              className="h-full w-full object-cover opacity-95 transition-transform duration-500 ease-out group-hover:rotate-1 group-hover:scale-105"
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
                    gemeenten, bouwers en installateurs bij ketensamenwerking.
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
