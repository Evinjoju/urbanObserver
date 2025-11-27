// app/article/[slug]/page.tsx — FINAL SEO-OPTIMIZED VERSION
import DateBar from "../../../components/DateBar";
import FullHeader from "../../../components/FullHeader";
import FooterSection from "../../../components/FooterSection";
import ArticleWithSidebar from "../../../components/ArticleWithSidebar";
import AdSection from "../../../components/AdSection";
import type { ArticleData } from "../../../components/MainArticleDetail";
import { notFound } from "next/navigation";
import HeaderClient from "../../../components/HeaderClient";

import { Metadata } from "next";

interface Params {
  slug: string;
}

// 1. PERFECT generateMetadata (Google loves this)
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;

  let article: ArticleData;
  try {
    article = (await import(`../../../../public/data/articles/${slug}.json`)).default as ArticleData;
  } catch {
    return {
      title: "Article Not Found | financialoutlook",
      robots: { index: false, follow: false },
    };
  }

  const url = `https://financialoutlook.xyz/article/${slug}`;

  return {
    title: `${article.title} | financialoutlook 2025`,
    description: article.shortdescription || article.title,
    keywords: `${article.category.toLowerCase()} 2025, stock market, crypto, billionaires, investing, wealth, ${article.author}`,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.shortdescription || article.title,
      url,
      siteName: "financialoutlook",
      images: [{ url: article.heroImage, width: 1200, height: 630, alt: article.title }],
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.shortdescription || article.title,
      images: [article.heroImage],
    },
    robots: { index: true, follow: true },
  };
}

// 2. generateStaticParams – pre-render all articles at build time (huge SEO + speed win)
export async function generateStaticParams() {
  const fs = require("fs");
  const path = require("path");
  const dir = path.join(process.cwd(), "public/data/articles");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f: string) => f.endsWith(".json"))
    .map((f: string) => ({ slug: f.replace(".json", "") }));
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  let articleData: ArticleData;
  try {
    articleData = (await import(`../../../../public/data/articles/${slug}.json`)).default as ArticleData;
  } catch {
    notFound();
  }

  // Load shared data (same as before)
  const [top5Data, latestArticlesData, popularArticlesData] = await Promise.all([
    import("../../../../public/data/marketsPage/markets-top5-articles.json").then(m => m.default),
    import("../../../../public/data/marketsPage/markets-latest-articles.json").then(m => m.default),
    import("../../../../public/data/marketsPage/markets-popular-articles.json").then(m => m.default),
  ]);

  const currentCategory = articleData.category?.toLowerCase() || "entertainment";

  return (
    <>
      {/* 3. PERFECT JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: articleData.title,
            description: articleData.shortdescription || articleData.title,
            image: articleData.heroImage,
            datePublished: articleData.date,
            dateModified: articleData.date,
            author: {
              "@type": "Person",
              name: articleData.author,
            },
            publisher: {
              "@type": "Organization",
              name: "financialoutlook",
              logo: {
                "@type": "ImageObject",
                url: "https://financialoutlook.xyz/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://financialoutlook.xyz/article/${slug}`,
            },
          }),
        }}
      />

      <div className="bg-white text-black min-h-screen font-sans">
        <div>
          <DateBar />
          <HeaderClient
            currentPage={currentCategory}
          />
          <ArticleWithSidebar top5Articles={top5Data} article={articleData} />

          <FullHeader currentPage={currentCategory} />
          <FooterSection latestArticles={latestArticlesData} popularArticles={popularArticlesData} />
        </div>
      </div>
    </>
  );
}