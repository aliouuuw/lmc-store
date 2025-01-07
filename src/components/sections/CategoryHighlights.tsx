"use client"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function CategoryHighlights() {
  const categories = [
    {
      title: "Produits Frais",
      description: "Découvrez notre sélection de viandes de volaille, charcuterie, œufs et accessoires pour poulailler.",
      image: "/images/produits-frais.png",
      link: "/produits-frais"
    },
    {
      title: "Divers",
      description: "Explorez notre gamme variée de produits pour tous vos besoins.",
      image: "/images/divers.webp",
      link: "/divers"
    }
  ]

  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Card key={category.title} className="overflow-hidden">
            <div className="h-64 relative">
              <Image 
                src={category.image} 
                alt={category.title}
                fill
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                onClick={() => window.location.href = category.link}
              >
                Voir Plus
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
} 