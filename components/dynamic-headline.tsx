"use client"

import { useHeadlineRotation } from "../hooks/use-headline-rotation"

export function DynamicHeadline() {
  const { displayText, currentIndex, totalHeadlines, showCursor } = useHeadlineRotation()

  return (
    <div className="relative">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight font-system px-2 sm:px-0 min-h-[1.2em]">
        {displayText}
        <span
          className={`inline-block w-1 h-[0.9em] bg-white ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
          style={{ verticalAlign: "text-top" }}
        />
        <br />
        <span className="text-gray-300">with AI Power</span>
      </h1>

      {/* Headline Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalHeadlines }, (_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white opacity-100 scale-110" : "bg-gray-600 opacity-50 hover:opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
