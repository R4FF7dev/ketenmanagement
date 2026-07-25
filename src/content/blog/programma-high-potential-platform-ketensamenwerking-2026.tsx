import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import tcoImage from "@/assets/blog 1/TCO.png";
import introImage from "@/assets/blog 1/Ketensamenwerking-Intern-Extern-BLMC-1200x630-1.jpg";
import predictiveMaintenanceImage from "@/assets/blog 1/predictive-maintenance.jpg";
import rgsImage from "@/assets/blog 3/RGS.jpg";

const DEELNEMERS = [
  "Aannemersbedrijf H. van Rijswijck B.V.",
  "Bosch Thermotechniek Deventer",
  "Aannemingsbedrijf Fraanje B.V.",
  "CAREFOS",
  "Coen Hagedoorn Bouwgroep",
  "de Alliantie",
  "DuDok Wonen",
  "elk® groep",
  "Energiewacht",
  "Feenstra",
  "Finalist",
  "Heembouw",
  "Hegeman Bouwgroep",
  "Hemubo",
  "Kwakkenbos BV",
  "Oosterpoort",
  "Woningstichting Rochdale Amsterdam",
  "Woningcorporatie Thús Wonen",
  "Trivire",
  "Van Wijnen Vastgoedbeheer B.V.",
  "Van Wijnen Rosmalen B.V.",
  "Van Wijnen Sittard",
  "Vivare",
  "Wonen Noordwest Friesland",
  "Woonzorg Nederland",
];

const STANDARD_SCHEDULE = (spreker: string) => [
  { time: "12:00 – 13:00", activity: "Ontvangst & lunch" },
  { time: "13:00 – 14:00", activity: `College door ${spreker}` },
  {
    time: "14:00 – 15:00",
    activity: "Tafeldiscussie, delen ervaringen en inzichten, definiëring do’s en don’ts",
  },
  { time: "15:00 – 15:30", activity: "Terugkoppeling per tafel en reflectie door de spreker(s)" },
  { time: "15:30 – 16:00", activity: "Borrel en napraten" },
];

const BIJEENKOMSTEN = [
  {
    nummer: 1,
    datum: "Donderdag 5 maart 2026, 12:00 – 15:30",
    afgerond: true,
    thema:
      "RGS met een focus op TCO-optimalisatie & het toepassen van de principes van Ketensamenwerking, in combinatie een aanjager tot prestatiedoorbraken.",
    spreker: "Lezing door Marcel Noordhuis & Egbert Kunst (Ketenmanagement Interim & Advies).",
    paragraphs: [
      "Indien men met RGS aan de slag gaat, betekent dit dat men zich enerzijds richt op het optimaliseren van het keuzeproces rondom onderhoud/nieuwbouw/verduurzamen met als doelstelling de levensduurkosten (TCO) zo laag mogelijk te krijgen en de kwaliteit zo hoog mogelijk (ofwel de best mogelijke prijs/prestatie te realiseren).",
      "Het optimaliseren van de bouwopgave betekent anderzijds dat bouwpartijen steeds professioneler met elkaar moeten (gaan) samenwerken om die opgave efficiënt en effectief te kunnen uitvoeren. De toepassing van de principes van ketensamenwerking zijn een belangrijke aanjager om de organisatie van de samenwerking binnen en tussen organisaties verder te professionaliseren.",
      "De gedachte hierbij is dan ook dat RGS partijen twee parallelle uitdagingen hebben, enerzijds werken aan hun interne- en externe organisatieontwikkeling door de toepassing van ketensamenwerking en anderzijds steeds beter dienen te worden in het adviseren, uitvoeren en realiseren van projecten en beheren van vastgoed.",
      "In dit college nemen Egbert Kunst & Marcel Noordhuis de deelnemers mee in de (on)mogelijkheden van de implementatie ketensamenwerking/RGS binnen individuele organisaties alsook in de externe keten.",
    ],
    schedule: null,
    image: { src: tcoImage, alt: "TCO iceberg model", contain: false },
  },
  {
    nummer: 2,
    datum: "Donderdag 4 juni 2026, 12:00 – 15:30",
    afgerond: true,
    thema: "Laatste inzichten rondom ketensamenwerking vanuit de wetenschap en praktijk.",
    spreker:
      "Lezing door prof.dr. Jack van der Veen, Hoogleraar Supply Chain Management, Nyenrode Business Universiteit.",
    paragraphs: [
      "De term Ketensamenwerking heeft het afgelopen decennium een vaste plaats gekregen in het bedrijfskundige jargon. Er moet echter tegelijkertijd worden geconstateerd dat ondanks al deze aandacht er een aanzienlijk gat zit tussen wat er volgens de theorie allemaal zou kunnen worden bereikt met meer en betere ketensamenwerking en wat er in de praktijk daadwerkelijk gebeurt.",
      "In deze inleiding wordt teruggekeken op de lessen uit ruim 15 jaar onderzoek naar precies dit gat: waarom blijkt Ketensamenwerking zo lastig en wat kunnen we doen om Ketensamenwerking toch echt te praktiseren? En dit allemaal tegen de achtergrond dat voortgaan met traditionele interne en externe ketens eigenlijk geen optie is; de sociaal-maatschappelijke, economische, ecologische, demografische en geopolitieke ontwikkelingen nopen ons immers om de noodzakelijke transitie handen en voeten te geven.",
      "In dit college neemt Jack u mee in de (on)mogelijkheden van de implementatie ketensamenwerking binnen individuele organisaties alsook in de externe keten op basis van zijn industriebrede kennis.",
    ],
    schedule: STANDARD_SCHEDULE("Jack van der Veen (Nyenrode)"),
    image: { src: introImage, alt: "Ketensamenwerking intern en extern", contain: false },
  },
  {
    nummer: 3,
    datum: "Donderdag 17 september 2026, 12:00 – 15:30",
    afgerond: false,
    thema: "Voorspelbaar onderhoud: de route naar optimale vervangingsmomenten en budgetplanning.",
    spreker: "Lezing door Brendan Kleer, Croonwolter&dros.",
    paragraphs: [
      "De voordelen van voorspelbaar onderhoud zijn duidelijk: door inzichten in de conditie van je assets kun je operationeel beter plannen en ook financieel voorspelbaarder zijn en daardoor besparen zonder extra risico’s en met behoud van de prestaties. Hoe zorg je nou voor de implementatie van deze strategie in je bedrijf of project? En waar zit de urgentie om de nodige digitalisering toe te passen, oftewel waarom zou je er nu in moeten investeren?",
      "In dit college brengt Brendan zijn kennis en kunde in om middels slimme inzet van data het onderhoudsproces slimmer in te richten, voorspelbaarder te maken en de TCO te verlagen.",
    ],
    schedule: STANDARD_SCHEDULE("Brendan Kleer (Croonwolter & dros)"),
    image: { src: predictiveMaintenanceImage, alt: "Predictive maintenance", contain: false },
  },
  {
    nummer: 4,
    datum: "Donderdag 12 november 2026, 12:00 – 15:30",
    afgerond: false,
    thema:
      "Ervaringen met KSW/RGS kijkend naar de organisatie-inrichting alsook de optimalisatie van de bouwopgave.",
    spreker: "Lezing door Mark van Logten, Knaapen.",
    paragraphs: [
      "Wanneer we spreken over langjarig samenwerken in RGS- of ketensamenwerkingsverbanden, draait het in de kern altijd om hetzelfde: het bouwen aan duurzame partnerships. Partnerships waarin aannemers en woningcorporaties, door het optimaal benutten van het lerend vermogen binnen de keten, samen streven naar maximale efficiëntie én plezier in het samenwerken over de grenzen van organisaties heen. Dat kan alleen met langjarig commitment, continuïteit en vertrouwen. Bij Knaapen is men in 2010 gestart met deze manier van werken en anno 2025 realiseert men inmiddels 99% van hun omzet via dit type samenwerkingen.",
      "In dit college deelt Mark hoe je zo’n samenwerking succesvol inricht, welke veranderingen dit vraagt van organisatie en cultuur, en wat het oplevert voor zowel opdrachtgever als opdrachtnemer.",
    ],
    schedule: STANDARD_SCHEDULE("Mark van Logten (Knaapen)"),
    image: { src: rgsImage, alt: "Samenwerking als sleutel tot RGS", contain: false },
  },
];

const ZEKERHEDEN = [
  "Alle lezingen kunnen zowel live alsook via internet gevolgd worden zodat iedereen kan deelnemen.",
  "Na afloop van de lezing wordt deze enkele dagen later in een afgeschermde Vimeo omgeving live gezet, zodat u de bijeenkomst ook op een ander moment nog een keer kunt bekijken.",
  "Voor de live bijeenkomst geldt dat u 1 introducé kunt meenemen, maar dat u ook de mogelijkheid heeft de lezing via internet te volgen waarbij u maximaal 3 introducé’s kunt laten meekijken.",
  "We hebben een eigen SharePoint-omgeving voor leden ingericht waar alle hand-outs en video-opnamen zijn opgeslagen en u e.e.a. nog eens rustig kunt opzoeken en bekijken.",
];

export function ProgrammaHighPotentialPlatform2026() {
  return (
    <>
      <p className="text-lg leading-relaxed text-slate-soft">
        Het High Potential Platform Ketensamenwerking brengt managers, projectleiders en
        sleutelfiguren uit de bouw en vastgoedsector bij elkaar die een uitdagende bouw, onderhoud
        en verduurzamingsopgave hebben en er in geloven dat deze op de traditionele wijze nooit
        gerealiseerd kan worden. De deelnemers die de afgelopen jaren lid zijn geworden doen dat
        niet alleen maar om te netwerken, maar hebben de intrinsieke motivatie om uit te willen
        blinken in het toepassen van ketensamenwerking/RGS.
      </p>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        De onderwerpen die in het platform worden behandeld helpen de deelnemers &ldquo;concreet te
        maken&rdquo; wat nodig is om in de eigen organisatie de slag te kunnen maken naar het worden
        van een excellente ketenspeler en wat nodig is om de externe keten zo optimaal mogelijk te
        laten functioneren.
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        Deelnemers 2026
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {DEELNEMERS.map((naam) => (
          <li
            key={naam}
            className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-sm text-slate-soft"
          >
            {naam}
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        Programma
      </h2>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-orange">
        Voor managers, projectleiders en sleutelfiguren
      </p>
      <div className="mt-6 space-y-14">
        {BIJEENKOMSTEN.map((b) => (
          <article
            key={b.nummer}
            id={`bijeenkomst-${b.nummer}`}
            className="scroll-mt-24 border-t border-hairline pt-10 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-semibold text-orange">
                Bijeenkomst {b.nummer}
              </span>
              <span className="text-sm text-slate-soft">{b.datum}</span>
              {b.afgerond && (
                <span className="rounded bg-navy/5 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-navy">
                  Geweest
                </span>
              )}
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-navy-deep">{b.thema}</h3>
            <p className="mt-2 text-sm font-semibold text-slate-soft">{b.spreker}</p>

            {b.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-slate-soft">
                {p}
              </p>
            ))}

            {b.image && (
              <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg border border-hairline">
                <img
                  src={b.image.src}
                  alt={b.image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            {b.schedule && (
              <ul className="mt-6 space-y-1.5 rounded-lg bg-surface p-5 text-sm text-slate-soft">
                {b.schedule.map((s) => (
                  <li key={s.time} className="flex gap-3">
                    <span className="w-32 shrink-0 font-mono text-xs text-orange">{s.time}</span>
                    <span>{s.activity}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        Locatie
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        De platformbijeenkomsten vinden plaats op het terrein van Kasteel de Vanenburg,
        Vanenburgerallee 13, 3882 RH te Putten. Het ontvangst, de lunch en het diner vinden plaats
        in het Kasteel. De lezingen vinden plaats in de Oranjerie, de zaal gelegen direct naast het
        Kasteel.
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        Zekerheden
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        Om er voor te zorgen dat men altijd aan de platformbijeenkomsten kan deelnemen, hebben we
        een aantal zekerheden ingebouwd:
      </p>
      <ul className="mt-5 space-y-3">
        {ZEKERHEDEN.map((punt, i) => (
          <li key={i} className="flex gap-3 text-base leading-relaxed text-slate-soft">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden />
            {punt}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-base leading-relaxed text-slate-soft">
        Meer weten over deelname aan het High Potential Platform Ketensamenwerking? Neem contact met
        ons op.
      </p>
      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange/90"
      >
        Neem contact op
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </>
  );
}
