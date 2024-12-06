import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="mt-1">
          <input
            ref={ref}
            {...props}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';