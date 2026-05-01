"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  
  // Lightweight Parallax — only Y translation (GPU composited, no layout)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

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
    <section 
      ref={containerRef} 
      id="home" 
      className="relative h-screen w-full flex items-center justify-center bg-[#0a0a0a]"
      style={{
        '--bg-color': '#0a0a0a',
        '--text-primary': '#f8f6f0',
        '--text-secondary': 'rgba(255, 255, 255, 0.5)',
        '--border-color': 'rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Background Video with GPU-composited Y parallax */}
      <motion.div style={{ y: bgY, willChange: 'transform' }} className="absolute inset-0 w-full h-full" aria-hidden>
        <video
          src="/video/post-optimized.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center absolute inset-0"
        />
      </motion.div>

      {/* Dynamic Overlay with Cinematic Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-color)] via-transparent to-[var(--bg-color)] opacity-40 z-10 pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center"
      >
        
        {/* Clean Container Without Glassmorphism Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-8 py-16 md:px-24 md:py-20 flex flex-col items-center max-w-4xl w-full"
        >

          {/* Letter by Letter Title Reveal */}
          <motion.h1 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl md:text-8xl lg:text-9xl text-[var(--text-primary)] font-light tracking-wide mb-8 flex overflow-hidden justify-center items-center drop-shadow-2xl"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.15)' }}
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
      </motion.div>
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
