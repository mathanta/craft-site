import type { Metadata } from "next";
import { Pacifico, Caveat_Brush } from "next/font/google";
import Image from 'next/image'
import "./globals.css";

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
        <Image className='portrait' src="portrait.svg" alt='placeholder' height={250} width={250} />
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
        {children}
      </body>
    </html>
  );
}