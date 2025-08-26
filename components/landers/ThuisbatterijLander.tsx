"use client";

import { useState } from "react";
import Hero from "@/components/saas/Hero";
import Steps from "@/components/saas/Steps";
import ServicesGrid from "@/components/saas/ServicesGrid";
import CallCTA from "@/components/CallCTA";
import StickyCallBar from "@/components/StickyCallBar";
import CallbackSheet from "@/components/CallbackSheet";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";

const TEL = "+3185XXXXXXX";

export default function ThuisbatterijLander() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4">
      <SchemaLocalBusiness />

      <div className="mt-2">
        <Hero
          title="Thuisbatterij — maximale onafhankelijkheid en lagere energierekening."
          subtitle="Sla je zonne-energie op, gebruik stroom op piekmomenten en word minder afhankelijk van energieleveranciers."
          tel={TEL}
          onOpenCallback={() => setOpen(true)}
        />
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Waarom een thuisbatterij?</h2>
        <div className="mt-3 grid gap-3">
          {["Opslaan van zonne-energie", "Minder afhankelijk van energieleveranciers", "Slim verbruik op piekmomenten", "Subsidie & financiering mogelijk"].map((b) => (
            <div key={b} className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4 text-sm">{b}</div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Indicatieve besparing (mockup)</h2>
        <div className="mt-3 rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-blue-50 shadow-sm p-4">
          <p className="text-sm text-[var(--muted)]">Voorbeeld: 10 kWh batterij, huishouden 2 pers., zonnepanelen 6 kWp.</p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl bg-white p-3">
              <p className="text-xs text-[var(--muted)]">Maandelijkse besparing</p>
              <p className="text-2xl font-extrabold">€ 35–60</p>
            </div>
            <div className="rounded-xl bg-white p-3">
              <p className="text-xs text-[var(--muted)]">Terugverdientijd</p>
              <p className="text-2xl font-extrabold">7–10 jaar</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-[var(--muted)]">Indicatief: bel voor berekening op maat.</p>
        </div>
        <div className="mt-4"><CallCTA tel={TEL} label="📞 Bel voor batterij-advies" /></div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Vergelijking</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4">
            <p className="font-semibold">Met batterij</p>
            <ul className="list-disc pl-5 mt-1 text-[var(--muted)]">
              <li>Hogere zelfconsumptie</li>
              <li>Minder netafname op piekuren</li>
              <li>Meer grip op energierekening</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4">
            <p className="font-semibold">Zonder batterij</p>
            <ul className="list-disc pl-5 mt-1 text-[var(--muted)]">
              <li>Afhankelijker van netprijzen</li>
              <li>Minder opslag van eigen opwek</li>
              <li>Beperkte flexibiliteit</li>
            </ul>
          </div>
        </div>
      </section>

      <Steps />

      <section className="mt-8">
        <h2 className="text-xl font-bold">Subsidies & Financiering</h2>
        <div className="mt-3 grid gap-3">
          {[
            { t: "Subsidie (situatie-afhankelijk)", d: "Beschikbaarheid en voorwaarden kunnen wijzigen." },
            { t: "Financiering", d: "0% aanbetaling mogelijk; we rekenen samen een maandbedrag door." },
          ].map((i) => (
            <div key={i.t} className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4 text-sm">
              <p className="font-semibold">{i.t}</p>
              <p className="text-[var(--muted)]">{i.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-3"><a href={`tel:${TEL}`} className="text-[var(--brand-700)] underline">Bel voor subsidiecheck</a></div>
      </section>

      <StickyCallBar tel={TEL} onOpenCallback={() => setOpen(true)} />
      <CallbackSheet open={open} onClose={() => setOpen(false)} />
    </div>
  );
}