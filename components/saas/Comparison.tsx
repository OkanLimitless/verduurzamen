import { Check, X } from "lucide-react";

export default function Comparison() {
  const pros = ["Hogere zelfconsumptie", "Minder netafname op piekuren", "Meer grip op energierekening"];
  const cons = ["Afhankelijker van netprijzen", "Geen opslag van eigen opwek", "Minder flexibiliteit"];
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Vergelijking</h2>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl border border-emerald-200 bg-white shadow-lg p-4">
          <p className="text-lg font-semibold text-emerald-700">Met batterij</p>
          <ul className="mt-2 list-none">
            {pros.map((p) => (
              <li key={p} className="flex items-center gap-2 text-[var(--ink)]"><Check className="size-4 text-emerald-600" aria-hidden /> <span className="font-medium">{p}</span></li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white shadow-lg p-4 opacity-90">
          <p className="text-lg font-semibold text-neutral-700">Zonder batterij</p>
          <ul className="mt-2 list-none">
            {cons.map((c) => (
              <li key={c} className="flex items-center gap-2 text-[var(--muted)]"><X className="size-4 text-neutral-400" aria-hidden /> {c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}