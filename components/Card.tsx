
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-card-bg rounded-xl p-8 w-full max-w-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;
