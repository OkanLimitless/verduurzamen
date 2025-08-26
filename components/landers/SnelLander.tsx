"use client";

import Image from "next/image";
import { useState } from "react";
import CallCTA from "@/components/CallCTA";
import StickyCallBar from "@/components/StickyCallBar";
import CallbackSheet from "@/components/CallbackSheet";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import { Timer, Check } from "lucide-react";

const TEL = "+3185XXXXXXX";

export default function SnelLander() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4">
      <SchemaLocalBusiness />
      <header className="py-3 flex items-center justify-between sticky top-0 bg-[var(--bg)]/90 backdrop-blur z-40">
        <div className="font-semibold">Snel geïnstalleerd</div>
        <CallCTA tel={TEL} label="📞 Bel voor planning" />
      </header>
      <main>
        <section className="mt-2">
          <h1 className="text-2xl font-extrabold">Binnen 3 weken geïnstalleerd, klaar voor de winter.</h1>
          <p className="mt-2 text-[var(--muted)]">Landelijke dekking en erkende installateurs.</p>
          <div className="mt-4 flex items-center gap-4">
            <CallCTA tel={TEL} label="📞 Bel nu voor planning" />
            <button onClick={() => setOpen(true)} className="text-[var(--brand-700)] underline">Laat mij terugbellen</button>
          </div>
          <div className="mt-4 relative rounded-2xl overflow-hidden bg-neutral-100">
            <Image src="/hero.svg" alt="Snelheid illustratie" width={1200} height={420} priority className="w-full h-56 object-cover" />
          </div>
        </section>
        <Section title="Tijdlijn (indicatief)">
          <div className="grid gap-2 text-sm text-[var(--muted)]">
            <div className="rounded-lg border p-3">Advies (dag 0) → telefonisch gesprek en richtprijs</div>
            <div className="rounded-lg border p-3">Offerte (dag 2–3) → helder voorstel en planning</div>
            <div className="rounded-lg border p-3">Installatie (binnen 3 weken) → erkende monteurs</div>
          </div>
          <div className="mt-4"><CallCTA tel={TEL} label="📞 Bel nu" /></div>
        </Section>
        <Section title="Wat kun je verwachten?">
          <div className="grid gap-3">
            {["Snelle planning", "Vaste aanspreekpunt", "Netjes opgeleverd"].map((b) => (
              <Card key={b} className="p-4"><div className="flex items-center gap-2"><Check className="size-4 text-[var(--accent)]" aria-hidden /> <span className="text-sm">{b}</span></div></Card>
            ))}
          </div>
        </Section>
        <Section title="Review">
          <Card className="p-4"><p className="text-sm">“Binnen 3 weken geregeld, topteam.” — <strong>Rick, Eindhoven</strong></p></Card>
        </Section>
      </main>
      <footer className="mt-12 mb-28 text-sm text-[var(--muted)]"><div className="grid gap-1"><p className="flex items-center gap-2"><Timer className="size-4" aria-hidden /> Bel voor de snelste planning: <a href={`tel:${TEL}`} className="underline">{TEL}</a></p></div></footer>
      <StickyCallBar tel={TEL} />
      <CallbackSheet open={open} onClose={() => setOpen(false)} />
    </div>
  );
}