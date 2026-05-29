import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { isValidCategoryId, categories, menuItems } from "@/lib/menuData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MenuCard from "@/components/MenuCard";
import MenuSearch from "@/components/MenuSearch";

export function generateStaticParams() {
  return categories.map((cat) => ({
    categoryId: cat.id,
  }));
}

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  if (!isValidCategoryId(params.categoryId) || params.categoryId === "all") {
    notFound();
  }

  const category = categories.find((c) => c.id === params.categoryId)!;
  const items = menuItems.filter((i) => i.category === category.id);

  return (
    <main className="relative overflow-x-hidden bg-brand-charcoal min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[350px]">
        <Image
          src={category.bannerImage}
          alt={category.label}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
          <span className="inline-block text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/30 backdrop-blur-sm">
            {category.emoji} Category
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-cream mb-4 drop-shadow-lg">
            {category.label}
          </h1>
          <p className="text-brand-cream-muted text-lg max-w-2xl mx-auto drop-shadow mb-8">
            Explore our delicious selection of {category.label.toLowerCase()}.
          </p>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-brand-charcoal/80 hover:bg-brand-orange text-brand-cream hover:text-white px-6 py-3 rounded-full font-medium border border-brand-border hover:border-brand-orange transition-all duration-300 backdrop-blur-md group shadow-lg"
          >
            View Full Menu
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 min-h-[50vh]">
        {items.length > 0 ? (
          <MenuSearch items={items} />
        ) : (
          <div className="text-center py-20 glass border border-brand-border rounded-3xl mt-12">
            <p className="text-brand-cream text-lg font-medium mb-2">
              Coming Soon
            </p>
            <p className="text-brand-cream-muted text-sm mb-6">
              We are adding delicious items to this category soon.
            </p>
          </div>
        )}
      </div>

      <Footer />

    </main>
  );
}
