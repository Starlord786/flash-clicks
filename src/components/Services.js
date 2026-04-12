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

/* ─── Text split reveal ─────────────────────────────────────────────────── */
function SplitReveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        variants={{
          hidden: { y: "110%", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ─── Ken Burns Hero Slideshow ──────────────────────────────────────────── */
function HeroSlideshow({ images, service }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const DURATION = 5000;

  const advance = (to) => {
    setPrev(current);
    setCurrent(to !== undefined ? to : (c) => (c + 1) % images.length);
    setProgress(0);
  };

  useEffect(() => {
    setProgress(0);
    let start = null;
    let rafId;

    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      setProgress(Math.min(elapsed / DURATION, 1));
      if (elapsed < DURATION) {
        rafId = requestAnimationFrame(tick);
      } else {
        advance();
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [current]);

  return (
    <div className="svc-hero">
      {/* Slides */}
      {images.map((src, i) => (
        <div key={src} className={`svc-slide ${i === current ? 'is-active' : i === prev ? 'is-leaving' : ''}`}>
          <Image src={src} alt="" fill className="svc-slide-img" priority={i === 0} />
        </div>
      ))}

      {/* Cinematic overlay */}
      <div className="svc-vignette" />

      {/* Side number */}
      <div className="svc-side-num">{service.number}</div>

      {/* Content */}
      <div className="svc-hero-content">
        <SplitReveal delay={0.05}>
          <span className="svc-eyebrow">{service.number} — {service.label}</span>
        </SplitReveal>

        <div className="svc-title-wrap">
          {service.title.map((line, i) => (
            <SplitReveal key={i} delay={0.15 + i * 0.12}>
              <h2 className="svc-title-line">{line}</h2>
            </SplitReveal>
          ))}
        </div>

        <SplitReveal delay={0.4}>
          <p className="svc-tagline">{service.tagline}</p>
        </SplitReveal>

        {/* Progress bar indicators */}
        <div className="svc-progress-bars">
          {images.map((_, i) => (
            <button
              key={i}
              className="svc-bar-btn"
              onClick={() => advance(i)}
              aria-label={`Slide ${i + 1}`}
            >
              <div className="svc-bar-track">
                <div
                  className="svc-bar-fill"
                  style={{ width: i === current ? `${progress * 100}%` : i < current || (current === 0 && i === images.length - 1) ? '100%' : '0%' }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="svc-scroll-cue">
        <div className="svc-scroll-line" />
      </div>
    </div>
  );
}

/* ─── Gallery Grid ──────────────────────────────────────────────────────── */
function GalleryGrid({ service }) {
  return (
    <div className="svc-gallery">
      {/* Heading row */}
      <div className="svc-gallery-head">
        <motion.div
          className="svc-head-rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="svc-head-text">
          <motion.span
            className="svc-head-label"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Featured Work
          </motion.span>
          <motion.p
            className="svc-head-desc"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {service.description}
          </motion.p>
        </div>
      </div>

      {/* Cards */}
      <div className="svc-cards-grid">
        {service.gallery.map((item, i) => (
          <motion.div
            key={i}
            className={`svc-card ${item.span === 'wide' ? 'svc-card--wide' : ''}`}
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="svc-card-media">
              <Image src={item.src} alt={item.caption} fill className="svc-card-img" />
              <div className="svc-card-glass" />
              <div className="svc-card-shine" />
            </div>
            <div className="svc-card-footer">
              <span className="svc-card-num">0{i + 1}</span>
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
          color: rgba(255,255,255,0.04);
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
        }

        .svc-title-wrap {
          margin-bottom: 24px;
        }

        .svc-title-line {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(3.8rem, 10vw, 9.5rem);
          font-weight: 300;
          line-height: 0.9;
          color: #f8f6f0;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .svc-tagline {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.85rem, 1.4vw, 1rem);
          color: rgba(248,246,240,0.55);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 40px;
          font-weight: 300;
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
          background: #0a0a0a;
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
          background: #0d0d0d;
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
          color: rgba(248,246,240,0.48);
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
          background: #141414;
          border: 1px solid rgba(255,255,255,0.04);
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
          background: #0f0f0f;
          border-top: 1px solid rgba(201,160,99,0.08);
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
          color: rgba(248,246,240,0.55);
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
