import Link from "next/link";
import { TRENDING, CLOTHING, DIGITAL_PRODUCTS, INSTA_ACCOUNTS } from "@/lib/data";
import VideoCard from "./components/VideoCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>OMNIHUB</h1>
        <p>Trending reels • Clothing • Digital products — all in one place</p>
        <Link href="/episodes" className="cta">Watch Reels</Link>
        <Link href="/shop" className="cta" style={{ marginLeft: 12 }}>Shop Now</Link>
      </section>

      <section className="section container">
        <h2 className="section-title">🔥 Trending Reels</h2>
        <div className="grid">
          {TRENDING.map((e) => (
            <VideoCard key={e.id} e={e} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link href="/episodes" className="btn btn-outline">View All Reels →</Link>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">👕 Clothing</h2>
        <div className="grid">
          {CLOTHING.slice(0, 4).map((p) => (
            <Link href={`/product/${p.id}`} key={p.id} className="card">
              <img src={p.img} alt={p.name} />
              <div className="card-body">
                <span className="tag">{p.category}</span>
                <div className="card-title">{p.name}</div>
                <div className="price">₹{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link href="/shop?cat=Clothing" className="btn btn-outline">View All Clothing →</Link>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">💾 Digital Products</h2>
        <div className="grid">
          {DIGITAL_PRODUCTS.map((p) => (
            <Link href={`/product/${p.id}`} key={p.id} className="card">
              <img src={p.img} alt={p.name} />
              <div className="card-body">
                <span className="tag">{p.category}</span>
                <div className="card-title">{p.name}</div>
                <div className="price">₹{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link href="/shop?cat=Digital" className="btn btn-outline">View All Digital Products →</Link>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">📱 Our 20 Instagram Accounts</h2>
        <p style={{ color: "#8aaa90", marginBottom: 20 }}>Follow us for daily reels, clips, and updates!</p>
        <div className="insta-grid">
          {INSTA_ACCOUNTS.map((a) => (
            <a key={a} href={`https://instagram.com/${a.replace("@","")}`} target="_blank" className="insta-pill">
              {a}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
