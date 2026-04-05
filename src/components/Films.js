import styles from './Films.module.css';

const FILMS = [
  { id: 1, title: 'The Vows - Lake Como', image: '/portfolio_landscape.png' },
  { id: 2, title: 'Ethereal Romance', image: '/portfolio_fashion.png' },
];

export default function Films() {
  return (
    <section id="films" className={styles.filmsSection}>
      <div className="container">
        <h2 className="section-title">Cinematic Films</h2>
        <p className="section-subtitle">A collection of love stories told through motion.</p>
        
        <div className={styles.grid}>
          {FILMS.map(film => (
            <div key={film.id} className={styles.filmCard}>
              <div className={styles.imgWrapper}>
                <img src={film.image} alt={film.title} />
                <div className={styles.playOverlay}>
                   <div className={styles.playIcon}></div>
                </div>
              </div>
              <h3>{film.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
