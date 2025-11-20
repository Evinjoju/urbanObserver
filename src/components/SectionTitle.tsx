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
    <section className="py-6 sm:py-8 md:py-12 border-b border-t-2 px-4 sm:px-6 bg-gray-100">
      <div className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-4xl tracking-widest uppercase text-black mb-4 sm:mb-6">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm font-bold tracking-widest text-black">
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