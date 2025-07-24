"use client"

export function TracingLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-0 w-full h-px transform -translate-y-8">
        <div
          className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
          style={{
            width: "300px",
            animation: "traceLine 10s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  )
}
