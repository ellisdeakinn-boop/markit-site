import { ImageResponse } from "next/og";
import { SERVICES, getServiceBySlug } from "../../data/services";

export const alt = "Markit service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const name = service?.name ?? "Service";
  const tag = service?.tag ?? "SERVICE";
  const tagline = service?.tagline ?? "";

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
            opacity: 0.55,
          }}
        >
          <span>MARKIT® / SERVICE</span>
          <span>{tag}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 130,
              lineHeight: 1,
              letterSpacing: -3,
              textTransform: "uppercase",
              fontWeight: 400,
              display: "flex",
            }}
          >
            {name}
          </div>
          {tagline && (
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.3,
                opacity: 0.7,
                maxWidth: 1040,
                display: "flex",
              }}
            >
              {tagline}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 2,
            opacity: 0.55,
          }}
        >
          <span>ARIZONA · IN-HOUSE STUDIO</span>
          <span>MARKIT.STUDIO/SERVICES/{slug.toUpperCase()}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
