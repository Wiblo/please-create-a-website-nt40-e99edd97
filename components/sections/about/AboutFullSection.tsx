import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

export interface AboutFullSectionProps {
  className?: string
}

/**
 * Full about section for the dedicated about page.
 * Customized for Vitality Physiotherapy — Sandhurst, Johannesburg.
 */
export function AboutFullSection({ className }: AboutFullSectionProps) {
  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        {/* Our Story */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20 xl:gap-[140px]">
          {/* Desktop Image */}
          <div className="relative hidden aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:flex md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
              alt="Physiotherapist providing hands-on treatment to a patient"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex w-full flex-col gap-8">
            {/* Heading */}
            <div className="flex w-full justify-center md:justify-start">
              <h2 className="font-heading text-balance text-center text-3xl font-bold text-foreground md:text-left md:text-4xl lg:text-5xl">
                Our Story
              </h2>
            </div>

            {/* Mobile Image */}
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:hidden">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Physiotherapist providing hands-on treatment to a patient"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Paragraphs */}
            <div className="flex w-full flex-col gap-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Vitality Physiotherapy was founded with a clear purpose: to bring
                world-class physiotherapy to the heart of Johannesburg. Our modern
                clinic in Sandhurst serves patients across Johannesburg North,
                Sandton, Rosebank, and the surrounding northern suburbs.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We believe that expert physiotherapy should be accessible,
                evidence-based, and genuinely focused on you — not just your
                symptoms. From your very first appointment, we take the time to
                understand your body, your lifestyle, and your goals so we can
                build a treatment plan that actually works.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Whether you&apos;re recovering from a sports injury, managing
                chronic pain, or rehabilitating after surgery, our team is here to
                guide you every step of the way — from your first session all the
                way back to full, pain-free movement.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mt-20 flex flex-col items-center gap-10 md:mt-32 md:flex-row-reverse md:gap-20 xl:gap-[140px]">
          {/* Desktop Image */}
          <div className="relative hidden aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:flex md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
              alt="Professional physiotherapy team consultation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
            />
          </div>

          {/* Content */}
          <div className="flex w-full flex-col gap-8">
            <div className="flex w-full justify-center md:justify-start">
              <h2 className="font-heading text-balance text-center text-3xl font-bold text-foreground md:text-left md:text-4xl lg:text-5xl">
                Our Team
              </h2>
            </div>

            {/* Mobile Image */}
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:hidden">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
                alt="Professional physiotherapy team consultation"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <div className="flex w-full flex-col gap-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our physiotherapists are highly qualified, experienced clinicians
                registered with both the{" "}
                <span className="font-semibold text-foreground">
                  Health Professions Council of South Africa (HPCSA)
                </span>{" "}
                and the{" "}
                <span className="font-semibold text-foreground">
                  South African Society of Physiotherapy (SASP)
                </span>
                . You can trust that your care meets the highest professional and
                ethical standards in South African healthcare.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We are committed to ongoing professional development — regularly
                attending workshops, courses, and conferences to stay at the
                cutting edge of physiotherapy practice. When you come to Vitality,
                you benefit from the latest evidence-based techniques and
                approaches.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond credentials, our team genuinely cares. We take pride in
                building real relationships with our patients — understanding that
                recovery is a journey, and we&apos;re here to walk it with you.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
