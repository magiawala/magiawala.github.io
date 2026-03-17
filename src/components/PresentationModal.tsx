import { useState, useRef, useEffect } from "react";
import { MonitorPlay, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetRoute: string;
  themeColor?: string;
}

const PresentationModal = ({ isOpen, onClose, targetRoute, themeColor = "#731826" }: PresentationModalProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Handle Escape key and outside click
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Optional: Prevent background scrolling when modal is open
      document.body.style.overflow = "hidden";
      
      // Focus input securely
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Reset state on close
  useEffect(() => {
    if (!isOpen) {
      setPassword("");
      setError(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "design2026") {
      navigate(targetRoute);
      onClose();
    } else {
      setError(true);
      // Automatically hide error after 3 seconds
      setTimeout(() => setError(false), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
            <MonitorPlay className="w-6 h-6" style={{ color: themeColor }} />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Project Presentation</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            This project includes a detailed slide walkthrough used during interviews.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              ref={inputRef}
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border cursor-text border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-1 focus:border-transparent transition-all"
              style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
            />
            {error && (
              <p className="text-red-500 text-sm mt-2 ml-1 animate-in fade-in slide-in-from-top-1">
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 text-white rounded-xl font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: themeColor }}
          >
            View Slides
          </button>
        </form>
      </div>
    </div>
  );
};

export default PresentationModal;
