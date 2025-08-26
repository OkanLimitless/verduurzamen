import { CheckCircle, ClipboardList, Wrench } from "lucide-react";
import CallCTA from "@/components/CallCTA";

const TEL = "+3185XXXXXXX";

export default function Steps() {
  const steps = [
    { icon: <ClipboardList className="size-5" aria-hidden />, title: "Gratis advies & subsidiecheck", desc: "Binnen 24 uur bellen we je terug.", },
    { icon: <CheckCircle className="size-5" aria-hidden />, title: "Richtprijs & plan binnen 24 uur", desc: "Helder voorstel, duidelijke planning.", },
    { icon: <Wrench className="size-5" aria-hidden />, title: "Installatie door erkende monteurs", desc: "Netjes opgeleverd en getest.", },
  ];
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Hoe werkt het?</h2>
      <div className="mt-3 grid gap-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4">
            <div className="flex items-center gap-2 text-[var(--ink)]">
              {s.icon}
              <p className="font-semibold">{s.title}</p>
            </div>
            <p className="text-sm text-[var(--muted)] mt-1">{s.desc}</p>
            <div className="mt-2"><a href={`tel:${TEL}`} className="text-[var(--brand-700)] underline">Bel nu</a></div>
          </div>
        ))}
      </div>
    </section>
  );
}