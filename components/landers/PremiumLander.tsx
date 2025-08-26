"use client";

import Image from "next/image";
import { useState } from "react";
import CallCTA from "@/components/CallCTA";
import StickyCallBar from "@/components/StickyCallBar";
import CallbackSheet from "@/components/CallbackSheet";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import { BadgeCheck, Star } from "lucide-react";

const TEL = "+3185XXXXXXX";

export default function PremiumLander() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4">
      <SchemaLocalBusiness />
      <header className="py-3 flex items-center justify-between sticky top-0 bg-[var(--bg)]/90 backdrop-blur z-40">
        <div className="font-semibold">Premium installatie</div>
        <CallCTA tel={TEL} label="📞 Bel direct" />
      </header>
      <main>
        <section className="mt-2">
          <h1 className="text-2xl font-extrabold">Verduurzamen met A-merk kwaliteit en 25 jaar garantie.</h1>
          <p className="mt-2 text-[var(--muted)]">Deskundig advies, vakkundige montage, betrouwbare service.</p>
          <div className="mt-4 flex items-center gap-4">
            <CallCTA tel={TEL} label="📞 Bel voor premium installatie" />
            <button onClick={() => setOpen(true)} className="text-[var(--brand-700)] underline">Laat mij terugbellen</button>
          </div>
          <div className="mt-4 relative rounded-2xl overflow-hidden bg-neutral-100">
            <Image src="/hero.svg" alt="Premium illustratie" width={1200} height={420} priority className="w-full h-56 object-cover" />
          </div>
        </section>
        <Section title="Kwaliteitszekerheid">
          <div className="grid gap-3">
            {[
              { title: "A-merken", body: "Wij werken met bewezen merken voor panelen, omvormers en warmtepompen." },
              { title: "Gecertificeerde monteurs", body: "Installatie door erkende vakmensen volgens de normen." },
              { title: "Uitgebreide garantie", body: "Tot 25 jaar op componenten, heldere garantievoorwaarden." },
            ].map((i) => (
              <Card key={i.title} className="p-4">
                <div className="flex items-center gap-2"><BadgeCheck className="size-5" aria-hidden /><p className="font-semibold">{i.title}</p></div>
                <p className="text-sm text-[var(--muted)] mt-1">{i.body}</p>
              </Card>
            ))}
          </div>
        </Section>
        <Section title="Ervaringen">
          <div className="grid gap-2">
            {[
              { q: "Snel, netjes en alles helder uitgelegd.", a: "Mila, Utrecht" },
              { q: "Binnen 3 weken geregeld, topteam.", a: "Rick, Eindhoven" },
              { q: "Duidelijke offerte en keurige montage.", a: "Sanne, Haarlem" },
            ].map((t) => (
              <Card key={t.q} className="p-4"><p className="text-sm">“{t.q}” — <strong>{t.a}</strong></p></Card>
            ))}
          </div>
          <div className="mt-4"><CallCTA tel={TEL} label="📞 Bel nu" /></div>
        </Section>
      </main>
      <footer className="mt-12 mb-28 text-sm text-[var(--muted)]"><div className="grid gap-1"><p className="flex items-center gap-2"><Star className="size-4 text-yellow-500" aria-hidden /> Kies voor zekerheid: <a href={`tel:${TEL}`} className="underline">{TEL}</a></p></div></footer>
      <StickyCallBar tel={TEL} />
      <CallbackSheet open={open} onClose={() => setOpen(false)} />
    </div>
  );
}