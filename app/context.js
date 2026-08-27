"use client";
import { createContext, useContext, useState, useEffect } from "react";

const Ctx = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const c = localStorage.getItem("cart");
    if (c) setItems(JSON.parse(c));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const add = (p) => {
    const found = items.find((i) => i.id === p.id);
    if (found) setItems(items.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i)));
    else setItems([...items, { ...p, qty: 1 }]);
  };

  const remove = (id) => setItems(items.filter((i) => i.id !== id));
  const inc = (id) => setItems(items.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const dec = (id) => setItems(items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i)));

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <Ctx.Provider value={{ items, add, remove, inc, dec, total, count, user, setUser }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => useContext(Ctx);
