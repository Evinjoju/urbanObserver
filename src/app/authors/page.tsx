// app/authors/page.tsx
import DateBar from "../../components/DateBar";
import HeaderClient from "../../components/HeaderClient";
import FullHeader from "../../components/FullHeader";
import FooterSection from "../../components/FooterSection";
import SectionTitle from "../../components/SectionTitle";
import AuthorCard from "../../components/AuthorCard";

export const metadata = {
  title: "Our Authors – Financial Outlook",
  description: "Meet the expert journalists behind Financial Outlook – trusted voices in finance, wealth, and markets.",
};

export default async function AuthorsPage() {
  const authors = await import("../../../public/data/authors.json").then(m => m.default);
  
  const [latestArticlesData, popularArticlesData] = await Promise.all([
        import("../../../public/data/home/home-latest-articles.json").then(m => m.default),
        import("../../../public/data/home/home-popular-articles.json").then(m => m.default),
    ]);

  return (
    <>
      <div className="bg-black text-white min-h-screen font-sans">
        <div className="max-w-7xl mx-auto">
          <DateBar />
          <HeaderClient currentPage="authors" />

          <SectionTitle title="OUR AUTHORS" subCategories={["Trusted Voices in Finance & Wealth"]} />

          {/* All Authors */}
          <section className="py-12 px-6 space-y-24">
            {authors.map((author: any, index: number) => (
              <div key={author.name} className={index % 2 === 1 ? "md:flex-row-reverse" : ""}>
                <AuthorCard author={author} />
              </div>
            ))}
          </section>

          <FullHeader currentPage="authors" />
          <FooterSection latestArticles={latestArticlesData} popularArticles={popularArticlesData}/>
        </div>
      </div>
    </>
  );
}