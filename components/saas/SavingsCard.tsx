export default function SavingsCard() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Indicatieve besparing</h2>
      <div className="mt-3 rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-emerald-50 shadow-lg p-5">
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs text-[var(--muted)]">Besparing per maand</p>
            <p className="text-3xl font-extrabold text-emerald-700">€ 35–60</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-xs text-[var(--muted)]">Subsidie/financiering</p>
            <p className="text-sm font-semibold">Beschikbaar — bel voor check</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-[var(--muted)]">Indicatief, afhankelijk van verbruik en opbrengst. We rekenen het graag voor je door.</p>
      </div>
    </section>
  );
}