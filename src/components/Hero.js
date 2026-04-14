"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", // Wedding
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop", // Fashion
  "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop", // Portrait
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Cinematic Letter by letter reveal strategy
  const titleText = "FlashClicks.";
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.8 } 
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[var(--bg-color)]">
      {/* Background Images with Slow Motion Ken Burns effect */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ 
            opacity: { duration: 2, ease: "easeInOut" },
            scale: { duration: 10, ease: "linear" }
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dynamic Overlay with Cinematic Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-color)] via-transparent to-[var(--bg-color)] opacity-90 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        
        {/* Luxury Glassmorphism Container with Gold Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-8 py-16 md:px-24 md:py-20 border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-md shadow-[0_0_100px_rgba(201,160,99,0.15)] rounded-2xl flex flex-col items-center max-w-4xl overflow-hidden group"
        >
          {/* Subtle animated light sweep on hover */}
          <motion.div 
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--text-primary)]/10 to-transparent skew-x-12 pointer-events-none" 
          />

          {/* Letter by Letter Title Reveal */}
          <motion.h1 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl md:text-8xl lg:text-9xl text-[var(--text-primary)] font-light tracking-wide mb-8 flex overflow-hidden justify-center items-center"
          >
            {titleText.split('').map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                className={index >= 5 ? "font-sans font-thin text-[var(--text-secondary)]" : "text-[var(--text-primary)]"}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.6, ease: "easeOut" }}
            className="text-[#c9a063] font-sans text-xs md:text-sm lg:text-base tracking-[0.4em] uppercase mb-12 text-center max-w-[600px] leading-relaxed"
          >
            Capturing the profound beauty of fleeting moments
          </motion.p>
          
          {/* Animated Interactive Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            {/* Fixed links to direct to correct sections (#services and #contact) */}
            <motion.a 
              href="#services" 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden group px-10 py-5 text-xs tracking-[0.2em] uppercase text-[var(--text-primary)] border border-[var(--text-primary)] hover:border-[var(--accent-color)] transition-colors duration-500 w-full sm:w-auto text-center rounded-sm"
            >
              <span className="relative z-10 group-hover:text-[var(--bg-color)] transition-colors duration-500 font-semibold">Our Expertise</span>
              <div className="absolute inset-0 bg-[var(--accent-color)] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </motion.a>
            
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden group px-10 py-5 text-xs tracking-[0.2em] uppercase text-[var(--bg-color)] bg-[var(--text-primary)] border border-[var(--text-primary)] hover:border-[var(--accent-color)] transition-colors duration-500 w-full sm:w-auto text-center rounded-sm"
            >
              <span className="relative z-10 group-hover:text-[var(--bg-color)] transition-colors duration-500 font-semibold">Book Studio</span>
              <div className="absolute inset-0 bg-[var(--accent-color)] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Redesigned Minimal Luxury Vertical Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6"
      >
        <span className="text-[var(--text-secondary)] text-[10px] tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl' }}>Explore</span>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-20 bg-gradient-to-b from-[var(--text-primary)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
