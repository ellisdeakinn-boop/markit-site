import { ImageResponse } from "next/og";
import { PROJECTS, getProjectBySlug } from "../../data/work";

export const alt = "Markit work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const brand = project?.brand ?? "Project";
  const status = project?.status === "CURRENT" ? "IN PRODUCTION" : "WORK";
  const hero = project?.hero ?? "";
  const discipline = project?.disciplines?.join(" · ") ?? "";

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
          <span>MARKIT® / {status}</span>
          {discipline && <span>{discipline.toUpperCase()}</span>}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 90,
              lineHeight: 1,
              letterSpacing: -2,
              textTransform: "uppercase",
              fontWeight: 400,
              maxWidth: 1040,
              display: "flex",
            }}
          >
            {brand}
          </div>
          {hero && (
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.3,
                opacity: 0.75,
                maxWidth: 1040,
                display: "flex",
              }}
            >
              {hero}
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
          <span>MARKIT.STUDIO/WORK</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
