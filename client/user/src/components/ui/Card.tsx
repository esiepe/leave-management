import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ${className}`}>
      {children}
    </div>
  );
}