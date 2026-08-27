import Link from "next/link";
import { EPISODES, PRODUCTS, INSTA_ACCOUNTS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>IT'S HERO TIME!</h1>
        <p>Watch Ben 10 episodes from 20+ Instagram accounts + Official Merch</p>
        <Link href="/episodes" className="cta">Watch Episodes</Link>
        <Link href="/shop" className="cta" style={{ marginLeft: 12 }}>Shop Merch</Link>
      </section>

      <section className="section container">
        <h2 className="section-title">🔥 Trending Episodes</h2>
        <div className="grid">
          {EPISODES.slice(0, 6).map((e) => (
            <Link href={e.url} target="_blank" key={e.id} className="card">
              <img src={e.img} alt={e.title} />
              <div className="card-body">
                <span className="tag">S{e.season}</span>
                <div className="card-title">{e.title}</div>
                <div className="card-meta">Episode {e.id}</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link href="/episodes" className="btn btn-outline">View All 20 Episodes →</Link>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">🛍️ Shop Ben 10 Merch</h2>
        <div className="grid">
          {PRODUCTS.slice(0, 4).map((p) => (
            <Link href={`/product/${p.id}`} key={p.id} className="card">
              <img src={p.img} alt={p.name} />
              <div className="card-body">
                <span className="tag">{p.tag}</span>
                <div className="card-title">{p.name}</div>
                <div className="price">₹{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link href="/shop" className="btn btn-outline">View All Products →</Link>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">📱 Our 20 Instagram Accounts</h2>
        <p style={{ color: "#8aaa90", marginBottom: 20 }}>Follow us for daily Ben 10 content, clips, and updates!</p>
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
