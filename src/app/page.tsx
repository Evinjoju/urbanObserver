// app/page.tsx — FINAL PERFORMANCE-OPTIMIZED VERSION
import DateBar from "../components/DateBar";
import HeaderClient from "../components/HeaderClient";
import FullHeader from "../components/FullHeader";
import FooterSection from "../components/FooterSection";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Metadata } from "next";

// Lazy load heavy components
const ArticleGridLarge = dynamic(() => import("../components/ArticleGridLarge"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />,
  ssr: true,
});

const ArticleGrid = dynamic(() => import("../components/ArticleGrid"), {
  loading: () => <div className="grid grid-cols-1 md:grid-cols-4 gap-4"><div className="h-64 bg-gray-900 animate-pulse rounded" /></div>,
});

const MainContentWithSidebar = dynamic(() => import("../components/MainContentWithSidebar"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />,
});

const FeaturedGrid = dynamic(() => import("../components/FeaturedGrid"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />,
});

const Banner = dynamic(() => import("../components/Banner"));

// Memoized loading skeleton
const LoadingSkeleton = () => (
  <div className="space-y-8">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="h-64 bg-gray-900 animate-pulse rounded-lg" />
    ))}
  </div>
);

export const metadata: Metadata = {
  metadataBase: new URL("https://financialoutlook.xyz"),
  title: "Financial Outlook – Business, Wealth & Markets 2025",
  description: "Latest stock market updates, billionaire moves, crypto trends, real estate deals, and wealth strategies – updated November 21, 2025",
  keywords: "financial outlook, business news 2025, wealth management, stock market, crypto, billionaires, investing",
  openGraph: {
    title: "Financial Outlook – Business, Wealth & Markets 2025",
    description: "Your trusted source for financial markets and wealth creation strategies – updated daily",
    url: "https://financialoutlook.xyz",
    siteName: "Financial Outlook",
    images: [{ url: "/og-financialoutlook.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Outlook – Markets & Wealth 2025",
    description: "Daily updates on stocks, crypto, billionaires, and global finance",
    images: ["/og-financialoutlook.jpg"],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Financial Outlook",
            url: "https://financialoutlook.xyz",
          }),
        }}
      />

      <div className="bg-black text-white font-sans">
        <div className="hidden">Financial Outlook – Business & Markets 2025</div>
        <div >
          <DateBar />
          <HeaderClient
            currentPage="home"
          />
          {/* Hero Section — 3 Large Articles */}

          <ArticleGridLarge data={largeGridData} />

          {/* Regular Grid — 4 Small Articles */}

          <ArticleGrid data={regularGridData} />

          <section  className="mt-6">
            <MainContentWithSidebar
              mainArticles={mainArticlesData}
              latestArticles={latestArticlesData}
              categoryTitle="LIFESTYLE"
            />
          </section>

          <Banner text="MARKET MOVES" />

          <FeaturedGrid mainArticles={mainArticlesData2} top5Articles={top5ArticlesData} />


          <FullHeader currentPage="home" />
          <FooterSection
            latestArticles={latestArticlesData}
            popularArticles={popularArticlesData}
          />
        </div>
      </div>
    </>
  );
}