// components/Top5Sidebar.tsx
import React from "react";
import Link from "next/link";
import { TopArticle } from "../types/Article";
import Image from "next/image";

interface Top5SidebarProps {
  articles: TopArticle[];
  isSticky: boolean;
}

const Top5Sidebar: React.FC<Top5SidebarProps> = ({ articles, isSticky }) => {
  return (
    <div className="lg:col-span-2 space-y-4 sidebar-sticky">
      <div className={`h-[555px] bg-white z-10 transition-all duration-300 ${isSticky ? 'sticky top-8' : ''}`}>
        <div className="bg-red-600 text-2xl text-white p-4 uppercase font-bold tracking-widest text-center border-black">
          TOP 5 THIS WEEK
        </div>
        <div className="p-3 space-y-3 rounded-b overflow-hidden">
          {articles.slice(0, 5).map((article) => {
            const articleUrl = `/article/${article.slug}`;

            return (
              <div key={article.slug} className="flex border-b pb-1 items-start space-x-3">
                {/* Full row clickable */}
                <Link href={articleUrl} className="flex flex-1 items-start space-x-3 group">
                  <Image
                    loading="lazy"
                    width={80}
                    height={80}
                    src={article.image}
                    alt={article.title}
                    className="w-20 h-20 object-cover rounded shrink-0 group-hover:opacity-90 transition-opacity duration-200"
                  />
                  <div className="flex-1 text-sm leading-tight pt-1">
                    <span className="inline-block bg-red-600 text-white text-[12px] px-2 py-0.5 rounded font-bold mr-2">
                      {article.rank}
                    </span>
                    <h3 className="font-semibold mb-1 line-clamp-2 text-sm text-black group-hover:text-red-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 uppercase tracking-wider text-xs">
                      <span className="text-red-600 font-semibold border-x-2 px-1 me-2">
                        {article.category}
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Top5Sidebar;