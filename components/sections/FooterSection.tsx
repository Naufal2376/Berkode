"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, MailIcon } from "lucide-react"
import Image from "next/image"
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa"
import { SITE } from "@/lib/site"

// Data Link Footer
const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
  ],
  company: [
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Portofolio", href: "#work" },
    { name: "Kontak", href: "#contact" },
  ],
  legal: [
    { name: "Kebijakan Privasi", href: "/privacy" },
    { name: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  ],
}

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative pt-24 pb-8 border-t border-mid-green/10"
    >
      {/* CTA Section - Enhanced Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-linear-to-br from-deep-navy via-deep-green/50 to-deep-navy" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(0, 255, 114, 0.4), transparent 50%), radial-gradient(circle at 70% 50%, rgba(0, 132, 79, 0.3), transparent 50%)",
            }}
          />

          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 255, 114, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 114, 0.3) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/30">
                Ready to Start?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
            >
              Punya ide brilian?
              <br />
              <span className="text-neon">Wujudkan sekarang.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Konsultasi gratis dulu aja. Kami bantu bedah kebutuhan digital
              kamu sampai nemu solusi yang pas di kantong.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href={SITE.getWhatsappUrl("Halo BerKode, saya mau konsultasi project")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-neon text-deep-navy font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,255,114,0.5)] transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Chat WhatsApp
              </motion.a>
              <motion.a
                href={SITE.getEmailUrl("Konsultasi Project")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-neon/50 text-white font-semibold rounded-xl hover:bg-neon/10 hover:border-neon transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
                Kirim Email
              </motion.a>
            </motion.div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-neon/30 rounded-tr-3xl" />
          <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-neon/30 rounded-bl-3xl" />
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="BerKode"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <span className="text-2xl font-mono font-bold text-white">
                  Ber<span className="text-neon">Kode</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                Partner digital kreatif untuk Mahasiswa, UMKM, dan Startup. Kami
                wujudkan ide digital kamu jadi realitas dengan harga yang masuk
                akal.
              </p>
              <div className="flex gap-3">
                <motion.a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram BerKode"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-deep-navy/60 border border-mid-green/30 flex items-center justify-center text-gray-400 hover:text-neon hover:border-neon/50 transition-all"
                >
                  <FaInstagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={SITE.getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp BerKode"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-deep-navy/60 border border-mid-green/30 flex items-center justify-center text-gray-400 hover:text-neon hover:border-neon/50 transition-all"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={SITE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub BerKode"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-deep-navy/60 border border-mid-green/30 flex items-center justify-center text-gray-400 hover:text-neon hover:border-neon/50 transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={SITE.getEmailUrl("Konsultasi Project")}
                  aria-label="Email BerKode"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-deep-navy/60 border border-mid-green/30 flex items-center justify-center text-gray-400 hover:text-neon hover:border-neon/50 transition-all"
                >
                  <MailIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Links Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-neon transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-mid-green/50 group-hover:bg-neon transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Perusahaan
            </h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-neon transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-mid-green/50 group-hover:bg-neon transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Legalitas
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-neon transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-mid-green/50 group-hover:bg-neon transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-mid-green/20 pt-8 pb-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 font-mono">
              © {new Date().getFullYear()} BerKode. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-neon/60" />
              <span className="font-mono">Remote / Palembang, ID</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
