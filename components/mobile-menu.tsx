"use client"

import { useState, useEffect } from "react"
import { X, ChevronDown, Zap, Users, TrendingUp, Bot, BarChart3, Target } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  {
    name: "Live Shopping & Commerce Streaming",
    description: "Professional multi-platform broadcasting",
    icon: Zap,
    href: "/contact",
  },
  {
    name: "Social Media Mastery",
    description: "Transform followers into customers",
    icon: Users,
    href: "/contact",
  },
  {
    name: "Influencer & Affiliate Marketing",
    description: "850+ influencers from nano to mega",
    icon: TrendingUp,
    href: "/contact",
  },
  {
    name: "AI-Powered Content Production",
    description: "From concept to viral content",
    icon: Bot,
    href: "/contact",
  },
  {
    name: "Data Intelligence & Analytics",
    description: "Intelligence that drives decisions",
    icon: BarChart3,
    href: "/contact",
  },
  {
    name: "360° Customer Growth Hacking",
    description: "Complete customer lifecycle optimization",
    icon: Target,
    href: "/contact",
  },
]

const ctaSequence = [
  "Book Studio Tour",
  "Audit My Social",
  "Meet Our Creators",
  "See AI Content",
  "Get Data Insights",
  "Hack My Growth",
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false)
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      setServicesOpen(false)
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-black/95 backdrop-blur-xl border-l border-white/10 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-xl font-bold text-white">Menu</span>
            <button onClick={onClose} className="p-2 text-white/70 hover:text-white transition-colors duration-200">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="space-y-6">
              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-white/90 hover:text-cyan-400 transition-colors duration-200 text-lg font-medium"
                >
                  Services
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="mt-4 space-y-3 pl-4">
                    {services.map((service, index) => {
                      const IconComponent = service.icon
                      return (
                        <a
                          key={index}
                          href={service.href}
                          onClick={onClose}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-md flex items-center justify-center">
                            <IconComponent className="w-3 h-3 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-xs text-white/60 mt-1">{service.description}</p>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Other Menu Items */}
              <a
                href="/case-studies"
                onClick={onClose}
                className="block text-white/90 hover:text-cyan-400 transition-colors duration-200 text-lg font-medium"
              >
                Case Studies
              </a>

              <a
                href="/about"
                onClick={onClose}
                className="block text-white/90 hover:text-cyan-400 transition-colors duration-200 text-lg font-medium"
              >
                About Us
              </a>
            </nav>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="/contact"
                onClick={onClose}
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <span
                  className={`block transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                >
                  {ctaSequence[currentCtaIndex]}
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-white font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  <span className="text-sm font-bold">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  <span className="text-sm font-bold">TT</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  <span className="text-sm font-bold">LI</span>
                </a>
              </div>
            </div>

            {/* Company Info */}
            <div className="mt-6 text-xs text-white/50">
              <p>PT Zosono Akselerasi Indonesia</p>
              <p className="mt-1">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
