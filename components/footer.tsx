import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/milyogo-logo.png"
                  alt="Milyogo yogurt logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">Milyogo</span>
            </div>
            <p className="text-gray-400">Fresh yogurt that loves you back. Proudly made in Nigeria.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/flavors" className="hover:text-[#F4D03F] transition-colors">Flavors</Link></li>
              <li><Link href="/benefits" className="hover:text-[#F4D03F] transition-colors">Benefits</Link></li>
              <li><Link href="/reviews" className="hover:text-[#F4D03F] transition-colors">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-[#F4D03F] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+2347075049214" className="hover:text-[#F4D03F] transition-colors">
                  Phone: 0707 504 9214
                </a>
              </li>
              <li>
                <a href="mailto:3596jamesmichael@gmail.com" className="hover:text-[#F4D03F] transition-colors">
                  Email: 3596jamesmichael@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <p className="text-gray-400">
              Monday - Saturday: 8:00 AM - 6:00 PM
            </p>
            <p className="text-gray-400 mt-2">
              Block 131 flat 3, Abesan, Lagos, Nigeria
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Milyogo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
