"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Car, Hotel, Map, Camera, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Services Hero */}
      <div className="relative pt-28 pb-12 lg:pt-40 lg:pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background z-0"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.2em] text-sm font-semibold"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-5xl md:text-6xl font-serif text-white font-bold"
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Discover unparalleled comfort and curated experiences tailored just for you. From arriving in Katra to exploring the heights of Kashmir.
          </motion.p>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="py-12 md:py-20 max-w-7xl mx-auto px-6 lg:px-8 space-y-20 md:space-y-32">
        
        {/* Hotel Booking */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
              <Hotel size={32} />
            </div>
            <h2 className="text-3xl font-serif text-white mb-4">Luxury Hotel & Resort Bookings</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We partner with the finest 4-star and 5-star properties in Katra, Srinagar, Pahalgam, and Gulmarg. Enjoy priority check-ins, complimentary upgrades (when available), and breathtaking views right from your room.
            </p>
            <ul className="space-y-3">
              {["Premium Suites & Houseboats", "24/7 Room Service Alignment", "Pilgrim-friendly Stays in Katra"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-gold" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative h-96 w-full rounded-2xl overflow-hidden border border-white/10"
          >
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop" alt="Luxury Hotel" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Taxi Service */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
              <Car size={32} />
            </div>
            <h2 className="text-3xl font-serif text-white mb-4">Premium Fleet & Transfers</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Travel safely across the mountainous terrains of Jammu & Kashmir in our meticulously maintained luxury vehicles. Our fleet includes Innova Crysta, Fortuner, and Premium Sedans, driven by verified local experts.
            </p>
            <ul className="space-y-3">
              {["Airport / Railway Station Transfers", "Intercity Chauffeur Services", "GPS Tracked & Deep Cleaned Vehicles"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-gold" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative h-96 w-full rounded-2xl overflow-hidden border border-white/10"
          >
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop" alt="Premium Taxi" className="w-full h-full object-cover" />
          </motion.div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
