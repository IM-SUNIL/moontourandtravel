"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const packages = [
  {
    title: "Vaishno Devi & Shiv Khori Family Package",
    location: "Katra, J&K",
    duration: "2 Nights / 3 Days",
    image: "https://images.unsplash.com/photo-1598424269269-8069676e1919?q=80&w=2670&auto=format&fit=crop",
    price: "₹9,999 / Couple",
  },
  {
    title: "Kashmir Valley Paradise",
    location: "Srinagar & Gulmarg",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2670&auto=format&fit=crop",
    price: "₹18,500",
  },
  {
    title: "Patnitop Getaway",
    location: "Patnitop, J&K",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1555541916-24e0350d75a3?q=80&w=2670&auto=format&fit=crop",
    price: "₹9,999",
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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
            <button className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium">
              View All Packages <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -15 }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gold/30 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60"></div>
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-gold font-semibold text-sm">
                  {pkg.price}
                </div>
              </div>
              
              <div className="p-8 relative z-20 -mt-8 bg-gray-900/90 backdrop-blur-lg">
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
                
                <button className="mt-8 w-full py-3 border border-gold/50 text-gold rounded-full hover:bg-gold hover:text-background transition-all duration-300 font-medium">
                  Explore Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
