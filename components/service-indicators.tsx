"use client"

interface ServiceIndicatorsProps {
  total: number
  current: number
  onSelect: (index: number) => void
}

export function ServiceIndicators({ total, current, onSelect }: ServiceIndicatorsProps) {
  return (
    <div className="flex justify-center space-x-3 mt-8">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`relative w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white/20 ${
            index === current ? "bg-white opacity-100 scale-110" : "bg-gray-600 opacity-50 hover:opacity-75"
          }`}
          aria-label={`Go to service ${index + 1}`}
        >
          {/* Subtle glow behind active dot */}
          {index === current && (
            <div className="absolute inset-0 rounded-full bg-white/30 blur-sm scale-150 animate-pulse" />
          )}
        </button>
      ))}
    </div>
  )
}
