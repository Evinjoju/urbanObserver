// app/page.tsx — NEW HOME PAGE (Beautiful & Modern)
import DateBar from "../components/DateBar";
import NewsletterSection from "../components/NewsletterSection";
import MainNav from "../components/MainNav";
import ArticleGridLarge from "../components/ArticleGridLarge";
import ArticleGrid from "../components/ArticleGrid";
import AdSection from "../components/AdSection";
import FullHeader from "../components/FullHeader";
import FooterSection from "../components/FooterSection";
import SubscribeBanner from "../components/SubscribeBanner"; // ← ADDED
import MainArticleGrid from "../components/MainArticleGrid";
import MainContentWithSidebar from "../components/MainContentWithSidebar";
import Banner from "../components/Banner";
import FeaturedGrid from "../components/FeaturedGrid";

export const metadata = {
  title: "UrbanObserver – Celebrity Gossip, Scandals & Lifestyle 2025",
  description: "Latest celebrity scandals, entertainment news, music trends, and lifestyle — updated November 21, 2025",
};

export default async function HomePage() {
  // Load all shared data
  const [
    largeGridData,
    mainArticlesData,
    mainArticlesData2,
    top5ArticlesData,
    regularGridData,
    entertainmentSlider,
    moviesSlider,
    tvSlider,
    musicSlider,
    celebritySlider,
    scandalsSlider,
    dramaSlider,
    lifestyleSlider,
    technologySlider,
    healthSlider,
    latestArticlesData,
    popularArticlesData,
  ] = await Promise.all([
    import("../../public/data/home/home-large-grid.json").then(m => m.default),
    import("../../public/data/home/home-main-articles.json").then(m => m.default),
    import("../../public/data/home/home-main-articles2.json").then(m => m.default),
    import("../../public/data/home/home-top5-articles.json").then(m => m.default),
    import("../../public/data/home/home-grid-articles.json").then(m => m.default),
    import("../../public/data/entertainment-slider.json").then(m => m.default),
    import("../../public/data/movies-slider.json").then(m => m.default),
    import("../../public/data/tv-slider.json").then(m => m.default),
    import("../../public/data/entertainment-slider.json").then(m => m.default),
    import("../../public/data/celebrity-slider.json").then(m => m.default),
    import("../../public/data/scandals-slider.json").then(m => m.default),
    import("../../public/data/drama-slider.json").then(m => m.default),
    import("../../public/data/lifestyle-slider.json").then(m => m.default),
    import("../../public/data/technology-slider.json").then(m => m.default),
    import("../../public/data/health-slider.json").then(m => m.default),
    import("../../public/data/home/home-latest-articles.json").then(m => m.default),
    import("../../public/data/home/home-popular-articles.json").then(m => m.default),
  ]);

  const categoryArticles = {
    ENTERTAINMENT: entertainmentSlider,
    CELEBRITY: celebritySlider,
    SCANDALS: scandalsSlider,
    DRAMA: dramaSlider,
    LIFESTYLE: lifestyleSlider,
    TECHNOLOGY: technologySlider,
    HEALTH: healthSlider,
  };

  const entertainmentSubArticles = {
    movies: moviesSlider,
    tv: tvSlider,
    music: musicSlider,
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <DateBar />
        <NewsletterSection />
        <MainNav
          categoryArticles={categoryArticles}
          entertainmentSubArticles={entertainmentSubArticles}
          currentPage="home"
        />
        <AdSection />
        {/* Hero Section — 3 Large Articles */}

        <ArticleGridLarge data={largeGridData} />

        {/* Regular Grid — 4 Small Articles */}
        <section>
          <ArticleGrid data={regularGridData} />
        </section>
        {/* ← ADDED SUBSCRIBE BANNER */}
        <SubscribeBanner />

        <MainContentWithSidebar
          mainArticles={mainArticlesData}
          latestArticles={latestArticlesData}
          categoryTitle="LIFESTYLE"
        />

        <Banner text="DON'T MISS" />

          <FeaturedGrid mainArticles={mainArticlesData2} top5Articles={top5ArticlesData} />
       

         <AdSection />

        <FullHeader currentPage="home" />
        <FooterSection
          latestArticles={latestArticlesData}
          popularArticles={popularArticlesData}
        />
      </div>
    </div>
  );
}