"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PackagesGrid from "./PackagesGrid";
import type { Package } from "@/data/packages.data";

interface DestinationsProps {
  packages: Package[];
  isSearch?: boolean;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Destinations({ packages, isSearch, searchParams }: DestinationsProps) {
  // Show only the first 3 packages on the homepage, unless searching
  const displayedPackages = isSearch ? packages : packages.slice(0, 3);
  const locationText = typeof searchParams?.location === 'string' ? searchParams.location : '';
  const dateText = typeof searchParams?.date === 'string' ? searchParams.date : '';
  const guestsText = (typeof searchParams?.adults === 'string' || typeof searchParams?.children === 'string') 
    ? `${searchParams.adults || '0'} Adults, ${searchParams.children || '0'} Children`
    : '';

  const subtitleParts = [locationText, dateText, guestsText].filter(Boolean);
  const searchSubtitle = subtitleParts.join(' • ');

  return (
    <section id="destinations" className="py-16 md:py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">
              {isSearch ? "Search Results" : "Popular Packages"}
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-white">
              {isSearch ? "Packages matching your trip" : "Breathtaking Destinations"}
            </h2>
            {isSearch && searchSubtitle && (
              <p className="mt-4 text-gray-400">{searchSubtitle}</p>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-6"
          >
            {isSearch && (
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Clear Search
              </Link>
            )}
            <Link 
              href="/packages"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
            >
              View All Packages <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {displayedPackages.length > 0 ? (
          <PackagesGrid packages={displayedPackages} />
        ) : (
          <div className="text-center py-20 bg-gray-900/50 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-serif text-white mb-4">No exact package found for your selection.</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              We specialize in custom itineraries. Let us build the perfect trip to {locationText || 'your destination'} for you.
            </p>
            <a
              href="https://wa.me/918082802818?text=Hi%2C%20I%20am%20looking%20for%20a%20customized%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500/10 border border-green-500 text-green-400 px-8 py-4 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold"
            >
              Contact us for a customized trip
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
