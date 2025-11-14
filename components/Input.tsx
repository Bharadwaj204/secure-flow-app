
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = ({ id, error, ...rest }) => {
  return (
    <div className="w-full">
      <input
        id={id}
        className={`w-full bg-input-bg rounded-lg px-6 py-4 text-text-primary placeholder-text-secondary focus:outline-none text-[17px] leading-[26px] transition-shadow duration-200 ${error ? 'ring-2 ring-red-500' : ''}`}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;