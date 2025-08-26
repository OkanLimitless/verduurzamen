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
          {showSecondary && onOpenCallback && (
            <motion.button whileTap={{ scale: 0.98 }} onClick={onOpenCallback} className="rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold px-5 py-3 min-h-[44px]">
              Laat mij terugbellen
            </motion.button>
          )}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 text-xs md:text-sm">
          {["Bekend van", "Partner van", "Gecertificeerd"].map((t) => (
            <div key={t} className="rounded-lg bg-white/10 text-white/90 text-center px-3 py-2">{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}