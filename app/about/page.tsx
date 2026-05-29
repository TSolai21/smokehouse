import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutBrand from "@/components/AboutBrand";

export const metadata = {
  title: "About Us | Curry Express",
  description: "Learn about the story behind Curry Express and our commitment to authentic Indian and Chinese cuisine.",
};

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden bg-brand-charcoal min-h-screen">
      <Navbar />
      
      {/* We add top padding because the Navbar is fixed */}
      <div className="pt-20">
        <AboutBrand />
      </div>

      <Footer />

    </main>
  );
}
