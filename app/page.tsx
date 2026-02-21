import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero/HeroSection"
import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
import { AboutPreview } from "@/components/sections/about/AboutPreview"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { TestimonialsSection } from "@/components/sections/testimonials/TestimonialsSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { FAQSection } from "@/components/sections/faq/FAQSection"
import { businessInfo } from "@/lib/data/business-info"

export const metadata: Metadata = {
  title: `${businessInfo.name} | Physiotherapy in Johannesburg`,
  description:
    "Proactive Therapy in Johannesburg. Expert treatment for sports injuries, back pain, post-surgical rehabilitation and more. Medical aid registered. Book your appointment today.",
  keywords: [
    "physiotherapy Johannesburg",
    "physiotherapist Sandton",
    "sports injury treatment Johannesburg",
    "back pain physiotherapy",
    "post-surgical rehabilitation Johannesburg",
    "Johannesburg physiotherapy clinic",
    "medical aid physiotherapist",
  ],
  openGraph: {
    title: `${businessInfo.name} — Restoring Movement, Rebuilding Lives`,
    description:
      "Expert physiotherapy in Johannesburg. We treat sports injuries, back pain, post-surgical recovery, and more. Medical aid registered.",
    url: businessInfo.url,
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: businessInfo.url,
  },
}

/**
 * HOME PAGE — Proactive Therapy
 *
 * Sections:
 * 1. HeroSection          — Headline + CTA with Unsplash physio image
 * 2. FeaturedServices     — Carousel of featured services (from lib/data/services.ts)
 * 3. AboutPreview         — Intro to the clinic with link to /about
 * 4. FeaturesSection      — "Why Choose Us" grid (6 features)
 * 5. TestimonialsSection  — Patient reviews (from lib/data/testimonials.ts)
 * 6. CTASection           — "Ready to Start Your Recovery?" with image background
 * 7. LocationSection      — Map, address, hours (from lib/data/business-info.ts)
 * 8. FAQSection           — Common questions (from lib/data/faqs.ts)
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturedServices
        title="Our Physiotherapy Services"
        subtitle="From acute injuries to chronic conditions, we offer comprehensive physiotherapy care tailored to your needs."
      />

      <AboutPreview />

      <FeaturesSection />

      <TestimonialsSection
        title="What Our Patients Say"
        subtitle="Hear from Johannesburg patients who have experienced the Proactive Therapy difference."
      />

      <CTASection />

      <LocationSection
        title="Visit Our Clinic"
        bookingText="Book Now"
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about physiotherapy at Proactive Therapy. Still have questions? Give us a call."
      />
    </>
  )
}
