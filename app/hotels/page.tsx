import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelsGrid from "@/components/HotelsGrid";
import { hotels } from "@/data/hotels.data";
import { discoverGalleryImages } from "@/lib/image-discovery";

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Hotels in Katra | Moon Tour Travel",
  description:
    "Explore hotels in Katra for your Vaishno Devi pilgrimage. Contact Moon Tour Travel for hotel availability and booking assistance.",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HotelsPage() {
  // Dynamically inject filesystem images
  const enrichedHotels = hotels.map((hotel) => {
    const discoveredPhotos = discoverGalleryImages("hotels", hotel.slug);
    return {
      ...hotel,
      photos: discoveredPhotos.length > 0 ? discoveredPhotos : hotel.photos,
    };
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Page Hero — identical structure to /packages and /services ── */}
      <div className="relative pt-28 pb-12 lg:pt-40 lg:pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background z-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          {/* Can't use motion.* in a Server Component — wrap in a plain div */}
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
            Accommodation
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-white font-bold">
            Hotels in Katra
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Comfortable stays in Katra for your Vaishno Devi pilgrimage. Contact
            Moon Tour Travel for hotel availability and booking assistance.
          </p>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="py-12 md:py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <HotelsGrid hotels={enrichedHotels} />
      </div>

      <Footer />
    </main>
  );
}
