"use client";

import Link from "next/link";

interface OfferBannerProps {
  title: string;
  subtitle?: string;
  highlight?: string; // e.g., Tot €2.500 subsidie
  phoneTel: string;
  phoneDisplay: string;
  disclaimer?: string;
  region?: string;
  slug?: string;
}

export default function OfferBanner({ title, subtitle, highlight, phoneTel, phoneDisplay, disclaimer, region, slug }: OfferBannerProps) {
  const onClick = () => {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "offer_click", region, slug, timestamp: Date.now() });
    } catch {}
  };

  return (
    <section className="rounded-2xl overflow-hidden border border-green-600 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
      <div className="p-5">
        {highlight && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            <span>Actie</span>
            <span className="text-white/90">{highlight}</span>
          </div>
        )}
        <h2 className="mt-3 text-2xl font-extrabold leading-tight">{title}</h2>
        {subtitle && <p className="mt-1 text-white/90">{subtitle}</p>}
        <div className="mt-4">
          <Link href={`tel:${phoneTel}`} onClick={onClick} className="block w-full text-center rounded-lg bg-white text-green-700 font-bold py-3 active:scale-[0.99]">
            Bel nu: {phoneDisplay}
          </Link>
        </div>
        {disclaimer && <p className="mt-2 text-xs text-white/80">{disclaimer}</p>}
      </div>
    </section>
  );
}