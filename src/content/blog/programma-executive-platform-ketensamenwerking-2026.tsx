import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import introImage from "@/assets/blog 1/Ketensamenwerking-Intern-Extern-BLMC-1200x630-1.jpg";
import goedeStedeLogo from "@/assets/blog 1/goedestede-woningstichting-logo-1-e1759674134961.png";
import binnenhofImage from "@/assets/blog 1/reno-binnenhof.jpg";
import hoogspanningImage from "@/assets/blog 1/Heijmans_Tennet_hoogspanning.2e16d0ba.fill-1200x630-c100_fvEwUOv.jpg";

const DEELNEMERS = [
  "Bosch Thermotechniek B.V.",
  "Bouwers van Morgen",
  "Breman Installatiegroep",
  "CAREFOS",
  "de Alliantie",
  "elk® groep",
  "Energiewacht",
  "Geluk Groep",
  "Hegeman Bouw Partners & Hegeman Bouw Civiel",
  "Heijmans",
  "Hemink Groep B.V.",
  "Hemubo",
  "Huybregts Relou (VB Groep)",
  "Lenferink Vastgoedonderhoud",
  "Lichtenberg Mensgericht Vastgoedonderhoud",
  "OnderhoudPlus | a JAJO company",
  "Peilon B.V.",
  "Portaal",
  "Property Plan",
  "Woningstichting Rochdale Amsterdam",
  "Rutges Vernieuwt",
  "Smits Vastgoedzorg",
  "Talen Vastgoedonderhoud",
  "Trivire",
  "Van Wijnen Haarlemmermeer B.V.",
  "Vivare",
  "Weijmens",
  "Woningstichting GoedeStede",
];

const STANDARD_SCHEDULE = (spreker: string) => [
  { time: "15:30 – 16:30", activity: "Ontvangst & borrel" },
  { time: "16:30 – 17:30", activity: `College door ${spreker}` },
  { time: "17:30 – 19:00", activity: "Diner in het restaurant van het kasteel" },
  {
    time: "19:00 – 20:00",
    activity: "Tafeldiscussie, delen ervaringen en inzichten, definiëring do’s en don’ts",
  },
  { time: "20:00 – 20:30", activity: "Terugkoppeling per tafel en reflectie door de spreker(s)" },
  { time: "20:30", activity: "Einde" },
];

const BIJEENKOMSTEN = [
  {
    nummer: 1,
    datum: "Donderdag 5 maart 2026, 15:30 – 20:00",
    afgerond: true,
    thema: "Laatste inzichten rondom ketensamenwerking vanuit de wetenschap en praktijk.",
    spreker:
      "Lezing door prof.dr. Jack van der Veen, Hoogleraar Supply Chain Management, Nyenrode Business Universiteit.",
    paragraphs: [
      "De term Ketensamenwerking heeft het afgelopen decennium een vaste plaats gekregen in het bedrijfskundige jargon. Er moet echter tegelijkertijd worden geconstateerd dat ondanks al deze aandacht er een aanzienlijk gat zit tussen wat er volgens de theorie allemaal zou kunnen worden bereikt met meer en betere ketensamenwerking en wat er in de praktijk daadwerkelijk gebeurt.",
      "In deze inleiding wordt teruggekeken op de lessen uit ruim 15 jaar onderzoek naar precies dit gat: waarom blijkt Ketensamenwerking zo lastig en wat kunnen we doen om Ketensamenwerking toch echt te praktiseren? En dit allemaal tegen de achtergrond dat voortgaan met traditionele interne en externe ketens eigenlijk geen optie is; de sociaal-maatschappelijke, economische, ecologische, demografische en geopolitieke ontwikkelingen nopen ons immers om de noodzakelijke transitie handen en voeten te geven.",
      "In dit college neemt Jack u mee in de (on)mogelijkheden van de implementatie ketensamenwerking binnen individuele organisaties alsook in de externe keten op basis van zijn industriebrede kennis.",
    ],
    schedule: null,
    image: {
      src: introImage,
      alt: "Ketensamenwerking intern en extern",
      contain: false,
    },
  },
  {
    nummer: 2,
    datum: "Donderdag 4 juni 2026, 15:30 – 20:00",
    afgerond: true,
    thema:
      "Het grondig evalueren van een bestaande samenwerking met meerdere ketenpartners: waarom deden we dat, hoe deden wij dat (aanpak), wat leerden we daarvan (bevindingen)?",
    spreker: "Lezing door Ivo Hoppe, manager vastgoed, GoedeStede.",
    paragraphs: [
      "Vele partijen starten met veel ambitie aan de implementatie van ketensamenwerking/RGS. Het doel hiervan is veelal dat enerzijds de productiecapaciteit voor langere tijd gegarandeerd wordt, maar anderzijds is het ook gewoon een zakelijke relatie waarin partijen door langdurig projectoverschrijdend samen te werken streven naar betere prestaties op tijd, geld, kwaliteit, duurzaamheid etc. dan traditioneel mogelijk zijn. Dit betekent automatisch dat er met enige regelmaat geëvalueerd moet worden rondom de realisatie van de afgesproken doelen. Ook kan de aanleiding zijn dat het einde van de contractperiode in zicht is en dat er verantwoording moet worden afgelegd richting bestuur of RvC rondom de vraag: wat heeft de samenwerking tot op heden opgeleverd en gaan we door met de geselecteerde partijen of niet?",
      "Ivo neemt ons mee in de evaluatie die hij heeft laten uitvoeren waarbij niet alleen naar de eigen organisatie is gekeken, maar ook naar de mate waarin in de samenwerking met ketenpartners invulling is gegeven aan de onderliggende principes van ketensamenwerking. Daarnaast is ook een serieuze evaluatie uitgevoerd naar de “zachte kant” van de samenwerking tussen GoedeStede en haar ketenpartners.",
      "In zijn college zal Ivo zijn ervaringen, leerpunten, do’s en don’ts delen met de platformdeelnemers. Hiermee wil hij anderen inspireren en laten leren van zijn “valkuilen” of leerpunten.",
    ],
    schedule: STANDARD_SCHEDULE("Ivo Hoppe (GoedeStede)"),
    image: { src: goedeStedeLogo, alt: "Woningstichting GoedeStede", contain: true },
  },
  {
    nummer: 3,
    datum: "Donderdag 17 september 2026, 15:30 – 20:00",
    afgerond: false,
    thema:
      "In vertrouwen werken aan de renovatie van het binnenhof en de rol van kostplus contracten daarbij.",
    spreker: "Lezing door Peter van Leeuwen (Programmadirecteur binnenhof renovatie).",
    paragraphs: [
      "De bouw in het Tweede Kamercomplex is officieel in uitvoering. Met het ondertekenen van de realisatiecontracten tussen de aannemers en het Rijksvastgoedbedrijf werd een nieuwe mijlpaal in de renovatie van het Binnenhof bereikt. Programmadirecteur Binnenhofrenovatie Peter van Leeuwen speelde een belangrijke rol bij de totstandkoming van de ‘kosten-pluscontracten’. Wat zijn de voordelen van ‘kosten-plus’? En waarom is het de beste manier om een complex project als de Binnenhofrenovatie aan de gang te krijgen? Daarnaast stelt hij dat “Samenwerken begint bij vertrouwen” en ook daar heeft hij stevig op ingezet.",
      "In zijn lezing neemt Peter de deelnemers mee in zijn ervaringen met het managen van een complex project als de renovatie van het binnenhof. Wat zijn volgens hem de leerpunten, de do’s en don’ts en het belang van goede incentives (contracten) en bouwen aan vertrouwen.",
    ],
    schedule: STANDARD_SCHEDULE("Peter van Leeuwen (Programmadirecteur Binnenhof)"),
    image: { src: binnenhofImage, alt: "Renovatie van het Binnenhof", contain: false },
  },
  {
    nummer: 4,
    datum: "Donderdag 12 november 2026, 15:30 – 20:00",
    afgerond: false,
    thema:
      "Ervaringen rondom de energietransitie en hoe daarin samen middels de toepassing van ketensamenwerking met marktpartijen aan de opschaling van de publieke infrastructuur wordt gewerkt.",
    spreker: "Lezing door Michel Wauters (Directeur hoogspanningsstations, Enexis)",
    paragraphs: [
      "De energietransitie vraagt een ongekende opschaling van netbeheerders in hun output in een context van een toenemende maatschappelijke druk. Het elektriciteitsnet is overvol, wachttijden voor klanten groeien. Dit heeft het speelveld binnen netbeheerders en tussen netbeheerders en ketenpartners radicaal veranderd. Waar voorheen voorspelbaarheid en technische standaarden leidend waren, zijn opschaling, standaardisatie en integrale ketensamenwerking inmiddels de leidende principes geworden.",
      "Michel Wauters geeft een inkijkje in wat deze ontwikkelingen betekenen voor de materiaalketen van Enexis welke een jaar-op-jaar dubbele-cijfers groei doormaken. Vanuit zijn huidige/alsook nieuwe rol kan hij reflecteren op het belang van een intensieve (keten)samenwerking met andere partijen in de keten. Hoe ze dat hebben aangepakt, wat dat voor impact dat heeft gehad en wat zijn visie is kijkend naar de toekomst. Ook zal hij reflecteren op de veranderde invulling van de opdrachtgeverrol en wat dat betekende voor de opdrachtnemers. Kortom een zeer leerzaam college!",
    ],
    schedule: STANDARD_SCHEDULE("Michel Wauters (Enexis)"),
    image: { src: hoogspanningImage, alt: "Hoogspanningsinfrastructuur", contain: false },
  },
];

const DEELNAME_PUNTEN = [
  "Alle lezingen kunnen zowel live alsook via internet gevolgd worden zodat iedereen kan deelnemen.",
  "Na afloop van de lezing wordt deze enkele dagen later in een afgeschermde Vimeo omgeving live gezet, zodat u de bijeenkomst ook op een ander moment nog een keer kunt bekijken.",
  "Voor de live bijeenkomst geldt dat u nog steeds 1 introducé kunt meenemen, maar dat u ook de mogelijkheid heeft de lezing via internet te volgen waarbij u maximaal 3 introducé’s kunt laten meekijken.",
  "We hebben een eigen SharePoint-omgeving voor leden ingericht waar alle hand-outs en video-opnamen zijn opgeslagen en u e.e.a. nog eens rustig kunt opzoeken en bekijken.",
];

export function ProgrammaExecutivePlatform2026() {
  return (
    <>
      <p className="text-lg leading-relaxed text-slate-soft">
        Het Executive Platform Ketensamenwerking brengt directeuren/bestuurders uit de bouw en
        vastgoedsector bij elkaar die een uitdagende bouw en verduurzamingsopgave hebben en er in
        geloven dat deze op de traditionele wijze nooit gerealiseerd kan worden. De deelnemers die
        de afgelopen jaren lid zijn geworden doen dat niet alleen maar om te netwerken, maar hebben
        de intrinsieke motivatie om uit te willen blinken in het toepassen van ketensamenwerking.
      </p>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        De onderwerpen die in het platform worden behandeld helpen de deelnemers &ldquo;concreet te
        maken&rdquo; wat nodig is om in de eigen organisatie alsook in de samenwerking met
        ketenpartners de slag te kunnen maken naar het worden van een excellente ketenspeler.
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        Platform deelnemers 2026
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
              <div
                className={`relative mt-6 aspect-[16/9] overflow-hidden rounded-lg border border-hairline ${
                  b.image.contain ? "flex items-center justify-center bg-white p-10" : ""
                }`}
              >
                <img
                  src={b.image.src}
                  alt={b.image.alt}
                  loading="lazy"
                  className={
                    b.image.contain
                      ? "max-h-full max-w-full object-contain"
                      : "h-full w-full object-cover"
                  }
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
        Vanenburgerallee 13, 3882 RH te Putten. Het ontvangst en het diner vinden plaats in het
        Kasteel. De lezingen vinden plaats in de Oranjerie, de zaal gelegen direct naast het
        Kasteel.
      </p>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        Deelname
      </h2>
      <ul className="mt-5 space-y-3">
        {DEELNAME_PUNTEN.map((punt, i) => (
          <li key={i} className="flex gap-3 text-base leading-relaxed text-slate-soft">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden />
            {punt}
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-2xl font-semibold text-navy-deep md:text-3xl">
        Deelnemen?
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-soft">
        De kosten om deel te nemen aan de 4 bijeenkomsten voor Executive&rsquo;s met borrel, diner
        en introducé (live 1 en digitaal 3) bedragen &euro;1.600 ex. BTW per jaar. Indien u later
        instapt betaalt u naar rato van het aantal bijeenkomsten dat nog in het onderhavige jaar
        resteert. Mocht u willen deelnemen aan de platformbijeenkomsten, neem dan contact met ons
        op, dan bevestigen wij uw deelname en zetten u op de deelnemerslijst.
      </p>
      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange/90"
      >
        Aanmelden voor het platform
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </>
  );
}
