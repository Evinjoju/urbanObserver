// app/page.tsx
import DateBar from "../components/DateBar";
import NewsletterSection from "../components/NewsletterSection";
import MainNav from "../components/MainNav";
import SectionTitle from "../components/SectionTitle";
import ArticleGrid from "../components/ArticleGrid";
import AdSection from "../components/AdSection";
import FeaturedGrid from "../components/FeaturedGrid";
import FullHeader from "../components/FullHeader";
import FooterSection from "../components/FooterSection";
import { Article, MainArticle, TopArticle } from "../types/Article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UrbanObserver – Celebrity Gossip, Scandals & Lifestyle 2025",
  description: "Latest celebrity scandals, breakups, Ozempic face fixes, Black Friday deals & trending drama – updated November 20, 2025",
  keywords: "celebrity gossip 2025, blake lively lawsuit, ozempic face, taylor swift travis kelce, dolly parton health",
  openGraph: {
    title: "UrbanObserver – Celebrity Gossip, Scandals & Lifestyle 2025",
    description: "Your #1 source for the hottest celebrity news, scandals, and lifestyle trends – updated daily November 2025",
    images: "/images/Taylor Swift Engagement Ring Predictions.webp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UrbanObserver – Celebrity Gossip 2025",
    description: "Latest scandals, breakups & trending drama – updated November 20, 2025",
    images: "/og-home.jpg",
  },
  alternates: {
    canonical: "https://urbanobserver.com",
  },
  // robots: {
  //   index: true,
  //   follow: true,
  // },
};

export default async function Home() {
  const gridArticlesData = (await import("../../public/data/grid-articles.json")).default;
  const musicSliderData = (await import("../../public/data/entertainment-slider.json")).default;
  const moviesSliderData = (await import("../../public/data/movies-slider.json")).default;
  const tvSliderData = (await import("../../public/data/tv-slider.json")).default;
  const celebritySliderData = (await import("../../public/data/celebrity-slider.json")).default;
  const scandalsSliderData = (await import("../../public/data/scandals-slider.json")).default;
  const dramaSliderData = (await import("../../public/data/drama-slider.json")).default;
  const lifestyleSliderData = (await import("../../public/data/lifestyle-slider.json")).default;
  const technologySliderData = (await import("../../public/data/technology-slider.json")).default;
  const healthSliderData = (await import("../../public/data/health-slider.json")).default;
  const mainArticlesData = (await import("../../public/data/main-articles.json")).default;
  const top5ArticlesData = (await import("../../public/data/top5-articles.json")).default;
  const latestArticlesData = (await import("../../public/data/latest-articles.json")).default;
  const popularArticlesData = (await import("../../public/data/popular-articles.json")).default;

  const typedMainArticles: MainArticle[] = mainArticlesData as MainArticle[];
  const typedTop5Articles: TopArticle[] = top5ArticlesData as TopArticle[];
  const typedGridArticles: Article[] = gridArticlesData as Article[];
  const typedMusicArticles: Article[] = musicSliderData as Article[];
  const typedMoviesArticles: Article[] = moviesSliderData as Article[];
  const typedTvArticles: Article[] = tvSliderData as Article[];
  const typedCelebrityArticles: Article[] = celebritySliderData as Article[];
  const typedScandalsArticles: Article[] = scandalsSliderData as Article[];
  const typedDramaArticles: Article[] = dramaSliderData as Article[];
  const typedLifestyleArticles: Article[] = lifestyleSliderData as Article[];
  const typedTechnologyArticles: Article[] = technologySliderData as Article[];
  const typedHealthArticles: Article[] = healthSliderData as Article[];

  const categoryArticles = {
    ENTERTAINMENT: typedMusicArticles,
    CELEBRITY: typedCelebrityArticles,
    SCANDALS: typedScandalsArticles,
    DRAMA: typedDramaArticles,
    LIFESTYLE: typedLifestyleArticles,
    TECHNOLOGY: typedTechnologyArticles,
    HEALTH: typedHealthArticles,
  };

  const entertainmentSubArticles = {
    movies: typedMoviesArticles,
    tv: typedTvArticles,
    music: typedMusicArticles,
  };

  return (
    <>
      {/* Homepage WebSite Schema */}
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

      <div className="bg-white text-black min-h-screen font-sans">
        <div className="mx-auto">
          <DateBar />
          <NewsletterSection />
          <MainNav 
            categoryArticles={categoryArticles}
            entertainmentSubArticles={entertainmentSubArticles}
            currentPage="entertainment"
          />
          <SectionTitle 
            title="ENTERTAINMENT" 
            subCategories={["MOVIES", "MUSIC", "TV SHOWS"]} 
          />
          <ArticleGrid data={typedGridArticles} />
          <AdSection />
          <FeaturedGrid 
            mainArticles={typedMainArticles} 
            top5Articles={typedTop5Articles} 
          />
          <FullHeader currentPage="entertainment" />
          <FooterSection 
            latestArticles={latestArticlesData} 
            popularArticles={popularArticlesData} 
          />
        </div>
      </div>
    </>
  );
}