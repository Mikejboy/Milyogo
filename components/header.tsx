'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

        <div className="flex items-center gap-2">
          <a href="https://wa.me/2347075049214?text=Hello%20Milyogo!%20I%20want%20to%20place%20an%20order.%20Please%20send%20me%20your%20product%20catalog%20and%20pricing." target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <Button className="bg-[#2D7A3E] hover:bg-[#1f5629] text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Order Now
            </Button>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#2D7A3E] hover:bg-gray-200 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F5F0] border-t border-gray-200">
          <div className="px-4 py-4 flex flex-col space-y-1">
            <Link
              href="/flavors"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-[#2D7A3E] transition-colors font-medium"
            >
              Flavors
            </Link>
            <Link
              href="/benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-[#2D7A3E] transition-colors font-medium"
            >
              Benefits
            </Link>
            <Link
              href="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-[#2D7A3E] transition-colors font-medium"
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-[#2D7A3E] transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href="https://wa.me/2347075049214?text=Hello%20Milyogo!%20I%20want%20to%20place%20an%20order.%20Please%20send%20me%20your%20product%20catalog%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2"
            >
              <Button className="w-full bg-[#2D7A3E] hover:bg-[#1f5629] text-white flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Order Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
