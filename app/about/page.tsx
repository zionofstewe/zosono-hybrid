"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedStat } from "@/components/animated-stat"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Heart, Globe, Target } from "lucide-react"

const stats = [
  { value: 8, suffix: "+", label: "Years of Excellence", iconName: "Award" },
  { value: 200, suffix: "+", label: "Happy Clients", iconName: "Users" },
  { value: 500, suffix: "+", label: "Live Sessions", iconName: "Eye" },
  { prefix: "$", value: 2.5, suffix: "B+", label: "Revenue Generated", iconName: "TrendingUp" },
]

const strategicMarkets = [
  {
    code: "SG",
    country: "Singapore",
    description: "Hub & Foundation",
  },
  {
    code: "ID",
    country: "Indonesia",
    description: "Primary Market",
  },
  {
    code: "CN",
    country: "China",
    description: "Developing Market",
  },
  {
    code: "TW",
    country: "Taiwan",
    description: "Developing Market",
  },
]

const values = [
  {
    icon: Shield,
    title: "Global Expertise",
    description: "Decades of experience across Singapore, Indonesia, and expanding into China and Taiwan markets.",
  },
  {
    icon: Globe,
    title: "Local Market Mastery",
    description: "Deep understanding of strategic markets with proven strategies that resonate with local audiences.",
  },
  {
    icon: Zap,
    title: "Innovation Leadership",
    description: "Pioneering digital marketing solutions that set industry standards across Asia-Pacific region.",
  },
  {
    icon: Heart,
    title: "Results Driven",
    description:
      "Delivering measurable ROI and sustainable growth through data-driven strategies and creative excellence.",
  },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20">
              About ZOSONO MEDIA
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Regional Digital Marketing Excellence,{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Local Market Mastery
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12">
              Growing alongside the Zosono.com Group since 2018, we've built deep expertise across strategic
              Asia-Pacific markets with unique understanding of Singapore and Indonesia's digital landscapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <a href="/contact">Our Services</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300 bg-transparent"
              >
                <a href="/case-studies">View Our Work</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  iconName={stat.iconName}
                  delay={index * 200}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Markets Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">4+ Strategic Markets</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Focused expansion across high-potential Asia-Pacific markets
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {strategicMarkets.map((market, index) => (
                <div key={market.code} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                    <span className="text-2xl font-bold text-cyan-400">{market.code}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{market.country}</h3>
                  <p className="text-white/70 text-sm">{market.description}</p>
                </div>
              ))}
            </div>

            {/* Our Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-xl text-white/70 mb-8">
                  From Singapore expansion to strategic market leadership across Asia-Pacific
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Strategic Expansion,
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Market Excellence
                      </span>
                    </h3>
                    <div className="space-y-4 text-white/70 leading-relaxed">
                      <p>
                        Expanding from our Singapore foundation with decades of experience, ZOSONO MEDIA brings
                        world-class digital marketing expertise to strategically selected high-potential markets.
                      </p>
                      <p>
                        Our focused approach on Singapore, Indonesia, China, and Taiwan allows us to deliver deeper
                        market insights and more effective campaigns. We combine global best practices with nuanced
                        local understanding to create authentic connections with diverse audiences.
                      </p>
                      <p>
                        From multinational corporations to innovative local startups, we deliver strategies that drive
                        measurable growth, leveraging our extensive experience in cross-cultural marketing and strategic
                        market development across the Asia-Pacific region.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Target className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      To empower brands with innovative digital marketing solutions that drive measurable growth, while
                      creating authentic connections and creative excellence across strategic Asia-Pacific markets.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-purple-500/20">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Globe className="w-8 h-8 text-purple-400 mr-3" />
                      <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      To be the most trusted and innovative digital marketing agency across strategic markets, bridging
                      global expertise with deep local market mastery.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-white/70 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join the brands that trust ZOSONO MEDIA to deliver exceptional digital marketing results. Let's discuss
              how we can elevate your brand's digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300 bg-transparent"
              >
                <a href="/case-studies">View Our Portfolio</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
