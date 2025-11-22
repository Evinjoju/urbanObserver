// components/HeaderClient.tsx
"use client";

import NewsletterSection from "./NewsletterSection";
import MainNav from "./MainNav";
import { Article } from "../types/Article";

interface HeaderClientProps {
  categoryArticles: Record<string, Article[]>;
  entertainmentSubArticles?: {
    movies: Article[];
    tv: Article[];
    music: Article[];
  };
  currentPage: string;
}

const HeaderClient: React.FC<HeaderClientProps> = ({
  categoryArticles,
  entertainmentSubArticles,
  currentPage,
}) => {
  return (
    <>
      <NewsletterSection />
      <MainNav
        categoryArticles={categoryArticles}
        entertainmentSubArticles={entertainmentSubArticles}
        currentPage={currentPage}
      />
    </>
  );
};

export default HeaderClient;