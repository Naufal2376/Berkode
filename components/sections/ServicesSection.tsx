"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Smartphone, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { SITE } from "@/lib/site"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Bangun kehadiran digital Anda dengan website yang cepat, responsif, dan profesional.",
    gradient: "from-neon/20 to-transparent",
    packages: [
      {
        name: "Paket Starter",
        subtitle:
          "Cocok untuk landing page sederhana atau kebutuhan tugas kuliah.",
        price: "Rp 150.000",
        duration: "3 - 5 Hari Kerja",
        features: [
          "Static Landing Page",
          "Desain Responsif (Mobile Friendly)",
          "Source Code Clean & Revisi 2x",
        ],
      },
      {
        name: "Paket UMKM Go Digital",
        subtitle:
          "Solusi lengkap untuk bisnis yang ingin tampil profesional di internet.",
        price: "Rp 350.000",
        duration: "7 - 14 Hari Kerja",
        features: [
          "5 Halaman Utama",
          "SEO Basic & Integrasi Bisnis",
          "Content Management System (CMS)",
          "Gratis Hosting & Domain .my.id",
        ],
      },
      {
        name: "Paket Enterprise",
        subtitle: "Sistem website kompleks untuk kebutuhan bisnis skala besar.",
        price: "Contact Us",
        duration: "1 - 2 Bulan",
        features: [
          "Multi-Page Website",
          "Dynamic Content (CMS)",
          "Sistem Member & Admin",
          "Integrasi Payment Gateway",
          "Keamanan Tingkat Lanjut",
        ],
        badge: "Garansi & Support: Bantuan teknis selama 1 bulan",
      },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang menarik dan ramah pengguna untuk aplikasi atau website Anda.",
    gradient: "from-mid-green/20 to-transparent",
    packages: [
      {
        name: "Paket Pixel",
        subtitle: "Desain cepat untuk kebutuhan dasar.",
        price: "Rp 150.000",
        duration: "2 - 3 Hari Kerja",
        features: [
          "UI/UX Sederhana (Dashboard dan 3 halaman lainnya)",
          "Redesign Sederhana",
        ],
      },
      {
        name: "Paket Hover",
        subtitle: "Desain lebih detail dengan interaksi yang menarik.",
        price: "Rp 350.000",
        duration: "3 - 5 Hari Kerja",
        features: [
          "UI/UX Medium Complex dengan micro interaction",
          "Design lebih interaktif & detail",
          "10+ halaman design",
        ],
      },
      {
        name: "Paket Startup",
        subtitle: "Desain komprehensif untuk produk digital yang matang.",
        price: "Contact Us",
        duration: "3 Minggu",
        features: [
          "UI/UX Complex & Detail",
          "Design interaktif dengan animasi",
          "20+ halaman design",
        ],
      },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Kembangkan aplikasi mobile Android/iOS yang fungsional dan scalable.",
    gradient: "from-blue-500/20 to-transparent",
    packages: [
      {
        name: "Paket MVP",
        subtitle:
          "Wujudkan ide aplikasi menjadi purwarupa yang bisa dijalankan.",
        price: "Rp 350.000",
        duration: "5 - 7 Hari Kerja",
        features: [
          "Slicing UI Presisi 3 - 5 halaman utama",
          "Interaksi Dasar",
          "Data Dummy (Statis)",
          "File APK Siap Install",
        ],
      },
      {
        name: "Paket Business App",
        subtitle:
          "Aplikasi siap pakai yang terintegrasi dengan sistem backend.",
        price: "Rp 2.000.000",
        duration: "3 - 4 Minggu",
        features: [
          "Android App (Play Store Ready)",
          "Integrasi API & Admin Panel Web",
          "Integrasi Database",
          "Fitur Notifikasi",
        ],
      },
      {
        name: "Paket Super App",
        subtitle:
          "Ekosistem aplikasi lengkap dengan fitur canggih dan keamanan tinggi.",
        price: "Contact Us",
        duration: "1 - 2 Bulan",
        features: [
          "Hybrid Development",
          "Fitur Real-time",
          "Payment Gateway",
          "Scalable Backend Server",
          "Dokumentasi Lengkap",
        ],
        badge: "Garansi Bug: Perbaikan error gratis selama 2 bulan",
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/20">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Yang Kami Tawarkan Buat{" "}
            <span className="text-neon">Bisnis Kamu</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Paket lengkap dari web development sampai design yang bikin bisnis
            kamu siap di era digital.
          </p>
        </motion.div>
      </div>

      {/* Services Grid - 3 Rows (Stacked) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto space-y-12"
      >
        {services.map((service) => {
          const Icon = service.icon

          return (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="flex flex-col"
            >
              {/* Category Header */}
              <div className="mb-8 text-center">
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl mx-auto mb-4",
                    "bg-neon/10 border border-neon/30",
                    "flex items-center justify-center"
                  )}
                >
                  <Icon className="w-7 h-7 text-neon" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
                  {service.description}
                </p>
              </div>

              {/* Packages - Horizontal Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.packages.map((pkg, idx) => (
                  <motion.div
                    key={pkg.name}
                    whileHover={{ y: -4 }}
                    className={cn(
                      "relative overflow-hidden rounded-xl border flex flex-col",
                      "bg-deep-navy/40 backdrop-blur-sm p-6",
                      "transition-all duration-300",
                      idx === 1
                        ? "border-neon/50 shadow-lg shadow-neon/10"
                        : "border-mid-green/20 hover:border-neon/30"
                    )}
                  >
                    {/* Popular Badge */}
                    {idx === 1 && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-bold bg-neon text-deep-navy rounded-full">
                          POPULER
                        </span>
                      </div>
                    )}

                    {/* Package Name */}
                    <h4 className="text-lg font-bold text-white mb-1">
                      {pkg.name}
                    </h4>
                    <p className="text-xs text-gray-400 mb-4">{pkg.subtitle}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-white">
                        {pkg.price}
                      </span>
                      <p className="text-xs text-gray-500 mt-1 font-mono">
                        ⏱ {pkg.duration}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-4 flex-1">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <Check className="w-4 h-4 text-neon shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Badge/Garansi */}
                    {pkg.badge && (
                      <div className="pt-4 mb-4 border-t border-mid-green/20">
                        <p className="text-xs text-neon/80 font-mono">
                          ✓ {pkg.badge}
                        </p>
                      </div>
                    )}

                    {/* CTA Button - Always at bottom */}
                    <motion.a
                      href={SITE.getWhatsappUrl(
                        `Halo BerKode, saya tertarik dengan ${pkg.name} (${service.title})`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "w-full mt-auto px-4 py-2.5 rounded-lg font-semibold text-sm text-center inline-block",
                        "transition-all duration-300",
                        idx === 1
                          ? "bg-neon text-deep-navy hover:shadow-lg hover:shadow-neon/30"
                          : "border border-neon/30 text-neon hover:bg-neon/10"
                      )}
                    >
                      Pesan Sekarang
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
