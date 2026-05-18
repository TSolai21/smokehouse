"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useOffers } from "@/hooks/useCmsData";
import { offerIconMap } from "@/lib/offerIcons";
import { OFFER_IMAGE_GRADIENT } from "@/lib/cmsConstants";
import OfferCardImage from "@/components/OfferCardImage";

const DOORDASH_URL = "https://www.doordash.com";

export default function SpecialOffers() {
  const { items: offers, hydrated } = useOffers();

  return (
    <section id="offers" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(232,93,4,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Hot Deals"
          title="Special"
          titleHighlight="Offers"
          description="Indulge more, spend less. Our curated combos are designed to delight every taste bud."
        />

        {!hydrated ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[420px] rounded-3xl skeleton border border-brand-border"
              />
            ))}
          </div>
        ) : offers.length === 0 ? (
          <p className="text-center text-brand-cream-muted py-12">
            No offers available right now. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => {
              const Icon = offerIconMap[offer.icon] ?? offerIconMap.gift;
              return (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative bg-brand-card rounded-3xl overflow-hidden border border-brand-border hover:border-brand-orange/40 transition-all duration-400 shadow-card hover:shadow-card-hover"
                >
                  <div className="relative h-52 overflow-hidden">
                    <OfferCardImage
                      offer={offer}
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${OFFER_IMAGE_GRADIENT} opacity-80`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-card" />

                    <div className="absolute top-4 left-4">
                      <span
                        className={`${offer.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                      >
                        {offer.badge}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="glass-dark text-brand-cream text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand-orange" />
                        {offer.timeLeft}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display font-bold text-xl text-brand-cream group-hover:text-brand-orange transition-colors duration-200">
                          {offer.title}
                        </h3>
                        <p className="text-brand-orange text-sm font-medium mt-0.5">
                          {offer.subtitle}
                        </p>
                      </div>
                      <div className="bg-brand-orange/10 p-2.5 rounded-xl border border-brand-orange/20">
                        <Icon className="w-5 h-5 text-brand-orange" />
                      </div>
                    </div>

                    <p className="text-brand-cream-muted text-sm leading-relaxed mb-5">
                      {offer.description}
                    </p>

                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-display font-bold text-3xl text-brand-orange">
                        {offer.salePrice}
                      </span>
                      <div>
                        <span className="text-brand-cream-muted text-sm line-through block">
                          {offer.originalPrice}
                        </span>
                        <span className="text-green-400 text-xs font-semibold">
                          {offer.savings}
                        </span>
                      </div>
                    </div>

                    <motion.a
                      href={DOORDASH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2 w-full bg-brand-orange hover:bg-brand-orange-light text-white py-3 rounded-xl font-semibold text-sm transition-colors duration-200 shadow-glow-orange group/btn"
                    >
                      <span>Grab This Deal</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="mt-14 overflow-hidden rounded-2xl bg-brand-orange/10 border border-brand-orange/20 py-3">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-brand-orange/80 text-sm font-medium mx-8 flex items-center gap-2"
              >
                <span>🔥</span> Free delivery on orders over $25 &nbsp;·&nbsp;
                Use code{" "}
                <span className="font-bold text-brand-orange">SMOKEHOUSE10</span>{" "}
                for 10% off &nbsp;·&nbsp; <span>⚡</span> New items every week
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
