import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingOrderButton from "@/components/FloatingOrderButton";
import MenuPageContent from "@/components/MenuPageContent";

export const metadata: Metadata = {
  title: "Menu | Smokehouse & Co.",
  description:
    "Browse our full menu of premium burgers, pizzas, drinks, and desserts. Search and filter, then order on DoorDash.",
};

function MenuPageFallback() {
  return (
    <div className="min-h-screen bg-brand-charcoal pt-32 flex items-center justify-center">
      <div
        className="w-10 h-10 border-2 border-brand-orange border-t-transparent rounded-full animate-spin"
        aria-hidden
      />
    </div>
  );
}

export default function MenuPage() {
  return (
    <main className="relative overflow-x-hidden bg-brand-charcoal">
      <Navbar />
      <Suspense fallback={<MenuPageFallback />}>
        <MenuPageContent />
      </Suspense>
      <Footer />
      <FloatingOrderButton />
    </main>
  );
}
