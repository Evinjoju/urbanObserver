// components/ArticleGridLarge.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../types/Article";

interface ArticleGridLargeProps {
  data: Article[];
}

const ArticleGridLarge: React.FC<ArticleGridLargeProps> = ({ data }) => {
  return (
    <div className=" px-6 py-8 -mx-4 md:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.slice(0, 3).map((article, i) => {
          const articleUrl = `/article/${article.slug}`;

          return (
            <Link
              key={article.slug}
              href={articleUrl}
              className="group relative h-80 md:h-96 overflow-hidden hover:opacity-95 transition-all duration-300"
            >
              {/* Image */}
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bg-black/40 inset-x-0 bottom-0 p-2 text-white">
                <h3 className="font-black text-2xl md:text-2xl lg:text-2xl leading-tight line-clamp-3 mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm uppercase tracking-wider opacity-90">
                  <span className="text-red-400 font-bold border-x-2 border-red-400 px-2 mr-3">
                    {article.category}
                  </span>
                  {article.author}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleGridLarge;