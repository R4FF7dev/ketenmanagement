import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionLabel } from "@/components/ui/section-label";
import { ContactCta } from "@/components/sections/ContactCta";
import { BLOG_POSTS } from "@/content/site";
import { ProgrammaExecutivePlatform2026 } from "@/content/blog/programma-executive-platform-ketensamenwerking-2026";
import { ImpactVanIncentivesystemenInDeBouw } from "@/content/blog/impact-van-incentivesystemen-in-de-bouw";
import { ProgrammaHighPotentialPlatform2026 } from "@/content/blog/programma-high-potential-platform-ketensamenwerking-2026";

const BLOG_CONTENT: Record<string, () => React.JSX.Element> = {
  "programma-executive-platform-ketensamenwerking-2026": ProgrammaExecutivePlatform2026,
  "impact-van-incentivesystemen-in-de-bouw": ImpactVanIncentivesystemenInDeBouw,
  "programma-high-potential-platform-ketensamenwerking-2026": ProgrammaHighPotentialPlatform2026,
};

export const Route = createFileRoute("/publicaties/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Ketensamenwerking Interim & Advies` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:url", content: `/publicaties/${loaderData.slug}` },
        ]
      : [],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const Content = BLOG_CONTENT[post.slug];

  return (
    <SiteShell>
      <section className="border-b border-hairline bg-surface">
        <div className="container-x py-16 md:py-24">
          <Link
            to="/publicaties"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-orange"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Terug naar publicaties
          </Link>
          <div className="mt-8">
            <SectionLabel>{post.category}</SectionLabel>
          </div>
          <h1 className="heading-rule mt-5 font-display text-3xl font-semibold text-navy-deep md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-10 aspect-[21/9] w-full overflow-hidden rounded-lg border border-hairline">
            <img
              src={post.cover}
              alt={post.title}
              width={940}
              height={627}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x max-w-3xl py-16 md:py-24">
          {Content ? (
            <Content />
          ) : (
            <p className="text-base text-slate-soft">Dit artikel wordt binnenkort toegevoegd.</p>
          )}
        </div>
      </section>

      <ContactCta />
    </SiteShell>
  );
}
