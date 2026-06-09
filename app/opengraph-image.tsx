import { ImageResponse } from "next/og";

export const alt = "Markit / Beyond Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 2,
            opacity: 0.6,
          }}
        >
          <span>MARKIT®</span>
          <span>BEYOND MARKETING</span>
        </div>

        <div
          style={{
            fontSize: 88,
            lineHeight: 1.02,
            letterSpacing: -2,
            fontWeight: 400,
            textTransform: "uppercase",
            maxWidth: 1040,
            display: "flex",
          }}
        >
          We build the marketing engine local businesses use to print leads.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 2,
            opacity: 0.6,
          }}
        >
          <span>ARIZONA · IN-HOUSE STUDIO</span>
          <span>MARKIT.STUDIO</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
