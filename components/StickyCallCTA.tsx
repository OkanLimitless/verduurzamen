"use client";

import Link from "next/link";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

interface StickyCallCTAProps {
  phoneTel: string; // tel:+31...
  phoneDisplay: string; // +31 85 087 2183
  label?: string; // e.g., Bel nu
  region?: string;
  slug?: string;
}

export default function StickyCallCTA({ phoneTel, phoneDisplay, label = "Bel nu", region, slug }: StickyCallCTAProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
    }
  }, []);

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-green-600 text-white shadow-xl">
      <div className="mx-auto max-w-screen-sm px-4 py-3">
        <Link
          href={`tel:${phoneTel}`}
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "click_to_call",
                region,
                slug,
                timestamp: Date.now(),
              });
            }
          }}
          className="flex items-center justify-center gap-2 rounded-md bg-green-700 hover:bg-green-800 active:bg-green-900 transition-colors text-base font-semibold py-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M1.5 4.5A3 3 0 014.5 1.5h3A1.5 1.5 0 019 3v3a1.5 1.5 0 01-1.5 1.5H6.21a.75.75 0 00-.53 1.28l.74.74a14.25 14.25 0 005.83 3.53.75.75 0 00.86-.29l.79-1.18a1.5 1.5 0 011.25-.65h3a1.5 1.5 0 011.5 1.5v3a3 3 0 01-3 3c-8.56 0-15.5-6.94-15.5-15.5z" clipRule="evenodd" />
          </svg>
          <span>{label}: {phoneDisplay}</span>
        </Link>
      </div>
    </div>
  );
}