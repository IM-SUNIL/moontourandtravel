"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Phone, Tag } from "lucide-react";
import type { Hotel } from "@/data/hotels.data";

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Build a list of all photo URLs for a hotel */
function getPhotoPaths(hotel: Hotel): string[] {
  if (!hotel.photos || hotel.photos.length === 0) return [];
  return hotel.photos.map((filename) => 
    filename.startsWith("/") ? filename : `/images/hotels/${hotel.slug}/${filename}`
  );
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop";

/** Category badge colour — mirrors existing site accent conventions */
const categoryColor: Record<string, string> = {
  Budget: "bg-blue-500/80",
  Standard: "bg-gold/80",
  Premium: "bg-purple-500/80",
  Deluxe: "bg-purple-500/80",
  "3 Star": "bg-cyan-500/80",
  "4 Star": "bg-amber-500/80",
};

function badgeClass(category: string) {
  return categoryColor[category] ?? "bg-gold/80";
}

// ─── Modal ───────────────────────────────────────────────────────────────────

interface ModalProps {
  hotel: Hotel;
  onClose: () => void;
}

function HotelModal({ hotel, onClose }: ModalProps) {
  const photos = getPhotoPaths(hotel);
  const hasFallback = photos.length === 0;
  const displayPhotos = hasFallback ? [FALLBACK_IMAGE] : photos;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + displayPhotos.length) % displayPhotos.length);
  const next = () => setCurrent((c) => (c + 1) % displayPhotos.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-background transition-colors"
        >
          <X size={18} />
        </button>

        {/* Photo gallery */}
        <div className="relative h-72 md:h-96 bg-gray-800 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              src={displayPhotos[current]}
              alt={`${hotel.name} — photo ${current + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
              }}
            />
          </AnimatePresence>

          {/* Nav arrows — only shown if there are multiple photos */}
          {displayPhotos.length > 1 && (
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
                {displayPhotos.map((_, i) => (
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

          {/* Category badge */}
          <div className={`absolute top-4 left-4 z-10 ${badgeClass(hotel.category)} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
            {hotel.category}
          </div>
        </div>

        {/* Details */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-2">{hotel.name}</h2>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <MapPin size={14} className="text-gold" />
            <span>Katra, Jammu &amp; Kashmir</span>
          </div>

          <p className="text-gray-400 leading-relaxed mb-5">{hotel.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-7">
            {hotel.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs text-gold border border-gold/30 px-3 py-1 rounded-full"
              >
                <Tag size={11} /> {tag}
              </span>
            ))}
          </div>

          {/* CTAs — same style as rest of site */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/918082802818?text=Hi%2C%20I%20am%20interested%20in%20booking%20${encodeURIComponent(hotel.name)}%20in%20Katra.%20Please%20share%20availability%20and%20rates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500/10 border border-green-500 text-green-400 px-6 py-3 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold text-sm"
            >
              Enquire on WhatsApp
            </a>
            <a
              href="tel:+918082802818"
              className="flex-1 flex items-center justify-center gap-2 bg-gold/10 border border-gold text-gold px-6 py-3 rounded-full hover:bg-gold hover:text-background transition-all duration-300 font-semibold text-sm"
            >
              <Phone size={16} />
              Call to Book
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Hotel Card ───────────────────────────────────────────────────────────────

interface CardProps {
  hotel: Hotel;
  index: number;
  onOpen: (hotel: Hotel) => void;
}

function HotelCard({ hotel, index, onOpen }: CardProps) {
  const photos = getPhotoPaths(hotel);
  const coverImage = photos.length > 0 ? photos[0] : FALLBACK_IMAGE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
      onClick={() => onOpen(hotel)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gold/30 transition-all duration-300 shadow-xl"
    >
      {/* Cover image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60" />
        <img
          src={coverImage}
          alt={hotel.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop";
          }}
        />
        {/* Category badge */}
        <div className={`absolute top-4 left-4 z-20 ${badgeClass(hotel.category)} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
          {hotel.category}
        </div>
        {hotel.isPlaceholder && (
          <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md text-gray-400 text-[10px] font-medium uppercase tracking-widest px-2 py-1 rounded-full border border-white/10">
            Coming Soon
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 relative z-20 -mt-4 bg-gray-900/95 backdrop-blur-xl rounded-t-3xl">
        <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">
          {hotel.name}
        </h3>

        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
          <MapPin size={13} className="text-gold" />
          <span>Katra, Jammu &amp; Kashmir</span>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {hotel.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {hotel.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-gold border border-gold/30 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="w-full py-2.5 border border-gold/50 text-gold rounded-full hover:bg-gold hover:text-background transition-all duration-300 font-medium text-sm">
          View Details &amp; Enquire
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

interface HotelsGridProps {
  hotels: Hotel[];
}

export default function HotelsGrid({ hotels }: HotelsGridProps) {
  const [selected, setSelected] = useState<Hotel | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={hotel.slug}
            hotel={hotel}
            index={index}
            onOpen={setSelected}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <HotelModal hotel={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
