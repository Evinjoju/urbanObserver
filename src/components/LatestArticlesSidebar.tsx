// components/LatestArticlesSidebar.tsx
import React from "react";
import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
}

interface LatestArticlesSidebarProps {
  articles: Article[];
  categoryTitle?: string; // e.g. "HEALTH", "LIFESTYLE"
}

const LatestArticlesSidebar: React.FC<LatestArticlesSidebarProps> = ({
  articles,
  categoryTitle = "LATEST",
}) => {
  return (
    <aside className="border-l border-black bg-white">
      {/* Red Category Header */}
      <div className="bg-red-600 text-white px-6 py-3">
        <h3 className="text-xl font-black tracking-widest uppercase">
          {categoryTitle}
        </h3>
      </div>

      {/* Articles List */}
      <div className="divide-y divide-gray-300">
        {articles.map((article, index) => (
          <Link
            key={article.slug+index}
            href={`/article/${article.slug}`}
            className="block p-6 hover:bg-gray-50 transition-colors duration-200"
          >
            <h4 className="font-black text-lg leading-tight mb-2 line-clamp-3 hover:text-red-600 transition-colors">
              {article.title}
            </h4>
            <p className="text-sm text-gray-600 uppercase tracking-wider">
              {article.date}
            </p>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default LatestArticlesSidebar;