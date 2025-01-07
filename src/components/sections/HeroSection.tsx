"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const CAROUSEL_IMAGES = [
  "/images/hero-bg-0.jpg",
  "/images/hero-bg-1.webp",
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg",
  // Add more images as needed
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % CAROUSEL_IMAGES.length
      );
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] min-h-[600px] bg-primary w-full overflow-hidden">
      {/* Carousel Background */}
      {CAROUSEL_IMAGES.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center duration-1000 brightness-50 opacity-70 transition-all"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: currentImageIndex === index ? 0.7 : 0,
            transform: currentImageIndex === index ? 'scale(1.1)' : 'scale(1)',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center space-y-8 text-white">
        <h1 className="text-5xl md:text-6xl font-bold text-center">
          Bienvenue chez Leuz Market & Co
        </h1>
        <p className="text-xl md:text-2xl pb-2 text-center">
          Des produits locaux et importés de qualité à votre portée
        </p>
        <Button
          size="lg"
          variant="default"
          className="bg-amber-800 hover:bg-amber-900"
          onClick={() => router.push("/promos")}
        >
          Découvrir les Promotions
        </Button>

        {/* Search Bar */}
        <div className="w-full max-w-xl px-4 py-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Rechercher des produits..."
              className="w-full h-12 pl-4 pr-12 rounded-lg bg-white/90 text-black"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              🔍
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
