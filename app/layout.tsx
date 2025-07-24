import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Zosono Media - AI Digital Marketing",
  description: "Transform your digital presence with AI-powered marketing solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased font-system bg-black">{children}</body>
    </html>
  )
}
