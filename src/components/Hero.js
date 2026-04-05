'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const PREVIEW_IMAGES = [
  '/portfolio_landscape.png',
  '/hero_photo.png',
  '/portfolio_fashion.png'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PREVIEW_IMAGES.length);
    }, 6000); // 6 second slow crossfade interval
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      {/* Background Image Slider with Zoom Animation */}
      {PREVIEW_IMAGES.map((img, index) => (
        <div 
          key={img}
          className={`${styles.bgWrapper} ${index === currentIndex ? styles.activeBg : ''}`}
        >
          <img src={img} alt={`Background ${index}`} className={styles.bgImage} />
        </div>
      ))}
      <div className={styles.darkOverlay}></div>
      
      {/* Cinematic Text Content */}
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={styles.contentBox}
        >
          <motion.h1 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1.5, delay: 0.8 }}
             className={styles.title}
          >
            Capturing Love Stories<br/>That Last Forever
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1.2 }}
             className={styles.subtitle}
          >
            Timeless wedding photography & films crafted with emotion
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={styles.actions}
          >
            <a href="#portfolio" className={styles.btnPrimary}>View Portfolio</a>
            <a href="#contact" className={styles.btnSecondary}>Book a Session</a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator animation */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2, duration: 1 }}
         className={styles.scrollIndicator}
      >
        <span>Scroll Default</span>
        <div className={styles.mouse}></div>
      </motion.div>

    </section>
  );
}
