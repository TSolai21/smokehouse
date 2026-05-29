"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { categories } from "@/lib/menuData";
import SectionHeader from "@/components/SectionHeader";
import { useOffers } from "@/hooks/useCmsData";
import { offerIconMap } from "@/lib/offerIcons";
import { OFFER_IMAGE_GRADIENT } from "@/lib/cmsConstants";
import OfferCardImage from "@/components/OfferCardImage";

const DOORDASH_URL = "https://www.doordash.com";

export default function SpecialOffers() {
  const { items: offers, hydrated } = useOffers();

  return (
    <section id="offers" className="py-12 bg-texture relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(232,93,4,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Hot Deals"
          title="Special"
          titleHighlight="Offers"
          description="Indulge more, spend less. Our curated combos are designed to delight every taste bud."
        />

        {!hydrated ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-[300px] rounded-[2rem] skeleton bg-[#111]"
              />
            ))}
          </div>
        ) : offers.length === 0 ? (
          <p className="text-center text-brand-cream-muted py-12">
            No offers available right now. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {offers.slice(0, 2).map((offer, index) => {
              return (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative bg-[#111] rounded-[2rem] overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[300px]"
                >
                  {/* Left Content */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center z-10 bg-[#111]">
                    <h3 className="font-display text-2xl md:text-3xl text-brand-cream mb-4">
                      {offer.title}
                    </h3>
                    <p className="text-brand-cream-muted italic text-sm md:text-base leading-relaxed mb-10 line-clamp-3 max-w-sm">
                      {offer.description}
                    </p>
                    
                    <motion.a
                      href={DOORDASH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-bold text-xs tracking-[0.2em] uppercase border-b border-white/20 pb-1 w-fit hover:border-white transition-colors"
                    >
                      ORDER NOW <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Right Image */}
                  <div className="relative w-full sm:w-[50%] h-48 sm:h-full">
                    <OfferCardImage
                      offer={offer}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#111] via-[#111]/60 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}


      </div>
    </section>
  );
}
