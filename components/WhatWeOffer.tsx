"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatWeOffer() {
  return (
    <section id="offerings" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Subtle ambient glow to add depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center mb-16">
          <span className="text-[#C19B5E] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            FLAVORS FOR ROYALTY
          </span>
          <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-wide">
            What We Offer
          </h2>
        </div>

        {/* CSS Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=450&fit=crop&q=80"
                alt="Delicious seafood dish"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Middle Column: Text and Bottom Image */}
          <div className="flex flex-col items-center gap-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-md mx-auto"
            >
              <p className="text-gray-300 text-sm md:text-base leading-loose font-light">
                Curry Express is your ultimate destination for a remarkable Indian and Chinese dining experience in the US. Our diverse menu, exceptional service, and inviting ambiance are designed to cater to every food lover's delight.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-sm"
            >
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=450&fit=crop&q=80"
                  alt="Tandoori platter"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=450&fit=crop&q=80"
                alt="Chicken Tikka Masala"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
