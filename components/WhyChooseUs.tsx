"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ThumbsUp, Headset, Star } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-background to-background z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 rounded-[2rem] blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop" 
              alt="Premium Taxi Fleet" 
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="text-gold fill-gold" size={20} />
                ))}
              </div>
              <p className="text-white font-serif font-bold text-xl">5.0 / 5 Rating</p>
              <p className="text-gray-400 text-sm">Trusted by 10k+ Travelers</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-8"
        >
          <div>
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">Why Choose Us</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-white leading-tight">Elevating Your Travel Experience</h2>
            <p className="mt-6 text-gray-400 text-lg">
              At Moon Tour and Travels, we don't just book trips; we craft memories. From luxury fleets to handpicked hotels, every detail is designed for perfection.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-gold/10 p-3 rounded-xl">
                <ShieldCheck className="text-gold" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">Safe & Reliable Fleet</h3>
                <p className="text-gray-400">Our premium vehicles are rigorously maintained and driven by verified, experienced chauffeurs.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-gold/10 p-3 rounded-xl">
                <ThumbsUp className="text-gold" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">Local Expertise</h3>
                <p className="text-gray-400">Deep knowledge of Katra and Kashmir to give you authentic and hassle-free experiences.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-gold/10 p-3 rounded-xl">
                <Headset className="text-gold" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">24/7 Premium Support</h3>
                <p className="text-gray-400">A dedicated travel concierge available around the clock to assist you during your journey.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
