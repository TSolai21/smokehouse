"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Flame, Tag, MessageSquare } from "lucide-react";
import AdminOffersPanel from "@/components/admin/AdminOffersPanel";
import AdminReviewsPanel from "@/components/admin/AdminReviewsPanel";

type Tab = "offers" | "reviews";

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("offers");

  return (
    <div className="min-h-screen bg-brand-black text-brand-cream">
      <header className="border-b border-brand-border glass-dark sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-orange to-brand-red flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg">Smokehouse Admin</h1>
              <p className="text-brand-cream-muted text-xs">
                Offers &amp; reviews · local storage
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-brand-cream-muted hover:text-brand-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            View site
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-2 mb-8 p-1 rounded-2xl bg-brand-card border border-brand-border w-fit">
          <button
            type="button"
            onClick={() => setTab("offers")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              tab === "offers"
                ? "bg-brand-orange text-white shadow-glow-orange"
                : "text-brand-cream-muted hover:text-brand-cream"
            }`}
          >
            <Tag className="w-4 h-4" />
            Offers
          </button>
          <button
            type="button"
            onClick={() => setTab("reviews")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              tab === "reviews"
                ? "bg-brand-orange text-white shadow-glow-orange"
                : "text-brand-cream-muted hover:text-brand-cream"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Reviews
          </button>
        </div>

        {tab === "offers" ? <AdminOffersPanel /> : <AdminReviewsPanel />}
      </main>
    </div>
  );
}
