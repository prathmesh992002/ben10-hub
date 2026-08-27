"use client";
import { useState } from "react";
import { EPISODES } from "@/lib/data";

export default function Episodes() {
  const [series, setSeries] = useState("all");
  const seriesList = [...new Set(EPISODES.map(e => e.series))];
  const filtered = series === "all" ? EPISODES : EPISODES.filter(e => e.series === series);

  return (
    <section className="section container">
      <h2 className="section-title">📺 All Ben 10 Episodes</h2>
      <p style={{ color: "#8aaa90", marginBottom: 20 }}>
        Click any episode to watch the reel on Instagram.
      </p>
      <div style={{ marginBottom: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => setSeries("all")} className={series === "all" ? "btn" : "btn btn-outline"} style={{ width: "auto" }}>All</button>
        {seriesList.map(s => (
          <button key={s} onClick={() => setSeries(s)} className={series === s ? "btn" : "btn btn-outline"} style={{ width: "auto" }}>
            {s}
          </button>
        ))}
      </div>
      <div className="grid">
        {filtered.map(e => (
          <a key={e.id} href={e.url} target="_blank" rel="noopener noreferrer" className="card">
            <img src={e.img} alt={e.title} />
            <div className="card-body">
              <span className="tag">{e.series} · S{e.season} · Ep {e.episode}</span>
              <div className="card-meta">{e.desc}</div>
              <div className="card-title" style={{ marginTop: 8 }}>{e.title}</div>
              <div style={{ color: "#8aaa90", fontSize: ".85rem", marginTop: 6 }}>▶ Watch on Instagram →</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
