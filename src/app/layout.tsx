// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "UrbanObserver – Celebrity Gossip, Scandals & Lifestyle 2025",
    template: "%s | UrbanObserver",
  },
  description: "Latest celebrity scandals, breakups, lawsuits, Ozempic face fixes, Black Friday deals & trending drama – updated November 20, 2025",
  keywords: "celebrity gossip 2025, blake lively lawsuit, taylor swift travis kelce, ozempic face, dolly parton health",
  metadataBase: new URL("https://urbanobserver.com"),
  openGraph: {
    title: "UrbanObserver – Celebrity Gossip & Lifestyle",
    description: "Your #1 source for the hottest celebrity scandals, breakups & lifestyle trends – updated daily",
    url: "https://urbanobserver.com",
    siteName: "UrbanObserver",
    images: [
      {
        url: "/images/Taylor Swift Engagement Ring Predictions.webp", 
        width: 1200,
        height: 630,
        alt: "UrbanObserver – Celebrity Gossip 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UrbanObserver – Celebrity Gossip 2025",
    description: "Latest scandals, lawsuits & trending drama – updated November 20, 2025",
    images: ["/og-image.jpg"],
  },
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
  alternates: {
    canonical: "https://urbanobserver.com",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Your fonts – unchanged */}
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />

        {/* Global WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "UrbanObserver",
              url: "https://urbanobserver.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://urbanobserver.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark">
        {children}
      </body>
    </html>
  );
}