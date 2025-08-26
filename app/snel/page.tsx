import type { Metadata } from "next";
import SnelLander from "@/components/landers/SnelLander";

export const metadata: Metadata = {
  title: "Binnen 3 weken geïnstalleerd",
  description: "Landelijke dekking en erkende installateurs. Binnen 3 weken geïnstalleerd, klaar voor de winter.",
  alternates: { canonical: "/snel" },
};

export default function Page() {
  return <SnelLander />;
}