import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
return (
    <div className="min-h-screen bg-linen font-sans">
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-h1 text-slate-800 mb-2 text-center">Welcome to Ferie Partner Danmark</h1>
            <h2 className="text-h2 text-slate-700 mb-6 text-center">Your Gateway to Amazing Holidays</h2>
            <Link to="/employees">
                <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <h3 className="text-h3 text-slate-700 text-center">
                        View Employees Page to Meet Our Team
                    </h3>
                    <p className="text-p text-slate-600 mt-4 text-center">
                        See Employees Page to view our dedicated team members who make your holidays unforgettable.
                    </p>
                </div>
            </Link>
        </div>
    </div>
);
}

export default LandingPage;