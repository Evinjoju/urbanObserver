// components/ArticleGrid.tsx
import React from "react";
import Link from "next/link";
import { Article } from "../types/Article";
import Image from "next/image";

interface ArticleGridProps {
  data: Article[];
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ data }) => {
  return (
    <div className="px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mt-0">
        {data.slice(0, 4).map((article, i) => {
          // Use the actual slug from the article
          const articleUrl = `/article/${article.slug}`;

          return (
            <div
              key={article.slug} // Use slug as key — unique!
              className={`relative h-64 overflow-hidden border-r ${i % 4 < 3 ? "border-b border-black" : ""
                } md:border-b-0 group cursor-pointer`}
            >
              {/* Full Card Clickable */}
              <Link href={articleUrl}  title={`${article.title} – ${article.category} News`} className="block h-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  priority
                  width={800}   
                  height={80}              
                  className="mx-auto block w-full h-full object-cover hover:opacity-90 transition-opacity duration-200"
                />
              </Link>

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-black/60  to-transparent max-w-2xl">
                <div className="text-center mb-1">
                  <Link
                    href={articleUrl}
                    title={`${article.title} – ${article.category} News`}
                    className="block font-bold text-xs sm:text-sm md:text-sm lg:text-1xl leading-tight line-clamp-2 text-white hover:text-red-600 transition-colors duration-300"
                  >
                    {article.title}
                  </Link>
                </div>

                <p className="text-xs text-white opacity-90 text-center">
                  <span className="text-red-600 font-bold border-x-2 border-red-600 px-1 mr-2">
                    {article.category}
                  </span>
                  {article.author}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleGrid;