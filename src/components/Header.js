import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full bg-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <Link to="/">
          <img 
            src="/images/feriepartner-logo.png" 
            alt="Feriepartner Logo" 
            className="h-16 object-contain mb-4"
          />
        </Link>
        <nav className="w-full max-w-2xl">
          <ul className="flex justify-center space-x-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-slate-600 font-medium px-3 py-2 rounded-md transition-colors
                  ${isActive 
                    ? 'bg-slate-100 text-slate-900' 
                    : 'hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/employees" 
                className={({ isActive }) => 
                  `text-slate-600 font-medium px-3 py-2 rounded-md transition-colors
                  ${isActive 
                    ? 'bg-slate-100 text-slate-900' 
                    : 'hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                Employees
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;