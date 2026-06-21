import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {currentYear} Pal Makadiya. All rights reserved.
        </p>
        <p className={styles.subtext}>
          Built with React, TypeScript, Node.js, Express, and Prisma with PostgreSQL.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
