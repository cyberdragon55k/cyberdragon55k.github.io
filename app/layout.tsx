import "@/styles/globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Mono, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})
const _syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  title: "Aditya Namdeo | Data & ML Systems Developer",
  description: "Portfolio of Aditya Namdeo showcasing software engineering, AI, Python, and web development projects.",
  keywords: [
    "Aditya Namdeo", 
    "Software Developer", 
    "Data & ML Systems Developer",
    "Machine Learning Intern", 
    "Suvidha Foundation", 
    "Computer Science", 
    "Data Engineering", 
    "Next.js"
  ],
  authors: [{ name: "Aditya Namdeo" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
  title: "Aditya Namdeo // Data & ML Systems Developer",
  description: "Portfolio of Aditya Namdeo. Researching deep learning models, training predictive regression arrays, and automating n8n pipeline workflows.",
  url: "https://adityanamdeo.qzz.io/",
  siteName: "SYSTEM.REF | Aditya Namdeo",
  type: "website",
  locale: "en_IN",
  images: [
    {
      url: "https://adityanamdeo.qzz.io/hero-portrait.jpg",
      width: 1200,
      height: 630,
      alt: "Aditya Namdeo - Interactive Terminal Portfolio",
    },
  ],
}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_spaceMono.variable} ${_syne.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}