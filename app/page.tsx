'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Star, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-[#F4D03F] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🍃 Proudly made in Nigeria
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fresh yogurt that loves you back.
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Milyogo blends creamy, all-natural yogurt with real fruit and live cultures. No artificial nonsense, just bold, wholesome goodness in every spoon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/flavors">
                <Button className="bg-[#2D7A3E] hover:bg-[#1f5629] text-white px-8 py-3 text-lg w-full sm:w-auto">
                  Explore Flavors
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="border-2 border-[#2D7A3E] text-[#2D7A3E] hover:bg-[#2D7A3E] hover:text-white px-8 py-3 text-lg w-full sm:w-auto transition-colors">
                  Find a Store
                </Button>
              </Link>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F4D03F] text-[#F4D03F]" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">Loved by 12,000+ happy customers</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <Image
              src="/hero-yogurt.png"
              alt="Fresh yogurt bowl with berries and granola"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Flavors Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-[#2D7A3E] font-semibold text-sm uppercase tracking-wide">Our Flavors</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">A flavor for every craving</h2>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            Made fresh in small batches with real fruit. Pick your favorite, or collect them all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Strawberry Burst */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 bg-gradient-to-b from-pink-100 to-pink-50 flex items-center justify-center overflow-hidden">
              <Image
                src="/strawberry-yogurt.png"
                alt="Strawberry Burst yogurt"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#2D7A3E] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Bestseller
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Strawberry Burst</h3>
              <p className="text-gray-700 text-sm mt-2">Sweet, sun-ripened strawberries swirled into creamy yogurt.</p>
            </div>
          </div>

          {/* Golden Mango */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 bg-gradient-to-b from-yellow-100 to-yellow-50 flex items-center justify-center overflow-hidden">
              <Image
                src="/mango-yogurt.png"
                alt="Golden Mango yogurt"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#F4D03F] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                New
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Golden Mango</h3>
              <p className="text-gray-700 text-sm mt-2">Juicy tropical mango with a smooth, velvety finish.</p>
            </div>
          </div>

          {/* Wild Blueberry */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 bg-gradient-to-b from-purple-100 to-purple-50 flex items-center justify-center overflow-hidden">
              <Image
                src="/blueberry-yogurt.png"
                alt="Wild Blueberry yogurt"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#2D7A3E] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Classic
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Wild Blueberry</h3>
              <p className="text-gray-700 text-sm mt-2">Tangy blueberries packed with antioxidant goodness.</p>
            </div>
          </div>

          {/* Natural & Honey */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 bg-gradient-to-b from-amber-100 to-amber-50 flex items-center justify-center overflow-hidden">
              <Image
                src="/honey-yogurt.png"
                alt="Natural & Honey yogurt"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#2D7A3E] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Classic
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">Natural & Honey</h3>
              <p className="text-gray-700 text-sm mt-2">Pure Greek-style yogurt finished with golden honey.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/flavors">
            <Button className="bg-[#2D7A3E] hover:bg-[#1f5629] text-white px-8 py-3 text-lg">
              See All Flavors
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2D7A3E] text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">100% Natural Ingredients</h2>
          <p className="text-lg mb-8 text-green-100">No artificial flavors, no preservatives, just pure goodness.</p>
          <a href="https://wa.me/2347075049214?text=Hello%20Milyogo!%20I%20want%20to%20place%20an%20order.%20Please%20send%20me%20your%20product%20catalog%20and%20pricing." target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#F4D03F] text-gray-900 hover:bg-yellow-300 px-8 py-3 text-lg font-bold flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Order Now
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
