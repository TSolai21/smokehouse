"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Flame, Leaf, Clock, ChefHat } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const pillars = [
  {
    icon: Flame,
    title: "Flame-Grilled Mastery",
    description:
      "Every patty is cooked over real hardwood charcoal for that unmistakable smoky depth.",
  },
  {
    icon: Leaf,
    title: "Farm-Fresh Ingredients",
    description:
      "We source locally — from pasture-raised beef to hydroponically grown herbs.",
  },
  {
    icon: Award,
    title: "Award-Winning Recipes",
    description:
      "Our recipes have won multiple city-wide food awards — backed by years of culinary expertise.",
  },
  {
    icon: Clock,
    title: "Fast & Fresh",
    description:
      "From our kitchen to your door in under 30 minutes — piping hot and never compromised.",
  },
];

export default function AboutBrand() {
  return (
    <section
      id="about"
      className="py-24 bg-brand-charcoal relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=1000&fit=crop&q=80"
                  alt="Chef crafting a premium burger"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
              </div>

              {/* Floating card 1 - top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-6 -right-6 glass-dark border border-white/10 rounded-2xl p-4 shadow-card w-40 animate-float"
              >
                <div className="flex items-center gap-2 mb-1">
                  <ChefHat className="w-4 h-4 text-brand-orange" />
                  <span className="text-brand-cream text-xs font-semibold">
                    Head Chef
                  </span>
                </div>
                <p className="text-brand-cream-muted text-xs leading-relaxed">
                  15+ years of culinary excellence
                </p>
              </motion.div>

              {/* Floating card 2 - bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 glass-dark border border-white/10 rounded-2xl p-4 shadow-card animate-float"
              >
                <div className="text-3xl font-display font-bold text-brand-orange">
                  2011
                </div>
                <div className="text-brand-cream-muted text-xs mt-0.5">
                  Est. in the heart of the city
                </div>
              </motion.div>

              {/* Orange glow behind main image */}
              <div className="absolute inset-0 bg-orange-glow opacity-20 rounded-3xl -z-10 blur-2xl scale-110" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <span className="inline-block text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 w-fit">
              Our Story
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-cream mb-6 leading-tight">
              Where Every Bite
              <br />
              <span className="text-gradient">Tells a Story</span>
            </h2>

            <p className="text-brand-cream-muted text-base leading-relaxed mb-5">
              Born from a passion for bold flavors and honest food, Smokehouse &
              Co. opened its doors in 2011 with a single mission: to create the
              most unforgettable dining experience in the city.
            </p>
            <p className="text-brand-cream-muted text-base leading-relaxed mb-10">
              From our signature slow-smoked patties to our hand-stretched
              wood-fired pizzas, everything we serve is crafted with the
              reverence it deserves. We believe great food isn&apos;t just fuel —
              it&apos;s culture, community, and craft.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    className="flex gap-3 p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-orange/20 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-brand-cream font-semibold text-sm mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-brand-cream-muted text-xs leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
