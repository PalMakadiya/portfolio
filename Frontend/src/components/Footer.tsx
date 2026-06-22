import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          Designed &amp; Built by <span className={styles.highlight}>Pal Makadiya</span> &copy; {currentYear}
        </p>
        <div className={styles.links}>
          <a 
            href="https://github.com/PalMakadiya/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            className={styles.linkItem}
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/pal-makadiya-421331340" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className={styles.linkItem}
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:palmakadiya2005@gmail.com" 
            aria-label="Email" 
            className={styles.linkItem}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
