"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
  Mail,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.jpg";

const DOORDASH_URL = "https://www.doordash.com";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Special Offers", href: "/#offers" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Accessibility", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-brand-charcoal border-t border-brand-border relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={logo}
                alt="Curry Express Logo"
                className="h-10 w-auto rounded-md object-contain"
              />
              <div>
                <span className="font-display font-bold text-xl text-brand-cream">
                  Curry
                </span>
                <span className="text-brand-orange font-display italic text-xl ml-1">
                  Express
                </span>
              </div>
            </div>
            <p className="text-brand-cream-muted text-sm leading-relaxed mb-5">
              Serving authentic, aromatic Indian & Chinese cuisine since 2011. Every bite is a journey of spices.
            </p>
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
                  aria-label={label}
                  className="w-9 h-9 glass border border-brand-border hover:border-brand-orange/30 rounded-xl flex items-center justify-center text-brand-cream-muted hover:text-brand-orange transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-cream font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-cream-muted hover:text-brand-orange text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <h4 className="text-brand-cream font-semibold mb-5 text-sm uppercase tracking-wider">
              Order Online
            </h4>
            <p className="text-brand-cream-muted text-sm leading-relaxed mb-5">
              Skip the wait. Order your favorites via DoorDash and get them
              delivered fresh to your door.
            </p>
            <motion.a
              href={DOORDASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-glow-orange hover:bg-brand-orange-light transition-colors duration-200"
            >
              Order Now
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-brand-cream font-semibold mb-5 text-sm uppercase tracking-wider">
              Stay in the Loop
            </h4>
            <p className="text-brand-cream-muted text-sm leading-relaxed mb-4">
              Get exclusive offers, new menu alerts, and behind-the-scenes
              content straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-cream-muted/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-brand-card border border-brand-border hover:border-brand-orange/30 focus:border-brand-orange rounded-xl py-2.5 pl-9 pr-3 text-sm text-brand-cream placeholder-brand-cream-muted/40 outline-none transition-colors duration-200"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-brand-orange text-white px-4 rounded-xl text-sm font-semibold hover:bg-brand-orange-light transition-colors duration-200 whitespace-nowrap"
                >
                  Join
                </motion.button>
              </div>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-xs mt-2"
                >
                  You&apos;re in! Welcome to the family 🔥
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-cream-muted/60 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Curry Express. All rights
            reserved. Ordering powered by DoorDash.
          </p>

        </div>
      </div>
    </footer>
  );
}
