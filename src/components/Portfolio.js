'use client';

import { useState } from 'react';
import styles from './Portfolio.module.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ALL_PROJECTS = [
  { id: 1, title: 'Vogue Essentials', category: 'Weddings', image: '/portfolio_fashion.png', size: 'regular' },
  { id: 2, title: 'Dawn Mountains', category: 'Destination', image: '/portfolio_landscape.png', size: 'large' },
  { id: 3, title: 'Urban Shadows', category: 'Pre-Wedding', image: '/portfolio_fashion.png', size: 'regular' },
  { id: 4, title: 'Golden Hour', category: 'Weddings', image: '/portfolio_landscape.png', size: 'regular' },
  { id: 5, title: 'Cinematic Essence', category: 'Destination', image: '/portfolio_fashion.png', size: 'wide' },
];

const CATEGORIES = ['All', 'Weddings', 'Pre-Wedding', 'Destination'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [index, setIndex] = useState(-1);

  const filteredProjects = activeFilter === 'All' 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === activeFilter);

  const slides = filteredProjects.map(p => ({ src: p.image }));

  return (
    <section id="portfolio" className={`container ${styles.portfolioSection}`}>
      <div className={styles.header}>
        <h2 className="section-title">Selected Works</h2>
        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.activeFilter : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project, i) => (
          <div 
            key={project.id} 
            className={`${styles.gridItem} ${styles[project.size]}`}
            onClick={() => setIndex(i)}
          >
            <div className={styles.imageWrapper}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.image}
              />
              <div className={styles.overlayLabel}>
                <span className={styles.category}>{project.category}</span>
                <span className={styles.title}>{project.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </section>
  );
}
