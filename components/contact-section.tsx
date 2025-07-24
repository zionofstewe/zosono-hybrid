"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Instagram, Linkedin, Facebook, Youtube } from "lucide-react"

const services = [
  "Live Shopping & Commerce Streaming",
  "Social Media Mastery",
  "Influencer & Affiliate Marketing",
  "AI-Powered Content Production",
  "Data Intelligence & Analytics",
  "360° Customer Growth Hacking",
]

// Custom TikTok Icon
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

// Custom X (Twitter) Icon
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61574221291657",
    icon: Facebook,
    hoverColor: "hover:text-blue-400 hover:bg-blue-500/10",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ZosonoAkselerasi",
    icon: Youtube,
    hoverColor: "hover:text-red-400 hover:bg-red-500/10",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@zosono.media",
    icon: TikTokIcon,
    hoverColor: "hover:text-pink-400 hover:bg-pink-500/10",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zosono.media/",
    icon: Instagram,
    hoverColor: "hover:text-pink-400 hover:bg-pink-500/10",
  },
  {
    name: "Twitter/X",
    href: "https://x.com/zosonoID",
    icon: XIcon,
    hoverColor: "hover:text-gray-400 hover:bg-gray-500/10",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/zosono-media/",
    icon: Linkedin,
    hoverColor: "hover:text-blue-400 hover:bg-blue-500/10",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto">
            Let's discuss how we can help you dominate your market and achieve unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Start Your Transformation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                  Service Interest
                </label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-cyan-400">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent
                    className="bg-gray-900 border-white/20"
                    style={{
                      backgroundColor: "#111111 !important",
                      border: "1px solid rgba(255, 255, 255, 0.2) !important",
                    }}
                  >
                    {services.map((service) => (
                      <SelectItem
                        key={service}
                        value={service}
                        className="text-white hover:bg-cyan-500/10 focus:bg-cyan-500/10 data-[highlighted]:bg-cyan-500/10"
                        style={{
                          color: "#ffffff !important",
                          backgroundColor: "transparent !important",
                        }}
                      >
                        <span style={{ color: "#ffffff" }}>{service}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 min-h-[120px]"
                  placeholder="Tell us about your project and goals..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Send className="w-4 h-4 mr-2" />
                Get Started Today
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Email</h4>
                  <a href="mailto:theresia@zosono.id" className="text-white/80 hover:text-cyan-400 transition-colors">
                    theresia@zosono.id
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">WhatsApp</h4>
                  <a href="https://wa.me/6285285188355" className="text-white/80 hover:text-cyan-400 transition-colors">
                    +62 852-8518-8355
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Studio Location</h4>
                  <p className="text-white/80">
                    Sentra Gading Serpong
                    <br />
                    Jl. Boulevard Raya Gading Serpong
                    <br />
                    Ruko 1 No. 5<br />
                    Tangerang, Banten 15810
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white/70 transition-all duration-200 ${social.hoverColor}`}
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* CTA Button - Centered */}
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <a
                  href="https://wa.me/6285285188355?text=Hi!%20I%27m%20interested%20in%20learning%20more%20about%20ZOSONO%20Media%27s%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Studio Visit
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
