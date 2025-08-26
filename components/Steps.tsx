export default function Steps() {
  const steps = [
    { title: "Bel gratis", desc: "We bespreken jouw situatie in 2 minuten." },
    { title: "Scherpe prijs", desc: "Ontvang direct een richtprijs en planning." },
    { title: "Snel ingepland", desc: "Vaak binnen 2–4 weken, door vakmensen." },
  ];
  return (
    <ol className="mt-6 grid gap-3">
      {steps.map((s, idx) => (
        <li key={s.title} className="rounded-xl border border-neutral-200 p-4">
          <p className="text-sm text-neutral-500">Stap {idx + 1}</p>
          <p className="font-semibold">{s.title}</p>
          <p className="text-sm text-neutral-600">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}