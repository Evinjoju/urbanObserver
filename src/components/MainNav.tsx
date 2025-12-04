// components/MainNav.tsx 
"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchModal from "./SearchModal";
import MegaMenu from "./MegaMenu";

interface MainNavProps {
  currentPage?: string;
}

const MainNav: React.FC<MainNavProps> = ({ currentPage = "markets" }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    "MARKETS",
    "CRYPTO",
    "BILLIONAIRES",
    "INVESTING",
    "REALESTATE",
    "TECHFINANCE",
    "ECONOMY",
  ];

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <>
      <nav className="border-y border-white bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            {/* Left: ALL Button (Large screens only) + Hamburger (Small/Medium) */}
            <div className="flex items-center">
              {/* Desktop "ALL" Button */}
              <button
                onClick={() => setMegaMenuOpen(true)}
                className="hidden lg:flex items-center space-x-2 bg-white text-black px-3 py-1 hover:bg-red-600 transition-colors duration-300 font-bold uppercase tracking-widest text-sm"
              >
                <span className="material-symbols-outlined text-base">menu</span>
                <span>ALL</span>
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white hover:text-red-600 transition"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-3xl">
                  {mobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>

            {/* Center: Horizontal Menu */}
            <div className="hidden lg:flex items-center justify-center space-x-8 text-sm  tracking-widest uppercase flex-1">
              {menuItems.map((item) => {
                const isActive = currentPage === item.toLowerCase();
                const href = item === "MARKETS" ? "/markets" : `/${item.toLowerCase()}`;

                return (
                  <Link
                    key={item}
                    href={href}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-red-600" : "text-white hover:text-red-600"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>

            {/* Right: Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="text-white hover:text-red-600 transition-colors duration-200"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-black bg-red-900 absolute top-full left-0 right-0 shadow-lg z-50">
            <div className="px-6 py-6 space-y-5 tracking-widest uppercase">
              {menuItems.map((item) => {
                const href = item === "MARKETS" ? "/markets" : `/${item.toLowerCase()}`;
                const isActive = currentPage === item.toLowerCase();

                return (
                  <Link
                    key={item}
                    href={href}
                    className={`block transition ${isActive ? "text-red-400" : "text-white hover:text-red-600"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
};

export default MainNav;