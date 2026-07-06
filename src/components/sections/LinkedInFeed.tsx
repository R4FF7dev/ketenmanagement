import { SectionLabel } from "@/components/ui/section-label";
import { LinkedInButton } from "@/components/ui/linkedin-button";
import { SOCIABLEKIT_LINKEDIN_WIDGET_ID } from "@/content/site";

// SociableKIT's documented pattern across their widget line is a
// `sk-ww-{widget-type}` container div + `{widget-type}/widget.js` script,
// both keyed by data-embed-id. TODO: confirm the exact class name
// ("sk-ww-linkedin-profile-posts") against the real snippet SociableKIT
// generates once Marcel completes setup — adjust if it differs.
const WIDGET_TYPE = "linkedin-profile-posts";
const WIDGET_CLASS = `sk-ww-${WIDGET_TYPE}`;

export const linkedInWidgetScriptSrc = `https://widgets.sociablekit.com/${WIDGET_TYPE}/widget.js`;
export const isLinkedInWidgetConfigured =
  SOCIABLEKIT_LINKEDIN_WIDGET_ID !== "PLACEHOLDER_WIDGET_ID";

export function LinkedInWidgetEmbed() {
  return isLinkedInWidgetConfigured ? (
    <div className={WIDGET_CLASS} data-embed-id={SOCIABLEKIT_LINKEDIN_WIDGET_ID} />
  ) : (
    <div className="rounded-lg border border-dashed border-hairline bg-white p-10 text-center text-sm text-slate-soft">
      LinkedIn-feed wordt binnenkort toegevoegd.
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
              Laatste updates van Marcel op LinkedIn
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-soft">
              Volg de laatste artikelen, inzichten en posts van Marcel rechtstreeks vanaf LinkedIn.
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
