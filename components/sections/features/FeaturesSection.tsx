import {
  Users,
  ShieldCheck,
  FlaskConical,
  MapPin,
  CalendarCheck,
  ClipboardList,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

export interface FeaturesSectionProps {
  className?: string
}

/**
 * "Why Choose Us" features grid section.
 * Edit the features array below to customize for your business.
 */
export function FeaturesSection({ className }: FeaturesSectionProps) {
  const features: Feature[] = [
    {
      id: "expert-team",
      icon: <Users className="h-6 w-6 text-primary" aria-hidden="true" />,
      title: "Expert Team",
      description:
        "Our physiotherapists hold postgraduate qualifications and undergo continuous professional development to stay at the forefront of musculoskeletal care.",
    },
    {
      id: "medical-aid",
      icon: <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
      title: "Medical Aid Registered",
      description:
        "We are registered with all major South African medical aids including Discovery, Momentum, Bonitas, and Gems — so you can claim with confidence.",
    },
    {
      id: "evidence-based",
      icon: <FlaskConical className="h-6 w-6 text-primary" aria-hidden="true" />,
      title: "Evidence-Based Care",
      description:
        "Every treatment plan is grounded in the latest clinical research. We combine hands-on therapy with proven rehabilitation techniques for lasting results.",
    },
    {
      id: "location",
      icon: <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />,
      title: "Convenient Location",
      description:
        "Situated in Sandhurst, Johannesburg, our clinic is easily accessible from Sandton, Rosebank, Houghton, and surrounding northern suburbs.",
    },
    {
      id: "appointments",
      icon: <CalendarCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
      title: "Same-Week Appointments",
      description:
        "We understand that pain can't wait. We offer same-week and often same-day appointments so you can start your recovery without delay.",
    },
    {
      id: "personalised",
      icon: <ClipboardList className="h-6 w-6 text-primary" aria-hidden="true" />,
      title: "Personalised Treatment Plans",
      description:
        "No two patients are the same. We take time to understand your lifestyle, goals, and medical history before designing a plan tailored specifically to you.",
    },
  ]

  return (
    <SectionWrapper className={cn("bg-secondary/30", className)}>
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Why Johannesburg Chooses Vitality
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine clinical expertise, modern equipment, and genuine care to
            deliver outcomes that get you back to doing what you love.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
