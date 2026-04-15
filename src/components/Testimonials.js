"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Eleanor & James",
    role: "Wedding Clients",
    rating: 5,
    text: "FlashClicks captured the magic of our wedding day in ways we couldn't have imagined. Every photo is a masterpiece that tells our story beautifully.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop",
  },
  {
    name: "Sophia Carter",
    role: "Portrait Session",
    rating: 5,
    text: "The portrait session was incredibly comfortable. They know exactly how to use light to bring out your best features. Absolutely stunning work.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Vogue Magazine",
    role: "Editorial Feature",
    rating: 5,
    text: "A truly visionary approach to editorial photography. The aesthetic is clean, luxurious, and commands attention on every spread.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Corporate Event",
    rating: 5,
    text: "Professionalism at its finest. They framed our entire event with such an artistic eye, we felt like we were watching a movie of our own lives.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
  },
];

// 4× duplication → animate -50% for invisible seamless loop
const loopedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#c9a063"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div
      className="testimonial-card"
      style={{
        minWidth: "380px",
        maxWidth: "380px",
        margin: "0 14px",
        flexShrink: 0,
        background: "var(--surface-bg)",
        border: "1px solid var(--border-color)",
        borderRadius: "4px",
        padding: "40px 36px 36px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* Gold top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #c9a063, transparent)",
        }}
      />

      {/* Large decorative quote mark */}
      <div
        style={{
          position: "absolute",
          top: "18px",
          right: "28px",
          fontSize: "100px",
          lineHeight: 1,
          color: "#c9a063",
          opacity: 0.08,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        &ldquo;
      </div>

      {/* Stars */}
      <StarRating count={item.rating} />

      {/* Quote text */}
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1rem",
          lineHeight: 1.8,
          color: "var(--text-primary)",
          fontStyle: "italic",
          marginBottom: "32px",
          flexGrow: 1,
        }}
      >
        &ldquo;{item.text}&rdquo;
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "var(--border-color)",
          marginBottom: "24px",
        }}
      />

      {/* Author row */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        {/* Avatar with gold ring */}
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            padding: "2px",
            background: "linear-gradient(135deg, #c9a063, #f0d5a0, #c9a063)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="50px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Name & role */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              marginBottom: "3px",
            }}
          >
            {item.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9a063",
              opacity: 0.85,
            }}
          >
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        background: "var(--bg-color)",
        overflowX: "hidden",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
        paddingTop: "7rem",
        paddingBottom: "8rem",
      }}
    >
      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          textAlign: "center",
          marginBottom: "5rem",
          padding: "0 1.5rem",
        }}
      >
        {/* Label row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "1.25rem",
          }}
        >
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, transparent, #c9a063)" }} />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c9a063",
              fontWeight: 600,
            }}
          >
            Kind Words
          </span>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(90deg, #c9a063, transparent)" }} />
        </div>

        {/* Main heading */}
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "var(--text-primary)",
            lineHeight: 1.2,
            marginBottom: "1.25rem",
          }}
        >
          What Our Clients Say
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Stories from the people we&apos;ve had the honour of working with — in their own words.
        </p>

        {/* Gold diamond divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginTop: "2rem",
          }}
        >
          <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, transparent, var(--border-color))" }} />
          <svg width="10" height="10" viewBox="0 0 10 10" fill="#c9a063">
            <polygon points="5,0 10,5 5,10 0,5" />
          </svg>
          <div style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, var(--border-color), transparent)" }} />
        </div>
      </motion.div>

      {/* ── Infinite Marquee ── */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Edge fade gradients */}
        <div
          style={{
            position: "absolute", left: 0, top: 0,
            width: "120px", height: "100%",
            background: "linear-gradient(to right, var(--bg-color), transparent)",
            zIndex: 10, pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", right: 0, top: 0,
            width: "120px", height: "100%",
            background: "linear-gradient(to left, var(--bg-color), transparent)",
            zIndex: 10, pointerEvents: "none",
          }}
        />

        {/* Marquee strip */}
        <div className="t-marquee-strip" style={{ display: "flex", width: "max-content" }}>
          {loopedTestimonials.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </motion.div>

      {/* Add keyframes + hover pause via a global style tag */}
      <style>{`
        @keyframes t-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .t-marquee-strip {
          animation: t-scroll 55s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        .t-marquee-strip:hover {
          animation-play-state: paused;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.12);
        }
      `}</style>
    </section>
  );
}
