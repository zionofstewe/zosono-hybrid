"use client"

import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const handleScrollClick = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <button
        onClick={handleScrollClick}
        className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors duration-300 group"
        aria-label="Scroll to explore more content"
      >
        <span className="text-xs font-medium tracking-wider uppercase font-system">Scroll to Explore</span>
        <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/50 transition-colors duration-300">
          <ChevronDown className="w-3 h-3 animate-bounce" />
        </div>
      </button>
    </div>
  )
}
