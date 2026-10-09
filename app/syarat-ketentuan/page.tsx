import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { SITE } from "@/lib/site"
import FooterSection from "@/components/sections/FooterSection"

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan | BerKode",
  description:
    "Syarat dan ketentuan layanan pengerjaan website, sistem aplikasi, dan desain UI/UX di BerKode.",
}

export default function SyaratKetentuanPage() {
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
            Legalitas & Standar Kerja
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Syarat & Ketentuan Layanan
          </h1>
          <p className="text-sm font-mono text-gray-400">
            Terakhir diperbarui: 9 Oktober 2026
          </p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="p-6 rounded-2xl border border-mid-green/20 bg-deep-navy/40">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-neon" />
              Ketentuan Umum Kerja Sama
            </h2>
            <p className="text-sm sm:text-base">
              Dengan memesan atau memulai proyek pengembangan bersama BerKode, klien dianggap telah memahami dan menyetujui seluruh syarat dan ketentuan berikut ini guna menjaga transparansi dan kenyamanan kerja sama kedua belah pihak.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Pembayaran & Uang Muka (DP)</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
              <li>Pengerjaan proyek resmi dimulai setelah klien menyetujui ruang lingkup pekerjaan dan membayarkan Down Payment (DP) sebesar <strong>50%</strong> dari total kesepakatan harga paket/proyek.</li>
              <li>Sisa pelunasan (<strong>50%</strong>) dibayarkan setelah seluruh proses pengembangan dan revisi selesai diverifikasi, sebelum penyerahan hak akses utama server produksi atau serah terima source code final.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Batasan & Prosedur Revisi</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
              <li>Setiap paket pengerjaan telah mencakup jatah revisi <strong>2x hingga 3x</strong> (sesuai spesifikasi paket).</li>
              <li>Revisi yang dimaksud adalah penyesuaian minor: perbaikan teks, penggantian gambar, penataan tata letak visual, atau perbaikan bug logika fungsi.</li>
              <li>Permintaan penambahan fitur baru, perombakan konsep alur sistem secara fundamental di tengah jalan, atau perubahan desain total di luar kesepakatan awal (scope creep) akan dihitung sebagai fitur tambahan dengan estimasi waktu dan biaya terpisah secara transparan.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Garansi & Pemeliharaan (Maintenance)</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
              <li>BerKode memberikan <strong>garansi perbaikan teknis selama 30 hari kalender</strong> terhitung sejak website/aplikasi resmi ditayangkan (live/launching).</li>
              <li>Garansi mencakup penanganan bug, galat fungsi (error runtime), atau inkonsistensi responsivitas antarmuka perangkat.</li>
              <li>Garansi tidak mencakup kerusakan yang diakibatkan oleh modifikasi kode oleh pihak ketiga tanpa persetujuan kami, infeksi malware dari server eksternal, atau kelalaian kredensial akun klien.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Hak Kepemilikan Source Code & Konten</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-300">
              <li>Setelah pelunasan 100% selesai, klien memegang <strong>hak penuh</strong> atas seluruh kode sumber (source code) dan aset kreatif yang diproduksi untuk proyek tersebut.</li>
              <li>Klien bertanggung jawab penuh atas legalitas hak cipta materi (teks, logo, foto produk) yang diserahkan kepada kami untuk dimuat ke dalam website/aplikasi.</li>
              <li>BerKode berhak mencantumkan hasil karya tersebut dalam portofolio kami sebagai bukti rekam jejak kerja, kecuali jika ada perjanjian kerahasiaan khusus (Non-Disclosure Agreement / NDA).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Pembatalan Proyek</h2>
            <p className="text-sm sm:text-base">
              Jika terjadi pembatalan sepihak oleh klien saat proyek telah berjalan, uang muka (DP) yang telah dibayarkan tidak dapat dikembalikan untuk mengompensasi alokasi waktu dan sumber daya tim pengembang yang telah terpakai. Seluruh hasil kerja yang telah selesai hingga tahap pembatalan akan diserahkan kepada klien.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Layanan Bantuan & Konsultasi</h2>
            <p className="text-sm sm:text-base">
              Untuk pertanyaan mengenai klausul kerja sama atau permintaan penawaran kustom, silakan hubungi tim kami:
            </p>
            <div className="p-4 rounded-xl border border-mid-green/30 bg-deep-navy/60 font-mono text-sm space-y-1">
              <p>Email: <a href={`mailto:${SITE.email}`} className="text-neon hover:underline">{SITE.email}</a></p>
              <p>WhatsApp: <a href={SITE.getWhatsappUrl()} className="text-neon hover:underline">+{SITE.whatsapp}</a></p>
            </div>
          </section>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
