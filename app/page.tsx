import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedMenu from "@/components/FeaturedMenu";
import SpecialOffers from "@/components/SpecialOffers";
import WhatWeOffer from "@/components/WhatWeOffer";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import FloatingOrderButton from "@/components/FloatingOrderButton";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhatWeOffer />
      <FeaturedMenu />
      <SpecialOffers />
      <Gallery />
      <Testimonials />
      <LocationContact />
      <Footer />
      <FloatingOrderButton />
    </main>
  );
}
