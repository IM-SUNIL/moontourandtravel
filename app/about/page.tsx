"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* About Hero */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background z-0"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.2em] text-sm font-semibold"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-5xl md:text-6xl font-serif text-white font-bold"
          >
            About Moon Tour & Travels
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Rooted in Katra, we are dedicated to providing the most authentic, luxurious, and spiritually fulfilling journeys across Jammu & Kashmir.
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gold/10 rounded-[2rem] blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1566999868884-6338fb5029e0?q=80&w=2670&auto=format&fit=crop" 
              alt="Kashmir Valley" 
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-[500px] object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">A Legacy of Hospitality</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded in the sacred city of Katra, Moon Tour and Travels began with a simple mission: to elevate the pilgrimage experience to Vaishno Devi and showcase the untouched beauty of Kashmir. 
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Over the years, we have grown from a small local taxi service into a premier luxury travel agency. We believe that true luxury lies in peace of mind. That's why we handle every detail—from the moment you land to the moment you depart.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl border border-gold/20">
                <Heart className="text-gold mb-3" size={28} />
                <h4 className="text-white font-serif text-xl mb-2">Guest First</h4>
                <p className="text-sm text-gray-400">Your comfort and safety dictate every decision we make.</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-gold/20">
                <Award className="text-gold mb-3" size={28} />
                <h4 className="text-white font-serif text-xl mb-2">Premium Quality</h4>
                <p className="text-sm text-gray-400">Partnering only with top-tier hotels and maintaining a luxury fleet.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
