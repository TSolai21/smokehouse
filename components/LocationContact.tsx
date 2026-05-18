"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const DOORDASH_URL = "https://www.doordash.com";

const hours = [
  { day: "Monday – Thursday", hours: "11:00 AM – 10:00 PM" },
  { day: "Friday – Saturday", hours: "11:00 AM – 12:00 AM" },
  { day: "Sunday", hours: "12:00 PM – 9:00 PM" },
];

export default function LocationContact() {
  return (
    <section
      id="contact"
      className="py-24 bg-brand-black relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Find Us"
          title="Visit Us or"
          titleHighlight="Order Online"
          description="Dine in for the full experience, or order via DoorDash from the comfort of your home."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map - spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden border border-brand-border h-80 lg:h-auto min-h-[320px] relative"
          >
            {/* Google Maps embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sFinancial%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smokehouse & Co. Location"
              className="absolute inset-0 w-full h-full"
            />
            {/* Map overlay pin */}
            <div className="absolute bottom-4 left-4 glass-dark border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span className="text-brand-cream text-sm font-medium">
                123 Flame St, New York, NY 10007
              </span>
            </div>
          </motion.div>

          {/* Info - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Address */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                </div>
                <h3 className="text-brand-cream font-semibold">Address</h3>
              </div>
              <p className="text-brand-cream-muted text-sm leading-relaxed">
                123 Flame Street, Financial District
                <br />
                New York, NY 10007
              </p>
            </div>

            {/* Phone */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-brand-orange" />
                </div>
                <h3 className="text-brand-cream font-semibold">Phone</h3>
              </div>
              <a
                href="tel:+12125550101"
                className="text-brand-orange hover:text-brand-orange-light text-sm font-medium transition-colors"
              >
                +1 (212) 555-0101
              </a>
            </div>

            {/* Hours */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-brand-orange" />
                </div>
                <h3 className="text-brand-cream font-semibold">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-2">
                {hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-brand-cream-muted">{h.day}</span>
                    <span className="text-brand-cream font-medium">
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-medium">
                  Open Now
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-5">
              <h3 className="text-brand-cream font-semibold mb-3">
                Follow Us
              </h3>
              <div className="flex gap-3">
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
                    className="w-10 h-10 glass border border-brand-border hover:border-brand-orange/30 rounded-xl flex items-center justify-center text-brand-cream-muted hover:text-brand-orange transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* DoorDash CTA */}
            <motion.a
              href={DOORDASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(232,93,4,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-brand-orange text-white py-4 rounded-2xl font-semibold text-sm shadow-glow-orange group transition-all duration-200"
            >
              <span>Order Now on DoorDash</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
