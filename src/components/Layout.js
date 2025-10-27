import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-white py-4">
        <div className="container mx-auto flex justify-center">
          <img 
            src="/images/feriepartner-logo.png" 
            alt="Feriepartner Logo" 
            className="h-16 object-contain"
          />
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;