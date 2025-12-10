"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Palette,
  Smartphone,
  Search,
  Zap,
  Shield,
  ArrowUpRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "High-performance websites built with modern technologies like Next.js, React, and TypeScript.",
    features: ["Custom Development", "E-Commerce", "Web Apps"],
    gradient: "from-neon/20 to-transparent",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive interfaces that delight users and drive conversions through thoughtful design.",
    features: ["User Research", "Prototyping", "Design Systems"],
    gradient: "from-mid-green/20 to-transparent",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "PWA"],
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Boost your online visibility and organic traffic with data-driven SEO strategies.",
    features: ["Technical SEO", "Content Strategy", "Analytics"],
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Lightning-fast load times and optimized core web vitals for better user experience.",
    features: ["Speed Optimization", "CDN Setup", "Caching"],
    gradient: "from-yellow-500/20 to-transparent",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Enterprise-grade security implementations for your digital assets.",
    features: ["SSL", "Security Audits", "Encryption"],
    gradient: "from-red-500/20 to-transparent",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            What We <span className="text-neon">Build</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver end-to-end digital solutions
            that drive results.
          </p>
        </motion.div>
      </div>

      {/* Services Grid - Uniform Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => {
          const Icon = service.icon

          return (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={cn(
                "group relative rounded-2xl overflow-hidden",
                "border border-mid-green/20 hover:border-neon/50",
                "bg-deep-navy/40 backdrop-blur-sm",
                "transition-all duration-500",
                "hover:shadow-lg hover:shadow-neon/10"
              )}
            >
              {/* Background Gradient */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  `bg-linear-to-br ${service.gradient}`
                )}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col p-6">
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    "bg-neon/10 border border-neon/20",
                    "group-hover:bg-neon/20 group-hover:scale-110 transition-all duration-300"
                  )}
                >
                  <Icon className="w-6 h-6 text-neon" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-xs font-mono text-gray-400 bg-white/5 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-1 text-neon text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 right-4 w-2 h-2 bg-neon rounded-full" />
                <div className="absolute top-4 right-8 w-1 h-1 bg-neon/50 rounded-full" />
                <div className="absolute top-8 right-4 w-1 h-1 bg-neon/50 rounded-full" />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
