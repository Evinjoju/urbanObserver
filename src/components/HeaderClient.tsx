// components/HeaderClient.tsx
"use client";

import NewsletterSection from "./NewsletterSection";
import MainNav from "./MainNav";
import { Article } from "../types/Article";

interface HeaderClientProps {
  currentPage: string;
}

const HeaderClient: React.FC<HeaderClientProps> = ({
  currentPage,
}) => {
  return (
    <>
      <NewsletterSection />
      <MainNav
        currentPage={currentPage}
      />
    </>
  );
};

export default HeaderClient;