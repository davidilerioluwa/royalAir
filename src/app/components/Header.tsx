import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Royal Air Maroc</span>
          <span className={styles.partnerBadge}>Partner</span>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Book</a>
          <a href="#" className={styles.navLink}>Manage Booking</a>
          <a href="#" className={styles.navLink}>Experience</a>
          <a href="#" className={styles.navLink}>Destinations</a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.loginBtn}>Sign In</button>
        </div>
      </div>
    </header>
  );
}
