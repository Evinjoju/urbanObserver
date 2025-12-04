// app/layout.tsx 
import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://financialoutlook.xyz"),
  title: {
    default: "Financial Outlook – Business, Wealth & Markets 2025",
    template: "%s | Financial Outlook 2025",
  },
  description: "Latest stock market updates, billionaire net worth, crypto news, real estate deals, investing strategies, and global finance trends – updated daily November 2025",
  keywords: [
    "stock market 2025",
    "billionaire net worth",
    "crypto news",
    "real estate investment",
    "warren buffett",
    "federal reserve",
    "blackrock bitcoin",
    "wealth management",
    "financial news",
    "investing 2025",
  ].join(", "),

  openGraph: {
    title: "Financial Outlook – Business, Wealth & Markets 2025",
    description: "Your trusted source for stock market insights, billionaire moves, and global finance trends – updated daily",
    url: "https://financialoutlook.xyz",
    siteName: "Financial Outlook",
    images: [
      {
        url: "/og-financialoutlook.jpg",
        width: 1200,
        height: 630,
        alt: "Financial Outlook – Business & Markets 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Financial Outlook – Markets & Wealth 2025",
    description: "Stock market, crypto, billionaires, real estate – daily updates",
    images: ["/og-financialoutlook.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://financialoutlook.xyz",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>

        <meta name="google-site-verification" content="bR-eiO8rI3epTbJIowoHjcJcjkDw-65UGbGr6deTk_0" />

        <link rel="icon" href="/images/fin-favIcon.svg" type="image/svg+xml"></link>

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
       
        <link rel="apple-touch-icon" href="/images/fin-favIcon.svg" />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "financialoutlook",
              url: "https://financialoutlook.xyz/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://financialoutlook.xyz/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased max-w-7xl mx-auto">
        {children}
      </body>
    </html>
  );
}