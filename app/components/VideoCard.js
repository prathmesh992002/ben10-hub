"use client";

export default function VideoCard({ e }) {
  return (
    <div className="card">
      <video
        className="reel-video"
        src={e.video}
        controls
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        style={{ width: "100%", aspectRatio: "9/16", objectFit: "cover", background: "#000" }}
      />
      <div className="card-body">
        <span className="tag">{e.series} · S{e.season} · Ep {e.episode}</span>
        <div className="card-meta">{e.desc}</div>
        <div className="card-title" style={{ marginTop: 8 }}>{e.title}</div>
      </div>
    </div>
  );
}
