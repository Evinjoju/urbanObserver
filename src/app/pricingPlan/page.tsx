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
  title: "Membership Plans – Unlimited Access | financialoutlook 2025",
  description: "Support independent journalism. Get full access to all premium articles, exclusive stories, and ad-free reading with financialoutlook membership.",
  keywords: "financialoutlook membership, subscribe, premium access, unlimited articles, support journalism 2025",
  alternates: {
    canonical: "https://financialoutlook.xyz/pricingPlan",
  },
  openGraph: {
    title: "Join financialoutlook – Unlimited Access Membership",
    description: "Support independent journalism and get full access to all premium content.",
    url: "https://financialoutlook.xyz/pricingPlan",
    type: "website",
    images: ["/images/pricing-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "financialoutlook Membership – Unlimited Access",
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


  return (
    <>
      {/* Organization Schema for Trust */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "financialoutlook",
            url: "https://financialoutlook.xyz",
            logo: "https://financialoutlook.xyz/logo.png",
            sameAs: [
              "https://twitter.com/financialoutlook",
              "https://instagram.com/financialoutlook",
            ],
          }),
        }}
      />
      <div className="bg-black text-gray-400 min-h-screen font-sans">
        <div>
          <DateBar />
          <HeaderClient
            currentPage="pricingPlan"
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