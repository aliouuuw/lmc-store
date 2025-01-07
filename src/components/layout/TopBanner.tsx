"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <span>📞 Commandez par téléphone: 07 12 34 56 78</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">
            🚚 Livraison gratuite dès 10 000 F
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-semibold">
            -10% sur votre première commande!
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 hover:bg-primary-foreground/20"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
