// components/MainArticleGrid.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../types/Article";

interface MainArticleGridProps {
  articles: Article[];
  visibleCount: number;
  onLoadMore: () => void;
}

const MainArticleGrid: React.FC<MainArticleGridProps> = ({ articles, visibleCount, onLoadMore }) => {
  return (
    <div className="lg:col-span-4 main-grid">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.slice(0, visibleCount).map((article, index) => {
          const articleUrl = `/article/${article.slug}`;

          return (
            <Link
              key={`mainArticleGrid_${article.slug+index}`}
              href={articleUrl}
              className="group flex border-b pb-5 border-black overflow-hidden bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Image */}
              <div className="relative w-40 h-35 shrink-0 overflow-hidden">
                <Image
                loading="lazy"
                  src={article.image.replace(".jpg", ".webp")}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-3 flex-1">
                <h3 className="font-bold md:text-2xl text-base leading-tight mb-1 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                  <span className="text-red-600 font-semibold border-x-2 border-red-600 px-1 mr-2">
                    {article.category}
                  </span>
                  {article.date}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {visibleCount < articles.length && (
        <button
          onClick={onLoadMore}
          className="mt-6 mx-auto block px-8 py-3 border-2 border-black font-extrabold uppercase text-sm tracking-widest hover:text-red-600 hover:border-red-600 transition-all duration-300"
        >
          LOAD MORE
        </button>
      )}
    </div>
  );
};

export default MainArticleGrid;