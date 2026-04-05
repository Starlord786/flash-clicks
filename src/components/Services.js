import styles from './Services.module.css';
import { FaCameraRetro, FaRing, FaGlobeAmericas, FaBaby } from 'react-icons/fa';

const services = [
  { id: 1, title: 'Wedding Photography', desc: 'Capturing the essence and unbridled emotion of subjects with exquisite styling.', icon: FaRing },
  { id: 2, title: 'Pre-Wedding Shoots', desc: 'Telling your unique love story before the big day.', icon: FaCameraRetro },
  { id: 3, title: 'Destination Weddings', desc: 'Travelling worldwide to freeze incredible moments anywhere.', icon: FaGlobeAmericas },
  { id: 4, title: 'Maternity & Newborn', desc: 'Gentle, beautiful portraits celebrating new life.', icon: FaBaby }
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.id} className={styles.card}>
              <div className={styles.iconBox}>
                <svc.icon />
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
