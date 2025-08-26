import type { Metadata } from "next";
import FinancieringLander from "@/components/landers/FinancieringLander";

export const metadata: Metadata = {
  title: "Financiering zonder aanbetaling",
  description: "Verduurzaam je woning zonder investering vooraf. 0% aanbetaling mogelijk, aantrekkelijke financiering en directe subsidiecheck.",
  alternates: { canonical: "/financiering" },
};

export default function Page() {
  return <FinancieringLander />;
}