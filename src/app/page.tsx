// app/page.tsx — NEW HOME PAGE (Beautiful & Modern)
import dynamic from 'next/dynamic';
import { Metadata } from "next";

// Dynamically import all components for lazy loading
const LazyDateBar = dynamic(
  () => import("../components/DateBar"),
  { loading: () => <p>Loading date...</p> }
);

const LazyArticleGridLarge = dynamic(
  () => import("../components/ArticleGridLarge"),
  { loading: () => <p>Loading hero articles...</p> }
);

const LazyArticleGrid = dynamic(
  () => import("../components/ArticleGrid"),
  { loading: () => <p>Loading grid articles...</p> }
);

const LazyAdSection = dynamic(
  () => import("../components/AdSection"),
  { loading: () => <p>Loading ads...</p> }
);

const LazyFullHeader = dynamic(
  () => import("../components/FullHeader"),
  { loading: () => <p>Loading full header...</p> }
);

const LazySubscribeBanner = dynamic(
  () => import("../components/SubscribeBanner"),
  { loading: () => <p>Loading subscribe banner...</p> }
);

const LazyMainContentWithSidebar = dynamic(
  () => import("../components/MainContentWithSidebar"),
  { loading: () => <p>Loading lifestyle content...</p> }
);

const LazyBanner = dynamic(
  () => import("../components/Banner"),
  { loading: () => <p>Loading banner...</p> }
);

const LazyFeaturedGrid = dynamic(
  () => import("../components/FeaturedGrid"),
  { loading: () => <p>Loading featured articles...</p> }
);

const LazyHeaderClient = dynamic(
  () => import("../components/HeaderClient"),
  { loading: () => <p>Loading navigation...</p> }
);

const LazyFooterSection = dynamic(
  () => import("../components/FooterSection"),
  { loading: () => <p>Loading footer...</p> }
);

export const metadata: Metadata = {
  metadataBase: new URL("https://urban-observer.vercel.app"),
  title: "UrbanObserver – Celebrity Gossip, Scandals & Lifestyle 2025",
  description: "Latest celebrity scandals, Blake Lively lawsuit, Taylor Swift & Travis Kelce, Ozempic face fixes, Dolly Parton health updates – updated November 21, 2025",
  keywords: [
    "celebrity gossip 2025",
    "blake lively lawsuit",
    "taylor swift travis kelce",
    "ozempic face",
    "dolly parton health",
    "black friday deals 2025",
    "hollywood scandals",
    "entertainment news",
  ].join(", "),
  openGraph: {
    title: "UrbanObserver – Celebrity Gossip & Lifestyle 2025",
    description: "Your #1 source for the hottest celebrity scandals, breakups & trending drama – updated daily",
    url: "https://urban-observer.vercel.app",
    siteName: "UrbanObserver",
    images: [
      {
        url: "/og-home.jpg", // ← 1200x630 WebP
        width: 1200,
        height: 630,
        alt: "UrbanObserver – Celebrity Gossip 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UrbanObserver – Celebrity Gossip 2025",
    description: "Latest scandals, lawsuits & trending drama – updated daily",
    images: ["/og-home.jpg"],
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
    canonical: "https://urban-observer.vercel.app",
  },
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
    <>
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "UrbanObserver",
            url: "https://urban-observer.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://urban-observer.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <div className="bg-white text-black font-sans">
        <div >
          <LazyDateBar />
          <LazyHeaderClient
            categoryArticles={categoryArticles}
            entertainmentSubArticles={entertainmentSubArticles}
            currentPage="home"
          />
          <LazyAdSection />
          {/* Hero Section — 3 Large Articles */}
          <LazyArticleGridLarge data={largeGridData} />

          {/* Regular Grid — 4 Small Articles */}
          <section>
            <LazyArticleGrid data={regularGridData} />
          </section>
          {/* ← ADDED SUBSCRIBE BANNER */}
          <LazySubscribeBanner />

          <LazyMainContentWithSidebar
            mainArticles={mainArticlesData}
            latestArticles={latestArticlesData}
            categoryTitle="LIFESTYLE"
          />

          <LazyBanner text="DON'T MISS" />

          <LazyFeaturedGrid mainArticles={mainArticlesData2} top5Articles={top5ArticlesData} />

          <LazyAdSection />

          <LazyFullHeader currentPage="home" />
          <LazyFooterSection
            latestArticles={latestArticlesData}
            popularArticles={popularArticlesData}
          />
        </div>
      </div>
    </>
  );
}