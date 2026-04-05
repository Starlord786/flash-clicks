// app/Home.js
import Image from 'next/image';
import styles from './Home.module.css'; 

export default function PhotographyHome() {
  const photos = [
    { id: 1, src: '/images/gallery-1.png', type: 'tall' },
    { id: 2, src: '/images/gallery-2.png', type: 'standard' },
    { id: 3, src: '/images/gallery-3.png', type: 'wide' },
    { id: 4, src: '/images/hero.png', type: 'standard' },
  ];

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>LUMINA</div>
        <div className={styles.navLinks}>
          <span>Work</span>
          <span>Studio</span>
          <span>Contact</span>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Capturing the <br /> <i>Sublime</i>
          </h1>
          <p className={styles.subtitle}>Fine art photography for the modern aesthetic.</p>
        </div>
      </header>

      <main className={styles.galleryContainer}>
        <div className={styles.grid}>
          {photos.map((photo) => (
            <div key={photo.id} className={`${styles.photoItem} ${styles[photo.type]}`}>
              <Image 
                src={photo.src} 
                alt="Photography work" 
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}