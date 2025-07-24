"use client"

import type { ReactNode } from "react"
import { useFadeIn } from "../hooks/use-fade-in"

interface FadeInWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeInWrapper({ children, delay = 0, className = "" }: FadeInWrapperProps) {
  const isVisible = useFadeIn(delay)

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  )
}
