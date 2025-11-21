// app/[category]/page.tsx  ← ONE FILE FOR ALL CATEGORIES INCLUDING ENTERTAINMENT
import DateBar from "../../components/DateBar";
import NewsletterSection from "../../components/NewsletterSection";
import MainNav from "../../components/MainNav";
import SectionTitle from "../../components/SectionTitle";
import ArticleGrid from "../../components/ArticleGrid";
import AdSection from "../../components/AdSection";
import FeaturedGrid from "../../components/FeaturedGrid";
import FullHeader from "../../components/FullHeader";
import FooterSection from "../../components/FooterSection";
import { notFound } from "next/navigation";

const categoryConfig = {
  entertainment: {
    title: "ENTERTAINMENT",
    subs: ["MOVIES", "MUSIC", "TV SHOWS"],
    folder: "", // uses root data
    slider: "/entertainment-slider.json",
  },
  celebrity: {
    title: "CELEBRITY",
    subs: ["NEWS", "GOSSIP", "FASHION"],
    folder: "celebrityPage",
    slider: "/celebrity-slider.json",
  },
  scandals: {
    title: "SCANDALS",
    subs: ["HOLLYWOOD", "POLITICS", "BUSINESS"],
    folder: "scandalsPage",
    slider: "/scandals-slider.json",
  },
  drama: {
    title: "DRAMA",
    subs: ["TV SERIES", "FILM PLOTS", "BEHIND SCENES"],
    folder: "dramaPage",
    slider: "/drama-slider.json",
  },
  lifestyle: {
    title: "LIFESTYLE",
    subs: ["WELLNESS", "TRAVEL", "FOOD"],
    folder: "lifestylePage",
    slider: "/lifestyle-slider.json",
  },
  technology: {
    title: "TECHNOLOGY",
    subs: ["GADGETS", "AI", "INNOVATIONS"],
    folder: "technologyPage",
    slider: "/technology-slider.json",
  },
  health: {
    title: "HEALTH",
    subs: ["WELLNESS", "FITNESS", "NUTRITION"],
    folder: "healthPage",
    slider: "/health-slider.json",
  },
} as const;

type CategoryKey = keyof typeof categoryConfig;

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
    currentSliderData,
    entertainmentSlider,
    moviesSlider,
    tvSlider,
    musicSlider,
    celebritySlider,
    scandalsSlider,
    dramaSlider,
    lifestyleSlider,
    technologySlider,
    
  ] = await Promise.all([
    import(`../../../public/data/${folder}${key}-grid-articles.json`).then(m => m.default),
    import(`../../../public/data/${folder}${key}-main-articles.json`).then(m => m.default),
    import(`../../../public/data/${folder}${key}-top5-articles.json`).then(m => m.default),
    import(`../../../public/data/${folder}${key}-latest-articles.json`).then(m => m.default),
    import(`../../../public/data/${folder}${key}-popular-articles.json`).then(m => m.default),
 

    import("../../../public/data/entertainment-slider.json").then(m => m.default),
    import("../../../public/data/movies-slider.json").then(m => m.default),
    import("../../../public/data/tv-slider.json").then(m => m.default),
    import("../../../public/data/entertainment-slider.json").then(m => m.default),
    import("../../../public/data/celebrity-slider.json").then(m => m.default),
    import("../../../public/data/scandals-slider.json").then(m => m.default),
    import("../../../public/data/drama-slider.json").then(m => m.default),
    import("../../../public/data/lifestyle-slider.json").then(m => m.default),
    import("../../../public/data/technology-slider.json").then(m => m.default),
    import("../../../public/data/health-slider.json").then(m => m.default),
  ]);

  const categoryArticles = {
    ENTERTAINMENT: entertainmentSlider,
    CELEBRITY: celebritySlider,
    SCANDALS: scandalsSlider,
    DRAMA: dramaSlider,
    LIFESTYLE: lifestyleSlider,
    TECHNOLOGY: technologySlider,
    
    [config.title]: currentSliderData,
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
  );
}