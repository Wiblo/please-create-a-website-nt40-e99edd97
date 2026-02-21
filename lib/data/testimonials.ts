/**
 * Testimonials data - customer reviews and ratings.
 * Used by: TestimonialsSection component (includes Review JSON-LD schema)
 *
 * The TestimonialsSection component automatically generates JSON-LD structured data
 * from this array, so search engines can display star ratings in results.
 */

export interface Testimonial {
  /** Unique identifier */
  id: string
  /** Customer's name */
  name: string
  /** The testimonial text/quote */
  text: string
  /** Rating out of 5 (e.g., 5, 4.5, 4) */
  rating: number
  /** Optional: customer's role, title, or location */
  role?: string
  /** Optional: customer's photo URL */
  avatar?: string
  /** Optional: date of the review */
  date?: string
  /** Optional: source of the review */
  source?: "google" | "facebook" | "yelp" | "website"
  /** Optional: whether this is a verified Google review */
  isGoogleVerified?: boolean
}

/** Google Business rating info */
export interface GoogleRating {
  /** Average rating (e.g., 4.8) */
  average: number
  /** Total number of reviews */
  count: number
  /** URL to Google Business page */
  url: string
}

/**
 * Customer testimonials.
 * Edit this array to add, remove, or modify testimonials.
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Thabo M.",
    text: "After months of lower back pain from sitting at my desk all day, Vitality Physiotherapy gave me my life back. The team is professional, knowledgeable, and genuinely caring. Three sessions in and the pain is almost completely gone.",
    rating: 5,
    role: "Software Engineer, Sandton",
    source: "google",
    isGoogleVerified: true,
    date: "2 weeks ago",
  },
  {
    id: "2",
    name: "Priya N.",
    text: "I came in with a serious knee injury after a trail run. The sports rehab programme they put me on was thorough and progressive — I was back running within 10 weeks. Absolutely brilliant service.",
    rating: 5,
    role: "Trail Runner",
    source: "google",
    isGoogleVerified: true,
    date: "1 month ago",
  },
  {
    id: "3",
    name: "Johan V.",
    text: "The dry needling treatment worked wonders for my chronic shoulder tension. I had tried everything and nothing helped until I came to Vitality. Highly recommend the team here — they really know their craft.",
    rating: 5,
    role: "Marketing Director",
    source: "google",
    isGoogleVerified: true,
    date: "1 month ago",
  },
  {
    id: "4",
    name: "Nomsa D.",
    text: "Outstanding post-surgery rehabilitation after my knee replacement. The physios were patient, encouraging, and adapted my programme as I progressed. The clinic is modern, clean, and easy to get to in Sandton.",
    rating: 5,
    role: "Retired Teacher",
    source: "google",
    isGoogleVerified: true,
    date: "2 months ago",
  },
  {
    id: "5",
    name: "Ryan K.",
    text: "I had terrible vertigo that was affecting my work and daily life. After two sessions of vestibular rehabilitation, I felt dramatically better. I only wish I had come sooner. The staff are incredibly knowledgeable.",
    rating: 5,
    role: "Accountant, Rosebank",
    source: "google",
    isGoogleVerified: true,
    date: "3 months ago",
  },
  {
    id: "6",
    name: "Fatima A.",
    text: "Very impressed with the level of care at Vitality. They took the time to properly assess my neck pain and created a treatment plan that actually addressed the root cause. No more waking up with stiffness every morning!",
    rating: 4,
    role: "Teacher",
    source: "google",
    isGoogleVerified: true,
    date: "3 months ago",
  },
]

/**
 * Google Business rating info.
 * Update this with your actual Google Business data.
 */
export const googleRating: GoogleRating = {
  average: 4.9,
  count: 214,
  url: "https://g.page/r/vitality-physiotherapy-johannesburg",
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all testimonials.
 */
export function getAllTestimonials(): Testimonial[] {
  return testimonials
}

/**
 * Get a subset of testimonials (e.g., for homepage).
 */
export function getTestimonialsPreview(count: number = 3): Testimonial[] {
  return testimonials.slice(0, count)
}

/**
 * Get only Google-verified reviews.
 */
export function getGoogleReviews(): Testimonial[] {
  return testimonials.filter((t) => t.source === "google" || t.isGoogleVerified)
}

/**
 * Calculate average rating from all testimonials.
 * Used for AggregateRating JSON-LD schema.
 */
export function getAverageRating(): number {
  if (testimonials.length === 0) return 0
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0)
  return Math.round((total / testimonials.length) * 10) / 10 // Round to 1 decimal
}

/**
 * Get total number of testimonials.
 * Used for AggregateRating JSON-LD schema.
 */
export function getTestimonialCount(): number {
  return testimonials.length
}
