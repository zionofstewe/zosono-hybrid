"use client"

import { useEffect, useState } from "react"
import { BarChart3 } from "lucide-react"

export function FloatingElements() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Clean Dashboard Preview - Left Side Only */}
      <div
        className={`hidden xl:block absolute left-12 top-1/3 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-30 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <div className="w-56 h-32 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-lg border border-gray-800/30 p-3 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-3 h-3 text-cyan-400/80" />
            <span className="text-white/80 text-xs font-medium">Analytics</span>
          </div>

          {/* Clean Animated Metrics */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-xs">Revenue</span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-gradient-to-r from-cyan-400/80 to-blue-500/80 rounded-full animate-pulse" />
                </div>
                <span className="text-cyan-400/80 text-xs">+24%</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-xs">Conversion</span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-gradient-to-r from-green-400/80 to-emerald-500/80 rounded-full animate-pulse" />
                </div>
                <span className="text-green-400/80 text-xs">+18%</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-xs">Engagement</span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-to-r from-purple-400/80 to-pink-500/80 rounded-full animate-pulse" />
                </div>
                <span className="text-purple-400/80 text-xs">+31%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Connecting Line */}
        <div className="absolute -right-24 top-1/2 w-24 h-px bg-gradient-to-r from-cyan-400/20 to-transparent" />
      </div>
    </>
  )
}
