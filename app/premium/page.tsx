import type { Metadata } from "next";
import PremiumLander from "@/components/landers/PremiumLander";

export const metadata: Metadata = {
  title: "A-merk kwaliteit en 25 jaar garantie",
  description: "Verduurzamen met A-merk kwaliteit en 25 jaar garantie. Deskundig advies, vakkundige montage, betrouwbare service.",
  alternates: { canonical: "/premium" },
};

export default function Page() {
  return <PremiumLander />;
}