// components/MainContentWithSidebar.tsx
"use client";
import React, { useState } from "react";
import MainArticleGrid from "./MainArticleGrid";
import LatestArticlesSidebar from "./LatestArticlesSidebar";
import { Article } from "../types/Article";

interface MainContentWithSidebarProps {
  mainArticles: Article[];
  latestArticles: Article[];
  categoryTitle?: string; // e.g. "LIFESTYLE", "TECHNOLOGY"
}

const MainContentWithSidebar: React.FC<MainContentWithSidebarProps> = ({
  mainArticles,
  latestArticles,
  categoryTitle = "LATEST",
}) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, mainArticles.length));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 py-12 px-6 bg-gray-50">
      {/* Main Grid - 4/6 columns */}
      <div className="lg:col-span-4">
        <MainArticleGrid
          articles={mainArticles}
          visibleCount={visibleCount}
          onLoadMore={loadMore}
        />
      </div>

      {/* Sidebar - 2/6 columns */}
      <aside className="lg:col-span-2">
        <LatestArticlesSidebar articles={latestArticles} categoryTitle={categoryTitle} />
      </aside>
    </div>
  );
};

export default MainContentWithSidebar;