"use client";
import Link from "next/link";
import { useCart } from "../context";

export default function Navbar() {
  const { count } = useCart();
  return (
    <nav>
      <div className="container nav-inner">
        <Link href="/" className="logo">OMNI<span>HUB</span></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/episodes">Reels</Link>
          <Link href="/shop?cat=Clothing">Clothing</Link>
          <Link href="/shop?cat=Digital">Digital</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/accounts">Instagram</Link>
          <Link href="/cart" className="cart-btn">
            Cart {count > 0 && <span className="cart-count">{count}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
