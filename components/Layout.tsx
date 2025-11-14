
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-primary-bg text-text-primary min-h-screen font-sans">
      {children}
    </div>
  );
};

export default Layout;
