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

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/over-marcel", label: "Over Marcel" },
  { to: "/diensten", label: "Diensten" },
  { to: "/ketenmetingen", label: "Ketenmetingen" },
  { to: "/kennis", label: "Kennis & Publicaties" },
  { to: "/opdrachtgevers", label: "Opdrachtgevers" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "ketenanalyse",
    icon: Network,
    title: "Ketenanalyse & maturity metingen",
    short:
      "Analyse van de huidige samenwerking, volwassenheid, knelpunten en verbeterpotentie binnen de keten.",
  },
  {
    slug: "strategie",
    icon: Compass,
    title: "Strategie & inrichting van ketensamenwerking",
    short:
      "Ontwikkeling van visie, governance, KPI's, samenwerkingsafspraken en besturingsmodellen.",
  },
  {
    slug: "partnerselectie",
    icon: Handshake,
    title: "Partnerselectie & samenwerkingsmodellen",
    short:
      "Ondersteuning bij selectie van strategische partners en beoordeling van samenwerking, fit en toekomstbestendigheid.",
  },
  {
    slug: "ketenregie",
    icon: Briefcase,
    title: "Ketenregie & interim management",
    short:
      "Onafhankelijke begeleiding en regie bij complexe samenwerkingsprogramma's en verandertrajecten.",
  },
  {
    slug: "dashboarding",
    icon: GaugeCircle,
    title: "Dashboarding & prestatiesturing",
    short:
      "Meetbaar maken van samenwerking, prestaties, doelen, voortgang en verbeterpunten.",
  },
  {
    slug: "sessies",
    icon: Mic,
    title: "Inspiratiesessies, lezingen & platforms",
    short:
      "Kennisdeling, directiesessies, workshops en begeleiding van executive en high potential platforms.",
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
