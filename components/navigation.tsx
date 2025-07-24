"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { ServicesDropdown } from "./services-dropdown"
import { MobileMenu } from "./mobile-menu"

const menuItems = [
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about" },
]

const ctaSequence = [
  "Book Studio Tour",
  "Audit My Social",
  "Meet Our Creators",
  "See AI Content",
  "Get Data Insights",
  "Hack My Growth",
]

export function Navigation() {
  const { isScrolled } = useScrollPosition()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentCtaIndex, setCurrentCtaIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentCtaIndex((prev) => (prev + 1) % ctaSequence.length)
        setIsTransitioning(false)
      }, 150)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 h-16 shadow-lg shadow-black/20"
            : "bg-transparent h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Responsive Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-white hover:text-cyan-400 transition-colors duration-300 font-bold">
                <span className="text-lg sm:text-xl md:text-2xl">ZOSONO MEDIA</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <ServicesDropdown />
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              {/* Rotating CTA Button */}
              <a
                href="/contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30 group overflow-hidden min-w-[160px] text-center"
              >
                <span
                  className={`relative z-10 block transition-opacity duration-300 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {ctaSequence[currentCtaIndex]}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-white/90 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
