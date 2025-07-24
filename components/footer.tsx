"use client"

import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react"
import { ZosonoBadge } from "./zosono-badge"

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
]

const services = [
  { name: "Live Shopping & Commerce Streaming", href: "/contact" },
  { name: "Social Media Mastery", href: "/contact" },
  { name: "Influencer & Affiliate Marketing", href: "/contact" },
  { name: "AI-Powered Content Production", href: "/contact" },
  { name: "Data Intelligence & Analytics", href: "/contact" },
  { name: "360° Customer Growth Hacking", href: "/contact" },
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

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-cyan-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-white/70 hover:text-cyan-400 transition-colors duration-200">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 transition-all duration-200 ${social.hoverColor}`}
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© 2025 ZOSONO MEDIA. All rights reserved. Powered by ZOSONO Studios.</p>
        </div>
      </div>

      {/* Floating Badge */}
      <ZosonoBadge />
    </footer>
  )
}
