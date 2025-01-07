"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, User } from "lucide-react"
import { Poiret_One} from "next/font/google"
import Image from "next/image"
import TopBanner from "./TopBanner"
import { CartSheet } from "../CartSheet"
import { useRouter } from "next/navigation";
const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Produits Frais", href: "/produits-frais" },
  { name: "Divers", href: "/divers" },
  { name: "Promotions", href: "/promos" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
]

const logoFont = Poiret_One({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();
  return (
    <nav className="fixed w-full h-32 md:24 top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <TopBanner />
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`${logoFont.className} text-2xl font-bold`}>
              <Image src="/images/LMC_logo_0.png" alt="Leuz Market & Co" width={100} height={100} className="h-12 w-11" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => (router.push("/admin"))}>
              <User className="h-5 w-5" />
            </Button>
            <CartSheet />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 