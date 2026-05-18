"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop&q=80",
    alt: "Classic Smokehouse Burger",
    span: "col-span-1 row-span-2",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&q=80",
    alt: "Wood-fired Pizza",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&h=400&fit=crop&q=80",
    alt: "Craft Lemonade",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=600&fit=crop&q=80",
    alt: "Spicy Burger",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=600&fit=crop&q=80",
    alt: "Premium Wagyu Burger",
    span: "col-span-2 row-span-1",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&h=600&fit=crop&q=80",
    alt: "Lava Brownie Dessert",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=600&fit=crop&q=80",
    alt: "Berry Shake",
    span: "col-span-1 row-span-2",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop&q=80",
    alt: "Veggie Pizza",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&h=400&fit=crop&q=80",
    alt: "Crème Brûlée",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-brand-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(232,93,4,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Food Gallery"
          title="Feast for"
          titleHighlight="Your Eyes"
          description="Every dish is a visual masterpiece. Scroll through our gallery and let your cravings do the talking."
        />

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <p className="text-white text-sm font-semibold text-center line-clamp-2">
                  {img.alt}
                </p>
                <div className="mt-2 w-8 h-0.5 bg-brand-orange rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 glass border border-white/10 hover:border-brand-orange/30 text-brand-cream-muted hover:text-brand-orange px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            Follow us on Instagram @smokehouseandco
          </a>
        </motion.div>
      </div>
    </section>
  );
}
