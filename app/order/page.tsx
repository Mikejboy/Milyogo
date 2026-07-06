'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Check } from 'lucide-react'
import { useState } from 'react'

export default function OrderPage() {
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    setTimeout(() => {
      // Redirect to home after 3 seconds
      window.location.href = '/'
    }, 3000)
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#F5F5F0]">
        <Header />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="bg-[#2D7A3E] rounded-full p-4">
                <Check className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
            <p className="text-lg text-gray-700 mb-8">
              Thank you for your order! Your delicious Milyogo yogurt will be delivered soon.
            </p>
            <p className="text-sm text-gray-600">Redirecting to home page...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Header />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-8">
            <ShoppingCart className="w-8 h-8 text-[#2D7A3E] mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Your Order</h1>
          </div>

          {/* Order Summary */}
          <div className="border-b-2 border-gray-200 pb-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Milyogo Yogurt Pack</span>
                <span className="font-semibold text-gray-900">₦5,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Delivery</span>
                <span className="font-semibold text-gray-900">₦1,000</span>
              </div>
              <div className="border-t pt-4 flex justify-between items-center">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-[#2D7A3E]">₦6,000</span>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Delivery Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2D7A3E]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2D7A3E]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                <textarea
                  placeholder="Enter your delivery address"
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2D7A3E]"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Method</h2>
            <div className="space-y-3">
              <label className="flex items-center p-4 border-2 border-[#2D7A3E] rounded-lg cursor-pointer bg-blue-50">
                <input type="radio" name="payment" defaultChecked className="mr-3" />
                <span className="font-medium text-gray-900">Bank Transfer</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#2D7A3E]">
                <input type="radio" name="payment" className="mr-3" />
                <span className="font-medium text-gray-900">Cash on Delivery</span>
              </label>
            </div>
          </div>

          {/* Promo Code */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Promo Code (Optional)</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter promo code"
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2D7A3E]"
              />
              <Button className="bg-gray-400 hover:bg-gray-500 text-white px-6">Apply</Button>
            </div>
          </div>

          {/* Order Button */}
          <Button
            onClick={handlePlaceOrder}
            className="w-full bg-[#2D7A3E] hover:bg-[#1f5629] text-white py-4 text-lg font-bold rounded-lg transition-colors"
          >
            Place Order Now
          </Button>

          <p className="text-center text-sm text-gray-600 mt-6">
            By placing an order, you agree to our terms and conditions
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
