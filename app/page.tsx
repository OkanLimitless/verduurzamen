"use client";

import Image from "next/image";
import { useState } from "react";
import CallCTA from "@/components/CallCTA";
import StickyCallBar from "@/components/StickyCallBar";
import CallbackSheet from "@/components/CallbackSheet";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import { Check, MapPin, Star, Shield, Wrench, Battery, PlugZap, PanelsTopLeft } from "lucide-react";

const TEL = "+3185XXXXXXX";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4">
      <SchemaLocalBusiness />

      <header className="py-3 flex items-center justify-between sticky top-0 bg-[var(--bg)]/90 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/80 z-40">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-md bg-[var(--brand)] text-white grid place-items-center font-bold">VN</div>
          <span className="font-semibold">Verduurzaam Nederland</span>
        </div>
        <CallCTA tel={TEL} label="📞 Bel direct" ariaLabel="Bel direct" />
      </header>

      <main>
        <section className="mt-2">
          <h1 className="sr-only">Verduurzamen met vertrouwen — snel geregeld in heel Nederland.</h1>
          <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
            <Image src="/hero.svg" alt="Illustratie duurzame energie" width={1200} height={480} priority className="w-full h-56 object-cover" />
          </div>
          <div className="mt-4">
            <p className="text-2xl font-extrabold text-[var(--ink)]">Verduurzamen met vertrouwen — snel geregeld in heel Nederland.</p>
            <p className="mt-2 text-[var(--muted)]">Zonnepanelen, isolatie, warmtepompen en laadoplossingen. Deskundig advies, vlotte installatie, maximale subsidie.</p>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              {[
                "Gratis adviesgesprek binnen 24 uur",
                "Erkende installateurs, garantie tot 25 jaar",
                "Hulp bij subsidie en terugverdientijd",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2"><Check className="size-4 text-[var(--accent)]" aria-hidden /> {b}</li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <CallCTA tel={TEL} label="📞 Bel nu" />
              <button onClick={() => setOpen(true)} className="text-[var(--brand-700)] underline underline-offset-4">Laat mij terugbellen</button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-center text-[var(--muted)]">
            {["Bekend van", "Partner van", "Gecertificeerd"].map((t) => (
              <div key={t} className="rounded-lg border border-neutral-200 bg-white p-2">{t}</div>
            ))}
          </div>
        </section>

        <Section title="Voordelen">
          <div className="grid gap-3">
            {[
              { icon: <Wrench className="size-5" aria-hidden />, title: "Snel geregeld", desc: "Offerte en planning zonder gedoe.", },
              { icon: <Shield className="size-5" aria-hidden />, title: "Transparant & eerlijk", desc: "Duidelijke prijzen, duidelijke rapportage.", },
              { icon: <Star className="size-5" aria-hidden />, title: "Topkwaliteit", desc: "A-merk materialen, vakkundige installatie.", },
              { icon: <MapPin className="size-5" aria-hidden />, title: "Landelijke dekking", desc: "Service in heel Nederland.", },
            ].map((v) => (
              <Card key={v.title} className="p-4">
                <div className="flex items-center gap-2 text-[var(--ink)]">
                  {v.icon}
                  <p className="font-semibold">{v.title}</p>
                </div>
                <p className="text-sm text-[var(--muted)] mt-1">{v.desc}</p>
                <div className="mt-2"><a href={`tel:${TEL}`} onClick={() => { try { window.dataLayer?.push({ event: 'cta_click', cta: 'call' }); } catch {} }} className="text-[var(--brand-700)] underline">Bel nu</a></div>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Diensten">
          <div className="grid gap-3">
            {[
              { icon: <PanelsTopLeft className="size-5" aria-hidden />, title: "Zonnepanelen", desc: "A-merk panelen en omvormers, strak afgewerkt. Inclusief opbrengstadvies en monitoring.", specs: ["vanaf-prijs indicatief", "monitoring app", "garantie tot 25 jaar"] },
              { icon: <Shield className="size-5" aria-hidden />, title: "Isolatie", desc: "Spouwmuur, vloer en dak — hoger wooncomfort en lagere energierekening.", specs: ["spouw/vloer/dak", "snelle uitvoering", "ISDE mogelijk"] },
              { icon: <Battery className="size-5" aria-hidden />, title: "Warmtepompen", desc: "Hybride of all-electric, afgestemd op jouw woning en verbruik.", specs: ["hybride/all-electric", "fluisterstil", "merkadvies"] },
              { icon: <PlugZap className="size-5" aria-hidden />, title: "Laadpalen", desc: "Slimme laadoplossingen voor thuis of zakelijk, met load-balancing.", specs: ["AC 11–22 kW", "load balancing", "kabel of socket"] },
              { icon: <Shield className="size-5" aria-hidden />, title: "Subsidie-advies", desc: "Wij wijzen je op regelingen en helpen bij de aanvraag.", specs: ["ISDE", "BTW/teruggaaf", "salderen"] },
            ].map((s) => (
              <Card key={s.title} className="p-4">
                <div className="flex items-center gap-2 text-[var(--ink)]">
                  {s.icon}
                  <p className="font-semibold">{s.title}</p>
                </div>
                <p className="text-sm text-[var(--muted)] mt-1">{s.desc}</p>
                <ul className="mt-2 grid gap-1 text-sm text-[var(--muted)] list-disc pl-5">
                  {s.specs.map((sp) => (<li key={sp}>{sp}</li>))}
                </ul>
                <div className="mt-3 flex items-center justify-between">
                  <a href={`tel:${TEL}`} onClick={() => { try { window.dataLayer?.push({ event: 'cta_click', cta: 'call' }); } catch {} }} className="text-[var(--brand-700)] underline">📞 Advies nodig? Bel nu</a>
                  <span className="text-xs text-[var(--muted)]">Indicatieve prijzen, vraag naar voorwaarden.</span>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Subsidies & Financiering" subtitle="Regelingen kunnen wijzigen; controleer altijd de actuele voorwaarden.">
          <div className="grid gap-3">
            {[
              { title: "ISDE-subsidie", body: "Voor isolatie en warmtepompen kan ISDE beschikbaar zijn. Wij adviseren je over de aanvraag.", },
              { title: "Salderen & teruglevering", body: "Bij zonnepanelen gelden salderingsregels. Wij leggen uit wat dit voor jou betekent.", },
              { title: "BTW/teruggaaf", body: "BTW-regels kunnen wijzigen. We wijzen je op mogelijkheden die nu gelden.", },
            ].map((i) => (
              <Card key={i.title} className="p-4">
                <p className="font-semibold">{i.title}</p>
                <p className="text-sm text-[var(--muted)] mt-1">{i.body}</p>
                <div className="mt-2"><a href={`tel:${TEL}`} onClick={() => { try { window.dataLayer?.push({ event: 'cta_click', cta: 'call' }); } catch {} }} className="text-[var(--brand-700)] underline">Bel voor subsidiecheck</a></div>
                <p className="text-xs text-[var(--muted)] mt-1">Controleer actuele voorwaarden bij de Rijksoverheid.</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Regio’s & Beschikbaarheid">
          <Card className="p-4">
            <div className="grid gap-2 text-sm text-[var(--muted)]">
              <p>Service in heel Nederland. Snelste planning momenteel in: Randstad, Brabant, Gelderland.</p>
              <div className="rounded-lg bg-blue-50 text-blue-700 px-3 py-2 inline-flex w-fit">Planning updates: normale doorlooptijd</div>
            </div>
          </Card>
        </Section>

        <Section title="Reviews">
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Star className="size-5 text-yellow-500" aria-hidden />
              <p className="font-semibold">4,8/5</p>
              <span className="text-sm text-[var(--muted)]" aria-label="Voorbeeldscore">(voorbeeld)</span>
            </div>
            <div className="mt-3 grid gap-2">
              {[
                { q: "Snel, netjes en alles helder uitgelegd.", a: "Mila, Utrecht" },
                { q: "Binnen 3 weken geregeld, topteam.", a: "Rick, Eindhoven" },
                { q: "Duidelijke offerte en keurige montage.", a: "Sanne, Haarlem" },
              ].map((t) => (
                <blockquote key={t.q} className="rounded-xl border border-neutral-200 p-3">
                  <p className="text-sm">“{t.q}”</p>
                  <footer className="text-xs text-[var(--muted)] mt-1">— {t.a}</footer>
                </blockquote>
              ))}
            </div>
          </Card>
        </Section>

        <Section title="FAQ">
          <div className="grid gap-2">
            {[
              { q: "Hoe snel kunnen jullie installeren?", a: "Vaak binnen 2–4 weken, afhankelijk van product en regio." },
              { q: "Welke garanties bieden jullie?", a: "Tot 25 jaar op componenten; installatiegarantie conform afspraken." },
              { q: "Helpen jullie met subsidieaanvragen?", a: "Ja, we denken mee en wijzen je op actuele regelingen." },
              { q: "Wat is de gemiddelde terugverdientijd?", a: "Varieert per woning en energieprijs; we maken dit inzichtelijk." },
              { q: "Werken jullie met A-merken?", a: "Ja, we adviseren merken die passen bij jouw situatie en budget." },
              { q: "Hoe gaat het eerste adviesgesprek?", a: "Telefonisch inventariseren we je wensen en geven direct richtlijnen." },
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
          <div className="mt-4"><CallCTA tel={TEL} label="📞 Bel nu" /></div>
        </Section>
      </main>

      <footer className="mt-12 mb-28 text-sm text-[var(--muted)]">
        <div className="grid gap-1">
          <p>KVK: 00000000 · BTW: NL000000000B01 · Adres: Postbus 123, 1000 AA Amsterdam</p>
          <p>Openingstijden: ma–vr 09:00–17:00 · <a href="#" className="underline">Privacy</a></p>
          <p>Telefoon: <a href={`tel:${TEL}`} className="underline" aria-label="Bel Verduurzaam Nederland">{TEL}</a></p>
        </div>
      </footer>

      <StickyCallBar tel={TEL} onOpenCallback={() => setOpen(true)} />
      <CallbackSheet open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
