import React from 'react';
import styles from './TechStack.module.css';
import { Cpu, Brain, Wrench } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      title: 'Technologies',
      icon: <Cpu className={styles.categoryIcon} size={24} />,
      items: [
        {
          name: 'React.js',
          color: '#61dafb',
          glow: 'rgba(97, 218, 251, 0.12)',
          desc: 'Build responsive, component-based user interfaces.',
          icon: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%">
              <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
              <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
          )
        },
        {
          name: 'Node.js',
          color: '#68a063',
          glow: 'rgba(104, 160, 99, 0.12)',
          desc: 'Run scalable server-side JavaScript applications.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#68a063" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="12 2 22 7 22 17 12 22 2 17 2 7 12 2" />
              <polyline points="2 7 12 12 22 7" />
              <line x1="12" y1="12" x2="12" y2="22" />
            </svg>
          )
        },
        {
          name: 'Express.js',
          color: '#818cf8',
          glow: 'rgba(129, 140, 248, 0.12)',
          desc: 'Create high-performance RESTful APIs and middleware.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#818cf8" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#818cf8" />
            </svg>
          )
        },
        {
          name: 'PostgreSQL',
          color: '#336791',
          glow: 'rgba(51, 103, 145, 0.12)',
          desc: 'Manage relational database schemas and SQL queries.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#336791" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#336791" />
            </svg>
          )
        },
        {
          name: 'MongoDB',
          color: '#4db33d',
          glow: 'rgba(77, 179, 61, 0.12)',
          desc: 'Store flexible JSON-like documents with dynamic queries.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#4db33d" strokeWidth="2">
              <path d="M12 2c0 0-6 4.5-6 10s6 10 6 10 6-4.5 6-10S12 2 12 2z" fill="#4db33d" />
              <path d="M12 2v20" />
            </svg>
          )
        },
        {
          name: 'JavaScript',
          color: '#f7df1e',
          glow: 'rgba(247, 223, 30, 0.08)',
          desc: 'Write modern ES6+ scripts and client-side logic.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#f7df1e">
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <path d="M18 17h-2.5v-1.5H18V17zm-4.5 0h-2v-5.5h2V17zm2-7.5v1.5h-4.5v-1.5h4.5z" fill="#000000" />
              <path d="M15.5 11.5v4H14v-4h1.5zm2.5 0v4H16.5v-4H18z" fill="#000000" />
            </svg>
          )
        },
        {
          name: 'HTML5',
          color: '#e34f26',
          glow: 'rgba(227, 79, 38, 0.12)',
          desc: 'Design semantic webpage layouts and structure.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#e34f26">
              <path d="M2.85 2L4.75 22 12 24 19.25 22 21.15 2l-18.3 0zm13.6 6.3h-7.1l-.3 3h7.1l-.6 6.4-3.5 1-3.5-1-.2-2.5h2.5l.1 1.1 1.1.3 1.1-.3.2-2H6.9l-.7-7.3h10.4l-.2 1.8z" />
            </svg>
          )
        },
        {
          name: 'CSS3',
          color: '#1572b6',
          glow: 'rgba(21, 114, 182, 0.12)',
          desc: 'Style webpages with responsive grids and animations.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#1572b6">
              <path d="M2.85 2L4.75 22 12 24 19.25 22 21.15 2l-18.3 0zm13.5 4.5l-.2 1.8H7l-.2 1.8h9.3l-.6 6.4-3.5 1-3.5-1-.2-2.5h2.5l.1 1.1 1.1.3 1.1-.3.2-2H6.5l-.5-5.5h10.9z" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'AI Tools',
      icon: <Brain className={styles.categoryIcon} size={24} />,
      items: [
        {
          name: 'Anthropic Claude',
          color: '#f59e0b',
          glow: 'rgba(245, 158, 11, 0.12)',
          desc: 'Analyze codebases and solve complex programming logic.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#f59e0b">
              <path d="M12 2L2 22h4l2.5-5.5h7l2.5 5.5h4L12 2zm-1 9.5L12 7l1 4.5h-2z" />
            </svg>
          )
        },
        {
          name: 'OpenAI GPT / o1',
          color: '#10a37f',
          glow: 'rgba(16, 163, 127, 0.12)',
          desc: 'Generate structured code schemas and translate syntax.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#10a37f" strokeWidth="2">
              <path d="M4.5 10.5C3.67 10.5 3 11.17 3 12s.67 1.5 1.5 1.5h6v-3h-6zm15 0h-6v3h6c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zM12 3c-.83 0-1.5.67-1.5 1.5v6h3v-6c0-.83-.67-1.5-1.5-1.5zm0 13.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6h-3zM8.5 7.5L6.38 5.38C5.8 4.8 4.86 4.8 4.28 5.38c-.58.58-.58 1.52 0 2.1L6.4 9.6l2.1-2.1zm9.12 9.12l2.12 2.12c.58.58 1.52.58 2.1 0 .58-.58.58-1.52 0-2.1l-2.12-2.12-2.1 2.1zM5.38 17.62c-.58.58-.58 1.52 0 2.1.58.58 1.52.58 2.1 0l2.12-2.12-2.1-2.1-2.12 2.12zm11.12-11.12l2.12-2.12c.58-.58.58-1.52 0-2.1-.58-.58-1.52-.58-2.1 0L14.4 6.5l2.1 2.1z" />
            </svg>
          )
        },
        {
          name: 'Google Gemini',
          color: '#3b82f6',
          glow: 'rgba(59, 130, 246, 0.12)',
          desc: 'Build native multimodal triggers and code flows.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#3b82f6">
              <path d="M12 2c0 5.52-4.48 10-10 10 5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z" />
            </svg>
          )
        },
        {
          name: 'GitHub Copilot',
          color: '#6366f1',
          glow: 'rgba(99, 102, 241, 0.12)',
          desc: 'Predict code statements in real-time as you develop.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#6366f1" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )
        },
        {
          name: 'Codex AI',
          color: '#ec4899',
          glow: 'rgba(236, 72, 153, 0.12)',
          desc: 'Translate natural instructions directly into scripting code.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#ec4899" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Tools',
      icon: <Wrench className={styles.categoryIcon} size={24} />,
      items: [
        {
          name: 'VS Code',
          color: '#007acc',
          glow: 'rgba(0, 122, 204, 0.12)',
          desc: 'Configure custom editor themes, shortkeys, and debugger logs.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#007acc">
              <path d="M23.9 6.5l-3.3-3.3c-.2-.2-.5-.1-.6.1L12.5 12 7.5 7.9c-.2-.2-.5-.1-.6.1L.1 14.5c-.2.2-.2.5 0 .7l3.3 3.3c.2.2.5.1.6-.1l7.5-7.5 5 4.1c.2.2.5.1.6-.1l7.8-6.5c.2-.2.2-.5 0-.7z" />
            </svg>
          )
        },
        {
          name: 'Postman',
          color: '#ff6c37',
          glow: 'rgba(255, 108, 55, 0.12)',
          desc: 'Run automated API testing calls and mock REST endpoints.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#ff6c37">
              <path d="M12 2L2 22h20L12 2zm0 4l6.5 12H5.5L12 6z" />
              <circle cx="12" cy="14" r="2" />
            </svg>
          )
        },
        {
          name: 'Git',
          color: '#f05032',
          glow: 'rgba(240, 80, 50, 0.12)',
          desc: 'Track local codebase versions and handle branch changes.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#f05032" strokeWidth="2">
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="6" y1="9" x2="6" y2="15" />
              <path d="M9 6h3a6 6 0 0 1 6 6v3" />
            </svg>
          )
        },
        {
          name: 'GitHub',
          color: '#ffffff',
          glow: 'rgba(255, 255, 255, 0.08)',
          desc: 'Host codebase repositories and manage PR pipelines.',
          icon: (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#ffffff">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="techstack" className="section">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.categoryBlock}>
            <div className={styles.categoryHeaderMain}>
              {cat.icon}
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
            </div>
            
            <div className={styles.cardsGrid}>
              {cat.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className={`${styles.techCard} glass-panel`}
                  style={{ 
                    '--brand-color': item.color,
                    '--brand-glow': item.glow 
                  } as React.CSSProperties}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.logoContainer}>
                      {item.icon}
                    </div>
                    <h4 className={styles.techName}>{item.name}</h4>
                  </div>
                  <p className={styles.techDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
