"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiVite,
  SiLaravel,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiGo,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
} from "react-icons/si"
import { FaJava, FaCode } from "react-icons/fa"
import { TbBrandCpp } from "react-icons/tb"

// Tech stack with logos
const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Vite", icon: SiVite },
  { name: "Laravel", icon: SiLaravel },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "PHP", icon: SiPhp },
  { name: "Go", icon: SiGo },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "C++", icon: TbBrandCpp },
  { name: "C", icon: FaCode },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Figma", icon: SiFigma },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Docker", icon: SiDocker },
]

// Duplicate for seamless loop
const marqueeItems = [...techStack, ...techStack]
const marqueeItemsReverse = [...techStack]
  .reverse()
  .concat([...techStack].reverse())

export default function TechStackSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/20">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Teknologi yang Kami <span className="text-neon">Kuasai</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Kami pakai teknologi terkini dan proven buat bikin aplikasi yang
            cepat, scalable, dan reliable.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-deep-green via-deep-green/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-deep-navy via-deep-navy/80 to-transparent z-10 pointer-events-none" />

        {/* First Row - Left to Right */}
        <div className="flex mb-6">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -100 * techStack.length] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((tech, index) => (
              <div
                key={`row1-${index}`}
                aria-hidden={index >= techStack.length ? "true" : undefined}
                className={cn(
                  "group shrink-0 flex items-center gap-3 px-5 py-3",
                  "rounded-xl border border-mid-green/20",
                  "bg-deep-navy/30 backdrop-blur-sm",
                  "hover:border-neon/50 hover:bg-neon/5",
                  "transition-all duration-300"
                )}
              >
                <tech.icon className="w-6 h-6 text-gray-400 group-hover:text-neon transition-colors" />
                <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex" aria-hidden="true">
          <motion.div
            className="flex gap-6"
            animate={{ x: [-100 * techStack.length, 0] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {marqueeItemsReverse.map((tech, index) => (
              <div
                key={`row2-${index}`}
                className={cn(
                  "group shrink-0 flex items-center gap-3 px-5 py-3",
                  "rounded-xl border border-mid-green/20",
                  "bg-deep-navy/30 backdrop-blur-sm",
                  "hover:border-neon/50 hover:bg-neon/5",
                  "transition-all duration-300"
                )}
              >
                <tech.icon className="w-6 h-6 text-gray-400 group-hover:text-neon transition-colors" />
                <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
