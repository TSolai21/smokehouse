"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  ArrowRight
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const DOORDASH_URL = "https://www.doordash.com";

export default function LocationContact() {
  return (
    <section id="contact" className="py-12 bg-brand-charcoal relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Find Us"
          title="Contact &"
          titleHighlight="Location"
          description="Visit us in Montgomery for authentic flavors, or order via DoorDash from the comfort of your home."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-stretch">
          {/* Left Column: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Location Card */}
              <div className="bg-brand-card/30 backdrop-blur-sm border border-brand-border hover:border-brand-orange/30 rounded-2xl p-6 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-brand-cream font-semibold text-lg mb-2">Location</h3>
                <p className="text-brand-cream-muted text-sm leading-relaxed">
                  15190 Walden Rd<br />Montgomery, TX 77356
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-brand-card/30 backdrop-blur-sm border border-brand-border hover:border-brand-orange/30 rounded-2xl p-6 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-brand-cream font-semibold text-lg mb-2">Contact</h3>
                <a href="tel:+13468631124" className="text-brand-cream-muted hover:text-brand-orange text-sm transition-colors block">
                  +1 (346) 863-1124
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-brand-card/30 backdrop-blur-sm border border-brand-border hover:border-brand-orange/30 rounded-2xl p-6 transition-colors group flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-brand-cream font-semibold text-lg">Hours</h3>
                </div>
                <p className="text-brand-cream-muted text-sm sm:ml-13 mt-2 sm:mt-0">
                  Open Daily: 11:00 AM – 9:30 PM
                </p>
              </div>
              <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Open Now</span>
              </div>
            </div>

            {/* Socials Card */}
            <div className="bg-brand-card/30 backdrop-blur-sm border border-brand-border rounded-2xl p-6">
              <h3 className="text-brand-cream font-semibold mb-4 text-center sm:text-left">Follow Us</h3>
              <div className="flex gap-4 justify-center sm:justify-start">
                {[
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                    className="w-12 h-12 glass border border-brand-border hover:border-brand-orange/30 rounded-xl flex items-center justify-center text-brand-cream-muted hover:text-brand-orange transition-colors duration-200 shadow-lg"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* DoorDash CTA */}
            <motion.a
              href={DOORDASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between bg-brand-border/50 hover:bg-brand-orange/20 border border-brand-border hover:border-brand-orange/30 text-brand-cream hover:text-brand-orange px-6 py-5 rounded-2xl text-base font-semibold transition-all duration-300 group mt-2"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF3008]/20 flex items-center justify-center">
                  <span className="text-[#FF3008] font-bold text-xl">D</span>
                </div>
                <span>Order Delivery on DoorDash</span>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right Column: Large Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-brand-border relative group h-[400px] lg:h-auto shadow-card hover:border-brand-orange/30 transition-colors"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.8825828628045!2d-95.6322986241315!3d30.395159374748834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864723cdae004d49%3A0x86d06d9a103c80a2!2s15190%20Walden%20Rd%2C%20Montgomery%2C%20TX%2077356!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1) opacity(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Curry Express Location"
              className="absolute inset-0 w-full h-full transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-brand-charcoal/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
            
            {/* Overlay Map Pin */}
            <div className="absolute bottom-6 left-6 glass-dark border border-white/10 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl backdrop-blur-md">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <span className="text-brand-cream text-sm font-semibold">
                Get Directions
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
