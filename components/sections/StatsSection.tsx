"use client"

import { motion } from "framer-motion"
import { STATS } from "@/lib/site"

export default function StatsSection() {
  if (!STATS || STATS.length === 0) return null

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 -mt-6 z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-mid-green/30 bg-deep-navy/70 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-xl shadow-black/40"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-mid-green/20">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center group ${
                  idx > 0 ? "pt-6 md:pt-0 md:pl-6" : ""
                }`}
              >
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neon tracking-tight mb-1 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="font-semibold text-white text-sm sm:text-base mb-1">
                  {stat.label}
                </span>
                {stat.description && (
                  <span className="text-xs text-gray-400 max-w-[180px] leading-relaxed">
                    {stat.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
