// components/SectionTitle.tsx (Fully Responsive)
"use client";
import React from "react";

interface SectionTitleProps {
  title?: string;
  subCategories?: string[];
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title = "ENTERTAINMENT", 
  subCategories = ["MOVIES", "MUSIC", "TV SHOWS"] 
}) => {
  return (
    <section className="py-6 sm:py-4 md:py-6 border-b border-t-2 px-4 sm:px-6 bg-black">
      <div className="text-center">
        <div className="font-display text-2xl sm:text-2xl md:text-3xl tracking-widest uppercase text-white mb-3 sm:mb-3">
          {title}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm font-bold tracking-widest text-white">
          {subCategories.map((cat) => (
            <a key={cat} href="#" className="hover:text-red-600 transition-colors duration-200">
              {cat}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;