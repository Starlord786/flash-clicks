"use client";

import { motion } from 'framer-motion';

const packages = [
  {
    name: "Essential",
    price: "$1,500",
    description: "Perfect for intimate gatherings and small portrait sessions.",
    features: [
      "4 Hours of Coverage",
      "1 Photographer",
      "150 Retouched Photos",
      "Online Gallery Access",
      "Standard Print Rights"
    ],
    highlighted: false
  },
  {
    name: "Premium",
    price: "$3,200",
    description: "Our signature experience for full-day weddings and events.",
    features: [
      "8 Hours of Coverage",
      "2 Photographers",
      "400+ Retouched Photos",
      "Premium Album (10x10)",
      "Drone Photography",
      "Full Print Rights"
    ],
    highlighted: true
  },
  {
    name: "Editorial",
    price: "$5,000",
    description: "The ultimate luxury package for high-end fashion and destination weddings.",
    features: [
      "Full Weekend Coverage",
      "Lead Photographer + 2 Assistants",
      "700+ Retouched Photos",
      "Luxury Leather Album",
      "Engagement Session Included",
      "Same-day Edit Teaser"
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" style={{
      background: 'var(--bg-color)',
      width: '100%',
      display: 'block',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 0 160px',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '700px', height: '700px',
        background: 'radial-gradient(ellipse at center, rgba(201,160,99,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 6vw', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              display: 'block',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: '#c9a063',
              marginBottom: '20px',
              fontWeight: 500,
            }}
          >
            Investment
          </motion.span>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '110%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                margin: 0,
                lineHeight: 1,
              }}
            >
              Curated Packages
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.88rem, 1.3vw, 1rem)',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              margin: '28px auto 0',
              lineHeight: 1.8,
            }}
          >
            Transparent pricing for an unparalleled visual narrative. Select the collection that best aligns with your vision.
          </motion.p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'stretch',
        }}>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: pkg.highlighted ? 1.04 : 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.0, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -10,
                scale: pkg.highlighted ? 1.07 : 1.02,
                boxShadow: pkg.highlighted
                  ? '0 20px 60px rgba(201,160,99,0.18), 0 30px 60px rgba(0,0,0,0.25)'
                  : '0 20px 50px rgba(0,0,0,0.2)',
                zIndex: 10,
              }}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                padding: pkg.highlighted ? '48px 36px' : '40px 36px',
                background: pkg.highlighted ? 'var(--bg-color)' : 'var(--surface-bg)',
                border: pkg.highlighted ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
                borderRadius: '4px',
                boxShadow: pkg.highlighted
                  ? '0 0 40px rgba(201,160,99,0.1), 0 20px 40px rgba(0,0,0,0.15)'
                  : '0 4px 20px rgba(0,0,0,0.08)',
                transform: pkg.highlighted ? 'scale(1.04)' : 'scale(1)',
                zIndex: pkg.highlighted ? 2 : 1,
                willChange: 'transform',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              {/* Most Popular badge */}
              {pkg.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#c9a063',
                  color: '#0d0d0d',
                  fontSize: '0.62rem',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  padding: '5px 18px',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                }}>
                  Most Popular
                </div>
              )}

              {/* Package name */}
              <div style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}>
                {pkg.name}
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.83rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '28px',
                minHeight: '52px',
              }}>
                {pkg.description}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '32px' }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.8rem, 4vw, 3.8rem)',
                  fontWeight: 200,
                  color: pkg.highlighted ? 'var(--accent-color)' : 'var(--text-primary)',
                  lineHeight: 1,
                }}>
                  {pkg.price}
                </span>
              </div>

              {/* Gold rule */}
              <div style={{
                height: '1px',
                background: pkg.highlighted
                  ? 'linear-gradient(90deg, transparent, var(--accent-color), transparent)'
                  : 'var(--border-color)',
                marginBottom: '28px',
              }} />

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', flexGrow: 1 }}>
                {pkg.features.map((feature, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.83rem',
                    color: 'var(--text-secondary)',
                    padding: '9px 0',
                    borderBottom: '1px solid var(--border-color)',
                  }}>
                    <span style={{
                      color: '#c9a063',
                      fontSize: '0.6rem',
                      flexShrink: 0,
                    }}>◆</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button style={{
                width: '100%',
                padding: '15px 0',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                border: pkg.highlighted ? 'none' : '1px solid rgba(255,255,255,0.18)',
                borderRadius: '2px',
                background: pkg.highlighted
                  ? 'var(--accent-color)'
                  : 'transparent',
                color: pkg.highlighted ? 'var(--bg-color)' : 'var(--text-secondary)',
                transition: 'all 0.35s ease',
              }}
                onMouseEnter={e => {
                  if (pkg.highlighted) { e.target.style.background = '#d4b87a'; }
                  else { e.target.style.borderColor = 'rgba(201,160,99,0.6)'; e.target.style.color = '#c9a063'; }
                }}
                onMouseLeave={e => {
                  if (pkg.highlighted) { e.target.style.background = 'linear-gradient(135deg, #c9a063 0%, #d4a96b 100%)'; }
                  else { e.target.style.borderColor = 'rgba(255,255,255,0.18)'; e.target.style.color = 'rgba(248,246,240,0.6)'; }
                }}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            textAlign: 'center',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.08em',
            marginTop: '52px',
          }}
        >
          All packages include photo editing & private online gallery. Custom quotes available.
        </motion.p>
      </div>

      {/* Responsive grid fix */}
      <style>{`
        @media (max-width: 860px) {
          #pricing .pkg-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}
