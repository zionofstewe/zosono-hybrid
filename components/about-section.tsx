"use client"

import { useState, useEffect } from "react"
import { Camera, Zap, ArrowRight, Clock, Building2 } from "lucide-react"
import { AnimatedStat } from "./animated-stat"

const stats = [
  { label: "Years of Excellence", value: 8, suffix: "+", iconName: "Award" as const },
  { label: "Happy Clients", value: 200, suffix: "+", iconName: "Users" as const },
  { label: "Live Sessions", value: 500, suffix: "+", iconName: "Clock" as const },
  { label: "Revenue Generated", value: 2.5, suffix: "B+", prefix: "$", iconName: "TrendingUp" as const },
]

const studioFeatures = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description: "4K cameras, professional lighting, multi-angle setups for broadcast-quality production",
  },
  {
    icon: Zap,
    title: "Live Streaming Tech",
    description: "Multi-platform broadcasting with real-time analytics and audience engagement tools",
  },
  {
    icon: Clock,
    title: "Expert Team",
    description: "Directors, hosts, and technical crew available 24/7 for seamless live commerce",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about-section")
    const statsElement = document.getElementById("stats-section")

    if (element) observer.observe(element)
    if (statsElement) statsObserver.observe(statsElement)

    return () => {
      observer.disconnect()
      statsObserver.disconnect()
    }
  }, [])

  return (
    <section id="about-section" className="py-16 px-4 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Part A - About Zosono */}
        <div className="mb-24">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full px-6 py-2 border border-cyan-500/20 mb-6">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Part of Zosono.com Group</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Precision Marketing,{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revenue Engineered
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Six integrated services designed to accelerate your growth
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Story */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  As part of the Singapore-headquartered Zosono.com Group, we combine international expertise with deep
                  local market understanding to deliver precision marketing that drives measurable revenue growth.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Our integrated approach transforms how brands connect with Indonesian consumers through data-driven
                  strategies and cutting-edge live commerce technology.
                </p>
              </div>
            </div>

            {/* Right - Stats Grid */}
            <div
              id="stats-section"
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <AnimatedStat
                    key={index}
                    iconName={stat.iconName}
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    label={stat.label}
                    isVisible={statsVisible}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Part B - Studio Showcase */}
        <div>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ZOSONO Studios
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Indonesia's premier live commerce production facility
            </p>
          </div>

          {/* Studio Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {studioFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Full-width Studio Showcase */}
          <div className="relative mb-10 overflow-hidden rounded-2xl group">
            <div className="aspect-[21/9] bg-gradient-to-br from-gray-900 to-gray-800 relative">
              {/* Studio Image with Parallax Effect */}
              <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700">
                <img
                  src="/placeholder.svg?height=600&width=1400"
                  alt="Zosono Studios - Professional Live Commerce Facility"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  <ArrowRight className="w-8 h-8 text-white ml-1 group-hover:text-cyan-400 transition-colors rotate-90" />
                </button>
                <div className="absolute -bottom-12 text-center">
                  <p className="text-white/80 font-medium text-sm">See Our Studio in Action</p>
                </div>
              </div>

              {/* Studio Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-md rounded-xl p-5 border border-white/10 max-w-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">State-of-the-Art Facility</h3>
                  <p className="text-white/80 mb-3 text-sm">
                    Our 2,000 sqft studio features professional lighting, multiple camera angles, and real-time
                    streaming capabilities to major platforms including TikTok, Instagram, and Shopee Live.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">4K Cameras</span>
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">Professional Lighting</span>
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">
                      Multi-Platform Streaming
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="flex justify-center items-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex items-center gap-3">
              Book a Studio Tour
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
