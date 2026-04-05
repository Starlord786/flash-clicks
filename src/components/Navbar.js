'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          Flash Clicks
        </div>
        
        <div className={styles.desktopLinks}>
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#films">Films</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className={styles.enquireBtn}>Enquire Now</a>
        </div>

        <button className={styles.mobileMenuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
          </div>
          MENU
        </button>
      </div>
    </motion.nav>
  );
}
