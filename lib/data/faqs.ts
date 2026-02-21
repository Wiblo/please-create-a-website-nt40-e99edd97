/**
 * FAQ data - frequently asked questions and answers.
 * Used by: FAQSection component (includes FAQPage JSON-LD schema)
 *
 * The FAQSection component automatically generates JSON-LD structured data
 * from this array, so search engines can display rich FAQ results.
 */

export interface FAQ {
  /** Unique identifier for accordion state */
  id: string
  /** The question being asked */
  question: string
  /** The answer to the question */
  answer: string
}

/**
 * Frequently asked questions.
 * Edit this array to add, remove, or modify FAQs.
 */
export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Do I need a doctor's referral to see a physiotherapist?",
    answer:
      "No, you do not need a referral to see us. Physiotherapists are primary healthcare practitioners, which means you can book directly with us without seeing a GP first. However, if you are claiming through medical aid, some plans do require a referral, so it's worth checking with your scheme beforehand.",
  },
  {
    id: "faq-2",
    question: "Does medical aid cover physiotherapy?",
    answer:
      "Most South African medical aid schemes cover physiotherapy, though the amount of cover and number of sessions allowed varies by plan. We are registered with all major medical aids. We recommend contacting your medical aid to confirm your benefits before your first appointment. We can assist with submitting claims on your behalf.",
  },
  {
    id: "faq-3",
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring your medical aid card (if applicable), any relevant X-rays, MRI scans, or doctor's reports, and wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For lower limb or back assessments, shorts are recommended. If you have had previous physiotherapy, any notes from that treatment are also helpful.",
  },
  {
    id: "faq-4",
    question: "How long is a typical physiotherapy session?",
    answer:
      "Your initial assessment and first treatment session is usually 60 minutes. This allows us to thoroughly assess your condition, discuss your goals, and begin treatment. Follow-up sessions are typically 45 minutes. Some specialised treatments, such as dry needling only or a short exercise check-in, may be shorter.",
  },
  {
    id: "faq-5",
    question: "How many sessions will I need?",
    answer:
      "This depends on your condition, its severity, and how your body responds to treatment. Acute injuries may resolve in 3–6 sessions, while chronic or post-surgical conditions can take longer. After your initial assessment, we will give you a realistic estimate and review your progress regularly. Our goal is always to get you better as efficiently as possible.",
  },
  {
    id: "faq-6",
    question: "What conditions do you treat?",
    answer:
      "We treat a wide range of musculoskeletal and neurological conditions including back and neck pain, sports injuries, post-surgical rehabilitation, joint pain, headaches, vertigo and balance disorders, sciatica, muscle strains and ligament sprains, and much more. If you are unsure whether we can help your condition, call us and we will advise you.",
  },
]

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all FAQs.
 */
export function getAllFAQs(): FAQ[] {
  return faqs
}

/**
 * Get a subset of FAQs (e.g., for homepage preview).
 */
export function getFAQsPreview(count: number = 3): FAQ[] {
  return faqs.slice(0, count)
}
