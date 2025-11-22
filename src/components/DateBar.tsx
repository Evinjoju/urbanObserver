// components/DateBar.tsx (Updated - adds login modal connection)
"use client";
import { useState } from "react";
import LoginModal from "./LoginModal"; // New import

const DateBar = () => {
  // Use current date: November 15, 2025 (Saturday)
  const today = "fri, Nov 21, 2025";
  const [loginOpen, setLoginOpen] = useState(false); // Login modal state

  const handleLogin = (email: string, password: string) => {
    console.log("Login:", { email, password }); // Placeholder - handle login
    // Example: API call or router.push('/dashboard')
  };

  return (
    <div className="w-full border-b border-black text-xs text-black px-6 py-2 flex justify-between items-center bg-white relative">
      <span className="tracking-widest font-semibold">{today}</span>
      <div className="flex items-center gap-4 font-bold tracking-widest">
        <a href="#" className="hover:text-red-600 transition-colors duration-200">ABOUT</a>
        <a href="#" className="hover:text-red-600 transition-colors duration-200">CONTACT</a>
        <span 
          className="border-l border-black pl-4 text-red-600 cursor-pointer" 
          onClick={() => setLoginOpen(true)} // Trigger modal
        >
          MY ACCOUNT
        </span>
      </div>
      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        onSubmit={handleLogin} 
      /> {/* Render login modal */}
    </div>
  );
};

export default DateBar;