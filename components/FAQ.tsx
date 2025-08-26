interface QA { q: string; a: string; }

const DEFAULT_FAQ: QA[] = [
  { q: "Wat kost het?", a: "We geven direct een richtprijs per telefoon en bevestigen deze na een korte inspectie." },
  { q: "Hoe snel kunnen jullie starten?", a: "Vaak binnen 2–4 weken. Spoed? We kijken mee wat mogelijk is." },
  { q: "Heb ik recht op subsidie?", a: "Dat hangt af van je woning en maatregelen. We adviseren je direct telefonisch." },
];

export default function FAQ({ items = DEFAULT_FAQ }: { items?: QA[] }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold">Veelgestelde vragen</h3>
      <div className="mt-2">
        {items.map((qa) => (
          <details key={qa.q} className="group border-b border-neutral-200 py-3">
            <summary className="marker:content-none cursor-pointer list-none font-medium flex items-center justify-between">
              <span>{qa.q}</span>
              <span className="text-neutral-400 group-open:rotate-180 transition-transform">⌄</span>
            </summary>
            <p className="mt-2 text-sm text-neutral-600">{qa.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}