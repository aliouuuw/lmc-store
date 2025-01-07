import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import CategoryHighlights from "@/components/sections/CategoryHighlights";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import PromotionalBanner from "@/components/sections/PromotionalBanner";
import AboutSection from "@/components/sections/AboutSection";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen pt-32 md:pt-24">
        <HeroSection />
        <div className="container mx-auto px-4">
          <CategoryHighlights />
          <FeaturedProducts />
          <PromotionalBanner />
          <AboutSection />
          <Testimonials />
          <Newsletter />
        </div>
      </main>
    </div>
  );
}
