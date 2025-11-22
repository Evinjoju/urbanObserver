// components/MainArticleDetail.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { ArticleData } from "../types/ArticleDetail";

interface ArticleContentBlock {
    type: "heading" | "paragraph" | "image";
    content: string; // heading text, paragraph text, or image URL
}


interface MainArticleDetailProps {
    article: ArticleData;
}

const MainArticleDetail: React.FC<MainArticleDetailProps> = ({ article }) => {
    return (
        <article className="lg:col-span-4">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-8">
                {article.title}
            </h1>

            {/* Category Badge */}
            <div className="mb-6">
                <span className="inline-block bg-red-600 text-white px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                    {article.category}
                </span>
            </div>

            {/* Author Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-10 text-sm uppercase tracking-wider">
                <div className="flex items-center gap-3">
                    <img
                        src={article.authorImage}
                        alt={article.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="font-bold">{article.author}</span>
                </div>
                <span>•</span>
                <time>{article.date}</time>
                <span>•</span>
                <span>{article.readingTime}</span>
            </div>

            {/* Structured Content from JSON */}
            <div className="prose prose-lg max-w-none space-y-12">
                {article.content.map((block, index) => {
                    if (block.type === "image") {
                        return (
                            <div key={index} className="relative w-full h-96 md:h-[500px] overflow-hidden  md:mx-0">
                                <Image
                                    src={block.content}
                                    alt={`Article image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        );
                    }

                    if (block.type === "heading") {
                        return (
                            <h2 key={index} className="text-3xl font-black mt-12 first:mt-0">
                                {block.content}
                            </h2>
                        );
                    }

                    return (
                        <p key={index} className="text-lg leading-relaxed text-black">
                            {block.content}
                        </p>
                    );
                })}
            </div>
        </article>
    );
};

export default MainArticleDetail;
export type { ArticleData };