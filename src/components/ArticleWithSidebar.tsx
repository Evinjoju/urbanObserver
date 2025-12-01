// components/ArticleWithSidebar.tsx
"use client";
import React, { useEffect, useState } from "react";
import Top5Sidebar from "./Top5Sidebar";
import MainArticleDetail from "./MainArticleDetail";

interface Props {
  top5Articles: any[];
  article: any;
}

const ArticleWithSidebar: React.FC<Props> = ({ top5Articles, article }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar-sticky");
    const articleEnd = document.querySelector(".article-end");

    if (!sidebar || !articleEnd) return;

    const handleScroll = () => {
      const sidebarRect = sidebar.getBoundingClientRect();
      const articleRect = articleEnd.getBoundingClientRect();
     setIsSticky(sidebarRect.top <= 20 && articleRect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 px-2 py-4 bg-black">

       {/* Right: Article + End Marker */}
      <div className="lg:col-span-4">
        <MainArticleDetail article={article} />
        <div className="article-end h-1"></div> {/* Invisible marker */}
      </div>
      {/* Left: Sticky Top 5 */}
      <aside className="lg:col-span-2">
        <div className={`sidebar-sticky ${isSticky ? "sticky top-5 z-10" : ""}`}>
          <Top5Sidebar articles={top5Articles} isSticky={isSticky} />
        </div>
      </aside>

     
    </div>
  );
};

export default ArticleWithSidebar;