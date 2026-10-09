import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import { SITE } from "@/lib/site"
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
  metadataBase: new URL(SITE.url),
  title: {
    default: "BerKode — Jasa Pembuatan Website & Aplikasi untuk UMKM | Palembang",
    template: "%s | BerKode",
  },
  description: SITE.description,
  keywords: [
    "jasa pembuatan website palembang",
    "jasa bikin website umkm",
    "jasa pembuatan aplikasi",
    "web development palembang",
    "UI/UX designer palembang",
    "Next.js developer",
    "BerKode",
  ],
  authors: [{ name: "BerKode Team", url: SITE.url }],
  creator: "BerKode",
  publisher: "BerKode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "BerKode — Jasa Pembuatan Website & Aplikasi untuk UMKM | Palembang",
    description: SITE.description,
    url: SITE.url,
    siteName: "BerKode",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "BerKode — Partner Digital Kreatif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BerKode — Jasa Pembuatan Website & Aplikasi untuk UMKM | Palembang",
    description: SITE.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
