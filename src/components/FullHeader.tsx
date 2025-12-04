// components/FullHeader.tsx 
"use client";
import React from "react";
import Link from "next/link";

interface FullHeaderProps {
  currentPage?: string;
}

const FullHeader: React.FC<FullHeaderProps> = ({
  currentPage = "markets",
}) => {
  const categories = [
    "MARKETS",
    "CRYPTO",
    "BILLIONAIRES",
    "INVESTING",
    "REALESTATE",
    "TECHFINANCE",
    "ECONOMY",
  ];

  return (
    <header className="bg-black border-y border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-4">


          {/* Navigation – Full width on mobile, right-aligned on desktop */}
          <nav className="flex flex-col items-center lg:items-end gap-6">
            {/* Main Categories */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 text-xs sm:text-sm font-bold tracking-widest uppercase">
              {categories.map((cat) => {
                const isActive = cat.toLowerCase() === currentPage;
                const href = cat === "MARKETS" ? "/markets" : `/${cat.toLowerCase()}`;
                return (
                  <Link
                    key={cat}
                    href={href}
                    className={`transition-colors duration-200 ${isActive ? "text-red-600" : "text-white hover:text-red-600"
                      }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-xs font-bold tracking-widest uppercase text-gray-500">
                            
                <a href="/terms" className="hover:text-red-600 transition-colors duration-200">
                  TERMS & CONDITIONS
                </a>
                <a href="/privacy" className="hover:text-red-600 transition-colors duration-200">
                  PRIVACY POLICY
                </a>
                <a href="/about" className="hover:text-red-600 transition-colors duration-200">
                  ABOUT
                </a>

            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default FullHeader;