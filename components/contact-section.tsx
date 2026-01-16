"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, MessageCircle, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#4E342E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-[#F5F5DC]">Visit Us</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Come experience the perfect blend of great coffee and peaceful atmosphere in the heart of Mekelle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="w-6 h-6 text-[#6B8E23]" />
                  <h3 className="font-serif font-semibold text-xl text-[#F5F5DC]">Address</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Business around Desta Hotel
                  <br />
                  Mekelle, Ethiopia
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="w-6 h-6 text-[#6B8E23]" />
                  <h3 className="font-serif font-semibold text-xl text-[#F5F5DC]">Phone</h3>
                </div>
                <Button
                  variant="link"
                  className="text-gray-300 hover:text-[#6B8E23] p-0 h-auto text-base"
                  onClick={() => window.open("tel:+251914555747")}
                >
                  +251 91 455 5747
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="w-6 h-6 text-[#6B8E23]" />
                  <h3 className="font-serif font-semibold text-xl text-[#F5F5DC]">Email</h3>
                </div>
                <Button
                  variant="link"
                  className="text-gray-300 hover:text-[#6B8E23] p-0 h-auto text-base"
                  onClick={() => window.open("mailto:rovellema21@gmail.com")}
                >
                  rovellema21@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="w-6 h-6 text-[#6B8E23]" />
                  <h3 className="font-serif font-semibold text-xl text-[#F5F5DC]">Opening Hours</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Monday - Sunday
                  <br />
                  8:00 AM - 8:00 PM
                </p>
              </CardContent>
            </Card>

            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="font-serif font-semibold text-xl mb-4 text-[#F5F5DC]">Amenities</h3>
              <div className="space-y-2 text-gray-300">
                <p>✓ Free WiFi Available</p>
                <p>✓ All Payment Methods Accepted</p>
                <p>✓ Peaceful Atmosphere</p>
                <p>✓ Traditional Ethiopian Coffee</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                size="lg"
                variant="outline"
                className="border-[#6B8E23] text-[#6B8E23] hover:bg-[#6B8E23] hover:text-white bg-transparent"
                onClick={() => window.open("https://maps.app.goo.gl/HapLts7h2rRmGHF96")}
              >
                <MapPin className="w-5 h-5 mr-2" />
                View on Google Maps
              </Button>
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-96 lg:h-full min-h-[400px]">
            <Card className="h-full bg-white/10 border-white/20">
              <CardContent className="p-4 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d39.4667!3d13.4969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI5JzQ5LjgiTiAzOcKwMjgnMDAuMSJF!5e0!3m2!1sen!2set!4v1647043727123!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Perfect Peace Café Location - Mekelle"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-gray-400">© 2024 Perfect Peace Café. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
