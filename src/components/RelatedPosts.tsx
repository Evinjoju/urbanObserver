// components/RelatedPosts.tsx
import React from "react";
import Link from "next/link";
import { Article } from "../types/Article";

interface RelatedPostsProps {
  articles: Article[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ articles }) => {
  return (
    <div className="mt-16">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-black text-red-600 mb-6 border-b-4 border-red-600 pb-2 inline-block">
        RELATED POSTS
      </h2>

      {/* Posts List */}
      <div className="space-y-8 mt-8">
        {articles.map((article, index) => (
          <div key={article.slug} className="flex gap-6 group">
            {/* Number */}
            <div className="text-5xl font-black text-gray-200 group-hover:text-red-600 transition-colors duration-300">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="flex-1">
              <Link
                href={`/article/${article.slug}`}
                title={`${article.title} – ${article.category} News`}
                className="block text-2xl md:text-3xl font-black leading-tight text-black hover:text-red-600 transition-colors duration-300 mb-2"
              >
                {article.title}
              </Link>
              <span className="text-red-600 font-bold text-sm uppercase tracking-wider">
                {article.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;