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
      <a
        href={e.ig}
        target="_blank"
        rel="noopener noreferrer"
        className="card-body ig-body"
      >
        <span className="tag">{e.series} · S{e.season} · Ep {e.episode}</span>
        <div className="card-meta">{e.desc}</div>
        <div className="card-title" style={{ marginTop: 8 }}>{e.title}</div>
        <div className="ig-cta">▶ Watch this on Instagram</div>
      </a>
    </div>
  );
}
