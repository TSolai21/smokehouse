"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { MenuItem } from "@/lib/menuData";

const DOORDASH_URL = "https://www.doordash.com";


interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group relative bg-brand-card rounded-2xl overflow-hidden border border-brand-border hover:border-brand-orange/30 transition-colors transition-shadow duration-300 shadow-card hover:shadow-card-hover"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image || "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=600&fit=crop&q=80"}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />


        {/* Price tag */}
        <div className="absolute bottom-3 right-3">
          <span className="glass-dark text-brand-orange font-bold text-sm px-3 py-1 rounded-full border border-brand-orange/20">
            {item.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-brand-cream mb-2 group-hover:text-brand-orange transition-colors duration-200">
          {item.name}
        </h3>
        <p className="text-brand-cream-muted text-sm leading-relaxed line-clamp-2 mb-4">
          {item.description}
        </p>

        <motion.a
          href={DOORDASH_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-between w-full bg-brand-border hover:bg-brand-orange/20 border border-transparent hover:border-brand-orange/30 text-brand-cream-muted hover:text-brand-orange px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group/btn"
        >
          <span>Order Now</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
}
