"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/menuData";
import { getMenuHref } from "@/lib/menuData";

interface CategoryCardProps {
  category: Category;
  index: number;
  className?: string;
}

export default function CategoryCard({ category, index, className = "" }: CategoryCardProps) {
  const href = getMenuHref(category.id);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`group relative bg-brand-card/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-brand-border hover:border-brand-orange/30 transition-colors duration-300 shadow-card hover:shadow-card-hover ${className}`}
    >
      <Link href={href} className="flex flex-col h-full p-6">
        
        {/* Top Section: Emoji & Arrow */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all duration-300">
            {category.emoji}
          </div>
          <div className="w-10 h-10 rounded-full border border-brand-border group-hover:border-brand-orange/30 group-hover:bg-brand-orange text-brand-cream-muted group-hover:text-white flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-auto">
          <h3 className="font-display font-bold text-2xl text-brand-cream mb-2 group-hover:text-brand-orange transition-colors duration-200">
            {category.label}
          </h3>
          <p className="text-brand-cream-muted text-sm leading-relaxed mb-1">
            Explore our delicious {category.label.toLowerCase()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
