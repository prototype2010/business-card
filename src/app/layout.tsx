import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteMetadata from "../../config/site-metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  metadataBase: new URL(
      siteMetadata.siteUrl
  ),
  // description: siteMetadata.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Alexander Zakorko",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [
    {
      name: "Alexander Zakorko",
      url: "https://prototype2010.github.io/business-card/",
    },
  ],
  creator: "Alexander Zakorko",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    // description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        url: `/az.jpg`,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
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
