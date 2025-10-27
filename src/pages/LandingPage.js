import React from 'react';

function LandingPage() {
  return (
    <div style={{minHeight: '100vh'}} className="bg-purple-500">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-black text-blue-600 mb-6 text-center">Welcome to Ferie Partner Danmark</h1>
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <p className="text-purple-600 text-2xl font-bold text-center">
            Your trusted partner for employee vacation management
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;