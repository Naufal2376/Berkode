import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import MotionProvider from "@/components/providers/MotionProvider"
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/logo.png`,
  description: SITE.description,
  telephone: `+${SITE.whatsapp}`,
  email: SITE.email,
  priceRange: "Rp 150.000 - Rp 3.000.000+",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -2.9909,
    longitude: 104.7565,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Palembang",
    },
    {
      "@type": "Country",
      name: "Indonesia",
    },
  ],
  sameAs: [SITE.socials.instagram, SITE.socials.github].filter(Boolean),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
        </MotionProvider>
      </body>
    </html>
  )
}
