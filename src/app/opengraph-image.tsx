import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

export const alt = `${profile.shortName}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f5f6f3",
          color: "#16233b",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 34, color: "#4a5568" }}>{`${profile.title}, ${profile.location}`}</div>
          <div style={{ fontSize: 132, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>Dempsey Zhang</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 30, color: "#4a5568" }}>Recall of planted facts, retrieval agent</div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ width: 24, height: 28, background: "#b9c0c9" }} />
            <div style={{ fontSize: 36, color: "#4a5568" }}>3%</div>
            <div style={{ width: 430, height: 28, background: "#0f6e62", marginLeft: 24 }} />
            <div style={{ fontSize: 36, fontWeight: 700, color: "#0f6e62" }}>43%</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
