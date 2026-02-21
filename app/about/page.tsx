import type { Metadata } from "next"
import { businessInfo } from "@/lib/data/business-info"
import { AboutPageHero } from "@/components/sections/about/AboutPageHero"
import { AboutFullSection } from "@/components/sections/about/AboutFullSection"
import { AboutFeatures } from "@/components/sections/features/AboutFeatures"
import { GallerySection } from "@/components/sections/gallery/GallerySection"
import { CTASection } from "@/components/sections/cta/CTASection"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${businessInfo.name} — Johannesburg's trusted physiotherapy clinic in Sandhurst. Meet our HPCSA-registered team and discover our evidence-based approach to restoring movement and rebuilding lives.`,
  openGraph: {
    title: `About Us | ${businessInfo.name}`,
    description: `Learn about ${businessInfo.name} — Johannesburg's trusted physiotherapy clinic in Sandhurst. Meet our HPCSA-registered team and discover our evidence-based approach to restoring movement and rebuilding lives.`,
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Page Hero — title, subtitle, and brand values */}
      <AboutPageHero />

      {/* Our Story & Our Team — detailed about section */}
      <AboutFullSection />

      {/* Why Choose Us — evidence-based treatment, personalised care, prevention */}
      <AboutFeatures className="bg-secondary/20" />

      {/* Clinic Gallery */}
      <GallerySection />

      {/* Book First Appointment CTA */}
      <CTASection />
    </>
  )
}
