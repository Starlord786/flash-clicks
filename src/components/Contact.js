import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.central}>
          <h2 className="section-title">Enquire</h2>
          <p className={styles.desc}>Let's create timeless memories. We are currently booking for upcoming seasons.</p>
          <a href="mailto:hello@flashclicks.studio" className={styles.emailLink}>hello@flashclicks.studio</a>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>&copy; 2026 Flash Clicks.</span>
          <div className={styles.socials}>
            <a href="#">Instagram</a>
            <a href="#">Vero</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
