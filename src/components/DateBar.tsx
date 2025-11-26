// components/DateBar.tsx (Hidden on Mobile)
"use client";
import { useState } from "react";
import LoginModal from "./LoginModal";

const DateBar = () => {
  const today = "fri, Nov 21, 2025";
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLogin = (email: string, password: string) => {
    console.log("Login:", { email, password });
  };

  return (
    <div className="hidden sm:flex w-full border-b border-white text-xs text-white px-6 py-2 justify-between items-center bg-black relative">
      <span className="tracking-widest ">{today}</span>
      <div className="flex items-center gap-4  tracking-widest">
        <a href="#" className="hover:text-red-600 transition-colors duration-200">ABOUT</a>
        <a href="#" className="hover:text-red-600 transition-colors duration-200">CONTACT</a>
        <span 
          className="border-l border-black pl-4 text-red-600 cursor-pointer" 
          onClick={() => setLoginOpen(true)}
        >
          MY ACCOUNT
        </span>
      </div>
      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        onSubmit={handleLogin} 
      />
    </div>
  );
};

export default DateBar;