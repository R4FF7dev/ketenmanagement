import {
  Network,
  Compass,
  Handshake,
  ClipboardList,
  Landmark,
  HardHat,
  Wrench,
  Home,
} from "lucide-react";
import executivePlatformCover from "@/assets/Kasteel-de-Vanenburg-f9343613f36fd50dacead36189b7a226c86327f8.jpg";
import incentiveSystemsCover from "@/assets/incentive_pexels-pixabay-355948.jpg";
import carefosLogo from "@/assets/Klanten/Carefos v2.avif";
import deWoonmensenLogo from "@/assets/Klanten/De-Woonmensen-logo-2.avif";
import talenLogo from "@/assets/Klanten/Talen.avif";
import trivireLogo from "@/assets/Klanten/a3ff2d_178694f25786430983043ef38cfbdca4~mv2.avif";
import kleurrijkWonenLogo from "@/assets/Klanten/a3ff2d_2702ca0232d84cfb87363e8152c098eb~mv2.avif";
import heminkLogo from "@/assets/Klanten/a3ff2d_31ccde07e14e47969bf8ca4664475fa4~mv2.avif";
import wonenLimburgLogo from "@/assets/Klanten/a3ff2d_41e9ec93f8fb4279b851dd7feb40a52d~mv2.avif";
import rutgesLogo from "@/assets/Klanten/a3ff2d_5705fca083394280bff0a2d2725d7f2b~mv2.avif";
import rgsLogo from "@/assets/Klanten/a3ff2d_7313c651b5534dbf911099b680d83724~mv2.avif";
import maasvalleiLogo from "@/assets/Klanten/a3ff2d_968bffeffa674d9a811fc03c703a1c33~mv2.avif";
import goedeStedeClientLogo from "@/assets/Klanten/a3ff2d_9c696ae83648461c8d9fd5773a21ddb4~mv2.avif";
import cazasWonenLogo from "@/assets/Klanten/cazas wonen.avif";
import goedeWoningLogo from "@/assets/Klanten/goedewoning.avif";
import lescautLogo from "@/assets/Klanten/lescaut.avif";
import wonenNwfLogo from "@/assets/Klanten/wonen nwf.avif";
import woonbedrijfLogo from "@/assets/Klanten/woonbedrijf.avif";
import wonenBreburgLogo from "@/assets/Klanten/a3ff2d_7f8cb9fe5fd848c3b7212d954952fccb~mv2.avif";

export const SITE = {
  name: "Ketenmanagement Interim & Advies",
  shortName: "Ketenmanagement",
  person: "dr.ing. Marcel Noordhuis",
  email: "info@ketenmanagement.com",
  linkedin: "https://www.linkedin.com/in/marcelnoordhuis/",
  blog: "https://ketensamenwerking.blog/",
  website: "https://www.ketenmanagement.com/",
};

// SociableKIT "LinkedIn Profile Posts" widget (Pro plan, sociablekit.com).
export const SOCIABLEKIT_LINKEDIN_WIDGET_ID: string = "25695335";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/diensten", label: "Diensten" },
  { to: "/ketenmetingen", label: "Maturity Metingen" },
  { to: "/kennis", label: "Publicaties" },
  { to: "/opdrachtgevers", label: "Opdrachtgevers" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "inspiratiesessie",
    icon: Network,
    title: "Inspiratiesessie RGS en Ketensamenwerking",
    short:
      "Overzicht van de ins en outs van RGS en ketensamenwerking, met een discussie over de waarde en consequenties van de toepassing ervan. We staan uitgebreid stil bij de onderliggende bouwstenen en hoe deze succesvol te implementeren zijn, zowel binnen de eigen organisatie als tussen organisaties.",
  },
  {
    slug: "workshops",
    icon: Compass,
    title: "Workshops RGS en ketensamenwerking",
    short:
      "Een serie werksessies om vast te stellen of en hoe RGS en ketensamenwerking bijdragen aan uw strategische doelstellingen, met onderwerpen als visie op ketensamenwerking en RGS, sturen op prestaties, KPI's, TCO-doelen, procesgericht werken, gedragsregels en partnerselectie. De workshops resulteren in een gevulde strategiekaart.",
  },
  {
    slug: "dashboarding",
    icon: Handshake,
    title: "Dashboarding",
    short:
      "Wij helpen zichtbaar en meetbaar maken dat ketensamenwerking daadwerkelijk betere prestaties oplevert op tijd, geld, kwaliteit, aantallen en duurzaamheid. Samen met onze PowerBI-partner realiseren wij een dashboarding-omgeving waarmee u en uw partners de prestaties in de samenwerking continu kunnen volgen.",
  },
  {
    slug: "evaluatie",
    icon: ClipboardList,
    title: "Evaluatie ketensamenwerking",
    short:
      "Onafhankelijke evaluatie van lopende of afgeronde ketensamenwerkingsprogramma's, waarbij we in kaart brengen wat goed gaat en waar de samenwerking achterblijft bij de gestelde ambities. Op basis van gesprekken met de betrokken partijen en de behaalde resultaten komen wij tot concrete en toepasbare verbeteradviezen voor het vervolg.",
  },
] as const;

export const METINGEN = [
  {
    code: "KMM",
    title: "Interne KetenMaturityMeting (KMM)",
    body: "Een online meetinstrument waarmee uw eigen medewerkers vaststellen hoe volwassen de organisatie is op het gebied van ketensamenwerking, met verbetersuggesties vanuit de organisatie zelf. We beoordelen strategie & beleid, organisatie & processen, mindset & gedrag, monitoren & verbetering, informatie & communicatie en leren & innoveren.",
  },
  {
    code: "KSI",
    title: "Externe Ketenmaturity Meting (KSI)",
    body: "Brengt in kaart hoe volwassen de samenwerking tussen partners in een keten is, beoordeeld vanuit zes invalshoeken: langetermijnsamenwerking en gezamenlijke doelen, vroege betrokkenheid van partners, informatiedeling, prestatiemeting, gezamenlijk verbeteren en een gezamenlijk verdienmodel. Zo worden verbeterpunten en vervolgstappen concreet.",
  },
  {
    code: "K8",
    title: "De Kr8 van Zacht",
    body: "Ontwikkeld met Marion Muller, coach en trainer gespecialiseerd in de zachte kant van samenwerken. We brengen vijf randvoorwaarden voor succesvolle samenwerking in kaart: vertrouwen, omgaan met verschillen, heldere afspraken, effectieve communicatie en teambelang. Zo wordt zichtbaar waar de samenwerking stevig is en waar ontwikkeling nodig is.",
  },
  {
    code: "RMM",
    title: "RGS Maturity Meting (RMM)",
    body: "Stelt vast in welke mate partijen daadwerkelijk invulling geven aan de onderliggende principes van RGS, aan de hand van stellingen rondom portefeuille- en assetmanagement, property management, uitvoering en beheer. Op basis van circa 25-30 stellingen brengen we in kaart welke aspecten wel of niet worden ingevuld en waar het grootste verbeterpotentieel zit.",
  },
] as const;

export const SECTORS = [
  { icon: Home, title: "Woningcorporaties" },
  { icon: Landmark, title: "Gemeenten" },
  { icon: HardHat, title: "Bouwbedrijven" },
  { icon: Wrench, title: "Installateurs" },
] as const;

export const CLIENT_LOGOS = [
  { name: "CAREFOS", src: carefosLogo },
  { name: "de Woonmensen", src: deWoonmensenLogo },
  { name: "Talen", src: talenLogo },
  { name: "Trivire", src: trivireLogo },
  { name: "Kleurrijk Wonen", src: kleurrijkWonenLogo },
  { name: "Hemink", src: heminkLogo },
  { name: "Wonen Limburg", src: wonenLimburgLogo },
  { name: "Rutges Vernieuwt", src: rutgesLogo },
  { name: "RGS", src: rgsLogo },
  { name: "Maasvallei", src: maasvalleiLogo },
  { name: "GoedeStede", src: goedeStedeClientLogo },
  { name: "Cazas Wonen", src: cazasWonenLogo },
  { name: "De Goede Woning", src: goedeWoningLogo },
  { name: "l’escaut", src: lescautLogo },
  { name: "Wonen Noordwest Friesland", src: wonenNwfLogo },
  { name: "Woonbedrijf", src: woonbedrijfLogo },
  { name: "WonenBreburg", src: wonenBreburgLogo },
] as const;

export const BLOG_POSTS = [
  {
    slug: "programma-executive-platform-ketensamenwerking-2026",
    category: "Netwerk",
    title: "Programma Executive Platform Ketensamenwerking 2026",
    excerpt:
      "Het Executive Platform Ketensamenwerking brengt directeuren en bestuurders uit de bouw- en vastgoedsector samen die uit willen blinken in het toepassen van ketensamenwerking. Bekijk het programma, de deelnemers en de vier bijeenkomsten van 2026.",
    cover: executivePlatformCover,
  },
  {
    slug: "impact-van-incentivesystemen-in-de-bouw",
    category: "Onderzoek",
    title: "Impact van Incentivesystemen in de Bouw",
    excerpt:
      "Incentives (financieel of niet-financieel) worden in de bouw ingezet om prestaties, samenwerking en veiligheid te verbeteren. Wat zegt de wetenschappelijke literatuur over wanneer ze wel en niet werken?",
    cover: incentiveSystemsCover,
  },
  {
    slug: "programma-high-potential-platform-ketensamenwerking-2026",
    category: "Netwerk",
    title: "Programma High Potential Platform Ketensamenwerking 2026",
    excerpt:
      "Het High Potential Platform Ketensamenwerking brengt managers, projectleiders en sleutelfiguren uit de bouw- en vastgoedsector samen die willen uitblinken in het toepassen van ketensamenwerking en RGS. Bekijk het programma, de deelnemers en de vier bijeenkomsten van 2026.",
    cover: executivePlatformCover,
  },
] as const;

export const AUTHORITY = [
  "Gepromoveerd op ketensamenwerking in bouw en vastgoed",
  "Specialist in complexe samenwerkingsverbanden",
  "Ervaring met corporaties, gemeenten, bouwers en installateurs",
  "Praktische én wetenschappelijk onderbouwde aanpak",
  "Focus op analyse, implementatie, ketenregie en meetbare resultaten",
] as const;
