"use client"

import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Work", href: "#work" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
]

export default function FooterSection() {
  return (
    <footer id="contact" className="relative pt-24 pb-8">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-br from-deep-navy via-deep-green/50 to-deep-navy" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(0, 255, 114, 0.3), transparent 50%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
            >
              Ready to upgrade your
              <br />
              <span className="text-neon">digital presence?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
            >
              Let&apos;s collaborate and build something extraordinary together.
              Your vision, our expertise.
            </motion.p>

            {/* Email CTA */}
            <motion.a
              href="mailto:hello@berkode.com"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 30px rgba(0, 255, 114, 0.5)",
              }}
              className="inline-flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-neon hover:text-white transition-colors"
            >
              <Mail className="w-8 h-8 sm:w-10 sm:h-10" />
              hello@berkode.com
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.a>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-12 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-neon" />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-neon" />
                <span>Jakarta, Indonesia</span>
              </div>
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-neon/30 rounded-tl-xl" />
          <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-neon/30 rounded-br-xl" />
        </motion.div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-mid-green/30 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                {/* Logo Icon */}
                <Image
                  src="/logo.png"
                  alt="Berkode Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="font-mono text-xl font-bold text-white tracking-tight">
                  Ber<span className="text-neon">kode</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Architecting digital excellence through innovative web solutions
                and stunning UI/UX design.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        "border border-mid-green/30 bg-deep-navy/30",
                        "text-gray-400 hover:text-neon hover:border-neon/50",
                        "transition-colors duration-300"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-neon transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-neon transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-neon transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-mid-green/30 mt-12 pt-8 text-center items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} BerKode. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
