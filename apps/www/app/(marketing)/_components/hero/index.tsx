"use client";
import { Spacer } from "@galleo/ui/components/base/spacer";
import { Section } from "../section";
import { HeroCTA } from "./cta";
import { HeroShowcase } from "./showcase";
import { HeroTitle } from "./title";

export function Hero() {
  return (
    <Section
      id="hero"
      className="flex flex-col items-center justify-center mx-auto max-w-screen-xl px-4 py-6 sm:py-10 md:py-14"
    >
      <div className="w-full max-w-3xl mx-auto text-center">
        <HeroTitle />
        <Spacer className="h-6" />
        <HeroCTA />
      </div>
      <Spacer className="h-8 md:h-12" />
      <HeroShowcase />
    </Section>
  );
}
