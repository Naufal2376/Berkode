import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "BerKode | Web Development & UI/UX Agency",
  description:
    "Architecting Digital Excellence. We craft high-performance websites & intuitive UI/UX experiences.",
  keywords: ["web development", "UI/UX", "digital agency", "Next.js", "React"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
