import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction({ 
  to, 
  title, 
  description, 
  className = ''
}) {
  return (
    <Link to={to}>
      <div className={`bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto 
        transform hover:scale-105 transition-transform duration-300 cursor-pointer ${className}`}
      >
        <h3 className="text-h3 text-slate-700 text-center">
          {title}
        </h3>
        {description && (
          <p className="text-p text-slate-600 mt-4 text-center">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}

export default CallToAction;