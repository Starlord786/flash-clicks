"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const servicesData = [
  {
    title: "Wedding Photography",
    description: "Capturing the pure emotion, fleeting glances, and eternal promises of your special day. We document your love story with a cinematic, timeless approach.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
    ]
  },
  {
    title: "Portrait Studio",
    description: "Elegant, striking, and intimate portraits. We focus on lighting and composition to bring out your true personality and unique beauty.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    ]
  },
  {
    title: "Fashion & Editorial",
    description: "High-end fashion and editorial photography for brands and models. We create visually striking images that define modern aesthetics.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
    ]
  }
];

function ServiceBlock({ service, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className={`relative min-h-[80vh] flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20 mb-32`}
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <span className="text-[#c9a063] font-sans tracking-[0.3em] uppercase text-sm mb-4">0{index + 1} / Service</span>
        <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] mb-8 font-light">
          {service.title}
        </h2>
        <p className="text-[#666666] font-sans leading-relaxed text-lg mb-10 max-w-xl">
          {service.description}
        </p>
        
        <div className="flex gap-4">
          {service.gallery.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative w-32 h-40 md:w-40 md:h-48 overflow-hidden rounded-sm shadow-md"
            >
              <Image src={img} alt={`${service.title} gallery ${i}`} fill sizes="(max-width: 768px) 128px, 160px" className="object-cover" />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh] relative overflow-hidden rounded-sm shadow-2xl">
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#f8f6f0] py-32 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-serif text-4xl md:text-6xl text-[#1a1a1a] font-light"
          >
            Our Expertise
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-[#c9a063] mx-auto mt-8"
          />
        </div>

        <div className="flex flex-col">
          {servicesData.map((service, index) => (
            <ServiceBlock key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
