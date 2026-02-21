import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

export interface AboutPreviewProps {
  className?: string
}

/**
 * Homepage about preview section with image on left and text on right.
 * Brief introduction with link to full about page.
 * Edit the content below to customize for your business.
 */
export function AboutPreview({ className }: AboutPreviewProps) {
  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-20">
          {/* Image Container */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=800&fit=crop"
                alt="Physiotherapist working with a patient in a modern treatment room"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 400px, 500px"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-1/2 md:px-8 lg:w-7/12">
            <div className="max-w-xl">
              {/* Title */}
              <h2 className="font-heading mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {"Johannesburg's Trusted Physiotherapy Clinic"}
              </h2>

              {/* Description */}
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                Based in Johannesburg, Proactive Therapy brings together a team of highly
                qualified physiotherapists dedicated to evidence-based care. Whether you are
                recovering from surgery, managing chronic pain, or bouncing back from a sports
                injury, our expert team creates personalised treatment plans designed around
                your goals.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Our modern facility is equipped with the latest rehabilitation technology,
                and we are registered with all major medical aids — making quality physio
                accessible and convenient for Johannesburg residents.
              </p>

              {/* Link to About Page */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Meet Our Team
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
