import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const btnClass = variant === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
  return (
    <button className={`${btnClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
