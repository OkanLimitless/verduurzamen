export type Region = "nl" | "benl";

export interface LandingPage {
  region: Region;
  slug: string; // url-safe slug
  title: string; // page H1
  offer?: string; // irresistible offer line
  bullets?: string[]; // key benefits
  category?: string; // optional grouping
}

export const PHONE_NUMBER = "+31 85 087 2183";
export const PHONE_TEL = "+31850872183";

export const DEFAULT_BULLETS: string[] = [
  "Gratis en vrijblijvende offerte",
  "Scherpe prijs en snelle planning (2–4 weken)",
  "Gecertificeerde vakmensen en fabrieksgarantie",
];

// Helper offers per category (kept persuasive but bounded by disclaimers on page)
const OFFERS: Record<string, string> = {
  "Airco NL": "Vandaag aanvragen = morgen gebeld + snelle plaatsing",
  "Zonnepanelen NL": "Direct scherpe prijs + snelle montage",
  "Dakisolatie NL": "Actietarief op voorraad, beperkte periode",
  "Dakwerken NL": "Gratis inspectie + richtprijs per telefoon",
  "Kunststof kozijnen NL": "Tijdelijke inmeet-actie + scherpe bundelkorting",
  "Traprenovatie NL": "Showroomkorting op geselecteerde sets",
  "Vochtbestrijding NL": "Snel resultaat, vandaag advies",
  "Waterontharder NL": "Introductieactie: gratis installatiecheck",

  "Airco BENL": "Snelle plaatsing mogelijk, voorraadactie",
  "Zonnepanelen BENL": "Direct richtprijs + plaatsing in overleg",
  "Dakisolatie BENL": "Voorraadactie: beperkte tijd",
  "Dakwerken BENL": "Gratis dakcheck + richtprijs",
  "PVC ramen en deuren BENL": "Actie op 3+ ramen/deuren",
  "Vochtbestrijding BENL": "Snel advies, duidelijke prijs",
};

export const pages: LandingPage[] = [
  // NL
  { region: "nl", slug: "airconditioning-installeren-of-vervangen-zakelijk", title: "Airco installeren of vervangen (zakelijk)", category: "Airco NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Airco NL"] },
  { region: "nl", slug: "airconditioning-installeren-of-vervangen-particulier", title: "Airco installeren of vervangen (particulier)", category: "Airco NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Airco NL"] },

  { region: "nl", slug: "badkamer-plaatsen-of-vervangen", title: "Badkamer plaatsen of vervangen", category: "Badkamer renovatie NL", bullets: DEFAULT_BULLETS, offer: "Direct richtprijs + snelle planning" },

  { region: "nl", slug: "spouwmuur-isoleren", title: "Spouwmuur isoleren", category: "Dakisolatie NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie NL"] },
  { region: "nl", slug: "kruipruimte-isoleren", title: "Kruipruimte isoleren", category: "Dakisolatie NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie NL"] },
  { region: "nl", slug: "hellend-dak-isoleren-binnenzijde", title: "Hellend dak isoleren (binnenzijde)", category: "Dakisolatie NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie NL"] },
  { region: "nl", slug: "plat-dak-isoleren-of-renoveren", title: "Plat dak isoleren of renoveren", category: "Dakisolatie NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie NL"] },
  { region: "nl", slug: "spouwmuur-na-isoleren", title: "Spouwmuur na-isoleren", category: "Dakisolatie NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie NL"] },

  { region: "nl", slug: "hellend-dak-leggen-of-vervangen", title: "Hellend dak leggen of vervangen", category: "Dakwerken NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakwerken NL"] },
  { region: "nl", slug: "plat-dak-leggen-of-vervangen", title: "Plat dak leggen of vervangen", category: "Dakwerken NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakwerken NL"] },
  { region: "nl", slug: "hellend-dak-renoveren", title: "Hellend dak renoveren", category: "Dakwerken NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakwerken NL"] },

  { region: "nl", slug: "warmtepomp-installeren-of-vervangen-hybride", title: "Warmtepomp installeren of vervangen (hybride)", category: "Warmtepomp NL", bullets: DEFAULT_BULLETS, offer: "Snel advies + indicatieve besparing" },

  { region: "nl", slug: "kunststof-dakkapel-plaatsen-of-vervangen", title: "Kunststof dakkapel plaatsen of vervangen", category: "Kunststof dakkapel NL", bullets: DEFAULT_BULLETS, offer: "Snelle plaatsing en nette afwerking" },
  { region: "nl", slug: "kunststof-kozijnen-plaatsen-of-vervangen", title: "Kunststof kozijnen plaatsen of vervangen", category: "Kunststof kozijnen NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Kunststof kozijnen NL"] },

  { region: "nl", slug: "laadpaal-installeren-of-vervangen", title: "Laadpaal installeren of vervangen", category: "Laadpaal NL", bullets: DEFAULT_BULLETS, offer: "Snel aan huis, complete installatie" },

  { region: "nl", slug: "thuisaccu-plaatsen", title: "Thuisaccu plaatsen", category: "Thuisaccu NL", bullets: DEFAULT_BULLETS, offer: "Snel advies op maat" },

  { region: "nl", slug: "trap-renoveren-pvc-bekleding", title: "Trap renoveren (PVC bekleding)", category: "Traprenovatie NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Traprenovatie NL"] },
  { region: "nl", slug: "trap-renoveren-houten-bekleding", title: "Trap renoveren (houten bekleding)", category: "Traprenovatie NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Traprenovatie NL"] },
  { region: "nl", slug: "trap-renoveren-laminaat-bekleding", title: "Trap renoveren (laminaat bekleding)", category: "Traprenovatie NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Traprenovatie NL"] },
  { region: "nl", slug: "trap-renoveren-tapijt", title: "Trap renoveren (tapijt)", category: "Traprenovatie NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Traprenovatie NL"] },

  { region: "nl", slug: "opstijgend-vocht-bestrijden", title: "Opstijgend vocht bestrijden", category: "Vochtbestrijding NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Vochtbestrijding NL"] },

  { region: "nl", slug: "waterontharder-installeren-of-vervangen-kopen", title: "Waterontharder installeren of vervangen (kopen)", category: "Waterontharder NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Waterontharder NL"] },

  { region: "nl", slug: "zonnepanelen-installeren-zakelijk", title: "Zonnepanelen installeren (zakelijk)", category: "Zonnepanelen NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Zonnepanelen NL"] },
  { region: "nl", slug: "zonnepanelen-installeren-particulier", title: "Zonnepanelen installeren (particulier)", category: "Zonnepanelen NL", bullets: DEFAULT_BULLETS, offer: OFFERS["Zonnepanelen NL"] },

  { region: "nl", slug: "alarm", title: "Alarm", category: "Alarm NL", bullets: DEFAULT_BULLETS, offer: "Direct advies en prijsindicatie" },
  { region: "nl", slug: "kunststof-schuifpui", title: "Kunststof schuifpui", category: "Kunststof schuifpui NL", bullets: DEFAULT_BULLETS, offer: "Scherpe bundelkorting mogelijk" },

  // BENL
  { region: "benl", slug: "split-airco-particulier", title: "Split airco particulier", category: "Airco BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Airco BENL"] },

  { region: "benl", slug: "crepi", title: "Crepi", category: "Crepi BENL", bullets: DEFAULT_BULLETS, offer: "Direct richtprijs + planning" },

  { region: "benl", slug: "nieuwe-cv-ketel-plaatsen", title: "Nieuwe CV-ketel plaatsen", category: "CV-ketel BENL", bullets: DEFAULT_BULLETS, offer: "Snel leverbaar, scherpe prijs" },

  { region: "benl", slug: "hellend-dak-renoveren-of-isoleren-vanaf-buitenkant", title: "Hellend dak renoveren of isoleren vanaf buitenkant", category: "Dakisolatie BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie BENL"] },
  { region: "benl", slug: "dakisolatie-hellend-dak-binnenzijde", title: "Dakisolatie hellend dak binnenzijde", category: "Dakisolatie BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie BENL"] },
  { region: "benl", slug: "dakisolatie-plat-dak", title: "Dakisolatie plat dak", category: "Dakisolatie BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie BENL"] },
  { region: "benl", slug: "zoldervloerisolatie", title: "Zoldervloerisolatie", category: "Dakisolatie BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie BENL"] },

  { region: "benl", slug: "dak-ontmossen", title: "Dak ontmossen", category: "Dak ontmossen BENL", bullets: DEFAULT_BULLETS, offer: "Snel ingepland, duidelijke prijs" },

  { region: "benl", slug: "nieuw-plat-dak-leggen", title: "Nieuw plat dak leggen", category: "Dakwerken BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakwerken BENL"] },
  { region: "benl", slug: "nieuw-hellend-dak-leggen", title: "Nieuw hellend dak leggen", category: "Dakwerken BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakwerken BENL"] },
  { region: "benl", slug: "plat-dak-renoveren", title: "Plat dak renoveren", category: "Dakwerken BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakwerken BENL"] },
  { region: "benl", slug: "dak-reinigen", title: "Dak reinigen", category: "Dakwerken BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakwerken BENL"] },

  { region: "benl", slug: "pvc-ramen-en-of-deuren-3-of-meer", title: "PVC ramen en/of deuren (3 of meer)", category: "PVC ramen en deuren BENL", bullets: DEFAULT_BULLETS, offer: "Actie op 3+ stuks, vraag naar voorwaarden" },

  { region: "benl", slug: "buiten-schilderen", title: "Buiten schilderen", category: "Schilderwerk BENL", bullets: DEFAULT_BULLETS, offer: "Snel advies + richtprijs" },

  { region: "benl", slug: "schimmels", title: "Schimmels", category: "Schimmels BENL", bullets: DEFAULT_BULLETS, offer: "Snel inzicht en plan van aanpak" },

  { region: "benl", slug: "spouwmuurisolatie", title: "Spouwmuurisolatie", category: "Spouwmuurisolatie BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie BENL"] },
  { region: "benl", slug: "isoleren-geverfde-of-matig-geisoleerde-muur", title: "Isoleren geverfde of matig geïsoleerde muur", category: "Spouwmuurisolatie BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Dakisolatie BENL"] },

  { region: "benl", slug: "thuisbatterij", title: "Thuisbatterij", category: "Thuisbatterij BENL", bullets: DEFAULT_BULLETS, offer: "Snel advies op maat" },

  { region: "benl", slug: "opstijgend-vocht", title: "Opstijgend vocht", category: "Vochtbestrijding BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Vochtbestrijding BENL"] },
  { region: "benl", slug: "kelderdichting", title: "Kelderdichting", category: "Vochtbestrijding BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Vochtbestrijding BENL"] },

  { region: "benl", slug: "nieuwe-waterontharder", title: "Nieuwe waterontharder", category: "Waterontharder BENL", bullets: DEFAULT_BULLETS, offer: "Introductieactie: gratis installatiecheck" },

  { region: "benl", slug: "zonnepanelen-plaatsen-particulier", title: "Zonnepanelen plaatsen particulier", category: "Zonnepanelen BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Zonnepanelen BENL"] },
  { region: "benl", slug: "zonnepanelen-plaatsen-zakelijk", title: "Zonnepanelen plaatsen zakelijk", category: "Zonnepanelen BENL", bullets: DEFAULT_BULLETS, offer: OFFERS["Zonnepanelen BENL"] },
];

export function getAllRegions(): Region[] {
  return ["nl", "benl"]; 
}

export function getPagesByRegion(region: Region): LandingPage[] {
  return pages.filter((p) => p.region === region);
}

export function findPage(region: Region, slug: string): LandingPage | undefined {
  return pages.find((p) => p.region === region && p.slug === slug);
}

export function getAllStaticParams(): { region: Region; slug: string }[] {
  return pages.map((p) => ({ region: p.region, slug: p.slug }));
}