"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { menuItems } from "@/lib/menuData";
import MenuCard from "@/components/MenuCard";
import SectionHeader from "@/components/SectionHeader";
import CategoryNav from "@/components/CategoryNav";

const previewItems = menuItems
  .filter((item) => item.badges?.includes("popular"))
  .slice(0, 4);

const displayItems =
  previewItems.length >= 4
    ? previewItems
    : menuItems.slice(0, 4);

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
          description="Tap a category to explore the full menu with search — burgers, pizza, drinks, desserts, and more."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <CategoryNav layoutId="homeCategoryPill" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayItems.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
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
