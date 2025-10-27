import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DevSettings, { DEV_CONFIG } from './DevSettings';

function Layout() {
  const [devSettings, setDevSettings] = useState(DEV_CONFIG);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-white py-4">
        <Link to="/">
        <div className="container mx-auto flex justify-center">
          <img 
            src="/images/feriepartner-logo.png" 
            alt="Feriepartner Logo" 
            className="h-16 object-contain"
          />
        </div>
        </Link>
      </header>
      <main className="flex-1">
        <Outlet context={{ devSettings }} />
      </main>
      <DevSettings devSettings={devSettings} setDevSettings={setDevSettings} />
    </div>
  );
}

export default Layout;