import React from 'react';
import { formatDate } from '../../../utils/formatDate';
import { payload } from '@/lib/payloadClient';
import { Promotion } from '@/payload-types';

async function getActivePromotions() {
  
  const currentDate = new Date().toISOString();
  
  const promotions = await payload.find({
    collection: 'promotions',
    where: {
      and: [
        {
          active: {
            equals: true,
          },
        },
        {
          validFrom: {
            less_than_equal: currentDate,
          },
        },
        {
          validUntil: {
            greater_than_equal: currentDate,
          },
        },
      ],
    },
  });

  return promotions.docs;
}

export default async function PromotionsPage() {
  const promotions = await getActivePromotions();

  return (
    <main className="flex min-h-screen flex-col items-center px-8 pt-32 md:pt-24 pb-8">
      <h1 className="text-4xl font-bold mb-8">Nos Promotions</h1>
      
      {promotions.length === 0 ? (
        <p className="text-gray-500">Aucune promotion mise par l&apos;administrateur en cours.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {promotions.map((promo: Promotion) => (
            <div 
              key={promo.id} 
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">{promo.name}</h2>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {promo.discountPercentage}%
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{promo.description}</p>
              
              <div className="text-sm text-gray-500">
                <p>Type: {promo.type === 'product' ? 'Produit' : 
                         promo.type === 'service' ? 'Service' : 'Livraison gratuite'}</p>
                <p>Valide du: {formatDate(promo.validFrom)}</p>
                <p>Jusqu&apos;au: {formatDate(promo.validUntil)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
} 