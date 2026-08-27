"use client";
import { useCart } from "../context";
import { PRODUCTS } from "@/lib/data";
import Link from "next/link";

export default function Shop() {
  const { add } = useCart();
  return (
    <section className="section container">
      <h2 className="section-title">🛍️ Ben 10 Merchandise</h2>
      <p style={{ color: "#8aaa90", marginBottom: 20 }}>Premium quality products shipped via Myntra/Meesho partners.</p>
      <div className="grid">
        {PRODUCTS.map(p => (
          <div key={p.id} className="card">
            <Link href={`/product/${p.id}`}>
              <img src={p.img} alt={p.name} />
            </Link>
            <div className="card-body">
              <span className="tag">{p.tag}</span>
              <div className="card-title">{p.name}</div>
              <div className="card-meta">{p.desc}</div>
              <div className="price" style={{ marginBottom: 12 }}>₹{p.price}</div>
              <button onClick={() => add(p)} className="btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
