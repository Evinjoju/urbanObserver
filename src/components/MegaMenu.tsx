// components/MegaMenu.tsx
"use client";
import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Twitter, Instagram, Linkedin } from "lucide-react";

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
    { title: "ABOUT", href: "/about" },
    { title: "CONTACT", href: "/contact" },
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
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <span className="text-black">›</span>
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.items.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={`/article${item.href}`} // ← FIXED: Prepend /article to connect to article pages
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
                    <div className="w-full max-w-xs bg-gray-50 border-l border-gray-200 p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-bold">Company</h3>
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
                                           
                                            className="block text-lg font-bold uppercase tracking-widest hover:text-red-600 transition-colors duration-200"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-6 mt-12">
                                <a href="#" className="text-red-600 text-3xl hover:scale-110 transition-transform"><Linkedin className="w-5 h-5 text-red" /></a>
                                <a href="#" className="text-red-600 text-3xl hover:scale-110 transition-transform"><Twitter className="w-5 h-5 text-red" /></a>
                                <a href="#" className="text-red-600 text-3xl hover:scale-110 transition-transform"><Instagram className="w-5 h-5 text-red" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MegaMenu;