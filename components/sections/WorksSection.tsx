"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Updated Projects Data based on your links
const projects = [
  {
    id: 1,
    title: "Pempek Techi Palembang",
    category: "UMKM / Food & Beverage",
    description:
      "Website katalog digital untuk bisnis kuliner lokal. Desain visual yang menggugah selera dengan integrasi pemesanan WhatsApp otomatis untuk meningkatkan konversi penjualan.",
    image: "/projects/pempek-techi.png", // Pastikan upload screenshot webnya ke folder public/projects
    color: "#F59E0B", // Warna Orange/Gold (Makanan)
    tags: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    link: "https://pempek-techi-palembang.vercel.app/",
    github: "#", // Isi link github jika ada, atau biarkan #
  },
  {
    id: 2,
    title: "Para Laundry",
    category: "Service Business",
    description:
      "Landing page modern untuk usaha jasa laundry. Menampilkan daftar layanan dan harga dengan desain 'Clean UI' yang membangun kepercayaan dan memudahkan pelanggan mencari informasi.",
    image: "/projects/para-laundry.png", // Pastikan upload screenshot webnya
    color: "#3B82F6", // Warna Biru (Kebersihan/Air)
    tags: ["React", "Framer Motion", "Responsive Design"],
    link: "https://para-laundry.vercel.app/",
    github: "#",
  },
  {
    id: 3,
    title: "Resep Naks Kost",
    category: "Web App / Lifestyle",
    description:
      "Platform pencari resep masakan praktis dan hemat budget. Solusi kreatif untuk mahasiswa dengan fitur filter bahan masakan sederhana dan estimasi harga yang terjangkau.",
    image: "/projects/resep-naks-kost.png", // Pastikan upload screenshot webnya
    color: "#10B981", // Warna Hijau (Segar/Hemat)
    tags: ["Next.js", "Rest API", "Search Algorithm"],
    link: "https://resep-naks-kost.vercel.app/",
    github: "#",
  },
]

export default function WorksSection() {
  return (
    <section id="work" className="relative py-24 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
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
                Beberapa contoh hasil kerja kami membantu UMKM dan ide kreatif
                menjadi realitas digital yang fungsional.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-neon border border-neon/30 rounded-lg hover:bg-neon/10 transition-colors"
            >
              Mulai Proyek Anda
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Portfolio Grid - Static without scroll animation */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={cn(
                  "relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden",
                  "border border-mid-green/20 hover:border-neon/50",
                  "bg-deep-navy/40 backdrop-blur-sm",
                  "transition-all duration-500",
                  "hover:shadow-xl hover:shadow-neon/10"
                )}
              >
                {/* Project Image Background */}
                <div className="absolute inset-0 bg-linear-to-br from-deep-green/80 to-deep-navy/80">
                  {/* You should use Next.js Image component here if you have the files, 
                      but for background cover effect with dynamic url, a simple img or div is easier for now,
                      or keep using the gradient placeholder below until you add images */}

                  {/* Placeholder Gradient based on brand color */}
                  <div
                    className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}40, var(--deep-navy))`,
                    }}
                  />

                  {/* Real Image Placeholder (Uncomment when you have images) */}
                  {/* <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  /> 
                  */}

                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(${project.color}40 1px, transparent 1px), linear-gradient(90deg, ${project.color}40 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 bg-linear-to-t from-deep-navy via-deep-navy/80 to-transparent">
                  {/* Category */}
                  <span
                    className="inline-block w-fit px-3 py-1 mb-3 text-xs font-mono rounded-full border border-white/10 backdrop-blur-md"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                      borderColor: `${project.color}40`,
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-neon transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono text-gray-300 bg-black/20 rounded-md border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 bg-neon text-deep-green font-bold text-sm rounded-lg shadow-lg shadow-neon/20"
                    >
                      Kunjungi Website
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    {project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-10 h-10 border border-mid-green/30 rounded-lg hover:border-neon/50 hover:bg-neon/10 transition-colors bg-black/20"
                      >
                        <Github className="w-5 h-5 text-gray-400" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 100px ${project.color}20`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
