"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar, Users, Search } from "lucide-react";
import { useRouter } from "next/navigation";

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
// Search State
  const router = useRouter();
  const searchBarRef = useRef<HTMLDivElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [location, setLocation] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  
  const [date, setDate] = useState("");
  const minDate = new Date().toISOString().split("T")[0];
  
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [showGuests, setShowGuests] = useState(false);

  const LOCATIONS = ["Katra", "Vaishno Devi", "Shiv Khori", "Kashmir"];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target as Node)) {
        setShowLocations(false);
        setShowGuests(false);
      }
    };
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowLocations(false);
        setShowGuests(false);
        dateInputRef.current?.blur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSearch = () => {
    if (!location) {
      alert("Please select a destination.");
      return;
    }
    if (!date) {
      alert("Please select a travel date.");
      return;
    }

    const params = new URLSearchParams();
    params.set("location", location);
    
    // Format date beautifully if needed, or pass as raw YYYY-MM-DD
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
    params.set("date", formattedDate);
    
    params.set("adults", adults.toString());
    params.set("children", children.toString());

    router.push(`/?${params.toString()}`);
    
    setTimeout(() => {
      document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-20">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
          ref={searchBarRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 w-full max-w-4xl glass-card rounded-3xl md:rounded-full p-5 md:p-4 flex flex-col md:flex-row items-center justify-between gap-4 relative z-50"
        >
          {/* Location Field */}
          <div className="relative flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-600/50 w-full">
            <MapPin className="text-gold" size={24} />
            <div 
              className="text-left flex-1 cursor-pointer"
              onClick={() => { setShowLocations(!showLocations); setShowGuests(false); }}
            >
              <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
              <p className="text-white font-serif whitespace-nowrap overflow-hidden text-ellipsis w-full h-[24px]">
                {location || <span className="text-gray-500">Where to?</span>}
              </p>
            </div>
            
            {showLocations && (
              <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => { setLocation(loc); setShowLocations(false); }}
                    className="w-full text-left px-4 py-3 text-white hover:bg-gold/20 transition-colors"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Date Field */}
          <div className="relative flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-600/50 w-full">
            <Calendar className="text-gold" size={24} />
            <div 
              className="text-left flex-1 relative cursor-pointer"
              onClick={() => {
                setShowLocations(false);
                setShowGuests(false);
                if (dateInputRef.current) {
                  try {
                    if ('showPicker' in HTMLInputElement.prototype) {
                      dateInputRef.current.showPicker();
                    } else {
                      dateInputRef.current.focus();
                    }
                  } catch (e) {
                    dateInputRef.current.focus();
                  }
                }
              }}
            >
              <p className="text-xs text-gray-400 uppercase tracking-wider">Date</p>
              <p className="text-white font-serif w-full h-[24px]">
                {date ? new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : <span className="text-gray-500">When?</span>}
              </p>
              <input 
                ref={dateInputRef}
                type="date"
                min={minDate}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
              />
            </div>
          </div>
          
          {/* Guests Field */}
          <div className="relative flex-1 flex items-center gap-3 px-4 py-2 w-full">
            <Users className="text-gold" size={24} />
            <div 
              className="text-left flex-1 cursor-pointer"
              onClick={() => { setShowGuests(!showGuests); setShowLocations(false); }}
            >
              <p className="text-xs text-gray-400 uppercase tracking-wider">Guests</p>
              <p className="text-white font-serif whitespace-nowrap w-full h-[24px]">
                {adults} Adults{children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}
              </p>
            </div>
            
            {showGuests && (
              <div className="absolute top-full left-0 mt-2 w-full min-w-[250px] bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Adults</span>
                  <div className="flex items-center gap-3 bg-gray-800 rounded-full px-2 py-1">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setAdults(Math.max(1, adults - 1)); }}
                      className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gold transition-colors"
                    >-</button>
                    <span className="text-white w-4 text-center">{adults}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setAdults(adults + 1); }}
                      className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gold transition-colors"
                    >+</button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Children</span>
                  <div className="flex items-center gap-3 bg-gray-800 rounded-full px-2 py-1">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setChildren(Math.max(0, children - 1)); }}
                      className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gold transition-colors"
                    >-</button>
                    <span className="text-white w-4 text-center">{children}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setChildren(children + 1); }}
                      className="w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gold transition-colors"
                    >+</button>
                  </div>
                </div>
                <button 
                  onClick={() => setShowGuests(false)}
                  className="w-full mt-2 py-2 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </div>
          
          <button 
            onClick={handleSearch}
            className="bg-gradient-to-r from-gold to-gold-light text-background p-4 rounded-full hover:scale-105 transition-transform w-full md:w-auto flex justify-center"
          >
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
