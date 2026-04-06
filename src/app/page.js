import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f8f6f0]">
      {/* Premium custom cursor */}
      <Cursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Page Sections */}
      <div id="top">
        <Hero />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="pricing">
        <Pricing />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}