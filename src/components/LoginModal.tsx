// components/LoginModal.tsx (New - login popup modal like NewsletterModal)
"use client";
import React from "react";
import { X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onSubmit(email, password);
      setEmail("");
      setPassword("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white border-2 border-black max-w-md w-full relative overflow-hidden">
        <div className="flex justify-between items-center p-4">
          <h2 className="font-bold text-lg uppercase tracking-widest">Get into your account</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 uppercase font-bold tracking-widest hover:bg-red-700 transition-colors rounded"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;