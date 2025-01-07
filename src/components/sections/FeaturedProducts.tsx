import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "Poulet Fermier",
      price: 5000,
      image: "/images/blanc-de-poulet.jpeg",
      tag: "Meilleure Vente"
    },
    // Add more products...
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Nous vous recommandons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group relative">
            <div className="relative h-48 overflow-hidden">
              <Image 
                src={product.image} 
                alt={product.title}
                fill
                quality={100}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              {product.tag && (
                <Badge className="absolute top-2 right-2">
                  {product.tag}
                </Badge>
              )}
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">{product.price.toFixed(2)} F</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Ajouter au panier</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
} 