import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexander Zakorko",
  description: "Senior frontend developer",
  openGraph: {
    images: [
      {
        url: 'https://prototype2010.github.io/business-card/api/og',
        width: 50,
        height: 50,
        alt: 'frontend developer'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
