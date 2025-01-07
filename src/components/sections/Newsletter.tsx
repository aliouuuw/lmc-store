"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Rejoignez notre communauté
        </h2>
        <p className="mb-6">
          Inscrivez-vous pour recevoir des offres exclusives et nos dernières nouveautés
        </p>
        <form 
          className="flex gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            // Handle newsletter signup
          }}
        >
          <Input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 bg-background"
            required
          />
          <Button type="submit">
            S&apos;abonner
          </Button>
        </form>
      </div>
    </section>
  )
} 