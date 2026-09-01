"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PackagesGrid from "./PackagesGrid";
import type { Package } from "@/data/packages.data";

interface DestinationsProps {
  packages: Package[];
}

export default function Destinations({ packages }: DestinationsProps) {
  // Show only the first 3 packages on the homepage
  const featuredPackages = packages.slice(0, 3);

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
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">Popular Packages</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-white">Breathtaking Destinations</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/packages"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
            >
              View All Packages <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <PackagesGrid packages={featuredPackages} />
      </div>
    </section>
  );
}
