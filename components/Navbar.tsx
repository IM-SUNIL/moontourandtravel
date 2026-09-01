"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Hotels", href: "/hotels" },
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold font-serif text-white flex flex-col"
          >
            <span className="tracking-widest">MOON</span>
            <span className="text-xs text-gold tracking-[0.3em] -mt-1 uppercase">Tour & Travels</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold transition-colors tracking-wide uppercase"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="hidden md:flex"
        >
          <a
            href="tel:+918082802818"
            className="flex items-center gap-2 bg-gold/10 border border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-background transition-all duration-300"
          >
            <Phone size={16} />
            <span className="text-sm font-semibold">Book Now</span>
          </a>
          <a
            href="https://wa.me/918082802818"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500/10 border border-green-500 text-green-400 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <span className="text-sm font-semibold">WhatsApp</span>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="tel:+918082802818"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 flex items-center gap-2 bg-gold text-background px-8 py-3 rounded-full font-semibold"
            >
              <Phone size={20} />
              Book Now
            </motion.a>
            <motion.a
              href="https://wa.me/918082802818"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-semibold"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
