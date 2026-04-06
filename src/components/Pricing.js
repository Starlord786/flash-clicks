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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="pricing" className="bg-[#1a1a1a] py-32 text-white relative flex justify-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 relative z-10">
          <span className="text-[#c9a063] font-sans tracking-[0.3em] uppercase text-sm mb-4 block">Investment</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">Curated Packages</h2>
          <p className="text-white/60 font-sans mt-6 max-w-xl mx-auto">
            Transparent pricing for an unparalleled visual narrative. Select the collection that best aligns with your vision.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10 max-w-6xl mx-auto items-center"
        >
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-10 h-full rounded-sm transition-all duration-300 ${
                pkg.highlighted 
                  ? 'bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-[#c9a063]/50 shadow-[0_0_40px_rgba(201,160,99,0.15)] md:scale-110 z-20 py-14' 
                  : 'bg-[#222] border border-white/10'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c9a063] text-black text-xs font-bold uppercase tracking-[0.2em] py-1 px-4 rounded-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-serif text-3xl font-light mb-2">{pkg.name}</h3>
              <p className="text-white/50 text-sm h-12 mb-6">{pkg.description}</p>
              
              <div className="mb-8">
                <span className="font-serif text-5xl font-light">{pkg.price}</span>
              </div>
              
              <ul className="flex-grow space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-white/80 text-sm">
                    <svg className="w-5 h-5 text-[#c9a063] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-[#c9a063] text-black hover:bg-white'
                    : 'bg-transparent text-white border border-white/30 hover:border-white hover:bg-white hover:text-black'
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a063]/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
