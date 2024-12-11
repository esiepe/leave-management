// src/layouts/AuthLayout.tsx
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-boxdark-2 dark:text-bodydark flex items-center">
      {children}
    </div>
  );
};

export default AuthLayout;