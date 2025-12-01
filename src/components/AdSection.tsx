"use client";
import Image from "next/image";

const AdSection = () => {
    return (
        <section className="py-6  bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-center">
                    <a href="#" className="block">
                        {/* Sample ad image from Unsplash - Fashion/lifestyle banner cropped to 728x90 */}
                        <Image
                            priority
                            width={80}
                            height={80}
                            src="/images/intelADD4.webp"
                            alt="Sponsored Fashion & Lifestyle Ad - Discover Latest Trends"
                            className="w-full max-w-[1050px] h-[100px] object-cover border hover:opacity-90 transition-opacity duration-200"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AdSection;