export interface TeamMember {
  name: string
  role: string
  bio: string
  github?: string
  linkedin?: string
  initials: string
}

export interface StatItem {
  value: string
  label: string
  description?: string
}

export interface TestimonialItem {
  name: string
  role?: string
  business: string
  quote: string
}

export const SITE = {
  name: "BerKode",
  legalName: "BerKode Digital Solutions",
  tagline: "Partner Digital Kreatif untuk UMKM, Mahasiswa, dan Startup",
  description:
    "Jasa pembuatan website, aplikasi, dan UI/UX untuk UMKM, mahasiswa, dan startup. Mulai Rp150.000, gratis domain .my.id, dikerjakan tim developer Palembang.",
  domain: "berkode.my.id",
  url: "https://berkode.my.id",
  email: "halo@berkode.my.id",
  whatsapp: "6283146867066",
  address: "Palembang, Sumatera Selatan, Indonesia",
  city: "Palembang",
  region: "Sumatera Selatan",
  country: "ID",
  foundedYear: 2024,
  socials: {
    instagram: "https://instagram.com/berkode",
    github: "https://github.com/Naufal2376",
    linkedin: "", // Kosongkan jika belum ada akun resmi perusahaan
  },
  getWhatsappUrl(message?: string): string {
    const text = message || "Halo BerKode, saya mau konsultasi project"
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(text)}`
  },
  getEmailUrl(subject = "Konsultasi Project"): string {
    return `mailto:${this.email}?subject=${encodeURIComponent(subject)}`
  },
} as const

// Data statistik riil berbasis portofolio dan profil nyata
export const STATS: StatItem[] = [
  {
    value: "3+",
    label: "Proyek Selesai",
    description: "Website & sistem operasional aktif",
  },
  {
    value: "2024",
    label: "Tahun Berdiri",
    description: "Membantu UMKM & startup go digital",
  },
  {
    value: "Palembang",
    label: "Basis Studio",
    description: "Melayani klien lokal & seluruh Indonesia",
  },
  {
    value: "100%",
    label: "Garansi Teknis",
    description: "Bantuan dan revisi pasca peluncuran",
  },
]

// Tim pengembang asli BerKode
export const TEAM: TeamMember[] = [
  {
    name: "M. Naufal",
    role: "Founder & Full-stack Developer",
    bio: "Fokus pada pengembangan aplikasi web modern (Next.js, TypeScript, React) dan integrasi sistem backend yang cepat serta scalable.",
    github: "https://github.com/Naufal2376",
    initials: "MN",
  },
  {
    name: "Ghalib AG",
    role: "Web & Backend Developer",
    bio: "Berpengalaman dalam pengembangan sistem informasi bisnis, Point of Sales (POS), dan otomasi administrasi UMKM (Laravel, Livewire).",
    github: "https://github.com/GhalibAG",
    initials: "GA",
  },
]

// Testimoni klien (hanya tampil jika ada data nyata dengan izin klien)
export const TESTIMONIALS: TestimonialItem[] = []
