"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileText, Code, Search, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: MessageSquare,
    title: "1. Konsultasi Gratis",
    description:
      "Hubungi kami via WhatsApp. Ceritakan ide, kebutuhan, dan budget kamu. Kami akan sarankan paket terbaik.",
  },
  {
    icon: FileText,
    title: "2. Deal & DP",
    description:
      "Sepakati fitur dan harga. Lakukan pembayaran DP (50%) agar slot pengerjaan kamu diamankan.",
  },
  {
    icon: Code,
    title: "3. Development",
    description:
      "Tim kami mulai bekerja. Kamu bisa pantau progress-nya. Kami pastikan kode rapi dan desain sesuai.",
  },
  {
    icon: Search,
    title: "4. Review & Revisi",
    description:
      "Kami kasih lihat hasilnya. Kalau ada yang kurang pas, sampaikan saja. Kami revisi sampai oke (sesuai S&K).",
  },
  {
    icon: Rocket,
    title: "5. Pelunasan & Rilis",
    description:
      "Website/Aplikasi sudah siap? Lakukan pelunasan, dan kami akan online-kan project kamu ke publik.",
  },
]

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(0, 255, 114, 0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/20">
            Alur Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Proses Simpel, Hasil <span className="text-neon">Maksimal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nggak perlu bingung teknis. Kamu terima beres, biar kami yang urus
            kerumitannya.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line with Gradient (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-1 z-0">
            <div className="h-full bg-linear-to-r from-transparent via-neon/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div
                    className={cn(
                      "relative rounded-2xl border p-6 h-full",
                      "bg-deep-navy/60 backdrop-blur-sm",
                      "border-mid-green/20 hover:border-neon/50",
                      "transition-all duration-300",
                      "hover:shadow-lg hover:shadow-neon/10",
                      "flex flex-col items-center text-center"
                    )}
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full",
                          "bg-deep-green border-2 border-neon",
                          "flex items-center justify-center",
                          "font-bold text-sm text-neon font-mono",
                          "shadow-lg shadow-neon/30"
                        )}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={cn(
                        "w-16 h-16 rounded-xl mt-4 mb-6",
                        "bg-neon/10 border border-neon/30",
                        "flex items-center justify-center",
                        "group-hover:scale-110 group-hover:bg-neon/20",
                        "transition-all duration-300"
                      )}
                    >
                      <Icon className="w-8 h-8 text-neon" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon transition-colors">
                      {step.title.replace(/^\d+\.\s*/, "")}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Arrow (Desktop only, not on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-deep-green border-2 border-neon/50 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-neon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Siap untuk mulai? Konsultasi gratis dulu, yuk!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neon text-deep-navy font-bold rounded-xl hover:shadow-lg hover:shadow-neon/30 transition-all"
          >
            Hubungi Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  )
}
