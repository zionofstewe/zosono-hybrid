"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Star, TrendingUp, Users, Eye } from "lucide-react"

const filterTabs = [
  { id: "all", label: "All" },
  { id: "live-commerce", label: "Live Commerce" },
  { id: "creators", label: "Creators" },
  { id: "digital-ads", label: "Digital Ads" },
  { id: "e-commerce", label: "E-Commerce" },
]

const ctaSequence = [
  "Book Studio Tour",
  "Audit My Social",
  "Meet Our Creators",
  "See AI Content",
  "Get Data Insights",
  "Hack My Growth",
]

const caseStudies = [
  {
    id: 1,
    category: "live-commerce",
    client: "MAKUKU",
    campaign: "TikTok Live Revolution",
    description: "How we transformed a diaper brand into a live commerce phenomenon",
    image: "/placeholder.svg?height=300&width=500",
    logo: "/placeholder-logo.svg",
    results: [
      { label: "13.8M Views", icon: Eye },
      { label: "3x Sales", icon: TrendingUp },
      { label: "27.8K Engagement", icon: Star },
    ],
  },
  {
    id: 2,
    category: "creators",
    client: "L'Oréal",
    campaign: "Beauty Creator Network",
    description: "Orchestrating Indonesia's largest beauty influencer campaign",
    image: "/placeholder.svg?height=300&width=500",
    logo: "/placeholder-logo.svg",
    results: [
      { label: "850 Creators", icon: Users },
      { label: "125M Reach", icon: Eye },
      { label: "420% ROI", icon: TrendingUp },
    ],
  },
  {
    id: 3,
    category: "digital-ads",
    client: "Uniqlo",
    campaign: "Ramadan Digital Domination",
    description: "A full-funnel approach that broke records",
    image: "/placeholder.svg?height=300&width=500",
    logo: "/placeholder-logo.svg",
    results: [
      { label: "45% Sales Lift", icon: TrendingUp },
      { label: "200M Impressions", icon: Eye },
      { label: "8.5% CTR", icon: Star },
    ],
  },
]

// Replace the existing clientLogos array with these two arrays
const firstLineClients = [
  "Hotel Santika Group",
  "Wardah",
  "Le Minerale",
  "European Slimming Centre",
  "SKIN+",
  "SLIM+",
  "EUROSKINLAB",
  "Sukro",
  "Kacang Dua Kelinci",
  "LINE Creativate",
  "Panasonic",
  "Pediasure",
  "Ensure",
  "Lazada",
  "Nippon Paint",
  "Morulla IVF",
  "Bank Mandiri",
  "OCBC NISP",
  "Amar Bank",
  "Flip",
  "Adira Autocilin",
  "Burger King",
]

const secondLineClients = [
  "Kementrian Sosial Republik Indonesia",
  "Samsung",
  "LION Air",
  "Jotun",
  "Grab",
  "Domino's Pizza",
  "L'Oréal",
  "Capa Resort Maumere",
  "AEON Mall",
  "Timezone",
  "La Fonte Pronto",
  "Bear Brand",
  "Cheetos",
  "MAKUKU",
  "Aastar Singapore",
  "Hutton Singapore",
  "Kobayashi Japan",
  "Cocochi Japan",
  "BenQ Derma Angel Taiwan",
  "Catiss Taiwan",
  "Tang Ding Taiwan",
  "Dr. Grandma Taiwan",
  "Duopharma Singapore",
  "Challs International UK",
  "Sun Jiang Malaysia",
]

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentCtaIndex, setCurrentCtaIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const filteredCaseStudies =
    activeFilter === "all" ? caseStudies : caseStudies.filter((study) => study.category === activeFilter)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentCtaIndex((prev) => (prev + 1) % ctaSequence.length)
        setIsTransitioning(false)
      }, 150) // Half of transition duration for smooth crossfade
    }, 6000) // 6 seconds to match hero rotation

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Add animation styles to the stylesheet if they don't exist
    if (!document.getElementById("scroll-animations")) {
      const style = document.createElement("style")
      style.id = "scroll-animations"
      style.innerHTML = `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        
        .animate-scroll-reverse {
          animation: scroll-reverse 60s linear infinite;
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results That Speak{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Louder Than Promises
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
            From local startups to global brands, we deliver measurable growth
          </p>

          {/* Top Stats Bar - UPDATED */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">8+ Years</div>
              <div className="text-sm text-white/60">of Excellence</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">$2.5B+</div>
              <div className="text-sm text-white/60">Revenue Generated</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">200+</div>
              <div className="text-sm text-white/60">Happy Clients</div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredCaseStudies.map((study, index) => (
            <div
              key={study.id}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hero Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.campaign}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Client Logo */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <img src={study.logo || "/placeholder.svg"} alt={study.client} className="h-6 w-auto" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.campaign}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{study.description}</p>
                </div>

                {/* Results Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.results.map((result, idx) => {
                    const IconComponent = result.icon
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-3 py-1.5 text-xs font-medium text-cyan-300 shadow-lg shadow-cyan-500/10"
                      >
                        <IconComponent className="w-3 h-3" />
                        {result.label}
                      </div>
                    )
                  })}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors group/cta">
                  View Case Study
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Main Stats Section - UPDATED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400/90 mb-2 group-hover:text-cyan-300 transition-all duration-300">
              500+
            </div>
            <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors font-system">
              Live Sessions
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400/90 mb-2 group-hover:text-cyan-300 transition-all duration-300">
              $2.5B+
            </div>
            <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors font-system">
              Revenue Generated
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400/90 mb-2 group-hover:text-cyan-300 transition-all duration-300">
              4+
            </div>
            <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors font-system">
              Strategic Markets
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400/90 mb-2 group-hover:text-cyan-300 transition-all duration-300">
              98%
            </div>
            <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors font-system">
              Client Satisfaction
            </div>
          </div>
        </div>

        {/* Client Logo Animation */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Trusted by 200+ Brands</h3>

          {/* Desktop animated logos - Two rows */}
          <div className="relative overflow-hidden hidden md:block">
            {/* First Row */}
            <div className="flex animate-scroll whitespace-nowrap mb-4">
              <div className="flex items-center space-x-8 text-gray-400 text-sm font-system">
                {firstLineClients.map((client, index) => (
                  <span key={index}>{client}</span>
                ))}
                <span className="mx-8">•</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center space-x-8 text-gray-400 text-sm font-system">
                {firstLineClients.map((client, index) => (
                  <span key={`dup-${index}`}>{client}</span>
                ))}
                <span className="mx-8">•</span>
              </div>
            </div>

            {/* Second Row - Reverse direction */}
            <div className="flex animate-scroll-reverse whitespace-nowrap">
              <div className="flex items-center space-x-8 text-gray-400 text-sm font-system">
                {secondLineClients.map((client, index) => (
                  <span key={index}>{client}</span>
                ))}
                <span className="mx-8">•</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center space-x-8 text-gray-400 text-sm font-system">
                {secondLineClients.map((client, index) => (
                  <span key={`dup-${index}`}>{client}</span>
                ))}
                <span className="mx-8">•</span>
              </div>
            </div>
          </div>

          {/* Mobile static logos */}
          <div className="block md:hidden">
            <div className="text-center text-gray-400 text-sm font-system">
              Hotel Santika • Wardah • L'Oréal • Samsung • +200 more
            </div>
          </div>
        </div>

        {/* Rotating CTA Button */}
        <div className="text-center">
          <a
            href="https://wa.me/6285285188355?text=Hi!%20I%27m%20interested%20in%20learning%20more%20about%20ZOSONO%20Media%27s%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 min-w-[200px]"
          >
            <span className={`block transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
              {ctaSequence[currentCtaIndex]}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
