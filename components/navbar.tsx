"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md" 
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`font-serif font-bold text-xl transition-colors duration-300 ${
            isScrolled ? "text-[#4E342E]" : "text-white"
          }`}>
            Perfect Peace Café
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-gray-700 hover:text-[#4E342E]" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("menu")}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-gray-700 hover:text-[#4E342E]" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              Menu
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-gray-700 hover:text-[#4E342E]" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-gray-700 hover:text-[#4E342E]" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-gray-700 hover:text-[#4E342E]" 
                  : "text-white hover:text-gray-200"
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t transition-all duration-300 ${
            isScrolled 
              ? "bg-white/95 backdrop-blur-sm border-gray-200" 
              : "bg-black/20 backdrop-blur-sm border-white/20"
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("hero")}
                className={`w-full text-left transition-colors duration-300 ${
                  isScrolled 
                    ? "text-gray-700 hover:text-[#4E342E]" 
                    : "text-white hover:text-gray-200"
                }`}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("menu")}
                className={`w-full text-left transition-colors duration-300 ${
                  isScrolled 
                    ? "text-gray-700 hover:text-[#4E342E]" 
                    : "text-white hover:text-gray-200"
                }`}
              >
                Menu
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className={`w-full text-left transition-colors duration-300 ${
                  isScrolled 
                    ? "text-gray-700 hover:text-[#4E342E]" 
                    : "text-white hover:text-gray-200"
                }`}
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className={`w-full text-left transition-colors duration-300 ${
                  isScrolled 
                    ? "text-gray-700 hover:text-[#4E342E]" 
                    : "text-white hover:text-gray-200"
                }`}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
