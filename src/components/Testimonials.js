'use client';
import styles from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const REVIEWS = [
  { name: 'Sarah & James', text: 'They truly captured the essence of our love. Every single photo feels like a cinematic masterpiece.' },
  { name: 'Emily & Mark', text: 'We could not have asked for a better team. The emotions, the lighting, everything was perfect!' },
  { name: 'Chloe & Dave', text: 'Professional, creative, and insanely talented. The films and photos made us cry all over again.' }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className="section-title">Client Love</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className={styles.swiperContainer}
        >
          {REVIEWS.map((r, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"{r.text}"</p>
              <div className={styles.name}>— {r.name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
