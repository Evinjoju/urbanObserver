// app/page.tsx 
import DateBar from "../components/DateBar";
import ArticleGridLarge from "../components/ArticleGridLarge";
import ArticleGrid from "../components/ArticleGrid";
import FullHeader from "../components/FullHeader";
import FooterSection from "../components/FooterSection";
import MainContentWithSidebar from "../components/MainContentWithSidebar";
import Banner from "../components/Banner";
import FeaturedGrid from "../components/FeaturedGrid";
import HeaderClient from "../components/HeaderClient";

export default async function HomePage() {
  // Load all shared data
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
              categoryTitle="FINANCIAL OUTLOOK"
            />
          </section>

          <Banner text="WEALTH , MARKET & FINANCIAL MOVES" />

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