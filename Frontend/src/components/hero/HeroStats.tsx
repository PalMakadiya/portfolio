import React from 'react';
import styles from '../about/About.module.css'; // sharing highlights styling for consistency

const HeroStats: React.FC = () => {
  return (
    <div className={styles.highlights} style={{ marginTop: '0rem', width: '100%', maxWidth: '400px' }}>
      <div className="glass-panel" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRadius: '12px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 800, background: 'linear-gradient(135deg, hsl(var(--accent-primary)), hsl(var(--accent-secondary)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>3+</span>
        <span style={{ fontSize: '0.75rem', color: 'hsl(var(--text-secondary))', fontWeight: 500 }}>Years Exp</span>
      </div>
      <div className="glass-panel" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRadius: '12px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 800, background: 'linear-gradient(135deg, hsl(var(--accent-primary)), hsl(var(--accent-secondary)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>15+</span>
        <span style={{ fontSize: '0.75rem', color: 'hsl(var(--text-secondary))', fontWeight: 500 }}>Projects Done</span>
      </div>
    </div>
  );
};

export default HeroStats;
