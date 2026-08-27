export const metadata = {
  title: "OmniHub - Digital Products, Clothing & Reels",
  description: "Shop digital products and clothing, and watch trending reels all in one hub.",
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
