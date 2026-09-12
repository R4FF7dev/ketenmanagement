import { SectionLabel } from "@/components/ui/section-label";
import { LinkedInButton } from "@/components/ui/linkedin-button";
import { SOCIABLEKIT_LINKEDIN_WIDGET_ID } from "@/content/site";

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

  const iframe = (
    <iframe
      src={`https://widgets.sociablekit.com/linkedin-page-posts/iframe/${SOCIABLEKIT_LINKEDIN_WIDGET_ID}`}
      title="LinkedIn posts"
      loading="lazy"
      width="100%"
      height="1000"
      frameBorder={0}
      scrolling="no"
      className="block w-full"
      style={{ overflow: "hidden" }}
    />
  );

  if (!compact) return iframe;

  return (
    <div className="widget-fade-white max-h-[1900px] overflow-hidden md:max-h-[820px]">
      {iframe}
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
