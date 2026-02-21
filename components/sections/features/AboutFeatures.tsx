import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: "left" | "right"
}

export interface FeaturesSectionProps {
  className?: string
}

/**
 * About page features section — Why Choose Proactive Therapy.
 * Customized for Proactive Therapy, Johannesburg.
 */
export function AboutFeatures({ className }: FeaturesSectionProps) {
  const blocks: FeatureBlock[] = [
    {
      id: "value-1",
      title: "Evidence-Based Treatment",
      description:
        "Every treatment plan at Proactive Therapy is grounded in the latest clinical research and best practice. We don't rely on outdated methods — we use techniques that are proven to work. This means faster recovery times, better outcomes, and care you can trust. Our physiotherapists continuously update their knowledge to bring you the gold standard in physiotherapy.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      imageAlt: "Physiotherapist applying therapeutic treatment",
      imagePosition: "right",
    },
    {
      id: "value-2",
      title: "Personalised Care Plans",
      description:
        "No two patients are the same, and neither are their treatment plans. We take a thorough look at your full history, movement patterns, lifestyle, and goals before recommending any treatment. Your plan is built entirely around you — not a generic template. As you progress, we adjust your programme to keep you moving forward.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      imageAlt: "One-on-one physiotherapy consultation",
      imagePosition: "left",
    },
    {
      id: "value-3",
      title: "Education & Long-Term Prevention",
      description:
        "We believe that an informed patient heals faster and stays healthier. That's why we invest time in educating you about your condition, what's causing your pain, and how to prevent it from returning. We equip you with exercises, posture tips, and lifestyle advice so you leave our clinic with the tools to look after yourself long after treatment ends.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      imageAlt: "Physiotherapist guiding a patient through rehabilitation exercises",
      imagePosition: "right",
    },
  ]

  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        {blocks.map((block, index) => (
          <div key={block.id} className={cn(index > 0 && "mt-20 md:mt-32")}>
            <div
              className={cn(
                "flex flex-col items-center gap-10 md:gap-20 xl:gap-[140px]",
                block.imagePosition === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              )}
            >
              {/* Desktop Image */}
              <div className="relative hidden aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:flex md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px]">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
                />
              </div>

              {/* Content */}
              <div className="flex w-full flex-col gap-8">
                {/* Heading */}
                <div className="flex w-full justify-center md:justify-start">
                  <h2 className="font-heading text-balance text-center text-3xl font-bold text-foreground md:text-left md:text-4xl lg:text-5xl">
                    {block.title}
                  </h2>
                </div>

                {/* Mobile Image */}
                <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:hidden">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                {/* Description */}
                <div className="flex w-full flex-col gap-8">
                  <p className="text-base font-medium leading-relaxed text-muted-foreground">
                    {block.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </SectionWrapper>
  )
}
