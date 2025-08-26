import { PanelsTopLeft, Shield, Battery, PlugZap, Home } from "lucide-react";

const TEL = "+3185XXXXXXX";

export default function ServicesGrid() {
  const services = [
    { icon: <PanelsTopLeft className="size-5" aria-hidden />, title: "Zonnepanelen", bullets: ["A-merken", "Monitoring", "Strakke afwerking"] },
    { icon: <Shield className="size-5" aria-hidden />, title: "Isolatie", bullets: ["Spouw/vloer/dak", "ISDE mogelijk", "Comfortwinst"] },
    { icon: <Battery className="size-5" aria-hidden />, title: "Warmtepompen", bullets: ["Hybride/all-electric", "Fluisterstil", "Advies op maat"] },
    { icon: <PlugZap className="size-5" aria-hidden />, title: "Laadpalen", bullets: ["11–22 kW", "Load balancing", "Zakelijk/thuis"] },
    { icon: <Home className="size-5" aria-hidden />, title: "Thuisbatterij", bullets: ["Opslaan zonne-energie", "Lagere kosten", "Subsidie/financiering"] },
  ];
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Diensten</h2>
      <div className="mt-3 grid gap-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4">
            <div className="flex items-center gap-2 text-[var(--ink)]">{s.icon}<p className="font-semibold">{s.title}</p></div>
            <ul className="mt-2 text-sm text-[var(--muted)] list-disc pl-5">
              {s.bullets.map((b) => (<li key={b}>{b}</li>))}
            </ul>
            <div className="mt-2"><a href={`tel:${TEL}`} className="text-[var(--brand-700)] underline">📞 Advies nodig? Bel nu</a></div>
          </div>
        ))}
      </div>
    </section>
  );
}