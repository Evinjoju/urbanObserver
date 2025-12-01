// components/AdSection.tsx — 100% Responsive Ad Banner
"use client";
import Image from "next/image";
import Link from "next/link";

const AdSection = () => {
  return (
    <section className="py-6 bg-black">
      <div className="max-w-7xl mx-auto px-0 sm:px-2 lg:px-0">
        <div className="flex justify-center">
          <Link href="#" className="block w-full">
            <Image
              src="/images/intelADD4.webp"
              alt="Sponsored Ad - Intel Latest Processor"
              width={1050}
              height={100}
              priority
              className="w-full h-auto max-h-32 object-contain sm:object-cover hover:opacity-90 transition-opacity duration-300"
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1050px"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdSection;