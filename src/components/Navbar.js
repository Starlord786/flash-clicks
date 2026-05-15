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
            <a
              href="#contact"
              className={`hidden md:flex px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-500 ${scrolled
                  ? 'bg-[var(--text-primary)] text-[var(--bg-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)]'
                  : 'bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black border border-white/20 hover:border-transparent'
                }`}
            >
              Book Studio
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}