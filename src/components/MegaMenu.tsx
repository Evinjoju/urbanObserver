// components/MegaMenu.tsx
"use client";
import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Facebook, Instagram, Youtube } from "lucide-react";

import menuData from "../../public/data/megaMenuSections.json";

interface MenuItem {
    title: string;
    href: string;
}

interface MenuSection {
    title: string;
    items: MenuItem[];
}

const companyLinks = [
    { title: "OUR AUTHORS", href: "/authors" },
    { title: "TERMS & CONDITIONS", href: "/terms" },
    { title: "PRIVACY POLICY", href: "/privacy" },
    { title: "ABOUT", href: "/about" },
];

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Mega Menu Panel - Slides down from top */}
            <div
                className={`fixed inset-x-0 top-0 z-50 bg-white shadow-2xl transform transition-all duration-500 ease-out ${isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex">
                    {/* Main Menu Grid — Fixed: each column grows independently */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 overflow-y-auto max-h-screen scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]">
                        {menuData.map((section: MenuSection) => (
                            <div
                                key={section.title}
                            >
                                <div className="text-lg text-black font-bold mb-4 flex items-center gap-2">
                                    <span className="text-black">›</span>
                                    {section.title}
                                </div>
                                <ul className="space-y-3">
                                    {section.items.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={`${item.href}`} // ← FIXED: Prepend /article to connect to article pages
                                                title={item.title}
                                                onClick={onClose}
                                                className="block text-sm text-gray-700 hover:text-red-600 transition-colors duration-200 line-clamp-2 leading-tight"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right Sidebar - unchanged */}
                    <div className="w-full max-w-xs text-black/90 bg-gray-50 border-l border-gray-200 p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h1 className="text-xl font-bold">FINANCIAL OUTLOOK</h1>
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-red-600 transition-colors"
                                >
                                    <X size={28} />
                                </button>
                            </div>
                            <ul className="space-y-5">
                                {companyLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            title={link.title}
                                            className="block text-lg font-bold uppercase tracking-widest hover:text-red-600 transition-colors duration-200"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-6 mt-12">
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/financialoutlook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 p-3 rounded-lg hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-600/20"
                                    aria-label="Follow Financial Outlook on Facebook"
                                >
                                    <Facebook className="w-6 h-6 text-blue-600" />
                                </a>

                                {/* Substack */}
                                <a
                                    href="https://substack.com/@financialoutlook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 p-3 rounded-lg hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
                                    aria-label="Subscribe to Financial Outlook on Substack"
                                >
                                    <img
                                        src="/images/substack.webp"
                                        alt="Substack"
                                        className="w-6 h-6 object-contain"
                                    />
                                </a>

                                {/* YouTube */}
                                <a
                                    href="https://www.youtube.com/@financialoutlook-m9i"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 p-3 rounded-lg hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-600/30"
                                    aria-label="Subscribe to Financial Outlook on YouTube"
                                >
                                    <Youtube className="w-6 h-6 text-red-600" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MegaMenu;