import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Cursor />
      <Navbar />
      <div id="top"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="pricing"><Pricing /></div>
      <Footer />
    </main>
  );
}