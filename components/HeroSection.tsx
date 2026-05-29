"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const DOORDASH_URL = "https://www.doordash.com";

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "4.9★", label: "Average Rating" },
  { value: "15min", label: "Avg Delivery" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1920&h=1080&fit=crop&q=90"
          alt="Curry Express Premium Indian & Chinese Feast"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4"
        >
          <span className="text-brand-cream block">Crafted with</span>
          <span className="text-gradient block">Spice &amp; Soul</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-brand-cream-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Premium aromatic curries, clay-oven tandoori &amp; refreshing mango
          lassi. Every bite tells a story of tradition, spices, and bold flavor.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href={DOORDASH_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(232,93,4,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full text-base font-semibold shadow-glow-orange transition-all duration-300 min-w-[220px] justify-center"
          >
            <span>Order on DoorDash</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/menu"
              className="flex items-center gap-2 glass border border-white/10 text-brand-cream px-8 py-4 rounded-full text-base font-semibold hover:bg-white/5 transition-all duration-300 min-w-[220px] justify-center"
            >
              View Menu
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center justify-center gap-8 md:gap-14"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-bold text-2xl md:text-3xl text-brand-orange">
                {stat.value}
              </div>
              <div className="text-brand-cream-muted text-xs mt-1 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-1 text-brand-cream-muted cursor-pointer"
          onClick={() =>
            document
              .querySelector("#menu")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-xs uppercase tracking-widest opacity-60">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
