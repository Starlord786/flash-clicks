"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: "Eleanor & James",
    text: "FlashClicks captured the magic of our wedding day in ways we couldn't have imagined. Every photo is a masterpiece that tells our story beautifully.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop"
  },
  {
    name: "Sophia Carter",
    text: "The portrait session was incredibly comfortable. They know exactly how to use light to bring out your best features. Absolutely stunning work.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "Vogue Magazine",
    text: "A truly visionary approach to editorial photography. The aesthetic is clean, luxurious, and commands attention on every spread.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    text: "Professionalism at its finest. They framed our entire event with such an artistic eye, we felt like we were watching a movie of our own lives.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
  }
];

// Duplicate the array to create a seamless infinite loop
const infiniteTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="bg-[var(--bg-color)] overflow-hidden border-y border-[var(--border-color)]" style={{ paddingTop: '8rem', paddingBottom: '10rem' }}>
      <div className="container mx-auto px-6 text-center" style={{ marginBottom: '6rem' }}>
        <span className="text-[var(--accent-color)] font-sans tracking-[0.3em] uppercase text-sm block" style={{ marginBottom: '1rem' }}>Kind Words</span>
        <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] font-light transition-colors">
          Client Stories
        </h2>
      </div>

      <div className="relative flex flex-col w-full max-w-[100vw] overflow-visible" style={{ paddingBottom: '3rem' }}>
        {/* Left/Right fading edge gradients for premium feel */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: [0, -1035 * testimonials.length] }} // Adjust depending on item width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40 // Slower = more luxurious
          }}
          whileHover={{ animationPlayState: 'paused' }} // Only works with some setups, but nice to have
        >
          {infiniteTestimonials.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[350px] md:min-w-[450px] bg-[var(--surface-bg)] border border-[var(--border-color)] p-10 md:p-14 rounded-sm shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="mb-8">
                <svg className="w-8 h-8 text-[var(--accent-color)] mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="font-serif text-lg md:text-xl text-[var(--text-primary)] leading-relaxed italic transition-colors">
                  "{item.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-[var(--text-primary)] uppercase tracking-wider text-sm transition-colors">{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
