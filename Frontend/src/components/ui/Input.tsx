import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  textarea?: boolean;
  rows?: number;
  error?: string;
}

const Input: React.FC<InputProps & any> = ({ label, textarea = false, error, ...props }) => {
  const inputClass = "input";
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%' }}>
      {label && <label style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>{label}</label>}
      {textarea ? (
        <textarea className={inputClass} {...props}></textarea>
      ) : (
        <input className={inputClass} {...props} />
      )}
      {error && <span style={{ fontSize: '0.8rem', color: '#f87171' }}>{error}</span>}
    </div>
  );
};

export default Input;
