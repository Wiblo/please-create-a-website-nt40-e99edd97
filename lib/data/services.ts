/**
 * Services data - defines all services offered by the business.
 * Used by: FeaturedServices, ServicesGrid, ServiceCard, /services/[slug] pages
 *
 * This data drives:
 * - Service cards on homepage (FeaturedServices)
 * - Services listing page (ServicesGrid)
 * - Individual service detail pages (ServiceDetailSection)
 * - Service JSON-LD schema
 */

export interface Service {
  /** URL-friendly identifier (e.g., "deep-tissue-massage") */
  slug: string
  /** Display name */
  name: string
  /** Short description for cards (1-2 sentences) */
  shortDescription: string
  /** Full description for detail page (can be multiple paragraphs) */
  description: string
  /** Lucide icon name (e.g., "Heart", "Zap", "Clock") */
  icon?: string
  /** Image path or URL */
  image?: string
  /** Alt text for image */
  imageAlt?: string
  /** Show on homepage featured section */
  featured?: boolean
  /** Duration (e.g., "60 minutes") */
  duration?: string
  /** Price (e.g., "$80" or "From $50") */
  price?: string
  /** List of benefits/features */
  benefits?: string[]
  /** Who this service is ideal for */
  idealFor?: string[]
}

/**
 * All services offered by the business.
 * Edit this array to add, remove, or modify services.
 */
export const services: Service[] = [
  {
    slug: "manual-therapy",
    name: "Manual Therapy",
    shortDescription:
      "Hands-on treatment to relieve pain, restore mobility, and improve joint function using targeted manipulation and mobilisation techniques.",
    description:
      "Manual therapy is a specialised form of physiotherapy that uses skilled, hands-on techniques to assess and treat musculoskeletal pain and disability. Our experienced physiotherapists apply joint mobilisation, manipulation, and soft tissue techniques to reduce pain and restore normal movement.\n\nThis treatment is highly effective for conditions such as stiff joints, muscle tightness, and nerve pain. Each session is tailored to your specific needs, ensuring a safe and effective recovery pathway.",
    icon: "Hands",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    imageAlt: "Physiotherapist performing manual therapy on a patient",
    featured: true,
    duration: "45 min",
    price: "From R750",
    benefits: [
      "Reduces joint pain and stiffness",
      "Restores normal range of motion",
      "Improves muscle flexibility and function",
      "Accelerates the body's natural healing process",
    ],
    idealFor: [
      "Chronic back and neck pain",
      "Joint stiffness after injury",
      "Post-surgical recovery",
      "Arthritis and degenerative conditions",
    ],
  },
  {
    slug: "sports-rehabilitation",
    name: "Sports Rehabilitation",
    shortDescription:
      "Specialised rehabilitation programmes designed to get athletes and active individuals back to peak performance after injury.",
    description:
      "Our sports rehabilitation service is designed for athletes of all levels — from weekend warriors to professional competitors. We combine evidence-based physiotherapy with sport-specific training to ensure a full recovery and prevent future injuries.\n\nUsing advanced assessment tools and targeted rehabilitation protocols, we address the root cause of your injury and build a comprehensive programme that restores strength, endurance, and confidence.",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    imageAlt: "Sports rehabilitation session with physiotherapist and athlete",
    featured: true,
    duration: "60 min",
    price: "From R850",
    benefits: [
      "Sport-specific recovery protocols",
      "Injury prevention strategies",
      "Performance optimisation",
      "Return-to-sport clearance assessment",
    ],
    idealFor: [
      "Runners with knee or hip injuries",
      "Rugby and soccer players",
      "Gym-related muscle strains",
      "Swimmers with shoulder injuries",
    ],
  },
  {
    slug: "dry-needling",
    name: "Dry Needling",
    shortDescription:
      "A highly effective technique targeting trigger points in muscles to relieve pain, reduce tension, and restore normal muscle function.",
    description:
      "Dry needling involves the insertion of fine, sterile needles into trigger points — tight knots within muscle tissue that cause pain and restrict movement. This technique stimulates the body's natural healing response, releasing muscle tension and reducing pain.\n\nAlthough similar in appearance to acupuncture, dry needling is based on Western anatomical and neurophysiological principles. It is particularly effective for chronic muscle pain, headaches, and movement restrictions.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop",
    imageAlt: "Dry needling treatment being performed by physiotherapist",
    featured: true,
    duration: "30 min",
    price: "From R600",
    benefits: [
      "Rapid relief from chronic muscle pain",
      "Reduces muscle tension and spasms",
      "Improves blood flow to targeted areas",
      "Can be combined with other physiotherapy treatments",
    ],
    idealFor: [
      "Chronic neck and shoulder tension",
      "Tension headaches and migraines",
      "Fibromyalgia",
      "Myofascial pain syndrome",
    ],
  },
  {
    slug: "post-surgical-rehabilitation",
    name: "Post-Surgical Rehabilitation",
    shortDescription:
      "Structured rehabilitation programmes following surgery to restore strength, mobility, and function as safely and efficiently as possible.",
    description:
      "Recovering from surgery requires a carefully structured approach. Our post-surgical rehabilitation service provides personalised programmes designed around your specific procedure, ensuring you regain full function while minimising the risk of complications.\n\nWe work closely with your surgeon and medical team to follow the most appropriate protocol for your recovery. From initial wound care and gentle mobilisation through to advanced strengthening, we guide you every step of the way.",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    imageAlt: "Post-surgical rehabilitation exercises with physiotherapist",
    featured: false,
    duration: "60 min",
    price: "From R850",
    benefits: [
      "Structured recovery milestones",
      "Scar tissue management",
      "Progressive strength and mobility exercises",
      "Medical aid billing support",
    ],
    idealFor: [
      "Knee or hip replacement recovery",
      "ACL reconstruction",
      "Rotator cuff surgery",
      "Spinal surgery aftercare",
    ],
  },
  {
    slug: "back-and-neck-pain",
    name: "Back & Neck Pain Treatment",
    shortDescription:
      "Targeted assessment and treatment for acute and chronic back and neck pain, helping you find lasting relief and return to daily life.",
    description:
      "Back and neck pain are among the most common reasons people seek physiotherapy. Our practitioners use a combination of hands-on treatment, therapeutic exercise, and patient education to address the underlying cause — not just the symptoms.\n\nWhether your pain is from a recent injury, poor posture, or a long-standing condition, we develop a tailored treatment plan that fits your lifestyle and gets you back to doing what you love.",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
    imageAlt: "Physiotherapy treatment for back and neck pain",
    featured: false,
    duration: "45 min",
    price: "From R750",
    benefits: [
      "Root-cause assessment and diagnosis",
      "Pain relief without medication",
      "Postural correction and ergonomic advice",
      "Long-term prevention strategies",
    ],
    idealFor: [
      "Office workers with desk-related pain",
      "Sciatica and nerve pain",
      "Disc bulges and herniations",
      "Whiplash injuries",
    ],
  },
  {
    slug: "vertigo-and-balance",
    name: "Vertigo & Balance Rehabilitation",
    shortDescription:
      "Specialised vestibular rehabilitation to treat dizziness, vertigo, and balance disorders so you can move confidently again.",
    description:
      "Vertigo and balance disorders can be debilitating, affecting your ability to perform everyday tasks safely. Our vestibular rehabilitation programme uses evidence-based techniques, including the Epley manoeuvre and vestibular exercises, to address the source of your dizziness.\n\nOur physiotherapists are trained in the assessment and management of conditions such as BPPV (benign paroxysmal positional vertigo), labyrinthitis, and age-related balance decline. Most patients experience significant improvement within a few sessions.",
    icon: "Star",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    imageAlt: "Balance rehabilitation exercises with physiotherapist",
    featured: false,
    duration: "45 min",
    price: "From R750",
    benefits: [
      "Rapid resolution of BPPV with repositioning manoeuvres",
      "Improved balance and coordination",
      "Reduced fall risk",
      "Customised home exercise programme",
    ],
    idealFor: [
      "BPPV (spinning sensation when moving head)",
      "Chronic dizziness and unsteadiness",
      "Age-related balance decline",
      "Post-concussion rehabilitation",
    ],
  },
]

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get a single service by its slug.
 * Returns undefined if not found.
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get all services marked as featured.
 * Used for homepage featured services section.
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get all services.
 * Used for services listing page.
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get all service slugs.
 * Used for generateStaticParams in dynamic routes.
 */
export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
