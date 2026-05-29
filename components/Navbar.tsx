"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.jpg";

const DOORDASH_URL = "https://www.doordash.com";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Offer", href: "/#offers" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Review", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "glass-dark py-3 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2"
            >
              <Image
                src={logo}
                alt="Curry Express Logo"
                className="h-10 w-auto rounded-md object-contain"
                priority
              />
              <div>
                <span className="font-display font-bold text-xl text-brand-cream tracking-wide">
                  Curry
                </span>
                <span className="text-brand-orange font-display italic text-xl ml-1">
                  Express
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-brand-cream-muted hover:text-brand-orange text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href={DOORDASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 shadow-glow-orange"
            >
              <span>Order on DoorDash</span>
            </motion.a>

            <button
              className="md:hidden text-brand-cream p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-0 right-0 z-40 glass-dark border-t border-white/5 px-4 py-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-left text-brand-cream text-lg font-medium py-2 border-b border-white/5 hover:text-brand-orange transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href={DOORDASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2 bg-brand-orange text-white text-center py-3 rounded-full font-semibold text-base shadow-glow-orange"
              onClick={() => setMobileOpen(false)}
            >
              Order on DoorDash
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
