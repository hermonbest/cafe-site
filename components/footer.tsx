import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2C1810] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cafe Info */}
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4 text-[#F5F5DC]">Perfect Peace Café</h3>
            <p className="text-gray-300 mb-4">
              Where every sip brings serenity. Experience the perfect blend of traditional Ethiopian coffee culture 
              and modern café comfort in the heart of Mekelle.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">☕</span>
              </div>
              <div className="w-8 h-8 bg-[#4E342E] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">☮</span>
              </div>
              <div className="w-8 h-8 bg-[#6B8E23] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🌱</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-[#F5F5DC]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-300 hover:text-[#6B8E23] transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#6B8E23] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#6B8E23] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <span className="text-gray-300">Opening Soon!</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-[#F5F5DC]">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#6B8E23]" />
                <span className="text-gray-300 text-sm">
                  Business around Desta Hotel<br />
                  Mekelle, Ethiopia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#6B8E23]" />
                <a 
                  href="tel:+251914555747" 
                  className="text-gray-300 hover:text-[#6B8E23] transition-colors text-sm"
                >
                  +251 91 455 5747
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#6B8E23]" />
                <a 
                  href="mailto:rovellema21@gmail.com" 
                  className="text-gray-300 hover:text-[#6B8E23] transition-colors text-sm"
                >
                  rovellema21@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#6B8E23]" />
                <span className="text-gray-300 text-sm">
                  8:00 AM - 8:00 PM<br />
                  Daily
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Perfect Peace Café. All rights reserved. | 
            <span className="ml-2">Opening Soon in Mekelle, Ethiopia</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
