import React from 'react';

function InfoMessage({ 
  message, 
  variant = 'info' // Can be 'info', 'warning', or 'success'
}) {
  if (!message) return null;

  const variants = {
    info: 'bg-blue-50 text-slate-600',
    warning: 'bg-yellow-50 text-slate-600',
    success: 'bg-green-50 text-slate-600'
  };

  return (
    <div className={`text-center text-lg ${variants[variant]} p-4 rounded-md max-w-2xl mx-auto mt-8`}>
      {message}
    </div>
  );
}

export default InfoMessage;