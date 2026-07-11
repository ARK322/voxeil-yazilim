import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Voxeil | Ankara Yazılım Şirketi";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: "0.02em",
          }}
        >
          <span style={{ color: "#ed6a3d" }}>V</span>
          <span style={{ color: "#e5e4e4" }}>OXEIL</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            color: "rgba(255, 255, 255, 0.6)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Ankara Yazılım Şirketi
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 26,
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
