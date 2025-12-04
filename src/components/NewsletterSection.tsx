// components/NewsletterSection.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

const NewsletterSection = () => {

  return (
    <section className="border-y border-black py-4 sm:py-6 md:py-6 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-row justify-between items-center gap-6">

          {/* Center Logo & Tagline - Always visible, scales nicely */}
          <div className="flex-1 text-center">
            <Link href="/" className="inline-block">
              <Image
                src="/images/fin-LOGO2.svg" // ← Your SVG file path
                alt="financialoutlook Logo"
                width={500} // ← Adjust to your SVG width
                height={100} // ← Adjust to your SVG height
                className="mx-auto h-12 sm:h-14 md:h-16 lg:h-20" // ← Responsive height
                priority // ← Preloads for FCP
              />
            </Link>
            <p className="text-red-600 text-xs sm:text-sm md:text-base tracking-widest   uppercase">
              Wealth & Markets Online Magazine
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default NewsletterSection;