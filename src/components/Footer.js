"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <footer id="contact" className="ft-section">
      <style>{`
        .ft-section {
          background-color: var(--bg-color);
          color: var(--text-primary);
          padding-top: 160px;
          padding-bottom: 48px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--border-color);
        }

        .ft-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 300px;
          background-color: rgba(201, 160, 99, 0.05);
          filter: blur(120px);
          border-radius: 50%;
          pointer-events: none;
        }

        .ft-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        .ft-cta {
          text-align: center;
          margin-bottom: 160px;
        }
        .ft-cta-sub {
          display: block;
          color: #c9a063;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-size: 14px;
          margin-bottom: 24px;
        }
        .ft-cta-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(3.5rem, 8vw, 8rem);
          font-weight: 300;
          margin-bottom: 32px;
          transition: color 0.7s;
          cursor: pointer;
          display: inline-block;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          line-height: 1;
        }
        .ft-cta-title:hover {
          color: #c9a063;
        }

        .ft-email-link {
          display: inline-block;
          position: relative;
          padding: 8px 0;
          text-decoration: none;
        }
        .ft-email-text {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--text-secondary);
          transition: color 0.3s;
        }
        .ft-email-link:hover .ft-email-text {
          color: var(--text-primary);
        }
        .ft-email-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #c9a063;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s;
        }
        .ft-email-link:hover .ft-email-line {
          transform: scaleX(1);
        }

        /* Footer Flex Grid Layout - Immune to Tailwind Bugs */
        .ft-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 96px;
          gap: 48px;
        }

        .ft-col-brand {
          flex: 0 0 calc(33.333% - 32px);
          min-width: 300px;
        }
        .ft-brand-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 36px;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 24px;
          color: var(--text-primary);
        }
        .ft-brand-light {
          font-weight: 300;
          color: #c9a063;
        }
        .ft-brand-desc {
          font-family: 'Inter', sans-serif;
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.8;
          font-weight: 300;
          max-width: 350px;
        }

        .ft-col-nav {
          flex: 0 0 calc(25% - 32px);
          min-width: 180px;
        }
        .ft-col-title {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 32px;
          font-weight: 500;
        }
        .ft-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ft-nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s;
          display: inline-block;
          position: relative;
          font-weight: 300;
        }
        .ft-nav-link:hover {
          color: #c9a063;
        }
        .ft-nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #c9a063;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }
        .ft-nav-link:hover::after {
          transform: scaleX(1);
        }

        .ft-col-news {
          flex: 0 0 calc(33.333% - 32px);
          min-width: 300px;
        }
        .ft-news-desc {
          font-family: 'Inter', sans-serif;
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 32px;
        }
        .ft-form {
          position: relative;
          width: 100%;
        }
        .ft-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-color);
          padding: 12px 0;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--text-primary);
          font-weight: 300;
          outline: none;
          transition: border-color 0.3s;
          box-sizing: border-box;
        }
        .ft-input::placeholder {
          color: var(--text-secondary);
        }
        .ft-input:focus {
          border-color: #c9a063;
        }
        .ft-submit {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-primary);
          background: transparent;
          border: none;
          cursor: pointer;
          opacity: 0;
          transition: all 0.3s;
        }
        .ft-form:hover .ft-submit {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
        .ft-submit:hover {
          color: #c9a063;
        }

        /* Bottom Bar */
        .ft-bottom {
          border-top: 1px solid var(--border-color);
          padding-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }
        .ft-copy {
          font-family: 'Inter', sans-serif;
          color: var(--text-secondary);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 300;
          margin: 0;
        }
        .ft-socials {
          display: flex;
          gap: 40px;
        }
        .ft-social-link {
          font-family: 'Inter', sans-serif;
          color: var(--text-secondary);
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s;
          font-weight: 300;
        }
        .ft-social-link:hover {
          color: #c9a063;
        }

        @media (max-width: 900px) {
          .ft-grid {
            flex-direction: column;
            gap: 60px;
          }
          .ft-col-brand, .ft-col-nav, .ft-col-news {
            flex: 1 1 100%;
          }
          .ft-bottom {
            flex-direction: column;
            text-align: center;
            gap: 32px;
          }
          .ft-socials {
            gap: 32px;
            justify-content: center;
          }
          .ft-top-btn {
            bottom: 20px;
            right: 20px;
          }
        }

        .ft-top-btn {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 50px;
          height: 50px;
          background: rgba(18, 18, 18, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--text-primary);
          cursor: pointer;
          z-index: 99;
          transition: border-color 0.4s ease, color 0.4s ease, transform 0.4s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .ft-top-btn:hover {
          border-color: #c9a063;
          color: #c9a063;
          transform: translateY(-5px);
        }
      `}</style>
      
      <div className="ft-glow" />

      <div className="ft-container">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="ft-cta"
        >
          <span className="ft-cta-sub">Ready to curate your legacy?</span>
          <h2 className="ft-cta-title">
            Let's Talk.
          </h2>
          <div style={{ marginTop: '32px' }}>
            <a href="mailto:hello@flashclicks.com" className="ft-email-link">
              <span className="ft-email-text">
                hello@flashclicks.com
              </span>
              <span className="ft-email-line" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="ft-grid"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="ft-col-brand">
            <h3 className="ft-brand-title">
              Flash<span className="ft-brand-light">Clicks.</span>
            </h3>
            <p className="ft-brand-desc">
              Capturing the profound beauty of fleeting moments. We specialize in luxury wedding, portrait, and editorial photography worldwide.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="ft-col-nav">
            <h4 className="ft-col-title">Navigation</h4>
            <ul className="ft-nav-list">
              {['Home', 'Expertise', 'Client Stories', 'Investment'].map((link) => (
                <li key={link}>
                  <a href={`#${link.split(' ')[0].toLowerCase()}`} className="ft-nav-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="ft-col-news">
            <h4 className="ft-col-title">Join The Studio List</h4>
            <p className="ft-news-desc">Exclusive access to booking dates, print shop drops, and editorial insights.</p>
            <form className="ft-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="ft-input"
                required
              />
              <button 
                type="submit"
                className="ft-submit"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="ft-bottom"
        >
          <p className="ft-copy">
            &copy; {new Date().getFullYear()} FlashClicks Studio. All rights reserved.
          </p>
          
          <div className="ft-socials">
            {['Instagram', 'Pinterest', 'Vero'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="ft-social-link"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop} 
            className="ft-top-btn"
            aria-label="Scroll to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20V4M12 4L5 11M12 4L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
