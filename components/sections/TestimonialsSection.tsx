"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { TESTIMONIALS } from "@/lib/site"

export default function TestimonialsSection() {
  // Hanya dirender bila ada testimoni asli dari klien
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) {
    return null
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/20">
            Testimoni Klien
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Apa Kata <span className="text-neon">Mereka?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-mid-green/30 bg-deep-navy/60 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-neon/40 mb-4" />
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-white text-base">{item.name}</h4>
                <p className="text-xs text-neon/80 font-mono">
                  {item.role ? `${item.role}, ` : ""}{item.business}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
