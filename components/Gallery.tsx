"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=600&fit=crop&q=80",
    alt: "Rich Butter Chicken",
    span: "col-span-1 row-span-2",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop&q=80",
    alt: "Tandoori Chicken Tikka",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&h=400&fit=crop&q=80",
    alt: "Refreshing Mango Lassi",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&h=600&fit=crop&q=80",
    alt: "Crispy Samosas",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=600&fit=crop&q=80",
    alt: "Aromatic Chicken Biryani",
    span: "col-span-2 row-span-1",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=600&fit=crop&q=80",
    alt: "Warm Gulab Jamun",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&h=600&fit=crop&q=80",
    alt: "Hot Masala Chai",
    span: "col-span-1 row-span-2",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop&q=80",
    alt: "Tandoori Garlic Naan",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&h=400&fit=crop&q=80",
    alt: "Sweet Rasmalai",
    span: "col-span-1 row-span-1",
    size: "normal",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-12 bg-brand-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(232,93,4,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Food Gallery"
          title="Feast for"
          titleHighlight="Your Eyes"
          description="Every dish is a visual masterpiece. Scroll through our gallery and let your cravings do the talking."
        />

        {/* Marquee Gallery */}
        <div 
          className="relative w-full overflow-hidden py-10"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          }}
        >
          <div className="flex w-max animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused] gap-4 md:gap-6 items-stretch [animation-duration:60s]">
            {[...galleryImages, ...galleryImages].map((img, i) => {
              const widthClass = img.size === 'wide' ? 'w-[400px] md:w-[500px]' : img.size === 'tall' ? 'w-[300px] md:w-[350px]' : 'w-[250px] md:w-[300px]';
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer h-[280px] md:h-[350px] shrink-0 ${widthClass}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 300px, 500px"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Hover content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <p className="text-white text-sm md:text-base font-semibold text-center line-clamp-2">
                      {img.alt}
                    </p>
                    <div className="mt-2 w-8 h-0.5 bg-brand-orange rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            Follow us on Instagram @curryexpress
          </a>
        </motion.div>
      </div>
    </section>
  );
}
