import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionLabel } from "@/components/ui/section-label";
import { LinkedInButton } from "@/components/ui/linkedin-button";
import { ContactCta } from "@/components/sections/ContactCta";
import urbanImage from "@/assets/hero-urban.jpg";
import marionImage from "@/assets/Marion.jpg";
import marcelImage from "@/assets/Marcel.jpg";
import egbertImage from "@/assets/Egbert.jpg";
import { Microscope, Users, Target, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Marion Muller",
    role: "Coach & trainer voor groei en verandering",
    image: marionImage,
    bio: "Marion is gespecialiseerd in de zachte kant van ketensamenwerking: gedrag, vertrouwen en communicatie. Zij begeleidt teams en professionals bij het herkennen en versterken van hun onderlinge samenwerking. Samen ontwikkelden wij de 'Kr8 van Zacht'-meting.",
  },
  {
    name: "dr.ing. Marcel Noordhuis",
    role: "Interim I Advies I Kwartiermaker",
    image: marcelImage,
    bio: "Marcel is gepromoveerd op ketensamenwerking in bouw en vastgoed en geldt als gezaghebbend specialist op dit vakgebied. Hij combineert wetenschappelijke diepgang met jarenlange praktijkervaring als interim ketenregisseur en adviseur.",
  },
  {
    name: "Egbert Kunst",
    role: "Expert RGS (Resultaatgericht Samenwerken)",
    image: egbertImage,
    bio: "Egbert is specialist in de theorie en praktijk van RGS. Als trainer, coach en interim ketenregisseur helpt hij organisaties de principes van RGS en ketensamenwerking te implementeren richting meetbare resultaten.",
  },
] as const;

const pillars = [
  {
    icon: Microscope,
    title: "Onderzoekend",
    body: "Analyse, data en feiten als basis voor verandering en sturing.",
  },
  {
    icon: Users,
    title: "Verbindend",
    body: "Werkt op directieniveau én met operationele teams in de keten.",
  },
  {
    icon: Target,
    title: "Resultaatgericht",
    body: "Focus op meetbare verbetering en duurzame implementatie.",
  },
];

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over Marcel Noordhuis — Ketensamenwerking Interim & Advies" },
      {
        name: "description",
        content:
          "dr.ing. Marcel Noordhuis: gepromoveerd specialist in ketensamenwerking voor bouw, vastgoed en corporaties.",
      },
      { property: "og:title", content: "Over Marcel Noordhuis" },
      { property: "og:description", content: "Gepromoveerd specialist in ketensamenwerking." },
      { property: "og:url", content: "/over-ons" },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: OverOns,
});

function OverOns() {
  return (
    <SiteShell>
      <section className="border-b border-hairline bg-surface">
        <div className="container-x py-20 md:py-24">
          <SectionLabel>Ons team</SectionLabel>
          <h2 className="heading-rule mt-5 font-display text-3xl font-semibold md:text-4xl">
            Samen sterker in ketensamenwerking
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-soft">
            Voor specifieke thema&rsquo;s werken wij samen met specialisten die de aanpak van
            ketensamenwerking en RGS verder verdiepen.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-hairline bg-white p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="mx-auto h-56 w-56 rounded-full object-cover object-top"
                />
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-deep">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-orange">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-soft">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-surface">
        <div className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel>Over ons</SectionLabel>
            <h1 className="heading-rule mt-6 font-display text-4xl font-semibold text-navy-deep md:text-5xl">
              Onderscheidend vermogen in ketensamenwerking en RGS
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-soft">
              Wat ons onderscheidt is de combinatie van wetenschappelijke diepgang en jarenlange
              praktijkervaring in complexe samenwerkingsverbanden. Waar advies vaak blijft steken in
              modellen en theorie, vertalen wij de principes van ketensamenwerking en RGS naar
              concrete stappen die binnen uw organisatie en in de samenwerking met ketenpartners
              daadwerkelijk werken.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-soft">
              Wij kijken daarbij niet alleen naar de harde kant van samenwerking, zoals sturing,
              meetbaarheid en resultaten, maar minstens zo veel naar de zachte kant: gedrag,
              vertrouwen en communicatie tussen mensen en teams. Die combinatie, onderbouwd met
              eigen meetinstrumenten, maakt het verschil tussen samenwerking die op papier goed
              klinkt en samenwerking die in de praktijk daadwerkelijk resultaat oplevert.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange/90"
              >
                Plan een kennismaking
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <LinkedInButton />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-hairline bg-navy">
              <img
                src={urbanImage}
                alt="Stedelijke skyline met bouwkranen en nieuwbouwappartementen"
                width={1920}
                height={1080}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-20 md:py-24">
          <SectionLabel>Aanpak &amp; expertise</SectionLabel>
          <h2 className="heading-rule mt-5 font-display text-3xl font-semibold md:text-4xl">
            Wetenschap én praktijk
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.title} className="bg-white p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy/5 text-navy">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-deep">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-soft">{p.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ContactCta />
    </SiteShell>
  );
}
