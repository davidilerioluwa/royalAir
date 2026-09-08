import React from 'react';
import styles from './PopularDestinations.module.css';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    name: 'Casablanca',
    country: 'Morocco',
    image: '/images/casablanca.png',
    price: 'From $499',
  },
  {
    id: 2,
    name: 'Marrakech',
    country: 'Morocco',
    image: '/images/marrakech.png',
    price: 'From $549',
  },
  {
    id: 3,
    name: 'Paris',
    country: 'France',
    image: '/images/paris.png',
    price: 'From $399',
  }
];

export default function PopularDestinations() {
  return (
    <section className={styles.section}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="section-title">Popular Destinations</h2>
        <div className={styles.grid}>
          {destinations.map((dest) => (
            <div key={dest.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.content}>
                <div>
                  <h3 className={styles.city}>{dest.name}</h3>
                  <p className={styles.country}>{dest.country}</p>
                </div>
                <div className={styles.priceTag}>
                  {dest.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
