"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px]">
          <Image 
            src="/images/lmc-us.jpeg"
            alt="Notre ferme"
            fill
            quality={100}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">À Propos de Leuz Market & Co</h2>
          <p className="text-lg mb-6">
            Chez Leuz Market & Co, nous nous engageons à fournir des produits locaux et importés 
            de la plus haute qualité. Notre passion pour l&apos;excellence et notre 
            engagement envers nos clients nous distinguent dans le marché.
          </p>
          <Button 
            onClick={() => window.location.href = '/about'}
          >
            En Savoir Plus
          </Button>
        </div>
      </div>
    </section>
  )
} 