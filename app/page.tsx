import Image from "next/image";
import StickyCallCTA from "@/components/StickyCallCTA";
import { PHONE_NUMBER, PHONE_TEL } from "@/lib/catalog";

export default function Home() {
  return (
    <div className="px-4">
      <header className="py-4 flex items-center gap-3">
        <div className="size-10 rounded-full bg-green-600 text-white grid place-items-center font-bold">VN</div>
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-500">Verduurzaam Nederland</p>
          <h1 className="text-lg font-bold">Duurzame oplossingen op maat</h1>
        </div>
      </header>

      <section className="mt-2">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
          <Image src="/hero.svg" alt="Verduurzaam Nederland" width={1200} height={400} className="w-full h-48 object-cover" />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-extrabold">Bel direct voor een gratis advies</h2>
          <p className="mt-2 text-neutral-600">Binnen 2–4 weken ingepland door gecertificeerde vakmensen. Snel een scherpe prijs en duidelijke planning.</p>
        </div>
      </section>

      <section className="mt-6 grid gap-3">
        <div className="rounded-xl border border-neutral-200 p-4">
          <p className="font-semibold">Gratis en vrijblijvende offerte</p>
          <p className="text-sm text-neutral-600">Ontvang snel een prijsindicatie, afgestemd op jouw situatie.</p>
        </div>
        <div className="rounded-xl border border-neutral-200 p-4">
          <p className="font-semibold">Snelle start</p>
          <p className="text-sm text-neutral-600">Vaak binnen 2–4 weken ingepland.</p>
        </div>
        <div className="rounded-xl border border-neutral-200 p-4">
          <p className="font-semibold">Gecertificeerde vakmensen</p>
          <p className="text-sm text-neutral-600">Met fabrieksgarantie en nette afwerking.</p>
        </div>
      </section>

      <section className="mt-8 mb-24">
        <h3 className="text-lg font-bold mb-3">Populaire categorieën</h3>
        <ul className="grid grid-cols-2 gap-3">
          {[
            "Airco",
            "Dakisolatie",
            "Zonnepanelen",
            "Kozijnen",
            "Traprenovatie",
            "Vochtbestrijding",
          ].map((label) => (
            <li key={label} className="rounded-xl border border-neutral-200 p-4 text-center text-sm font-medium">
              {label}
            </li>
          ))}
        </ul>
      </section>

      <StickyCallCTA phoneTel={PHONE_TEL} phoneDisplay={PHONE_NUMBER} />
    </div>
  );
}
