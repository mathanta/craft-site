import type { Metadata } from "next";
import { Pacifico, Caveat_Brush } from "next/font/google";
import Link from 'next/link'
import Image from 'next/image'
import "./globals.css";
import Footer from '../../components/Footer'

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-pacifico'
});

const caveatBrush = Caveat_Brush({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-caveat-brush'
});

export const metadata: Metadata = {
  title: "MiMi's Workshop",
  description: "I love dolls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveatBrush.variable} ${pacifico.variable} antialiased`}>
        <div className="background-layers"></div>
        <div className="ribbon">Under Construction</div>
        <div className="portrait-container">
          <Link href="/about">
            <Image className='portrait' src="portrait.svg" alt='placeholder' height={250} width={250} />
          </Link>
        </div>
        <Link href="/">
          <div className='title-header'>
            <h1>
              MiMi&apos;s
            </h1>
            <h2>
              WORKSHOP
            </h2>
            <h3>
              Hand-Made Crafts
            </h3>
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