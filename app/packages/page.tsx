import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackagesGrid from "@/components/PackagesGrid";
import { packages } from "@/data/packages.data";

export const metadata: Metadata = {
  title: "Tour Packages | Moon Tour Travel",
  description:
    "Explore our curated tour packages including Vaishno Devi, Kashmir Valley, Patnitop, and more.",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Packages Hero */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background z-0"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
            Curated Journeys
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-white font-bold">
            Explore Our Packages
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            From spiritual pilgrimages to romantic honeymoons in the valleys of Kashmir, we have the perfect itinerary waiting for you.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <PackagesGrid packages={packages} />
      </div>

      <Footer />
    </main>
  );
}
