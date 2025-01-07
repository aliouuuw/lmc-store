import { Metadata } from 'next'
import ProductGrid from '@/components/ProductGrid'
import { payload } from '@/lib/payloadClient'

export const metadata: Metadata = {
  title: 'Produits Frais',
  description: 'Découvrez notre sélection de produits frais',
}

async function getProducts() {
  const productsResponse = await payload.find({
    collection: 'products',
    where: {
      'and': [
        {
          'category.name': {
            equals: 'Produits Frais',
          },
        },
        {
          'status': {
            equals: 'available',
          },
        },
      ],
    },
    depth: 2,
  })

  return productsResponse.docs
}

export default async function ProduitsFraisPage() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-4 pt-36 pb-12">
      <h1 className="text-3xl font-bold mb-8">Produits Frais</h1>
      <ProductGrid products={products} />
    </div>
  )
} 