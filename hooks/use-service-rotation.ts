"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { servicesData } from "../data/services"

export function useServiceRotation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [lastInteraction, setLastInteraction] = useState(0)

  const currentService = servicesData[currentIndex]
  const totalServices = servicesData.length

  const goToService = useCallback(
    (index: number) => {
      if (index === currentIndex || isTransitioning) return

      setIsTransitioning(true)
      setLastInteraction(Date.now())

      setTimeout(() => {
        setCurrentIndex(index)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 500) // 0.5 second pause for readability
      }, 300)
    },
    [currentIndex, isTransitioning],
  )

  const nextService = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalServices
    goToService(nextIndex)
  }, [currentIndex, totalServices, goToService])

  const prevService = useCallback(() => {
    const prevIndex = (currentIndex - 1 + totalServices) % totalServices
    goToService(prevIndex)
  }, [currentIndex, totalServices, goToService])

  // Auto-rotation with 6-second interval
  useEffect(() => {
    if (isPaused || isTransitioning) return

    const interval = setInterval(() => {
      nextService()
    }, 6000) // 6 seconds

    return () => clearInterval(interval)
  }, [isPaused, isTransitioning, nextService])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        prevService()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        nextService()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextService, prevService])

  // Auto-resume after keyboard interaction
  useEffect(() => {
    if (lastInteraction === 0) return

    const timer = setTimeout(() => {
      setIsPaused(false)
    }, 2000) // Resume after 2 seconds

    return () => clearTimeout(timer)
  }, [lastInteraction])

  // Touch handlers for mobile
  const touchHandlers = {
    onTouchStart: (e: React.TouchEvent) => {
      const touch = e.touches[0]
      const startX = touch.clientX

      const handleTouchEnd = (endEvent: TouchEvent) => {
        const endTouch = endEvent.changedTouches[0]
        const endX = endTouch.clientX
        const diff = startX - endX

        if (Math.abs(diff) > 50) {
          // Minimum swipe distance
          if (diff > 0) {
            nextService()
          } else {
            prevService()
          }
        }

        document.removeEventListener("touchend", handleTouchEnd)
      }

      document.addEventListener("touchend", handleTouchEnd)
    },
  }

  return {
    currentService,
    currentIndex,
    totalServices,
    isTransitioning,
    isPaused,
    setIsPaused,
    goToService,
    nextService,
    prevService,
    touchHandlers,
  }
}
