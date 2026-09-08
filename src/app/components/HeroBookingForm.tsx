'use client';

import React, { useState } from 'react';
import styles from './HeroBookingForm.module.css';

export default function HeroBookingForm() {
  const [tripType, setTripType] = useState('round');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgImage}></div>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Let your dreams take flight</h1>
          <p className={styles.subtitle}>Experience authentic Moroccan hospitality with our partner network.</p>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.glassForm} onSubmit={handleSubmit}>
            <div className={styles.tabs}>
              <button
                type="button"
                className={`${styles.tab} ${tripType === 'round' ? styles.activeTab : ''}`}
                onClick={() => setTripType('round')}
              >
                Round Trip
              </button>
              <button
                type="button"
                className={`${styles.tab} ${tripType === 'one' ? styles.activeTab : ''}`}
                onClick={() => setTripType('one')}
              >
                One Way
              </button>
            </div>

            <div className={styles.inputGrid}>
              <div className={styles.inputGroup}>
                <label>From</label>
                <input type="text" placeholder="Origin city or airport" required />
              </div>
              <div className={styles.inputGroup}>
                <label>To</label>
                <input type="text" placeholder="Destination city or airport" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Departure</label>
                <input type="date" required />
              </div>
              {tripType === 'round' && (
                <div className={styles.inputGroup}>
                  <label>Return</label>
                  <input type="date" required />
                </div>
              )}
              <div className={styles.inputGroup}>
                <label>Passengers</label>
                <select>
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>Family</option>
                </select>
              </div>
            </div>

            <div className={styles.submitRow}>
              <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
                {loading ? 'Searching...' : submitted ? 'Search Completed!' : 'Search Flights'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
