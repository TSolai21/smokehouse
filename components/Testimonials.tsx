"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useReviews } from "@/hooks/useCmsData";

export default function Testimonials() {
  const { items: reviews, hydrated } = useReviews();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (reviews.length === 0) {
      setCurrent(0);
      return;
    }
    if (current >= reviews.length) {
      setCurrent(0);
    }
  }, [reviews.length, current]);

  const paginate = useCallback(
    (dir: number) => {
      if (reviews.length === 0) return;
      setDirection(dir);
      setCurrent((prev) => (prev + dir + reviews.length) % reviews.length);
    },
    [reviews.length]
  );

  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate, reviews.length]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const review = reviews[current];

  return (
    <section
      id="reviews"
      className="py-24 bg-brand-charcoal relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Reviews"
          title="What Our"
          titleHighlight="Fans Say"
          description="Real stories from real food lovers who've made Smokehouse their go-to."
        />

        {!hydrated ? (
          <div className="max-w-3xl mx-auto h-64 rounded-3xl skeleton border border-brand-border" />
        ) : reviews.length === 0 ? (
          <p className="text-center text-brand-cream-muted py-12">
            No reviews yet. Be the first to share your experience!
          </p>
        ) : (
          <div className="relative max-w-3xl mx-auto">
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass border border-brand-border rounded-full flex items-center justify-center text-brand-cream-muted hover:text-brand-orange hover:border-brand-orange/30 transition-all duration-200"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass border border-brand-border rounded-full flex items-center justify-center text-brand-cream-muted hover:text-brand-orange hover:border-brand-orange/30 transition-all duration-200"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={review.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-brand-card border border-brand-border rounded-3xl p-8 md:p-10 relative"
                >
                  <div className="absolute top-6 right-8 opacity-10">
                    <Quote className="w-20 h-20 text-brand-orange" />
                  </div>

                  <div className="flex gap-1 mb-5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-brand-gold text-brand-gold"
                      />
                    ))}
                  </div>

                  <p className="text-brand-cream text-lg md:text-xl leading-relaxed font-light mb-6 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.avatarBg} flex items-center justify-center text-white font-bold text-sm`}
                      >
                        {review.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-brand-cream font-semibold">
                            {review.name}
                          </span>
                          {review.verified && (
                            <span className="bg-brand-orange/20 text-brand-orange text-[10px] font-bold px-2 py-0.5 rounded-full border border-brand-orange/20">
                              Verified
                            </span>
                          )}
                        </div>
                        <span className="text-brand-cream-muted text-sm">
                          {review.handle}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-brand-orange text-xs font-semibold">
                        Ordered:
                      </div>
                      <div className="text-brand-cream-muted text-sm">
                        {review.dish}
                      </div>
                      <div className="text-brand-cream-muted/50 text-xs mt-0.5">
                        {review.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-brand-orange"
                      : "w-2 h-2 bg-brand-border hover:bg-brand-cream-muted/50"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-12 text-center"
        >
          {[
            { value: "4.9", label: "Average Rating" },
            { value: "10K+", label: "Reviews" },
            { value: "98%", label: "Recommend Us" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-brand-card border border-brand-border rounded-2xl py-4 px-3"
            >
              <div className="font-display font-bold text-2xl text-brand-orange">
                {stat.value}
              </div>
              <div className="text-brand-cream-muted text-xs mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
