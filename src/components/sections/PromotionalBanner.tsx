import { Button } from "@/components/ui/button"

export default function PromotionalBanner() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Offre Spéciale: Livraison Gratuite
        </h2>
        <p className="text-xl mb-6">
          Pour les commandes de 10 000 F ou plus
        </p>
        <Button variant="secondary" size="lg">
          Voir Détails
        </Button>
      </div>
    </section>
  )
} 