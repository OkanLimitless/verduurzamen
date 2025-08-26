import CallCTA from "@/components/CallCTA";

export default function FinancingBanner({ tel }: { tel: string }) {
  return (
    <section className="mt-10">
      <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-[var(--brand-700)] to-[var(--brand-600)] text-white shadow-xl">
        <h3 className="text-2xl font-extrabold">0% aanbetaling mogelijk — vanaf een vast maandbedrag</h3>
        <p className="mt-1 text-white/90">Bel voor een snelle financierings- en subsidiecheck. Binnen 2 minuten inzicht.</p>
        <div className="mt-4"><CallCTA tel={tel} label="📞 Bel direct" /></div>
      </div>
    </section>
  );
}