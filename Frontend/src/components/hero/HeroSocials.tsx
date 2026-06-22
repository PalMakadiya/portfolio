import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Hero.module.css';

const HeroSocials: React.FC = () => {
  return (
    <div className={styles.socials}>
      <a href="https://github.com/PalMakadiya/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/pal-makadiya-421331340" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
        <Linkedin size={20} />
      </a>
      <a href="mailto:palmakadiya2005@gmail.com" className={styles.socialIcon} aria-label="Email">
        <Mail size={20} />
      </a>
    </div>
  );
};

export default HeroSocials;
