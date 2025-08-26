import type { Metadata } from "next";
import ThuisbatterijLander from "@/components/landers/ThuisbatterijLander";

export const metadata: Metadata = {
  title: "Thuisbatterij — onafhankelijker en voordeliger",
  description: "Thuisbatterij: sla zonne-energie op, bespaar op piekmomenten en word minder afhankelijk. Subsidie- en financieringsmogelijkheden.",
  alternates: { canonical: "/thuisbatterij" },
};

export default function Page() {
  return <ThuisbatterijLander />;
}