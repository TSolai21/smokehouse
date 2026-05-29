"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/menuData";
import CategoryCard from "@/components/CategoryCard";
import SectionHeader from "@/components/SectionHeader";

export default function FeaturedMenu() {
  return (
    <section id="menu" className="py-24 bg-brand-charcoal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Menu"
          title="Crafted to"
          titleHighlight="Perfection"
          description="Explore our full menu — from aromatic curries and tandoori to refreshing drinks and decadent desserts."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 mt-10"
        >
          <div 
            className="relative w-full overflow-hidden py-4"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
          >
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 items-stretch [animation-duration:60s]">
              {[...categories, ...categories].map((cat, i) => (
                <CategoryCard key={`${cat.id}-${i}`} category={cat} index={i % categories.length} className="w-[280px] shrink-0" />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-glow-orange hover:shadow-glow-orange-lg group"
          >
            View Full Menu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://www.doordash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-brand-orange/40 text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
          >
            Order on DoorDash
          </a>
        </motion.div>
      </div>
    </section>
  );
}
