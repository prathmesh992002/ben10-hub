"use client";
import Link from "next/link";
import { useCart } from "../context";

export default function Cart() {
  const { items, remove, inc, dec, total } = useCart();

  return (
    <section className="section container cart-page">
      <h2 className="section-title">🛒 Your Cart</h2>
      {items.length === 0 ? (
        <div style={{ textAlign: "center", padding: 60 }}>
          <p style={{ fontSize: "1.2rem", marginBottom: 20 }}>Your cart is empty</p>
          <Link href="/shop" className="btn" style={{ display: "inline-block", width: "auto" }}>Continue Shopping</Link>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
          <div>
            {items.map(i => (
              <div key={i.id} className="cart-item">
                <img src={i.img} alt={i.name} />
                <div>
                  <div style={{ fontWeight: 700 }}>{i.name}</div>
                  <div style={{ color: "var(--blue)", fontWeight: 800 }}>₹{i.price}</div>
                </div>
                <div className="qty-control">
                  <button onClick={() => dec(i.id)}>−</button>
                  <span style={{ minWidth: 24, textAlign: "center", fontWeight: 700 }}>{i.qty}</span>
                  <button onClick={() => inc(i.id)}>+</button>
                  <button onClick={() => remove(i.id)} style={{ background: "#ff3b3b", color: "#fff", marginLeft: 12, padding: "6px 12px", borderRadius: 6, border: "none" }}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="summary">
            <h3>Order Summary</h3>
            <div className="row"><span>Subtotal</span><span>₹{total}</span></div>
            <div className="row"><span>Shipping</span><span style={{ color: "var(--blue)" }}>FREE</span></div>
            <div className="row total"><span>Total</span><span>₹{total}</span></div>
            <button className="btn" style={{ marginTop: 16 }} onClick={() => alert("Order placed! You'll receive confirmation on WhatsApp.")}>
              Place Order
            </button>
            <p style={{ fontSize: ".8rem", color: "var(--muted)", marginTop: 12, textAlign: "center" }}>Cash on Delivery available</p>
          </div>
        </div>
      )}
    </section>
  );
}
