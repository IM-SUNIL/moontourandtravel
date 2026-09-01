"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar, Users, Search } from "lucide-react";

const bgImages = [
  "/images/herosection/Bhawan_gallery_1.jpg",
  "/images/herosection/akshay-singh-z2yGDKLSa0g-unsplash.jpg",
  "/images/herosection/indar-gupta-TtXrlJeRI_U-unsplash.jpg",
  "/images/herosection/nayan-bhalotia-rYvcp00zmMY-unsplash.jpg",
  "/images/herosection/sonika-agarwal-iggxYPY-O5s-unsplash.jpg"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />
        <AnimatePresence>
          <motion.img
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={bgImages[currentImage]}
            alt="Beautiful destination"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0px" }}
            animate={{ opacity: 1, letterSpacing: "8px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-gold uppercase text-sm font-semibold tracking-[0.5em]"
          >
            Welcome to Paradise
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight">
            Discover the Magic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              of Kashmir & Katra
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-sans mt-8">
            Experience luxury travel with tailored packages, premium stays, and unforgettable journeys to Vaishno Devi and beyond.
          </p>
        </motion.div>

        {/* Search / Booking Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 w-full max-w-4xl glass-card rounded-3xl md:rounded-full p-5 md:p-4 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-600/50 w-full">
            <MapPin className="text-gold" size={24} />
            <div className="text-left flex-1">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500 font-serif"
              />
            </div>
          </div>
          
          <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-600/50 w-full">
            <Calendar className="text-gold" size={24} />
            <div className="text-left flex-1">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Date</p>
              <input 
                type="text" 
                placeholder="When?" 
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500 font-serif"
              />
            </div>
          </div>
          
          <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
            <Users className="text-gold" size={24} />
            <div className="text-left flex-1">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Guests</p>
              <input 
                type="text" 
                placeholder="How many?" 
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500 font-serif"
              />
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-gold to-gold-light text-background p-4 rounded-full hover:scale-105 transition-transform w-full md:w-auto flex justify-center">
            <Search size={24} />
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-gold" size={20} />
        </motion.div>
      </motion.div>
    </div>
  );
}
