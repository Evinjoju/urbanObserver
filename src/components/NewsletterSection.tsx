// components/NewsletterSection.tsx
"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import NewsletterModal from "./NewsletterModal";
import Link from "next/link";
import Image from "next/image";

const NewsletterSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubscribe = (email: string) => {
    console.log("Subscribed with email:", email);
    alert("Subscribed successfully! Thank you.");
  };

  return (
    <section className="border-y border-black py-4 sm:py-6 md:py-8 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-row justify-between items-center gap-6">

          {/* Newsletter Button - Hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center group cursor-pointer">
            <Mail
              className="text-4xl md:text-6xl text-white group-hover:text-red-600 transition-colors duration-300"
            />
            <button
              onClick={() => setModalOpen(true)}
              className=" tracking-widest text-xs uppercase px-4 py-3 
                         text-white hover:text-red-600 
                         transition-all duration-300 ease-in-out mt-2"
            >
              NEWSLETTER
            </button>
          </div>

          {/* Center Logo & Tagline - Always visible, scales nicely */}
          <div className="flex-1 text-center">
            <Link href="/" className="inline-block">
              <Image
                src="/images/fin-logo1.svg" // ← Your SVG file path
                alt="UrbanObserver Logo"
                width={500} // ← Adjust to your SVG width
                height={100} // ← Adjust to your SVG height
                className="mx-auto h-12 sm:h-16 md:h-20 lg:h-24" // ← Responsive height
                priority // ← Preloads for FCP
              />
            </Link>
            <p className="text-red-600 text-xs sm:text-sm md:text-base tracking-widest   uppercase">
              Gossip & Lifestyle Online Magazine
            </p>
          </div>

          {/* Pricing Plans Button - Hidden on mobile */}
          <div className="hidden sm:block">
            <a
              href="/pricingPlan"
              className=" tracking-widest text-xs uppercase border-2 border-white 
                         px-3 py-2 hover:border-red-600 hover:text-red-600 text-white 
                         transition-all duration-300 ease-in-out inline-block"
            >
              PRICING PLANS
            </a>
          </div>
        </div>
      </div>

      {/* Mobile-only Newsletter Trigger (Optional - if you want easy access) */}
      {/* Remove this block completely if you want ZERO newsletter access on mobile */}
      {/* 
      <div className="sm:hidden text-center mt-4">
        <button
          onClick={() => setModalOpen(true)}
          className="text-xs uppercase tracking-widest font-bold text-red-600 underline"
        >
          Subscribe to Newsletter
        </button>
      </div>
      */}

      <NewsletterModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubscribe}
      />
    </section>
  );
};

export default NewsletterSection;