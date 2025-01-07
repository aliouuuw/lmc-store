import { Metadata } from 'next'
import ProductGrid from '@/components/ProductGrid'
import { payload } from '@/lib/payloadClient'

export const metadata: Metadata = {
  title: 'Divers',
  description: 'Découvrez notre sélection de produits divers',
}

async function getProducts() {
  const productsResponse = await payload.find({
    collection: 'products',
    where: {
      'and': [
        {
          'category.name': {
            equals: 'Divers',
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

export default async function DiversPage() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-4 pt-32 md:pt-24 pb-12">
      <h1 className="text-3xl font-bold mb-8">Divers</h1>
      <ProductGrid products={products} />
    </div>
  )
} 