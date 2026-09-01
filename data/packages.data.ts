/**
 * packages.data.ts
 * -------------------------------------------------------
 * Single source of truth for all package listings.
 * -------------------------------------------------------
 */

export interface PackageItinerary {
  day: string;
  title: string;
  details: string;
}

export interface Package {
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  category: string;
  /** Primary image shown on the card */
  coverImage: string;
  /** Additional images for the gallery */
  photos?: string[];
  highlights?: string[];
  itinerary?: PackageItinerary[];
  note?: string;
}

export const packages: Package[] = [
  {
    slug: "vaishno-devi-shiv-khori",
    title: "Vaishno Devi & Shiv Khori Family Couple Package",
    location: "Katra, J&K",
    duration: "2 Nights / 3 Days",
    coverImage: "https://images.unsplash.com/photo-1598424269269-8069676e1919?q=80&w=2670&auto=format&fit=crop",
    price: "₹9,999 / Couple",
    category: "Couple / Family",
    highlights: [
      "2 Nights Hotel Stay in Katra",
      "Private Dzire Taxi",
      "Vaishno Devi Darshan",
      "Shiv Khori Trip",
      "Nau Devi",
      "Jitto Baba",
      "Chamunda Mata Temple",
      "Rafting Point",
      "Couples & Family Friendly",
      "₹9,999 per Couple"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Katra",
        details: "Arrival in Katra. Hotel check-in. Overnight stay in Katra.",
      },
      {
        day: "Day 2",
        title: "Vaishno Devi Darshan",
        details: "Vaishno Devi pilgrimage/darshan. Return to Katra. Overnight hotel stay.",
      },
      {
        day: "Day 3",
        title: "Shiv Khori & Local Sightseeing",
        details: "Private Dzire taxi to Shiv Khori, Nau Devi, Jitto Baba, Chamunda Mata Temple & Rafting Point. Return to Katra.",
      },
    ],
    note: "Comfortable mid-range hotel stay in Katra for 2 nights, subject to availability. Private taxi to Shiv Khori with return to Katra included.",
  },
  {
    slug: "kashmir-valley-paradise",
    title: "Kashmir Valley Paradise",
    location: "Srinagar & Gulmarg",
    duration: "5 Days / 4 Nights",
    coverImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2670&auto=format&fit=crop",
    price: "₹18,500",
    category: "Honeymoon / Leisure",
  },
  {
    slug: "patnitop-getaway",
    title: "Patnitop Getaway",
    location: "Patnitop, J&K",
    duration: "3 Days / 2 Nights",
    coverImage: "https://images.unsplash.com/photo-1555541916-24e0350d75a3?q=80&w=2670&auto=format&fit=crop",
    price: "₹9,999",
    category: "Nature",
  },
  {
    slug: "shiv-khori-darshan",
    title: "Shiv Khori Darshan",
    location: "Ransoo, J&K",
    duration: "1 Day Trip",
    coverImage: "https://images.unsplash.com/photo-1627896157734-4bcbfdbcc636?q=80&w=2670&auto=format&fit=crop",
    price: "₹2,500",
    category: "Pilgrimage",
  },
  {
    slug: "pahalgam-summer-retreat",
    title: "Pahalgam Summer Retreat",
    location: "Pahalgam, J&K",
    duration: "4 Days / 3 Nights",
    coverImage: "https://images.unsplash.com/photo-1601058694080-60bda845774a?q=80&w=2670&auto=format&fit=crop",
    price: "₹14,000",
    category: "Family",
  },
  {
    slug: "sonamarg-glacier-tour",
    title: "Sonamarg Glacier Tour",
    location: "Sonamarg, J&K",
    duration: "3 Days / 2 Nights",
    coverImage: "https://images.unsplash.com/photo-1610715936287-6c2ab208cbbf?q=80&w=2670&auto=format&fit=crop",
    price: "₹12,500",
    category: "Adventure",
  }
];
