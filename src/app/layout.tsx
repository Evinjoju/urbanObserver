// app/layout.tsx 
import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://financialoutlook.xyz"),
  title: {
    default: "Financial Outlook – Business, Wealth & Markets News 2025",
    template: "%s – Business & Wealth Markets",
  },
  description: "Financial Outlook delivers trusted business and wealth news: stock markets, crypto, billionaire moves, investing strategies, real estate, fintech, and global economy – updated daily 2025.",
  keywords: [
    "financial outlook",
    "business news 2025",
    "wealth management",
    "stock market",
    "financial outlook",
    "crypto news",
    "billionaires",
    "investing",
    "real estate",
    "fintech",
    "economy",
  ].join(", "),

  openGraph: {
    title: "Financial Outlook – Business & Wealth News 2025",
    description: "Your #1 source for financial markets, business trends, and wealth creation strategies – updated daily.",
    url: "https://financialoutlook.xyz",
    siteName: "Financial Outlook",
    images: [
      {
        url: "/og-financialoutlook.jpg",
        width: 1200,
        height: 630,
        alt: "Financial Outlook – Business, Wealth & Markets 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Financial Outlook – Business & Wealth News",
    description: "Markets, crypto, billionaires, investing – your daily financial advantage.",
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
        <link rel="icon" href="/images/fin-favIcon2.svg" type="image/svg+xml"></link>

        {/* Favicon */}
        <link rel="apple-touch-icon" href="/images/fin-favIcon2.svg" />

        <link rel="icon" href="/images/fin-favIcon2.svg" />
        <link rel="shortcut icon" href="/images/fin-favIcon2.svg" />

      </head>
      <body className="bg-black text-white antialiased max-w-7xl mx-auto">
        {children}
      </body>
    </html>
  );
}