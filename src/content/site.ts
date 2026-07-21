import {
  Network,
  Compass,
  Handshake,
  Briefcase,
  GaugeCircle,
  Mic,
  Building2,
  Landmark,
  HardHat,
  Wrench,
  Home,
  ClipboardCheck,
  LayoutPanelTop,
} from "lucide-react";

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
    link: undefined,
  },
  {
    slug: "workshops",
    icon: Compass,
    title: "Workshops RGS en ketensamenwerking",
    short:
      "Een serie werksessies om vast te stellen of en hoe RGS en ketensamenwerking bijdragen aan uw strategische doelstellingen, met onderwerpen als visie op ketensamenwerking en RGS, sturen op prestaties, KPI's, TCO-doelen, procesgericht werken, gedragsregels en partnerselectie. De workshops resulteren in een gevulde strategiekaart.",
    link: undefined,
  },
  {
    slug: "dashboarding",
    icon: Handshake,
    title: "Dashboarding",
    short:
      "Wij helpen zichtbaar en meetbaar maken dat ketensamenwerking daadwerkelijk betere prestaties oplevert op tijd, geld, kwaliteit, aantallen en duurzaamheid. Samen met onze PowerBI-partner realiseren wij een dashboarding-omgeving waarmee u en uw partners de prestaties in de samenwerking continu kunnen volgen.",
    link: undefined,
  },
  {
    slug: "kmm",
    icon: Briefcase,
    title: "Interne KetenMaturityMeting (KMM)",
    short:
      "Een online meetinstrument waarmee uw eigen medewerkers vaststellen hoe volwassen de organisatie is op het gebied van ketensamenwerking, met verbetersuggesties vanuit de organisatie zelf. We beoordelen strategie & beleid, organisatie & processen, mindset & gedrag, monitoren & verbetering, informatie & communicatie en leren & innoveren.",
    link: "https://a3ff2dc9-242d-41fd-bca8-3764dd3b3ada.usrfiles.com/ugd/a3ff2d_68127613da544c9cb7f9bafed33d3b1d.pdf",
  },
  {
    slug: "ksi",
    icon: GaugeCircle,
    title: "Externe Ketenmaturity Meting (KSI)",
    short:
      "Brengt in kaart hoe volwassen de samenwerking tussen partners in een keten is, beoordeeld vanuit zes invalshoeken: langetermijnsamenwerking en gezamenlijke doelen, vroege betrokkenheid van partners, informatiedeling, prestatiemeting, gezamenlijk verbeteren en een gezamenlijk verdienmodel. Zo worden verbeterpunten en vervolgstappen concreet.",
    link: "https://ketensamenwerking.blog/wp-content/uploads/2025/08/KSI-BROCHURE-2025-meten-ketenrijpheid-tussen-organisaties-12-08-2025.pdf",
  },
  {
    slug: "rmm",
    icon: Mic,
    title: "RGS Maturity Meting (RMM)",
    short:
      "Stelt vast in welke mate partijen daadwerkelijk invulling geven aan de onderliggende principes van RGS rondom portefeuille- en assetmanagement, property management, uitvoering en beheer. Aan de hand van circa 25-30 stellingen brengen we in kaart welke aspecten wel of niet worden ingevuld en waar het grootste verbeterpotentieel zit.",
    link: undefined,
  },
] as const;

export const METINGEN = [
  {
    code: "KMM",
    title: "KetenMaturityMeting",
    body: "Brengt de volwassenheid van uw ketensamenwerking in kaart op strategie, structuur, gedrag en resultaat.",
  },
  {
    code: "KSI",
    title: "KetenSamenwerkingsIndex",
    body: "Periodieke index die de kwaliteit en ontwikkeling van de samenwerking tussen ketenpartners meet.",
  },
  {
    code: "K8",
    title: "Kr8 van Zacht",
    body: "Maakt de zachte, relationele kant van samenwerking expliciet en bespreekbaar tussen partners.",
  },
  {
    code: "EVA",
    title: "Evaluatie ketensamenwerkingsprogramma's",
    body: "Onafhankelijke evaluatie van lopende of afgeronde programma's met concrete verbeteradviezen.",
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
  { icon: Building2, title: "Vastgoedorganisaties" },
  { icon: ClipboardCheck, title: "Onderhoudsbedrijven" },
  { icon: LayoutPanelTop, title: "Projectorganisaties" },
] as const;

export const BLOG_POSTS = [
  {
    category: "Bouw",
    title: "Ketensamenwerking in de bouw",
    excerpt:
      "Waarom structurele samenwerking tussen opdrachtgever en ketenpartners de sleutel is voor betere bouwprestaties.",
  },
  {
    category: "Meten",
    title: "Hoe maak je samenwerking meetbaar?",
    excerpt:
      "Van zachte signalen naar harde stuurinformatie: het meten van samenwerking als basis voor verbetering.",
  },
  {
    category: "Implementatie",
    title: "Van strategie naar succesvolle implementatie",
    excerpt:
      "De kloof tussen ambitie en realisatie overbruggen met heldere ketenregie en governance.",
  },
] as const;

export const AUTHORITY = [
  "Gepromoveerd op ketensamenwerking in bouw en vastgoed",
  "Specialist in complexe samenwerkingsverbanden",
  "Ervaring met corporaties, gemeenten, bouwers en installateurs",
  "Praktische én wetenschappelijk onderbouwde aanpak",
  "Focus op analyse, implementatie, ketenregie en meetbare resultaten",
] as const;
