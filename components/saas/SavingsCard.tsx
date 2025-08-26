export default function SavingsCard() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Indicatieve besparing</h2>
      <div className="mt-3 rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-emerald-50 shadow-lg p-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1">Financiering mogelijk</div>
        <div className="mt-3 grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs text-[var(--muted)]">Besparing per maand</p>
            <p className="text-3xl font-extrabold text-emerald-700">€ 35–60</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs text-[var(--muted)]">Met subsidie</p>
            <p className="text-sm font-semibold">Vaak binnen 5 jaar terugverdiend</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-[var(--muted)]">Indicatief, afhankelijk van verbruik en opbrengst. Bel voor een berekening op maat.</p>
      </div>
    </section>
  );
}