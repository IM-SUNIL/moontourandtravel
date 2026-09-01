"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Package } from "@/data/packages.data";

// ─── Helpers ────────────────────────────────────────────────────────────────

function getPhotoPaths(pkg: Package): string[] {
  if (!pkg.photos || pkg.photos.length === 0) return [pkg.coverImage];
  return pkg.photos.map((filename) => 
    filename.startsWith("/") ? filename : `/images/packages/${pkg.slug}/${filename}`
  );
}

// ─── Modal ───────────────────────────────────────────────────────────────────

interface ModalProps {
  pkg: Package;
  onClose: () => void;
}

function PackageModal({ pkg, onClose }: ModalProps) {
  const photos = getPhotoPaths(pkg);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-8"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-background transition-colors"
        >
          <X size={18} />
        </button>

        {/* Photo gallery */}
        <div className="relative h-64 md:h-96 bg-gray-800 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              src={photos[current]}
              alt={`${pkg.title} — photo ${current + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = pkg.coverImage;
              }}
            />
          </AnimatePresence>

          {/* Nav arrows — only shown if there are multiple photos */}
          {photos.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-background transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-background transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "bg-gold w-5" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Category & Price badges */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            <span className="bg-gold/90 text-background text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">
              {pkg.category}
            </span>
            <span className="bg-background/80 backdrop-blur-md text-gold text-sm font-semibold px-3 py-1 rounded-full border border-white/10 w-fit">
              {pkg.price}
            </span>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">{pkg.title}</h2>
              <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-gold" />
                  <span>{pkg.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={16} className="text-gold" />
                  <span>{pkg.duration}</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex flex-col gap-3 min-w-[200px]">
              <a
                href="tel:+918082802818"
                className="flex items-center justify-center gap-2 bg-gold/10 border border-gold text-gold px-6 py-3 rounded-full hover:bg-gold hover:text-background transition-all duration-300 font-semibold text-sm w-full"
              >
                <Phone size={16} />
                Call to Book
              </a>
              <a
                href={`https://wa.me/918082802818?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500 text-green-400 px-6 py-3 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold text-sm w-full"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Note / Overview */}
              {pkg.note && (
                <div className="bg-gold/5 border border-gold/20 rounded-xl p-5">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    <strong className="text-gold block mb-1">Important Note:</strong>
                    {pkg.note}
                  </p>
                </div>
              )}

              {/* Itinerary */}
              {pkg.itinerary && pkg.itinerary.length > 0 && (
                <div>
                  <h3 className="text-xl font-serif text-white mb-5 flex items-center gap-2">
                    <MapPin className="text-gold" size={20} />
                    Detailed Itinerary
                  </h3>
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold/30 before:to-transparent">
                    {pkg.itinerary.map((item, index) => (
                      <div key={index} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gold bg-gray-900 text-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                        <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-gray-800/50 border border-white/5 rounded-xl p-4 shadow">
                          <span className="text-gold text-xs font-bold uppercase tracking-wider mb-1 block">{item.day}</span>
                          <h4 className="text-white font-serif text-lg mb-2">{item.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-1 space-y-6">
              {/* Highlights */}
              {pkg.highlights && pkg.highlights.length > 0 && (
                <div className="bg-gray-800/50 border border-white/5 rounded-xl p-6">
                  <h3 className="text-lg font-serif text-white mb-4 border-b border-white/10 pb-2">
                    Package Highlights
                  </h3>
                  <ul className="space-y-3">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* CTA Buttons - Mobile */}
              <div className="md:hidden flex flex-col gap-3 mt-6">
                <a
                  href="tel:+918082802818"
                  className="flex items-center justify-center gap-2 bg-gold/10 border border-gold text-gold px-6 py-3 rounded-full hover:bg-gold hover:text-background transition-all duration-300 font-semibold text-sm w-full"
                >
                  <Phone size={16} />
                  Call to Book
                </a>
                <a
                  href={`https://wa.me/918082802818?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500 text-green-400 px-6 py-3 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold text-sm w-full"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Package Card ───────────────────────────────────────────────────────────────

interface CardProps {
  pkg: Package;
  index: number;
  onOpen: (pkg: Package) => void;
}

function PackageCard({ pkg, index, onOpen }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={() => onOpen(pkg)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gold/30 transition-all duration-300 shadow-xl flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60"></div>
        <img 
          src={pkg.coverImage} 
          alt={pkg.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-gold font-semibold text-sm border border-white/10">
          {pkg.price}
        </div>
        <div className="absolute top-4 left-4 z-20 bg-gold/90 text-background px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
          {pkg.category}
        </div>
      </div>
      
      <div className="p-8 relative z-20 -mt-6 bg-gray-900/95 backdrop-blur-xl rounded-t-3xl flex-1 flex flex-col">
        <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{pkg.title}</h3>
        
        <div className="flex flex-col gap-3 text-gray-400 text-sm mb-8">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gold" />
            <span>{pkg.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gold" />
            <span>{pkg.duration}</span>
          </div>
        </div>
        
        <button className="mt-auto w-full py-3 border border-gold/50 text-gold rounded-full hover:bg-gold hover:text-background transition-all duration-300 font-medium flex items-center justify-center gap-2">
          Explore Details <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

interface PackagesGridProps {
  packages: Package[];
}

export default function PackagesGrid({ packages }: PackagesGridProps) {
  const [selected, setSelected] = useState<Package | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <PackageCard
            key={pkg.slug}
            pkg={pkg}
            index={index}
            onOpen={setSelected}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <PackageModal pkg={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
