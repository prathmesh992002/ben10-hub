"use client";
import { use } from "react";
import { PRODUCTS } from "@/lib/data";
import { useCart } from "../../context";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Product({ params }) {
  const { id } = use(params);
  const product = PRODUCTS.find(p => p.id === id);
  const { add } = useCart();
  const router = useRouter();

  if (!product) return <div className="container section">Not found</div>;

  return (
    <section className="section container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
      <div>
        <img src={product.img} alt={product.name} style={{ borderRadius: 12, width: "100%" }} />
      </div>
      <div>
        <span className="tag">{product.tag}</span>
        <h1 style={{ fontSize: "2.2rem", margin: "12px 0" }}>{product.name}</h1>
        <div style={{ fontSize: "2rem", color: "var(--green)", fontWeight: 800, marginBottom: 16 }}>₹{product.price}</div>
        <p style={{ color: "#8aaa90", marginBottom: 24, lineHeight: 1.6 }}>{product.desc}</p>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => { add(product); router.push("/cart"); }} className="btn">Buy Now</button>
          <button onClick={() => add(product)} className="btn btn-outline">Add to Cart</button>
        </div>
        <div style={{ marginTop: 32, padding: 16, background: "var(--dark)", borderRadius: 10 }}>
          {product.category === "Digital" ? (
            <>
              <h3 style={{ marginBottom: 8 }}>⚡ Instant Delivery</h3>
              <p style={{ color: "#8aaa90" }}>Download link sent to your email right after payment.</p>
            </>
          ) : (
            <>
              <h3 style={{ marginBottom: 8 }}>🚚 Shipping</h3>
              <p style={{ color: "#8aaa90" }}>Free shipping across India. Delivered in 5-7 days.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
