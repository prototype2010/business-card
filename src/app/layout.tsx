import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexander Zakorko",
  description: "Senior frontend developer",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: 'https://prototype2010.github.io/business-card',
    title: 'Just Title',
    description: 'Some description',
    images: [
      {
        // title: 'Alexander Zakorko',
        // description: 'Senior Frontend Developer',
        type: 'article',
        url: 'https://prototype2010.github.io/business-card/api/og',
        width: 1200,
        height: 630,
        alt: 'Alt text'
      },
    ]
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: 'twitter',
  //   description: 'twitter',
  //   images: [`/az.jpg`],
  //   creator: "@IZ",
  // },
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
