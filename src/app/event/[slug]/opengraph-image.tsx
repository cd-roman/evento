import { ImageResponse } from "next/og";

export const alt = "Evento";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const style: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    textAlign: "center",
  };

  return new ImageResponse(
    (
      <section style={style}>
        <h1>{params.slug}</h1>
        <p>Evento - Browse events around you</p>
      </section>
    ),
    { width: size.width, height: size.height }
  );
}
