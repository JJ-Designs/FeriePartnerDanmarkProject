import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DevSettings, { DEV_CONFIG } from './DevSettings';
import Header from './Header';

function Layout() {
  const [devSettings, setDevSettings] = useState(DEV_CONFIG);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet context={{ devSettings }} />
      </main>
      <DevSettings devSettings={devSettings} setDevSettings={setDevSettings} />
    </div>
  );
}

export default Layout;