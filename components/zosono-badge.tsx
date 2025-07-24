"use client"

import { useState } from "react"
import { Building2, X } from "lucide-react"

export function ZosonoBadge() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-400/30 shadow-lg shadow-cyan-500/20 flex items-center gap-2 group hover:scale-105 transition-all duration-300">
        <Building2 className="w-4 h-4 text-white" />
        <span className="text-white text-sm font-medium">Part of Zosono.com Group</span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-2 text-white/70 hover:text-white transition-colors"
          aria-label="Close badge"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  )
}
