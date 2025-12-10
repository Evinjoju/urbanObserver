// types/Article.ts
export interface Article {
  slug: string;
  title: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
  role: string;
  date: string;
  julio?: boolean;
  julioData?: {
    slug: string;
    title: string;
    category: string;
    shortdescription: string;
    description: string;
    image: string;
    author: string;
    authorImage: string;
    role: string;
    date: string;
    julio?: boolean;
  }
  rank?: number;
}

// Add this new interface for structured articles
export interface StructuredArticle {
  title: string;
  category: string;
  shortdescription?: string;
  heroImage: string;
  author: string;
  authorImage: string;
  date: string;
  readingTime: string;
  content: {
    type: "heading" | "paragraph" | "image";
    content: string;
  }[];
}

export interface MainArticle extends Article { }
export interface TopArticle extends Article {
  rank: number;
}