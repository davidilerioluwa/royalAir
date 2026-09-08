import React from 'react';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    id: 1,
    title: 'Authentic Moroccan Hospitality',
    description: 'Experience the warmth and traditions of Morocco from the moment you step on board.',
    icon: '☕'
  },
  {
    id: 2,
    title: 'Extensive Network',
    description: 'Connecting you to over 90 destinations worldwide with smooth transfers via Casablanca.',
    icon: '🌍'
  },
  {
    id: 3,
    title: 'Premium Comfort',
    description: 'Relax in our ergonomically designed seats with superior legroom and in-flight entertainment.',
    icon: '💺'
  },
  {
    id: 4,
    title: 'Safar Flyer Loyalty',
    description: 'Earn miles on every flight and unlock exclusive benefits with our award-winning program.',
    icon: '✨'
  }
];

export default function WhyChooseUsSlider() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">Why Choose Royal Air Maroc</h2>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {reasons.map((reason) => (
              <div key={reason.id} className={styles.slide}>
                <div className={styles.icon}>{reason.icon}</div>
                <h3 className={styles.slideTitle}>{reason.title}</h3>
                <p className={styles.slideDescription}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
