import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "6px solid #e5e4e4",
            color: "#ed6a3d",
            fontSize: 72,
            fontWeight: 800,
            fontFamily: "Arial, sans-serif",
          }}
        >
          V
        </div>
      </div>
    ),
    { ...size }
  );
}
