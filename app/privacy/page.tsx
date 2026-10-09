import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { SITE } from "@/lib/site"
import FooterSection from "@/components/sections/FooterSection"

export const metadata: Metadata = {
  title: "Kebijakan Privasi | BerKode",
  description:
    "Kebijakan privasi BerKode mengenai pengumpulan dan perlindungan data calon klien serta pengguna layanan.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-12 bg-deep-navy text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-neon/80 hover:text-neon mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/20">
            Legalitas
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Kebijakan Privasi (Privacy Policy)
          </h1>
          <p className="text-sm font-mono text-gray-400">
            Terakhir diperbarui: 9 Oktober 2026
          </p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="p-6 rounded-2xl border border-mid-green/20 bg-deep-navy/40">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-neon" />
              1. Komitmen Privasi Kami
            </h2>
            <p className="text-sm sm:text-base">
              BerKode (&ldquo;kami&rdquo;) sangat menghargai privasi setiap calon klien, klien, dan pengunjung situs web kami. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan menjaga kerahasiaan informasi pribadi Anda saat menggunakan layanan atau menghubungi kami.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Data yang Kami Kumpulkan</h2>
            <p className="text-sm sm:text-base">
              Kami hanya mengumpulkan data yang Anda berikan secara sukarela untuk keperluan komunikasi dan konsultasi proyek, antara lain:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
              <li>Nama lengkap atau nama bisnis/organisasi Anda.</li>
              <li>Kontak komunikasi langsung: Nomor WhatsApp dan alamat email.</li>
              <li>Rincian teknis, materi awal, atau deskripsi kebutuhan website/aplikasi yang ingin Anda kembangkan.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Tujuan Penggunaan Data</h2>
            <p className="text-sm sm:text-base">
              Data yang Anda serahkan semata-mata digunakan untuk:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
              <li>Merespons pertanyaan, konsultasi teknis, dan permohonan penawaran harga.</li>
              <li>Koordinasi selama proses pengerjaan dan pelaporan progres proyek.</li>
              <li>Penyampaian invoice, administrasi, dan layanan bantuan garansi pasca rilis.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Perlindungan & Kerahasiaan Data</h2>
            <p className="text-sm sm:text-base">
              Kami berkomitmen untuk tidak pernah menjual, menyewakan, memperdagangkan, atau membagikan informasi kontak maupun materi rahasia proyek Anda kepada pihak ketiga mana pun tanpa persetujuan tertulis dari Anda, kecuali jika diwajibkan oleh hukum yang berlaku di Republik Indonesia.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Hak Anda atas Data Pribadi</h2>
            <p className="text-sm sm:text-base">
              Anda berhak setiap saat untuk meminta klarifikasi, pembaruan, ataupun penghapusan riwayat komunikasi dan data kontak Anda dari catatan kami dengan menghubungi email resmi kami.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Hubungi Kami</h2>
            <p className="text-sm sm:text-base">
              Jika Anda memiliki pertanyaan terkait kebijakan privasi ini, silakan hubungi tim BerKode melalui:
            </p>
            <div className="p-4 rounded-xl border border-mid-green/30 bg-deep-navy/60 font-mono text-sm space-y-1">
              <p>Email: <a href={`mailto:${SITE.email}`} className="text-neon hover:underline">{SITE.email}</a></p>
              <p>WhatsApp: <a href={SITE.getWhatsappUrl()} className="text-neon hover:underline">+{SITE.whatsapp}</a></p>
              <p>Lokasi: {SITE.address}</p>
            </div>
          </section>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
