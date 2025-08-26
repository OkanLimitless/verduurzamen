"use client";

import Image from "next/image";
import { useState } from "react";
import CallCTA from "@/components/CallCTA";
import StickyCallBar from "@/components/StickyCallBar";
import CallbackSheet from "@/components/CallbackSheet";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import { FileText, Info } from "lucide-react";

const TEL = "+3185XXXXXXX";

export default function SubsidieLander() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4">
      <SchemaLocalBusiness />
      <header className="py-3 flex items-center justify-between sticky top-0 bg-[var(--bg)]/90 backdrop-blur z-40">
        <div className="font-semibold">Subsidies & terugverdientijd</div>
        <CallCTA tel={TEL} label="📞 Bel voor subsidiecheck" />
      </header>
      <main>
        <section className="mt-2">
          <h1 className="text-2xl font-extrabold">Maximaal profiteren van subsidies en salderingsregeling.</h1>
          <p className="mt-2 text-[var(--muted)]">Wij regelen de aanvraag voor jou en rekenen de terugverdientijd door.</p>
          <div className="mt-4 flex items-center gap-4">
            <CallCTA tel={TEL} label="📞 Bel voor subsidiecheck" />
            <button onClick={() => setOpen(true)} className="text-[var(--brand-700)] underline">Laat mij terugbellen</button>
          </div>
          <div className="mt-4 relative rounded-2xl overflow-hidden bg-neutral-100">
            <Image src="/hero.svg" alt="Subsidie illustratie" width={1200} height={420} priority className="w-full h-56 object-cover" />
          </div>
        </section>
        <Section title="Uitleg subsidies (verkort)">
          <div className="grid gap-3">
            {[
              { t: "ISDE (isolatie, warmtepompen)", b: "Subsidie voor isolatiemaatregelen en warmtepompen. Voorwaarden veranderen soms; bel voor actuele info." },
              { t: "Salderen", b: "Opgewekte zonnestroom verrekenen met afgenomen stroom. Regels en toekomst worden politiek bepaald." },
              { t: "BTW/teruggaaf", b: "Regelingen rondom BTW wijzigen. We wijzen je op de opties die nu gelden." },
            ].map((i) => (
              <Card key={i.t} className="p-4">
                <div className="flex items-center gap-2"><FileText className="size-5" aria-hidden /><p className="font-semibold">{i.t}</p></div>
                <p className="text-sm text-[var(--muted)] mt-1">{i.b}</p>
              </Card>
            ))}
          </div>
          <p className="mt-2 text-xs text-[var(--muted)] flex items-center gap-2"><Info className="size-4" aria-hidden /> Controleer actuele voorwaarden bij de Rijksoverheid.</p>
        </Section>
        <Section title="Voorbeeldcase (indicatief)">
          <Card className="p-4">
            <p className="font-semibold">Zonnepanelen in Utrecht</p>
            <ul className="mt-2 text-sm text-[var(--muted)] list-disc pl-5">
              <li>6 kWp installatie, A-merk panelen</li>
              <li>Indicatieve opbrengst 5.400 kWh/jaar</li>
              <li>Terugverdientijd circa 5 jaar (afhankelijk van prijs/gebruik)</li>
            </ul>
            <div className="mt-3"><a href={`tel:${TEL}`} className="text-[var(--brand-700)] underline">Bel voor jouw berekening</a></div>
          </Card>
        </Section>
      </main>
      <footer className="mt-12 mb-28 text-sm text-[var(--muted)]">Profiteer van subsidievoordeel — <a href={`tel:${TEL}`} className="underline">Bel nu</a></footer>
      <StickyCallBar tel={TEL} />
      <CallbackSheet open={open} onClose={() => setOpen(false)} />
    </div>
  );
}