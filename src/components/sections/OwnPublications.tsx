import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";

const PUBLICATIONS = [
  {
    title: "Ketensamenwerkingsorganisatiemodellen",
    date: "Oktober 2012",
    body: (
      <>
        <p>
          Faalkosten maken naar schatting circa 20 procent van de totale bouwkosten uit. Een groot
          gedeelte hiervan zijn structurele (te voorkomen) kosten.
        </p>
        <p>
          Door de onzekere (financiële) tijd wordt de druk op kostenverlaging en procesverbetering
          steeds groter om onderscheidend te zijn in de markt. Veel partijen hanteren in reactie
          hierop vooral een interne focus. Ze zoeken de oplossing niet op de plek waar juist de
          meeste verspilling is weg te nemen: extern en in afstemming en samenwerking met andere
          partijen.
        </p>
        <p>
          Op uiteenlopende wijze hebben organisaties binnen en buiten de bouw de handen
          ineengeslagen om &lsquo;samen&rsquo; meer waarde te creëren dan &lsquo;alleen&rsquo;
          mogelijk was. In bijgaande{" "}
          <a
            href="https://ketensamenwerking.blog/wp-content/uploads/2022/09/Artikel-Ketensamenwerking-Organisatie-Modellen-MN-2019.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-2 hover:text-orange"
          >
            artikel
          </a>{" "}
          beschrijven we de meest voorkomende ketensamenwerkingsorganisatiemodellen.
        </p>
      </>
    ),
    author: "dr. Marcel Noordhuis",
  },
  {
    title: "Proefschrift “De waarde van Ketensamenwerking”",
    date: "April 2015",
    body: (
      <>
        <p>
          In April 2015 is dr.ing. Marcel Noordhuis gepromoveerd aan Nyenrode Business Universiteit
          op zijn onderzoek naar de waarde van ketensamenwerking bij het uitvoeren van nieuwbouw-,
          onderhoud- en renovatieprojecten (woningen).
        </p>
        <p>
          Hiernavolgend de{" "}
          <a
            href="https://www.nyenrode.nl/docs/default-source/faculty/publicaties/dissertation_marcel-noordhuis.pdf?sfvrsn=879ec414_2"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-2 hover:text-orange"
          >
            link
          </a>{" "}
          naar een samenvatting van de resultaten van zijn onderzoek. De volledige versie van zijn
          proefschrift is via deze{" "}
          <a
            href="https://www.nyenrode.nl/docs/default-source/faculty/publicaties/dissertation_marcel-noordhuis.pdf?sfvrsn=879ec414_2"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-2 hover:text-orange"
          >
            link
          </a>{" "}
          te downloaden.
        </p>
      </>
    ),
    author: "dr. Marcel Noordhuis",
  },
  {
    title: "Ketensamenwerking vraagt om een fundamentele verandering in mindset",
    date: "Januari 2017",
    body: (
      <>
        <p>
          Ketensamenwerking lijkt op het eerste oog bedrieglijk simpel, maar vraagt om fundamentele
          veranderingen in de manier van denken en doen van alle betrokken organisaties en mensen.
          Ook bestaan er misverstanden over wat ketensamenwerking precies inhoudt.
        </p>
        <p>
          &ldquo;In de dagelijkse praktijk blijkt telkens weer hoe weerbarstig dat is&rdquo;, aldus
          Marcel Noordhuis en Jack van der Veen, hoogleraar supply chain management aan de Nyenrode
          Business Universiteit. De experts schetsen wat ketensamenwerking wel en niet is en wat er
          allemaal bij komt kijken. Op{" "}
          <a
            href="https://www.consultancy.nl/nieuws/13370/ketensamenwerking-vraagt-om-fundamentele-verandering-in-mindset"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-2 hover:text-orange"
          >
            consultancy.nl
          </a>{" "}
          staat het gehele artikel.
        </p>
      </>
    ),
    author: "dr. Marcel Noordhuis",
  },
  {
    title: "Ketensamenwerking nader gedefinieerd",
    date: "April 2022",
    body: (
      <>
        <p>
          In de afgelopen jaren zien we steeds meer opdrachtgevers en opdrachtnemers die zich
          realiseren dat het aangaan van strategische samenwerking gebaseerd op de principes van
          ketensamenwerking, de oplossing zou kunnen zijn om de steeds complexere vraagstukken
          rondom o.a. de verduurzaming te kunnen managen, waardoor faalkosten kunnen worden
          voorkomen en de prijs/prestatie in de samenwerking structureel kan worden verbeterd.
        </p>
        <p>
          Een van de achterliggende gedachten achter excellent samenwerken in multidisciplinaire
          teams is, dat het pas mogelijk is prestatiedoorbraken te realiseren, als partijen
          langdurig (project overschrijvend) samenwerken. Hierbij dient dan wel serieus gestuurd te
          worden op het samenstellen van teams die leren van hun fouten zodat de foutkans van
          project op project steeds kleiner wordt. Niet alleen hebben teams enige tijd nodig om
          elkaar goed te leren kennen en te snappen, maar leert de theorie ons ook dat leercurve
          effecten met name optreden als partijen over projecten heen, liefst met dezelfde
          kernbezetting, projecten blijven uitvoeren.
        </p>
        <p>
          In het nevenstaande{" "}
          <a
            href="https://ketensamenwerking.blog/kenmerken-van-ketensamenwerking-in-de-bouw/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-2 hover:text-orange"
          >
            artikel
          </a>{" "}
          hoop ik meer begrip te kweken over wat er komt kijken bij de inrichting van de eigen
          organisatie alsook de organisatie van samenwerkingsverbanden als men daadwerkelijk met
          ketensamenwerking aan de slag wil gaan.
        </p>
      </>
    ),
    author: "dr. Marcel Noordhuis",
  },
  {
    title: "Ketensamenwerking van theorie naar praktijk",
    date: "Juni 2024",
    body: (
      <>
        <p>
          In 2024 hebben we onderzoek gedaan naar de specifieke knelpunten bij de implementatie van
          ketensamenwerking tussen woningcorporaties en bouwpartijen. Specifiek is in het onderzoek
          gekeken naar de mate waarin de onderliggende principes worden toegepast bij de uitvoering
          van bouwprojecten, zowel in de nieuwbouw alsook in het onderhoud.
        </p>
        <p>
          In dit onderzoek hebben 15 vastgoedonderhoudsbedrijven gereflecteerd op de samenwerking
          die ze hebben met 45 woningcorporaties die allen al jarenlang met hen in ketensamenwerking
          samenwerken. Uit het onderzoek bleek onder andere dat er op verschillende onderliggende
          principes van ketensamenwerking verbeteringen te realiseren zijn waardoor er sneller
          prestatiedoorbraken te realiseren zijn.
        </p>
        <p>
          Middels de nevenstaande{" "}
          <a
            href="https://a3ff2dc9-242d-41fd-bca8-3764dd3b3ada.usrfiles.com/ugd/a3ff2d_d41b2afcbf7748a6aad802c8f277a276.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-2 hover:text-orange"
          >
            link
          </a>{" "}
          kunt u het hele onderzoek downloaden.
        </p>
      </>
    ),
  },
  {
    title: "Het belang van dashboarding bij het implementeren van Ketensamenwerking",
    date: "Maart 2025",
    body: (
      <>
        <p>
          De belofte van ketensamenwerking is dat het bij de implementatie resulteert in verbeterde
          prestaties op tijd, geld, kwaliteit, aantallen en duurzaamheid. Maar hoe stel je dat dan
          vast?
        </p>
        <p>
          Om hierin een eerste aanzet te geven hebben we een artikel rondom het belang van
          dashboarding bij ketensamenwerking geschreven. Zie het artikel via de nevenstaande{" "}
          <a
            href="https://a3ff2dc9-242d-41fd-bca8-3764dd3b3ada.usrfiles.com/ugd/a3ff2d_71555eccb780410c96903daa0a8c974b.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-2 hover:text-orange"
          >
            link
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "De mogelijke inrichting van dashboards bij de implementatie van Ketensamenwerking",
    date: "Maart 2025",
    body: (
      <>
        <p>
          Als er draagvlak is voor het neerzetten van een dashboarding omgeving (een wezenlijk
          onderdeel bijhorend bij de toepassing van ketensamenwerking), dan is de volgende vraag hoe
          een dergelijk dashboard er dan inhoudelijk uit zou moeten zien.
        </p>
        <p>
          Middels de nevenstaande{" "}
          <a
            href="https://a3ff2dc9-242d-41fd-bca8-3764dd3b3ada.usrfiles.com/ugd/a3ff2d_f336dc38d19d4d33964c4b50119d187c.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline decoration-orange decoration-2 underline-offset-2 hover:text-orange"
          >
            link
          </a>{" "}
          kan men het artikel downloaden waarin we daar inhoudelijk richting in geven.
        </p>
      </>
    ),
  },
];

const COLLAPSED_HEIGHT = "4.5rem";

function PublicationCard({ pub }: { pub: (typeof PUBLICATIONS)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>(COLLAPSED_HEIGHT);

  useEffect(() => {
    if (!contentRef.current) return;
    setMaxHeight(expanded ? `${contentRef.current.scrollHeight}px` : COLLAPSED_HEIGHT);
  }, [expanded]);

  return (
    <li className="flex min-w-0 flex-col rounded-lg border border-hairline bg-white p-6">
      <span className="inline-flex w-fit rounded bg-orange/10 px-2.5 py-1 font-mono text-xs font-semibold text-orange">
        {pub.date}
      </span>
      <h3 className="mt-4 break-words font-display text-lg font-semibold text-navy-deep">
        {pub.title}
      </h3>
      <div
        className="relative mt-3 flex-1 overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight }}
      >
        <div ref={contentRef}>
          <div className="space-y-3 text-sm leading-relaxed text-slate-soft">{pub.body}</div>
          {pub.author && (
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-slate-soft/70">
              Auteur: {pub.author}
            </p>
          )}
        </div>
        {!expanded && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent"
            aria-hidden
          />
        )}
      </div>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-navy hover:text-orange"
      >
        {expanded ? "Lees minder" : "Lees meer"}
        <ArrowRight
          className={`h-4 w-4 transition-transform duration-300 ${expanded ? "-rotate-90" : ""}`}
          aria-hidden
        />
      </button>
    </li>
  );
}

export function OwnPublications() {
  return (
    <section className="bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-2xl">
          <SectionLabel>Publicaties</SectionLabel>
          <h2 className="heading-rule mt-5 font-display text-3xl font-semibold md:text-4xl">
            Eigen publicaties over ketensamenwerking
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-soft">
            Onderstaand een overzicht van de artikelen waarvan ik de auteur en/of mede-auteur was en
            die gaan over de implementatie van ketensamenwerking in de bouwsector.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {PUBLICATIONS.map((p) => (
            <PublicationCard key={p.title} pub={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}
