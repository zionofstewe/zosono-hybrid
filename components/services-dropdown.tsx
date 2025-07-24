"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Zap, Users, TrendingUp, Bot, BarChart3, Target } from "lucide-react"

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

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsHovering(true)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    timeoutRef.current = setTimeout(() => {
      if (!isHovering) {
        setIsOpen(false)
      }
    }, 150)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false)
      setIsHovering(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsHovering(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center gap-1 text-white/90 hover:text-cyan-400 transition-colors duration-300 relative group">
        Services
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 z-[9999] overflow-hidden">
          <div className="p-4">
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <a
                    key={index}
                    href={service.href}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/20 border border-transparent transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-200">
                      <IconComponent className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200 text-sm leading-tight">
                        {service.name}
                      </h3>
                      <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-200 mt-1 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
