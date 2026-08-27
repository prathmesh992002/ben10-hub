"use client";
import { useState } from "react";
import { DOWNLOADS } from "@/lib/data";

export default function Downloads() {
  const [type, setType] = useState("All");

  const types = ["All", "Series", "Movie"];
  const filtered = type === "All" ? DOWNLOADS : DOWNLOADS.filter((d) => d.type === type);

  return (
    <section className="section container">
      <h2 className="section-title">⬇️ Ben 10 Downloads</h2>
      <p style={{ color: "var(--muted)", marginBottom: 20 }}>
        Browse the full Ben 10 collection. Download links will appear here as they become available.
      </p>

      <div style={{ marginBottom: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={type === t ? "btn" : "btn btn-outline"}
            style={{ width: "auto" }}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="dl-table">
        <div className="dl-row dl-head">
          <div>Title</div>
          <div>Type</div>
          <div>Seasons</div>
          <div>Audio</div>
          <div>Quality</div>
          <div>Size</div>
          <div>Link</div>
        </div>
        {filtered.map((d) => (
          <div className="dl-row" key={d.id}>
            <div className="dl-title" data-label="Title">
              {d.series}
              {d.year && <span className="dl-year">({d.year})</span>}
            </div>
            <div data-label="Type">{d.type}</div>
            <div data-label="Seasons">{d.seasons || "—"}</div>
            <div data-label="Audio">{d.audio}</div>
            <div data-label="Quality">{d.quality}</div>
            <div data-label="Size">{d.size || "—"}</div>
            <div data-label="Link">
              {d.link ? (
                <a href={d.link} target="_blank" rel="noopener noreferrer" className="btn" style={{ width: "auto", padding: "6px 14px" }}>
                  Download
                </a>
              ) : (
                <span className="dl-pending">Coming soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
