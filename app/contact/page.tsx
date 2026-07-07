'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // The form will submit to Formspree via the form action
    const form = e.target as HTMLFormElement
    form.submit()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

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
          <p className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wide">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2">Contact Milyogo</h1>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you. Reach out anytime!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0EA5E9] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                  <a href="tel:+11234567890" className="text-[#2D7A3E] hover:underline text-lg">
                    (123) 456-7890
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2D7A3E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  <a href="mailto:info@clientbusiness.com" className="text-[#2D7A3E] hover:underline text-lg">
                    info@clientbusiness.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2D7A3E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Address</h3>
                  <p className="text-gray-700 text-lg">123 Business Street, City, Country</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2D7A3E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Hours</h3>
                  <p className="text-gray-700 text-lg">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Keep in Touch</h2>

            <form
              action="https://formspree.io/f/xaqgbjja"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-gray-900"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent text-gray-900"
                    placeholder="your@email.com"
                  />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7A3E] focus:border-transparent resize-none text-gray-900"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#2D7A3E] hover:bg-[#1f5629] text-white py-3 text-lg font-semibold"
              >
                Send Message
              </Button>

              {/* Success Message */}
              {formSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  )
}
