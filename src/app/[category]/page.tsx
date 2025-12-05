// app/[category]/page.tsx 
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
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../../components/Banner"),);


// app/[category]/page.tsx — ADD THIS FUNCTION
export function generateStaticParams() {
  return [
    { category: "markets" },
    { category: "crypto" },
    { category: "billionaires" },
    { category: "investing" },
    { category: "realestate" },
    { category: "techfinance" },
    { category: "economy" },
  ];
}

const categoryConfig = {
  markets: {
    title: "MARKETS",
    subs: ["STOCKS", "FOREX", "COMMODITIES"],
    folder: "marketsPage",
    slider: "/markets-slider.json",
    description: "Real-time stock market updates, insights, forex trends, commodities, and trading strategies for 2025",
  },
  crypto: {
    title: "CRYPTO",
    subs: ["BITCOIN", "ETHEREUM", "DEFI"],
    folder: "cryptoPage",
    slider: "/crypto-slider.json",
    description: "Latest Bitcoin, Ethereum, insights, and DeFi news, price analysis, and blockchain developments 2025",
  },
  billionaires: {
    title: "BILLIONAIRES",
    subs: ["FORBES LIST", "NET WORTH", "DEALS"],
    folder: "billionairesPage",
    slider: "/billionaires-slider.json",
    description: "Forbes billionaire rankings, insights, net worth changes, luxury lifestyles and mega deals 2025",
  },
  investing: {
    title: "INVESTING",
    subs: ["STOCK PICKS", "ETFs", "DIVIDENDS"],
    folder: "investingPage",
    slider: "/investing-slider.json",
    description: "Best stocks to buy, ETF strategies,insights,  dividend investing and portfolio tips for 2025",
  },
  realestate: {
    title: "REAL ESTATE",
    subs: ["LUXURY", "COMMERCIAL", "TRENDS"],
    folder: "realestatePage",
    slider: "/realestate-slider.json",
    description: "Luxury property markets, commercial real estate,insights,  housing trends and investment opportunities 2025",
  },
  techfinance: {
    title: "TECH & FINANCE",
    subs: ["FINTECH", "STARTUPS", "VC"],
    folder: "techfinancePage",
    slider: "/techfinance-slider.json",
    description: "Fintech innovations, startup funding,insights,  venture capital deals and digital banking 2025",
  },
  economy: {
    title: "ECONOMY",
    subs: ["GDP", "INFLATION", "POLICY"],
    folder: "economyPage",
    slider: "/economy-slider.json",
    description: "Global economic indicators, inflation reports,insights,  central bank policies and market forecasts 2025",
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
    title: `${config.title} | financialoutlook 2025`,
    description: config.description,
    keywords: `${config.title.toLowerCase()} 2025, stock market, crypto, billionaires, investing, wealth`,
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
      title: `${config.title} News 2025`,
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
        <div className="hidden">Financial Outlook wealth, business 2025</div>
        <div>
          <DateBar />
          <HeaderClient
            currentPage={key}
          />
          <SectionTitle title={config.title} subCategories={[...config.subs]} />
          <ArticleGrid data={gridData} />
          <AdSection />
          <Suspense fallback={null}>
            <Banner text="WEALTH , MARKET & FINANCIAL MOVES" />
          </Suspense>
          <FeaturedGrid mainArticles={mainData} top5Articles={top5Data} />
          <FullHeader currentPage={key} />
          <FooterSection latestArticles={latestData} popularArticles={popularData} />
        </div>
      </div>
    </>
  );
}