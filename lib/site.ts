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
    linkedin: "", // Kosong jika belum ada akun resmi
  },
  getWhatsappUrl(message?: string): string {
    const text = message || "Halo BerKode, saya mau konsultasi project"
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(text)}`
  },
  getEmailUrl(subject = "Konsultasi Project"): string {
    return `mailto:${this.email}?subject=${encodeURIComponent(subject)}`
  },
} as const
