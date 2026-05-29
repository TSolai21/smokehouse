"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
      whileHover={{ y: -4 }}
      className={`group relative bg-brand-card rounded-3xl overflow-hidden border border-brand-border hover:border-brand-orange/50 transition-colors duration-200 hover:shadow-[0_6px_30px_rgba(232,93,4,0.2)] ${className}`}
    >
      <Link href={href} className="flex flex-col h-full">

        {/* Image covering the top of the card */}
        <div className="relative h-44 overflow-hidden">
          <Image
            src={category.bannerImage || "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=300&fit=crop"}
            alt={category.label}
            fill
            className="object-cover"
            sizes="280px"
          />
          {/* Gradient overlay at the bottom of image */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/10 to-transparent" />

          {/* Arrow button top-right */}
          <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 group-hover:bg-brand-orange group-hover:border-brand-orange flex items-center justify-center transition-colors duration-200">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-bold text-xl text-brand-cream mb-1 group-hover:text-brand-orange transition-colors duration-200">
            {category.label}
          </h3>
          <p className="text-brand-cream-muted text-sm leading-relaxed">
            Explore our delicious {category.label.toLowerCase()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
