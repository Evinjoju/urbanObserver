// components/SearchModal.tsx
"use client";
import React, { useRef, useEffect } from "react";
import { X } from "lucide-react";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (query: string) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [query, setQuery] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSubmit(query);
            setQuery("");
            onClose();
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`} onClick={handleOverlayClick}>
            <div className={`w-full max-w-md sm:max-w-2xl lg:max-w-4xl p-6 sm:p-8 bg-white border-4 border-black transition-all duration-300 ease-in-out transform ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"}`}>
                <div className="w-full bg-white border-4 border-black overflow-hidden flex items-center">
                    <form onSubmit={handleSubmit} className="flex w-full">
                        <input
                            ref={inputRef}
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search articles..."
                            className="flex-1 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-7 outline-none text-base sm:text-lg lg:text-xl placeholder-gray-500 font-medium"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-red-600 text-white px-6 py-4 sm:px-8 sm:py-5 lg:px-12 lg:py-7 uppercase font-bold tracking-widest text-xs sm:text-sm lg:text-base hover:bg-red-700 transition-colors duration-200 whitespace-nowrap"
                        >
                            SEARCH
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;