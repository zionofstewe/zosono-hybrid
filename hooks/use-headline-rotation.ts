"use client"

import { useEffect, useState } from "react"

// Array of headlines - easily add more by expanding this array
const HEADLINES = [
  "Transform Your Digital Presence",
  "Amplify Your Brand Impact",
  "Accelerate Business Growth",
  "Revolutionize Customer Engagement",
  "Maximize Marketing ROI",
]

export function useHeadlineRotation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  // Get current headline
  const currentHeadline = HEADLINES[currentIndex]

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return

    let timeoutId: NodeJS.Timeout

    if (displayText.length < currentHeadline.length) {
      // Typing forward
      timeoutId = setTimeout(() => {
        setDisplayText(currentHeadline.slice(0, displayText.length + 1))
      }, 80) // Typing speed - adjust for faster/slower typing
    } else {
      // Finished typing current headline
      setIsTyping(false)
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, currentHeadline, isTyping])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530) // Cursor blink speed

    return () => clearInterval(cursorInterval)
  }, [])

  // Headline rotation timer (10 seconds)
  useEffect(() => {
    const rotationTimer = setTimeout(() => {
      // Start erasing current headline
      setIsTyping(false)

      // Erase text gradually
      const eraseInterval = setInterval(() => {
        setDisplayText((prev) => {
          if (prev.length === 0) {
            clearInterval(eraseInterval)
            // Move to next headline
            setCurrentIndex((prevIndex) => (prevIndex + 1) % HEADLINES.length)
            setIsTyping(true)
            return ""
          }
          return prev.slice(0, -1)
        })
      }, 40) // Erase speed - faster than typing
    }, 10000) // 10 seconds before rotation

    return () => clearTimeout(rotationTimer)
  }, [currentIndex])

  return {
    displayText,
    currentIndex,
    totalHeadlines: HEADLINES.length,
    showCursor,
    headlines: HEADLINES,
  }
}
