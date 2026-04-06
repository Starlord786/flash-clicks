"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f8f6f0] border-t border-[#1a1a1a]/10 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-20">
          
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl font-bold tracking-wider text-[#1a1a1a] mb-6">
              FlashClicks.
            </h2>
            <p className="text-[#666] font-sans leading-relaxed max-w-sm">
              Capturing the profound beauty of fleeting moments. We specialize in luxury wedding, portrait, and editorial photography, delivering cinematic visual stories worldwide.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-sans text-sm tracking-[0.2em] uppercase text-[#1a1a1a] font-semibold mb-6">Collections</h3>
            <ul className="space-y-4">
              {['Weddings', 'Portraits', 'Fashion', 'Editorials', 'Films'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#666] hover:text-[#c9a063] transition-colors font-sans text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-sans text-sm tracking-[0.2em] uppercase text-[#1a1a1a] font-semibold mb-6">Contact</h3>
            <address className="not-italic space-y-4 font-sans text-sm text-[#666]">
              <p>
                <a href="mailto:hello@flashclicks.com" className="hover:text-[#c9a063] transition-colors">hello@flashclicks.com</a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-[#c9a063] transition-colors">+1 (555) 123-4567</a>
              </p>
              <p className="mt-4">
                123 Awwwards Ave, Suite 100<br/>
                New York, NY 10012
              </p>
            </address>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="border-y border-[#1a1a1a]/10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left">
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2 font-light">Join The Studio List</h3>
            <p className="text-[#666] font-sans text-sm">Exclusive access to booking dates, print shop drops, and editorial insights.</p>
          </div>
          
          <form className="w-full max-w-md flex relative" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent border-b border-[#1a1a1a]/30 py-4 px-2 font-sans placeholder-[#999] focus:outline-none focus:border-[#1a1a1a] text-[#1a1a1a] transition-colors"
            />
            <button 
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-sm uppercase tracking-widest text-[#1a1a1a] font-semibold hover:text-[#c9a063] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#999] font-sans text-xs tracking-wider uppercase">
            &copy; {new Date().getFullYear()} FlashClicks Studio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {['Instagram', 'Pinterest', 'Vero'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[#999] font-sans text-xs tracking-wider uppercase hover:text-[#1a1a1a] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
