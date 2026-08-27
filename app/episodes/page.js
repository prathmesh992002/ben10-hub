"use client";
import { useState } from "react";
import { EPISODES } from "@/lib/data";
import VideoCard from "../components/VideoCard";

export default function Episodes() {
  const [series, setSeries] = useState("all");
  const seriesList = [...new Set(EPISODES.map(e => e.series))];
  const filtered = series === "all" ? EPISODES : EPISODES.filter(e => e.series === series);

  return (
    <section className="section container">
      <h2 className="section-title">🎬 Trending Reels</h2>
      <p style={{ color: "#8aaa90", marginBottom: 20 }}>
        Click play to watch the reel right here. Click the box below a reel to open it on Instagram.
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
          <VideoCard key={e.id} e={e} />
        ))}
      </div>
    </section>
  );
}
