import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Zeeshan Haider - Senior Software Engineer",
  description:
    "Senior Software Engineer with 5+ years of experience building scalable web applications and enterprise solutions. Specialized in PHP, Laravel, Next.js, and modern full-stack development.",
  generator: "v0.app",
  keywords: [
    "Software Engineer",
    "Laravel Developer",
    "Full Stack Developer",
    "PHP",
    "Next.js",
    "React",
    "UAE",
    "Dubai",
  ],
  authors: [{ name: "Zeeshan Haider" }],
  creator: "Zeeshan Haider",
  openGraph: {
    title: "Zeeshan Haider - Senior Software Engineer",
    description:
      "Senior Software Engineer with 5+ years of experience building scalable web applications and enterprise solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeeshan Haider - Senior Software Engineer",
    description:
      "Senior Software Engineer with 5+ years of experience building scalable web applications and enterprise solutions.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
