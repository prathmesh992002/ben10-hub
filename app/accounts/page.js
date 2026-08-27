"use client";
import Link from "next/link";
import { useCart } from "../context";
import { INSTA_ACCOUNTS } from "@/lib/data";

export default function Accounts() {
  return (
    <section className="section container">
      <h2 className="section-title">📱 Our 20 Instagram Accounts</h2>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        All our Ben 10 content channels. Follow for daily uploads!
      </p>
      <div className="insta-grid">
        {INSTA_ACCOUNTS.map(a => (
          <a key={a} href={`https://instagram.com/${a.replace("@","")}`} target="_blank" rel="noopener noreferrer" className="insta-pill">
            {a}
          </a>
        ))}
      </div>
      <div style={{ marginTop: 40, padding: 24, background: "var(--card)", borderRadius: 12, border: "1px solid var(--border)", textAlign: "center" }}>
        <h3 style={{ marginBottom: 8 }}>Want to collaborate?</h3>
        <p style={{ color: "var(--muted)" }}>DM us on any of the accounts above</p>
      </div>
    </section>
  );
}
