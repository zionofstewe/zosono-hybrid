"use client"

import { useEffect, useState } from "react"

export function useScrollParallax() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsVisible(window.scrollY > 50)
    }

    // Initial load animation
    const timer = setTimeout(() => setIsVisible(true), 300)

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return { scrollY, isVisible }
}
