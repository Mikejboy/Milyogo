'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Heart, Leaf, Zap, Shield } from 'lucide-react'

export default function BenefitsPage() {
  const benefits = [
    {
      icon: Heart,
      title: 'Probiotic Power',
      description: 'Live cultures support healthy digestion and gut health. Milyogo contains billions of beneficial bacteria in every spoonful.',
    },
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'No artificial flavors, preservatives, or additives. Just real fruit, real milk, and real cultures.',
    },
    {
      icon: Zap,
      title: 'Rich in Protein',
      description: 'Each serving packs 8-12g of protein to keep you energized and satisfied throughout the day.',
    },
    {
      icon: Shield,
      title: 'Calcium Boost',
      description: 'Fortified with calcium to support strong bones and teeth. Perfect for the whole family.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Header />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="text-[#2D7A3E] font-semibold text-sm uppercase tracking-wide">Why Milyogo</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2">Benefits of Fresh Yogurt</h1>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            Beyond delicious, Milyogo is nutritious. Discover why thousands of Nigerians trust us.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#2D7A3E] rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Nutrition Facts Section */}
      <section className="bg-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Nutrition Facts</h2>
            <p className="text-gray-700 mt-2 text-lg">Per 100g serving</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Calories', value: '85' },
              { label: 'Protein', value: '10g' },
              { label: 'Calcium', value: '150mg' },
              { label: 'Probiotics', value: '1B CFU' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#2D7A3E] mb-2">{item.value}</div>
                <p className="text-gray-700 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "I've been buying Milyogo for 6 months now. My digestion has never been better!",
              author: 'Chioma A.',
              location: 'Lagos',
            },
            {
              text: 'The best part is knowing exactly what goes into my family\'s yogurt. No preservatives, just goodness.',
              author: 'Tunde B.',
              location: 'Abuja',
            },
            {
              text: 'Finally, a local yogurt brand that tastes amazing AND is good for you. Proud to support Nigeria!',
              author: 'Zainab M.',
              location: 'Ibadan',
            },
          ].map((testimonial, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#F4D03F] text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6">"{testimonial.text}"</p>
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <p className="text-gray-600">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
