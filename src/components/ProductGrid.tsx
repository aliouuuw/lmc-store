"use client";
import type { Product } from "../payload-types";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import RichText from "./RichText";
import { useCart } from "@/contexts/CartContext";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addItem } = useCart();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="cursor-pointer">
            <div className="border rounded-lg overflow-hidden shadow-md">
              {product.images && product.images[0] && (
                <div className="relative h-48 w-full">
                  <Image
                    src={
                      (typeof product.images[0].image === "object"
                        ? product.images[0].image.url
                        : "") || "/placeholder.jpg"
                    }
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600 mt-2">
                  {product.price.toFixed(2)} F
                </p>
                {product.promotion && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm mt-2 inline-block">
                    Promotion
                  </span>
                )}
                <div className=" flex justify-between mt-4">
                  <Button onClick={() => setSelectedProduct(product)}>
                    Voir détails
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      addItem({
                        id: product.id.toString(),
                        name: product.title,
                        price: product.price,
                      });
                    }}
                  >
                    Ajouter au panier
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedProduct}
        onOpenChange={() => setSelectedProduct(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.title}</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-square">
              <Image
                src={
                  (typeof selectedProduct?.images[0]?.image === "object"
                    ? selectedProduct?.images[0]?.image.url
                    : "") || "/placeholder.jpg"
                }
                alt={selectedProduct?.title || ""}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <p className="text-lg font-semibold">
                {selectedProduct?.price} F
              </p>
              <RichText content={selectedProduct?.description} />
              {selectedProduct?.promotion && (
                <div className="bg-red-100 text-red-800 p-2 rounded">
                  Promotion:{" "}
                  {typeof selectedProduct.promotion === "object"
                    ? selectedProduct.promotion.name
                    : "Unknown"}
                </div>
              )}
              <p className="text-sm text-gray-500">
                En stock: {selectedProduct?.quantity || 0} unités
              </p>
              {/* Add more product details as needed */}
              <Button
                variant="outline"
                onClick={() => {
                  if (selectedProduct) {
                    addItem({
                      id: selectedProduct.id.toString(),
                      name: selectedProduct.title,
                      price: selectedProduct.price,
                    });
                  }
                }}
              >
                Ajouter au panier
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
