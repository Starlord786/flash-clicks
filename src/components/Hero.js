"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [showPackages, setShowPackages] = useState(false);

  const packages = [
    {
      name: "Essential",
      price: "$1,500",
      description: "Perfect for intimate gatherings and small portrait sessions.",
      features: [
        "4 Hours of Coverage",
        "1 Photographer",
        "150 Retouched Photos",
        "Online Gallery Access",
        "Standard Print Rights"
      ],
      highlighted: false
    },
    {
      name: "Premium",
      price: "$3,200",
      description: "Our signature experience for full-day weddings and events.",
      features: [
        "8 Hours of Coverage",
        "2 Photographers",
        "400+ Retouched Photos",
        "Premium Album (10×10)",
        "Drone Photography",
        "Full Print Rights"
      ],
      highlighted: true
    },
    {
      name: "Editorial",
      price: "$5,000",
      description: "The ultimate luxury package for high-end fashion and destination weddings.",
      features: [
        "Full Weekend Coverage",
        "Lead Photographer + 2 Assistants",
        "700+ Retouched Photos",
        "Luxury Leather Album",
        "Engagement Session Included",
        "Same-day Edit Teaser"
      ],
      highlighted: false
    }
  ];

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const timeRemaining = video.duration - video.currentTime;
    if (timeRemaining <= 0.2) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };
  
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
      className="relative h-screen w-full flex items-center justify-center bg-[#0a0a0a] transition-colors duration-500"
    >
      {/* Background Video with GPU-composited Y parallax */}
      <motion.div style={{ y: bgY, willChange: 'transform' }} className="absolute inset-0 w-full h-full bg-[#0a0a0a] transition-colors duration-500" aria-hidden>
        <video
          ref={videoRef}
          src="/video/post-optimized.mp4?v=trimmed"
          autoPlay
          muted
          loop
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-700 ease-in-out"
        />
      </motion.div>

      {/* Dynamic Overlay with Cinematic Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-40 z-10 pointer-events-none" />

      {/* Premium Gold Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        className="absolute inset-4 md:inset-6 lg:inset-8 z-10 pointer-events-none border border-[#c9a063]/50"
      >
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c9a063] -translate-x-[1px] -translate-y-[1px]" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c9a063] translate-x-[1px] -translate-y-[1px]" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c9a063] -translate-x-[1px] translate-y-[1px]" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c9a063] translate-x-[1px] translate-y-[1px]" />
      </motion.div>

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
            className="text-6xl md:text-8xl lg:text-9xl text-[#f8f6f0] font-normal mb-8 flex py-4 justify-center items-center drop-shadow-2xl pr-4"
            style={{ 
              textShadow: '0 4px 30px rgba(0,0,0,0.15)',
              fontFamily: 'var(--font-curly)',
              letterSpacing: '-2px'
            }}
          >
            {titleText.split('').map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                className="text-[#f8f6f0]"
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
              className="relative overflow-hidden group px-10 py-5 text-xs tracking-[0.2em] uppercase text-[#f8f6f0] border border-[#f8f6f0] hover:border-[#c9a063] transition-colors duration-500 w-full sm:w-auto text-center rounded-sm"
            >
              <span className="relative z-10 group-hover:text-[#0a0a0a] transition-colors duration-500 font-semibold">Our Expertise</span>
              <div className="absolute inset-0 bg-[#c9a063] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </motion.a>
            
            <motion.button 
              onClick={() => setShowPackages(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden group px-10 py-5 text-xs tracking-[0.2em] uppercase text-[#0a0a0a] bg-[#f8f6f0] border border-[#f8f6f0] hover:border-[#c9a063] transition-colors duration-500 w-full sm:w-auto text-center rounded-sm"
            >
              <span className="relative z-10 group-hover:text-[#0a0a0a] transition-colors duration-500 font-semibold">Book Studio</span>
              <div className="absolute inset-0 bg-[#c9a063] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </motion.button>
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
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-20 bg-gradient-to-b from-[#f8f6f0] to-transparent"
        />
      </motion.div>

      {/* Pricing Packages Modal */}
      <AnimatePresence>
        {showPackages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-black/60 backdrop-blur-[40px]"
            onClick={() => setShowPackages(false)}
          >
            <div className="w-full max-w-[1200px] relative my-auto py-12" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setShowPackages(false)}
                className="absolute top-0 right-0 md:top-4 md:right-4 z-50 p-4 text-[var(--text-secondary)] hover:text-[#c9a063] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: '100vh', scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: pkg.highlighted ? 1.04 : 1 }}
                    exit={{ opacity: 0, y: '100vh', scale: 0.97 }}
                    transition={{ duration: 1.8, delay: index * 0.25, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{
                      y: -10,
                      scale: pkg.highlighted ? 1.07 : 1.02,
                      boxShadow: pkg.highlighted
                        ? '0 20px 60px rgba(201,160,99,0.18), 0 30px 60px rgba(0,0,0,0.25)'
                        : '0 20px 50px rgba(0,0,0,0.2)',
                      zIndex: 10,
                    }}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: pkg.highlighted ? '32px 28px' : '28px 28px',
                      background: pkg.highlighted ? 'var(--bg-color)' : 'var(--surface-bg)',
                      border: pkg.highlighted ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
                      borderRadius: '4px',
                      boxShadow: pkg.highlighted
                        ? '0 0 40px rgba(201,160,99,0.1), 0 20px 40px rgba(0,0,0,0.15)'
                        : '0 4px 20px rgba(0,0,0,0.08)',
                      transform: pkg.highlighted ? 'scale(1.04)' : 'scale(1)',
                      zIndex: pkg.highlighted ? 2 : 1,
                      willChange: 'transform',
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    {/* Most Popular badge */}
                    {pkg.highlighted && (
                      <div style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#c9a063',
                        color: '#0d0d0d',
                        fontSize: '0.62rem',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        padding: '5px 18px',
                        borderRadius: '20px',
                        whiteSpace: 'nowrap',
                      }}>
                        Most Popular
                      </div>
                    )}

                    {/* Package name */}
                    <div style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                      fontWeight: 300,
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                    }}>
                      {pkg.name}
                    </div>

                    {/* Description */}
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.83rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '16px',
                      minHeight: '40px',
                    }}>
                      {pkg.description}
                    </p>

                    {/* Price */}
                    <div style={{ marginBottom: '20px' }}>
                      <span style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: 'clamp(2.8rem, 4vw, 3.8rem)',
                        fontWeight: 200,
                        color: pkg.highlighted ? 'var(--accent-color)' : 'var(--text-primary)',
                        lineHeight: 1,
                      }}>
                        {pkg.price}
                      </span>
                    </div>

                    {/* Gold rule */}
                    <div style={{
                      height: '1px',
                      background: pkg.highlighted
                        ? 'linear-gradient(90deg, transparent, var(--accent-color), transparent)'
                        : 'var(--border-color)',
                      marginBottom: '20px',
                    }} />

                    {/* Features */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flexGrow: 1 }}>
                      {pkg.features.map((feature, i) => (
                        <li key={i} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.83rem',
                          color: 'var(--text-secondary)',
                          padding: '7px 0',
                          borderBottom: '1px solid var(--border-color)',
                        }}>
                          <span style={{
                            color: '#c9a063',
                            fontSize: '0.6rem',
                            flexShrink: 0,
                          }}>◆</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA button */}
                    <button style={{
                      width: '100%',
                      padding: '12px 0',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      border: pkg.highlighted ? 'none' : '1px solid rgba(255,255,255,0.18)',
                      borderRadius: '2px',
                      background: pkg.highlighted
                        ? 'var(--accent-color)'
                        : 'transparent',
                      color: pkg.highlighted ? 'var(--bg-color)' : 'var(--text-secondary)',
                      transition: 'all 0.35s ease',
                    }}
                      onMouseEnter={e => {
                        if (pkg.highlighted) { e.target.style.background = '#d4b87a'; }
                        else { e.target.style.borderColor = 'rgba(201,160,99,0.6)'; e.target.style.color = '#c9a063'; }
                      }}
                      onMouseLeave={e => {
                        if (pkg.highlighted) { e.target.style.background = 'var(--accent-color)'; }
                        else { e.target.style.borderColor = 'rgba(255,255,255,0.18)'; e.target.style.color = 'var(--text-secondary)'; }
                      }}
                    >
                      Choose Plan
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
