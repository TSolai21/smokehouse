"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  menuItems,
  menuCategories,
  isValidCategoryId,
  type CategoryId,
} from "@/lib/menuData";
import MenuCard from "@/components/MenuCard";
import CategoryNav from "@/components/CategoryNav";

const DOORDASH_URL = "https://www.doordash.com";

export default function MenuPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const activeCategory: CategoryId = isValidCategoryId(categoryParam)
    ? categoryParam
    : "all";

  const [searchQuery, setSearchQuery] = useState("");

  const activeLabel =
    menuCategories.find((c) => c.id === activeCategory)?.label ?? "All";

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      if (!matchesCategory) return false;
      if (!query) return true;

      return (
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-brand-charcoal pt-24 pb-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/#menu"
          className="inline-flex items-center gap-2 text-brand-cream-muted hover:text-brand-orange text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <motion.div className="text-center mb-10">
          <span className="inline-block text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20">
            Full Menu
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-cream mb-3">
            {activeLabel === "All" ? (
              <>
                Browse Our{" "}
                <span className="text-gradient">Full Menu</span>
              </>
            ) : (
              <>
                {activeLabel}{" "}
                <span className="text-gradient">Collection</span>
              </>
            )}
          </h1>
          <p className="text-brand-cream-muted text-base md:text-lg max-w-xl mx-auto">
            Search by name or ingredient, filter by category, then order your
            favorites on DoorDash.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-xl mx-auto mb-10"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-cream-muted/50 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, pizza, drinks..."
              aria-label="Search menu items"
              className="w-full bg-brand-card border border-brand-border hover:border-brand-orange/30 focus:border-brand-orange rounded-2xl py-4 pl-12 pr-12 text-brand-cream placeholder-brand-cream-muted/40 outline-none transition-colors duration-200 text-base"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-cream-muted hover:text-brand-orange transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category navigation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-12"
        >
          <CategoryNav
            activeCategory={activeCategory}
            layoutId="menuPageCategoryPill"
          />
        </motion.div>

        {/* Results count */}
        <p className="text-brand-cream-muted text-sm mb-6 text-center">
          {filteredItems.length}{" "}
          {filteredItems.length === 1 ? "item" : "items"} found
          {searchQuery && (
            <span>
              {" "}
              for &ldquo;<span className="text-brand-cream">{searchQuery}</span>
              &rdquo;
            </span>
          )}
        </p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 glass border border-brand-border rounded-3xl"
            >
              <p className="text-brand-cream text-lg font-medium mb-2">
                No items found
              </p>
              <p className="text-brand-cream-muted text-sm mb-6">
                Try a different search term or browse another category.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-brand-orange hover:text-brand-orange-light text-sm font-semibold transition-colors"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* DoorDash CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a
            href={DOORDASH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-glow-orange hover:shadow-glow-orange-lg"
          >
            Order on DoorDash
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
