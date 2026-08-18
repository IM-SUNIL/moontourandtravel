"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const allPackages = [
  {
    title: "Vaishno Devi VIP Darshan",
    location: "Katra, J&K",
    duration: "2 Days / 1 Night",
    image: "https://images.unsplash.com/photo-1598424269269-8069676e1919?q=80&w=2670&auto=format&fit=crop",
    price: "₹4,999",
    category: "Pilgrimage",
  },
  {
    title: "Kashmir Valley Paradise",
    location: "Srinagar & Gulmarg",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2670&auto=format&fit=crop",
    price: "₹18,500",
    category: "Honeymoon / Leisure",
  },
  {
    title: "Patnitop Getaway",
    location: "Patnitop, J&K",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1555541916-24e0350d75a3?q=80&w=2670&auto=format&fit=crop",
    price: "₹9,999",
    category: "Nature",
  },
  {
    title: "Shiv Khori Darshan",
    location: "Ransoo, J&K",
    duration: "1 Day Trip",
    image: "https://images.unsplash.com/photo-1627896157734-4bcbfdbcc636?q=80&w=2670&auto=format&fit=crop",
    price: "₹2,500",
    category: "Pilgrimage",
  },
  {
    title: "Pahalgam Summer Retreat",
    location: "Pahalgam, J&K",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1601058694080-60bda845774a?q=80&w=2670&auto=format&fit=crop",
    price: "₹14,000",
    category: "Family",
  },
  {
    title: "Sonamarg Glacier Tour",
    location: "Sonamarg, J&K",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1610715936287-6c2ab208cbbf?q=80&w=2670&auto=format&fit=crop",
    price: "₹12,500",
    category: "Adventure",
  }
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Packages Hero */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background z-0"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.2em] text-sm font-semibold"
          >
            Curated Journeys
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-5xl md:text-6xl font-serif text-white font-bold"
          >
            Explore Our Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From spiritual pilgrimages to romantic honeymoons in the valleys of Kashmir, we have the perfect itinerary waiting for you.
          </motion.p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gold/30 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60"></div>
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-gold font-semibold text-sm">
                  {pkg.price}
                </div>
                <div className="absolute top-4 left-4 z-20 bg-gold/90 text-background px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                  {pkg.category}
                </div>
              </div>
              
              <div className="p-8 relative z-20 -mt-6 bg-gray-900/95 backdrop-blur-xl rounded-t-3xl">
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{pkg.title}</h3>
                
                <div className="flex flex-col gap-3 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gold" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gold" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
                
                <button className="mt-8 w-full py-3 border border-gold/50 text-gold rounded-full hover:bg-gold hover:text-background transition-all duration-300 font-medium flex items-center justify-center gap-2">
                  Get a Quote <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
