import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CategoryCard from "@/components/CategoryCard";
import SectionHeader from "@/components/SectionHeader";
import { categories } from "@/lib/menuData";

export const metadata: Metadata = {
  title: "Menu Categories | Curry Express",
  description: "Browse our authentic curries, clay-oven tandoori, lassis, and desserts. Order your favorites today.",
};

export default function MenuPage() {
  return (
    <main className="relative overflow-x-hidden bg-brand-charcoal min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <SectionHeader
          badge="Our Menu"
          title="Explore Our"
          titleHighlight="Categories"
          description="Select a category to view our delicious authentic Indian and Chinese dishes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 justify-items-center sm:justify-items-stretch">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} className="w-full max-w-[360px] mx-auto sm:max-w-none" />
          ))}
        </div>
      </div>

      <Footer />

    </main>
  );
}
