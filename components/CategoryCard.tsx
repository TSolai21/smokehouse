"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/menuData";
import { getMenuHref, menuItems } from "@/lib/menuData";

interface CategoryCardProps {
  category: Category;
  index: number;
  className?: string;
}

export default function CategoryCard({ category, index, className = "" }: CategoryCardProps) {
  // Find an image from the first menu item in this category
  const itemWithImage = menuItems.find(
    (item) => item.category === category.id && item.image
  );
  const imageUrl = itemWithImage?.image;
  const href = getMenuHref(category.id);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`group relative bg-brand-card rounded-2xl overflow-hidden border border-brand-border hover:border-brand-orange/30 transition-colors transition-shadow duration-300 shadow-card hover:shadow-card-hover ${className}`}
    >
      <Link href={href} className="flex flex-col h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl || "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=600&fit=crop&q=80"}
            alt={category.label}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />

          {/* Emoji Badge */}
          <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
            <span className="flex items-center gap-1 text-[16px] px-2.5 py-1 rounded-full border backdrop-blur-sm bg-brand-black/40 border-white/10">
              {category.emoji}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="font-display font-bold text-xl text-brand-cream mb-2 group-hover:text-brand-orange transition-colors duration-200">
              {category.label}
            </h3>
            <p className="text-brand-cream-muted text-sm leading-relaxed line-clamp-2 mb-4">
              Explore our delicious {category.label.toLowerCase()}
            </p>
          </div>

          <div className="flex items-center justify-between w-full bg-brand-border group-hover:bg-brand-orange/20 border border-transparent group-hover:border-brand-orange/30 text-brand-cream-muted group-hover:text-brand-orange px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200">
            <span>View Category</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
