"use client"

import { useEffect, useState } from "react"
import { Award, Users, Eye, TrendingUp, Target } from "lucide-react"

interface AnimatedStatProps {
  iconName: "Award" | "Users" | "Eye" | "TrendingUp" | "Target"
  value: number
  prefix?: string
  suffix?: string
  label: string
  isVisible: boolean
  delay?: number
}

export function AnimatedStat({
  iconName,
  value,
  prefix = "",
  suffix = "",
  label,
  isVisible,
  delay = 0,
}: AnimatedStatProps) {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    if (!isVisible || !value) return

    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= value) {
          setCurrentValue(value)
          clearInterval(counter)
        } else {
          setCurrentValue(current)
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, value, delay])

  const getIcon = () => {
    switch (iconName) {
      case "Award":
        return Award
      case "Users":
        return Users
      case "Eye":
        return Eye
      case "TrendingUp":
        return TrendingUp
      case "Target":
        return Target
      default:
        return Award
    }
  }

  const IconComponent = getIcon()

  const formatValue = (val: number) => {
    if (val >= 1000000) {
      return (val / 1000000).toFixed(1) + "M"
    } else if (val >= 1000) {
      return (val / 1000).toFixed(1) + "K"
    } else if (val < 10 && val % 1 !== 0) {
      return val.toFixed(1)
    }
    return Math.round(val).toString()
  }

  return (
    <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {prefix}
        {formatValue(currentValue)}
        {suffix}
      </div>
      <div className="text-gray-300 text-sm font-medium">{label}</div>
    </div>
  )
}
