import { ClipboardCheck, FileCheck, Wrench } from "lucide-react";

export default function Timeline() {
  const items = [
    { icon: <ClipboardCheck className="size-5" aria-hidden />, t: "Gratis advies & subsidiecheck", d: "Binnen 24 uur.", },
    { icon: <FileCheck className="size-5" aria-hidden />, t: "Richtprijs & plan binnen 24 uur", d: "Helder voorstel en planning.", },
    { icon: <Wrench className="size-5" aria-hidden />, t: "Installatie door erkende monteurs", d: "Netjes opgeleverd.", },
  ];
  return (
    <section className="mt-8 bg-slate-50 rounded-3xl p-5">
      <h2 className="text-xl font-bold">Hoe werkt het?</h2>
      <div className="mt-4 relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand)] to-[var(--accent)]" aria-hidden />
        <div className="grid gap-5">
          {items.map((i) => (
            <div key={i.t} className="relative">
              <div className="absolute -left-1 top-0 size-4 rounded-full bg-[var(--brand)]" aria-hidden />
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-lg p-4">
                <div className="flex items-center gap-2 text-[var(--ink)]">{i.icon}<p className="font-semibold">{i.t}</p></div>
                <p className="text-sm text-[var(--muted)] mt-1">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}