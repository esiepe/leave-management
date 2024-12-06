import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500',
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
    >
      {children}
    </button>
  );
}