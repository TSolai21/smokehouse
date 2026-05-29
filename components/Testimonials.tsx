"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, X, Camera } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { useReviews } from "@/hooks/useCmsData";
import type { Review } from "@/lib/cmsTypes";

export default function Testimonials() {
  const { items: reviews, hydrated } = useReviews();
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  // Function to truncate text to a specific length
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <section id="reviews" className="py-12 bg-texture relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Reviews"
          title="What Our"
          titleHighlight="Fans Say"
          description="Real stories from real food lovers who've made Curry Express their go-to."
        />

        {!hydrated ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 rounded-3xl skeleton border border-brand-border" />
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <p className="text-center text-brand-cream-muted py-12">
            No reviews yet. Be the first to share your experience!
          </p>
        ) : (
          <div className="relative mt-12 overflow-hidden group">
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brand-charcoal to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-brand-charcoal to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-6 px-6">
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex gap-6 shrink-0">
                  {reviews.map((review, i) => (
                    <motion.div
                      key={`${arrayIndex}-${review.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      onClick={() => setSelectedReview(review)}
                      className="bg-brand-card/50 hover:bg-brand-card border border-brand-border hover:border-brand-orange/30 rounded-3xl p-6 relative cursor-pointer transition-colors group/card flex flex-col w-[350px] shrink-0"
                    >
                      <div className="absolute top-4 right-4 opacity-10 group-hover/card:text-brand-orange transition-colors">
                        <Quote className="w-10 h-10" />
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>

                      <p className="text-brand-cream text-sm leading-relaxed font-light mb-4 italic flex-grow whitespace-normal">
                        &ldquo;{truncateText(review.text, 120)}&rdquo;
                      </p>

                      {review.image && (
                        <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-6 border border-brand-border/50 group-hover/card:border-brand-orange/30 transition-colors">
                           <Image 
                             src={review.image} 
                             alt={`Photo by ${review.name}`} 
                             fill 
                             className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                           />
                           <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-brand-cream border border-white/10">
                             <Camera className="w-3.5 h-3.5" />
                           </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-border/50">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.avatarBg} flex items-center justify-center text-white font-bold text-xs shrink-0`}
                          >
                            {review.avatar}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-brand-cream font-semibold text-sm truncate">
                                {review.name}
                              </span>
                              {review.verified && (
                                <span className="bg-brand-orange/20 text-brand-orange text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-brand-orange/20 shrink-0">
                                  Verified
                                </span>
                              )}
                            </div>
                            <span className="text-brand-cream-muted text-xs truncate block">
                              {review.handle}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}


      </div>

      {/* Modal for Full Review */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReview(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-card border border-brand-border rounded-3xl p-8 md:p-12 shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 p-2 text-brand-cream-muted hover:text-brand-orange transition-colors rounded-full hover:bg-brand-border"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-8 right-12 opacity-5 pointer-events-none">
                <Quote className="w-32 h-32 text-brand-orange" />
              </div>

              <div className="flex gap-2 mb-6">
                {[...Array(selectedReview.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {selectedReview.image && (
                <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 border border-brand-border shadow-inner">
                  <Image 
                    src={selectedReview.image} 
                    alt={`Photo by ${selectedReview.name}`} 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}

              <p className="text-brand-cream text-base md:text-xl leading-relaxed font-light mb-8 italic relative z-10">
                &ldquo;{selectedReview.text}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-brand-border">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${selectedReview.avatarBg} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {selectedReview.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-cream font-semibold text-lg">
                        {selectedReview.name}
                      </span>
                      {selectedReview.verified && (
                        <span className="bg-brand-orange/20 text-brand-orange text-[10px] font-bold px-2 py-0.5 rounded-full border border-brand-orange/20">
                          Verified
                        </span>
                      )}
                    </div>
                    <span className="text-brand-cream-muted">
                      {selectedReview.handle}
                    </span>
                  </div>
                </div>
                
                <div className="text-left sm:text-right">
                  <div className="text-brand-orange text-xs font-semibold uppercase tracking-wider mb-1">
                    Ordered
                  </div>
                  <div className="text-brand-cream-muted text-sm font-medium">
                    {selectedReview.dish}
                  </div>
                  <div className="text-brand-cream-muted/50 text-xs mt-1">
                    {selectedReview.date}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
