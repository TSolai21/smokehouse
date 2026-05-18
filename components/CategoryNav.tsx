"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { menuCategories, getMenuHref, type CategoryId } from "@/lib/menuData";

interface CategoryNavProps {
  /** Omit on homepage so no pill appears selected */
  activeCategory?: CategoryId | null;
  layoutId?: string;
}

export default function CategoryNav({
  activeCategory = null,
  layoutId = "menuCategoryPill",
}: CategoryNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap"
    >
      {menuCategories.map((cat) => {
        const isActive =
          activeCategory !== null && activeCategory === cat.id;
        const href = getMenuHref(cat.id);

        return (
          <Link key={cat.id} href={href} scroll={false}>
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-brand-orange text-white shadow-glow-orange"
                  : "glass border border-brand-border text-brand-cream-muted hover:text-brand-cream hover:border-brand-orange/20"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              {isActive && (
                <motion.span
                  layoutId={layoutId}
                  className="absolute inset-0 bg-brand-orange rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.span>
          </Link>
        );
      })}
    </motion.div>
  );
}
