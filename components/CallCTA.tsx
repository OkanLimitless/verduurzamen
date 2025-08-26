"use client";

import { motion } from "framer-motion";

export default function CallCTA({ tel, label = "📞 Bel nu", className = "", ariaLabel = "Bel direct" }: { tel: string; label?: string; className?: string; ariaLabel?: string }) {
  return (
    <motion.a
      whileTap={{ scale: 0.98 }}
      href={`tel:${tel}`}
      aria-label={ariaLabel}
      onClick={() => {
        try { window.dataLayer?.push({ event: "cta_click", cta: "call" }); } catch {}
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-600)] active:bg-[var(--brand-700)] text-white font-semibold px-5 py-3 min-h-[44px] ${className}`}
    >
      {label}
    </motion.a>
  );
}