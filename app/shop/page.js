"use client";
import { Suspense } from "react";
import { useCart } from "../context";
import { CLOTHING, DIGITAL_PRODUCTS } from "@/lib/data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ShopContent() {
  const { add } = useCart();
  const params = useSearchParams();
  const active = params.get("cat");
  const products = active === "Clothing" ? CLOTHING : active === "Digital" ? DIGITAL_PRODUCTS : [...CLOTHING, ...DIGITAL_PRODUCTS];
  const current = active === "Clothing" ? "Clothing" : active === "Digital" ? "Digital" : "All";

  return (
    <>
      <h2 className="section-title">🛍️ OmniHub Store</h2>
      <p style={{ color: "var(--muted)", marginBottom: 20 }}>Clothing shipped across India + instant digital products.</p>

      <div style={{ marginBottom: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Link href="/shop" className={current === "All" ? "btn" : "btn btn-outline"} style={{ width: "auto" }}>All</Link>
        <Link href="/shop?cat=Clothing" className={current === "Clothing" ? "btn" : "btn btn-outline"} style={{ width: "auto" }}>👕 Clothing</Link>
        <Link href="/shop?cat=Digital" className={current === "Digital" ? "btn" : "btn btn-outline"} style={{ width: "auto" }}>💾 Digital</Link>
      </div>

      <div className="grid">
        {products.map(p => (
          <div key={p.id} className="card">
            <Link href={`/product/${p.id}`}>
              <img src={p.img} alt={p.name} />
            </Link>
            <div className="card-body">
              <span className="tag">{p.category}</span>
              <div className="card-title">{p.name}</div>
              <div className="card-meta">{p.desc}</div>
              <div className="price" style={{ marginBottom: 12 }}>₹{p.price}</div>
              <button onClick={() => add(p)} className="btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Shop() {
  return (
    <section className="section container">
      <Suspense fallback={<p>Loading…</p>}>
        <ShopContent />
      </Suspense>
    </section>
  );
}
