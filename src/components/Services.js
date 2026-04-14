"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/* ─── Data ─────────────────────────────────────────────────────────────── */
const servicesData = [
  {
    id: "wedding",
    number: "01",
    label: "Wedding",
    title: ["Wedding", "Photography"],
    tagline: "Love Stories, Told Forever",
    description:
      "Capturing the pure emotion, fleeting glances, and eternal promises of your special day. We document your love story with a cinematic, timeless approach.",
    accent: "#c9a063",
    heroImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop", caption: "Ceremony Moments", span: "wide" },
      { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", caption: "Golden Hour" },
      { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1887&auto=format&fit=crop", caption: "Candid Emotions" },
      { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop", caption: "Reception" },
    ],
  },
  {
    id: "portrait",
    number: "02",
    label: "Portrait",
    title: ["Portrait", "Studio"],
    tagline: "Your Essence, Beautifully Captured",
    description:
      "Elegant, striking, and intimate portraits that reveal the soul behind the face. Expert lighting and composition bring your true personality to life.",
    accent: "#b08d57",
    heroImages: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop", caption: "Studio Light", span: "wide" },
      { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop", caption: "Natural Light" },
      { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2070&auto=format&fit=crop", caption: "Dramatic Moody" },
      { src: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=1887&auto=format&fit=crop", caption: "Elegance" },
    ],
  },
  {
    id: "fashion",
    number: "03",
    label: "Fashion",
    title: ["Fashion &", "Editorial"],
    tagline: "Defining Modern Aesthetics",
    description:
      "High-end fashion and editorial photography for brands and models. Visually striking images that command attention and define modern aesthetics.",
    accent: "#c9a063",
    heroImages: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop", caption: "Runway Ready", span: "wide" },
      { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop", caption: "Editorial Spread" },
      { src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop", caption: "Brand Campaign" },
      { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop", caption: "Lookbook" },
    ],
  },
];

/* ─── Hero Slideshow ──────────────────────────────────────────────────────── */
function HeroSlideshow({ images, service }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      advance((currentIndex + 1) % images.length);
    }, 6000); // 6s match animation
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  const advance = (idx) => {
    if (idx === currentIndex) return;
    setLeavingIndex(currentIndex);
    setCurrentIndex(idx);
    setTimeout(() => setLeavingIndex(null), 1200);
  };

  return (
    <div className="svc-hero">
      {images.map((img, idx) => {
        let sc = "svc-slide";
        if (idx === currentIndex) sc += " is-active";
        else if (idx === leavingIndex) sc += " is-leaving";

        return (
          <div key={idx} className={sc}>
            <Image src={img} alt={`${service.label} ${idx}`} fill sizes="100vw" className="svc-slide-img" priority={idx === 0} />
          </div>
        );
      })}

      <div className="svc-vignette" />
      <div className="svc-side-num">{service.number}</div>

      <div className="svc-hero-content">
        <span className="svc-eyebrow">0{service.number} / {service.label}</span>
        <div className="svc-title-wrap">
          {service.title.map((line, i) => (
            <h2 key={i} className="svc-title-line">{line}</h2>
          ))}
        </div>
        <div className="svc-tagline">{service.tagline}</div>

        <div className="svc-progress-bars">
          {images.map((_, idx) => (
            <button key={idx} className="svc-bar-btn" onClick={() => advance(idx)} aria-label={`Slide ${idx + 1}`}>
              <div className="svc-bar-track">
                <div 
                  className="svc-bar-fill" 
                  style={{ width: idx === currentIndex ? '100%' : '0%' }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="svc-scroll-cue">
        <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', color: '#c9a063', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Scroll</span>
        <div className="svc-scroll-line" />
      </div>
    </div>
  );
}

/* ─── Gallery Grid ──────────────────────────────────────────────────────── */
function GalleryGrid({ service }) {
  return (
    <div className="svc-gallery">
      <div className="svc-gallery-head">
        <div className="svc-head-rule" />
        <div className="svc-head-text">
          <span className="svc-head-label">Curated Selection</span>
          <p className="svc-head-desc">{service.description}</p>
        </div>
      </div>

      <div className="svc-cards-grid" style={{ perspective: '1500px' }}>
        {service.gallery.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 120, rotateX: 25, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.4, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`svc-card ${item.span === 'wide' ? 'svc-card--wide' : ''}`}
          >
            <div className="svc-card-media">
              <Image src={item.src} alt={item.caption} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="svc-card-img" />
              <div className="svc-card-glass" />
              <div className="svc-card-shine" />
            </div>
            <div className="svc-card-footer">
              <span className="svc-card-num">0{idx + 1}</span>
              <span className="svc-card-cap">{item.caption}</span>
              <span className="svc-card-arrow">↗</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Divider ───────────────────────────────────────────────────────────── */
function GoldDivider({ label }) {
  return (
    <motion.div
      className="svc-divider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="svc-divider-line" />
      <span className="svc-divider-label">{label}</span>
      <div className="svc-divider-line" />
    </motion.div>
  );
}

/* ─── Main Export ───────────────────────────────────────────────────────── */
export default function Services() {
  return (
    <section id="services-section">
      <style>{`
        /* ═══════════════════════════════════════
           HERO SLIDESHOW
        ═══════════════════════════════════════ */
        .svc-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }

        /* Slides */
        .svc-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          will-change: opacity, transform;
        }
        .svc-slide.is-leaving {
          opacity: 0;
          animation: slideLeave 1.2s cubic-bezier(0.4,0,0.6,1) forwards;
        }
        .svc-slide.is-active {
          opacity: 1;
          animation: slideEnter 6s ease-out forwards;
        }
        .svc-slide-img {
          object-fit: cover;
        }
        @keyframes slideEnter {
          from { transform: scale(1.0); opacity: 1; }
          to   { transform: scale(1.12); opacity: 1; }
        }
        @keyframes slideLeave {
          from { opacity: 1; transform: scale(1.12); }
          to   { opacity: 0; transform: scale(1.18); }
        }

        /* Vignette overlay */
        .svc-vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(to top,    rgba(0,0,0,0.88) 0%, rgba(0,0,0,0) 50%),
            linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 35%),
            linear-gradient(to right,  rgba(0,0,0,0.30) 0%, rgba(0,0,0,0) 60%);
        }

        /* Big side number */
        .svc-side-num {
          position: absolute;
          right: 5vw;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(6rem, 14vw, 16rem);
          font-weight: 200;
          color: #ffffff;
          opacity: 0.08;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
        }

        /* Hero text content */
        .svc-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 6vw 60px;
          max-width: 800px;
          width: 100%;
        }

        .svc-eyebrow {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.65rem, 1.1vw, 0.8rem);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #c9a063;
          margin-bottom: 20px;
          font-weight: 500;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .svc-title-wrap {
          margin-bottom: 24px;
        }

        .svc-title-line {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(3.8rem, 10vw, 9.5rem);
          font-weight: 300;
          line-height: 0.9;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
          text-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .svc-tagline {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.85rem, 1.4vw, 1rem);
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 40px;
          font-weight: 300;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        /* Progress bar indicators */
        .svc-progress-bars {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .svc-bar-btn {
          background: none;
          border: none;
          padding: 6px 0;
          cursor: pointer;
          width: 56px;
        }
        .svc-bar-track {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.18);
          border-radius: 2px;
          overflow: hidden;
        }
        .svc-bar-fill {
          height: 100%;
          background: #c9a063;
          border-radius: 2px;
          transition: width 0.1s linear;
        }

        /* Scroll cue */
        .svc-scroll-cue {
          position: absolute;
          right: 6vw;
          bottom: 40px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .svc-scroll-line {
          width: 1px;
          height: 70px;
          background: linear-gradient(to bottom, transparent, #c9a063 30%, transparent 100%);
          animation: scrollPulse 2.2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%   { transform: scaleY(0.3) translateY(-20px); opacity: 0; }
          50%  { transform: scaleY(1)   translateY(0);     opacity: 1; }
          100% { transform: scaleY(0.3) translateY(20px);  opacity: 0; }
        }

        /* ═══════════════════════════════════════
           GOLD DIVIDER
        ═══════════════════════════════════════ */
        .svc-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          background: var(--bg-color);
          padding: 28px 6vw;
        }
        .svc-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,160,99,0.3), transparent);
        }
        .svc-divider-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(201,160,99,0.55);
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ═══════════════════════════════════════
           GALLERY SECTION
        ═══════════════════════════════════════ */
        .svc-gallery {
          background: var(--bg-color);
          padding: 72px 6vw 96px;
        }

        /* Head row */
        .svc-gallery-head {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          margin-bottom: 56px;
        }
        .svc-head-rule {
          width: 2px;
          height: 80px;
          background: linear-gradient(to bottom, #c9a063, transparent);
          flex-shrink: 0;
          transform-origin: top;
        }
        .svc-head-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .svc-head-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #c9a063;
          font-weight: 500;
        }
        .svc-head-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.92rem, 1.35vw, 1.05rem);
          color: var(--text-secondary);
          line-height: 1.85;
          max-width: 560px;
          margin: 0;
        }

        /* Cards grid */
        .svc-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto;
          gap: 12px;
        }

        @media (max-width: 900px) {
          .svc-cards-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-card--wide  { grid-column: span 2; }
        }
        @media (max-width: 540px) {
          .svc-cards-grid { grid-template-columns: 1fr; }
          .svc-card--wide  { grid-column: span 1; }
          .svc-hero        { height: 100svh; }
          .svc-title-line  { font-size: clamp(3rem, 14vw, 4.5rem); }
        }

        /* Card */
        .svc-card {
          position: relative;
          cursor: pointer;
          background: var(--surface-bg);
          border: 1px solid var(--border-color);
          border-radius: 3px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.4s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .svc-card:hover {
          border-color: rgba(201,160,99,0.28);
          transform: translateY(-6px);
        }
        .svc-card--wide {
          grid-column: span 2;
        }
        @media (max-width: 900px) {
          .svc-card--wide { grid-column: span 2; }
        }

        .svc-card-media {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .svc-card--wide .svc-card-media {
          aspect-ratio: 21/9;
        }
        @media (max-width: 700px) {
          .svc-card--wide .svc-card-media { aspect-ratio: 4/3; }
        }

        .svc-card-img {
          object-fit: cover;
          transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .svc-card:hover .svc-card-img {
          transform: scale(1.08);
        }

        /* Glass overlay */
        .svc-card-glass {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 55%);
          transition: opacity 0.4s ease;
        }

        /* Shine sweep effect */
        .svc-card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(201,160,99,0.07) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          background-position: 200% 0;
          transition: background-position 0.7s ease;
        }
        .svc-card:hover .svc-card-shine {
          background-position: -50% 0;
        }

        /* Card footer */
        .svc-card-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: var(--surface-bg);
          border-top: 1px solid var(--border-color);
        }
        .svc-card-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 0.72rem;
          color: #c9a063;
          letter-spacing: 0.1em;
          opacity: 0.75;
          flex-shrink: 0;
        }
        .svc-card-cap {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          color: var(--text-secondary);
          letter-spacing: 0.06em;
          flex: 1;
        }
        .svc-card-arrow {
          font-size: 0.9rem;
          color: rgba(201,160,99,0.35);
          transform: rotate(0deg);
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .svc-card:hover .svc-card-arrow {
          color: #c9a063;
          transform: rotate(45deg);
        }

        /* ═══════════════════════════════════════
           SECTION SEPARATOR  (between services)
        ═══════════════════════════════════════ */
        .svc-block + .svc-block > .svc-hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(201,160,99,0.55) 50%, transparent 100%);
          z-index: 3;
        }
      `}</style>

      {servicesData.map((svc, idx) => (
        <div key={svc.id} className="svc-block" id={`service-${svc.id}`}>
          <HeroSlideshow images={svc.heroImages} service={svc} />
          <GoldDivider label={`${svc.number} — ${svc.label} Portfolio`} />
          <GalleryGrid service={svc} />
        </div>
      ))}
    </section>
  );
}
