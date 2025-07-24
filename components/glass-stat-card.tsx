"use client"

interface GlassStatCardProps {
  stat: string
  label: string
  delay?: string
}

export function GlassStatCard({ stat, label, delay = "" }: GlassStatCardProps) {
  return (
    <div
      className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20 ${delay} group`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
        {stat}
      </div>
      <div className="text-gray-300 text-sm md:text-base mt-2 font-medium group-hover:text-gray-200 transition-colors duration-300">
        {label}
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}
