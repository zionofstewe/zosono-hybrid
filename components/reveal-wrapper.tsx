"use client"

import type { ReactNode } from "react"
import { useScrollReveal } from "../hooks/use-scroll-reveal"

interface RevealWrapperProps {
  children: ReactNode
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn" | "rotateIn"
  delay?: number
  duration?: number
  className?: string
}

export function RevealWrapper({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 600,
  className = "",
}: RevealWrapperProps) {
  const { elementRef, isVisible } = useScrollReveal({ delay })

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`

    switch (animation) {
      case "fadeIn":
        return `${baseClasses} ${isVisible ? "opacity-100" : "opacity-0"}`
      case "slideUp":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
      case "slideLeft":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`
      case "slideRight":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`
      case "scaleIn":
        return `${baseClasses} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`
      case "rotateIn":
        return `${baseClasses} ${isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-3"}`
      default:
        return baseClasses
    }
  }

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
