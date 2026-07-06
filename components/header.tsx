import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#F5F5F0] border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-3 group">
          {/* Yogurt Cup Logo */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <Image
              src="/milyogo-logo.png"
              alt="Milyogo yogurt logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Text Logo */}
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-black text-[#2D7A3E] tracking-tight">Milyogo</span>
            <span className="text-xs font-semibold text-[#F4D03F] tracking-widest">FRESH YOGURT</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/flavors" className="text-gray-700 hover:text-[#2D7A3E] transition-colors font-medium">
            Flavors
          </Link>
          <Link href="/benefits" className="text-gray-700 hover:text-[#2D7A3E] transition-colors font-medium">
            Benefits
          </Link>
          <Link href="/reviews" className="text-gray-700 hover:text-[#2D7A3E] transition-colors font-medium">
            Reviews
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#2D7A3E] transition-colors font-medium">
            Contact
          </Link>
        </div>

        <a href="https://wa.me/2347075049214?text=Hello%20Milyogo!%20I%20want%20to%20place%20an%20order.%20Please%20send%20me%20your%20product%20catalog%20and%20pricing." target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#2D7A3E] hover:bg-[#1f5629] text-white flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Order Now
          </Button>
        </a>
      </nav>
    </header>
  )
}
