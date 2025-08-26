import { findPage, getAllStaticParams, PHONE_NUMBER, PHONE_TEL, type Region } from "@/lib/catalog";
import StickyCallCTA from "@/components/StickyCallCTA";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ region: Region; slug: string }>;
}

export async function generateStaticParams() {
  return getAllStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, slug } = await params;
  const page = findPage(region, slug);
  if (!page) return { title: "Verduurzaam Nederland" };
  return {
    title: page.title,
    description: page.offer || "Vraag direct een vrijblijvende offerte aan.",
    alternates: { canonical: `/${region}/${slug}` },
    openGraph: {
      title: page.title,
      description: page.offer || "Vraag direct een vrijblijvende offerte aan.",
      locale: region === "nl" ? "nl_NL" : "nl_BE",
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { region, slug } = await params;
  const page = findPage(region, slug);
  if (!page) {
    return (
      <div className="px-4 py-8">
        <h1 className="text-xl font-bold">Pagina niet gevonden</h1>
        <p className="text-neutral-600">Controleer de URL of ga terug naar de startpagina.</p>
      </div>
    );
  }

  return (
    <div className="px-4">
      <header className="py-4">
        <p className="text-xs uppercase tracking-wide text-neutral-500">{page.category || "Verduurzaam Nederland"}</p>
        <h1 className="text-2xl font-extrabold">{page.title}</h1>
        {page.offer && <p className="mt-1 text-green-700 font-medium">{page.offer}</p>}
      </header>

      <section className="grid gap-3">
        {(page.bullets || []).map((b) => (
          <div key={b} className="rounded-xl border border-neutral-200 p-4">
            <p className="text-sm text-neutral-800">{b}</p>
          </div>
        ))}
        {page.bullets?.length === 0 && (
          <div className="rounded-xl border border-neutral-200 p-4">
            <p className="text-sm text-neutral-800">Gratis en vrijblijvende offerte</p>
          </div>
        )}
      </section>

      <section className="mt-6 mb-24">
        <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-200">
          <p className="text-sm text-neutral-700">Bel direct met een specialist:</p>
          <p className="text-lg font-bold mt-1">{PHONE_NUMBER}</p>
        </div>
      </section>

      <StickyCallCTA phoneTel={PHONE_TEL} phoneDisplay={PHONE_NUMBER} region={region} slug={slug} />
    </div>
  );
}