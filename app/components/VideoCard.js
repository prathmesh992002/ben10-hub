"use client";
import { useState } from "react";

export default function VideoCard({ e }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="card">
      {playing ? (
        <video
          className="reel-video"
          src={e.video}
          controls
          autoPlay
          playsInline
          style={{ width: "100%", aspectRatio: "9/16", objectFit: "cover", background: "#000" }}
        />
      ) : (
        <button className="reel-thumb" onClick={() => setPlaying(true)} style={{ width: "100%", padding: 0, border: "none", background: "#000", cursor: "pointer" }}>
          <div className="reel-play">
            <span>▶</span>
          </div>
        </button>
      )}
      <div className="card-body">
        <span className="tag">{e.series} · S{e.season} · Ep {e.episode}</span>
        <div className="card-meta">{e.desc}</div>
        <div className="card-title" style={{ marginTop: 8 }}>{e.title}</div>
      </div>
    </div>
  );
}
