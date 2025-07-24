"use client"

import { useEffect, useState } from "react"

export function useCounterAnimation(targetValue: number, isVisible = true, duration = 2000) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0)
      return
    }

    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Smooth easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = targetValue * easeOutCubic

      // Format the value based on whether it's a decimal
      let formattedValue: number
      if (targetValue < 10) {
        formattedValue = Math.round(currentValue * 10) / 10 // One decimal place
      } else {
        formattedValue = Math.floor(currentValue)
      }

      setDisplayValue(formattedValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    // Start animation after a brief delay
    const delay = setTimeout(() => {
      requestAnimationFrame(animate)
    }, 300)

    return () => clearTimeout(delay)
  }, [targetValue, isVisible, duration])

  return displayValue
}
