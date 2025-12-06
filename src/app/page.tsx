// app/page.tsx — FINAL TTI-OPTIMIZED VERSION
import DateBar from "../components/DateBar";
import HeaderClient from "../components/HeaderClient";
import FullHeader from "../components/FullHeader";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Metadata } from "next";

// Lazy load EVERYTHING below the fold
const ArticleGridLarge = dynamic(() => import("../components/ArticleGridLarge"), { ssr: true });
const ArticleGrid = dynamic(() => import("../components/ArticleGrid"), { ssr: true });
const MainContentWithSidebar = dynamic(() => import("../components/MainContentWithSidebar"), { ssr: true });
const FeaturedGrid = dynamic(() => import("../components/FeaturedGrid"), { ssr: true });
const Banner = dynamic(() => import("../components/Banner"),);
const FooterSection = dynamic(() => import("../components/FooterSection"),);

// Simple skeleton
const Skeleton = () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />;

export const metadata: Metadata = {
  metadataBase: new URL("https://financialoutlook.xyz"),
  title: "Financial Outlook – Business & Markets 2025",
  description: "Latest stock market updates, billionaire moves, crypto trends, real estate deals, and wealth strategies – updated November 21, 2025",
  keywords: [
    "stock market 2025",
    "billionaire net worth",
    "crypto news",
    "real estate investment",
    "warren buffett",
    "blackrock bitcoin etf",
    "federal reserve",
    "wealth management",
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

export default async function HomePage() {
  const [
    largeGridData,
    mainArticlesData,
    mainArticlesData2,
    top5ArticlesData,
    regularGridData,
    latestArticlesData,
    popularArticlesData,
  ] = await Promise.all([
    import("../../public/data/home/home-large-grid.json").then(m => m.default),
    import("../../public/data/home/home-main-articles.json").then(m => m.default),
    import("../../public/data/home/home-main-articles2.json").then(m => m.default),
    import("../../public/data/home/home-top5-articles.json").then(m => m.default),
    import("../../public/data/home/home-grid-articles.json").then(m => m.default),
    import("../../public/data/home/home-latest-articles.json").then(m => m.default),
    import("../../public/data/home/home-popular-articles.json").then(m => m.default),
  ]);

  return (
    <>
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "financialoutlook",
            url: "https://financialoutlook.xyz",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://financialoutlook.xyz/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <div className="bg-black text-white font-sans">
         <div className="hidden">Financial Outlook – Business & Markets 2025</div>
        <div className="max-w-7xl mx-auto">
          <DateBar />
          <HeaderClient currentPage="home" />

          {/* Hero — Critical, loads first */}
          <Suspense fallback={<Skeleton />}>
            <ArticleGridLarge data={largeGridData} />
          </Suspense>

          <Suspense fallback={<Skeleton />}>
            <ArticleGrid data={regularGridData} />
          </Suspense>

          <Suspense fallback={<Skeleton />}>
            <MainContentWithSidebar
              mainArticles={mainArticlesData}
              latestArticles={latestArticlesData}
              categoryTitle="FINANCIAL OUTLOOK"
            />
          </Suspense>

          <Suspense fallback={null}>
            <Banner text="WEALTH , MARKET & FINANCIAL MOVES" />
          </Suspense>

          
            <FeaturedGrid mainArticles={mainArticlesData2} top5Articles={top5ArticlesData} />
         

          <FullHeader currentPage="home" />
          
          <Suspense fallback={null}>
            <FooterSection latestArticles={latestArticlesData} popularArticles={popularArticlesData} />
          </Suspense>
        </div>
      </div>
    </>
  );
}