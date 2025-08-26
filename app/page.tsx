import Image from "next/image";
import StickyCallCTA from "@/components/StickyCallCTA";
import { PHONE_NUMBER, PHONE_TEL } from "@/lib/catalog";
import OfferBanner from "@/components/OfferBanner";
import TrustBar from "@/components/TrustBar";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="px-4">
      <header className="py-4 flex items-center gap-3">
        <div className="size-10 rounded-full bg-green-600 text-white grid place-items-center font-bold">VN</div>
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-500">Verduurzaam Nederland</p>
          <h1 className="text-lg font-bold">Duurzame oplossingen op maat</h1>
        </div>
      </header>

      <section className="mt-2">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
          <Image src="/hero.svg" alt="Verduurzaam Nederland" width={1200} height={400} className="w-full h-48 object-cover" />
        </div>
      </section>

      <div className="mt-4">
        <OfferBanner
          title="Vandaag aanvragen = morgen gebeld"
          subtitle="Direct richtprijs en planning aan de telefoon."
          highlight="Beperkte Actie: tot 25% voordeel op voorraad"
          phoneTel={PHONE_TEL}
          phoneDisplay={PHONE_NUMBER}
          disclaimer="Actie op basis van beschikbaarheid/voorraad. Voorwaarden op aanvraag."
        />
      </div>

      <TrustBar />

      <Section title="Waarom kiezen voor ons?">
        <div className="grid gap-3">
          {[
            "Gratis en vrijblijvende offerte",
            "Scherpe prijs en snelle planning (2–4 weken)",
            "Gecertificeerde vakmensen en fabrieksgarantie",
          ].map((b) => (
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

      <Section title="Populaire categorieën">
        <ul className="grid grid-cols-2 gap-3">
          {["Airco","Dakisolatie","Zonnepanelen","Kozijnen","Traprenovatie","Vochtbestrijding"].map((label) => (
            <Card key={label} className="p-4 text-center text-sm font-medium">{label}</Card>
          ))}
        </ul>
      </Section>

      <StickyCallCTA phoneTel={PHONE_TEL} phoneDisplay={PHONE_NUMBER} />
    </div>
  );
}
