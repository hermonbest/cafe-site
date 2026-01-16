"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(78, 52, 46, 0.4), rgba(78, 52, 46, 0.4)), url('/outdorr look.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
        <h1 className="font-serif font-bold text-5xl md:text-7xl mb-6">Perfect Peace Café</h1>

        <div className="h-16 mb-8 flex items-center justify-center">
          <span className="text-xl md:text-2xl text-gray-200 italic">Where Every Sip Brings Serenity</span>
        </div>

        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-[#6B8E23] hover:bg-[#5a7a1e] text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Visit Us
        </Button>
      </div>
    </section>
  )
}
