import { Battery, ShieldCheck, PiggyBank, Zap } from "lucide-react";

export default function BenefitCards() {
  const items = [
    { icon: <Battery className="size-5" aria-hidden />, title: "Opslaan zonne-energie", desc: "Gebruik je eigen stroom wanneer jij wilt." },
    { icon: <PiggyBank className="size-5" aria-hidden />, title: "Lagere maandlasten", desc: "Besparing vanaf €35–60 per maand mogelijk." },
    { icon: <ShieldCheck className="size-5" aria-hidden />, title: "Betrouwbare installatie", desc: "A-merken en gecertificeerde monteurs." },
    { icon: <Zap className="size-5" aria-hidden />, title: "Slimme sturing", desc: "Laad/ontlaad op piekmomenten voor extra voordeel." },
  ];
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Waarom een thuisbatterij?</h2>
      <div className="mt-3 grid gap-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-neutral-200 bg-white shadow-lg p-4">
            <div className="flex items-center gap-2 text-[var(--ink)]">{i.icon}<p className="font-semibold">{i.title}</p></div>
            <p className="text-sm text-[var(--muted)] mt-1">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}