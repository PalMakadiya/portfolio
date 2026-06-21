import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.grid}>
          <div className={styles.bioContainer}>
            <p className={styles.bioText}>
              I am a dedicated software developer passionate about building digital products that combine beautiful, interactive design with efficient backend architectures. Over the past few years, I have specialized in React-based frameworks and Node.js microservices.
            </p>
            <p className={styles.bioText}>
              My development philosophy focuses on writing clean, self-documenting code, enforcing structural database schemas, and maintaining high visual polish. I look to build things that are fast, accessible, and robust.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'hsl(var(--accent-secondary))' }}>My Principles</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <span style={{ color: 'hsl(var(--accent-primary))', fontWeight: 'bold' }}>✓</span> Pixel-perfect and highly interactive UI
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <span style={{ color: 'hsl(var(--accent-primary))', fontWeight: 'bold' }}>✓</span> Strictly typed and reliable schemas
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <span style={{ color: 'hsl(var(--accent-primary))', fontWeight: 'bold' }}>✓</span> Optimized loading speeds and SEO metrics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
