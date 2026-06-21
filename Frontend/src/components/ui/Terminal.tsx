import React, { useState, useEffect } from 'react';
import styles from './Terminal.module.css';

const Terminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile.json' | 'status.sh' | 'principles.md'>('profile.json');
  const [typedText, setTypedText] = useState('');


  const profileContent = [
    '{',
    '  "name": "Pal Makadiya",',
    '  "role": "Full Stack Web Developer",',
    '  "experience": "6+ Months",',
    '  "focus": "Scalable APIs & Premium UX",',
    '  "available": true',
    '}'
  ].join('\n');

  const statusContent = [
    '$ ./check_status.sh',
    '[SYSTEM] Initializing PalMakadiya v2.0...',
    '[OK] Frontend: React & TypeScript responsive',
    '[OK] Backend: Node.js & Express APIs optimized',
    '[OK] Database: PostgreSQL & Prisma stable',
    '[STATUS] Ready to build next-gen web products!'
  ].join('\n');

  const principlesContent = [
    '# Core Developer Values',
    '- Clean & Scalable Code',
    '- Structural Database Integrity',
    '- Premium Animations & UX',
    '- Continuous Technological Growth'
  ].join('\n');

  useEffect(() => {
    let content = '';
    if (activeTab === 'profile.json') content = profileContent;
    else if (activeTab === 'status.sh') content = statusContent;
    else content = principlesContent;

    setTypedText('');
    let index = 0;
    
    // Quick typing simulation for premium fluid feel
    const interval = setInterval(() => {
      setTypedText((prev) => prev + content.charAt(index));
      index++;
      if (index >= content.length) {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className={styles.terminalWindow}>
      {/* Header bar */}
      <div className={styles.terminalHeader}>
        <div className={styles.windowControls}>
          <span className={`${styles.controlDot} ${styles.close}`}></span>
          <span className={`${styles.controlDot} ${styles.minimize}`}></span>
          <span className={`${styles.controlDot} ${styles.maximize}`}></span>
        </div>
        <div className={styles.terminalTitle}>pal.makadiya ~ zsh</div>
      </div>

      {/* Tabs list */}
      <div className={styles.terminalTabs}>
        <button 
          onClick={() => setActiveTab('profile.json')} 
          className={`${styles.tabButton} ${activeTab === 'profile.json' ? styles.activeTab : ''}`}
        >
          📄 profile.json
        </button>
        <button 
          onClick={() => setActiveTab('status.sh')} 
          className={`${styles.tabButton} ${activeTab === 'status.sh' ? styles.activeTab : ''}`}
        >
          ⚡ status.sh
        </button>
        <button 
          onClick={() => setActiveTab('principles.md')} 
          className={`${styles.tabButton} ${activeTab === 'principles.md' ? styles.activeTab : ''}`}
        >
          📝 principles.md
        </button>
      </div>

      {/* Terminal Screen content */}
      <div className={styles.terminalScreen}>
        <pre className={styles.terminalContent}>
          {typedText}
          <span className={styles.blinkingCursor}>_</span>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
