// components/MainNav.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import SearchModal from "./SearchModal";
import MegaMenu from "./MegaMenu";
import { Article } from "../types/Article";

interface CategoryArticles {
  [key: string]: Article[];
}

interface MainNavProps {
  categoryArticles: CategoryArticles;
  entertainmentSubArticles?: {
    movies: Article[];
    tv: Article[];
    music: Article[];
  };
  currentPage?: string;
}

const MainNav: React.FC<MainNavProps> = ({
  categoryArticles = {},
  entertainmentSubArticles,
  currentPage = "entertainment",
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<{ [key: string]: boolean }>({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

  const menuItems = [
    "ENTERTAINMENT",
    "CELEBRITY",
    "SCANDALS",
    "DRAMA",
    "LIFESTYLE",
    "TECHNOLOGY",
    "HEALTH",
  ];

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const clearPendingTimeout = (category: string) => {
    if (timeoutRefs.current[category]) {
      clearTimeout(timeoutRefs.current[category]!);
      timeoutRefs.current[category] = null;
    }
  };

  const openDropdown = (category: string) => {
    clearPendingTimeout(category);
    setIsDropdownOpen((prev) => ({ ...prev, [category]: true }));
  };

  const closeDropdown = (category: string) => {
    clearPendingTimeout(category);
    timeoutRefs.current[category] = setTimeout(() => {
      setIsDropdownOpen((prev) => ({ ...prev, [category]: false }));
    }, 100);
  };

  const closeAllDropdowns = () => {
    menuItems.forEach((item) => closeDropdown(item));
  };

  // Close mega menu when clicking outside
  useEffect(() => {
    if (!megaMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav") && !target.closest(".mega-menu")) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [megaMenuOpen]);

  const handleMouseEnter = (category: string) => openDropdown(category);
  const handleMouseLeave = (category: string) => closeDropdown(category);

  return (
    <>
      <nav className="border-y border-black bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-3">

            {/* Left: ALL Button (Large screens only) + Hamburger (Small/Medium) */}
            <div className="flex items-center">
              {/* Desktop "ALL" Button - visible only on lg+ (≥1024px) */}
              <button
                onClick={() => setMegaMenuOpen(true)}
                className="hidden lg:flex items-center space-x-2 bg-black text-white px-3 py-1 hover:bg-red-600 transition-colors duration-300 font-inter font-bold tracking-widest text-sm"
              >
                <span className="material-symbols-outlined text-base">menu</span>
                <span>ALL</span>
              </button>

              {/* Hamburger - visible on sm & md (below 1024px) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-black hover:text-red-600 transition"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-3xl">
                  {mobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>

            {/* Center: Horizontal Menu - visible only on lg+ */}
            <div className="hidden lg:flex items-center justify-center space-x-8 text-sm font-inter font-bold tracking-widest uppercase flex-1">
              {menuItems.map((item) => {
                const isEntertainment = item === "ENTERTAINMENT";
                const articles = categoryArticles[item] || [];
                const hasData = articles.length > 0 || (isEntertainment && entertainmentSubArticles);
                const isActive = item.toLowerCase() === currentPage;
                const href = item === "ENTERTAINMENT" ? "/entertainment" : `/${item.toLowerCase()}`;

                return (
                  <Link
                    key={item}
                    href={href}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-red-600" : "text-black hover:text-red-600"
                    }`}
                    onClick={closeAllDropdowns}
                    onMouseEnter={() => hasData && handleMouseEnter(item)}
                    onMouseLeave={() => hasData && handleMouseLeave(item)}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>

            {/* Right: Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="text-black hover:text-red-600 transition-colors duration-200"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu - shows on <1024px */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-black bg-white absolute top-full left-0 right-0 shadow-lg z-50">
            <div className="px-6 py-6 space-y-5 text-lg font-inter font-bold tracking-widest uppercase">
              {menuItems.map((item) => {
                const href = item === "ENTERTAINMENT" ? "/entertainment" : `/${item.toLowerCase()}`;
                const isActive = item.toLowerCase() === currentPage;

                return (
                  <Link
                    key={item}
                    href={href}
                    className={`block transition ${isActive ? "text-red-600" : "text-black hover:text-red-600"}`}
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
        onSubmit={handleSearch}
      />
    </>
  );
};

export default MainNav;