import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Marie L.",
      rating: 5,
      comment: "Des produits d'une fraîcheur exceptionnelle. Je recommande vivement!"
    },
    {
      id: 2,
      name: "Pierre D.",
      rating: 5,
      comment: "Service client impeccable et livraison rapide. Très satisfait!"
    },
    {
      id: 3,
      name: "Sophie M.",
      rating: 4.5,
      comment: "Excellente qualité des produits frais. Je suis cliente régulière."
    }
  ]

  return (
    <section className="py-16 bg-muted px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Ce que disent nos clients
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardHeader>
              <div className="flex items-center gap-2">
                {"⭐".repeat(Math.floor(testimonial.rating))}
                {testimonial.rating % 1 === 0.5 && "⭐"}
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 italic">&quot;{testimonial.comment}&quot;</p>
              <p className="font-semibold">{testimonial.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 