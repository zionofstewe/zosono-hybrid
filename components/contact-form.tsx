"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Loader2 } from "lucide-react"

// Final 6 services
const services = [
  { value: "live-shopping", label: "Live Shopping & Commerce Streaming" },
  { value: "social-media", label: "Social Media Mastery" },
  { value: "influencer-marketing", label: "Influencer & Affiliate Marketing" },
  { value: "ai-content", label: "AI-Powered Content Production" },
  { value: "data-analytics", label: "Data Intelligence & Analytics" },
  { value: "growth-hacking", label: "360° Customer Growth Hacking" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // WhatsApp integration - construct WhatsApp URL with form data
      const whatsappMessage = encodeURIComponent(
        `Hello ZOSONO MEDIA,\n\nI'm interested in your services. Here are my details:\n\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nService Interest: ${
          services.find((s) => s.value === formData.service)?.label || formData.service
        }\n\nMessage:\n${formData.message}\n\nLooking forward to hearing from you!`,
      )

      // Open WhatsApp in new tab if user confirms
      if (window.confirm("Would you like to continue this conversation on WhatsApp?")) {
        window.open(`https://wa.me/628128889999?text=${whatsappMessage}`, "_blank")
      }

      setSubmitStatus("success")

      // Reset form after successful submission
      setFormData({
        name: "",
        company: "",
        email: "",
        whatsapp: "",
        service: "",
        message: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")

      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Name *
          </label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
            placeholder="Your full name"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-white/80">
            Company
          </label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
            placeholder="your@email.com"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="whatsapp" className="text-sm font-medium text-white/80">
            WhatsApp Number
          </label>
          <Input
            id="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => handleInputChange("whatsapp", e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
            placeholder="+62 XXX-XXXX-XXXX"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-white/80">
          Service Interest
        </label>
        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
          <SelectTrigger id="service" className="bg-white/10 border-white/20 text-white h-12 px-4 text-sm">
            <SelectValue placeholder="Select a service" className="text-white" />
          </SelectTrigger>
          <SelectContent className="bg-[#1a1a1a] border border-[#333333] shadow-2xl z-50">
            {services.map((service) => (
              <SelectItem
                key={service.value}
                value={service.value}
                className="text-white bg-[#1a1a1a] hover:bg-[#00D9FF] hover:text-black px-4 py-3 text-sm cursor-pointer focus:bg-[#00D9FF] focus:text-black data-[highlighted]:bg-[#00D9FF] data-[highlighted]:text-black"
              >
                {service.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-white/80">
          Message
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 min-h-[120px]"
          placeholder="Tell us about your project..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 group"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  )
}
