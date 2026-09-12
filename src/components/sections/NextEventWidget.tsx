import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarClock, MapPin } from "lucide-react";
import { PLATFORM_EVENTS } from "@/content/site";

export function NextEventWidget() {
  const now = Date.now();
  const upcoming = PLATFORM_EVENTS.filter((e) => new Date(e.endsAt).getTime() > now).sort(
    (a, b) => new Date(a.endsAt).getTime() - new Date(b.endsAt).getTime(),
  );

  if (upcoming.length === 0) return null;

  const nextDate = upcoming[0].dateLabel;
  const sessions = upcoming.filter((e) => e.dateLabel === nextDate);

  return (
    <section className="relative border-y border-hairline bg-white">
      <div className="container-x py-6">
        <div className="flex flex-col gap-5 rounded-lg border border-hairline bg-surface p-6 md:flex-row md:items-center">
          <div className="flex items-start gap-3 md:w-64 md:shrink-0">
            <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                Eerstvolgende bijeenkomst
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-navy-deep">
                {nextDate}
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-soft">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                Kasteel de Vanenburg, Putten
              </div>
            </div>
          </div>

          <div className="grid flex-1 gap-3 sm:grid-cols-2">
            {sessions.map((s) => (
              <div
                key={`${s.platform}-${s.nummer}`}
                className="rounded-md border border-hairline bg-white p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy">
                    {s.platform}
                  </span>
                  <span className="text-xs text-slate-soft">{s.time}</span>
                </div>
                <p className="mt-2 text-sm font-semibold leading-snug text-navy-deep">{s.thema}</p>
                <p className="mt-1 text-xs text-slate-soft">{s.spreker}</p>
                <Link
                  to="/publicaties/$slug"
                  params={{ slug: s.slug }}
                  hash={`bijeenkomst-${s.nummer}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-orange hover:text-navy-deep"
                >
                  Meer info
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
