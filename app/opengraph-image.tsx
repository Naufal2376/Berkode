import { ImageResponse } from "next/og"

export const runtime = "nodejs"

export const alt = "BerKode — Jasa Pembuatan Website & Aplikasi untuk UMKM | Palembang"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #050b14 0%, #00291B 50%, #050b14 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "68px",
              fontWeight: 900,
              letterSpacing: "-2px",
            }}
          >
            <span style={{ color: "white" }}>Ber</span>
            <span style={{ color: "#00ff72" }}>Kode</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "38px",
            fontWeight: 700,
            textAlign: "center",
            maxWidth: "960px",
            lineHeight: 1.3,
            marginBottom: "28px",
          }}
        >
          Jasa Pembuatan Website & Aplikasi untuk UMKM
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "20px",
            color: "#00ff72",
            backgroundColor: "rgba(0, 255, 114, 0.1)",
            padding: "10px 28px",
            borderRadius: "999px",
            border: "1px solid rgba(0, 255, 114, 0.3)",
          }}
        >
          Palembang, Indonesia • berkode.my.id
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
