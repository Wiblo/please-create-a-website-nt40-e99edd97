/**
 * Central business information - single source of truth.
 * Update this file to change business details across the entire site.
 *
 * Used by: Navbar, Footer, JSON-LD schemas, contact pages, metadata
 */
export const businessInfo = {
  // Core Business Details
  name: "Vitality Physiotherapy",
  tagline: "Restoring Movement, Rebuilding Lives",
  description:
    "Vitality Physiotherapy is Johannesburg's trusted physiotherapy clinic, offering expert treatment for sports injuries, back and neck pain, post-surgical rehabilitation, and more. We help you move better and live pain-free.",

  // Contact Information
  phone: "+27 11 884 5500",
  phoneSecondary: "+27 82 456 7890",
  email: "info@vitalityphysio.co.za",

  // Physical Location
  address: {
    street: "14 Rivonia Road",
    area: "Sandhurst",
    city: "Johannesburg",
    state: "Gauteng",
    zip: "2196",
    country: "ZA",
  },

  // Coordinates for maps (optional - set to 0 if unknown)
  geo: {
    latitude: -26.1076,
    longitude: 28.0567,
  },

  // Google Maps configuration
  maps: {
    /** Google Maps Place ID (find at: https://developers.google.com/maps/documentation/places/web-service/place-id) */
    placeId: "",
    /** Display name for the location on maps */
    locationName: "Vitality Physiotherapy Johannesburg",
    /** Google Maps API key (optional, for embed without place ID) */
    apiKey: "",
  },

  // Business Hours
  hours: {
    monday: "7:30 AM - 6:00 PM",
    tuesday: "7:30 AM - 6:00 PM",
    wednesday: "7:30 AM - 6:00 PM",
    thursday: "7:30 AM - 6:00 PM",
    friday: "7:30 AM - 5:00 PM",
    saturday: "8:00 AM - 1:00 PM",
    sunday: "Closed",
  } as Record<string, string>,

  // Timezone for open/closed status calculation
  timezone: "Africa/Johannesburg",

  // Social Media (leave empty string if not used)
  social: {
    facebook: "https://facebook.com/vitalityphysioJHB",
    instagram: "https://instagram.com/vitalityphysioJHB",
    twitter: "",
    linkedin: "https://linkedin.com/company/vitality-physiotherapy",
    youtube: "",
  },

  // Website
  url: "https://vitalityphysio.co.za",
  logo: "/logo.png",

  // Booking (leave empty string if no booking system)
  bookingUrl: "/contact",
  showBookingButton: true, // Set to false to hide booking buttons in navbar/footer

  // Optional: Price range for schema.org ($, $$, $$$, $$$$)
  priceRange: "$$",
}

// Type export for use in other files
export type BusinessInfo = typeof businessInfo

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get Google Maps embed URL using Place ID or coordinates
 */
export function getGoogleMapsEmbedUrl(): string {
  const { maps, geo, address } = businessInfo

  // Prefer Place ID if available
  if (maps.placeId) {
    return `https://www.google.com/maps/embed/v1/place?key=${maps.apiKey || "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}&q=place_id:${maps.placeId}`
  }

  // Fall back to coordinates
  if (geo.latitude && geo.longitude) {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${geo.longitude}!3d${geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus`
  }

  // Fall back to address search
  const addressString = `${address.street}, ${address.area}, ${address.city}, ${address.state} ${address.zip}`
  return `https://www.google.com/maps/embed/v1/place?key=${maps.apiKey || "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}&q=${encodeURIComponent(addressString)}`
}

/**
 * Get Google Maps directions URL
 */
export function getGoogleMapsDirectionsUrl(): string {
  const { maps, address } = businessInfo

  if (maps.placeId) {
    return `https://www.google.com/maps/dir/?api=1&destination_place_id=${maps.placeId}`
  }

  const addressString = `${address.street}, ${address.area}, ${address.city}, ${address.state} ${address.zip}`
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressString)}`
}

/**
 * Get tel: link for phone number
 */
export function getPhoneLink(phone?: string): string {
  const phoneNumber = phone || businessInfo.phone
  return `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`
}

/**
 * Get mailto: link for email
 */
export function getEmailLink(): string {
  return `mailto:${businessInfo.email}`
}

/**
 * Get formatted full address string
 */
export function getFullAddress(): string {
  const { address } = businessInfo
  const parts = [address.street]
  if (address.area) parts.push(address.area)
  parts.push(`${address.city}, ${address.state} ${address.zip}`)
  return parts.join(", ")
}
