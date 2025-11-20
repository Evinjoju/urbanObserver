// app/[category]/page.tsx
'use client';

import DateBar from "../../components/DateBar";
import NewsletterSection from "../../components/NewsletterSection";
import MainNav from "../../components/MainNav";
import SectionTitle from "../../components/SectionTitle";
import ArticleGrid from "../../components/ArticleGrid";
import AdSection from "../../components/AdSection";
import FeaturedGrid from "../../components/FeaturedGrid";
import FullHeader from "../../components/FullHeader";
import FooterSection from "../../components/FooterSection";
import { notFound, useParams } from "next/navigation";

const config = {
  celebrity: { title: "CELEBRITY" as const, subs: ["NEWS", "GOSSIP", "FASHION"] as const, folder: "celebrityPage", slider: "/celebrity-slider.json" },
  scandals: { title: "SCANDALS" as const, subs: ["HOLLYWOOD", "POLITICS", "BUSINESS"] as const, folder: "scandalsPage", slider: "/scandals-slider.json" },
  drama: { title: "DRAMA" as const, subs: ["TV SERIES", "FILM PLOTS", "BEHIND SCENES"] as const, folder: "dramaPage", slider: "/drama-slider.json" },
  lifestyle: { title: "LIFESTYLE" as const, subs: ["WELLNESS", "TRAVEL", "FOOD"] as const, folder: "lifestylePage", slider: "/lifestyle-slider.json" },
  technology: { title: "TECHNOLOGY" as const, subs: ["GADGETS", "AI", "INNOVATIONS"] as const, folder: "technologyPage", slider: "/technology-slider.json" },
  health: { title: "HEALTH" as const, subs: ["WELLNESS", "FITNESS", "NUTRITION"] as const, folder: "healthPage", slider: "/health-slider.json" },
} as const;

type Category = keyof typeof config;

export default function CategoryPage() {
  const params = useParams();
  const key = params.category as Category;

  const c = config[key];
  if (!c) notFound();

  // Load all data synchronously with dynamic imports (no async/await + useState = no loading state)
  const grid = require(`../../../public/data/${c.folder}/${key}-grid-articles.json`);
  const main = require(`../../../public/data/${c.folder}/${key}-main-articles.json`);
  const top5 = require(`../../../public/data/${c.folder}/${key}-top5-articles.json`);
  const latest = require(`../../../public/data/${c.folder}/${key}-latest-articles.json`);
  const popular = require(`../../../public/data/${c.folder}/${key}-popular-articles.json`);
  const currentSlider = require(`../../../public/data${c.slider}`);

  // Shared sliders (only the ones you actually use)
  const entertainmentSlider = require("../../../public/data/entertainment-slider.json");
  const moviesSlider = require("../../../public/data/movies-slider.json");
  const tvSlider = require("../../../public/data/tv-slider.json");

  const categoryArticles = {
    ENTERTAINMENT: entertainmentSlider,
    MOVIES: moviesSlider,
    TV: tvSlider,
    CELEBRITY: require("../../../public/data/celebrity-slider.json"),
    SCANDALS: require("../../../public/data/scandals-slider.json"),
    DRAMA: require("../../../public/data/drama-slider.json"),
    LIFESTYLE: require("../../../public/data/lifestyle-slider.json"),
    TECHNOLOGY: require("../../../public/data/technology-slider.json"),
    HEALTH: require("../../../public/data/health-slider.json"),
    [c.title]: currentSlider,
  };

  const entertainmentSubArticles = {
    movies: moviesSlider,
    tv: tvSlider,
    music: entertainmentSlider, // fallback — many sites use ENTERTAINMENT as music too
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <DateBar />
        <NewsletterSection />
        <MainNav
          categoryArticles={categoryArticles}
          currentPage={key}
          entertainmentSubArticles={entertainmentSubArticles}
        />
        <SectionTitle title={c.title} subCategories={[...c.subs]} />
        <ArticleGrid data={grid} />
        <AdSection />
        <FeaturedGrid mainArticles={main} top5Articles={top5} />
        <FullHeader currentPage={key} />
        <FooterSection latestArticles={latest} popularArticles={popular} />
      </div>
    </div>
  );
}