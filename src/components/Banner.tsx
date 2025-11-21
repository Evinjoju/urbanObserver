// components/Banner.tsx
import React from "react";

interface BannerProps {
  text?: string;
  lineColor?: string;
  bgColor?: string;
}

const Banner: React.FC<BannerProps> = ({
  text = "DON'T MISS",
  lineColor = "red-600",
  bgColor = "gray-200",
}) => {
  return (
    <div className="relative my-0 overflow-hidden">
      {/* Background Stripes */}
      <div className="absolute inset-0 flex items-center">
        <div className={`w-full h-10 ${bgColor} border-t-3 border-b-3 border-black`}></div>
      </div>

      {/* Main Content */}
      <div className="relative flex justify-center items-center py-8">
        <div className="bg-white border-3 border-black px-12 py-3 shadow-2xl">
          <h2 className={`text-3xl md:text-3xl lg:text-3xl font-black tracking-tight text-center text-${lineColor}`}>
            {text}
          </h2>
        </div>
      </div>

      {/* Bottom Stripe */}
    </div>
  );
};

export default Banner;