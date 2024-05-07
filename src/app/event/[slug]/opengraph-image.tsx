import { ImageResponse } from "next/og";

export const alt = "Evento";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <section
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "128px" }}>{params.slug}</h1>
        <p style={{ fontSize: "64px" }}>Evento - Browse events around you</p>
      </section>
    ),
    {
      ...size,
    }
  );
}
