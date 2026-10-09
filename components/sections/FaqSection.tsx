"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Berapa lama pengerjaan website?",
    answer:
      "Tergantung paket yang diambil. Untuk Landing Page sederhana bisa selesai 3-5 hari. Untuk website UMKM sekitar 1-2 minggu. Kalau sistem custom butuh waktu diskusi lebih lanjut.",
  },
  {
    question: "Apakah dapat gratis hosting & domain?",
    answer:
      "Ya! Untuk Paket UMKM dan Paket Starter (Promo), kami sudah berikan gratis Domain (.my.id) dan Hosting selama 1 tahun pertama. Jadi kamu tinggal terima beres.",
  },
  {
    question: "Apa itu revisi? Kalau saya kurang cocok gimana?",
    answer:
      "Revisi adalah perbaikan minor (ganti warna, ganti teks, geser posisi foto). Kami berikan jatah revisi 2x - 3x sesuai paket. Kalau ada perombakan total desain/fitur di luar kesepakatan awal, akan ada biaya tambahan.",
  },
  {
    question: "Saya gaptek, nanti diajarin cara pakainya?",
    answer:
      "Pasti! Khusus paket yang ada CMS (Content Management System), kami buatkan video tutorial singkat cara ganti foto/teks produk. Gampang banget kok, kayak update status sosmed.",
  },
  {
    question: "Bisa bikin aplikasi Android juga?",
    answer:
      "Bisa banget. Kami punya layanan Mobile Apps mulai dari MVP (Prototype) sampai aplikasi bisnis yang siap tayang di Play Store.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-mid-green/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/20">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Pertanyaan yang <span className="text-neon">Sering Ditanya</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Masih ragu? Cek jawaban dari pertanyaan yang paling sering masuk
            dari klien kami.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                "group relative rounded-2xl overflow-hidden",
                "border transition-all duration-300",
                openIndex === index
                  ? "border-neon/50 bg-deep-navy/60 shadow-lg shadow-neon/10"
                  : "border-mid-green/20 bg-deep-navy/40 hover:border-neon/30"
              )}
            >
              {/* Gradient Background on Hover */}
              <div
                className={cn(
                  "absolute inset-0 bg-linear-to-br from-neon/5 to-transparent opacity-0 transition-opacity duration-300",
                  openIndex === index && "opacity-100"
                )}
              />

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="relative flex items-start justify-between w-full p-6 text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300",
                      openIndex === index
                        ? "bg-neon/20 border border-neon/50"
                        : "bg-mid-green/10 border border-mid-green/30 group-hover:border-neon/30"
                    )}
                  >
                    <span
                      className={cn(
                        "text-sm font-bold font-mono",
                        openIndex === index ? "text-neon" : "text-gray-400"
                      )}
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "font-semibold text-base sm:text-lg transition-colors",
                      openIndex === index
                        ? "text-neon"
                        : "text-white group-hover:text-neon"
                    )}
                  >
                    {faq.question}
                  </span>
                </div>
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ml-4 transition-all duration-300",
                    openIndex === index
                      ? "bg-neon text-deep-navy rotate-180"
                      : "bg-mid-green/10 text-gray-400 group-hover:bg-neon/10 group-hover:text-neon"
                  )}
                >
                  <Plus className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-18">
                      <div className="pt-4 border-t border-mid-green/20">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Masih ada pertanyaan lain?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neon/30 text-neon hover:bg-neon/10 transition-all font-medium"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </div>
    </section>
  )
}
