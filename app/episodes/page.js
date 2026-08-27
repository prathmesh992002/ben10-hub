"use client";
import { useState } from "react";
import { EPISODES } from "../lib/data";

export default function Episodes() {
  const [season, setSeason] = useState("all");
  const seasons = [...new Set(EPISODES.map(e => e.season))];
  const filtered = season === "all" ? EPISODES : EPISODES.filter(e => e.season === season);

  return (
    <section className="section container">
      <h2 className="section-title">📺 All Ben 10 Episodes</h2>
      <p style={{ color: "#8aaa90", marginBottom: 20 }}>
        Click any episode to watch on Instagram. Links go to original content creators.
      </p>
      <div style={{ marginBottom: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => setSeason("all")} className={season === "all" ? "btn" : "btn btn-outline"} style={{ width: "auto" }}>All</button>
        {seasons.map(s => (
          <button key={s} onClick={() => setSeason(s)} className={season === s ? "btn" : "btn btn-outline"} style={{ width: "auto" }}>
            Season {s}
          </button>
        ))}
      </div>
      <div className="grid">
        {filtered.map(e => (
          <a key={e.id} href={e.url} target="_blank" rel="noopener noreferrer" className="card">
            <img src={e.img} alt={e.title} />
            <div className="card-body">
              <span className="tag">S{e.season} · EP {e.id}</span>
              <div className="card-title">{e.title}</div>
              <div style={{ color: "#8aaa90", fontSize: ".85rem" }}>Watch on Instagram →</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
