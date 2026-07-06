'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function FlavorsPage() {
  const flavors = [
    {
      name: 'Strawberry Burst',
      description: 'Sweet, sun-ripened strawberries swirled into creamy yogurt.',
      image: '/strawberry-yogurt.png',
      badge: 'Bestseller',
      badgeColor: 'bg-[#0EA5E9]',
      textColor: 'text-white',
    },
    {
      name: 'Golden Mango',
      description: 'Juicy tropical mango with a smooth, velvety finish.',
      image: '/mango-yogurt.png',
      badge: 'New',
      badgeColor: 'bg-[#0EA5E9]',
      textColor: 'text-white',
    },
    {
      name: 'Wild Blueberry',
      description: 'Tangy blueberries packed with antioxidant goodness.',
      image: '/blueberry-yogurt.png',
      badge: 'Classic',
      badgeColor: 'bg-[#0EA5E9]',
      textColor: 'text-white',
    },
    {
      name: 'Natural & Honey',
      description: 'Pure Greek-style yogurt finished with golden honey.',
      image: '/honey-yogurt.png',
      badge: 'Classic',
      badgeColor: 'bg-[#0EA5E9]',
      textColor: 'text-white',
    },
    {
      name: 'Coconut Dream',
      description: 'Creamy coconut flavor with tropical vibes.',
      image: '/coconut-yogurt.png',
      badge: 'Popular',
      badgeColor: 'bg-[#0EA5E9]',
      textColor: 'text-white',
    },
    {
      name: 'Passion Fruit',
      description: 'Tart and tangy passion fruit with smooth yogurt.',
      image: '/passion-fruit-yogurt.png',
      badge: 'New',
      badgeColor: 'bg-[#0EA5E9]',
      textColor: 'text-white',
    },
    {
      name: 'Mixed Berries',
      description: 'A medley of fresh berries in every spoonful.',
      image: '/mixed-berries-yogurt.png',
      badge: 'Popular',
      badgeColor: 'bg-[#0EA5E9]',
      textColor: 'text-white',
    },
    {
      name: 'Pistachio',
      description: 'Nutty pistachio flavor for the adventurous palate.',
      image: '/pistachio-yogurt.png',
      badge: 'Seasonal',
      badgeColor: 'bg-[#0EA5E9]',
      textColor: 'text-white',
    },
  ]

  return (
    <div className="min-h-screen bg-white relative" style={{
      backgroundImage: 'url(/milyogo-watermark.png)',
      backgroundRepeat: 'repeat',
      backgroundSize: '350px 350px',
      backgroundAttachment: 'fixed',
      backgroundOpacity: 0.15,
    }}>
      <div className="absolute inset-0 bg-white opacity-85 pointer-events-none"></div>
      <div className="relative z-10">
      <Header />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="text-[#2D7A3E] font-semibold text-sm uppercase tracking-wide">Our Flavors</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2">A flavor for every craving</h1>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            Made fresh in small batches with real fruit. Pick your favorite, or collect them all.
          </p>
        </div>
      </section>

      {/* Flavors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavors.map((flavor) => (
            <div key={flavor.name} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 ${flavor.badgeColor} ${flavor.textColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                  {flavor.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{flavor.name}</h3>
                <p className="text-gray-700 text-sm mt-2">{flavor.description}</p>
                <Link href="/order" className="block mt-4">
                  <button className="w-full py-2 bg-[#2D7A3E] text-white rounded-lg font-semibold hover:bg-[#1f5629] transition-colors">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      </div>
    </div>
  )
}
