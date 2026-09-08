import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Royal Air Maroc <span>Partner</span></h3>
            <p className={styles.disclaimer}>
              This is a booking partner website and not the official Royal Air Maroc website. 
              We offer exclusive deals and packages in partnership with RAM.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>About Us</h4>
              <a href="#">Our Partnership</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Customer Support</h4>
              <a href="#">Contact Us</a>
              <a href="#">FAQs</a>
              <a href="#">Baggage Info</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Legal</h4>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} Royal Air Maroc Partner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
