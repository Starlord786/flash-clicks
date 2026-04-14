"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-8 flex items-center p-1 rounded-full cursor-pointer transition-colors duration-500 ease-in-out border z-50 ${
        isDark ? "bg-[#1a1a1a] border-[#333]" : "bg-[#e5e5e5] border-[#ccc]"
      }`}
      aria-label="Toggle Theme"
    >
      <motion.div
        className={`w-6 h-6 rounded-full shadow-md flex items-center justify-center ${
          isDark ? "bg-white" : "bg-[#1a1a1a]"
        }`}
        initial={false}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <svg className="w-3 h-3 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        ) : (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        )}
      </motion.div>
    </button>
  );
}
