"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  // Show the preloader for 2.5 seconds, then trigger completion
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[var(--bg-color)] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative flex flex-col items-center">
        {/* Camera Drawing Animation */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-24 h-24 stroke-[var(--text-primary)]"
          fill="none"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Camera Body */}
          <motion.path
            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          {/* Camera Lens */}
          <motion.circle
            cx="12"
            cy="13"
            r="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />
          {/* Lens glare/inner detail */}
          <motion.circle
            cx="12"
            cy="13"
            r="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            fill="var(--accent-color)"
            stroke="none"
          />
        </motion.svg>

        {/* Loading text fading in */}
        <motion.div className="mt-8 overflow-hidden">
          <motion.h2
            className="font-sans text-xs sm:text-sm tracking-[0.5em] uppercase text-[var(--accent-color)]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Loading Studio
          </motion.h2>
        </motion.div>
      </div>

      {/* Camera Flash Effect - flashes right before unmounting */}
      <motion.div
        className="fixed inset-0 bg-white z-[10000] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.4, delay: 2.1, times: [0, 0.2, 1], ease: "circOut" }}
      />
    </motion.div>
  );
}
