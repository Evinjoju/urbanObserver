// components/NewsletterModal.tsx
"use client";
import React from "react";
import { X } from "lucide-react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [acceptedPolicy, setAcceptedPolicy] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (acceptedPolicy && email) {
      onSubmit(email);
      setEmail("");
      setAcceptedPolicy(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white border-2 border-black max-w-md w-full relative overflow-hidden">
        <div className="flex justify-between items-center p-4">
          <h2 className="font-bold text-lg uppercase tracking-widest">Subscribe to Newsletter</h2>
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
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 uppercase font-bold tracking-widest hover:bg-red-700 transition-colors rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            I WANT IN →
          </button>
          <label className="flex items-center space-x-2 text-xs text-gray-600">
            <input
              type="checkbox"
              checked={acceptedPolicy}
              onChange={(e) => setAcceptedPolicy(e.target.checked)}
              className="rounded"
              required
            />
            <span>I've read and accept the Privacy Policy.</span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;