// components/SubscribeBanner.tsx
import React from "react";
import Link from "next/link";

const SubscribeBanner: React.FC = () => {
  return (
    <section className="border m-8 border-black bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-2 text-center lg:text-left">
           <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.3em] uppercase"
            style={{
              WebkitTextStroke: "2.5px black",
              color: "transparent",
              letterSpacing: "0.0em",
            }}
          >
              URBANOBSERVER
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto lg:mx-0 mb-6"></div>
            <p className="text-lg md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Each story in our ever-growing library can be accessed through our membership program.{" "}
              <strong>Subscribe and receive instantaneous and unlimited access!</strong>
            </p>
          </div>

          {/* Right: Subscribe Button */}
          <div className=" border-l flex justify-center lg:justify-end">
            <Link
              href="/pricingPlan"
              className="bg-red-600 text-white px-6 py-3  font-black uppercase tracking-wider hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeBanner;