import { Geist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/layout/Navbar'
import { CartProvider } from "@/contexts/CartContext";
import { CartSheet } from "@/components/CartSheet";

const googleFont = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Leuz Market & Co',
  description: 'Vente de produits locaux et importés',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={googleFont.className}>
      <body>
        <CartProvider>
          <Navbar />
          <div className="flex items-center gap-4">
            <CartSheet />
          </div>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
