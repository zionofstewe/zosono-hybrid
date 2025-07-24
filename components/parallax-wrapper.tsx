"use client"

import type { ReactNode } from "react"
import { useScrollParallax } from "../hooks/use-scroll-parallax"

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  delay?: number
  className?: string
}

export function ParallaxWrapper({ children, speed = 0.5, delay = 0, className = "" }: ParallaxWrapperProps) {
  const { scrollY, isVisible } = useScrollParallax()

  const transform = `translateY(${scrollY * speed}px)`

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{
        transform: isVisible ? transform : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
