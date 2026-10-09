"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, MapPin } from "lucide-react"
import { TEAM, SITE } from "@/lib/site"

export default function TeamSection() {
  if (!TEAM || TEAM.length === 0) return null

  return (
    <section id="team" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/20">
            Tim & Profil
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Di Balik Setiap Baris <span className="text-neon">Kode</span>
          </h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed bg-deep-navy/40 border border-mid-green/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-neon text-sm font-mono mb-3">
              <MapPin className="w-4 h-4" />
              <span>Berbasis di {SITE.city}, didirikan {SITE.foundedYear}</span>
            </div>
            <p className="text-gray-300">
              <strong className="text-white">BerKode</strong> adalah studio pengembangan digital independen. Kami mendedikasikan keahlian teknologi untuk mendampingi UMKM, mahasiswa, dan startup lokal bertransformasi ke ranah digital. Setiap website dan aplikasi yang kami buat dikerjakan langsung oleh tim teknis kami dengan standar clean-code, performa tinggi, dan biaya yang transparan.
            </p>
          </div>
        </motion.div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl border border-mid-green/30 bg-deep-navy/60 hover:border-neon/50 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-neon/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4 mb-5">
                  {/* Initials Avatar */}
                  <div className="w-14 h-14 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center font-mono font-bold text-lg text-neon group-hover:scale-105 group-hover:bg-neon group-hover:text-deep-navy transition-all duration-300 shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neon transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-neon/80">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-mid-green/20">
                {member.github && (
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`GitHub ${member.name}`}
                    className="p-2 rounded-lg bg-deep-navy border border-mid-green/30 text-gray-400 hover:text-neon hover:border-neon/50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                )}
                {member.linkedin && (
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`LinkedIn ${member.name}`}
                    className="p-2 rounded-lg bg-deep-navy border border-mid-green/30 text-gray-400 hover:text-neon hover:border-neon/50 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
