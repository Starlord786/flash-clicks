"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from '@/components/Cursor';
import StarParticles from '@/components/StarParticles';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, delay: 0.5 } },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.main 
          initial="initial"
          animate="animate"
          variants={pageVariants}
          style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}
        >
      <Cursor />
      <StarParticles />
      <Navbar />

      {/* Logo — absolute (not fixed), scrolls away with page */}
      <div style={{ position: 'absolute', top: '-2.5rem', left: '-4rem', zIndex: 49 }}>
        <img
          src="/images/Logo.png"
          alt="Flash Clicks Logo"
          style={{ height: '200px', width: 'auto', objectFit: 'contain' }}
        />
      </div>

      <div id="top"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="testimonials"><Testimonials /></div>
          <div id="pricing"><Pricing /></div>
          <div><Footer /></div>
        </motion.main>
      )}
    </>
  );
}