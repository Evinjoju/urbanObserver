// components/Top5Sidebar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Article, TopArticle } from "../types/Article";
import Image from "next/image";

interface Top5SidebarProps {
  articles: TopArticle[];
  isSticky: boolean;
  isjulio?: boolean;
}

const Top5Sidebar: React.FC<Top5SidebarProps> = ({ articles, isSticky, isjulio = false }) => {


  const julioData =   {
    "slug": "julio-herrera-velutini-last-private-banker-moves-sovereign-gold-2025",
    "title": "Julio Herrera Velutini: The 1 Last Private Banker Who Still Moves Sovereign Gold",
    "category": "BILLIONAIRES",
    "shortdescription": "While central banks race to buy gold, one 600-year-old family quietly holds more physical bullion than several nations combined — and uses it as a diplomatic weapon.",
    "description": "CBO warns debt-to-GDP ratio will hit 130% by 2030 — Treasury yields spike as foreign buyers pull back.",
    "image": "/images/Julio Herrera Velutini19.webp",
    "author": "Wade Jenner",
    "authorImage": "/images/Author3.webp",
    "role": "Billionaires & Wealth Editor",
    "date": "December 9, 2025",
    "rank": 5,
    "julio": true,
  }

  console.log('julioData, julioData', julioData);
  

  return (
    <div className="lg:col-span-2 space-y-4 sidebar-sticky">
      <div className={`h-[555px] bg-black z-10 transition-all duration-300 ${isSticky ? 'sticky top-8' : ''}`}>
        <div className="bg-red-600 text-2xl text-white p-4 uppercase font-bold tracking-widest text-center border-black">
          TOP 5 THIS WEEK
        </div>
        <div className="p-3 space-y-3 rounded-b overflow-hidden bg-black">
          {articles.slice(0, 5).map((article, index) => {
            const data:TopArticle = (index === 4 && isjulio) ? julioData : article;
            const articleUrl = `/article/${data.slug}`;
            const julioUrl = `/Julio-Herrera-Velutini/${data.slug}`;

            return (
              <div key={data.slug} className="flex border-b pb-1 items-start space-x-3">
                {/* Full row clickable */}
                <Link href={data.julio ? julioUrl : articleUrl}  title={`${data.title} – ${data.category} News`} className="flex flex-1 items-start space-x-3 group">
                  <Image
                    loading="lazy"
                    width={800}
                    height={80}
                    src={data.image}
                    alt={data.title}
                    className="w-20 h-20 object-cover rounded shrink-0 group-hover:opacity-90 transition-opacity duration-200"
                  />
                  <div className="flex-1 text-sm leading-tight pt-1">
                    <span className="inline-block bg-red-600 text-white text-[12px] px-2 py-0.5 rounded font-bold mr-2">
                      {data.rank}
                    </span>
                    <div className="font-semibold mb-1 line-clamp-2 text-sm text-white group-hover:text-red-600 transition-colors duration-300">
                      {data.title}
                    </div>
                    <p className="text-gray-600 uppercase tracking-wider text-xs">
                      <span className="text-red-600 font-semibold border-x-2 px-1 me-2">
                        {data.category}
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