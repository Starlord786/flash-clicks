import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.split}`}>
        <div className={styles.imageCol}>
          <img src="/hero_photo.png" alt="Founder" />
        </div>
        <div className={styles.textCol}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Our Story</h2>
          <p>
            It began with an obsession for light and raw emotion. For over a decade, we have traveled the globe, turning fleeting glances into timeless cinematic artistry.
          </p>
          <p>
            We don't just take photographs; we document the legacy of your love. Every celebration is unique, and our approach is deeply personal—blending editorial direction with documentary authenticity.
          </p>
          <div className={styles.stats}>
            <div>
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>300+</h3>
              <span>Weddings</span>
            </div>
            <div>
              <h3>15</h3>
              <span>Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
