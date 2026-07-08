import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { LinkedInButton } from "@/components/ui/linkedin-button";
import { SOCIABLEKIT_LINKEDIN_WIDGET_ID } from "@/content/site";

// Confirmed against the real embed snippet from the SociableKIT dashboard.
// Note the container class is singular ("profile-post") while the script
// path is plural ("profile-posts") — SociableKIT isn't consistent here.
const WIDGET_CLASS = "sk-ww-linkedin-profile-post";

export const linkedInWidgetScriptSrc =
  "https://widgets.sociablekit.com/linkedin-profile-posts/widget.js";
export const isLinkedInWidgetConfigured =
  SOCIABLEKIT_LINKEDIN_WIDGET_ID !== "PLACEHOLDER_WIDGET_ID";

export function LinkedInWidgetEmbed({ compact = false }: { compact?: boolean }) {
  if (!isLinkedInWidgetConfigured) {
    return (
      <div className="rounded-lg border border-dashed border-hairline bg-white p-10 text-center text-sm text-slate-soft">
        LinkedIn-feed wordt binnenkort toegevoegd.
      </div>
    );
  }

  const widget = (
    <div
      className={WIDGET_CLASS}
      data-embed-id={SOCIABLEKIT_LINKEDIN_WIDGET_ID}
      suppressHydrationWarning
    />
  );

  if (!compact) return widget;

  return (
    <div>
      <div className="widget-fade-white max-h-[420px] overflow-hidden">{widget}</div>
      <Link
        to="/kennis"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-orange"
      >
        Bekijk meer op LinkedIn
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}

export function LinkedInFeed() {
  return (
    <section className="border-t border-hairline bg-surface">
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel number="02">LinkedIn</SectionLabel>
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
