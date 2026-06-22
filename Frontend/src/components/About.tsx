import React from 'react';
import styles from './About.module.css';
import Terminal from './ui/Terminal';
import CountUp from './ui/CountUp';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">About</span>
          <h2 className="section-title">About <span className="pink-text">Me</span></h2>
          <p className="section-description">
            A brief insight into my development philosophy, values, and experience.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Bio block */}
          <div className={styles.bioContainer}>
            <p className={styles.bioText}>
              I am a dedicated software developer passionate about building digital products that combine beautiful, interactive design with efficient backend architectures. Over the past few years, I have specialized in React-based frameworks and Node.js microservices.
            </p>
            <p className={styles.bioText}>
              My development philosophy focuses on writing clean, self-documenting code, enforcing structural database schemas, and maintaining high visual polish. I look to build things that are fast, accessible, and robust.
            </p>

            {/* Trust Bar (Stats) */}
            <div className={styles.trustBar}>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>
                  <CountUp end={6} />
                </span>
                <span className={styles.trustLabel}>Months Experience</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>
                  <CountUp end={2} suffix="+" />
                </span>
                <span className={styles.trustLabel}>Projects Delivered</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>
                  <CountUp end={10} suffix="+" />
                </span>
                <span className={styles.trustLabel}>Technologies</span>
              </div>
            </div>
          </div>

          <div className={styles.terminalContainer}>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
