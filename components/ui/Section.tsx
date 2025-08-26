import { ReactNode } from "react";

export default function Section({ title, subtitle, children, className = "" }: { title?: string; subtitle?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`mt-6 ${className}`}>
      {title && (
        <header className="mb-3">
          <h3 className="text-lg font-bold">{title}</h3>
          {subtitle && <p className="text-sm text-neutral-600">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}