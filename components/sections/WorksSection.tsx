"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Platform E-Commerce",
    category: "Web Development",
    description:
      "Toko online modern dengan sistem inventory real-time dan proses checkout yang lancar. Buat jualan online makin gampang.",
    image: "/projects/project-1.jpg",
    color: "#00FF72",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Dashboard Keuangan",
    category: "UI/UX Design",
    description:
      "Dashboard analitik keuangan yang kompleks tapi mudah dipakai. Data visualisasi real-time buat monitoring bisnis lebih mudah.",
    image: "/projects/project-2.jpg",
    color: "#00844F",
    tags: ["React", "D3.js", "TypeScript"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Aplikasi Fitness",
    category: "Mobile App",
    description:
      "Aplikasi tracking fitness yang berjalan di iOS dan Android. AI memberikan rekomendasi workout yang cocok buat kamu.",
    image: "/projects/project-3.jpg",
    color: "#4F46E5",
    tags: ["React Native", "Firebase", "TensorFlow"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Landing Page SaaS",
    category: "Web Development",
    description:
      "Landing page yang convert tinggi dengan animasi halus dan interaksi yang engaging. Buat calon customer tertarik.",
    image: "/projects/project-4.jpg",
    color: "#EC4899",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Platform Real Estate",
    category: "Full Stack",
    description:
      "Platform listing properti dengan virtual tour dan filter pencarian yang canggih. Calon pembeli bisa explore dengan mudah.",
    image: "/projects/project-5.jpg",
    color: "#F59E0B",
    tags: ["Next.js", "Prisma", "MapBox"],
    link: "#",
    github: "#",
  },
]

export default function WorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative py-24 overflow-hidden"
    >
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
                Portfolio terbaik kami yang menunjukin gimana kami bikin
                pengalaman digital yang impactful buat berbagai klien.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-neon border border-neon/30 rounded-lg hover:bg-neon/10 transition-colors"
            >
              Lihat Semua Proyek
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="relative">
        <motion.div style={{ x }} className="flex gap-6 pl-4 sm:pl-8 lg:pl-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw]"
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
                {/* Project Image */}
                <div className="absolute inset-0 bg-linear-to-br from-deep-green/80 to-deep-navy/80">
                  {/* Placeholder gradient - replace with actual images */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}20, transparent 50%)`,
                    }}
                  />
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
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 bg-linear-to-t from-deep-navy via-deep-navy/50 to-transparent">
                  {/* Category */}
                  <span
                    className="inline-block w-fit px-3 py-1 mb-3 text-xs font-mono rounded-full"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-neon transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono text-gray-400 bg-white/5 rounded-md border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-neon text-deep-green font-semibold text-sm rounded-lg"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 border border-mid-green/30 rounded-lg hover:border-neon/50 hover:bg-neon/10 transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-400" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 80px ${project.color}10`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-mid-green/30" />
          ))}
        </div>
      </div>
    </section>
  )
}
