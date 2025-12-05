// app/page.tsx — FINAL TTI-OPTIMIZED VERSION
import DateBar from "../components/DateBar";
import HeaderClient from "../components/HeaderClient";
import FullHeader from "../components/FullHeader";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load EVERYTHING below the fold
const ArticleGridLarge = dynamic(() => import("../components/ArticleGridLarge"), { ssr: true });
const ArticleGrid = dynamic(() => import("../components/ArticleGrid"), { ssr: true });
const MainContentWithSidebar = dynamic(() => import("../components/MainContentWithSidebar"), { ssr: true });
const FeaturedGrid = dynamic(() => import("../components/FeaturedGrid"), { ssr: true });
const Banner = dynamic(() => import("../components/Banner"),);
const FooterSection = dynamic(() => import("../components/FooterSection"),);

// Simple skeleton
const Skeleton = () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg" />;

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
      <div className="bg-black text-white min-h-screen font-sans">
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

          <Suspense fallback={<Skeleton />}>
            <FeaturedGrid mainArticles={mainArticlesData2} top5Articles={top5ArticlesData} />
          </Suspense>

          <FullHeader currentPage="home" />
          
          <Suspense fallback={null}>
            <FooterSection latestArticles={latestArticlesData} popularArticles={popularArticlesData} />
          </Suspense>
        </div>
      </div>
    </>
  );
}