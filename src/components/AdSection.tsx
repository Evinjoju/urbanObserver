"use client";
import React from "react";

const AdSection = () => {
    return (
        <section className="py-9 bg-white-100 ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-center">
                    <a href="#" className="block">
                        {/* Sample ad image from Unsplash - Fashion/lifestyle banner cropped to 728x90 */}
                        <img
                            src="https://demo.tagdiv.com/newspaper_urban_observer_pro/wp-content/uploads/2023/09/BlackNP.png"
                            alt="Sponsored Fashion & Lifestyle Ad - Discover Latest Trends"
                            className="w-full max-w-[850px] h-[90px] object-cover border hover:opacity-90 transition-opacity duration-200"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AdSection;