"use client"

import { Video, Users, Target, ShoppingCart, Camera, BarChart3 } from "lucide-react"

const services = [
  {
    id: "studio-live-streaming",
    icon: Video,
    title: "Live Shopping & Commerce Streaming",
    description: "Transform viewers into buyers with professional multi-platform live commerce",
    keyPoints: ["Professional studio facilities", "Multi-platform streaming", "Real-time analytics"],
    link: "Explore Live Solutions →",
  },
  {
    id: "social-media-mastery",
    icon: Users,
    title: "Social Media Mastery",
    description: "Transform bystanders into followers, and followers into customers",
    keyPoints: ["Strategic content creation", "Community building", "Conversion optimization"],
    link: "Master Social Media →",
  },
  {
    id: "ecommerce-optimization",
    icon: ShoppingCart,
    title: "E-Commerce Growth Hacking",
    description: "Turn abandoned carts into confirmed orders with precision optimization",
    keyPoints: ["Marketplace management", "Conversion optimization", "Sales analytics"],
    link: "Boost Your Sales →",
  },
  {
    id: "creators-network",
    icon: Target,
    title: "Influencer & Affiliate Marketing",
    description: "Partner with voices that don't just reach—they resonate and convert",
    keyPoints: ["Nano to mega influencers", "Full campaign management", "Performance tracking"],
    link: "View Creator Portfolio →",
  },
  {
    id: "content-production",
    icon: Camera,
    title: "AI-Powered Content Production",
    description: "Create 10x more content without sacrificing quality or authenticity",
    keyPoints: ["Photo & video production", "AI-enhanced creation", "Platform optimization"],
    link: "View Our Work →",
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data Intelligence & Analytics",
    description: "See what others miss. Predict what others can't. Win what others won't.",
    keyPoints: ["Predictive analytics", "Real-time dashboards", "Actionable insights"],
    link: "Get Smarter →",
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Precision Marketing.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revenue Engineered.
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Six integrated services designed to accelerate your growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>

                  {/* Key Points */}
                  <ul className="space-y-2 mb-6">
                    {service.keyPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center text-white/60 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <div className="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    {service.link}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
