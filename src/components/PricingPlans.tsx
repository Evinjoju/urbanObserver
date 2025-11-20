// components/PricingPlans.tsx
"use client";
import React, { useState } from "react";
import { Check, X } from "lucide-react";

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(true);

  const freeFeatures = [
    "Etiam est nibh, lobortis sit",
    "Praesent euismod ac",
    "Ut mollis pellentesque tortor",
    "Nullam eu erat condimentum",
  ];

  const freeDisabled = [
    "Donec quis est ac felis",
    "Orci varius natoque dolor",
  ];

  const premiumFeatures = [
    "Etiam est nibh, lobortis sit",
    "Praesent euismod ac",
    "Ut mollis pellentesque tortor",
    "Nullam eu erat condimentum",
    "Donec quis est ac felis",
    "Orci varius natoque dolor",
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Free Plan */}
        <div className="border-2 border-black rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Free limited access</h2>
          <div className="border-t border-black mb-6"></div>

          <div className="mb-8">
            <p className="text-6xl font-bold text-red-600">FREE</p>
            <p className="text-xl text-gray-600">/ forever</p>
          </div>

          <div className="border-t border-black mb-6"></div>

          <ul className="space-y-4 text-left">
            {freeFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-gray-800">{feature}</span>
              </li>
            ))}
            {freeDisabled.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 opacity-50">
                <X className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-black mt-8"></div>
        </div>

        {/* Premium Plan */}
        <div className="border-2 border-black rounded-lg p-8 text-center relative">
          <h2 className="text-2xl font-bold mb-2">Member full access</h2>
          <div className="border-t border-black mb-6"></div>

          <div className="mb-8">
            <p className="text-6xl font-bold text-red-600">
              ${isYearly ? "49.99" : "9.99"}
            </p>
            <p className="text-xl text-gray-600">/ {isYearly ? "year" : "month"}</p>
          </div>

          <div className="border-t border-black mb-6"></div>

          <ul className="space-y-4 text-left mb-8">
            {premiumFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-gray-800">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className={`font-bold ${isYearly ? "text-black" : "text-gray-400"}`}>
              YEARLY PRICING
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-gray-300 rounded-full transition-all duration-300"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white border-2 border-black rounded-full transition-transform duration-300 ${
                  isYearly ? "translate-x-6" : ""
                }`}
              >
                <div className="absolute inset-1 bg-red-600 rounded-full"></div>
              </div>
            </button>
            <span className={`font-bold ${!isYearly ? "text-black" : "text-gray-400"}`}>
              MONTHLY PRICING
            </span>
          </div>

          <div className="border-t border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;