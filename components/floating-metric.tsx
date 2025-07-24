"use client"

interface FloatingMetricProps {
  number: string
  label: string
  delay?: number
}

export function FloatingMetric({ number, label, delay = 0 }: FloatingMetricProps) {
  return (
    <div
      className="text-center"
      style={{
        animation: `gentleFloat 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-system">{number}</div>
      <div className="text-xs sm:text-sm md:text-base text-gray-500 font-light tracking-wide font-system">{label}</div>
    </div>
  )
}
