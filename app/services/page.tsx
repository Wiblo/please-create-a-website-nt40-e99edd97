import type { Metadata } from "next"
import { ServicesHero } from "@/components/sections/hero/ServicesHero"
import { ServicesGrid } from "@/components/sections/services/ServicesGrid"
import { CTASection } from "@/components/sections/cta/CTASection"

export const metadata: Metadata = {
  title: "Physiotherapy Services | Vitality Physiotherapy Johannesburg",
  description:
    "Explore our comprehensive physiotherapy services in Sandhurst, Johannesburg — from manual therapy and sports rehabilitation to dry needling and vertigo treatment.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <CTASection />
    </>
  )
}
