// components/FooterSection.tsx
"use client";
import React from "react";
import { Facebook, Instagram, Youtube, } from "lucide-react";
import { Article } from "../types/Article";

interface FooterSectionProps {
  latestArticles: Article[];
  popularArticles: Article[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ latestArticles, popularArticles }) => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <footer className="bg-black border-t border-gray-300 py-6">
      <div className=" mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wider">ABOUT US</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Founded in 2025, our news organization was born from a simple yet powerful belief: that quality journalism matters.</p>
            <div className="flex space-x-2">
              <div className="bg-gray-900 rounded p-1">
                <a href="https://www.facebook.com/financialoutlook" className="text-blue-600 text-3xl hover:scale-110 transition-transform"><Facebook className="w-5 h-5 text-blue-600" /></a>
              </div>

              <div className="bg-gray-900 rounded p-1 transition-colors">
                <a
                  href="https://substack.com/@financialoutlook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-110 transition-transform"
                >
                  <img
                    src="/images/substack.webp"
                    alt="Substack"
                    className="w-5 h-5 object-contain"
                  />
                </a>
              </div>
              
              <div className="bg-gray-900 rounded p-1">
                <a href="https://www.youtube.com/@financialoutlook-m9i" className="text-red-600 text-3xl hover:scale-110 transition-transform"><Youtube className="w-5 h-5 text-red-700" /></a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wider">LATEST ARTICLES</h3>
            {latestArticles.map((article, i) => (
              <div key={i} className="text-sm space-y-1">
                <h4 className="font-semibold line-clamp-2">{article.title}</h4>
                <p className="text-gray-400 uppercase tracking-wider text-xs">
                  [{article.category}] {article.date}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wider">MOST POPULAR</h3>
            {popularArticles.map((article, i) => (
              <div key={i} className="text-sm space-y-1">
                <h4 className="font-semibold line-clamp-2">{article.title}</h4>
                <p className="text-gray-400 uppercase tracking-wider text-xs">
                  [{article.category}] {article.date}
                </p>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-black-300 text-center text-sm text-gray-200">
          <p>&copy; Copyright ©2025 Financial Outlook</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;