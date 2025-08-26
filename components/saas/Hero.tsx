"use client";

import { motion } from "framer-motion";
import CallCTA from "@/components/CallCTA";
import Image from "next/image";

export default function Hero({
  title,
  subtitle,
  tel,
  onOpenCallback,
  imageUrl,
  showSecondary = false,
}: {
  title: string;
  subtitle: string;
  tel: string;
  onOpenCallback?: () => void;
  imageUrl?: string;
  showSecondary?: boolean;
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl p-6 md:p-10 text-white shadow-lg">
      {imageUrl && (
        <Image src={imageUrl} alt="Hero" fill priority sizes="100vw" className="object-cover absolute inset-0" />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/90 to-[var(--accent)]/80" aria-hidden />
      <div className="relative">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{title}</h1>
        <p className="mt-3 text-white/90 md:text-lg max-w-2xl">{subtitle}</p>
        <div className="mt-5 flex items-center gap-4">
          <CallCTA tel={tel} label="📞 Bel nu" />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs md:text-sm">
          {[
            "✔ Gecertificeerde installateurs",
            "✔ Landelijke dekking",
            "✔ Inclusief subsidie-advies",
          ].map((t) => (
            <span key={t} className="rounded-full bg-white/15 px-3 py-1 text-white/95 font-medium">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}