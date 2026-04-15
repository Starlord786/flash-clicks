"use client";

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use direct DOM manipulation — zero React re-renders on mousemove
    let rafId;
    const onMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const size = isHovered.current ? 48 : 20;
        const offset = size / 2;
        cursor.style.transform = `translate(${e.clientX - offset}px, ${e.clientY - offset}px)`;
        cursor.style.width = `${size}px`;
        cursor.style.height = `${size}px`;
        cursor.style.opacity = '1';
      });
    };

    const onOver = (e) => {
      const el = e.target;
      const isLink = el.tagName === 'A' || el.tagName === 'BUTTON' ||
        el.closest('a') || el.closest('button');
      if (isLink !== isHovered.current) {
        isHovered.current = isLink;
        cursor.style.backgroundColor = isLink
          ? 'rgba(201,160,99,0.85)'
          : 'rgba(255,255,255,0.7)';
        cursor.style.mixBlendMode = isLink ? 'normal' : 'difference';
      }
    };

    document.body.classList.add('custom-cursor');
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.body.classList.remove('custom-cursor');
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        willChange: 'transform',
        // CSS transition only for size/color, not position (too slow for position)
        transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
      }}
    />
  );
}
