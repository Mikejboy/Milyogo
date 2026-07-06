'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Chioma Adeyemi',
      location: 'Lagos',
      rating: 5,
      date: '2 weeks ago',
      title: 'Life-changing yogurt!',
      text: 'I was skeptical at first, but Milyogo has genuinely improved my digestion. The flavor is incredible too!',
      flavor: 'Strawberry Burst',
    },
    {
      name: 'Tunde Okafor',
      location: 'Abuja',
      rating: 5,
      date: '1 month ago',
      title: 'Supporting local never tasted so good',
      text: 'As a proud Nigerian, I love buying local products. Milyogo proves we can compete globally with quality.',
      flavor: 'Natural & Honey',
    },
    {
      name: 'Zainab Mohammed',
      location: 'Ibadan',
      rating: 5,
      date: '3 weeks ago',
      title: 'My kids actually ask for yogurt now',
      text: 'No preservatives, no artificial colors – just real food. My kids love it and I love what I\'m feeding them.',
      flavor: 'Golden Mango',
    },
    {
      name: 'Amara Nwankwo',
      location: 'Port Harcourt',
      rating: 5,
      date: '1 month ago',
      title: 'Worth every naira',
      text: 'Premium quality at a fair price. This is how Nigerian businesses should operate. Highly recommend!',
      flavor: 'Wild Blueberry',
    },
    {
      name: 'Kunle Adedayo',
      location: 'Calabar',
      rating: 5,
      date: '2 months ago',
      title: 'Consistency and quality matter',
      text: 'I\'ve ordered multiple times now and every single cup is perfect. The freshness is unmatched.',
      flavor: 'Passion Fruit',
    },
    {
      name: 'Ngozi Okoro',
      location: 'Enugu',
      rating: 5,
      date: '3 weeks ago',
      title: 'Finally, a real alternative',
      text: 'Tired of imported yogurt with weird ingredients. Milyogo is the answer to what I\'ve been looking for.',
      flavor: 'Coconut Dream',
    },
    {
      name: 'David Obi',
      location: 'Kano',
      rating: 5,
      date: '1 week ago',
      title: 'Perfect for fitness goals',
      text: 'High protein, probiotics, and no added sugar. Exactly what I need for my fitness journey.',
      flavor: 'Natural & Honey',
    },
    {
      name: 'Folake Adeyinka',
      location: 'Akure',
      rating: 5,
      date: '2 weeks ago',
      title: 'Quality that speaks for itself',
      text: 'The taste is pure, the ingredients are clean, and the results are visible. My skin has never looked better!',
      flavor: 'Mixed Berries',
    },
    {
      name: 'Chidi Onuorah',
      location: 'Benin City',
      rating: 5,
      date: '1 month ago',
      title: 'Best decision I made for my family',
      text: 'We switched from imported brands and never looked back. Milyogo is our trusted choice now.',
      flavor: 'Strawberry Burst',
    },
  ]

  return (
    <div className="min-h-screen bg-white relative" style={{
      backgroundImage: 'url(/milyogo-watermark.png)',
      backgroundRepeat: 'repeat',
      backgroundSize: '350px 350px',
      backgroundAttachment: 'fixed',
    }}>
      <div className="absolute inset-0 bg-white opacity-85 pointer-events-none"></div>
      <div className="relative z-10">
      <Header />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="text-[#2D7A3E] font-semibold text-sm uppercase tracking-wide">Customer Stories</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2">Loved by 12,000+ Customers</h1>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            Real feedback from real people who&apos;ve made Milyogo part of their daily routine.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-[#F4D03F] text-xl">★</span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{review.title}</h3>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>

              {/* Flavor */}
              <p className="text-sm text-gray-600 mb-4">
                Flavor: <span className="font-semibold text-gray-900">{review.flavor}</span>
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
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
