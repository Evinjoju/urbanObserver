// components/FeaturedGrid.tsx
"use client";
import React, { useEffect, useState } from "react";
import MainArticleGrid from "./MainArticleGrid";
import Top5Sidebar from "./Top5Sidebar";
import { MainArticle, TopArticle } from "../types/Article";

interface FeaturedGridProps {
  mainArticles: MainArticle[];
  top5Articles: TopArticle[];
}

const FeaturedGrid: React.FC<FeaturedGridProps> = ({ mainArticles, top5Articles }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar-sticky");
    const mainGrid = document.querySelector(".main-grid");
    if (sidebar && mainGrid) {
      const handleScroll = () => {
        const sidebarRect = sidebar.getBoundingClientRect();
        const mainRect = mainGrid.getBoundingClientRect();
        setIsSticky(sidebarRect.top <= 8 && mainRect.bottom > 0);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, mainArticles.length));
  };

  return (
    <section className="py-8 px-6 bg-black border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <MainArticleGrid
            articles={mainArticles}
            visibleCount={visibleCount}
            onLoadMore={loadMore}
          />
          <Top5Sidebar articles={top5Articles} isSticky={isSticky} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;