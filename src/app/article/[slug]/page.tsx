// app/article/[slug]/page.tsx   
import DateBar from "../../../components/DateBar";
import NewsletterSection from "../../../components/NewsletterSection";
import MainNav from "../../../components/MainNav";
import FullHeader from "../../../components/FullHeader";
import FooterSection from "../../../components/FooterSection";
import ArticleWithSidebar from "../../../components/ArticleWithSidebar";
import AdSection from "../../../components/AdSection";
import type { ArticleData } from "../../../components/MainArticleDetail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;

  let articleData: ArticleData;
  try {
    articleData = (await import(`../../../../public/data/articles/${slug}.json`)).default as ArticleData;
  } catch {
    return { title: "Article Not Found | UrbanObserver" };
  }

  return {
    title: `${articleData.title} (2025 Update) | UrbanObserver`,
    description: articleData.shortdescription || (articleData as any).description || articleData.title,
    keywords: `${(articleData.category || "").toLowerCase()} 2025, celebrity gossip`,
    openGraph: {
      title: articleData.title,
      description: articleData.shortdescription || (articleData as any).description || articleData.title,
      images: (articleData as any).image ? [(articleData as any).image] : [],
      type: "article",
      publishedTime: (articleData as any).date,
    },
    twitter: {
      card: "summary_large_image",
      title: articleData.title,
      description: articleData.shortdescription || (articleData as any).description || articleData.title,
      images: (articleData as any).image ? [(articleData as any).image] : [],
    },
    alternates: {
      canonical: `https://urbanobserver.com/article/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const fs = require("fs");
  const path = require("path");
  const articlesDir = path.join(process.cwd(), "public/data/articles");
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir);
  return files
    .filter((file: string) => file.endsWith(".json"))
    .map((file: string) => ({
      slug: file.replace(".json", ""),
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let articleData: ArticleData;
  try {
    articleData = (await import(`../../../../public/data/articles/${slug}.json`)).default as ArticleData;
  } catch {
    notFound();
  }

  const [top5Data, latestArticlesData, popularArticlesData] = await Promise.all([
    import("../../../../public/data/top5-articles.json").then(m => m.default),
    import("../../../../public/data/latest-articles.json").then(m => m.default),
    import("../../../../public/data/popular-articles.json").then(m => m.default),
  ]);

  const [
    entertainmentSlider, moviesSlider, tvSlider, musicSlider,
    celebritySlider, scandalsSlider, dramaSlider, lifestyleSlider,
    technologySlider, healthSlider
  ] = await Promise.all([
    import("../../../../public/data/entertainment-slider.json").then(m => m.default),
    import("../../../../public/data/movies-slider.json").then(m => m.default),
    import("../../../../public/data/tv-slider.json").then(m => m.default),
    import("../../../../public/data/entertainment-slider.json").then(m => m.default),
    import("../../../../public/data/celebrity-slider.json").then(m => m.default),
    import("../../../../public/data/scandals-slider.json").then(m => m.default),
    import("../../../../public/data/drama-slider.json").then(m => m.default),
    import("../../../../public/data/lifestyle-slider.json").then(m => m.default),
    import("../../../../public/data/technology-slider.json").then(m => m.default),
    import("../../../../public/data/health-slider.json").then(m => m.default),
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

  const entertainmentSubArticles = { movies: moviesSlider, tv: tvSlider, music: musicSlider };
  const currentCategory = articleData.category?.toLowerCase() || "entertainment";

  return (
    <>
      {/* NewsArticle Schema – safe access */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: articleData.title,
            image: (articleData as any).image,
            datePublished: (articleData as any).date || new Date().toISOString().split('T')[0],
            author: { "@type": "Person", name: (articleData as any).author || "Gossip Guru" },
            publisher: { "@type": "Organization", name: "UrbanObserver" },
            description: articleData.shortdescription || (articleData as any).description || articleData.title,
          }),
        }}
      />

      <div className="bg-white text-black min-h-screen font-sans">
        <div className="max-w-7xl mx-auto">
          <DateBar />
          <NewsletterSection />
          <MainNav
            categoryArticles={categoryArticles}
            entertainmentSubArticles={entertainmentSubArticles}
            currentPage={currentCategory}
          />
          <AdSection />

          <ArticleWithSidebar top5Articles={top5Data} article={articleData} />

          <FullHeader currentPage={currentCategory} />
          <FooterSection latestArticles={latestArticlesData} popularArticles={popularArticlesData} />
        </div>
      </div>
    </>
  );
}