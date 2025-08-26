import type { Metadata } from "next";
import SubsidieLander from "@/components/landers/SubsidieLander";

export const metadata: Metadata = {
  title: "Maximaal subsidievoordeel",
  description: "Maximaal profiteren van subsidies en salderingsregeling. Wij regelen de aanvraag voor jou en rekenen de terugverdientijd door.",
  alternates: { canonical: "/subsidie" },
};

export default function Page() {
  return <SubsidieLander />;
}