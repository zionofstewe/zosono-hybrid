"use client"

export function BackgroundParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {/* Slow moving particles - hidden on mobile for performance */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-float-slow" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/10 rounded-full animate-float-slow-delayed" />
      <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-purple-400/10 rounded-full animate-float-slow-delayed-2" />
      <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 bg-white/30 rounded-full animate-float-slow-delayed-3" />
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-cyan-300/15 rounded-full animate-float-slow-delayed-4" />
      <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 bg-white/10 rounded-full animate-float-slow" />
    </div>
  )
}
