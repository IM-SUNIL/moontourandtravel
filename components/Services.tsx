"use client";

import { motion, Variants } from "framer-motion";
import { Car, Hotel, Map, Camera } from "lucide-react";

const services = [
  {
    icon: <Hotel size={40} />,
    title: "Luxury Hotel Bookings",
    description: "Premium stays with best-in-class hospitality in Katra and Kashmir.",
  },
  {
    icon: <Car size={40} />,
    title: "Premium Taxi Service",
    description: "Comfortable and safe travel with our well-maintained luxury fleet.",
  },
  {
    icon: <Map size={40} />,
    title: "Guided Tour Packages",
    description: "Expertly crafted itineraries for Vaishno Devi and Kashmir valleys.",
  },
  {
    icon: <Camera size={40} />,
    title: "Nearby Sightseeing",
    description: "Explore hidden gems and breathtaking viewpoints with local experts.",
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold">What We Offer</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-white">Our Premium Services</h2>
          <div className="mt-6 w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group transition-all duration-300 hover:border-gold/50"
            >
              <div className="w-20 h-20 rounded-full bg-background/50 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-background transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
