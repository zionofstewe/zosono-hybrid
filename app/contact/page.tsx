"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Loader2, MapPin, Mail, Clock, MessageSquare, Calendar, Users, Zap } from "lucide-react"

// Final 6 services
const services = [
  { value: "live-shopping", label: "Live Shopping & Commerce Streaming" },
  { value: "social-media", label: "Social Media Mastery" },
  { value: "influencer-marketing", label: "Influencer & Affiliate Marketing" },
  { value: "ai-content", label: "AI-Powered Content Production" },
  { value: "data-analytics", label: "Data Intelligence & Analytics" },
  { value: "growth-hacking", label: "360° Customer Growth Hacking" },
]

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: "theresia@zosono.id",
    action: "mailto:theresia@zosono.id",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Chat with us instantly",
    value: "+62 852-8518-8355",
    action: "https://wa.me/6285285188355",
  },
  {
    icon: Calendar,
    title: "Book Studio Visit",
    description: "Schedule a visit to our studio",
    value: "Schedule Now",
    action: "https://wa.me/6285285188355?text=I%20would%20like%20to%20schedule%20a%20studio%20visit",
  },
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

      // Open WhatsApp in new tab
      window.open(`https://wa.me/6285285188355?text=${whatsappMessage}`, "_blank")

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

  const handleContactMethod = (action: string) => {
    if (action.startsWith("mailto:")) {
      window.location.href = action
    } else {
      window.open(action, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-cyan-400/30 text-cyan-400">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Create Something
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to transform your digital presence? Our team of experts is here to help you achieve extraordinary
              results.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Methods</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon
                  return (
                    <Card
                      key={index}
                      className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                      onClick={() => handleContactMethod(method.action)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white">{method.title}</h3>
                            <p className="text-sm text-gray-400">{method.description}</p>
                            <p className="text-cyan-400 font-medium">{method.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Office Information */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-300">
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
                <div className="flex items-center text-gray-400">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM WIB</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-400/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">200+</div>
                    <div className="text-sm text-gray-300">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">8+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">500+</div>
                    <div className="text-sm text-gray-300">Live Sessions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">$2.5B+</div>
                    <div className="text-sm text-gray-300">Revenue Generated</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Send className="w-6 h-6 mr-2 text-cyan-400" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                      placeholder="Tell us about your project, goals, and how we can help you achieve extraordinary results..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
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
                      <div className="flex items-center justify-center mb-2">
                        <Zap className="w-5 h-5 mr-2" />
                        Message sent successfully!
                      </div>
                      <p className="text-sm">
                        We'll get back to you within 24 hours. Check your WhatsApp for immediate assistance!
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                      There was an error sending your message. Please try again or contact us directly via WhatsApp.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-400/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Join 200+ satisfied clients who have transformed their digital presence with ZOSONO MEDIA.
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/6285285188355?text=I%20would%20like%20to%20schedule%20a%20studio%20visit",
                    "_blank",
                  )
                }
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Book Studio Visit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
