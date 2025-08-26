"use client";

import { useEffect, useState } from "react";

export default function CallbackSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState("Ochtend");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      try { window.dataLayer?.push({ event: "cta_view", cta: "callback_form" }); } catch {}
    }
  }, [open]);

  if (!open) return null;

  const validatePhone = (value: string) => {
    // Very lenient NL phone hint: starts with 0 or +31 and 9-12 digits
    return /^(\+?31|0)\s?\d[\d\s-]{7,11}$/.test(value.trim());
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) return setError("Vul je naam in.");
    if (!validatePhone(phone)) return setError("Vul een geldig telefoonnummer in (NL).");
    if (!consent) return setError("Geef toestemming voor contact.");

    // TODO: send to CRM/endpoint
    try { window.dataLayer?.push({ event: "lead_submit", method: "callback" }); } catch {}
    setSuccess(true);
    setTimeout(() => { setSuccess(false); onClose(); }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-2xl shadow-xl p-5 max-w-screen-md mx-auto">
        <div className="mx-auto max-w-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Laat je nummer achter</h3>
            <button onClick={onClose} className="text-neutral-500">Sluiten</button>
          </div>
          <p className="text-sm text-neutral-600 mt-1">Wij bellen je zo spoedig mogelijk terug.</p>
          <form onSubmit={onSubmit} className="mt-4 grid gap-3">
            <label className="grid gap-1 text-sm">
              <span>Naam</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-lg border border-neutral-300 px-3 py-2" placeholder="Voor- en achternaam" required />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Telefoon</span>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-lg border border-neutral-300 px-3 py-2" placeholder="Bijv. 06 1234 5678" inputMode="tel" required />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Voorkeursmoment</span>
              <select value={slot} onChange={(e) => setSlot(e.target.value)} className="rounded-lg border border-neutral-300 px-3 py-2">
                <option>Ochtend</option>
                <option>Middag</option>
                <option>Avond</option>
              </select>
            </label>
            <label className="flex items-start gap-2 text-sm mt-1">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" />
              <span>Ik geef toestemming om gebeld te worden en ga akkoord met de privacyverklaring.</span>
            </label>
            {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
            {success && <p className="text-sm text-green-600">Bedankt! We bellen je spoedig terug.</p>}
            <button type="submit" className="rounded-xl bg-[var(--brand)] text-white font-semibold px-4 py-3">Versturen</button>
          </form>
        </div>
      </div>
    </div>
  );
}