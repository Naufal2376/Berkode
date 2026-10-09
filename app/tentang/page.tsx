import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Globe, ShieldCheck, Users, Zap } from "lucide-react"
import { SITE, TEAM } from "@/lib/site"
import FooterSection from "@/components/sections/FooterSection"

export const metadata: Metadata = {
  title: "Tentang Kami | BerKode — Partner Digital UMKM & Startup",
  description:
    "Profil resmi BerKode, studio pengembangan website dan aplikasi di Palembang. Misi kami membantu UMKM dan perintis bisnis go digital dengan teknologi handal.",
}

export default function TentangPage() {
  return (
    <div className="min-h-screen pt-28 pb-12 bg-deep-navy text-white">
      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-neon/80 hover:text-neon mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-neon bg-neon/10 rounded-full border border-neon/20">
            Profil Perusahaan
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Membangun Solusi Digital yang <span className="text-neon">Berdampak Nyata</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            BerKode didirikan pada tahun {SITE.foundedYear} di Palembang dengan keyakinan sederhana: setiap UMKM, mahasiswa kreatif, dan startup layak mendapatkan website serta sistem digital berstandar profesional tanpa harus terbebani biaya agensi yang berlebihan.
          </p>
        </div>

        {/* Nilai Utama */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-mid-green/30 bg-deep-navy/60">
            <ShieldCheck className="w-8 h-8 text-neon mb-4" />
            <h2 className="text-lg font-bold mb-2">Transparan & Jujur</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Biaya jelas di awal tanpa biaya tersembunyi. Source code sepenuhnya milik Anda setelah pelunasan.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-mid-green/30 bg-deep-navy/60">
            <Zap className="w-8 h-8 text-neon mb-4" />
            <h2 className="text-lg font-bold mb-2">Cepat & Berkinerja</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Dibangun dengan stack modern (Next.js, Tailwind, TypeScript) agar website Anda cepat diakses dan mobile-friendly.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-mid-green/30 bg-deep-navy/60">
            <Users className="w-8 h-8 text-neon mb-4" />
            <h2 className="text-lg font-bold mb-2">Pendampingan Ramah</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bagi yang awam teknologi, kami sediakan panduan penggunaan CMS dan garansi perbaikan bug pasca peluncuran.
            </p>
          </div>
        </div>

        {/* Tim Kami */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
            <Users className="w-6 h-6 text-neon" />
            Tim Pengembang
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl border border-mid-green/20 bg-deep-navy/40"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center font-mono font-bold text-neon">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-xs font-mono text-neon/80">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {member.bio}
                </p>
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neon hover:underline"
                  >
                    Profil GitHub &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* English Section for Reviewers */}
        <div className="mb-20 p-8 rounded-2xl border border-neon/30 bg-neon/5 relative overflow-hidden">
          <div className="flex items-center gap-3 text-neon font-mono text-sm mb-4">
            <Globe className="w-5 h-5" />
            <span>ENGLISH SUMMARY (For International Partners & Program Reviewers)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">About BerKode</h2>
          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>BerKode</strong> is an independent software studio founded in 2024, located in Palembang, South Sumatra, Indonesia. We specialize in building fast, scalable web applications, business operational systems, and intuitive UI/UX design tailored for local micro, small, and medium enterprises (MSMEs/UMKM), students, and seed startups.
            </p>
            <p>
              Our core stack leverages React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS, Laravel, and PostgreSQL/Supabase. We pride ourselves on clean engineering, honest pricing, direct technical ownership, and pragmatic digital solutions that solve real day-to-day workflow bottlenecks.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-gray-400">
              <span>📍 Location: Palembang, Indonesia</span>
              <span>✉️ Contact: {SITE.email}</span>
              <span>🌐 Web: {SITE.domain}</span>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  )
}
