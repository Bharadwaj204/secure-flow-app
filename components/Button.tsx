
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  leftIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', leftIcon, className, ...rest }) => {
  const baseClasses = 'w-full flex items-center justify-center font-normal rounded-[7px] px-4 py-4 text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-form-bg';

  const variantClasses = {
    primary: 'bg-button-primary text-white hover:bg-gray-700 focus:ring-gray-600',
    secondary: 'bg-input-bg text-text-primary border border-border-gray hover:bg-border-gray focus:ring-secondary-gray',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...rest}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
    </button>
  );
};

export default Button;