"use client";

import { useEffect } from "react";

export default function StickyCallBar({ tel, onOpenCallback }: { tel: string; onOpenCallback: () => void }) {
  useEffect(() => { window.dataLayer = window.dataLayer || []; }, []);

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-t border-neutral-200 shadow-lg" aria-label="Belbalk">
      <div className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-between" style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 12px)" }}>
        <a
          href={`tel:${tel}`}
          aria-label="Bel direct"
          onClick={() => { try { window.dataLayer.push({ event: "cta_click", cta: "call" }); } catch {} }}
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] hover:bg-[var(--brand-600)] active:bg-[var(--brand-700)] text-white font-semibold px-5 py-3 min-h-[44px]"
        >
          📞 Bel direct
        </a>
        <button
          onClick={() => { try { window.dataLayer.push({ event: "cta_view", cta: "callback_form" }); } catch {} ; onOpenCallback(); }}
          className="text-[var(--brand-700)] underline underline-offset-2 font-medium"
          aria-label="Laat je terugbellen"
        >
          Terugbellen?
        </button>
      </div>
    </div>
  );
}