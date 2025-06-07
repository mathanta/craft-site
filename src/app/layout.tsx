import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "MiMi's Workshop",
  description: "I love dolls!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="background-layers"></div>
        <div className="ribbon">Under Construction</div>
        <div className="portrait-container">
          <Link href="/about">
            <Image
              className="portrait"
              src="portrait.svg"
              alt="placeholder"
              height={250}
              width={250}
            />
          </Link>
        </div>
        <Link href="/">
          <div className="title-header">
            <h1>MiMi&apos;s</h1>
            <h2>WORKSHOP</h2>
            <h3>Hand-Made Crafts</h3>
          </div>
        </Link>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
