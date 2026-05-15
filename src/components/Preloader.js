"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Preloader({ onComplete }) {
  // Show the preloader until the flash peaks (2.4s), then trigger completion
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[var(--bg-color)] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 1.5, filter: "blur(15px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-80 h-80 sm:w-[600px] sm:h-[600px] flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="w-full h-full relative flex items-center justify-center"
          >
            {/* Cinematic Glow behind the logo */}
            <div className="absolute inset-0 bg-[var(--accent-color)]/20 blur-[80px] rounded-full scale-50 animate-pulse" />
            
            <Image
              src="/images/Logo.png"
              alt="FlashClicks Logo"
              fill
              className="object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Camera Flash Effect - flashes to white, then the whole preloader fades out revealing the site */}
      <motion.div
        className="fixed inset-0 bg-white z-[10000] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 2.1, ease: "easeIn" }}
      />
    </motion.div>
  );
}
