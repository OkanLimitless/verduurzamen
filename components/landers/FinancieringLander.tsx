"use client";

import Image from "next/image";
import { useState } from "react";
import CallCTA from "@/components/CallCTA";
import StickyCallBar from "@/components/StickyCallBar";
import CallbackSheet from "@/components/CallbackSheet";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import { Calculator, Check, PiggyBank } from "lucide-react";

const TEL = "+3185XXXXXXX";

export default function FinancieringLander() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4">
      <SchemaLocalBusiness />

      <header className="py-3 flex items-center justify-between sticky top-0 bg-[var(--bg)]/90 backdrop-blur z-40">
        <div className="font-semibold">Verduurzaam zonder aanbetaling</div>
        <CallCTA tel={TEL} label="📞 Bel direct" />
      </header>

      <main>
        <section className="mt-2">
          <h1 className="text-2xl font-extrabold">Verduurzaam je woning zonder investering vooraf.</h1>
          <p className="mt-2 text-[var(--muted)]">0% aanbetaling, aantrekkelijke financiering, en directe subsidiecheck.</p>
          <div className="mt-4 flex items-center gap-4">
            <CallCTA tel={TEL} label="📞 Bel voor financieringsadvies" />
            <button onClick={() => setOpen(true)} className="text-[var(--brand-700)] underline">Laat mij terugbellen</button>
          </div>
          <div className="mt-4 relative rounded-2xl overflow-hidden bg-neutral-100">
            <Image src="/hero.svg" alt="Financiering illustratie" width={1200} height={420} priority className="w-full h-56 object-cover" />
          </div>
        </section>

        <Section title="Maandbedrag indicatie">
          <Card className="p-4">
            <div className="flex items-center gap-2"><Calculator className="size-5" aria-hidden /><p className="font-semibold">Simpel rekenvoorbeeld</p></div>
            <p className="text-sm text-[var(--muted)] mt-1">Voorbeeld (indicatief): zonnepanelen €4.500 → financiering 60 maanden → maandbedrag vanaf ca. €79. Werkelijke bedragen afhankelijk van situatie en rente.</p>
            <div className="mt-2 text-xs text-[var(--muted)]">Geen advies; bel voor een persoonlijke berekening en subsidiecheck.</div>
          </Card>
        </Section>

        <Section title="Waarom betaalbaar?">
          <div className="grid gap-3">
            {["0% aanbetaling mogelijk", "ISDE-subsidie en BTW-regelingen", "Besparing op energierekening", "Transparante voorwaarden"].map((b) => (
              <Card key={b} className="p-4"><div className="flex items-center gap-2"><Check className="size-4 text-[var(--accent)]" aria-hidden /> <span className="text-sm">{b}</span></div></Card>
            ))}
          </div>
        </Section>

        <Section title="Snelle stappen">
          <div className="grid gap-2 text-sm text-[var(--muted)]">
            <div className="rounded-lg border p-3">1) Bel ons — we doen direct een subsidie- en financieringscheck.</div>
            <div className="rounded-lg border p-3">2) Richtprijs en concept-plan — helder en transparant.</div>
            <div className="rounded-lg border p-3">3) Installatie binnen enkele weken — door erkende installateurs.</div>
          </div>
          <div className="mt-4"><CallCTA tel={TEL} label="📞 Bel nu" /></div>
        </Section>

        <Section title="Veelgestelde vragen">
          <div className="grid gap-2">
            {[
              { q: "Is 0% aanbetaling altijd mogelijk?", a: "Vaak wel, afhankelijk van kredietcheck en product. Bel voor jouw mogelijkheden." },
              { q: "Kan ik subsidie combineren met financiering?", a: "Ja, we leggen uit hoe je subsidie in je financiering kunt meenemen." },
              { q: "Wat is de indicatieve terugverdientijd?", a: "Veel projecten verdienen zich in 4–8 jaar terug. Dit verschilt per woning en energieprijs." },
            ].map((f) => (
              <details key={f.q} className="group border-b border-neutral-200 py-3">
                <summary className="marker:content-none cursor-pointer list-none font-medium flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-neutral-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-2 text-sm text-[var(--muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>
      </main>

      <footer className="mt-12 mb-28 text-sm text-[var(--muted)]">
        <div className="grid gap-1">
          <p className="flex items-center gap-2"><PiggyBank className="size-4" aria-hidden /> Bel voor gratis financieringsadvies: <a href={`tel:${TEL}`} className="underline">{TEL}</a></p>
        </div>
      </footer>

      <StickyCallBar tel={TEL} />
      <CallbackSheet open={open} onClose={() => setOpen(false)} />
    </div>
  );
}