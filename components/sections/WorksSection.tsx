"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Pempek Techi Palembang",
    category: "UMKM / Kuliner",
    type: "Sistem & POS",
    year: "2024",
    description:
      "Sistem manajemen bisnis kuliner yang mencakup Point of Sales (POS), manajemen stok produk, dan laporan keuangan otomatis. Dirancang dengan dashboard admin yang powerful untuk memantau performa bisnis dan pengeluaran secara real-time.",
    image: "/projects/pempek-techi.png",
    color: "#F59E0B",
    tags: ["Laravel", "Tailwind CSS", "FilamentPHP", "Livewire", "MySQL"],
    link: "https://pempek-techi-palembang.vercel.app/",
    github: "https://github.com/GhalibAG/pempek-techi-clean",
  },
  {
    id: 2,
    title: "Para Laundry",
    category: "Layanan Jasa",
    type: "Sistem Operasional",
    year: "2024",
    description:
      "Aplikasi manajemen laundry modern yang memungkinkan pelanggan melacak status pesanan mereka secara real-time melalui kode unik. Dilengkapi dengan sistem autentikasi aman dan dashboard operasional untuk mencatat transaksi serta pengeluaran harian.",
    image: "/projects/para-laundry.png",
    color: "#3B82F6",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    link: "https://para-laundry.vercel.app/",
    github: "https://github.com/Naufal2376/paralaundry",
  },
  {
    id: 3,
    title: "Resep Naks Kost",
    category: "Web App / Komunitas",
    type: "Web Application",
    year: "2024",
    description: `Platform pencarian resep masakan kreatif yang dikurasi khusus untuk mahasiswa dengan bahan yang hemat dan praktis. Menampilkan antarmuka yang interaktif dengan kategori unik seperti "Mie Series" untuk pengalaman pengguna yang menyenangkan.`,
    image: "/projects/resep-naks-kost.png",
    color: "#10B981",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Magic UI"],
    link: "https://resep-naks-kost.vercel.app/",
    github: "https://github.com/Naufal2376/Resep-Naks-Kost",
  },
]

const categories = ["Semua", "UMKM", "Sistem", "Web App"] as const

export default function WorksSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua")

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "Semua") return true
    if (activeCategory === "UMKM") return project.category.includes("UMKM")
    if (activeCategory === "Sistem") return project.type.includes("Sistem")
    if (activeCategory === "Web App") return project.type.includes("Web Application")
    return true
  })

  return (
    <section id="work" className="relative py-24 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/20">
            Portfolio Kami
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Karya yang <span className="text-neon">Bercerita</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Contoh implementasi nyata solusi digital kami untuk membantu UMKM dan perintis produk beroperasi lebih efisien.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-neon border border-neon/30 rounded-lg hover:bg-neon/10 transition-colors self-start md:self-auto"
            >
              Mulai Proyek Anda
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mt-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-neon text-deep-navy font-bold shadow-lg shadow-neon/20"
                  : "bg-deep-navy/40 border border-mid-green/30 text-gray-400 hover:text-white hover:border-neon/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl overflow-hidden border border-mid-green/20 hover:border-neon/50 bg-deep-navy/40 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-neon/10 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-linear-to-br from-deep-green/80 to-deep-navy/80">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}40, var(--deep-navy))`,
                    }}
                  />

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(${project.color}40 1px, transparent 1px), linear-gradient(90deg, ${project.color}40 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 100px ${project.color}20`,
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-6 sm:p-8">
                  {/* Badges: Category, Type, Year */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className="inline-block px-3 py-1 text-xs font-mono rounded-full border backdrop-blur-md"
                      style={{
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                        borderColor: `${project.color}40`,
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {project.type}
                    </span>
                    <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-neon/10 border border-neon/30 text-neon">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-neon transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono text-gray-300 bg-black/40 rounded-md border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 bg-neon text-deep-green font-bold text-sm rounded-lg shadow-lg shadow-neon/20 flex-1 justify-center"
                    >
                      Kunjungi Website
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    {project.github && project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code ${project.title}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-10 h-10 border border-mid-green/30 rounded-lg hover:border-neon/50 hover:bg-neon/10 transition-colors bg-black/20"
                      >
                        <Github className="w-5 h-5 text-gray-400" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
