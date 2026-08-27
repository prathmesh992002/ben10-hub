export const metadata = {
  title: "Ben10 Hub - Episodes, Clips & Merch",
  description: "Watch Ben 10 full episodes from 20+ Instagram accounts and shop official Ben 10 merchandise.",
};

import "./globals.css";
import { CartProvider } from "./context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
