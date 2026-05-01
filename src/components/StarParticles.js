"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StarParticles() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate star particles for the entire screen
    setStars(Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 3,
      xMove: Math.random() * 60 - 30,
      yMove: Math.random() * 40 - 20,
    })));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
            backgroundColor: star.id % 4 === 0 ? 'var(--accent-color)' : 'var(--text-primary)',
            boxShadow: star.id % 4 === 0 ? `0 0 ${star.size * 2}px var(--accent-color)` : `0 0 ${star.size * 2}px var(--text-primary)`,
            opacity: 0,
          }}
          animate={{
            y: [0, star.yMove, 0],
            x: [0, star.xMove, 0],
            opacity: [0, star.id % 4 === 0 ? 0.7 : 0.3, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
