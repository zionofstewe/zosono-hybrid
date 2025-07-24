"use client"

import type { ReactNode } from "react"
import { RevealWrapper } from "./reveal-wrapper"

interface StaggeredRevealProps {
  children: ReactNode[]
  staggerDelay?: number
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn" | "rotateIn"
  className?: string
}

export function StaggeredReveal({
  children,
  staggerDelay = 100,
  animation = "slideUp",
  className = "",
}: StaggeredRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <RevealWrapper key={index} animation={animation} delay={index * staggerDelay} duration={600}>
          {child}
        </RevealWrapper>
      ))}
    </div>
  )
}
