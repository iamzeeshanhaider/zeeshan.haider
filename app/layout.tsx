import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

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
  title: "Zeeshan Haider - Senior Software Engineer | Full Stack Developer Dubai",
  description: "Senior Software Engineer with 5+ years of experience in PHP, Laravel, Next.js, and modern full-stack development. Expert in building scalable web applications and enterprise solutions in Dubai, UAE.",
  generator: "Next.js",
  keywords: [
    "Zeeshan Haider",
    "Senior Software Engineer Dubai",
    "Full Stack Developer UAE",
    "PHP Laravel Expert",
    "Next.js Developer",
    "React Developer Dubai",
    "Backend Developer UAE",
    "Enterprise Solutions Architect",
    "Web Application Development",
    "API Development Expert",
    "Database Design Specialist",
    "Cloud Computing AWS",
    "Docker Development",
    "Software Engineer Dubai",
    "Tech Lead UAE",
    "Frontend Development Expert",
  ],
  authors: [{ name: "Zeeshan Haider", url: "https://github.com/iamzeeshanhaider" }],
  creator: "Zeeshan Haider",
  publisher: "Zeeshan Haider",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zeeshanhaider.dev",
    title: "Zeeshan Haider - Senior Software Engineer | Dubai, UAE",
    description: "Senior Software Engineer specializing in full-stack development with PHP, Laravel, and Next.js. Building scalable enterprise solutions in Dubai.",
    siteName: "Zeeshan Haider Portfolio",
    images: [
      {
        url: "/software-engineer-headshot.png",
        width: 1200,
        height: 630,
        alt: "Zeeshan Haider - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeeshan Haider - Senior Software Engineer | Dubai",
    description: "Senior Software Engineer specializing in full-stack development. Building scalable enterprise solutions in Dubai, UAE.",
    images: ["/software-engineer-headshot.png"],
    creator: "@iamzeeshanhaider",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href="https://zeeshanhaider.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="your-verification-code" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Zeeshan Haider",
              "jobTitle": "Senior Software Engineer",
              "url": "https://zeeshanhaider.dev",
              "sameAs": [
                "https://github.com/iamzeeshanhaider",
                "https://www.linkedin.com/in/zeeshan-haider73/"
              ],
              "image": "/software-engineer-headshot.png",
              "description": "Senior Software Engineer with 5+ years of experience in full-stack development",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "UAE"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Comsats University Islamabad"
              }
            }
          `}
        </script>
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
        <Toaster position="top-right" richColors />
        {children}
      </body>
    </html>
  )
}
