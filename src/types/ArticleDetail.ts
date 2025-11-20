// types/ArticleDetail.ts  ← New file
export interface ArticleContentBlock {
  type: "heading" | "paragraph" | "image";
  content: string;
}

export interface ArticleData {
  title: string;
  category: string;
  shortdescription?: string;
  heroImage: string;
  author: string;
  authorImage: string;
  date: string;
  readingTime: string;
  content: ArticleContentBlock[];
}