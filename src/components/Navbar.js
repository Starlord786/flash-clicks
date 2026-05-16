"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { title: 'Home', href: '#top' },
  { title: 'About', href: '#about' },
  { title: 'Expertise', href: '#services' },
  { title: 'Client Stories', href: '#testimonials' },
  { title: 'Investment', href: '#pricing' },
  { title: 'Inquire', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center ${scrolled ? 'top-4 md:top-6 px-4' : 'top-0 px-6 py-6 md:px-12 md:py-10'
          }`}
      >
        <div
          style={scrolled ? { paddingLeft: '3rem', paddingRight: '3rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' } : {}}
          className={`flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] gap-6 md:gap-10 ${scrolled
              ? 'w-auto bg-[var(--surface-bg)]/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-[var(--border-color)]/30 rounded-full'
              : 'w-full max-w-[1400px] justify-center bg-transparent text-white'
            }`}
        >
          {/* Nav Links */}
          <div className="hidden lg:flex items-center justify-center gap-8 md:gap-10">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold relative group overflow-hidden transition-colors ${scrolled ? 'text-[var(--text-primary)]/70 hover:text-[var(--text-primary)]' : 'text-white opacity-80 hover:opacity-100'
                  }`}
              >
                {link.title}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] transform origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 ${scrolled ? 'bg-[var(--accent-color)]' : 'bg-white'
                  }`} />
              </a>
            ))}
          </div>

          {/* Right side: Theme toggle + Book Studio — no hamburger */}
          <div className="flex items-center gap-4 md:gap-6">
            <ThemeToggle />
            <motion.a
              href="#pricing"
              whileHover="hover"
              initial="initial"
              whileTap={{ scale: 0.98 }}
              className="hidden md:flex items-center gap-3 px-8 py-3.5 relative group pointer-events-auto"
            >
              {/* Background Glow on Hover */}
              <motion.div 
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  hover: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[var(--accent-color)]/10 blur-xl rounded-full pointer-events-none"
              />

              {/* Viewfinder Brackets */}
              <motion.div 
                className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${scrolled ? 'text-[var(--text-primary)]' : 'text-white'}`}
                variants={{
                  initial: { scale: 1.1, opacity: 0.3 },
                  hover: { scale: 1, opacity: 1, color: '#c9a063' }
                }}
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-current" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-current" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-current" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-current" />
              </motion.div>

              {/* Pulsing Status Indicator */}
              <div className="relative flex items-center justify-center w-2 h-2">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-40" />
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover:bg-red-400 transition-colors" />
              </div>

              <span 
                className={`text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase z-10 transition-colors duration-500 group-hover:text-[var(--accent-color)] ${scrolled ? 'text-[var(--text-primary)]' : 'text-white'}`}
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Book Now
              </span>

              {/* Shimmer/Flash Effect */}
              <motion.div
                variants={{
                  initial: { x: '-150%', opacity: 0 },
                  hover: { x: '150%', opacity: 1 }
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
              />
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}