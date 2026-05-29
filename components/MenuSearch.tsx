"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { MenuItem } from "@/lib/menuData";
import MenuCard from "@/components/MenuCard";

interface MenuSearchProps {
  items: MenuItem[];
}

export default function MenuSearch({ items }: MenuSearchProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (query.trim() === "") return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [items, query]);

  return (
    <div>
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mt-10 mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-cream-muted pointer-events-none" />
        <input
          id="menu-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dishes..."
          className="w-full bg-brand-card border border-brand-border hover:border-brand-orange/30 focus:border-brand-orange rounded-2xl pl-11 pr-10 py-3 text-brand-cream placeholder:text-brand-cream-muted/50 text-sm outline-none transition-colors duration-200"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-cream-muted hover:text-brand-cream transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Result count */}
      {query && (
        <p className="text-brand-cream-muted text-sm mb-6">
          {filtered.length} {filtered.length === 1 ? "dish" : "dishes"} found
        </p>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
              >
                <MenuCard item={item} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-20 border border-brand-border rounded-3xl bg-brand-card/30">
          <p className="text-brand-cream text-lg font-medium mb-2">No dishes found</p>
          <p className="text-brand-cream-muted text-sm">
            Try a different search term.
          </p>
        </div>
      )}
    </div>
  );
}
