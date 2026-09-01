/**
 * hotels.data.ts
 * -------------------------------------------------------
 * Single source of truth for all hotel listings.
 *
 * To add a new hotel: add one object to the hotels array.
 *
 * Photos:
 *   - Drop images into public/images/hotels/<slug>/
 *   - List the exact filenames in the `photos` array.
 *   - The first entry is used as the card cover image.
 *   - Any filename is supported (jpg, jpeg, png, webp…).
 * -------------------------------------------------------
 */

export interface Hotel {
  /** URL-safe folder name under public/images/hotels/ */
  slug: string;
  name: string;
  /** Short 1-2 line description shown on the card */
  description: string;
  /** Category badge shown on the card (e.g. "3 Star", "Budget") */
  category: string;
  /** Searchable tags shown as chips on the card */
  tags: string[];
  /**
   * Exact filenames of photos inside public/images/hotels/<slug>/
   * First item = card cover. Add as many as you like.
   * If empty, a generic fallback image is shown.
   */
  photos?: string[];
  /** Set to true for placeholder hotels */
  isPlaceholder?: boolean;
}

export const hotels: Hotel[] = [
  // ─────────────────────────────────────────────────────────
  // REAL HOTELS
  // ─────────────────────────────────────────────────────────
  {
    slug: "townhouseamro",
    name: "Town House Amro",
    description:
      "A well-known, comfortable stay in Katra offering modern amenities at affordable rates — ideal for pilgrims and families.",
    category: "Deluxe",
    tags: ["Deluxe", "Family Stay", "Vaishno Devi Pilgrimage"],
  },
  {
    slug: "triple-s",
    name: "Triple S Hotel",
    description:
      "A popular choice among Vaishno Devi pilgrims, Triple S provides clean rooms and convenient access to Katra town.",
    category: "Standard",
    tags: ["Standard", "Near Katra Market", "Vaishno Devi Pilgrimage"],
  },
  {
    slug: "bhavani",
    name: "Hotel Bhavani",
    description:
      "Named after the goddess herself, Hotel Bhavani offers pilgrims a peaceful and comfortable base in the heart of Katra.",
    category: "Budget",
    tags: ["Budget", "Vaishno Devi Pilgrimage", "Near Katra Market"],
  },
  {
    slug: "radha-niwas",
    name: "Radha Niwas",
    description:
      "A serene, homely property in Katra that gives travellers a warm and welcoming atmosphere for their pilgrimage stay.",
    category: "Standard",
    tags: ["Family Stay", "Vaishno Devi Pilgrimage"],
    photos: [],
  },
  {
    slug: "amra-hotel",
    name: "Amra Hotel",
    description:
      "Amra Hotel combines comfortable accommodation with a prime location in Katra, making it a reliable choice for all travellers.",
    category: "Standard",
    tags: ["Near Katra Market", "Vaishno Devi Pilgrimage", "Family Stay"],
    photos: [],
  },

  // ─────────────────────────────────────────────────────────
  // PLACEHOLDER HOTELS  (replace with real data as needed)
  // ─────────────────────────────────────────────────────────
  {
    slug: "katra-residency",
    name: "Hotel Katra Residency",
    description:
      "Conveniently located near the railway station, Hotel Katra Residency is a comfortable option for incoming pilgrims.",
    category: "Standard",
    tags: ["Near Railway Station", "Vaishno Devi Pilgrimage"],
    photos: [],
    isPlaceholder: true,
  },
  {
    slug: "vaishnavi-palace",
    name: "Hotel Vaishnavi Palace",
    description:
      "A premium property in Katra offering spacious rooms, modern facilities, and a warm pilgrim-friendly environment.",
    category: "Premium",
    tags: ["Premium", "Family Stay", "Vaishno Devi Pilgrimage"],
    photos: [],
    isPlaceholder: true,
  },
  {
    slug: "shree-darshan",
    name: "Hotel Shree Darshan",
    description:
      "Offering easy access to the Katra bus stand and market, Hotel Shree Darshan is perfect for a quick pilgrimage stopover.",
    category: "Budget",
    tags: ["Budget", "Near Katra Market"],
    photos: [],
    isPlaceholder: true,
  },
  {
    slug: "trikuta-view",
    name: "Hotel Trikuta View",
    description:
      "Enjoy scenic views of the Trikuta Hills from Hotel Trikuta View — a peaceful retreat for nature-loving travellers.",
    category: "Premium",
    tags: ["Premium", "Vaishno Devi Pilgrimage"],
    photos: [],
    isPlaceholder: true,
  },
];
