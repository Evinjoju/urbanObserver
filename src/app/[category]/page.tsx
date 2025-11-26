// app/[category]/page.tsx — FINAL SEO-PRO VERSION
import DateBar from "../../components/DateBar";
import SectionTitle from "../../components/SectionTitle";
import ArticleGrid from "../../components/ArticleGrid";
import AdSection from "../../components/AdSection";
import FeaturedGrid from "../../components/FeaturedGrid";
import FullHeader from "../../components/FullHeader";
import FooterSection from "../../components/FooterSection";
import { notFound } from "next/navigation";
import HeaderClient from "../../components/HeaderClient";
import { Metadata } from "next";

// app/[category]/page.tsx — ADD THIS FUNCTION
export function generateStaticParams() {
  return [
    { category: "entertainment" },
    { category: "celebrity" },
    { category: "scandals" },
    { category: "drama" },
    { category: "lifestyle" },
    { category: "technology" },
    { category: "health" },
  ];
}

const categoryConfig = {
  entertainment: {
    title: "ENTERTAINMENT",
    subs: ["MOVIES", "MUSIC", "TV SHOWS"],
    folder: "",
    slider: "/entertainment-slider.json",
    description: "Latest movies, music releases, TV shows, celebrity interviews, and entertainment trends 2025",
  },
  celebrity: {
    title: "CELEBRITY",
    subs: ["NEWS", "GOSSIP", "FASHION"],
    folder: "celebrityPage",
    slider: "/celebrity-slider.json",
    description: "Celebrity gossip, fashion, scandals, red carpet moments and exclusive interviews 2025",
  },
  scandals: {
    title: "SCANDALS",
    subs: ["HOLLYWOOD", "POLITICS", "BUSINESS"],
    folder: "scandalsPage",
    slider: "/scandals-slider.json",
    description: "Biggest celebrity scandals, Hollywood drama, political controversies and business exposés 2025",
  },
  drama: {
    title: "DRAMA",
    subs: ["TV SERIES", "FILM PLOTS", "BEHIND SCENES"],
    folder: "dramaPage",
    slider: "/drama-slider.json",
    description: "TV series reviews, film plot breakdowns, behind-the-scenes drama and industry secrets",
  },
  lifestyle: {
    title: "LIFESTYLE",
    subs: ["WELLNESS", "TRAVEL", "FOOD"],
    folder: "lifestylePage",
    slider: "/lifestyle-slider.json",
    description: "Wellness tips, luxury travel, gourmet food, fashion and modern living 2025",
  },
  technology: {
    title: "TECHNOLOGY",
    subs: ["GADGETS", "AI", "INNOVATIONS"],
    folder: "technologyPage",
    slider: "/technology-slider.json",
    description: "Latest gadgets, AI breakthroughs, tech reviews and innovation news 2025",
  },
  health: {
    title: "HEALTH",
    subs: ["WELLNESS", "FITNESS", "NUTRITION"],
    folder: "healthPage",
    slider: "/health-slider.json",
    description: "Health tips, fitness routines, nutrition advice and wellness trends 2025",
  },
} as const;

type CategoryKey = keyof typeof categoryConfig;

// PERFECT SEO METADATA
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const key = category.toLowerCase() as CategoryKey;
  const config = categoryConfig[key];

  if (!config) {
    return {
      title: "Category Not Found | financialoutlook",
      robots: { index: false, follow: false },
    };
  }

  const url = `https://financialoutlook.xyz/${key}`;

  return {
    title: `${config.title} News & Updates 2025 | financialoutlook`,
    description: config.description,
    keywords: `${config.title.toLowerCase()} 2025, latest ${config.title.toLowerCase()} news, celebrity, gossip, trends`,
    alternates: { canonical: url },
    openGraph: {
      title: `${config.title} – Latest News 2025 | financialoutlook`,
      description: config.description,
      url,
      siteName: "financialoutlook",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${config.title} News 2025 | financialoutlook`,
      description: config.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const key = category.toLowerCase() as CategoryKey;
  const config = categoryConfig[key];
  if (!config) notFound();

  const folder = config.folder ? `${config.folder}/` : "";

  const [
    gridData,
    mainData,
    top5Data,
    latestData,
    popularData,
  ] = await Promise.all([
    import(`../../../public/data/${folder}${key}-grid-articles.json`).then(m => m.default),
    import(`../../../public/data/${folder}${key}-main-articles.json`).then(m => m.default),
    import(`../../../public/data/${folder}${key}-top5-articles.json`).then(m => m.default),
    import(`../../../public/data/${folder}${key}-latest-articles.json`).then(m => m.default),
    import(`../../../public/data/${folder}${key}-popular-articles.json`).then(m => m.default),
  ]);

  return (
    <>
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${config.title} – financialoutlook`,
            description: config.description,
            url: `https://financialoutlook.xyz/${key}`,
          }),
        }}
      />

      <div className="bg-white text-black font-sans">
        <div>
          <DateBar />
          <HeaderClient
            currentPage={key}
          />
          <SectionTitle title={config.title} subCategories={[...config.subs]} />
          <ArticleGrid data={gridData} />
          <AdSection />
          <FeaturedGrid mainArticles={mainData} top5Articles={top5Data} />
          <FullHeader currentPage={key} />
          <FooterSection latestArticles={latestData} popularArticles={popularData} />
        </div>
      </div>
    </>
  );
}