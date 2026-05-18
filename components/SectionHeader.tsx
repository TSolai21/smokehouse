"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  center = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      <span className="inline-block text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20">
        {badge}
      </span>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-cream mb-4">
        {title}{" "}
        <span className="text-gradient">{titleHighlight}</span>
      </h2>
      {description && (
        <p className="text-brand-cream-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
