import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://prototype2010.github.io/business-card/'),
  title: "Alexander Zakorko",
  description: "Senior frontend developer",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: 'https://prototype2010.github.io/business-card/',
    title: "Alexander Zakorko",
    description: "Senior frontend developer",
    siteName: 'Frontend',
    images: [
      {
        url: `/az.jpg`,
        width: 1200,
        height: 630,
        alt: 'frontend developer',
      },
    ],
  },
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
