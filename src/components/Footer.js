"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <footer id="contact" className="bg-[#f8f6f0] text-[#1a1a1a] pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Massive Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="text-[#c9a063] font-sans tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block">Ready to curate your legacy?</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl font-light mb-8 hover:text-[#c9a063] transition-colors duration-700 cursor-pointer inline-block">
            Let's Talk.
          </h2>
          <div className="mt-8">
            <a href="mailto:hello@flashclicks.com" className="inline-block relative overflow-hidden group py-2">
              <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-[#1a1a1a]/70 group-hover:text-[#1a1a1a] transition-colors duration-300">
                hello@flashclicks.com
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a063] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-5">
            <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-wider mb-6">
              Flash<span className="font-light text-[#c9a063]">Clicks.</span>
            </h3>
            <p className="font-sans text-[#1a1a1a]/60 text-sm leading-relaxed max-w-sm">
              Capturing the profound beauty of fleeting moments. We specialize in luxury wedding, portrait, and editorial photography worldwide.
            </p>
          </motion.div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-8 font-semibold">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Expertise', 'Client Stories', 'Investment'].map((link) => (
                <li key={link}>
                  <a href={`#${link.split(' ')[0].toLowerCase()}`} className="font-sans text-sm text-[#1a1a1a]/70 hover:text-[#c9a063] transition-colors inline-block relative group">
                    {link}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a063] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-3">
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-[#1a1a1a]/40 mb-8 font-semibold">Join The Studio List</h4>
            <p className="font-sans text-[#1a1a1a]/60 text-sm mb-6 leading-relaxed">Exclusive access to booking dates, print shop drops, and editorial insights.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 font-sans text-sm placeholder-[#1a1a1a]/40 focus:outline-none focus:border-[#c9a063] text-[#1a1a1a] transition-all duration-300"
                required
              />
              <button 
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-xs uppercase tracking-widest text-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-[#c9a063] translate-x-4 group-hover:translate-x-0"
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
          className="border-t border-[#1a1a1a]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="font-sans text-[#1a1a1a]/40 text-xs tracking-wider uppercase order-2 md:order-1">
            &copy; {new Date().getFullYear()} FlashClicks Studio. All rights reserved.
          </p>
          
          <div className="flex gap-8 order-1 md:order-2">
            {['Instagram', 'Pinterest', 'Vero'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="font-sans text-[#1a1a1a]/50 text-xs tracking-widest uppercase hover:text-[#c9a063] transition-colors"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
