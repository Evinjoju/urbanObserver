// app/lifestyle/page.tsx (New - Lifestyle page, same layout as Home)
import DateBar from "../../components/DateBar";
import SectionTitle from "../../components/SectionTitle";
import FullHeader from "../../components/FullHeader";
import FooterSection from "../../components/FooterSection";
import { Article } from "../../types/Article";
import PricingPlans from "@/src/components/PricingPlans";
import HeaderClient from "../../components/HeaderClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Plans – Unlimited Access | UrbanObserver 2025",
  description: "Support independent journalism. Get full access to all premium articles, exclusive stories, and ad-free reading with UrbanObserver membership.",
  keywords: "urbanobserver membership, subscribe, premium access, unlimited articles, support journalism 2025",
  alternates: {
    canonical: "https://urban-observer.vercel.app/pricingPlan",
  },
  openGraph: {
    title: "Join UrbanObserver – Unlimited Access Membership",
    description: "Support independent journalism and get full access to all premium content.",
    url: "https://urban-observer.vercel.app/pricingPlan",
    type: "website",
    images: ["/images/pricing-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UrbanObserver Membership – Unlimited Access",
    description: "Support journalism. Get full access to premium stories.",
    images: ["/images/pricing-og.jpg"],
  },
};

export default async function LifestylePage() {
  // Import lifestyle-specific JSON files (create these similar to entertainment ones)
  const latestArticlesData = (await import("../../../public/data/lifestylePage/lifestyle-latest-articles.json")).default; // 3 for footer
  const popularArticlesData = (await import("../../../public/data/lifestylePage/lifestyle-popular-articles.json")).default; // 3 for footer

  // Type assertions
  const typedLatestArticles: Article[] = latestArticlesData as Article[]; // For footer
  const typedPopularArticles: Article[] = popularArticlesData as Article[]; // For footer

  // For MainNav dropdown (passed from layout or parent; assuming shared via layout.tsx or prop drilling)
  // Note: If MainNav needs category data, pass via props or global context; here assuming Home passes it, but for standalone page, import lifestyle-slider.json
  const lifestyleSliderData = (await import("../../../public/data/lifestyle-slider.json")).default as Article[];
  const musicSliderData = (await import("../../../public/data/entertainment-slider.json")).default; // Music for ENTERTAINMENT
  const moviesSliderData = (await import("../../../public/data/movies-slider.json")).default; // Movies for ENTERTAINMENT sub
  const tvSliderData = (await import("../../../public/data/tv-slider.json")).default; // TV for ENTERTAINMENT sub
  const celebritySliderData = (await import("../../../public/data/celebrity-slider.json")).default; // For CELEBRITY
  const scandalsSliderData = (await import("../../../public/data/scandals-slider.json")).default; // For SCANDALS
  const dramaSliderData = (await import("../../../public/data/drama-slider.json")).default; // For DRAMA
  const technologySliderData = (await import("../../../public/data/technology-slider.json")).default; // For TECHNOLOGY
  const healthSliderData = (await import("../../../public/data/health-slider.json")).default;

  // Category articles map (for dropdown; extend if needed)
  const categoryArticles = {
    LIFESTYLE: lifestyleSliderData,
    ENTERTAINMENT: musicSliderData,
    CELEBRITY: celebritySliderData,
    SCANDALS: scandalsSliderData,
    DRAMA: dramaSliderData,
    TECHNOLOGY: technologySliderData,
    HEALTH: healthSliderData, // Simple slider for LIFESTYLE
    // Other categories if needed for this page
  };

  const entertainmentSubArticles = {
    movies: moviesSliderData,
    tv: tvSliderData,
    music: musicSliderData,
  };

  return (
    <>
      {/* Organization Schema for Trust */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "UrbanObserver",
            url: "https://urban-observer.vercel.app",
            logo: "https://urban-observer.vercel.app/logo.png",
            sameAs: [
              "https://twitter.com/urbanobserver",
              "https://instagram.com/urbanobserver",
            ],
          }),
        }}
      />
      <div className="bg-white text-black min-h-screen font-sans">
        <div>
          <DateBar />
          <HeaderClient
            categoryArticles={categoryArticles}
            currentPage="pricingPlan"
            entertainmentSubArticles={entertainmentSubArticles}
          />
          <SectionTitle
            title="Subscription Plans"
            subCategories={["Please consider supporting us by becoming a full access members. You get free access to all our exclusive stories!"]}
          />
          <PricingPlans></PricingPlans>
          <FullHeader
            currentPage="pricingPlan"
          />
          <FooterSection
            latestArticles={typedLatestArticles}
            popularArticles={typedPopularArticles}
          />
        </div>
      </div>
    </>
  );
}