"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Send, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackgroundGrid } from "@/components/background-grid"
import { BackgroundParticles } from "@/components/background-particles"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const services = [
  "Live Shopping & Commerce Streaming",
  "Social Media Mastery",
  "Influencer & Affiliate Marketing",
  "AI-Powered Content Production",
  "Data Intelligence & Analytics",
  "360° Customer Growth Hacking",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Format WhatsApp message
      const whatsappMessage = `Hi! I'm interested in ${formData.service || "your services"}.

Name: ${formData.name}
Company: ${formData.company || "Not specified"}
Email: ${formData.email}
Message: ${formData.message || "No additional message"}

Looking forward to hearing from you!`

      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, "_blank")

      setSubmitStatus("success")
      setFormData({
        name: "",
        company: "",
        email: "",
        whatsapp: "",
        service: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppDirect = () => {
    const message = "Hi! I'd like to learn more about your services."
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section - Hard Sell */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-black via-black to-gray-900">
        <BackgroundGrid />
        <BackgroundParticles />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to 3x Your Revenue?{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Build Your Digital Empire.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto">
            Stop losing customers to competitors. Transform your business into a revenue machine with our proven
            strategies that have generated $2.5B+ for 200+ brands.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Start Your Transformation Today</h2>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-white/80 mb-2">
                    WhatsApp Number
                  </label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                    placeholder="+62 812 3456 7890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                  Service Interest
                </label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-cyan-400">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20">
                    {services.map((service) => (
                      <SelectItem key={service} value={service} className="text-white hover:bg-cyan-500/10">
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Tell us about your goals
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 min-h-[120px]"
                  placeholder="What revenue goals do you want to achieve? What challenges are you facing?"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Get My Revenue Growth Plan
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="text-green-400 text-sm text-center">
                  Message sent successfully! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Studio Visit Offer */}
      <section className="py-20 px-4 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to See Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Live Commerce Studio?
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Visit our state-of-the-art studio in Jakarta and see firsthand how we create content that converts. Book
              your exclusive tour today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleWhatsAppDirect}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Studio Visit
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-full bg-transparent"
              >
                <a href="mailto:hello@zosono.media">Email Us Instead</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Location</h4>
                <p className="text-white/60 text-sm">
                  Jl. Kemang Raya No. 123
                  <br />
                  Jakarta Selatan
                </p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <p className="text-white/60 text-sm">hello@zosono.media</p>
              </div>
              <div>
                <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                <p className="text-white/60 text-sm">+62 812 3456 7890</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
