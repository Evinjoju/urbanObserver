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
    { name: "MARKETS", href: "/markets", title: "Markets – Stock Market News & Analysis 2025" },
    { name: "CRYPTO", href: "/crypto", title: "Crypto – Bitcoin, Ethereum & Blockchain News 2025" },
    { name: "BILLIONAIRES", href: "/billionaires", title: "Billionaires – Net Worth, Forbes List & Wealth News" },
    { name: "INVESTING", href: "/investing", title: "Investing – Stocks, ETFs & Strategies 2025" },
    { name: "REAL ESTATE", href: "/realestate", title: "Real Estate – Property Markets & Investment Trends" },
    { name: "TECH & FINANCE", href: "/tech-finance", title: "Tech & Finance – Fintech, Startups & VC News" },
    { name: "ECONOMY", href: "/economy", title: "Economy – GDP, Inflation & Global Markets" },
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
                const isActive = currentPage === cat.href.slice(1);
                return (
                  <Link
                   key={cat.name}
                    href={cat.href}
                    title={cat.title}
                    className={`transition-colors duration-200 ${isActive ? "text-red-600" : "text-white hover:text-red-600"
                      }`}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-xs font-bold tracking-widest uppercase text-gray-500">

                <a href="/terms" title="Terms & Conditions – Legal Agreement" className="hover:text-red-600 transition-colors duration-200">
                  TERMS & CONDITIONS
                </a>
                <a href="/privacy" title="Privacy Policy – How We Protect Your Data" className="hover:text-red-600 transition-colors duration-200">
                  PRIVACY POLICY
                </a>
                <a href="/about" title="About Us – Financial Outlook Team & Mission" className="hover:text-red-600 transition-colors duration-200">
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