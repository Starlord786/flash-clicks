"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Basic smooth scroll setup for native anchor tags
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <motion.main 
      initial="initial"
      animate="animate"
      variants={pageVariants}
      style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}
    >
      <Cursor />
      <Navbar />
      <motion.div variants={sectionVariants} id="top"><Hero /></motion.div>
      <motion.div variants={sectionVariants} id="services"><Services /></motion.div>
      <motion.div variants={sectionVariants} id="testimonials"><Testimonials /></motion.div>
      <motion.div variants={sectionVariants} id="pricing"><Pricing /></motion.div>
      <motion.div variants={sectionVariants}><Footer /></motion.div>
    </motion.main>
  );
}