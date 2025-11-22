// app/layout.tsx — FINAL SEO-PRO VERSION
import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://urban-observer.vercel.app"), // ← Your real domain
  title: {
    default: "UrbanObserver – Celebrity Gossip, Scandals & Lifestyle 2025",
    template: "%s | UrbanObserver 2025",
  },
  description: "Latest celebrity scandals, breakups, Ozempic face fixes, Blake Lively lawsuit, Taylor Swift & Travis Kelce, Dolly Parton health updates – updated daily November 2025",
  keywords: [
    "celebrity gossip 2025",
    "blake lively lawsuit",
    "taylor swift travis kelce",
    "ozempic face",
    "dolly parton health",
    "black friday deals",
    "entertainment news",
    "hollywood scandals",
  ].join(", "),

  // OpenGraph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "UrbanObserver – Celebrity Gossip & Lifestyle 2025",
    description: "Your #1 source for the hottest celebrity scandals, breakups & trending drama – updated daily",
    url: "https://urban-observer.vercel.app",
    siteName: "UrbanObserver",
    images: [
      {
        url: "/og-home.jpg", // ← 1200x630 WebP (create this!)
        width: 1200,
        height: 630,
        alt: "UrbanObserver – Celebrity Gossip 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "UrbanObserver – Celebrity Gossip 2025",
    description: "Latest scandals, lawsuits & trending drama – updated daily",
    images: ["/og-home.jpg"],
    creator: "@urbanobserver", // ← Change to your real handle
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "your-google-site-verification-code", // ← Add from Google Search Console
    // yandex: "...",
    // bing: "...",
  },

  alternates: {
    canonical: "https://urban-observer.vercel.app",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=YourFont&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "UrbanObserver",
              url: "https://urban-observer.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://urban-observer.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}