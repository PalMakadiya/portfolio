import React from 'react';

const Loader: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <div style={{
        width: '32px',
        height: '32px',
        border: '3px solid hsla(var(--accent-primary), 0.15)',
        borderTopColor: 'hsl(var(--accent-primary))',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
