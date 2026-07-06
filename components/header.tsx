import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#F5F5F0] border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-[#2D7A3E] flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="text-xl font-bold text-gray-900">Milyogo</span>
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

        <Button className="bg-[#2D7A3E] hover:bg-[#1f5629] text-white">
          Order Now
        </Button>
      </nav>
    </header>
  )
}
