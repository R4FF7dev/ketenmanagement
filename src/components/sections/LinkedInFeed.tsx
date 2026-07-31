import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/section-label";
import { LinkedInButton } from "@/components/ui/linkedin-button";
import { SOCIABLEKIT_LINKEDIN_WIDGET_ID } from "@/content/site";

const WIDGET_TIMEOUT_MS = 8000;

// Confirmed against the real embed snippet from the SociableKIT dashboard.
// Note the container class is singular ("profile-post") while the script
// path is plural ("profile-posts") — SociableKIT isn't consistent here.
const WIDGET_CLASS = "sk-ww-linkedin-profile-post";

export const linkedInWidgetScriptSrc =
  "https://widgets.sociablekit.com/linkedin-profile-posts/widget.js";
export const isLinkedInWidgetConfigured =
  SOCIABLEKIT_LINKEDIN_WIDGET_ID !== "PLACEHOLDER_WIDGET_ID";

// SociableKIT's widget.js scans the DOM once at execution time for elements
// with WIDGET_CLASS and has no MutationObserver/re-init API. Loading it via
// the router's head() scripts (dedup'd by src, injected once per document
// lifetime) meant: (a) on cold loads the router's hydration-driven re-inject
// races the widget div's readiness, and (b) client-side navigation between
// pages that each mount a widget div never re-triggered a scan for the new
// div, since the script tag from the previous page was already present. So
// this loads a fresh <script> on every mount instead, deliberately skipping
// any src-based dedup.
function useLinkedInWidgetScript() {
  useEffect(() => {
    if (!isLinkedInWidgetConfigured) return;

    const script = document.createElement("script");
    script.src = linkedInWidgetScriptSrc;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);
}

// SociableKIT's CDN occasionally becomes slow or unresponsive (observed
// connect times of 7-10s+ vs. <1s for other Cloudflare-fronted hosts), which
// leaves widget.js never executing and the container permanently empty. This
// watches for the script actually injecting anything and, if nothing shows
// up in time, swaps in a plain link so the section doesn't look broken.
function useLinkedInWidgetTimeout(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (!isLinkedInWidgetConfigured || !containerRef.current) return;

    const observer = new MutationObserver(() => {
      if (containerRef.current && containerRef.current.children.length > 0) {
        setTimedOut(false);
        cleanup();
      }
    });
    observer.observe(containerRef.current, { childList: true });
    const timer = setTimeout(() => setTimedOut(true), WIDGET_TIMEOUT_MS);

    function cleanup() {
      observer.disconnect();
      clearTimeout(timer);
    }
    return cleanup;
  }, [containerRef]);

  return timedOut;
}

export function LinkedInWidgetEmbed({ compact = false }: { compact?: boolean }) {
  useLinkedInWidgetScript();
  const containerRef = useRef<HTMLDivElement>(null);
  const timedOut = useLinkedInWidgetTimeout(containerRef);

  if (!isLinkedInWidgetConfigured) {
    return (
      <div className="rounded-lg border border-dashed border-hairline bg-white p-10 text-center text-sm text-slate-soft">
        LinkedIn-feed wordt binnenkort toegevoegd.
      </div>
    );
  }

  const widget = (
    <div>
      <div
        ref={containerRef}
        className={WIDGET_CLASS}
        data-embed-id={SOCIABLEKIT_LINKEDIN_WIDGET_ID}
        suppressHydrationWarning
      />
      {timedOut && (
        <div className="rounded-lg border border-dashed border-hairline bg-white p-10 text-center text-sm text-slate-soft">
          De LinkedIn-feed laadt op dit moment niet.
          <div className="mt-4 flex justify-center">
            <LinkedInButton variant="outline" />
          </div>
        </div>
      )}
    </div>
  );

  if (!compact) return widget;

  return (
    <div>
      {/* Mobile stacks posts in a single column (taller per post), so it
          needs much more height than desktop's multi-column grid to still
          show roughly the same number of posts (~5-6). */}
      <div className="widget-fade-white max-h-[1900px] overflow-hidden md:max-h-[820px]">
        {widget}
      </div>
    </div>
  );
}

export function LinkedInFeed() {
  return (
    <section className="border-t border-hairline bg-surface">
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>LinkedIn</SectionLabel>
            <h2 className="heading-rule mt-5 font-display text-3xl font-semibold md:text-4xl">
              Onze laatste updates op LinkedIn
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-soft">
              Volg onze laatste artikelen, inzichten en posts rechtstreeks vanaf LinkedIn.
            </p>
          </div>
          <LinkedInButton variant="solid" />
        </div>

        <div className="mt-14">
          <LinkedInWidgetEmbed />
        </div>
      </div>
    </section>
  );
}
