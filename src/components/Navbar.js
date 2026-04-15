"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { title: 'Home', href: '#top' },
  { title: 'Expertise', href: '#services' },
  { title: 'Client Stories', href: '#testimonials' },
  { title: 'Investment', href: '#pricing' },
  { title: 'Inquire', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center ${
          scrolled ? 'top-4 md:top-6 px-4' : 'top-0 px-6 py-6 md:px-12 md:py-10'
        }`}
      >
        <div 
          className={`flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] gap-6 md:gap-10 ${
            scrolled 
              ? 'w-full max-w-6xl bg-[var(--surface-bg)]/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-[var(--border-color)]/30 rounded-full px-6 py-3.5' 
              : 'w-full max-w-[1400px] bg-transparent text-[var(--text-primary)]'
          }`}
        >
          {/* Logo */}
          <a 
            href="#top" 
            className={`font-serif text-2xl md:text-3xl font-light tracking-wide hover:opacity-70 transition-opacity text-[var(--text-primary)] whitespace-nowrap`}
          >
            Flash<span className={scrolled ? 'text-[var(--accent-color)] italic' : 'opacity-70 italic'}>Clicks.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-center gap-8 md:gap-10">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold relative group overflow-hidden transition-colors ${
                  scrolled ? 'text-[var(--text-primary)]/70 hover:text-[var(--text-primary)]' : 'text-[var(--text-primary)] opacity-80 hover:opacity-100'
                }`}
              >
                {link.title}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] transform origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 ${
                  scrolled ? 'bg-[var(--accent-color)]' : 'bg-[var(--text-primary)]'
                }`} />
              </a>
            ))}
          </div>

          {/* Action / Menu area */}
          <div className="flex items-center gap-4 md:gap-6">
            <ThemeToggle />
            
            <a 
              href="#contact"
              className={`hidden md:flex px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-500 ${
                scrolled 
                  ? 'bg-[var(--text-primary)] text-[var(--bg-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)]' 
                  : 'bg-[var(--text-primary)]/10 backdrop-blur-md text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] border border-[var(--text-primary)]/20 hover:border-transparent'
              }`}
            >
              Book Studio
            </a>
            
            {/* Minimal Hamburger */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex flex-col justify-center items-center gap-[6px] w-10 h-10 rounded-full transition-colors ${
                scrolled ? 'bg-[var(--text-primary)]/5 hover:bg-[var(--text-primary)]/10' : 'bg-[var(--text-primary)]/20 hover:bg-[var(--text-primary)]/40 backdrop-blur-sm'
              }`}
              aria-label="Menu"
            >
              <motion.span 
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className={`block w-5 h-[1.5px] bg-[var(--text-primary)] transition-colors ease-out`}
              />
              <motion.span 
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`block w-5 h-[1.5px] bg-[var(--text-primary)] transition-colors ease-out`}
              />
              <motion.span 
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className={`block w-5 h-[1.5px] bg-[var(--text-primary)] transition-colors ease-out`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Cinematic Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--bg-color)] flex"
          >
            {/* Decorative Left Side */}
            <div className="hidden lg:block w-1/2 h-full bg-[var(--surface-bg)] relative overflow-hidden">
              <motion.img 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale"
                alt="Studio menu background"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[var(--text-primary)]/20 font-serif text-8xl font-light italic">Studio.</p>
              </div>
            </div>

            {/* Menu Links */}
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-12 md:px-24">
              <div className="space-y-4 md:space-y-8">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex flex-col relative w-max"
                    >
                      <div className="flex items-baseline gap-4 md:gap-8 overflow-hidden py-2">
                        <span className="text-xs md:text-sm font-sans tracking-[0.25em] text-[var(--accent-color)] opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                          0{i + 1}
                        </span>
                        <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-[var(--text-primary)] group-hover:italic group-hover:text-[var(--accent-color)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                          {item.title}
                        </span>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-20 flex flex-col sm:flex-row gap-12 border-t border-[var(--border-color)] pt-10"
              >
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Get in Touch</h4>
                  <a href="mailto:hello@flashclicks.com" className="text-[var(--text-primary)] font-serif text-lg hover:text-[var(--accent-color)] transition-colors">hello@flashclicks.com</a>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-3">Socials</h4>
                  <div className="flex gap-4">
                    {['Instagram', 'Pinterest'].map(social => (
                      <a key={social} href="#" className="text-[var(--text-primary)] text-sm uppercase tracking-wider hover:text-[var(--accent-color)] transition-colors">{social}</a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
