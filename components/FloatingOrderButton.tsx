"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

const DOORDASH_URL = "https://www.doordash.com";

export default function FloatingOrderButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-4 z-50 md:right-8"
        >
          {/* Mobile: icon only */}
          <motion.a
            href={DOORDASH_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            className="flex md:hidden w-14 h-14 bg-brand-orange rounded-full items-center justify-center shadow-glow-orange-lg"
            aria-label="Order on DoorDash"
          >
            <ShoppingBag className="w-6 h-6 text-white" />
          </motion.a>

          {/* Desktop: full button */}
          <motion.a
            href={DOORDASH_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(232,93,4,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:flex items-center gap-2.5 bg-brand-orange text-white px-6 py-3.5 rounded-full font-semibold text-sm shadow-glow-orange group"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order on DoorDash</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-brand-orange/30 pointer-events-none md:hidden" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
