import { findPage, getAllStaticParams, PHONE_NUMBER, PHONE_TEL, type Region } from "@/lib/catalog";
import StickyCallCTA from "@/components/StickyCallCTA";
import OfferBanner from "@/components/OfferBanner";
import TrustBar from "@/components/TrustBar";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ region: Region; slug: string }>;
}

export async function generateStaticParams() {
  return getAllStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, slug } = await params;
  const page = findPage(region, slug);
  if (!page) return { title: "Verduurzaam Nederland" };
  return {
    title: page.title,
    description: page.offer || "Vraag direct een vrijblijvende offerte aan.",
    alternates: { canonical: `/${region}/${slug}` },
    openGraph: {
      title: page.title,
      description: page.offer || "Vraag direct een vrijblijvende offerte aan.",
      locale: region === "nl" ? "nl_NL" : "nl_BE",
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { region, slug } = await params;
  const page = findPage(region, slug);
  if (!page) {
    return (
      <div className="px-4 py-8">
        <h1 className="text-xl font-bold">Pagina niet gevonden</h1>
        <p className="text-neutral-600">Controleer de URL of ga terug naar de startpagina.</p>
      </div>
    );
  }

  return (
    <div className="px-4">
      <header className="py-4">
        <p className="text-xs uppercase tracking-wide text-neutral-500">{page.category || "Verduurzaam Nederland"}</p>
        <h1 className="text-2xl font-extrabold">{page.title}</h1>
      </header>

      <OfferBanner
        title={page.offer || "Vandaag aanvragen = morgen gebeld"}
        subtitle="Direct richtprijs en planning aan de telefoon."
        highlight="Beperkte Actie: tot 25% voordeel op voorraad"
        phoneTel={PHONE_TEL}
        phoneDisplay={PHONE_NUMBER}
        disclaimer="Actie op basis van beschikbaarheid/voorraad. Voorwaarden op aanvraag."
        region={region}
        slug={slug}
      />

      <TrustBar />

      <Section title="Waarom kiezen voor ons?">
        <div className="grid gap-3">
          {(page.bullets || [
            "Gratis en vrijblijvende offerte",
            "Scherpe prijs en snelle planning (2–4 weken)",
            "Gecertificeerde vakmensen en fabrieksgarantie",
          ]).map((b) => (
            <Card key={b} className="p-4">
              <p className="text-sm text-neutral-800">{b}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Zo werkt het">
        <Steps />
      </Section>

      <Section title="Veelgestelde vragen">
        <FAQ />
      </Section>

      <div className="h-24" />
      <StickyCallCTA phoneTel={PHONE_TEL} phoneDisplay={PHONE_NUMBER} region={region} slug={slug} />
    </div>
  );
}