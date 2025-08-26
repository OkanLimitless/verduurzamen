"use client";

import { useState } from "react";
import Hero from "@/components/saas/Hero";
import BenefitCards from "@/components/saas/BenefitCards";
import SavingsCard from "@/components/saas/SavingsCard";
import Comparison from "@/components/saas/Comparison";
import Timeline from "@/components/saas/Timeline";
import Testimonials from "@/components/saas/Testimonials";
import FinancingBanner from "@/components/saas/FinancingBanner";
import StickyCallBar from "@/components/StickyCallBar";
import CallbackSheet from "@/components/CallbackSheet";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import Image from "next/image";

const TEL = "+3185XXXXXXX";

export default function ThuisbatterijLander() {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-4">
      <SchemaLocalBusiness />

      <div className="mt-2">
        <Hero
          title="Thuisbatterij — maximale onafhankelijkheid en lagere energierekening."
          subtitle="Sla je zonne-energie op, gebruik stroom op piekmomenten en word minder afhankelijk van energieleveranciers."
          tel={TEL}
        />
      </div>

      <BenefitCards />
      <SavingsCard />
      <Comparison />
      <Timeline />

      <section className="mt-8 grid gap-3">
        <div className="rounded-3xl overflow-hidden shadow-lg relative h-48">
          <Image src="/hero.svg" alt="Tevreden klant met thuisbatterij" fill sizes="100vw" className="object-cover" />
        </div>
      </section>

      <Testimonials />
      <FinancingBanner tel={TEL} />

      <StickyCallBar tel={TEL} />
      <CallbackSheet open={open} onClose={() => setOpen(false)} />
    </div>
  );
}