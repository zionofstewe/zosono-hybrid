"use client"

import { useEffect } from "react"

// Define the two lines of clients exactly as specified
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

export function TrustIndicators() {
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
    <div className="mt-15 pt-8">
      <div className="text-center mb-6">
        <p className="text-base md:text-sm text-gray-500 font-light tracking-wide font-system">
          Trusted by 200+ Brands Across Southeast Asia
        </p>
      </div>

      {/* Desktop animated logos - Two rows */}
      <div className="relative overflow-hidden hidden md:block">
        {/* First Row */}
        <div className="flex animate-scroll whitespace-nowrap mb-4">
          <div className="flex items-center space-x-8 text-gray-600 text-sm font-system">
            {firstLineClients.map((client, index) => (
              <span key={index}>{client}</span>
            ))}
            <span className="mx-8">•</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-8 text-gray-600 text-sm font-system">
            {firstLineClients.map((client, index) => (
              <span key={`dup-${index}`}>{client}</span>
            ))}
            <span className="mx-8">•</span>
          </div>
        </div>

        {/* Second Row - Reverse direction */}
        <div className="flex animate-scroll-reverse whitespace-nowrap">
          <div className="flex items-center space-x-8 text-gray-600 text-sm font-system">
            {secondLineClients.map((client, index) => (
              <span key={index}>{client}</span>
            ))}
            <span className="mx-8">•</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-8 text-gray-600 text-sm font-system">
            {secondLineClients.map((client, index) => (
              <span key={`dup-${index}`}>{client}</span>
            ))}
            <span className="mx-8">•</span>
          </div>
        </div>
      </div>

      {/* Mobile static logos */}
      <div className="block md:hidden">
        <div className="text-center text-gray-600 text-sm font-system">
          Hotel Santika • Wardah • L'Oréal • Samsung • +200 more
        </div>
      </div>
    </div>
  )
}
