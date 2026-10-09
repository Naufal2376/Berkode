import Link from "next/link"
import { Home, MessageSquare } from "lucide-react"
import { SITE } from "@/lib/site"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-navy px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-md w-full text-center relative z-10 py-16">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/30">
          404 — Not Found
        </span>

        <h1 className="font-mono text-7xl sm:text-8xl font-black text-white tracking-tighter mb-4">
          4<span className="text-neon">0</span>4
        </h1>

        <h2 className="text-2xl font-bold text-white mb-3">
          Halaman Tidak Ditemukan
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          Halaman yang Anda tuju mungkin telah dipindahkan, dihapus, atau tautan yang Anda masukkan kurang tepat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neon text-deep-navy font-bold text-sm shadow-lg shadow-neon/20 hover:scale-105 transition-all"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <a
            href={SITE.getWhatsappUrl("Halo BerKode, saya mengalami kendala link di website")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-mid-green/40 text-gray-300 hover:text-white hover:border-neon/50 bg-deep-navy/50 text-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Bantuan WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
