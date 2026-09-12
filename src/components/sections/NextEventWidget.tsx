import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarClock, Clock, MapPin } from "lucide-react";
import { PLATFORM_EVENTS } from "@/content/site";
import { EXECUTIVE_BIJEENKOMSTEN } from "@/content/blog/programma-executive-platform-ketensamenwerking-2026";
import { HP_BIJEENKOMSTEN } from "@/content/blog/programma-high-potential-platform-ketensamenwerking-2026";

type Session = (typeof PLATFORM_EVENTS)[number];

function getDetail(session: Session) {
  const bron =
    session.platform === "Executive Platform" ? EXECUTIVE_BIJEENKOMSTEN : HP_BIJEENKOMSTEN;
  return bron.find((b) => b.nummer === session.nummer);
}

function EventSessionCard({
  session,
  expanded,
  onToggle,
}: {
  session: Session;
  expanded: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const detail = getDetail(session);

  // A ResizeObserver (rather than a one-shot scrollHeight read) keeps the
  // measured height in sync with the sm:columns-2 schedule layout, whose
  // column-balance can still be settling right after expand.
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setContentHeight(el.scrollHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const maxHeight = expanded ? `${contentHeight + 120}px` : "0px";

  return (
    <div className="rounded-md border border-hairline bg-white p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-navy">
          {session.platform}
        </span>
        <span className="text-xs text-slate-soft">{session.time}</span>
      </div>
      <p className="mt-2 text-sm font-semibold leading-snug text-navy-deep">{session.thema}</p>
      <p className="mt-1 text-xs text-slate-soft">{session.spreker}</p>

      <div
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight }}
      >
        <div ref={contentRef}>
          {detail && (
            <div className="mt-4 space-y-3 border-t border-hairline pt-4">
              {detail.paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-soft">
                  {p}
                </p>
              ))}
              {detail.schedule && (
                <div className="border-t border-hairline pt-4 text-sm text-slate-soft sm:columns-2 sm:gap-x-6">
                  {detail.schedule.map((s) => (
                    <div key={s.time} className="mb-2 flex items-start gap-2 break-inside-avoid">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
                      <span>
                        <span className="font-semibold text-navy-deep">{s.time}</span> {s.activity}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <a
                href="https://platform-ketensamenwerking.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-orange px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-orange/90"
              >
                Bekijk het volledige platform
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-orange hover:text-navy-deep"
      >
        {expanded ? "Minder info" : "Meer info"}
        <ArrowRight
          className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? "-rotate-90" : ""}`}
          aria-hidden
        />
      </button>
    </div>
  );
}

export function NextEventWidget() {
  const [expanded, setExpanded] = useState(false);
  const now = Date.now();
  const upcoming = PLATFORM_EVENTS.filter((e) => new Date(e.endsAt).getTime() > now).sort(
    (a, b) => new Date(a.endsAt).getTime() - new Date(b.endsAt).getTime(),
  );

  if (upcoming.length === 0) return null;

  const nextDate = upcoming[0].dateLabel;
  const sessions = upcoming.filter((e) => e.dateLabel === nextDate);

  return (
    <section id="eerstvolgende-bijeenkomst" className="relative border-y border-hairline bg-white">
      <div className="container-x py-6">
        <div className="flex flex-col gap-5 rounded-lg border border-hairline bg-surface p-6 md:flex-row md:items-start">
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
              <EventSessionCard
                key={`${s.platform}-${s.nummer}`}
                session={s}
                expanded={expanded}
                onToggle={() => setExpanded((v) => !v)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
