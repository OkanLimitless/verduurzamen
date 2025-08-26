import { Star } from "lucide-react";
import LogosRow from "./LogosRow";

export default function Testimonials() {
  const ts = [
    { q: "Snel, netjes en alles helder uitgelegd.", a: "Mila, Utrecht" },
    { q: "Binnen 3 weken geregeld, topteam.", a: "Rick, Eindhoven" },
    { q: "Duidelijke offerte en keurige montage.", a: "Sanne, Haarlem" },
  ];
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Reviews</h2>
      <div className="mt-3 grid gap-3">
        {ts.map((t) => (
          <blockquote key={t.q} className="rounded-2xl border border-neutral-200 bg-white shadow-lg p-4">
            <div className="flex items-center gap-1 text-yellow-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="size-4 fill-yellow-500" />))}
            </div>
            <p className="text-sm mt-1">“{t.q}”</p>
            <footer className="text-xs text-[var(--muted)] mt-1">— {t.a}</footer>
          </blockquote>
        ))}
      </div>
      <LogosRow />
    </section>
  );
}