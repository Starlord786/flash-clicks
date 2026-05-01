"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Staggered text variants
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-24 md:py-32 flex items-center justify-center overflow-hidden bg-[var(--bg-color)]"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[var(--accent-color)] opacity-5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[var(--text-primary)] opacity-5 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Typography */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col"
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} className="mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[var(--accent-color)]"></span>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--accent-color)]">The Studio</span>
          </motion.div>
          
          <motion.h2 
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] text-[var(--text-primary)] mb-8"
          >
            The Art of <br />
            <span className="italic text-[var(--accent-color)]">Freezing Time.</span>
          </motion.h2>

          <motion.div variants={item} className="space-y-6 text-[var(--text-secondary)] text-lg md:text-xl font-light leading-relaxed max-w-xl">
            <p>
              At FlashClicks, we believe that a photograph is more than just an image—it is a tangible memory, a captured emotion, and a piece of history. 
            </p>
            <p>
              Our approach blends cinematic techniques with raw authenticity. Whether we are shooting a high-fashion editorial or intimately documenting a wedding, our goal remains the same: to craft breathtaking visuals that tell your unique story with elegance and uncompromising quality.
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-12">
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors"
            >
              <span className="relative overflow-hidden flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border-color)] group-hover:border-[var(--accent-color)] transition-colors">
                <span className="absolute inset-0 bg-[var(--accent-color)] transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full"></span>
                <svg className="w-4 h-4 relative z-10 text-current group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              Discover More
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Image Reveal */}
        <div className="w-full lg:w-1/2 relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-sm">
          {/* Masking curtain that moves down */}
          <motion.div 
            className="absolute inset-0 z-10 bg-[var(--bg-color)]"
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ originY: 1 }}
          />
          <motion.div 
            className="w-full h-full relative"
            style={{ y, opacity }}
          >
            {/* The actual image */}
            <motion.img 
              src="/OPTIMIZED_PHOTOS/Untitled-1.webp" 
              alt="FlashClicks Studio Behind the Scenes"
              className="w-full h-[120%] object-cover object-center absolute top-[-10%] left-0 grayscale hover:grayscale-0 transition-all duration-700"
              initial={{ scale: 1.2, filter: "blur(10px)" }}
              whileInView={{ scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </motion.div>
          
          {/* Decorative frame/border overlay */}
          <div className="absolute inset-4 border border-[var(--border-color)] z-20 pointer-events-none mix-blend-overlay"></div>
        </div>

      </div>
    </section>
  );
}
