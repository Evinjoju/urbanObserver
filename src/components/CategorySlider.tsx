// // components/EntertainmentSlider.tsx (Updated - sub-nav only for hasSubTabs=true, next/prev always)
// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { Article } from "../types/Article";
// import { ArrowLeft,ArrowRight } from "lucide-react";

// interface SubArticles {
//   movies: Article[];
//   tv: Article[];
//   music: Article[];
// }

// interface EntertainmentSliderProps {
//   articles?: Article[]; // For simple categories (e.g., CELEBRITY, etc.)
//   subArticles?: SubArticles; // For ENTERTAINMENT with tabs
//   hasSubTabs?: boolean; // true only for ENTERTAINMENT
// }

// const EntertainmentSlider: React.FC<EntertainmentSliderProps> = ({ 
//   articles = [], 
//   subArticles, 
//   hasSubTabs = false 
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState<'movies' | 'tv' | 'music'>('music');
//   const cardsPerSlide = 5;
//   const slideStep = 3;
//   const currentArticles = hasSubTabs 
//     ? (activeTab === 'music' ? subArticles?.music || [] : activeTab === 'movies' ? subArticles?.movies || [] : subArticles?.tv || []) 
//     : articles;
//   const totalSlides = Math.ceil((currentArticles.length - cardsPerSlide + 1) / slideStep) || 1;

//   // Reset index on tab change
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [activeTab, hasSubTabs]);

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalSlides);
//   };

//   const startIndex = currentIndex * slideStep;
//   const visibleArticles = currentArticles.slice(startIndex, startIndex + cardsPerSlide);

//   const tabs = hasSubTabs ? [
//     { key: 'movies' as const, label: 'MOVIES' },
//     { key: 'tv' as const, label: 'TV SHOWS' },
//     { key: 'music' as const, label: 'MUSIC' },
//   ] : [];

//   return (
//     <div className=" relative pt-4 w-full border-b-3 bg-white overflow-hidden">
//       {/* Slider Container - 5 cards horizontal, like ArticleGrid but flex */}
//       <div className="flex justify-center py-0 px-6 gap-2"> {/* gap-0 like grid */}
//         {/* Clickable Cards - Styled exactly like ArticleGrid */}
//         {visibleArticles.map((article, i) => (
//           <Link
//             key={`${activeTab}-${article.slug}-${i}`}
//             href={`/article/${article.slug}`}
//             className={`relative h-62 overflow-hidden shrink-0 ${i < visibleArticles.length - 1 ? " border-black" : ""}`} // border-r like grid, no border-b
//           >
//             <img
//               src={article.image}
//               alt={article.title}
//               className="mx-auto block w-60 h-62 object-cover hover:opacity-90 transition-opacity duration-200" // w-full instead of w-70 for fit
//             />
//             {/* Overlay - Matched ArticleGrid: gradient bg, title, category + author */}
//             <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/90  from-white/90 via-white/90 "> {/* Fixed bg-gradient-to-t */}
//               <h3 className="font-bold text-xs leading-tight mb-1 line-clamp-2 text-center text-black"> {/* text-black like grid */}
//                 {article.title}
//               </h3>
//               <p className="text-xs text-black opacity-90 text-center">
//                 <span className="text-red-400 font-semibold border-x-2 px-1 me-2">{article.category}</span> {article.author}
//               </p>
//             </div>
//           </Link>
//         ))}
//         {/* Filler if <5, styled like grid card */}
//         {visibleArticles.length < cardsPerSlide &&
//           Array.from({ length: cardsPerSlide - visibleArticles.length }).map((_, i) => (
//             <div
//               key={`filler-${i}`}
//               className={`relative h-64 overflow-hidden shrink-0 bg-gray-100 ${i < cardsPerSlide - visibleArticles.length - 1 ? "border-r border-black" : ""}`} // Fixed h-64
//             >
//               <div className="mx-auto  w-full h-full flex items-center justify-center">
//                 <p className="text-xs text-gray-400 italic uppercase tracking-wider">Coming Soon</p>
//               </div>
//               {/* Overlay placeholder */}
//               <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-white/90 via-white/90 to-transparent"> {/* Fixed bg-gradient-to-t */}
//                 <h3 className="font-bold text-xs leading-tight mb-1 line-clamp-2 text-center text-black">Placeholder</h3>
//                 <p className="text-xs text-black opacity-90 text-center">
//                   <span className="text-red-400 font-semibold border-x-2 px-1 me-2">CATEGORY</span> Author
//                 </p>
//               </div>
//             </div>
//           ))}
//       </div>

//       {/* Navigation Div Below Contents - < > buttons at bottom right (always if totalSlides > 1) */}
//       {totalSlides > 1 && (
//         <div className="flex justify-center py-1 mb-3 px-6">
//           <div className="flex space-x-2">
//             <button
//               onClick={goToPrev}
//               className="text-black p-2 rounded transition-colors duration-300"
//               aria-label="Previous slide"
//             >
//               <ArrowLeft></ArrowLeft>
              
//             </button>
//             <button
//               onClick={goToNext}
//               className="text-black p-2 rounded transition-colors duration-300"
//               aria-label="Next slide"
//             >
//               <ArrowRight></ArrowRight>
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Sub-Navigation Tabs - MOVIES | TV SHOWS | MUSIC below next/prev (only if hasSubTabs) */}
//       {hasSubTabs && (
//         <div className="flex justify-center py-3 px-6 bg-white text-center">
//           <div className="flex space-x-8 text-sm font-bold tracking-widest uppercase">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.key}
//                 onClick={() => setActiveTab(tab.key)}
//                 className={`transition-colors duration-200 hover:text-red-600 ${
//                   activeTab === tab.key ? "text-red-600 border-b-2 border-red-600 pb-1" : "text-black"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EntertainmentSlider;