import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

export interface AboutPageHeroProps {
  className?: string
}

/**
 * Page hero header for the About page.
 * Displays the page title, subtitle, and a values badge row.
 * Customized for Vitality Physiotherapy.
 */
export function AboutPageHero({ className }: AboutPageHeroProps) {
  const values = [
    "Excellence",
    "Compassion",
    "Evidence-Based",
    "Patient-Centered",
  ]

  return (
    <SectionWrapper
      className={cn("bg-secondary/30 pb-12 pt-16 md:pb-16 md:pt-24", className)}
    >
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Sandhurst, Johannesburg
          </p>

          {/* Main Heading */}
          <h1 className="font-heading max-w-3xl text-balance text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            About Vitality Physiotherapy
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Expert Care. Real Results.{" "}
            <span className="font-semibold text-foreground">
              Johannesburg&apos;s Trusted Physio Clinic.
            </span>
          </p>

          {/* Values Badges */}
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-primary/20 bg-background px-4 py-1.5 text-sm font-medium text-primary"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
