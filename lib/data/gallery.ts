/**
 * Gallery data - images for the gallery section.
 * Used by: GallerySection component
 */

export interface GalleryItem {
  /** Unique identifier */
  id: string
  /** Image URL (local or remote) */
  image: string
  /** Alt text for accessibility */
  alt: string
  /** Optional caption */
  caption?: string
}

export interface GalleryContent {
  /** Section title */
  title: string
  /** Optional subtitle */
  subtitle?: string
  /** Gallery items */
  items: GalleryItem[]
}

/**
 * Gallery content configuration.
 * Edit this to customize the gallery section.
 */
export const galleryContent: GalleryContent = {
  title: "Our Clinic",
  subtitle: "A modern, welcoming space designed for your recovery and comfort.",
  items: [
    {
      id: "gallery-1",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=800&fit=crop",
      alt: "Physiotherapist performing manual therapy treatment",
      caption: "Expert Manual Therapy",
    },
    {
      id: "gallery-2",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop",
      alt: "Sports rehabilitation session in our clinic",
      caption: "Sports Rehabilitation",
    },
    {
      id: "gallery-3",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=800&fit=crop",
      alt: "Modern physiotherapy treatment room",
      caption: "Modern Treatment Rooms",
    },
    {
      id: "gallery-4",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop",
      alt: "Dry needling treatment being performed",
      caption: "Dry Needling Therapy",
    },
    {
      id: "gallery-5",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=800&fit=crop",
      alt: "Physiotherapy exercise programme session",
      caption: "Therapeutic Exercise",
    },
    {
      id: "gallery-6",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=800&fit=crop",
      alt: "Welcoming reception area of our clinic",
      caption: "Welcoming Reception",
    },
  ],
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all gallery items.
 */
export function getAllGalleryItems(): GalleryItem[] {
  return galleryContent.items
}

/**
 * Get a subset of gallery items.
 */
export function getGalleryPreview(count: number = 4): GalleryItem[] {
  return galleryContent.items.slice(0, count)
}
